const { Cluster } = require("puppeteer-cluster");
const { arrayToCSV } = require("./conversionFunction");
const urls = [
  "https://www.google.com/localservices/prolist?g2lbs=AOHF13nxNgWtHyixhF6q6yETArAT8GpWtG46s-opozDnZ-IAVKgRWP7bMP0Qri7nYzALiEB82nJ-MJTK7PvKvRU10phy3DwVeZPT3vyeKvXWPoCBi-z1Kss%3D&hl=en-PK&gl=pk&cs=1&ssta=1&oq=realtors%20in%20santa%20Ana&src=2&sa=X&q=dentists%20in%20santa%20Ana&ved=2ahUKEwjzhru_z_iHAxXKIQYAHUPtMoEQjdcJegQIABAF&scp=CgxnY2lkOmRlbnRpc3QSABoAKgdEZW50aXN0&slp=MgBAAVIECAIgAIgBAJoBBgoCFxkQAA%3D%3D&lci=20",
  "https://www.google.com/localservices/prolist?g2lbs=AOHF13nxNgWtHyixhF6q6yETArAT8GpWtG46s-opozDnZ-IAVKgRWP7bMP0Qri7nYzALiEB82nJ-MJTK7PvKvRU10phy3DwVeZPT3vyeKvXWPoCBi-z1Kss%3D&hl=en-PK&gl=pk&cs=1&ssta=1&q=realtors%20in%20santa%20Ana&oq=realtors%20in%20santa%20Ana&slp=MgBSAggCYACSAaQCCgwvZy8xMjRzcTg5dl8KDS9nLzExcXFwenQ1dmgKDS9nLzExYndoNHF0cHQKCy9nLzF2Ymw3d3c1Cg0vZy8xMWZ2YmIzNG1zCg0vZy8xMXJuZGJkam0wCg0vZy8xMWp2cWo3bnI4Cg0vZy8xMWZ3YmtuNjRjCg0vZy8xMXRmZjkzajdnCg0vZy8xMXJuNHJ0NzNiCg0vZy8xMWM3dzE1MWJyCgsvZy8xdGRrYmNoMwoLL2cvMXRndmR5YnQKDS9nLzExbV94X3Zqd20KDS9nLzExaHoyMTFiXzgKDS9nLzExZms2XzVqczUKDS9nLzExZjQwbHNkejQKDC9nLzEyNjFmMXJmawoNL2cvMTFidnQzbmg5NQoNL2cvMTFiN2h2d256Z5oBBgoCFxkQAA%3D%3D&src=2&serdesk=1&sa=X&ved=2ahUKEwjf89Ge2vaHAxVWR_EDHdQqD-YQjGp6BAgrEAE&scp=ChdnY2lkOnJlYWxfZXN0YXRlX2FnZW50cxJUEhIJhTCCbJXb3IARvP0eHzqET8caEgnP99VUXJLcgBEH1vCPYcOm3iISU2FudGEgQW5hLCBDQSwgVVNBKhQNPPAUFBWeLrO5HQQIIxQl-IPEuTAAGghyZWFsdG9ycyIVcmVhbHRvcnMgaW4gc2FudGEgQW5hKgxFc3RhdGUgYWdlbnQ%3D&lci=20",
];
(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 2,
    monitor: true,
    puppeteerOptions: {
      headless: false,
      defaultViewport: false,
      userDataDir: "./tmp",
    },
  });

  await cluster.task(async ({ page, data: url }) => {
    await page.goto(url, { waitUntil: "load" });
    // await page.waitForTimeout(5000);
    const realtorHandles = await page.$$(".ykYNg > div");
    let items = [];
    let bool = true;

    while (bool) {
      for (const realtorHandle of realtorHandles) {
        try {
          let name = await page.evaluate(
            (el) =>
              el.querySelector(
                "div.deyx8d > div > div > div > div.NwqBmc > div:nth-child(1) > div",
              )?.textContent || "",
            realtorHandle,
          );
          let yearInBusiness = await page.evaluate(
            (el) =>
              el.querySelector(
                "div.deyx8d > div > div > div > div.NwqBmc > div:nth-child(2) > span.FjZRNe.hGz87c",
              )?.textContent || "",
            realtorHandle,
          );

          let reviews = await page.evaluate(
            (el) =>
              el
                .querySelector(
                  "div.deyx8d > div > div > div > div.NwqBmc > div:nth-child(2) > div > div.leIgTe",
                )
                ?.getAttribute("aria-label")
                .slice(0, -1) || "",
            realtorHandle,
          );
          let website = await page.evaluate(
            (el) =>
              el
                .querySelector(
                  "div.DyM7H > div > div > div > div > div > div:nth-child(1) > a > div",
                )
                ?.getAttribute("data-website-url") || "",
            realtorHandle,
          );
          let phone = await page.evaluate(
            (el) =>
              el.querySelector(".Od1FEc")?.getAttribute("data-phone-number") ||
              "",
            realtorHandle,
          );
          if (name == "") {
          } else {
            items.push({
              name: name,
              reviews: reviews,
              website: website,
              yearInBusiness: yearInBusiness,
              phone: phone,
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
      try {
        await page.waitForSelector(
          "#yDmH0d > c-wiz > div > div:nth-child(3) > div > div > div.XJInM > div.YhtaGd.aQOEkf > div.jq95K > c-wiz > div > div > div.LOBMz > div:nth-child(2) > div > button",
        );

        await page.click(
          "#yDmH0d > c-wiz > div > div:nth-child(3) > div > div > div.XJInM > div.YhtaGd.aQOEkf > div.jq95K > c-wiz > div > div > div.LOBMz > div:nth-child(2) > div > button",
        ),
          console.log("Length", items.length);
      } catch (error) {
        bool = false;
      }
    }
    // console.log(items);
    try {
      let num = Math.floor(Math.random() * 1000000000000);

      arrayToCSV(items, `${num}.csv`);
    } catch (error) {
      console.log(error);
    }

    console.log("WORKED");
  });
  for (const url of urls) {
    await cluster.queue(url);
  }
  //   cluster.queue("http://www.google.com/");
  //   cluster.queue("http://www.wikipedia.org/");
  // many more pages

  await cluster.idle();
  //   await cluster.close();
})();
