import styled from "styled-components";

const Form = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <div>
        <label>Дата (ДД.ММ.ГГ)</label>
        <input id = "date"name="date"/>
      </div>
      <div>
        <label>Пройдено км</label>
        <input id="distance"name="distance"/>
      </div>
      <input type="submit" value="OK"/>
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
