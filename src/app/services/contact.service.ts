import { Injectable } from '@angular/core';
//import Mailjet from 'node-mailjet';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  public async sendEmail(fullName: string, emailAddress: string, subject: string, msg: string) {
    console.log("sending")
    var newSubject = "Email: " + emailAddress + ";Name: " + fullName + ";Subject: " + subject + ";";
    var axios = require('axios');
    var data = JSON.stringify({
      "to": "dbajollari1@gmail.com",
      "subject": newSubject,
      "html": msg, 
      "api_key": "David123"
    });

    var config = {
      method: 'post',
      url: 'https://davidemailservice.azurewebsites.net/public/email',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    await axios(config)
      .then(function (response:any) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error:any) {
        console.log(error);
        throw error; 
      });

  }


  // sendEmail(fullName: string, emailAddress: string, subject: string, msg:string) {
  //   console.log("email sent!")
  //   //const mailjet = require('node-mailjet')
  //   //   .connect('5b0b076d7a31dcc89dcf0fd1e42f3442', 'd4f0737731509467637db43c2072adc6')
  //   console.log(process.env['MJ_APIKEY_PUBLIC'])
  //   const mailjet = new Mailjet({
  //     apiKey: process.env['MJ_APIKEY_PUBLIC'],
  //     apiSecret: process.env['MJ_APIKEY_PRIVATE']
  //   });
  //   const request = mailjet
  //     .post("send", { 'version': 'v3.1' })
  //     .request({
  //       "Messages": [
  //         {
  //           "From": {
  //             "Email": emailAddress,
  //             "Name": fullName
  //           },
  //           "To": [
  //             {
  //               "Email": "dbajollari1@yahoo.com",
  //               "Name": "David"
  //             }
  //           ],
  //           "Subject":subject,
  //           "TextPart": msg,
  //           "HTMLPart": "",
  //           "CustomID": "AppGettingStartedTest"
  //         }
  //       ]
  //     })
  //   request
  //     .then((result:any) => {
  //       console.log(result.body)
  //     })
  //     .catch((err:any) => {
  //       console.log(err.statusCode)
  //     })

  // }

}
