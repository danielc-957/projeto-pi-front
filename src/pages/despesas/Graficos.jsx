import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import apiDeputados from '../../services/apiDeputados'
import './graficos.css'

const Graficos = () => {
 
  const params = useParams() 

  const [grafico, setGrafico] = useState({})

  useEffect(()=>{
        
    apiDeputados.get('/deputados/' + params.id +'/despesas?mes=06&ordem=ASC&ano=2019').then(resultado=>{
      setGrafico(resultado.data.dados)
      console.log(resultado.data.dados)
})
},[])


  return (
<div id='graphic'>
                <h1>Balanceamento de despesas</h1>
    <div id='box'>
    <div id='info'>
    <LineChart width={500} height={300} data={params.data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
    
    </div>
        
    <div class="container">
    <div class="row">
        <div class="col-sm">
                    Descrição
        </div>

        <div class="col-sm">
         01/04/2022 á 30/07/2022
        </div>
    </div>
    <div id="linha"></div>
    <div id='text'>Balanceamento de despesas do deputado <br></br> por mês e trimestre</div>
    </div> 
    </div>
      
</div>
  )
}

export default Graficos