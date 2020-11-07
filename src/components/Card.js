import React, {useEffect, useState} from "react";
import img from "../Mockup/shop.png";
import fav from "../Mockup/heart.svg";

function Card(props) {
     let [arrayFav, setArrayFav] = useState([])
    let arrayFavs = arrayFav
    function AddToFavourites(e) {
       if( e.target.style.backgroundColor === "white"){
           e.target.style.backgroundColor = "red"
            const id = e.target.id
         //  console.log(e.target.id)
         //  console.log(props.product[id-1])
             let arr = props.product[id-1]
             return  arrayFavs.push(arr)

       }else {
           const id = e.target.id
           e.target.style.backgroundColor = "white"
         //  console.log(e.target.style)
           console.log(e.target.id)
           console.log(props.product[id-1])
       }

    }
    function displayFav() {
        console.log(arrayFavs)
    }
    useEffect(()=>{
        displayFav()
    },[])

    return (
        props.product.map((prod, id) => (
                <div
                    className="col-8 col-sm-5 col-md-3 my-2 mx-1  d-flex flex-column justify-content-between cardImage card "
                    key={prod.id}>
                    <img src={img} className="" alt="logo" style={{width: "auto", height: "100px"}}/>
                    <div className="overflow-hidden rounded">
                        {/*<p className="card-text"><span style={{fontWeight:"bold"}}>Retailer </span> {prod.retailer}</p>
                        <h4 className="card-title text-warning" ><span style={{fontWeight:"bold"}}> {prod.title}</span></h4>
                        <p className="card-text"><span style={{fontWeight:"bold"}}>Category </span>  {prod.category}</p>*/}
                        <p className="card-text" style={{fontWeight: "bold"}}> {prod.retailer}</p>
                        <h4 className="card-title text-warning" style={{fontWeight: "bold"}}> {prod.title}</h4>
                        <p className="card-text" style={{fontWeight: "bold"}}>{prod.category}</p>
                    </div>
                    <div className="d-flex justify-content-start pl-2 py-2">
                        <img src={fav} alt="fav" onClick={AddToFavourites} style={{background:"red"}} id={prod.id}/>
                    </div>
                </div>
            )
        )
    )

}

export default Card