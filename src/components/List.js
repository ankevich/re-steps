import styled from "styled-components";

const List = ({ items, deleteItemByIndex }) => {
  return (
    <StyledContainer>
      <Row>
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </Row>
      <StyledList>
        {items.map((item, index) => {
          return (
            <Row key={index}>
              <span>{item.date}</span>
              <span>{item.distance}</span>
              <span onClick={() => deleteItemByIndex(index)}>❌</span>
            </Row>
          );
        })}
      </StyledList>
    </StyledContainer>
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
  padding: 10px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export default List;
