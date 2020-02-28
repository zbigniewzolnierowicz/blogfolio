import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = () => {
    return (
        <Layout>
            <SEO description="Main page" title="Main page" >
                <script type="application/ld+json">
                    {
                        JSON.stringify({
                        })
                    }
                </script>
            </SEO>
        </Layout>
    )
}

export default IndexPage