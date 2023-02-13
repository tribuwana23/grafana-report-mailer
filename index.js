const nodemailer = require('nodemailer');
const reporter = require("./mail_send.js");
const report_generator = require("./report_downloader.js");
var cron = require('node-cron');
require('dotenv').config();

async function download(url,fileName){
	await report_generator.downloader(url,fileName);
};

function send_report(){
    console.log("generating report and send to", process.env.RECEIVER);
    exp_report = download(process.env.REPORT_URL,"./report.pdf");
    exp_report.then(()=>
    reporter.send(process.env.RECEIVER,"./report.pdf")
    );
}

cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
    send_report();
  });
