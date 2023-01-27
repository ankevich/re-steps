import styled from "styled-components";
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      date: event.target.date.value,
      distance: event.target.distance.value,
    }

    onSubmit(newItem);

    setDate("");
    setDistance("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label>Дата (ДД.ММ.ГГ)</label>
        <input
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Пройдено км</label>
        <input
          id="distance"
          name="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <input type="submit" value="OK" />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  // форма посередине экрана
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;

  width: 100%;
  height: 100%;

  label {
    padding: 16px 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  input,
  button {
    border: 2px solid #000;
    border-radius: 8px;
    padding: 16px;
    background-color: transparent;
  }
`;

export default Form;
