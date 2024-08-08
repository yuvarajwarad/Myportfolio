import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail=process.env.FROM_EMAIL
export async function POST(req,res) {
  const {body}=await req.jason()
  const {email,subject,message}=body
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['https://waradys97@gmail.com',email],
      subject:subject ,
      react:( 
      <>
        <p>{subject}</p>
        <p>Thank you for contacting us!</p>
        <p>New message submit</p>
        <p>{message}</p>
      </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
