'use client'

import { ArrowRight } from '@carbon/icons-react'
import { HardDriveNetwork } from '@carbon/pictograms-react'
import { useTranslation } from 'react-i18next'

const Technology: React.FC<{
    type?: number
    name?: string
    content?: string
}> = ({ type, name, content }) => {
    const { t } = useTranslation()
    return (
        <div
            className={`${type == 1 ? 'border-right' : ''} boder-product  product-item`}
        >
            <div className="h-72">
                <div>
                    <p className="text-3xl">{name}</p>
                    <p className="mt-8">{content}</p>
                </div>
            </div>
            <div className="flex-mode">
                <div>
                    <HardDriveNetwork width={40} height={40} />
                </div>
                <div>
                    <ArrowRight size={40} />
                </div>
            </div>
        </div>
    )
}

export default Technology
