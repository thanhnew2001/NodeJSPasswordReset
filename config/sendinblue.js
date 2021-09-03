const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

exports.sendMail  = (email, hash)=>{

    sendSmtpEmail.subject = "Xác nhận email";
    sendSmtpEmail.htmlContent = `<html>
    <body><h1>Vui lòng nhấn vào đây để xác nhận email</h1>
    <a href='http://localhost:4001/verify?email=${email}&hash=${hash}'>Xác nhận</a>
    </body></html>`
    sendSmtpEmail.sender = {"name":"Quản lý Covid","email":"no-reply@covid.manage"};
    sendSmtpEmail.to = [{"email":email,"name": email}];
    //sendSmtpEmail.cc = [{"email":"nguyengocthaoanh1501@gmail.com","name":"Janice Doe"}];
    // sendSmtpEmail.bcc = [{"email":"John Doe","name":"example@example.com"}];
    // sendSmtpEmail.replyTo = {"email":"replyto@domain.com","name":"John Doe"};
    // sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
    // sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};

    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }, function(error) {
    console.error(error);
    })

}

exports.sendMailResetPassword  = (email, hash)=>{

    sendSmtpEmail.subject = "Khôi phục mật khẩu";
    sendSmtpEmail.htmlContent = `<html>
    <body><h1>Vui lòng nhấn vào đây để khôi phục mật khẩu</h1>
    <a href='http://localhost:4001/resetpwd?email=${email}&hash=${hash}'>Xác nhận</a>
    </body></html>`
    sendSmtpEmail.sender = {"name":"Quản lý Covid","email":"no-reply@covid.manage"};
    sendSmtpEmail.to = [{"email":email,"name": email}];
    //sendSmtpEmail.cc = [{"email":"nguyengocthaoanh1501@gmail.com","name":"Janice Doe"}];
    // sendSmtpEmail.bcc = [{"email":"John Doe","name":"example@example.com"}];
    // sendSmtpEmail.replyTo = {"email":"replyto@domain.com","name":"John Doe"};
    // sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
    // sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};

    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }, function(error) {
    console.error(error);
    })

}