import * as React from "react"
import { InView } from "react-intersection-observer"

import Layout from "../components/layouts/Layout"
import Section from "../components/ui/section/Section"
import Seo from "../components/seo"
import Title from "../components/ui/Title/Title"
import BodyText from "../components/ui/BodyText/BodyText"
// import * as styles from "../components/index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <InView>
        {({ inView, ref, entry }) => {
          return (
            <>
              <section className="h-screen w-full grid grid-cols-3 content-center">
                <div className="text-center">
                  <Title size="h1" text="header 1" />
                  <BodyText text="buncha things" />
                </div>
              </section>
              <section className="h-screen w-full grid grid-cols-3 content-center">
                <Title size="h1" text="header 1" />
                <BodyText text="buncha things" />
              </section>
              <section className="h-screen w-full grid grid-cols-3 content-center">
                <Title size="h1" text="header 1" />
                <BodyText text="buncha things" />
              </section>
            </>
          )
        }}
      </InView>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
