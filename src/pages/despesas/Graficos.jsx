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
  const [top,setTop] = useState(Number)
 
  
  useEffect(()=>{
    let to = 0
    let temp = []
    function somar(x) {
     
      for (let i = 0; i < x.length; i++) {
          to = to + Number(x[i].valorDocumento);
          console.log(to)
      }
      console.log(to)
      const total = to
      setTop(total)
      
      console.log(total)
      to=0
      return total
  }
     function data(index) {

       apiDeputados.get("/deputados/" + params.id +"/despesas?&mes="+index+"&ano=2019&itens=150").then((pega) => {
        const data = pega.data.dados
      
      setGrafico(data)
      console.log(grafico.length);
      console.log('entrei' + (index - 1) )
       const total = somar(data)
       
       setMes ({"name":`mes ${index}`,"media": total/(data.length),"total": total})
       temp[index-1]={"name":`mes ${index}`,"media": total/(data.length),"total/100": total/10}
      });
      
       
    }
    
    function fazerdata(params) {
      
      data(1)
      data(2)
      data(3)
      data(4)
      data(5)
      data(6)
      data(7)
      data(8)
      data(9)
      data(10)
      data(11)
      data(12)
      setData(temp)
      
    }
    
    fazerdata()
    
  
  
  
      
    


},[])

console.log(data)


  return (
<div id='graphic'>
                <h1>Balanceamento de despesas</h1>
    <div id='box'>
    <div id='info'>
    
  {data.length === 11 &&<ComposedChart width={520} height={320} data={data} >
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Bar dataKey="total/100" barSize={70} fill="#5645DA" />
  <Line type="monotone" dataKey="media" stroke="#fff" />
  </ComposedChart>}
    
    </div>
        
    <div className="container">
    <div className="row">
        <div className="col-sm">
                    Descrição
        </div>

        <div className="col-sm">
         01/04/2019 á 31/12/2019
        </div>
    </div>
    <div id="linha"></div>
    <div id='text'>Balanceamento de despesas do deputado <br></br> </div>
    </div> 
    </div>
      
</div>
  )
}

export default Graficos