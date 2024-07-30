'use client'
import { ScientificComputing } from '@carbon/pictograms-react'
import { Breadcrumb, BreadcrumbItem, Column, Grid } from '@carbon/react'

const Page = () => {
    return (
        <Grid className="p-0" fullWidth>
            <Column lg={16} md={8} sm={4} className="pt-4 pb-32 pl-5 m-0">
                <Breadcrumb noTrailingSlash aria-label="Page navigation">
                    <BreadcrumbItem>
                        <a href="/">Home Page</a>
                    </BreadcrumbItem>
                </Breadcrumb>
                <h1 className="text-5xl mt-4">Home Page</h1>
                <ScientificComputing />
            </Column>
        </Grid>
    )
}

export default Page
