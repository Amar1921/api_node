import React from "react";

export const Navbar=()=>(
    <nav className="navbar navbar-expand-lg pb-4" id="navbar" style={{background:"#6232a8"}}>
        <a className="navbar-brand" id="titleNav" href="#" style={{marginLeft:"80px",color:"withe"}}>ShopFully</a>
    </nav>
);

export const Slider =() =>(
    <div className=" d-sm-block">
        <a className="btn btn-light btn-lg toggle"  id="menu-toggle"><i className="fa fa-bars"> </i></a>
        <div className="bg-light pl-2" id="sidebar-wrapper">
           {/* <img src={fav} alt="logo" style={{widht:"20px", height:"20px"}}/>*/}
            <a className="btn btn-light btn-lg toggle" id="menu-close"><i className="fa fa-arrow-left"> </i></a>
            <h3>Favourites</h3>
            <p>The List Of Favourites </p>
            <hr style={{width:"80%"}}/>
        </div>
    </div>
)
                /************FUNCTION API ERROR******************/
export const ErrorApi = () =><h3 className="text-danger text-center">Connection to server failed !</h3>
