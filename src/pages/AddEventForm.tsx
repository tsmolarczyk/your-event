import Button from '@mui/material/Button';

const AddEventForm = () => {
  return (
    <form>
      <label htmlFor='title'>Title</label>
      <input type='text' id='title' name='title' />

      <label htmlFor='description'>Description</label>
      <input type='text' id='description' name='description' />

      <label htmlFor='number'>Phone number</label>
      <input type='tel' id='number' name='number' />

      <Button variant='contained'>Submit</Button>
    </form>
  );
};

export { AddEventForm };
