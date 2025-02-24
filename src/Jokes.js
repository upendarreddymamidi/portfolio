import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


function Jokes() {
  const [posts, setPosts] = useState();

  function getaJoke() {
   return axios.get('https://icanhazdadjoke.com/', { headers: { "Accept": "text/plain" } }
   )
      .then(response => {
        setPosts(response.data[0]);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }

//   const [data, setData] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const update = () => {
    if(loading)
    {
      axios
          .get('https://icanhazdadjoke.com/', { headers: { "Accept": "text/plain" } })
          .then((res) => {
            setData(res.data);
          })
  }
}

 useEffect(update, [loading]);

 const refreshPage = () => {
    window.location.reload();
  };


  return (
    <>

<Container>
      <Row className="justify-content-md-center mt-5">
       <div>
       <h3 className="justify-content-md-center mt-5" >Random Joke Generator</h3>
       <h6> Click on the "Get a Joke" button to get a joke.</h6>
       <h6> Click on the "Clear" button to clear.</h6>
<br /> 
<br />
<p style={{color: 'green'}}>{data}</p>
        <Button onClick={() => setLoading(true)} variant="primary" className="w-25">
               Get a Joke
            </Button>
            <Button style={{marginLeft: '50px' }} onClick={refreshPage} variant="primary" className="w-25">
                Clear
            </Button>
       </div>
      </Row>
    </Container>


    </>
  );
}


export default Jokes;