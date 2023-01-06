import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const RickAndMortyApp = () => {

  const [location,setlocation] = useState ({})  

 const [searchId, setSearchId] = useState("")

 const [loading , setloading] = useState(true)

useEffect(() => {
  const idRandom = Math.floor(Math.random()*126)+1
  axios.get(`https://rickandmortyapi.com/api/location/${idRandom}`)
  .then(res => { setlocation(res.data)

    setTimeout(() => setloading(false), 2000)
  //  setloading(false)

  }
    
   )
},[])

console.log(location);

 

const searchType = () =>{
  axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
  .then(res => setlocation(res.data))

}

const changeBodyColors = document.body.style = `background:#05292E` 

  return (
    <div className=''>

    {
      loading ? (
        <div className='loading-screen'>
      
       <img src="https://www.gifss.com/dibujos-animados/rick-morty/images/rick-y-morty-10.gif" alt="" />
        </div>

      ):(

      

        
        
        <>
      <header className='nav-container'>  
      <img src={"/src/assets/images/image2.png"} alt="img1" />  

    <div className='search'>  

    
      <input 
      type="text" 
      placeholder='type a id (1 - 126) Dimension '
      value={searchId}
      onChange={e => setSearchId(e.target.value)}
       />

          <button onClick={searchType}>Search</button>
    </div>        
      </header>

      <main className='container'>
      <article className='locations'>

       <div className='info'>
        <h2>Name:</h2> <p>{location.name} </p> 
        </div>
        
        <div className="info">
           <h3>Type:</h3>   <p>{location.type}</p>
        </div>

        <div className="info">
          <h3> Dimension:</h3> <p>{location.dimension}</p>
        </div>

        <div className="info">
           <h3> Population:</h3> <p>{location.residents?.length}</p>   
        </div>
      
      </article>

     
      <section className='cards'>
 {
      location.residents?.map(locations => (
      <Cards
        url={locations}   
        key={locations}
            />

      ))
      

    }

      </section>
      
    
   
</main>
</>
      )
    }
    </div>
  );
};



export default RickAndMortyApp;