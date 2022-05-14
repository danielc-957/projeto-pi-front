import React, {useState} from 'react';
import './rowdep.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CardD from '../cardD/CardD';
import CardE from '../cardE/CardE';

export default ({title, items}) =>{
    const [evento, setEvento]= useState(0);
    const [scrollX, setScrollX]= useState(0);
    function pegar() {
        if(evento=0){
            setEvento(1)
       }else{setEvento(0)}
    }
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        const listW = items.length * 200;
        if(window.innerWidth - listW > x)
        {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return(
        <div className="moverow">
            <h2>{title}</h2>
            <div className="moverow-left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize:50}} />
            </div>
            <div className="moverow-right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize:50}} />
            </div>

            <div className="moverow--listarea">
                <div className="moverow--list"style={{
                    marginLeft :scrollX,
                    width: items.length * 200
                }}>
                    {items.map((item, key)=>(
                        <div key={key} className="moverow--item"> 
                         
                            {item.urlFoto && <CardD id={item.id} imagem={item.urlFoto} nome={item.nome} siglaPartido={item.siglaPartido} />}
                            {item.descricaoTipo && <CardE id={item.id} data={item.dataHoraInicio} dataf={item.dataHoraFim} nome={item.descricaoTipo} />}
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}