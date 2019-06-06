import React, { Component, Fragment } from "react"
import { Alert, Row, Col, Input, FormGroup } from "reactstrap"
import DatePicker from "react-datepicker"
import setMinutes from "date-fns/setMinutes"
import setHours from "date-fns/setHours"
import "moment-timezone"
import "react-datepicker/dist/react-datepicker.css"

class AppointemntInfo extends Component {
  renderAddressForm() {
    if (this.props.addressInfo.submitted === false) {
      return (
        <Fragment>
          <Alert color="light">
            <Row className="margin-top-15">
              <Col md={3} />
              <Col md={6}>
                <p className="text-center">What's your preferred timing?</p>
              </Col>
              <Col md={3} />
            </Row>
            <Row className="margin-top-15">
              <Col md={3} />
              <Col md={6}>
                <DatePicker
                  inline
                  className="form-control"
                  minDate={new Date()}
                  minTime={setHours(setMinutes(new Date(), 0), 7)}
                  maxTime={setHours(setMinutes(new Date(), 30), 19)}
                  placeholderText="Click to select a date"
                  selected={this.props.startDate}
                  onChange={this.props.onHandleChange}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </Col>
              <Col md={3} />
            </Row>
            <Row className="margin-top-15">
              <Col md={3} />
              <Col md={6}>
                <p className="text-center">Where can we meet you?</p>
              </Col>
              <Col md={3} />
            </Row>
            <Row className="margin-top-15">
              <Col md={3} />
              <Col md={6}>
                <FormGroup>
                  <Input
                    value={this.props.addressInfo.address}
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
                        value={this.props.addressInfo.city}
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
                        value={this.props.addressInfo.state}
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
                        value={this.props.addressInfo.zip}
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
              <Col md={3} />
            </Row>

            <Row className="margin-top-15">
              <Col md={3} />
              <Col md={6}>
                <FormGroup>
                  <Input
                    value={this.props.addressInfo.instructions}
                    onChange={this.props.onUpdateText}
                    type="textarea"
                    name="instructions"
                    id="instructions"
                    placeholder="Add instructions (Optional)"
                  />
                </FormGroup>
              </Col>
              <Col md={3} />
            </Row>

            <Row>
              <Col md={4} />
              <Col md={4}>
                <button
                  onClick={this.props.onSubmitAddress}
                  className="btn custom-padding"
                >
                  Continue
                </button>
              </Col>
              <Col md={4} />
            </Row>
          </Alert>
        </Fragment>
      )
    }
  }
  renderContactForm() {
    if (this.props.addressInfo.submitted === true) {
    }
  }
  render() {
    return (
      <Fragment>
        {this.renderAddressForm()}
        {this.renderContactForm()}
      </Fragment>
    )
  }
}
export default AppointemntInfo
