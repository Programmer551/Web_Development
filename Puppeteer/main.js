const puppeteer = require("puppeteer");
const { convertToCsv } = require("./conversionFunction");
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp",
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.amazon.com/b/?_encoding=UTF8&node=283155&pd_rd_w=Lpl89&content-id=amzn1.sym.73d958bd-6ca7-46ff-8084-5fcdad211985&pf_rd_p=73d958bd-6ca7-46ff-8084-5fcdad211985&pf_rd_r=W0TJAYQGTQC0DXVK08T4&pd_rd_wg=MdYz4&pd_rd_r=623ff5f4-f5b5-46ad-a5f0-a082c77d9a13&ref_=pd_hp_d_hero_unk",
    // { waitUntil: "load" },
  );
  // await page.waitForTimeout(5000);
  const bookHandles = await page.$$(
    "div.a-cardui._cDEzb_card_2os3u > div > div.p13n-gridRow._cDEzb_grid-row_3VsqC > #gridItemRoot",
  );
  console.log(bookHandles.length);
  for (const bookHandle of bookHandles) {
    let items = [];
    try {
      title = await page.evaluate(
        (el) => el.querySelector("div > span > div")?.textContent || "",
        bookHandle,
      );
      price = await page.evaluate(
        (el) =>
          el.querySelector("._cDEzb_p13n-sc-price_3mJ9Z")?.textContent ||
          "",
        bookHandle,
      );
      img = await page.evaluate(
        (el) =>
          el.querySelector(".a-dynamic-image")?.getAttribute("src") || "",
        bookHandle,
      );

      items.push({ title, price, img });
    } catch (error) {
      console.log(error);
    }
    console.log(items);
  }

  // await browser.close();
})();
