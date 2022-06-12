import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Zutaten.css';

const Zutaten = ({zutaten}) => {
  const result = zutaten.map((zutat, index) => {
    return (
      <ListGroupItem key={index}>
        <div className="flex justify-between">
          <div>{zutat.zutat}</div>
          <div>{zutat.menge}</div>
        </div>
      </ListGroupItem>
    )
  })
  return result;
}

export default Zutaten