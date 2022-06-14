import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { DeleteOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledParagraph = styled(Typography)({
  marginLeft: 14,
  fontSize: 14,
  marginBottom: 5,
});
type Props = {
  id: number;
  title: string;
  date: string;
  description: string;
  picture: string;
  category: string;
  phone: string;
  email: string;
  place: string;
  onDelete: (id: number) => void;
};

const Event = ({
  id,
  title,
  date,
  description,
  place,
  picture,
  category,
  phone,
  email,
  onDelete,
}: Props) => {
  return (
    <Grid item md={7} direction='column' alignItems='center'>
      <Card>
        <CardHeader
          fontSize={22}
          action={
            <IconButton onClick={() => onDelete(id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={
            <Typography gutterBottom variant='h2' component='h2'>
              {title}
            </Typography>
          }
          subheader={date}
        />
        <StyledParagraph>Adress: {place}</StyledParagraph>
        <StyledParagraph>Category: {category}</StyledParagraph>
        <StyledParagraph>Phone number: {phone}</StyledParagraph>
        <StyledParagraph>Email: {email}</StyledParagraph>

        <CardMedia
          component='img'
          height='240'
          width='50'
          image={picture}
          alt='event picture'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export { Event };
