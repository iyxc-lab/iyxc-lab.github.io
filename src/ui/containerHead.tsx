import { Column, Grid } from '@carbon/react'
const ContentHead: React.FC<{
    children: React.ReactNode | undefined
    className?: string[] | string
}> = ({ children, className }) => {
    return (
        <Grid className="p-0" fullWidth>
            <Column lg={16} md={8} sm={4} className={`${className}`}>
                {children}
            </Column>
        </Grid>
    )
}

export default ContentHead
