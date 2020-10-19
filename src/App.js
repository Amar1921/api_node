import React, {useState} from 'react';
import $ from 'jquery'
import 'bootstrap'
import Spinner from "reactstrap/es/Spinner";
import 'bootstrap/dist/css/bootstrap.css'
import './style/App.css';
import axios from 'axios';
import './style/style.css'
import Card from "./components/Card";
import {ErrorApi} from './components/header'
function App() {

    const [product, setProduct] = useState([]);
    const [spinner, setSpinner] = useState("");
    const [error,setError] = useState("")
    const URL = 'http://localhost:3001/api/flyers';
//
    /****************FUNCTION FETCH API***************/
   async function fetchApi(a,b) {
                      setError("")
                      setSpinner(()=>(<Spinner animation="grow" size="lg" />))
                      await axios.get(URL)
                    .then((response)=>setProduct(response.data.slice(a,b)))
                          .then(()=>(setSpinner("")))
                    .catch((e)=>{
                        const errorFetch = `Erreur request ${e} !!!!`;
                         setError(errorFetch)
                         setSpinner("")
                    })
               }
             /***************DISPLAY RESULTS API OR ERROR************/
       const resultat = error===""?<Card product={product}/>:<ErrorApi/>

       const loading =()=>(
           <Spinner animation="border" role="status">
               <span className="sr-only">Loading...</span>
           </Spinner>)
     const affich = !resultat?loading():resultat

    /**************FUNCTION FOR PAGINATION ************/
       const getDataPage1 =()=> {
           fetchApi(0,99)
        }
        const getDataPage2 =()=> {
           fetchApi(100,199)
        }
        const getDataPage3 =()=> {
            fetchApi(300,399)
        }
        const getDataPage4 =()=> {
           fetchApi(400,499)
        }
        const getDataPage5 =()=> {
           fetchApi(500,599)
        }
        const getDataPage6 =()=> {
           fetchApi(600,699)
        }
        const getDataPage7 =()=> {
           fetchApi(700,799)
        }
        const getDataPage8 =()=> {
           fetchApi(800,821)
        }
    /******************* Menu SLIDE START*******************/
    $("#menu-close").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    /******************* FUNCTION Menu SLIDE END*************/

       return (
           <div className="App container">
               {/* PAGINATION*/}

               <nav aria-label="Page navigation example d-flex justify-content-center">
                <ul className="pagination">
                    <li className="page-item"><input className="page-link" type="button" value="Pages "/></li>
                    <li className="page-item"><input className="page-link" type="button" value="1"
                                                     onClick={getDataPage1}/></li>
                    <li className="page-item"><input className="page-link" type="button" value="2"
                                                     onClick={getDataPage2}/></li>
                    <li className="page-item"><input className="page-link" type="button" value="3"
                                                     onClick={getDataPage3}/></li>
                    <li className="page-item"><input className="page-link" type="button" value="4"
                                                     onClick={getDataPage4}/></li>
                    <li className="page-item"><input className="page-link" type="button" value="5"
                                                     onClick={getDataPage5}/></li>
                    <li className="page-item"><input className="page-link" type="button" value="6"
                                                     onClick={getDataPage6}/></li>
                    <li className="page-item"><input className="page-link" type="button" value="7"
                                                     onClick={getDataPage7}/></li>
                    <li className="page-item"><input className="page-link" type="button" value="8"
                                                     onClick={getDataPage8}/></li>
                </ul>
                   <div className="row my-2 d-flex justify-content-center justify-content-lg-around api " style={{height:"39px"}}>
                       {spinner}
                   </div>
            </nav>
               {/****************************LIST OF PRODUCTS************************/}

               <div className="row d-flex justify-content-center justify-content-lg-around api ">
                   {resultat}
               </div>
           </div>



    );
}

export default App;

