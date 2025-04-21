import './styles.css';
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';

function App() {
  const initialState = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initialState);
  return (
    <div className="App">
      <div className="container">
        <h1>Bug blaster</h1>
        <TicketForm dispatch={dispatch}></TicketForm>
      </div>
    </div>
  );
}

export default App;
