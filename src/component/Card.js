import React from 'react';
import { Link } from 'react-router-dom';



const Card=(props)=>{
    return(
        <div className='card'>
          
  <Link to="/prompt"  className='button-19'>{props.topic}</Link>

        </div>
    )
}

export default Card;