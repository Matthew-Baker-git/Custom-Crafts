import React from 'react';
import { Row, Col, Item } from 'arwes';
import Sidebar from './Sidebar';
import ShipList from './ShipList';

const Shop = () => {
  return (
    // <div className="shop-grid-container">
    <Row>
      <Col s={3}>
        <Sidebar />
      </Col>
      <Col s={9}>
        <ShipList />
      </Col>
    </Row>
    // </div>
  );
};

export default Shop;
