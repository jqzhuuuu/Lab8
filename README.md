# Lab8_Starter

## Authors
Joshua Zhu
Nathaniel Wong

## Github Pages Link
https://jqzhuuuu.github.io/Lab8/

## Screenshot
![`npm test`](./npm_test_screenshot.png)

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
    1. Within a Github action that runs whenever code is pushed.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    - No, as there are too many moving parts for us to test, like writing the message, formatting, and even with the receiving end of the other user. In short, testing this feature is not testable as a unit.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
    - Yes, as this particular feature of the messaging application is easy to test as one individual part, and changing other app features shouldn't affect other unit tests.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
    - If "headless" is set to true, then the tests will be run without a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
```
beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.click('img[alt="settings"]')
    await page.waitForTimeout(500);
});
```
