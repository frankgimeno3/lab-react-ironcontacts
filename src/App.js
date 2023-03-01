import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';



const allContacts = contacts;
const firstFiveContacts = allContacts.slice(0, 5);

function App() {
  const [currentContacts, setCurrentContacts] = useState(firstFiveContacts);
  const remainingContacts = allContacts.filter(
    (contact) => !currentContacts.includes(contact)
  );

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    setCurrentContacts([...currentContacts, randomContact]);
  };

  const sortByName = () => {console.log("sort by name")}
  const sortByPopularity = () => {console.log("sort by popularity")}

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} className="contactImage"/>
              </td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>
                {contact.wonOscar ? <span>PRIZE ICON HERE</span> : null}
              </td>
              <td>
                {contact.wonEmmy ? <span>PRIZE ICON HERE</span> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
