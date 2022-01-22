import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import styles from './UsersList.module.css';
import Button from '../UI/Button';

const UsersList = (props) => {



  const deleteHandler = key => {
    props.deleteUser(key);
  }


  return (
    <Card className={styles.users}>
      <ul>
        {
          props.users.map((user) => (
            <li
              onClick={deleteHandler.bind(this, user.key)}
              key={user.key}>
              {user.name} ({user.age} years old)</li>
          ))

        }
      </ul>
    </Card>
  );
}

export default UsersList;
