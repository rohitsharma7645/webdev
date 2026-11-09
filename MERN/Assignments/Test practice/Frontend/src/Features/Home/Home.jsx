import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';
import axios from 'axios';

function Home() {

    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);

    // Get events
    const getEvents = async () => {
        try {
            const response = await axios.get(
                'http://localhost:5000/events/'
            );

            setEvents(response.data);
            setFilteredEvents(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getEvents();
    }, []);

    // Fuzzy search + 500ms debounce
    useEffect(() => {

        const timer = setTimeout(() => {

            let result = events;

            if (search.trim() !== '') {

                const fuse = new Fuse(events, {
                    keys: ['title', 'category', 'location'],
                    threshold: 0.4
                });

                result = fuse
                    .search(search)
                    .map(item => item.item);
            }

            setFilteredEvents(result);

        }, 500);

        return () => clearTimeout(timer);

    }, [search, events]);

    // Delete event
    const deleteEvent = async (id) => {

        try {

            await axios.delete(
                `http://localhost:5000/events/${id}`
            );

            getEvents();

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>

            <h1>Events</h1>

            {/* Search */}
            <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Events */}
            {filteredEvents.length === 0 ? (

                <p>No events found.</p>

            ) : (

                <div>

                    {filteredEvents.map((event) => (

                        <div key={event.id}>

                            <h2>{event.title}</h2>

                            <p>{event.description}</p>

                            <p>Category: {event.category}</p>

                            <p>Location: {event.location}</p>

                            <p>Date: {new Date(event.event_date).toLocaleString()}</p>

                            <p>Price: ₹{event.price}</p>

                            <p>Available Seats: {event.available_seats}</p>

                            {/* See Details */}
                            <Link to={`/event/${event.id}`}>
                                <button>See Details</button>
                            </Link>

                            {/* Edit */}
                            <Link to={`/edit-event/${event.id}`}>
                                <button>Edit</button>
                            </Link>

                            {/* Delete */}
                            <button onClick={() => deleteEvent(event.id)}>
                                Delete
                            </button>

                            <hr />

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default Home;