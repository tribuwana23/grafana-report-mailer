const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');

module.exports = {
  downloader: function(reportURL,fileName){
    return new Promise(resolve => {
      const file = fs.createWriteStream(fileName);
      const request = http.get(reportURL, function(response) {
       response.pipe(file);
    
       // after download completed close filestream
       file.on("finish", () => {
           file.close();
           console.log("Complete Generated Report !!");
           resolve('selesai');
       });
    });
    });
  }
}