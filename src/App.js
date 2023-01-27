import './App.css';
import styled from 'styled-components';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <Contanier>
    <Form/>
    <List items={items}/>
    </Contanier>

    );
}

const items = [
  {date:'01-01-2021', distance: 10},
  {date:'01-01-2021', distance: 10},
  {date:'01-01-2021', distance: 10}
]

const Contanier = styled.div`
display: flex;
flex-direction: column;
max-width: 500px;
margin: 0 auto;
gap: 16px;
`
export default App;
