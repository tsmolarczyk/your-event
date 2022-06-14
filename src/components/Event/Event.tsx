import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { DeleteOutlined } from '@mui/icons-material';

type Props = {
  id: number;
  title: string;
  place: string;
  picture: string;
  onDelete: (id: number) => void;
};

const Event = ({ id, title, place, picture, onDelete }: Props) => {
  return (
    <Box>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => onDelete(id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={title}
          subheader={place}
          image={picture}
        />
        <CardMedia
          component='img'
          height='140'
          image={picture}
          alt='event picture'
        />
      </Card>
    </Box>
  );
};

export { Event };
