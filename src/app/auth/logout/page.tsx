import React from 'react'
import { signOut } from '../../../../auth'
import { redirect } from 'next/navigation'

const LogoutPage = async () => {
  try {
    await signOut()
  } catch (error) {
      redirect(`${window.location.href}`)
  }

  return null
}

export default LogoutPage