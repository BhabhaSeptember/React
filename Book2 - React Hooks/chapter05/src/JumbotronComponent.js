import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

function JumbotronComponent(props) {
  return (
    <div>
      <Jumbotron>
        
        <h1>Hello, world!</h1>
        <p>{props.children}</p>

        {/* =============== EXAMPLE1: =============== */}
        {/* <p>
          <u>EXAMPLE1: (Inside JumbotronComponent)</u>
          <br/>
          <br/>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p> */}

        <p>
          <Button variant="primary">Learn more</Button>
        </p>

      </Jumbotron>
    </div>
  );
}

export default JumbotronComponent;
