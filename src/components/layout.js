/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const getSiteMetadata = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        subtitle
        author
        year
      }
    }
  }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(getSiteMetadata)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <h2>{data.site.siteMetadata?.subtitle || `subtitle`} </h2>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a>Gatsby by{` `}{data.site.siteMetadata?.author}</a>
          <a>{` `}@{data.site.siteMetadata?.year}</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
