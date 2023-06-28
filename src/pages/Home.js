import React from 'react';
import { Col, Grid, Row } from 'rsuite';
import Sidebar from '../components/Sidebar';
import { Roomsprovider } from '../context/rooms.context';

const Home = () => {
  return (
    <Roomsprovider>
      <Grid fluid className="h-100">
        <Row>
          <Col xs={24} md={8}>
            <Sidebar />
          </Col>
        </Row>
      </Grid>
    </Roomsprovider>
  );
};

export default Home;
