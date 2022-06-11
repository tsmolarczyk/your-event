import Button from '@mui/material/Button';
import { Event } from './Event';
import { Typography } from '@mui/material';

const EventsList = () => {
  return (
    <>
      <Typography variant='h2'>Events list</Typography>
      <Button size='large' variant='contained' color='error'>
        Add new event
      </Button>
    </>
  );
};

export { EventsList };
