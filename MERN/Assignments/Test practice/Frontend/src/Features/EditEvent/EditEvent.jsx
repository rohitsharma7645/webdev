import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditEvent() {

  const { id } = useParams();
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

  // Get event
  useEffect(() => {

    const getEvent = async () => {

      try {

        const response = await axios.get(
          `http://localhost:5000/events/${id}`
        );

        const data = response.data;

        setEvent({
          ...data,
          event_date: data.event_date.slice(0, 16)
        });

      } catch (error) {
        console.log(error);
      }

    };

    getEvent();

  }, [id]);

  const handleChange = (e) => {

    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:5000/events/${id}`,
        event
      );

      alert('Event updated successfully');

      navigate('/');

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div>

      <h1>Edit Event</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="title"
          placeholder="Title"
          value={event.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={event.description}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={event.category}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={event.location}
          onChange={handleChange}
        />

        <input
          type="datetime-local"
          name="event_date"
          value={event.event_date}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={event.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="total_seats"
          placeholder="Total Seats"
          value={event.total_seats}
          onChange={handleChange}
        />

        <input
          type="number"
          name="available_seats"
          placeholder="Available Seats"
          value={event.available_seats}
          onChange={handleChange}
        />

        <button type="submit">
          Update Event
        </button>

      </form>

    </div>
  );
}

export default EditEvent;