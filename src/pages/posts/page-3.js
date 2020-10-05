import React from 'react'

import Layout from '../../components/layout'

import {  StaticQuery, graphql } from 'gatsby'

const getImageData = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`

export default () => (
  <Layout>
    <h1>Hello from page 3!</h1>
    <StaticQuery
      query={getImageData}
      render={data => (
        <table>
          <thead>
            <tr>
              <th>Relative Path</th>
              <th>File Size</th>
              <th>Extension</th>
              <th>Birth Time</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({node}, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />
  </Layout>
)
