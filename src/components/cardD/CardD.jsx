import React,{useEffect,useState} from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './card.css'
const CardD = (x) => {
    let [evento,setEvento] = useState()
  

  function pegar() {
     const event = 1    
    setEvento(event)
  }
  return (
    <div>
      <Card  className='conte me-auto mr-auto' bg='dark'>
  <Card.Img variant="top" src={ x.imagem ? x.imagem : 'https://www.prescriptum.com.br/wp-content/uploads/2015/12/placeholder-usuario-500x500.jpg'} />
  <Card.Body >
  <Card.Text className='text-light'>
      <strong className='text-light'>Nome : </strong>{x.nome}
    </Card.Text>
    <Card.Text className='text-light'>
      <strong className='text-light'>Partido : </strong>{x.siglaPartido}
    </Card.Text>
     <Link className='btn btn-primary text-white botao' to={'/deputados/detalhe/'+x.id}>Ver mais{x.id}</Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default CardD