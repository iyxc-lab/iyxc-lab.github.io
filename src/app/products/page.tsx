'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Column,
    Grid,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@carbon/react'

const Page = () => {
    return (
        <Grid className="p-0" fullWidth>
            <Column
                lg={16}
                md={8}
                sm={4}
                className="pt-4 pb-32 pl-5 bg-gray-900 m-0"
            >
                <Breadcrumb noTrailingSlash aria-label="Page navigation">
                    <BreadcrumbItem>
                        <a href="/">Products</a>
                    </BreadcrumbItem>
                </Breadcrumb>
                <h1 className="text-5xl mt-4">Our Products</h1>
            </Column>
            <Column lg={16} md={8} sm={4} className="-mt-10">
                <Tabs defaultSelectedIndex={0}>
                    <TabList className="tabs-group" aria-label="Tab navigation">
                        <Tab>RWS</Tab>
                        <Tab>Design</Tab>
                        <Tab>Develop</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Grid className="tabs-group-content">
                                <Column
                                    md={4}
                                    lg={7}
                                    sm={4}
                                    className="landing-page__tab-content"
                                >
                                    <h3 className="landing-page__subheading">
                                        What is Carbon?
                                    </h3>
                                    <p className="landing-page__p">
                                        Carbon is IBM’s open-source design
                                        system for digital products and
                                        experiences. With the IBM Design
                                        Language as its foundation, the system
                                        consists of working code, design tools
                                        and resources, human interface
                                        guidelines, and a vibrant community of
                                        contributors.
                                    </p>
                                    <Button>Learn more</Button>
                                </Column>
                                <Column
                                    md={4}
                                    lg={{ span: 8, offset: 7 }}
                                    sm={4}
                                >
                                    IMAGE WILL GO HERE
                                </Column>
                            </Grid>
                        </TabPanel>
                        <TabPanel>
                            <Grid className="tabs-group-content">
                                <Column
                                    lg={16}
                                    md={8}
                                    sm={4}
                                    className="landing-page__tab-content"
                                >
                                    <p className="landing-page__p">
                                        Rapidly build beautiful and accessible
                                        experiences. The Carbon kit contains all
                                        resources you need to get started.
                                    </p>
                                </Column>
                            </Grid>
                        </TabPanel>
                        <TabPanel>
                            <Grid className="tabs-group-content">
                                <Column
                                    lg={16}
                                    md={8}
                                    sm={4}
                                    className="landing-page__tab-content"
                                >
                                    <p className="landing-page__p">
                                        Carbon provides styles and components in
                                        Vanilla, React, Angular, and Vue for
                                        anyone building on the web.
                                    </p>
                                </Column>
                            </Grid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Column>
            <Column lg={16} md={8} sm={4} className="landing-page__r3">
                <Grid>
                    <Column md={4} lg={4} sm={4}>
                        1/4
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                        1/4
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                        1/4
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                        1/4
                    </Column>
                </Grid>
            </Column>
        </Grid>
    )
}

export default Page
