import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Event from '../Event/Event';
const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('https://serene-garden-27348.herokuapp.com/allEvents')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <Container>
      <Row>
        {events.map((event) => (
          <Event key={event._id} event={event} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
