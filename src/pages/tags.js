import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'

const pageQuery = graphql`
    query {
        tags: allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`

const TagsPage = () => (
    <Layout>
        <StaticQuery
            query={pageQuery}
            render={data => (
                <ul>{data.tags.group.map(tag => (<li><Link to={`/tags/${tag.fieldValue}`}>{tag.fieldValue}</Link>: {tag.totalCount}</li>))}</ul>
            )}
        />
    </Layout>
)

export default TagsPage
export { TagsPage, pageQuery }