import Button from '@mui/material/Button';
import EventIcon from '@mui/icons-material/Event';

const NavBar = () => {
  return (
    <div>
      <EventIcon></EventIcon>
      <Button size='large' color='primary' variant='contained'>
        Form
      </Button>
      <Button size='large' color='secondary' variant='contained'>
        Event List
      </Button>
    </div>
  );
};

export { NavBar };
