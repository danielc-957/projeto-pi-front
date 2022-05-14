import React,{useEffect,useState} from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './card.css'
const CardE = (x) => {
    
  return (
    <div>
    <Card  bg='dark'>
  <Card.Body >
  <Card.Title>{x.nome}</Card.Title>
  <Card.Text className='text-light'>
      <strong className='text-light'>Data de Inicio: </strong>{x.data}
    </Card.Text>
    <Card.Text className='text-light'>
      <strong className='text-light'>Data de Termino : </strong>{x.dataf? x.dataf:'Em andamento'}
    </Card.Text>
     <Link className='btn btn-primary text-white' to={'/eventos/detalhe/'+x.id}>Ver mais{x.id}</Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default CardE