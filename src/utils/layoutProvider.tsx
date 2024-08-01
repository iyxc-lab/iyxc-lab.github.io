'use client'

import BottomNav from '@/component/footer'
import HeaderComponent from '@/component/header'
import { Content } from '@carbon/react'

interface LayoutProps {
    children: React.ReactNode
}
export const LayoutProvider = ({ children }: LayoutProps) => {
    return (
        <div>
            <HeaderComponent />
            <Content className="p-0">
                <div style={{ minHeight: 'calc(100vh - 272px)' }}>
                    {children}
                </div>
            </Content>
            <BottomNav />
        </div>
    )
}
