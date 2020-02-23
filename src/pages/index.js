import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageCard from "../components/PageCard"
import "../style.scss"
import Chip from "../components/Chip"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Main page."/>
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark {
            edges {
              node {
                id
                timeToRead
                excerpt
                frontmatter {
                  title
                  path
                }
              }
            }
          }
        }
      `}
      render={data => data.allMarkdownRemark.edges.map((edge) => (
        <PageCard
          header={<Link to={edge.node.frontmatter.path}><h3>{edge.node.frontmatter.title}</h3></Link>}
          timeToRead={edge.node.timeToRead}
          main={<p>{edge.node.excerpt}</p>}
          chips={[<Chip key="a" disabled={false} path="/404">AAA</Chip>]}
          path={edge.node.frontmatter.path}
        />
      ))}
    />
  </Layout>
)

export default IndexPage
