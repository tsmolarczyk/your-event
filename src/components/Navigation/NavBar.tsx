import Button from '@mui/material/Button';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import css from './NavBar.module.css';

const NavBar = () => {
  return (
    <Box className={css.navBar}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button
          startIcon={<EventIcon />}
          size='large'
          color='secondary'
          variant='contained'
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
        >
          Form
        </Button>
      </Link>
    </Box>
  );
};

export { NavBar };
