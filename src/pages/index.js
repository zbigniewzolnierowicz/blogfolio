import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageCard from "../components/PageCard"
import "../style.scss"
import Chip from "../components/Chip"

const pageQuery = graphql`
  {
    file(name: { eq: "face" }) {
      publicURL
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        deployURL
        author {
          familyName
          givenName
          name
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          timeToRead
          excerpt
          html
          frontmatter {
            title
            tags
            date
            path
          }
        }
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(pageQuery)
  return (
    <Layout>
      <SEO title="Home" description="Main page.">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Blog",
            author: {
              "@context": "http://schema.org",
              "@type": "Person",
              ...data.site.siteMetadata.author,
            },
            publisher: {
              "@context": "http://schema.org",
              "@type": "Person",
              ...data.site.siteMetadata.author,
            },
            headline: data.site.siteMetadata.title,
            description: data.site.siteMetadata.description,
            abstract: data.site.siteMetadata.description,
            image: data.site.siteMetadata.deployURL + data.file.publicURL,
            url: data.site.siteMetadata.deployURL,
            blogPost: data.allMarkdownRemark.edges.map(post => {
              return {
                "@context": "http://schema.org",
                "@type": "BlogPosting",
                articleBody: post.node.html,
                headline: post.node.frontmatter.title,
                author: {
                  "@context": "http://schema.org",
                  "@type": "Person",
                  ...data.site.siteMetadata.author,
                },
                publisher: {
                  "@context": "http://schema.org",
                  "@type": "Person",
                  ...data.site.siteMetadata.author,
                },
                datePublished: post.node.frontmatter.date,
                image: data.site.siteMetadata.deployURL + data.file.publicURL,
                url:
                  data.site.siteMetadata.deployURL + post.node.frontmatter.path,
              }
            }),
          })}
        </script>
      </SEO>
      <div>{data.file.childImageSharp.publicURL}</div>
      <>
        {data.allMarkdownRemark.edges.map(edge => (
          <PageCard
            key={edge.node.id}
            header={
              <Link to={edge.node.frontmatter.path}>
                <h3>{edge.node.frontmatter.title}</h3>
              </Link>
            }
            timeToRead={edge.node.timeToRead}
            main={<p>{edge.node.excerpt}</p>}
            chips={edge.node.frontmatter.tags?.map(tag => (
              <Chip
                key={tag}
                disabled={false}
                path={`/tags/${tag}`}
                role="listitem"
              >
                {tag}
              </Chip>
            ))}
            path={edge.node.frontmatter.path}
          />
        ))}
      </>
    </Layout>
  )
}
export default IndexPage
export { IndexPage, pageQuery }
