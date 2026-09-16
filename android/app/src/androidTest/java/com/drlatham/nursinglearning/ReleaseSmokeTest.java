package com.drlatham.nursinglearning;
import android.webkit.WebView;
import androidx.test.core.app.ActivityScenario;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import org.junit.Test;
import org.junit.runner.RunWith;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
import static org.junit.Assert.*;

@RunWith(AndroidJUnit4.class)
public class ReleaseSmokeTest {
    private ActivityScenario<MainActivity> scenario;
    private String js(String script) throws Exception {
        CountDownLatch done = new CountDownLatch(1);
        AtomicReference<String> result = new AtomicReference<>();
        scenario.onActivity(a -> a.getBridge().getWebView().evaluateJavascript(script, value -> {result.set(value); done.countDown();}));
        assertTrue("WebView callback timed out", done.await(10, TimeUnit.SECONDS));
        return result.get();
    }
    private void until(String predicate, int seconds) throws Exception {
        long end=System.currentTimeMillis()+seconds*1000L;
        while(System.currentTimeMillis()<end) {
            if("true".equals(js("Boolean("+predicate+")"))) return;
            Thread.sleep(250);
        }
        fail("Native WebView check failed: "+predicate+"; page="+js("document.body.innerText.slice(0,1800)"));
    }
    @Test public void installedAppCompletesCoreFlows() throws Exception {
      try(ActivityScenario<MainActivity> opened=ActivityScenario.launch(MainActivity.class)) {
        scenario=opened;

        until("document.getElementById('bank-stats').textContent.includes('160 questions')", 30);
        js("document.getElementById('start-btn').click()");
        until("!document.getElementById('screen-quiz').hidden && document.querySelectorAll('#q-options button').length >= 2", 10);
        js("document.querySelector('#q-options button').click(); document.getElementById('submit-btn').click()");
        until("!document.getElementById('feedback').hidden && document.getElementById('feedback-rationale').textContent.length > 20", 10);
        until("document.querySelectorAll('#feedback-sources a').length > 0", 10);
        js("location.href='community.html'");
        until("document.body.innerText.includes('question') && document.querySelector('input[type=file]') !== null", 15);
        js("location.href='index.html'");
        until("!document.getElementById('daily-start').disabled", 30);
        js("document.getElementById('daily-start').click()");
        until("!document.getElementById('screen-quiz').hidden", 10);

      }
    }
}
