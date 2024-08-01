'use client'
import ContentHead from '@/ui/containerHead'
import Product from '@/ui/product'
import Solution from '@/ui/solution'
import { SkipForward } from '@carbon/icons-react'
import { ScientificComputing } from '@carbon/pictograms-react'
import { Button, Column, FlexGrid, Row } from '@carbon/react'
import { useTranslation } from 'react-i18next'

const Page = () => {
    const { t } = useTranslation()
    return (
        <div>
            <ContentHead className={'h-616 m-0 bg-[#434343]'}>
                <div className="px-20">
                    <FlexGrid fullWidth>
                        <Row>
                            <Column lg={10}>
                                <div className="py-16 max-w-616">
                                    <h1 className="text-4xl">
                                        {t('fontPage.title')}
                                    </h1>
                                    <p className="mt-20">
                                        {t('fontPage.introduction')}
                                    </p>
                                    <Button
                                        className="mt-16"
                                        renderIcon={SkipForward}
                                        iconDescription="Add"
                                    >
                                        {t('button.getMaterial')}
                                    </Button>
                                </div>
                            </Column>
                            <Column
                                lg={6}
                                className="flex items-center justify-center h-616"
                            >
                                <ScientificComputing height={300} width={300} />
                            </Column>
                        </Row>
                    </FlexGrid>
                </div>
            </ContentHead>
            {/* 产品 */}
            <div className="h-500">
                <FlexGrid className="p-20">
                    <Row>
                        <Column lg={8}>
                            <div className="text-4xl">{t('home.title')}</div>
                        </Column>
                        <Column lg={8}>
                            <div>
                                <p>{t('fontPage.title')}</p>
                                <Button
                                    className="mt-16"
                                    renderIcon={SkipForward}
                                    iconDescription="Add"
                                >
                                    {t('button.lookProduct')}
                                </Button>
                            </div>
                        </Column>
                    </Row>
                </FlexGrid>
            </div>
            <div className="h-400 flex w-full flex-wrap justify-start">
                <Product type={1} name={t('product.product1')} />
                <Product type={2} name={t('product.product2')} />
                <Product type={3} name={t('product.product3')} />
            </div>
            {/* 解决方案 */}
            <div className="h-400 bg-[#434343]">
                <FlexGrid className="p-20">
                    <Row>
                        <Column lg={8}>
                            <div className="text-4xl">
                                {t('solution.title')}
                            </div>
                        </Column>
                        <Column lg={8}>
                            <div>
                                <p>{t('solution.content')}</p>
                                <Button
                                    className="mt-16"
                                    renderIcon={SkipForward}
                                    iconDescription="Add"
                                >
                                    {t('button.lookSolution')}
                                </Button>
                            </div>
                        </Column>
                    </Row>
                </FlexGrid>
            </div>
            <div className="h-400 bg-[#434343] flex w-full flex-wrap justify-start">
                <Solution
                    type={1}
                    name={t('solution.solution1')}
                    content={t('solution.overview')}
                />
                <Solution
                    type={2}
                    name={t('solution.solution1')}
                    content={t('solution.overview')}
                />
            </div>
            {/* 我们的团队 */}
            <div className="h-400">
                <FlexGrid className="p-20">
                    <Row>
                        <Column lg={8}>
                            <div className="text-4xl">{t('team.title')}</div>
                        </Column>
                        <Column lg={8}>
                            <div>
                                <p>{t('team.introduction')}</p>
                                <Button
                                    className="mt-16"
                                    renderIcon={SkipForward}
                                    iconDescription="Add"
                                >
                                    {t('button.ourTeam')}
                                </Button>
                            </div>
                        </Column>
                    </Row>
                </FlexGrid>
            </div>
        </div>
    )
}

export default Page
