import PropTypes from "prop-types"
import React from "react"
import ReactNavbar from "./reactNavbar"

const Header = ({ siteTitle }) => (
  <header>
    <ReactNavbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
