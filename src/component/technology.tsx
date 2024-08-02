'use client'

import { ArrowRight } from '@carbon/icons-react'
import {
    DesignResearch,
    FlashStorage,
    HardDriveNetwork,
    Pills,
} from '@carbon/pictograms-react'
import { useTranslation } from 'react-i18next'

const Technology: React.FC<{
    type?: number
    name?: string
    content?: string
    label?: string
}> = ({ type, name, content, label }) => {
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
                {label == 'Product' ? (
                    <div>
                        {type == 1 && <DesignResearch width={40} height={40} />}
                        {type == 2 && <Pills width={40} height={40} />}
                    </div>
                ) : (
                    <div>
                        {type == 1 && (
                            <HardDriveNetwork width={40} height={40} />
                        )}
                        {type == 2 && <FlashStorage width={40} height={40} />}
                    </div>
                )}
                <div>
                    <ArrowRight size={40} />
                </div>
            </div>
        </div>
    )
}

export default Technology
