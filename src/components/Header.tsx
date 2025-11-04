import { use, useState } from 'react'
import '../css/header.css'
export const Header = () => {

    const [hamburguesa, setHamburguesa] = useState(true)


    const handleHamburguesa = () =>{
        setHamburguesa(!hamburguesa)
    }



  return (
    <div className="container-header">
        <h2>Prueba</h2>
            {
                hamburguesa ? <i onClick={handleHamburguesa} className="fa-solid fa-bars"></i> : <i onClick={handleHamburguesa} className="fa-solid fa-x"></i>
            }  

        
    </div>
    
  )
}
