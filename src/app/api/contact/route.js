import { Resend } from "resend";

const resend = new Resend("re_c8WK7A3J_E4tvSApKbNk7iqpiztThPcna");

export async function POST(req) {
    try {
        const body = await req.json();
        const { fullName, email, city, mobileNumber, reason } = body;

        if (!fullName || !email || !city || !mobileNumber || !reason) {
            return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
        }

        await resend.emails.send({
            from: "onboarding@resend.dev", // must be verified domain/sender in Resend
            to: "hi@edukyu.com",
            subject: "New Contact Form Submission",
            text: `
        Name: ${fullName}
        Email: ${email}
        City: ${city}
        Mobile: ${mobileNumber}
        Reason: ${reason}
      `,
        });

        return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
        console.error("Resend error:", error);
        return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
    }
}
