import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT),
    secure: false, // puerto 587
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
    authMethod: "LOGIN",
    tls: {
      rejectUnauthorized: false,
    },
  });

  const fecha = new Date().toLocaleString("es-CO");

  try {
    const info = await transporter.sendMail({
      from: `"Formulario Web" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: "Nuevo mensaje",
      secure: true,
      headers: {
        "X-Priority": "3",
      },
      html: `
        <div style="font-family: Arial, sans-serif; font-size:14px;">
          <p>Has recibido un nuevo mensaje desde el formulario web.</p>

          <ul>
            <li><strong>Nombre:</strong> ${body.name}</li>
            <li><strong>Correo:</strong> ${body.correo}</li>
            <li><strong>Teléfono:</strong> ${body.telefono}</li>
            <li><strong>Fecha:</strong> ${body.fecha}</li>
            <li><strong>Tipo de eventos:</strong> ${body.tipoEvent}</li>
            
          </ul>

          <p>Fecha: ${fecha}</p>
          <hr />
          <p style="font-size:12px;color:#666;">
            Enviado automáticamente desde dgonzalezeventos.com
          </p>
        </div>
      `,
    });

    console.log("✅ Email enviado:", info.messageId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error enviando email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
