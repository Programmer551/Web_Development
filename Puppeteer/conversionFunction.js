const fs = require("fs");
const path = require("path");

function arrayToCSV(array, filePath) {
  console.log("WORKING");
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("The input must be a non-empty array of objects.");
  }

  // Extract keys and convert them to uppercase for the headers
  const keys = Object.keys(array[0]);
  const csvHeader = `COUNT,${keys.map((key) => key.toUpperCase()).join(",")}`;

  // Map the array objects to CSV rows, with a count as the first column
  const csvContent = array
    .map(
      (obj, index) =>
        `${index + 1},${keys
          .map((key) => `"${String(obj[key]).replace(/"/g, '""')}"`)
          .join(",")}`,
    )
    .join("\n");

  // Combine header and content
  const csv = `${csvHeader}\n${csvContent}`;
  const fullPath = path.resolve(filePath);

  // Write to file
  fs.writeFileSync(fullPath, csv, "utf8");
  console.log(`CSV file created at: ${fullPath}`);
}

module.exports = { arrayToCSV };
