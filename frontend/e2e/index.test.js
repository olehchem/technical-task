import puppeteer from 'puppeteer';

const baseUrl = 'http://localhost:3000';

const routes = {
  phonesList: `${baseUrl}/`,
  phoneDetails: `${baseUrl}/phones/:id`,
};

let browser;
let page;

const spinnerSelector = '.spinner';
const phoneListContainerSelector = '.phone-list-container';
const pageTitleSelector = '.page-header';
const phoneTileSelector = '.phone-tile';
const phoneDetailsContainerSelector = '.phone-details';

const PHONES_COUNT = 6;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
  });
  page = await browser.newPage();
});

afterAll(() => {
  browser.close();
});

describe('Phones list page', () => {
  test('shows spinner while the phones are being fetched', async () => {
    await page.goto(routes.phonesList);
    await page.waitForSelector(spinnerSelector);
  });

  test('shows phones list and page title', async () => {
    await page.goto(routes.phonesList);
    await page.waitForSelector(phoneListContainerSelector);

    const pageHeader = await page.evaluate(
      selector => document.querySelector(selector).innerText,
      pageTitleSelector,
    );

    const phonesCount = await page.evaluate(
      selector => document.querySelectorAll(selector).length,
      phoneTileSelector,
    );

    expect(pageHeader).toBe('Phones List');
    expect(phonesCount).toBe(PHONES_COUNT);
  });

  test('emphasize hovered phone tile', async () => {
    await page.goto(routes.phonesList);
    await page.waitForSelector(phoneListContainerSelector);
    await page.hover(phoneTileSelector);

    const tileBoxShadow = await page.evaluate(
      selector => window.getComputedStyle(document.querySelector(selector)).boxShadow,
      phoneTileSelector,
    );

    expect(tileBoxShadow).toBe('rgba(0, 0, 0, 0.25) 0px 0px 15px 6px');
  });

  test('redirects to phone details after tile click', async () => {
    await page.goto(routes.phonesList);
    await page.waitForSelector(phoneListContainerSelector);
    await page.click(phoneTileSelector);

    expect(page.url()).toMatch(/phones/);
  });
});

describe('Phone details page', () => {
  test('shows spinner while the phone details are being fetched', async () => {
    await page.goto(routes.phoneDetails.replace(':id', 'id-1'));
    await page.waitForSelector(spinnerSelector);
  });

  test('shows phone details', async () => {
    await page.goto(routes.phoneDetails.replace(':id', 'id-1'));
    await page.waitForSelector(phoneDetailsContainerSelector);
  });
});
