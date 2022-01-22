import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUsers.module.css';
import Button from '../UI/Button';
import ErrorModal from './ErrorModal';


function AddUsers(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();


        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({ title: 'invalid input', message: 'Empty Input is not valid :)' })
            return;
        }


        if (+age < 1) {
            setError({ title: 'invalid age', message: 'Age can`t be negative :)' })
            return;
        }

        props.addUserToList(name, age);
        setName('');
        setAge('');


    }

    const errorHandler = () => {
        setError(null);
    }


    const usernameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };





    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message}
             onConfirm={errorHandler}></ErrorModal>}

            <Card className={styles.inputUser}>

                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>User Name:</label>
                    <input id='username' type="text" value={name} onChange={usernameChangeHandler}></input>

                    <label htmlFor='age' >Age:</label>

                    <input id='age' type="number" value={age} onChange={ageChangeHandler}></input>

                    <Button type="submit" > Add User </Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUsers;