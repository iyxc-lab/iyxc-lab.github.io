'use client'

import { ArrowRight } from '@carbon/icons-react'
import { useTranslation } from 'react-i18next'

const Technology: React.FC<{
    type?: number
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
            <div style={{ height: '240px' }}>
                <div>
                    <p className="text-3xl">{name}</p>
                    <p>{content}</p>
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

export default Technology
