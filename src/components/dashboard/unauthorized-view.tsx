"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
import { createBrowserClient } from '@supabase/ssr'

export default function UnauthorizedView() {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Unauthorized</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            You are not authorized to view this page. Please log in to continue.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <p 
          className='
          text-white cursor-pointer hover:underline
          px-4 py-2 bg-primaryColor rounded-md
          '
          onClick={async () => {
                      const { data, error } =
                        await supabase.auth.signInWithOAuth({
                          provider: 'google',
                          options: {
                            queryParams: {
                              access_type: 'offline',
                              prompt: 'consent',
                            },
                            redirectTo: `${window.location.origin}/home/dashboard`,
                          },
                        })
                      if (error)
                        console.error('Error logging in:', error.message)
                    }}>
            Log in
                    </p>
        </CardFooter>
      </Card>
    </div>
  )
}
