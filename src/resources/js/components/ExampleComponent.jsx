import React from "react";

function ExampleComponent(props) {
    console.log(props);
    return (
        <div>
            <h1>Hello, React!!!</h1>
            {props.message ? <p>{props.message}</p> : null}
            {props.user.name ? <p>{props.user.name}</p> : null}
            {props.user.email ? <p>{props.user.email}</p> : null}
        </div>
    );
}

export default ExampleComponent;
