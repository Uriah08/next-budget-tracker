"use server"

import { auth } from '@/auth'
import { db } from '@/lib/db'

export async function updateCurrency(currency: string) {
  const session = await auth()

  if(!session?.user?.id) {
    return { error: "Invalid ID"}
  }

  await db.user.update({
    where: { id : session.user.id },
    data: { currency },
  })
}

export async function getCurrency() {
  const session = await auth()

  if(!session?.user?.id) {
    throw new Error('Invalid User ID')
  }

  const currency = await db.user.findUnique({
    where: { id: session.user.id }
  })

  if( !currency ) {
    throw new Error('User has no currency set')
  }

  return currency.currency
}