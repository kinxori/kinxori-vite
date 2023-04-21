const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");
// dotenv.config();

const transport = nodemailer.createTransport({

    service: "Gmail",
    auth: {
        user: "quirozocampog@gmail.com",
        pass: "zmcqndjovbdkxecw",
    },
});

// VERIFY IF NODEMAILER IS ACCESSING TO MY ACCOUNT WITH THE PLAIN CREDENTIALS 

transport.verify()
    .then(() => {
        console.log("SMTP server connection successful 🚀");
    })
    .catch((error:any)=> {
        console.error("SMTP server connection error 🥺:", error);
    });

const sendContactForm = (form:any)=>{
    return transport
    .sendMail({
        subject: "Te ha llegado un correo 👺",
        bcc: "gustavoq26@gmail.com",
        html: `<h3>Te llegó un correo</h3>
        <p> From: ${form.email} </p>
        <p> Message: ${form.message} </p>
        `,
    })
    .then((r:any) =>{
        console.log("accepted🤝", r.accepted)
        console.log("rejected👺", r.rejected)
    })
    .catch((e:any)=>console.log("If you see this, sender function is not working 🥲",e))
}

exports.formFunction = functions.https.onRequest((request:any, response:any)=>{

    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'POST');
    response.set('Access-Control-Allow-Headers', 'Content-Type');

    console.log("body 👀", request.body)

    if (request.method === "OPTIONS"){
        response.status(204).send("");
    }
    else if(request.body.secret !== "homelo") {
        response.json({ message:"Secret failed 👺" });
    }
     else  { 
        sendContactForm(request.body);
        return response.json({ message:"Email sent! 🛐" });
    }
});