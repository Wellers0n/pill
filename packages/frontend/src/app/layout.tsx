'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { SnackbarProvider } from 'notistack'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <html lang="en">
      <title>Wotree</title>
      <body className={inter.className} suppressHydrationWarning={true}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={1500}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </SnackbarProvider>
      </body>
    </html>
  )
}
