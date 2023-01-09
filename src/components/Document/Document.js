import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import "./Document.css";
import Person from "./Person/Person";

const Document = () => {
  const [persons, setPersons] = useState([]);       //main api state
  const [proparty, setProparty] = useState(0);     //proparty state
  const [leader, setLeader] = useState(['']);      //leader name state
  const [addPerson, setAddPerson] = useState(0);    //set prorson count state

  useEffect(() => {
    fetch("/world-leader.json")
      .then((res) => res.json())
      .then((data) => setPersons(data));
  }, []);

  //proparty function
  const propartyIncrease = (data, name) => {
    //proparty calculation
    const assat = Number(data);
    const newProparty = proparty + assat;
    setProparty(newProparty);
    //leader name calculation
    const man = leader +'/__' + name;
    setLeader(man);
     //count person calculation
    const totalPerson = addPerson + 1;
    setAddPerson(totalPerson);

  };

  return (
    <div className="row mt-5">
      {/* <h1 className='document'>#F4BB2B</h1> */}
      <div className="col-md-8">
        <div className="row">
          {persons.map((person) => (
            <Person
              person={person}
              key={person.id}
              propartyIncrease={propartyIncrease}
            ></Person>
          ))}
        </div>
      </div>

      <div className="col-md-4">
        <Cart 
          proparty={proparty}
          leader={leader}
          addPerson={addPerson}
         ></Cart>
      </div>
    </div>
  );
};
export default Document;
