import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { eventsUrl } from '../../utils/apiUrls';

import EventComponent, { Event } from 'components/Event';

import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

type ResponseData = {
  id: number;
  title: string;
  date: string;
  description: string;
  picture: string;
  category: string;
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
    category: record.category,
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
    const url = eventsUrl;
    const res = await fetch(url, options);
    const data = await res.json();
    setEvents(mapResponse(data));
  }, []);

  const handleAddEventClick = () => {
    navigate('/form');
  };

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleDelete = async (id: number) => {
    await fetch(`${eventsUrl}/` + id, {
      method: 'DELETE',
    });
    const newEvents = events.filter((event) => event.id !== id);
    setEvents(newEvents);
  };

  return (
    <Container>
      <Typography variant='h2'>Events list</Typography>

      {events.map((event: Event) => (
        <Grid
          container
          justifyContent='center'
          spacing={3}
          marginBottom={4}
          key={event.id}
        >
          <EventComponent
            id={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            category={event.category}
            phone={event.phone}
            email={event.email}
            place={event.place}
            picture={event.picture}
            onDelete={handleDelete}
          />
        </Grid>
      ))}
      <Button
        onClick={handleAddEventClick}
        size='large'
        variant='contained'
        color='error'
        style={{ fontSize: '15px' }}
      >
        Add new event
      </Button>
    </Container>
  );
};

export { EventsList };
