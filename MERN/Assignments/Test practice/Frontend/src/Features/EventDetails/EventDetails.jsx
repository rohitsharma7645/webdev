
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function EventDetails() {

    const { id } = useParams();

    const [event, setEvent] = useState(null);

    const getEvent = async () => {

        try {

            const response = await axios.get(
                `http://localhost:5000/events/${id}`
            );

            setEvent(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {
        getEvent();
    }, [id]);

    if (!event) {
        return <p>Loading...</p>;
    }

    return (
        <div>

            <h1>{event.title}</h1>

            <p>
                <strong>Description:</strong> {event.description}
            </p>

            <p>
                <strong>Category:</strong> {event.category}
            </p>

            <p>
                <strong>Location:</strong> {event.location}
            </p>

            <p>
                <strong>Date:</strong>{' '}
                {new Date(event.event_date).toLocaleString()}
            </p>

            <p>
                <strong>Price:</strong> ₹{event.price}
            </p>

            <p>
                <strong>Total Seats:</strong> {event.total_seats}
            </p>

            <p>
                <strong>Available Seats:</strong> {event.available_seats}
            </p>

            <Link to="/">
                <button>Back to Events</button>
            </Link>

        </div>
    );
}

export default EventDetails;
