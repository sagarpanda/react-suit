import React, { Component } from 'react';
import Style from 'rootSource/Style';
import Grid from 'rootSource/Grid';
import Row from 'rootSource/Row';
import Col from 'rootSource/Col';

class App extends Component {

  render() {
    return (
      <Style>
        <div>Hello</div>
        <Grid autoFitEnable>
          <Row>
            <Col md={8}>
              <Row>
                <Col md={12}><div className="bg-color2">2233</div></Col>
                <Col md={12}><div className="bg-color2">4455</div></Col>
              </Row>
            </Col>
            <Col md={8}><div className="bg-color">222</div></Col>
            <Col md={8}><div className="bg-color">333</div></Col>
          </Row>
          <Row>
            <Col md={8}><div className="bg-color">111</div></Col>
            <Col md={8}><div className="bg-color">222</div></Col>
            <Col md={8}><div className="bg-color">333</div></Col>
          </Row>
          <Row autoFitEnable>
            <Col autoFitEnable width={180}>
              <Row>
                <Col md={24}><div className="bg-color">999</div></Col>
              </Row>
              <Row autoFit>
                <Col md={24}><div className="bg-color">000</div></Col>
              </Row>
            </Col>
            <Col md={8}><div className="bg-color">222</div></Col>
            <Col md={8}><div className="bg-color">333</div></Col>
          </Row>
        </Grid>
      </Style>
    );
  }

}

export default App;
