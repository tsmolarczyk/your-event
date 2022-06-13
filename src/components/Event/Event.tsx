import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { DeleteOutlined } from '@mui/icons-material';

type Props = {
  id: number;
  title: string;
  place: string;
  onDelete: any;
};

const Event = ({ id, title, place, onDelete }: Props) => {
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
        />
      </Card>
    </Box>
  );
};

export { Event };
