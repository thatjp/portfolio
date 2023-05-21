import React from "react"
import { graphql } from "gatsby"

import AuthorBio from '../components/ui/authorBio/AuthorBio'
import Layout from "../components/layouts/Layout"

const WpPost = ({
  data: {
    wpPost: { title, content, id, author, projectDescription },
  },
}) => {
  return (
    <Layout>
      <div className={`post-${id}`}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <AuthorBio author={author.node}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
      author {
        node {
          ...AuthorBio
        }
      }
    }
  }
`

export default WpPost