import React from 'react';
import './App.css';
import ContactList from './contacts.json';
import ReactDOM from "react-dom";

let id =0;
const setId = (key) => {
    id = key;

    ReactDOM.render(App() ,document.getElementById('root'));

};
const getid = ()=>{
    console.log(id);
    return id;
};
const contactDetails = (contact)=>
    (
    <div className="content">
        <div className="info">
            <div className="col">
                <span className="avatar">&#9787;</span>
            </div>
            <div className="col">
                <span className="name">{contact.firstName}</span>
                <span className="name">{contact.lastName}</span>
            </div>
        </div>
        <div className="info">
            <span className="info-line">&phone; {contact.phone}</span>
            <span className="info-line">&#9993; {contact.email}</span>
        </div>
    </div>
    );


const showContact = (data,idKey)=>(
    <div className="contact" key={idKey} data-id="id" onClick={()=>{
        setId(idKey)
        }}>
        <span className="avatar small">&#9787;</span>
        <span className="title">{data.firstName} {data.lastName}</span>
    </div>
);
const makeContact = ()=>{
const list = [];
let idKey = 0;
for (let contact of ContactList){
  list.push(showContact(contact,idKey))  ;
  idKey++;
}
return list;
};
const App =()=> (
        <div className="container">
          <header>&#9993; Contact Book</header>
      <div id="book">
          <div id="list">
          <h1>Contacts</h1>
          <div className="content">
              {makeContact()}
      </div>
      </div>
      <div id="details">
          <h1>Details</h1>
          {contactDetails(ContactList[getid()])}
      </div>
      </div>
      <footer>Contact Book SPA &copy; 2017</footer>
      </div>
    );


export default App;
