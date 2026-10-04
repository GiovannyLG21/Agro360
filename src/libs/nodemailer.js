import nodemailer from 'nodemailer'
import { FRONTEND_URL } from '../config/config.js'

//* Funcion enviar correo para recuperacion de contraseña
export function sendEmailResetPassword(res, data) {

  const { userEmail, token, userNames } = data
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ladigiococ@gmail.com',
      pass: 'xurdifznneprfewg'
    }
  })

 const mailOptions = {
    from: 'ladigiococ@gmail.com',
    to: userEmail,
    subject: 'Agro360 - recuperación de contraseña',
    html: `
    <article style="display: grid; place-self: center; height: 100%;">
        <div style="display: grid; grid-auto-flow: row; font-family: sans-serif; border: 2px solid lightgray; border-radius: 1rem; padding: 1rem;">
            <header style="width: 100%; background-color: #39A900; height: 80px; border-radius: .5rem; display: grid;">
                <img src="https://www.sena.edu.co/Paginas/img/logo-sena-blanco.png" alt="Sena Logo" style="height: 4rem; margin: auto;">
            </header>
            <h1 style="color: #39A900; text-align: center; margin-top: 1rem;">¡Hola, ${userNames}!</h1>
            <div style="text-align: center; margin-top: 1.5rem; color: black;">
                <p>Recibiste este correo porque solicitaste restablecer tu contraseña en Agro360. Si no solicitaste esto, puedes ignorar este correo.</p>
                <p>Para restablecer tu contraseña, haz clic en el siguiente enlace:</p>
                <p style="margin-top: 1rem;"><a href="${FRONTEND_URL}/reset-password/?token=${token}" style="color: #39A900; text-decoration: none; font-weight: bold;">Enlace de recuperación</a></p>
            </div>
            <p style="text-align: center; margin-top: 1rem; font-size: 0.75rem; color: black;">Este enlace es válido por un tiempo limitado.</p>
        </div>
    </article>`
}

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return console.log('Error al enviar el correo electrónico: ' + error);
    res.json({
      response: "Correo de recuperacion de contraseña enviado",
      info: info.response
    });
  });
}

//* Funcion enviar correo para obtener codigo
export function sendEmailFormCode(data) {
  const { formName, code, userEmail, userNames } = data

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ladigiococ@gmail.com',
      pass: 'xurdifznneprfewg'
    }
  })

  const mailOptions = {
    from: 'ladigiococ@gmail.com',
    to: userEmail,
    subject: 'Agro360 - Codigo',
    html: `<article style="display: grid; place-self: center; height: 100%;">
    <div
        style="display: grid; grid-auto-flow: row; font-family: sans-serif; border: 2px solid lightgray; border-radius: 1rem; padding: 1rem;">
        <header style="width: 100%; background-color: #39A900; height: 80px; border-radius: .5rem; display: grid;">
            <img src="https://www.sena.edu.co/Paginas/img/logo-sena-blanco.png" alt="Sena Logo"
                style="height: 4rem; margin: auto;">
        </header>
        <h1 style="color: #39A900; text-align: center;">Hola ${userNames}!</h1>
        <h2 style="font-weight: 400;">Has generado un codigo para responder la encuesta <span style="color: #39A900;">${formName}</span></h2>
        <h3 style="font-weight: 400;">Ingresa este codigo para acceder al formulario: <strong>${code}</strong></h3>
        <p>Recuerda que este codigo es de un solo uso y tendras un tiempo limitado para responder</p>
        <p>El equipo de Agro360 te desea <span style="color: #39A900;">Buena Suerte!</span> 🙌</p>
        <span style="font-size: 0.75rem;">Si no generaste ningun codigo omite este correo electronico</span>
    </div>
</article>`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) throw new Error(`Error al enviar el correo electrónico: ${error}`)
  });
}

