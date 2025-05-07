// convert-to-webp.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const folders = [
  path.join(__dirname, "public", "images"),
  path.join(__dirname, "public", "thumbnails")
];

folders.forEach(folder => {
  fs.readdirSync(folder).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);

    if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
      const inputFilePath = path.join(folder, file);
      const outputFilePath = path.join(folder, `${baseName}.webp`);

      sharp(inputFilePath)
        .webp({ quality: 80 })
        .toFile(outputFilePath)
        .then(() => console.log(`Converted ${file} → ${baseName}.webp`))
        .catch(err => console.error(`Error converting ${file}:`, err));
    }
  });
});
