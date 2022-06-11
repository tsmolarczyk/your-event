import Button from '@mui/material/Button';
import { useFormik } from 'formik';

const AddEventForm = () => {
  // const formik = useFormik({
  //   initialValues,
  // });
  return (
    <form>
      <label htmlFor='title'>Title</label>
      <input type='text' id='title' name='title' />

      <label htmlFor='date'>Date</label>
      <input type='date' id='date' name='date' />

      <label htmlFor='description'>Description</label>
      <input type='text' id='description' name='description' />

      <label htmlFor='picture'>Picture path</label>
      <input type='text' id='picture' name='picture' />

      <label htmlFor='category'>Choose a category:</label>
      <select id='category' name='category'>
        <option value='sport'>Sport</option>
        <option value='culture'>Cultural</option>
        <option value='health'>Health</option>
      </select>

      <label htmlFor='number'>Phone number</label>
      <input type='tel' id='number' name='number' />

      <label htmlFor='email'>Email</label>
      <input type='email' id='email' name='email' />

      <label htmlFor='place'>Place</label>
      <input type='text' id='place' name='place' />

      <Button variant='contained'>Submit</Button>
    </form>
  );
};

export { AddEventForm };

// id: number;

// categories: string;
// phone: string;
// email: string;
// place: string;
