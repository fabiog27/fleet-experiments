import styled from 'styled-components';
import { useState } from "react";

const StyledApp = styled.div`
  // Your style here
`;

const StyledButton = styled.button`
width: 100px;
height: 50px;
`;

const fetchGreeting = async () => {
  console.log("clicked a button");
  const url = "http://localhost:3333/api/greeting";
  const options: RequestInit = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const message = data.message;
  console.log("message", message);

  return message;
};

export function App() {

  const [message, setMessage] = useState('');

  const updateMessage = async () => {
    const result = await fetchGreeting();
    setMessage(result);
  };

  return (
    <StyledApp>
      <StyledButton onClick={updateMessage}>
        Click
      </StyledButton>
      <p>
        {message}
      </p>
    </StyledApp>
  );
}

export default App;
