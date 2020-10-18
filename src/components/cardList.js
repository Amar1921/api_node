import React from "react";
import card from './card'
import $ from 'jquery'
const cardList =(props) => {


    return(
        <div className="container" id="b2" >
            <div className="row mt-2 vignets " id="slideCard">
                    {
                        (props.product.map((product)=><card className="img2"  info={product} id={product}/>))
                    }
            </div>
        </div>
    )
}
export default cardList