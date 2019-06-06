/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"

import Header from "./header"
import "./layout.css"
import { FaYelp, FaFacebook, FaInstagram } from "react-icons/fa"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <footer className="text-center bg-gray">
          <Container className="light-text">
            <h3>
              <FaYelp />
              &nbsp;&nbsp;&nbsp;
              <FaFacebook />
              &nbsp;&nbsp;&nbsp;
              <FaInstagram />
            </h3>
          </Container>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
