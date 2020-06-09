import React, { useState } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Button } from "arwes";
const axios = require('axios');

const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState('');
  const { getTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getTokenSilently();

      const res = await axios({
        url: 'http://localhost:5000/graphql',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'post',
        data: {
          query: `
        {
          ship(shipId:1){
            name
            price
          }
        }
        `,
        },
      });

      setShowResult(true);
      setApiMessage(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onClick={callApi}>Ping External API</Button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  );
};

export default ExternalApi;
