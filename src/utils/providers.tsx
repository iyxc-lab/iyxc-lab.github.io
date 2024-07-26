'use client'

import HeaderComponent from '@/ui/header'
import { Content, Theme } from '@carbon/react'

interface ComponentProps {
    children: React.ReactNode
}
export const LayoutProvider = ({ children }: ComponentProps) => {
    return (
        <div>
            <Theme theme="g100">
                <HeaderComponent />
            </Theme>
            <Content>{children}</Content>
        </div>
    )
}
