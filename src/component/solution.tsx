'use client'

import { ArrowRight } from '@carbon/icons-react'
import { DesignResearch, TelemedicineMobile } from '@carbon/pictograms-react'
import { useTranslation } from 'react-i18next'

const Product: React.FC<{
    type: number
    name?: string
    content?: string
}> = ({ type, name, content }) => {
    const { t } = useTranslation()
    return (
        <div
            className={`${
                type == 1 ? 'border-right ' : ''
            } boder-solution h-400 p-20`}
        >
            <div className="flex-mode" style={{ height: '240px' }}>
                <div>
                    <p>{name}</p>
                    <p>{content}</p>
                </div>
                <div>
                    {type == 1 && <DesignResearch height={92} width={92} />}
                    {type == 2 && <TelemedicineMobile height={92} width={92} />}
                </div>
            </div>
            <div className="flex-mode">
                <div>
                    <p>{t('solution.searchProduct')}</p>
                </div>
                <div>
                    <ArrowRight size={40} />
                </div>
            </div>
        </div>
    )
}

export default Product
