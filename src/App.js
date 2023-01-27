import "./App.css";
import styled from "styled-components";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [items, setState] = useState(InitiallItems);

  const handleAddItem = (event) => {
    event.preventDefault();
    console.log(event.target.date.value);
    console.log(event.target.distance.value);
    const newItem = {
      date: event.target.date.value,
      distance: event.target.distance.value,

    };
    const newItems = [newItem, ...items];
    setState(newItems);
  };



  return (
    <Contanier>
      <Form onSubmit = {handleAddItem}/>
      <List items={items} />
    </Contanier>
  );
}

const InitiallItems = [
  { date: "01-01-2021", distance: 10 },
  { date: "01-01-2021", distance: 10 },
  { date: "01-01-2021", distance: 10 },
];

const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  gap: 16px;
`;
export default App;
