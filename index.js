const fs = require('fs');
const path = require('path');
const imagesToPdf = require("images-to-pdf");
const imgDir = './img';
const pdfDir = './pdf';
let margeType = '';


if (process.argv.length > 2) {
    switch (process.argv[2]) {
        case "each":
            margeType = 'each';
            break;
        case "all":
            margeType = 'all';
            break;
        default:
            console.error("index.js [ each | all ] Invalid arg => " + process.argv[2])
            process.exit(-1)
    }
} else {
    margeType = 'each';
}



const converImgToPdf = (margeType) => {
  const imgNameList = fs.readdirSync(imgDir);

  if (margeType === 'each') {
    imgNameList.forEach((fileName) => {
      if (/\.png/.test(fileName)){
        const imgPath = path.join(imgDir, fileName);
        const pdfPath = path.join(pdfDir, fileName.split('.png')[0]+'.pdf');
        imagesToPdf([imgPath], pdfPath);
      }
    })
  }

  if (margeType === 'all') {
    const imgPathList = imgNameList.map((fileName) => {
      if (/\.png/.test(fileName)){
        return path.join(imgDir, fileName)
      }
    })
    const pdfPath = path.join(pdfDir, 'convertedPDF.pdf');
    imagesToPdf(imgPathList, pdfPath);
  }
}

converImgToPdf(margeType);
