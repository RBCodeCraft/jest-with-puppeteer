
jest.setTimeout(10000);

describe('Google', () => {

    beforeAll(async () => {
        await page.goto('https://google.com');
    });

    it('should display "google" text on page', async () => {
        await expect(page).toMatch('google');
    });

    it('can enter text in search box', async () => {
        await expect(page).toFill('input[name="q"]', 'RevJS');
        await new Promise((resolve) => setTimeout(resolve, 5000));
    });

});
