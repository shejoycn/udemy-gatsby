import  React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import { node } from 'prop-types'

const getMarkdown = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`
export default () => (

    <Layout>
    <div>
      <h1>Gatsby Garb Blog</h1>

          
      <StaticQuery
      query={getMarkdown}
      render={data => (
      <>
      <h4>{data.allMarkdownRemark.totalCount} Post(s)</h4>
      {data.allMarkdownRemark.edges.map(({node})=>
      <div key={node.id}>
<h3>{node.frontmatter.title}</h3>
<h4>{node.frontmatter.date}</h4>
<p>{node.excerpt}</p>
<hr></hr>

      </div>
      )}
      
      </>
        )} />

      </div>

  </Layout>



)
  


