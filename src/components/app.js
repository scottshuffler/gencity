import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // go get some data 
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Grid>
          <Row className="show-grid" style={{ marginBottom: '3%' }}>
            <Col xs={3} md={3} />
            <Col xs={6} md={4}>Hello</Col>
          </Row>
        </Grid>
      </div>);
  }
}

export default App;
