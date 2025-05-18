import { Resend } from 'resend'
import type { H3Event } from 'h3'

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event)
    const { email } = body

    if (!email) {
      return { error: 'Email is required.' }
    }

    // Add the email to the "General" audience
    await resend.contacts.create({
      email: email,
      audienceId: '3a997e73-3f45-423f-9308-0e71a3444b64',
      unsubscribed: false
    })

    // Send the confirmation email
    await resend.emails.send({
      from: 'Intersubjective <newsletter@intersubjective.space>',
      to: [email],
      subject: 'You\'ve subscribed to Intersubjective newsletter',
      html: `
        <p>Hello!</p>
        <p>Thank you for subscribing to the Intersubjective newsletter.</p>
        <p>We'll share with you the latest updates, ideas, and announcements.</p>
        <p>If you didn't subscribe, please ignore this email.</p>
        <br/>
        <p>— The Intersubjective Team</p>
      `,
    })

    return { success: true, message: 'Subscription confirmed and email sent.' }
  }
  catch (error) {
    console.error('Subscription error:', error)
    return { error: 'Failed to process subscription. Please try again later.' }
  }
})
