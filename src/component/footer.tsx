'use client'

import { ScientificComputing } from '@carbon/pictograms-react'
import { Column, FlexGrid, Row } from '@carbon/react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const BottomNav = () => {
    const { t } = useTranslation()
    return (
        <div className="p-12 text-xs w-full">
            <FlexGrid>
                <Row>
                    <Column lg={2}>
                        <ScientificComputing height={93} width={93} />
                    </Column>
                    <Column lg={2}>
                        <div>
                            <Link href="" className="ml-auto">
                                {t('footer.contact')}
                            </Link>
                        </div>
                        <div className="footer-margin">
                            <Link href="" className="ml-auto">
                                {t('footer.privacy')}
                            </Link>
                        </div>
                        <div className="footer-margin">
                            <Link href="" className="ml-auto">
                                {t('footer.help')}
                            </Link>
                        </div>
                        <div className="footer-margin">
                            <Link href="" className="ml-auto">
                                {t('footer.fontPage')}
                            </Link>
                        </div>
                    </Column>
                    <Column lg={2}>
                        <div>
                            <Link href="" className="ml-auto">
                                {t('footer.media')}
                            </Link>
                        </div>
                        <div className="footer-margin">
                            <Link href="" className="ml-auto">
                                {t('footer.weibo')}
                            </Link>
                        </div>
                        <div className="footer-margin">
                            <Link href="" className="ml-auto">
                                {t('footer.wechat')}
                            </Link>
                        </div>
                    </Column>
                </Row>
            </FlexGrid>
        </div>
    )
}

export default BottomNav
