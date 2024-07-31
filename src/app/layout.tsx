'use client'

import { LayoutProvider } from '@/utils/layoutProvider'
import { ThemeProdiver } from '@/utils/themeProvider'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'

import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//     title: 'AI LifeSci',
//     description: 'Web Portal',
// }

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProdiver>
                    <I18nextProvider i18n={i18n}>
                        <LayoutProvider>{children}</LayoutProvider>
                    </I18nextProvider>
                </ThemeProdiver>
            </body>
        </html>
    )
}
export default RootLayout
