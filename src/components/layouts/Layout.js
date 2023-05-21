/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Navigation from "../ui/Navigation/Navigation"

const Layout = ({ pageTitle, children }) => {

  return (
    <div>
      <main>
        <Navigation />
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
