import { useEffect, useState } from 'react';
import Card from './components/UI/Card';
import AddUsers from './components/users/AddUsers';
import UsersList from './components/users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserToListHandler(username, age) {
    setUsersList((prevUsersList) => {

      return [...prevUsersList, 
        { name: username,
           age: age,
           key: new Date().toDateString() + Math.random().toString()}]
    });

  }

  function deleteUserHandler(key) {
    const users = usersList.filter((user) => user.key !== key);
    setUsersList(users);
  }

  return (

    <div className="App">
      <AddUsers addUserToList={addUserToListHandler}> </AddUsers>
      {usersList.length > 0 && <UsersList users={usersList} deleteUser={deleteUserHandler}></UsersList>}
    </div>
  );
}

export default App;
