import XCTest
final class ReleaseSmokeTests: XCTestCase {
    func testInstalledApplication() throws {
        let app=XCUIApplication()
        continueAfterFailure=false
        app.launch()
        XCTAssertTrue(app.webViews.firstMatch.waitForExistence(timeout:30))
        let daily=app.buttons["Try today’s question"]
        XCTAssertTrue(daily.waitForExistence(timeout:30))
        XCTAssertTrue(XCTWaiter.wait(for: [XCTNSPredicateExpectation(predicate:NSPredicate(format:"enabled == true"), object:daily)], timeout:30) == .completed)
        daily.tap()
        XCTAssertTrue(app.buttons["Check answer"].waitForExistence(timeout:10))
        let option=app.buttons.matching(NSPredicate(format:"label BEGINSWITH 'A'")).firstMatch
        XCTAssertTrue(option.waitForExistence(timeout:10))
        option.tap()
        let check=app.buttons["Check answer"]
        for _ in 0..<5 { if check.isHittable { break }; app.webViews.firstMatch.swipeUp() }
        check.tap()
        XCTAssertTrue(app.staticTexts.matching(NSPredicate(format:"label CONTAINS 'Correct' OR label CONTAINS 'Not quite'")).firstMatch.waitForExistence(timeout:10))
        let image=XCTAttachment(screenshot: app.screenshot())
        image.name="Native app after interaction"
        image.lifetime = .keepAlways
        add(image)
    }
}
