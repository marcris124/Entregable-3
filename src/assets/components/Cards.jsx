import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Cards = ({url}) => {

  const [users,setusers] = useState({})

  useEffect(() => {
    axios.get(url)
    .then(res => setusers(res.data))

  },[])

  console.log(users);
  return (
    <div className='population'>

      <img src={users.image} alt="" />
      <div className="status"> 
              <h3>{users.status} </h3>
            </div>
      <article className='container-info'> 
      <h2>{users.name} </h2>
      
      <div className="infoP"> 
      <p><b>Raze: </b> </p><h3> {users.species}</h3>
      </div>
      
      
      <div className="infoP"> 
        <p><b>Origin:</b>  </p><h3> {users.origin?.name} </h3>
      </div>
      
      <div className="infoP"> 
      <p><b>Episodes: </b> </p><h3> {users.episode?.length}</h3>
      </div>



      </article>

      
      
      
    </div>
  );
};

export default Cards;