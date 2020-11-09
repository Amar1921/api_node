import React, {useEffect} from 'react'

const ArrayStorage =()=>{

  let tableau = []

    for( let i = 0; i < localStorage.length; i++){
        let amat = localStorage.key(i);
        tableau.push(amat)
    }
     console.log(tableau)

    return(

        <div>
            <ol className=" pr-2 ">
                {
                    tableau.map((dat, index)=>(<li key={index}>{localStorage.getItem(dat)}</li>))
                }
            </ol>
        </div>
    )
}
export default ArrayStorage