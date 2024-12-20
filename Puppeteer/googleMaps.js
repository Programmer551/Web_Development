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
    "https://www.google.com/localservices/prolist?g2lbs=AOHF13nxNgWtHyixhF6q6yETArAT8GpWtG46s-opozDnZ-IAVKgRWP7bMP0Qri7nYzALiEB82nJ-MJTK7PvKvRU10phy3DwVeZPT3vyeKvXWPoCBi-z1Kss%3D&hl=en-PK&gl=pk&cs=1&ssta=1&oq=realtors%20in%20santa%20Ana&src=2&sa=X&q=dentist%20in%20karachi&ved=2ahUKEwiGh7OT7ZmJAxUtRR0JHb5RJK8QjdcJegQIABAF&scp=ChJnY2lkOmRlbnRhbF9jbGluaWMSABoAKg1EZW50YWwgY2xpbmlj&slp=MgBAAVIECAIgAIgBAJoBBgoCFxkQAA%3D%3D&lci=20",
  );

  const realtorHandles = await page.$$(".ykYNg > div");
  console.log(realtorHandles.length);
  for (const realtorHandle of realtorHandles) {
    let items = [];
    try {
      let name = await page.evaluate(
        (el) =>
          el.querySelector(
            "div.deyx8d > div > div > div > div.NwqBmc > div:nth-child(1) > div",
          )?.textContent || "NULL",
        realtorHandle,
      );
      let yearInBusiness = await page.evaluate(
        (el) =>
          el.querySelector(
            "div.deyx8d > div > div > div > div.NwqBmc > div:nth-child(2) > span.FjZRNe.hGz87c",
          )?.textContent || "NULL",
        realtorHandle,
      );

      let reviews = await page.evaluate(
        (el) =>
          el
            .querySelector(
              "div.deyx8d > div > div > div > div.NwqBmc > div:nth-child(2) > div > div.leIgTe",
            )
            ?.getAttribute("aria-label")
            .slice(0, -1) || "NULL",
        realtorHandle,
      );
      let website = await page.evaluate(
        (el) =>
          el
            .querySelector(
              "div.DyM7H > div > div > div > div > div > div:nth-child(1) > a > div",
            )
            ?.getAttribute("data-website-url") || "NULL",
        realtorHandle,
      );
      let phone = await page.evaluate(
        (el) =>
          el.querySelector(".Od1FEc")?.getAttribute("data-phone-number") ||
          "NULL",
        realtorHandle,
      );

      items.push({ name, reviews, website, yearInBusiness, phone });
    } catch (error) {
      console.log(error);
    }
  }

  // await browser.close();
})();
