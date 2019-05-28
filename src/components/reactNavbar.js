import React from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap"
import logo from "../images/logo.png"

export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" light>
          <NavbarBrand to="/" className="mr-auto">
            <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/schedule-a-repair/">
                  <Button color="primary" block>
                    Schedule a repair
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/repairs/">
                  <Button color="primary" block>
                    Repairs
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/guarantee/">
                  <Button color="primary" block>
                    Warranty
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/page-2/">
                  <Button color="primary" block>
                    About
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact/">
                  <Button color="primary" block>
                    Contact
                  </Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
