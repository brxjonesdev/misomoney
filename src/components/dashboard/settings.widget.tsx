'use client'

import { createBrowserClient } from '@supabase/ssr'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { useRouter } from 'next/navigation'
  

export default function Settings() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
  const router = useRouter()
  const [isInteractingWithServer, setIsInteractingWithServer] = React.useState(false)
  const [logoutMessage, setLogoutMessage] = React.useState('Logout')

  const handleLogout = async () => {
    setIsInteractingWithServer(true)
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error logging out:', error.message)
      setTimeout(() => setIsInteractingWithServer(false), 2000)

    }
    if (!error) {
        setIsInteractingWithServer(false)
        setTimeout(() => setLogoutMessage('Bye!'), 2000)
      router.push('/')
    }
  }
  return (
    <DropdownMenu>
  <DropdownMenuTrigger className='hidden md:block bg-secondaryColor p-2 rounded-sm px-4 hover:bg-primaryColor '>
    Settings
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Settings Menu</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem className='p-2' onClick={handleLogout}>{logoutMessage}</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}
