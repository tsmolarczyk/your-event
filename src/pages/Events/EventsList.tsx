import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import EventComponent, { Event } from 'components/Event';

type ResponseData = {
  id: number;
  title: string;
  date: string;
  description: string;
  picture: string;
  categories: string;
  phone: string;
  email: string;
  place: string;
}[];

const mapResponse = (response: ResponseData): Event[] => {
  return response.map((record: Event) => ({
    id: record.id,
    title: record.title,
    date: record.date,
    description: record.description,
    picture: record.picture,
    categories: record.categories,
    phone: record.phone,
    email: record.email,
    place: record.place,
  }));
};

const EventsList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  const fetchEvents = useCallback(async () => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const url = 'http://localhost:3001/events';
    const res = await fetch(url, options);
    const data = await res.json();
    setEvents(mapResponse(data));
  }, []);

  const handleAddEventClick = () => {
    navigate('/form');
  };

  console.log(events);
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <Typography variant='h2'>Events list</Typography>

      {events.map((event: Event) => (
        <EventComponent
          key={event.id}
          id={event.id}
          title={event.title}
          place={event.place}
        />
      ))}
      <Button
        onClick={handleAddEventClick}
        size='large'
        variant='contained'
        color='error'
      >
        Add new event
      </Button>
    </>
  );
};

export { EventsList };
