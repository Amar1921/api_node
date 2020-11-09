import React, {useEffect, useState} from "react";
import img from "../Mockup/shop.png";
import fav from "../Mockup/heart.svg";
import _ from 'lodash'


function Card(props) {
    const donnees = props.product
    const { id, title, start_date, end_date,retailer, category} =donnees
    /**************ARRAY  STORAGE**************/

/*    function AddToFavourites(e) {
          const id = e.target.id
        // const product = prods.product
        //  let prods = _.get('props.product')
          let category = props.product[id]["category"]
          let date = props.product[id]["end_date"]

       if( e.target.style.backgroundColor === "white"){
           e.target.style.backgroundColor = "red"

           localStorage.setItem(id,category)
          // console.log(prods)


       }else {
           e.target.style.backgroundColor = "white"
           //console.log(category)
           localStorage.removeItem(id);

       }

    }*/


const addToFav = (e) =>{
   // e.preventDefault()
   if( e.target.style.backgroundColor === "white"){

      // let data2 = donnees[e.target.id-1]
       const {category, id, end_date} = donnees[e.target.id-1]
       const prod = {
           "category" :category,
           "end_date" : end_date
       }
       console.log(`${id}  ${category} ${end_date}`)

       localStorage.setItem(id,prod["category"])
   }else {
       localStorage.removeItem(e.target.id)
   }


}

/************** END ARRAY  LOCALSTORAGE**************/


    return (
       donnees.map((inde) => (
                <div
                    className="col-8 col-sm-5 col-md-3 my-2 mx-1  d-flex flex-column justify-content-between cardImage card "
                    key={inde.id}>
                    <img src={img} className="" alt="logo" style={{width: "auto", height: "100px"}}/>
                    <div className="overflow-hidden rounded">
                        <p className="card-text" style={{fontWeight: "bold"}}> {inde.retailer}</p>
                        <h4 className="card-title text-warning" style={{fontWeight: "bold"}}> {inde.title}</h4>
                        <p className="card-text" style={{fontWeight: "bold"}}>{inde.category}</p>
                    </div>
                    <div className="d-flex justify-content-start pl-2 py-2">
                        <img src={fav} alt="fav" onClick={addToFav}  style={{backgroundColor: "white"}} id={inde.id}/>
                    </div>
                </div>
            )
        )
    )

}

export default Card