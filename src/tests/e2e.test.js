import puppeteer from "puppeteer";

describe("Login E2E", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("Test login", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("#login");
    await page.click("#login");
    await page.type("#login", "user2");
    await page.waitForSelector("#password");
    await page.click("#password");
    await page.type("#password", "zaq1@WSX");
    await page.click("#signIn");
    await page.waitForSelector("#customLoginInfo")
    const text = await page.$eval("#customLoginInfo", (e) => e.textContent);
    expect(text).toContain("user2");
  },1000000);

  afterAll(() => browser.close());
});