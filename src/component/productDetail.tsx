'use client'

import { SkipForward } from '@carbon/icons-react'
import { Button, Column, Grid } from '@carbon/react'
import { t } from 'i18next'

const ProductDetail: React.FC<{
    details?: string
}> = ({ details }) => {
    return (
        <Grid>
            <Column lg={16} style={{ paddingTop: '40px' }}>
                <div>{t('fontPage.introduction')}</div>
                <div>
                    <Button
                        className="mt-20"
                        renderIcon={SkipForward}
                        iconDescription="Add"
                    >
                        {t('button.more')}
                    </Button>
                </div>
            </Column>
        </Grid>
    )
}

export default ProductDetail
