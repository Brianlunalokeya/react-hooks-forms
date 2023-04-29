import React from 'react';

function Form(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.handleFirstNameChange} value={props.firstName}/>
                <input type="text" onChange={props.handleLastNameChange} value={props.lastName}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;
