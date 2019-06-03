import React, { Component, Fragment } from "react"
import { Alert, Row, Col, Input, FormGroup, Label } from "reactstrap"
import { Link } from "gatsby"
import SimpleReactValidator from "simple-react-validator"

class AppointemntInfo extends Component {
  renderAddressForm() {
    if (this.props.addressInfo.submitted === false) {
      return (
        <Fragment>
          <Alert color="light">
            <Row className="text-center">
              <Col md="12">
                <p>Where to meet with the tech?</p>
              </Col>
            </Row>
            <Row className="text-center margin-top-15">
              <Col md="12">
                <FormGroup>
                  <Input
                    onChange={this.props.onUpdateText}
                    type="text"
                    name="address"
                    id="exampleAddress"
                    placeholder="Address"
                  />
                </FormGroup>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        onChange={this.props.onUpdateText}
                        type="text"
                        name="city"
                        id="exampleCity"
                        placeholder="City"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Input
                        onChange={this.props.onUpdateText}
                        type="text"
                        name="state"
                        id="exampleState"
                        placeholder="State"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Input
                        onChange={this.props.onUpdateText}
                        type="text"
                        name="zip"
                        id="exampleZip"
                        placeholder="Zip"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={4} />
              <Col md={4}>
                <button
                  onClick={this.props.onSubmitAddress}
                  className="btn custom-padding"
                >
                  Submit
                </button>
              </Col>
              <Col md={4} />
            </Row>
          </Alert>
        </Fragment>
      )
    }
  }
  renderDateForm() {
    if (this.props.addressInfo.submitted === true) return <h2>date</h2>
  }
  render() {
    return (
      <Fragment>
        {this.renderAddressForm()}
        {this.renderDateForm()}
      </Fragment>
    )
  }
}
export default AppointemntInfo
