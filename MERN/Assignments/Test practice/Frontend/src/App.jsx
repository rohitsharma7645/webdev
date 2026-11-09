import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Features/Home/Home';
import AddEvent from './Features/AddEvent/addEvent';
import EditEvent from './Features/EditEvent/EditEvent';
import NavBar from './shared/NavBar';
import EventDetails from './Features/EventDetails/EventDetails';

function App() {
  return (
    <BrowserRouter>

      <NavBar />
      <h1>Event Booking</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/edit-event/:id" element={<EditEvent />} />
        <Route path='/event/:id' element={<EventDetails/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;