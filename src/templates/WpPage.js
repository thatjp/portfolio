import React from "react"
import { graphql } from "gatsby"

import AuthorBio from '../components/ui/authorBio/AuthorBio'
import Layout from "../components/layouts/Layout"

const WpPage = ({data: {
  wpPage: {id, title, content}
}}) => {
  return (
    <Layout>
      <div className={`post-${id}`}>
        <h1>{title}</h1>
        <p>content</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

export default WpPage