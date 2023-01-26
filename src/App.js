import './App.css';
import styled from 'styled-components';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <Contanier>
    <Form/>
    <List/>
    </Contanier>

    );
}

const Contanier = styled.div`
display: flex;
flex-direction: column;
max-width: 500px;
margin: 0 auto;
gap: 16px;
`
export default App;
