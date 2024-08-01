'use client'

import { ArrowRight } from '@carbon/icons-react'
import { Agility, GraphicDesign } from '@carbon/pictograms-react'
import { useTranslation } from 'react-i18next'

const Product: React.FC<{
    type: number
    name?: string
    content?: string
}> = ({ type, name, content }) => {
    const { t } = useTranslation()
    return (
        <div
            className={`${type == 1 ? 'border-right' : ''} boder-product  product-item`}
        >
            <div className="flex-mode h-72">
                <div>
                    <p className="text-2xl">{name}</p>
                    <p className="mt-8">{content}</p>
                </div>
                <div>
                    {type == 1 && <GraphicDesign height={92} width={92} />}
                    {type == 2 && <Agility height={92} width={92} />}
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
