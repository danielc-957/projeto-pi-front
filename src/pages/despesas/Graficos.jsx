import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import './graficos.css'

const Graficos = () => {
  
  return (
<div id='graphic'>
                <h1>Balanceamento de despesas</h1>
    <div id='box'>
    <div id='info'>
    <LineChart width={500} height={300} >
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