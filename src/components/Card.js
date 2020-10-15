import React from "react";
import img from "../Mockup/shop.png";
import fav from "../Mockup/heart.svg";
function Card(props){
    function AddToFavourites(e) {
         e.preventDefault()
      /*  localStorage.setItem("id",e.props.)
        console.log(localStorage.getItem("id"))*/
    }

    return(
        props.product.map((prod,index)=>(
                <div className="col-8 col-sm-5 col-md-3 my-2 mx-1  cardImage card " key={index}>
                    <img src={img} className="" alt="logo" style={{width:"auto", height:"100px"}}/>
                    <div className="overflow-hidden rounded">
                        <p className="card-text"><span style={{fontWeight:"bold"}}>Retailer </span> {prod.retailer}</p>
                        <h4 className="card-title text-warning" ><span style={{fontWeight:"bold"}}> {prod.title}</span></h4>
                        <p className="card-text"><span style={{fontWeight:"bold"}}>Category </span>  {prod.category}</p>
                    </div>
                    <div className="d-flex justify-content-start pl-2 pt-2">
                        <img src={fav} alt="fav"  onClick={AddToFavourites}/>
                    </div>
                </div>
            )
        )
    )

}
export default Card