import React from 'react';
 // Due to webpack, we can import css into js file
 // But it won't be bundled together, .css will be bundled separately
import classes from './Person.css'; 

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;