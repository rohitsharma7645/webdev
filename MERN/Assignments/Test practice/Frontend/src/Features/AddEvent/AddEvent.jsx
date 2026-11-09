import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddEvent() {

  const navigate = useNavigate();

  const [event, setEvent] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    event_date: '',
    price: '',
    total_seats: '',
    available_seats: ''
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        'http://localhost:5000/events/',
        event
      );


      navigate('/');

    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div>

      <h1>Add Event</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="title"
          placeholder="Title"
          value={event.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={event.description}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={event.category}
          onChange={handleChange}
          required
        />

        <input
          name="location"
          placeholder="Location"
          value={event.location}
          onChange={handleChange}
          required
        />

        <input
          type="datetime-local"
          name="event_date"
          value={event.event_date}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={event.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="total_seats"
          placeholder="Total Seats"
          value={event.total_seats}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="available_seats"
          placeholder="Available Seats"
          value={event.available_seats}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Event
        </button>

      </form>

    </div>
  );
}

export default AddEvent;