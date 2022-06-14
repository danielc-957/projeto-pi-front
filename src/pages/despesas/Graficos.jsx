import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import apiDeputados from '../../services/apiDeputados'
import './graficos.css'

const Graficos = () => {
 

  const params = useParams() 

  const [grafico, setGrafico] = useState([])

  const [data, setData] = useState([])

  const [mes, setMes] = useState({})

  const [total, setTotal] = useState()

  useEffect(()=>{
    let temp = []; 
    let x = 0
    for (let index = 1; index < 13; index++) {
      
      apiDeputados.get('/deputados/' + params.id +'/despesas?mes='+index+'&ordem=ASC&ano=2019&itens=100').then(resultado=>{
        setGrafico(resultado.data.dados)
        console.log(resultado.data.dados)
        console.log('entrei' + index)

      async function somar() { 
        
        for (let index1 = 0; index1 < grafico.length; index1++) {
          const gasto = await Number(grafico[index1].valorDocumento) 
          console.log(gasto)
          x = x + gasto
          
          
        }
        console.log(x)
        return x
      }

      const total = somar()
         temp[index] = {"name":`mes ${index}`,"media": total/(grafico.length),"total": total}
         
        console.log(temp[index])
  
  })

  
      
    }

    setData(temp)

},[total])

console.log(data)


  return (
<div id='graphic'>
                <h1>Balanceamento de despesas</h1>
    <div id='box'>
    <div id='info'>
    
  <ComposedChart width={520} height={320} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="gastos" barSize={70} fill="#5645DA" />
  <Line type="monotone" dataKey="media" stroke="#fff" />
  </ComposedChart>
    
    </div>
        
    <div className="container">
    <div className="row">
        <div className="col-sm">
                    Descrição
        </div>

        <div className="col-sm">
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