require 'xcodeproj'
project=Xcodeproj::Project.open('ios/App/App.xcodeproj')
app=project.targets.find { |t| t.name=='App' }
test=project.new_target(:ui_test_bundle, 'ReleaseSmokeTests', :ios, '15.0')
test.add_dependency(app)
file=project.main_group.new_file('ReleaseSmokeTests.swift')
test.source_build_phase.add_file_reference(file)
test.build_configurations.each do |config|
  config.build_settings['PRODUCT_BUNDLE_IDENTIFIER']='com.drlatham.nursinglearning.smoketests'
  config.build_settings['GENERATE_INFOPLIST_FILE']='YES'
  config.build_settings['PRODUCT_NAME']='ReleaseSmokeTests'
  config.build_settings['TARGETED_DEVICE_FAMILY']='1,2'
  config.build_settings['TEST_TARGET_NAME']='App'
  config.build_settings['SWIFT_VERSION']='5.0'
  config.build_settings['CODE_SIGNING_ALLOWED']='NO'
end
scheme=Xcodeproj::XCScheme.new
scheme.add_build_target(app)
scheme.add_build_target(test)
scheme.add_test_target(test)
scheme.set_launch_target(app)
project.save
scheme.save_as(project.path,'ReleaseSmoke',true)

release=Xcodeproj::XCScheme.new
release.add_build_target(app)
release.set_launch_target(app)
release.save_as(project.path,'App',true)
