import React from 'react';
import { Col } from 'react-bootstrap';
import './Event.css';
const Event = (props) => {
  const { name, imageUrl } = props.event;
  return (
    <Col md={6} lg={3} className="my-3">
      <div className="eventCard">
        <img src={imageUrl} alt={name} />
        <h5 className="text-center mt-2">{name}</h5>
      </div>
    </Col>
  );
};

export default Event;
