FROM 	node:lts

WORKDIR /opt/reporter
ADD index.js /opt/reporter
ADD report_downloader.js /opt/reporter
ADD mail_send.js /opt/reporter

RUN npm init -y
RUN npm i dotenv
RUN npm i nodemailer
RUN npm i node-cron
RUN npm i nodemon

CMD node .
