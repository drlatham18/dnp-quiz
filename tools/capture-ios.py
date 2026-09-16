"""Capture the actual native app on fresh CI simulators, never a user's device."""
import json
import pathlib
import subprocess
import time


def sim(*args):
    return subprocess.check_output(['xcrun', 'simctl', *args], text=True).strip()


available = json.loads(sim('list', 'runtimes', '-j'))['runtimes']
runtimes = [r for r in available if r.get('isAvailable') and '.iOS-' in r['identifier']]
if not runtimes:
    raise RuntimeError('No available iOS simulator runtime')
runtime = max(runtimes, key=lambda r: tuple(int(v) for v in r['version'].split('.')))
types = json.loads(sim('list', 'devicetypes', '-j'))['devicetypes']
targets = [
    ('iphone', 'com.apple.CoreSimulator.SimDeviceType.iPhone-14-Plus'),
    ('ipad', 'com.apple.CoreSimulator.SimDeviceType.iPad-Pro-13-inch-M4-8GB'),
]
out = pathlib.Path('ios-screenshots')
out.mkdir(exist_ok=True)
app = pathlib.Path('build-ios/Build/Products/Release-iphonesimulator/App.app').resolve()
report = []
for name, identifier in targets:
    if not any(t['identifier'] == identifier for t in types):
        raise RuntimeError(f'Required screenshot device unavailable: {identifier}')
    udid = sim('create', f'Nursing Release {name}', identifier, runtime['identifier'])
    try:
        sim('boot', udid)
        sim('bootstatus', udid, '-b')
        sim('status_bar', udid, 'override', '--time', '9:41', '--batteryState', 'charged', '--batteryLevel', '100')
        sim('install', udid, str(app))
        launch = sim('launch', udid, 'com.drlatham.nursinglearning')
        time.sleep(15)
        sim('io', udid, 'screenshot', str(out / f'{name}-study-library.png'))
        report.append({'device':identifier, 'runtime':runtime['identifier'], 'launch':launch})
    finally:
        sim('shutdown', udid)
        sim('delete', udid)
(out/'capture.json').write_text(json.dumps(report, indent=2))
print(json.dumps(report, indent=2))
