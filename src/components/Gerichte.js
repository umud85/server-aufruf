import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gerichte.css';
import Zutaten from './Zutaten';


const Gerichte = () => {
  const [gerichte, setGerichte] = useState([]);

  useEffect(() => {
    const getGerichte = async () => {
      const res = await fetch('http://localhost:3001/');
      const json = await res.json();
      setGerichte(json.gerichte);
    }
    getGerichte();
  }, [])
  return (
    <div>
      <h1>Restegourmet</h1>
      <ul>
        {gerichte.map((gericht, index) => {
          return (
            <Card key={index} style={{ width: '18rem'}} className="mt-8">
              <Card.Img variant="top" src={`../../img/${index}.jpeg`} />
              <Card.Body key={200}>
                <Card.Title>{gericht.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Zutaten zutaten={gericht.zutaten} />
              </ListGroup>
              <Card.Body key={201}>
                <Card.Link href="#">Zur Zubereitung</Card.Link>
              </Card.Body>
            </Card>
          )
        })}
      </ul>
    </div>
  )
}

export default Gerichte