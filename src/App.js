import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Zutaten from './components/Zutaten';
import Search from './components/Search';

const url = 'http://localhost:3001/';

function App() {
  const [gerichte, setGerichte] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    (async () => {
        const response = await fetch(url);
        const _gerichte = await response.json();
        console.log(_gerichte);
        setGerichte(_gerichte);
    })();
}, []);

  useEffect(() => {
    const result = gerichte.filter(gericht => {
      const _zutaten = gericht.zutaten.map(zutat => zutat.zutat.toLowerCase());
      if (_zutaten.includes(inputValue.toLowerCase())) {
        return gericht;
      }
    });
    setGerichte(result);
  }, [searchItems]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchItems([...searchItems, inputValue]);
    console.log(e.target.children[0].value);
    return null;
  }

  return (
    <div className='u-container'>
      <h1>Restegourmet</h1>
      <Search handleSubmit={handleSubmit} handleChange={handleChange} />
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
    </div>
  )
}

export default App;
