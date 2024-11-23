import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { Media } from "react-bootstrap";

function Github() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("bhabha");
  //   const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  //Use effect called after component mounts
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    getData();
  };

  const getData = async () => {
    const res = await
    axios
    //   .get(`https://api.github.com/search/users?q=bhabha`)
        .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => {
        console.log(res.data.items);
        setData(res.data.items);
        setIsLoading(false);
      });
  };

  const listUsers = data.map((user) => (
    <Media key={user.id}>
      <a href={user.html_url}>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={user.avatar_url}
          alt="Generic placeholder"
        />
      </a>
      
      <Media.Body>
        <h5>Login: {user.login}</h5>
        <p>Id: {user.id}</p>
        <hr/>
      </Media.Body>
    </Media>
    
  ));

  return (
    <div>
        <br/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <br/>
      <h3><u>GitHub Users</u></h3>
      <hr />
      {/* { isLoading && 
            <h4>Getting data...</h4>} */}

      {isLoading && <ReactLoading type="cubes" color="#444" />}

      {listUsers}
    </div>
  );
}

export default Github;
