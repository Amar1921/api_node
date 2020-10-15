import React from "react";
import card from './card'
const cardList =(props) => {

    return(
        <div className="container img" id="b2" >
            <div className="row mt-2 " id="slideCard">
                    {
                        props.product.map((product)=><card  info={product} id={product}/>)
                    }
            </div>
        </div>
    )
}
export default cardList