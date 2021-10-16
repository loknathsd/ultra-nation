import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,population,flag,region} = props.country;
    
    return (
        <div className="info-area">
            <h2>This is {name}</h2>
            <img style={{height:'100px'}} src={flag} alt="" />
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <button onClick ={()=>props.handleAddCountry(props.country)}>Add Country</button>
            
        </div>
    );
};

export default Country;