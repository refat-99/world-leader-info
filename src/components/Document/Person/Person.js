import React from 'react';
import './Person.css'

const Person = (props) => {
    const {name,age,job,country,img,proparty} = props.person;
    
   
    return (
        <div className='col-md-3 m-3'>
         <div className="card">
                    <img src={img} className="card-img-top" alt="Image not found"/>
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-title">Job: {job}</p>
                    <p className="card-title">Life Time : {age} </p>
                    <p className="card-title">Country: {country} </p>
                    <p className="card-text fw-bold">Proparty: ${proparty} </p>
                    <button onClick={()=> props?.propartyIncrease(proparty,name)} className='btn btn-dark '><i className="fa-solid fa-user-plus"></i> add to cart</button>
                    </div>
                </div>
        </div>
    );
};

export default Person;