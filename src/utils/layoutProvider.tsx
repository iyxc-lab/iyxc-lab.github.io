'use client'

import BottomNav from '@/ui/footer'
import HeaderComponent from '@/ui/header'
import { Content } from '@carbon/react'

interface LayoutProps {
    children: React.ReactNode
}
export const LayoutProvider = ({ children }: LayoutProps) => {
    return (
        <div>
            <HeaderComponent />
            <Content className="p-0">{children}</Content>
            <BottomNav />
        </div>
    )
}
