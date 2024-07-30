import { LayoutProvider } from '@/utils/layoutProvider'
import { ThemeProdiver } from '@/utils/themeProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'AI LifeSci',
    description: 'Web Portal',
}

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProdiver>
                    <LayoutProvider>{children}</LayoutProvider>
                </ThemeProdiver>
            </body>
        </html>
    )
}
export default RootLayout
