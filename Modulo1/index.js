const nodemailer = require("nodemailer");

async function main(){
    let transporter = nodemailer.createTransport(
        {
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "proyectotp2ort@hotmail.com",
            pass: "ort123tp2Tp",
          },
          tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
          },
        }
    )

let info = await transporter.sendMail({
    from: 'proyectotp2ort@hotmail.com', // sender address
    to: "irina.romero.ir@gmail.com", // list of receivers
    subject: "Entrada Cine", // Subject line
    text: "Hola Cine ", // plain text body
    html: "<b>Hola</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
main().catch(console.error);




