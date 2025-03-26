import { Resend } from "resend";
import type { H3Event } from "h3";

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY);

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event);
    const config = useRuntimeConfig();
    const { email, subject, message } = body;
    return await resend.emails.send({
      from: "Intersubjective <contact@intersubjective.space>",
      to: [config.public.contactEmail as string],
      subject: "New message from Intersubjective",
      html: `
      <p>A new message has been sent from the contact form of Intersubjective.</p>
      <p>Here are the details of the message :</p>
      <ul>
        <li>Email : ${email}</li>
        <li>Subject : ${subject}</li>
        <li>Message : ${message}</li>
      </ul>
      `,
    });
  } catch (error) {
    return { error };
  }
});
