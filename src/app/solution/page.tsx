'use client'
import ContentHead from '@/component/containerHead'
import ProductDetail from '@/component/productDetail'
import Technology from '@/component/technology'
import { SkipForward } from '@carbon/icons-react'
import { DataPrivacyKey } from '@carbon/pictograms-react'
import {
    Button,
    Column,
    FlexGrid,
    Row,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@carbon/react'
import { t } from 'i18next'

const Page = () => {
    return (
        <div>
            <ContentHead className={'h-616 m-0 bg-[#434343]'}>
                <div className="px-20">
                    <FlexGrid>
                        <Row>
                            <Column lg={10}>
                                <div className="py-16 max-w-616">
                                    <h1 className="text-4xl">
                                        {t('solution.topic')}
                                    </h1>
                                    <p className="mt-20">
                                        {t('solution.content')}
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
                                <DataPrivacyKey height={300} width={300} />
                            </Column>
                        </Row>
                    </FlexGrid>
                </div>
            </ContentHead>
            <div className="h-400 px-12">
                <Column lg={16} md={8} sm={4} className="-mt-10">
                    <Tabs defaultSelectedIndex={0}>
                        <TabList
                            className="tabs-group"
                            aria-label="Tab navigation"
                        >
                            <Tab>{t('solution.plan1')}</Tab>
                            <Tab>{t('solution.plan2')}</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <ProductDetail
                                    details={t('solution.soluteDetails')}
                                />
                            </TabPanel>
                            <TabPanel>
                                <ProductDetail
                                    details={t('solution.soluteDetails')}
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Column>
            </div>
            <div className="h-400 flex">
                <Technology
                    type={1}
                    name={t('product.product1')}
                    content={t('product.introduceDetails1')}
                    label={'Product'}
                />
                <Technology
                    type={2}
                    name={t('product.product2')}
                    content={t('product.introduceDetails2')}
                    label={'Product'}
                />
            </div>
        </div>
    )
}

export default Page
