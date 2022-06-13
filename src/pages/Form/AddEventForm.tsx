import { useAddEventForm } from './useAddEventForm';

import { FormValues } from '../../utils/types';

import * as Yup from 'yup';

import { Formik, Form } from 'formik';

import { Box, MenuItem } from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Select } from '@mui/material';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)({
  marginTop: 15,
});

const validationSchema = Yup.object({
  title: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  description: Yup.string().required('Description is required'),
  picture: Yup.string().required('Add a picture'),
  phone: Yup.string()
    .max(13, 'Phone number is too long')
    .min(7, 'Phone number is too short')
    .required('Phone number is required'),
  email: Yup.string()
    .email('Must be valid email adress')
    .required('Email is required'),
  place: Yup.string().required('Adress of the event is required'),
});

const initialValues: FormValues = {
  title: '',
  date: '',
  description: '',
  picture: '',
  category: 'sport',
  phone: '',
  email: '',
  place: '',
};

const commonProps = {
  InputLabelProps: { style: { fontSize: 20 } },
  InputProps: { style: { fontSize: 20 } },
  required: true,
  fullWidth: true,
};

const AddEventForm = () => {
  const { handleSubmit } = useAddEventForm();

  return (
    <Box margin={5}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          isValidating,
          resetForm,
          handleChange,
          handleReset,
          values,
        }) => (
          <Form noValidate autoComplete='off'>
            <Typography
              variant='h2'
              color='primary'
              align='center'
              marginBottom={2}
            >
              Add New Event
            </Typography>

            <Box>
              <StyledTextField
                label='Title'
                variant='outlined'
                color='info'
                type='text'
                id='title'
                name='title'
                onChange={handleChange}
                value={values.title}
                {...commonProps}
              />
              {errors.title && touched.title && <p>{errors.title}</p>}

              <StyledTextField
                id='datetime-local'
                type='datetime-local'
                defaultValue='2022-05-24T10:30'
                name='date'
                onChange={handleChange}
                value={values.date}
                {...commonProps}
              />
              {errors.date && touched.date && <p>{errors.date}</p>}

              <StyledTextField
                label='Description'
                variant='outlined'
                color='info'
                fullWidth
                required
                InputLabelProps={{ style: { fontSize: 20 } }}
                InputProps={{ style: { fontSize: 20 } }}
                type='text'
                id='description'
                name='description'
                onChange={handleChange}
                value={values.description}
              />
              {errors.description && touched.description && (
                <p>{errors.description}</p>
              )}

              <StyledTextField
                label='Picture'
                variant='outlined'
                color='info'
                fullWidth
                required
                InputLabelProps={{ style: { fontSize: 20 } }}
                InputProps={{ style: { fontSize: 20 } }}
                type='text'
                id='picture'
                name='picture'
                onChange={handleChange}
                value={values.picture}
              />
              {errors.picture && touched.picture && <p>{errors.picture}</p>}

              <Select
                fullWidth
                name='category'
                value={values.category}
                onChange={handleChange}
              >
                <MenuItem value='sport'>Sport</MenuItem>
                <MenuItem value='culture'>Culture</MenuItem>
                <MenuItem value='health'>Health</MenuItem>
              </Select>

              <StyledTextField
                label='Phone'
                variant='outlined'
                color='info'
                fullWidth
                required
                InputLabelProps={{ style: { fontSize: 20 } }}
                InputProps={{ style: { fontSize: 20 } }}
                type='text'
                id='phone'
                name='phone'
                onChange={handleChange}
                value={values.phone}
              />
              {errors.phone && touched.phone && <p>{errors.phone}</p>}

              <StyledTextField
                label='Email'
                variant='outlined'
                color='info'
                fullWidth
                required
                InputLabelProps={{ style: { fontSize: 20 } }}
                InputProps={{ style: { fontSize: 20 } }}
                type='email'
                id='email'
                name='email'
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email && <p>{errors.email}</p>}

              <StyledTextField
                label='Adress'
                variant='outlined'
                color='info'
                fullWidth
                required
                InputLabelProps={{ style: { fontSize: 20 } }}
                InputProps={{ style: { fontSize: 20 } }}
                type='text'
                id='place'
                name='place'
                onChange={handleChange}
                value={values.place}
              />
            </Box>
            {errors.place && touched.place && <p>{errors.place}</p>}

            <Button variant='contained' type='submit' size='large'>
              Submit
            </Button>

            <Button
              color='warning'
              variant='contained'
              type='reset'
              size='large'
              onClick={handleReset}
            >
              Reset
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export { AddEventForm };
