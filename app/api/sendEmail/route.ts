import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: any, res: NextApiResponse) {
  try {
    const data = await req.json();
    console.log(data);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rocket.hurghada@gmail.com",
        pass: "uxkh gbfu bxhe eaaa ",
      },
    });

    const mailOptions = {
      from: "rocket.hurghada@gmail.com",
      to: "samarelkady@foxtraveleg.com",
      subject: "New sales request",
      text: `
        name: ${data.name}
        email: ${data.email}
        phone number: ${data.phone}
        hotel location: ${data.location}
        guests: ${data.adults} adults - ${data.childs} childs - ${data.rooms} rooms
        checkin : ${data.checkin}
        checkout: ${data.checkout}
        message: ${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email", error);
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
