import { loadStripe } from '@stripe/stripe-js'

export async function getStripeJs() {
    const stripeJs = await loadStripe("pk_test_51LSA7eA6CB3bU8tT4MkhNxkuK3M24Oka371uKLiseaqDallQNfwiuqfxRuQo3pT3H8viBn6ZO96X7s0OAnYott8n00H2UJlS1d")
    return stripeJs;
}