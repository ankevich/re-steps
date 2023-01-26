import styled from "styled-components";

const Container = () => {
  return (
    <StyledContainer>
      <Row>
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </Row>
      <List />
    </StyledContainer>
  );
};

const List = (props) => {
  return (
    <StyledList>
      <Row>
        <span>20.07</span>
        <span>12</span>
        <span>❌</span>
      </Row>
      <Row>
        <span>20.07</span>
        <span>12</span>
        <span>❌</span>
      </Row>
      <Row>
        <span>20.07</span>
        <span>12</span>
        <span>❌</span>
      </Row>
    </StyledList>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const StyledList = styled.div`
border-style: solid;
border-radius: 8px;
border-color: #000;
border-width: 2px;
padding: 10px;`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;`

export default Container;
