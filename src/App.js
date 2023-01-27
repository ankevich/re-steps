import "./App.css";
import styled from "styled-components";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [items, setState] = useState(InitiallItems);

  const handleAddItem = (newItem) => {
    const itemWithSameDate = items.find((item) => item.date === newItem.date);

    if (itemWithSameDate) {
      const newItems = items.map((item) =>
        item.date === newItem.date
          ? { ...item, distance: parseInt(item.distance) + parseInt(newItem.distance) }
          : item
      );
      setState(newItems);
    } else {
      const newItems = [newItem, ...items];
      setState(newItems);
    }
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setState(newItems);
  };

  return (
    <Contanier>
      <Form onSubmit={handleAddItem} />
      <List items={items} deleteItemByIndex={handleDeleteItem} />
    </Contanier>
  );
}

const InitiallItems = [
  { date: "01-01-2021", distance: 10 },
  { date: "01-01-2022", distance: 10 },
  { date: "01-01-2023", distance: 10 },
];

const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  gap: 16px;
`;
export default App;
