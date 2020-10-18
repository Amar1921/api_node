import React,{useState} from "react";
import imgshop from "../Mockup/shop.png";

import Fav from "../backend/img/iconfinder_heart-01_186400.svg";
import FavR from '../backend/img/red.svg'

function Card(props){

    const [value, setValue] = useState('');
    const [color, setColor] = useState('black')
    /***************LOCAL STORAGE*******************/
    const arrayStorage =  []
     const addToFavourite=(item)=> {

        const a = item.target.attributes.src
         //a.currentSrc = {FavR}
          console.log(a)

    }

    return(
        props.product.map((prod,index)=>(
                <div className="col-8 col-sm-5 col-md-3 my-2 d-flex flex-column justify-content-between  mx-1  cardImage card " key={index} >
                    <img src={imgshop} className="img-fluid" alt="logo" style={{width:"100%", height:"100px"}}/>
                        <p className="card-text" style={{fontWeight:"bold"}}> {prod.retailer}</p>
                        <h4 className="card-title text-warning"  style={{fontWeight:"bold"}}> {prod.title}</h4>
                        <p className="card-text" style={{fontWeight:"bold"}}>{prod.category}</p>
                    <div className="d-flex justify-content-start pl-2 mb-0 ">
                        <img src={Fav} alt="fav"  style={{marginBottom:"0"}} className="pb-2" onClick={addToFavourite}/>
                    </div>
                </div>
            )
        )
    )

}
export default Card