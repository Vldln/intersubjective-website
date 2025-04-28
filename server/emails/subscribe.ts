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

    return { success: true, message: 'Subscription confirmation email sent.' }
  }
  catch (error) {
    console.error('Subscription error:', error)
    return { error: 'Failed to send email. Please try again later.' }
  }
})
