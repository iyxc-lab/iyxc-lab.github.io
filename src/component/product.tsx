'use client'

import { ArrowRight } from '@carbon/icons-react'
import {
    DesignResearch,
    Pills,
    TelemedicineMobile,
} from '@carbon/pictograms-react'

const Product: React.FC<{
    type?: number
    name?: string
}> = ({ type, name }) => {
    return (
        <div
            className={`${
                type == 2 ? 'boder-product-moddle' : 'boder-product'
            } product-item`}
        >
            <div className="h-72">
                {type == 1 && <DesignResearch height={92} width={92} />}
                {type == 2 && <TelemedicineMobile height={92} width={92} />}
                {type == 3 && <Pills height={92} width={92} />}
            </div>
            <div className="flex-mode">
                <div>
                    <p>{name}</p>
                </div>
                <div>
                    <ArrowRight size={40} />
                </div>
            </div>
        </div>
    )
}

export default Product
