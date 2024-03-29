import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import styles from './blog.module.css'
import Layout from "../components/layout"
import ArticlePreview from '../components/article-preview'

class CMIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const idx = get(this, 'props.data.contentfulAsset')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>
            <Img className={styles.heroImage} alt={idx.title} fixed={idx.fixed} />
          </div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CMIndex

export const pageQuery = graphql`
  query CMIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC },filter: {node_locale: {eq: "zh"}, language: {in: "中文"}}) {
      edges {
        node {
          title
          slug
          node_locale
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentfulAsset(contentful_id: {eq: "1qqLGAC87JX41LGcWZ8aDY"}) {
      title
      fixed(width: 1180) {
        ...GatsbyContentfulFixed
      }
    }
  }
`

