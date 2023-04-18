const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");
// dotenv.config();

const transport = nodemailer.createTransport({

    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,

    service: "Gmail",
    auth: {
        email: "quirozocampog@gmail.com",
        pass: "kvbttithyjltexfl",
    },
});

// VERIFY IF NODEMAILER IS ACCESSING TO MY ACCOUNT WITH THE PLAIN CREDENTIALS 

transport.verify()
    .then(() => {
        console.log("💋SMTP server connection successful");
    })
    .catch((error:any)=> {
        console.error("🛐SMTP server connection error:", error);
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
    .catch((e:any)=>console.log("IF you see this theres an error 🥲",e))
}

exports.formFunction = functions.https.onRequest((request:any, response:any)=>{

    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, POST');
    response.set('Access-Control-Allow-Headers', 'Content-Type');

    console.log("body🍿", request.body)

    if (request.method === "OPTIONS"){
        response.status(204).send("");
    }
    else if(request.body.secret !== "homelo")
        return response.json({ message:"Wrong secret 👺" });
        sendContactForm(request.body);
        return response.json({ message:"Sending Email 🛐" });
});