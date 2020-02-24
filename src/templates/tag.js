import React from "react"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PageCard from "../components/PageCard"
import Chip from "../components/Chip"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            return (
              <PageCard
                key={node.id}
                header={
                  <Link to={node.frontmatter.path}>
                    <h3>{node.frontmatter.title}</h3>
                  </Link>
                }
                timeToRead={node.timeToRead}
                main={<p>{node.excerpt}</p>}
                chips={node.frontmatter.tags?.map(tagOfPost => (
                  <Chip
                    key={tagOfPost}
                    disabled={tagOfPost === tag ? true : false}
                    path={`/tags/${tagOfPost}`}
                    role="listitem"
                  >
                    {tagOfPost}
                  </Chip>
                ))}
                path={node.frontmatter.path}
              />
            )
          })}
        </ul>
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            tags
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`
