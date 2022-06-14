import Button from '@mui/material/Button';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const NavBar = () => {
  return (
    <Box margin={5}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button
          startIcon={<EventIcon />}
          size='large'
          color='secondary'
          variant='contained'
          style={{ fontSize: '15px' }}
        >
          Event List
        </Button>
      </Link>

      <Link to='/form' style={{ textDecoration: 'none' }}>
        <Button
          startIcon={<FormatAlignCenterIcon />}
          size='large'
          color='primary'
          variant='contained'
          style={{ fontSize: '15px' }}
        >
          Form
        </Button>
      </Link>
    </Box>
  );
};

export { NavBar };
