const fs = require('fs');
const path = require('path');
const imagesToPdf = require("images-to-pdf");
const imgDir = './img';
const pdfDir = './pdf';


const converImgToPdf = () => {
  const imgNameList = fs.readdirSync(imgDir);
  for (let i = 0; i < imgNameList.length; i++) {
    if (/\.png/.test(imgNameList[i])) {
      const imgPath = path.join(imgDir, imgNameList[i]);
      const pdfPath = path.join(pdfDir, imgNameList[i].split('.png')[0]+'.pdf');
      imagesToPdf([imgPath], pdfPath);
    }
  }
}

converImgToPdf();
