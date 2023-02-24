import './App.css';
import BookingFlight from './Components/BookingFlight/BookingFlight';
import FlightInformation from './Components/FlightInformation/FlightInformation';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
        <Header />
        <FlightInformation />
        <BookingFlight />
    </div>
  );
}

export default App;
