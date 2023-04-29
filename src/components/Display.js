import React from 'react';

function Display(props) {
   return (
    <div>
        <h4>a. {props.firstName}</h4>
        <h4>b. {props.lastName}</h4>
    </div>
   )
}
export default Display;