'use client'

import {
    Header as CarbonHeader,
    HeaderContainer,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderName,
    HeaderNavigation,
    HeaderSideNavItems,
    SideNav,
    SideNavItems,
    SkipToContent,
} from '@carbon/react'

import { useTheme } from '@/utils/themeProvider'
import {
    Contrast,
    Notification,
    Translate,
    UserAvatar,
} from '@carbon/icons-react'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface RenderProps {
    isSideNavExpanded: boolean
    onClickSideNavExpand: () => void
}

const Header = () => {
    const { theme, toggleTheme } = useTheme()
    const { t, ready, i18n } = useTranslation()
    const [locale, setLocale] = useState(i18n.language)

    const handleThemeChange = () => {
        toggleTheme(theme === 'white' ? 'g100' : 'white')
    }
    const handleLocaleChange = () => {
        if (locale === 'zh') {
            i18n.changeLanguage('en')
            setLocale('en')
        } else {
            i18n.changeLanguage('zh')
            setLocale('zh')
        }
    }

    return (
        <HeaderContainer
            render={({
                isSideNavExpanded,
                onClickSideNavExpand,
            }: RenderProps) => (
                <CarbonHeader aria-label="Carbon Tutorial">
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Open menu"
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                    />
                    <Link href="/" passHref legacyBehavior>
                        <HeaderName prefix="AI LifeSci">Web Portal</HeaderName>
                    </Link>
                    <HeaderNavigation aria-label="AI LifeScil">
                        <Link href="/products" passHref legacyBehavior>
                            <HeaderMenuItem> {t('home.title')}</HeaderMenuItem>
                        </Link>
                    </HeaderNavigation>
                    <SideNav
                        aria-label="Side navigation"
                        expanded={isSideNavExpanded}
                        isPersistent={false}
                    >
                        <SideNavItems>
                            <HeaderSideNavItems>
                                <Link href="/products" passHref legacyBehavior>
                                    <HeaderMenuItem>Products</HeaderMenuItem>
                                </Link>
                            </HeaderSideNavItems>
                        </SideNavItems>
                    </SideNav>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction
                            aria-label="Notifications"
                            tooltipAlignment="center"
                            className="action-icons"
                        >
                            <Notification size={20} />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction
                            aria-label="User Avatar"
                            tooltipAlignment="center"
                            className="action-icons"
                        >
                            <UserAvatar size={20} />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction
                            aria-label="App Switcher"
                            tooltipAlignment="end"
                            onClick={handleLocaleChange}
                        >
                            <Translate size={20} />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction
                            aria-label="App Switcher"
                            tooltipAlignment="end"
                        >
                            <Contrast size={20} onClick={handleThemeChange} />
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                </CarbonHeader>
            )}
        />
    )
}

export default Header
