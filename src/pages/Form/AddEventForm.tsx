import Button from '@mui/material/Button';
import * as Yup from 'yup';
import { useState } from 'react';
import css from './AddEventForm.module.css';
import { useCallback } from 'react';
import { Box } from '@mui/material';

import { Formik, FormikProps, Form, Field, useFormik } from 'formik';
import { Typography } from '@mui/material';

interface MyFormValues {
  title: string;
  date: string;
  description: string;
  picture: string;
  category: string;
  phone: string;
  email: string;
  place: string;
}

const AddEventForm = () => {
  const postEvent = () => {
    fetch('http://localhost:3001/events', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ ...formInputs }),
    });
  };

  const [formInputs, setFormInputs] = useState<MyFormValues>({
    title: '',
    date: '',
    description: '',
    picture: '',
    category: 'sport',
    phone: '',
    email: '',
    place: '',
  });

  const formik: FormikProps<MyFormValues> = useFormik<MyFormValues>({
    initialValues: {
      title: '',
      date: '',
      description: '',
      picture: '',
      category: 'sport',
      phone: '',
      email: '',
      place: '',
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (values) => {
      setFormInputs(values);
      postEvent();
    },
  });

  return (
    <Box margin={5}>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
        }}
      >
        {({ errors, touched, isValidating, resetForm }) => (
          <Form className={css.formContainer} onSubmit={formik.handleSubmit}>
            <Typography
              variant='h2'
              color='primary'
              align='center'
              marginBottom={2}
            >
              Add New Event
            </Typography>
            <Box className={css.inputsContainer}>
              <Field
                type='text'
                id='title'
                name='title'
                placeholder='Title'
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {formik.errors.title && formik.touched.title ? (
                <p className={css.errorMsg}>{formik.errors.title}</p>
              ) : null}

              <Field
                type='date'
                id='date'
                name='date'
                placeholder='Date of the event'
                onChange={formik.handleChange}
                value={formik.values.date}
              />
              {formik.errors.date && formik.touched.date ? (
                <p>{formik.errors.date}</p>
              ) : null}

              <Field
                type='text'
                id='description'
                name='description'
                placeholder='Description'
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.errors.description && formik.touched.description ? (
                <p>{formik.errors.description}</p>
              ) : null}

              <Field
                type='text'
                id='picture'
                name='picture'
                placeholder='Picture source'
                onChange={formik.handleChange}
                value={formik.values.picture}
              />
              {formik.errors.picture && formik.touched.picture ? (
                <p>{formik.errors.picture}</p>
              ) : null}

              <Field
                as='select'
                name='category'
                value={formik.values.category}
                onChange={formik.handleChange}
              >
                <option value='sport'>Sport</option>
                <option value='culture'>Culture</option>
                <option value='health'>Health</option>
              </Field>

              <Field
                type='text'
                id='phone'
                name='phone'
                placeholder='Phone number'
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.errors.phone && formik.touched.phone ? (
                <p>{formik.errors.phone}</p>
              ) : null}

              <Field
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <p>{formik.errors.email}</p>
              ) : null}

              <Field
                type='text'
                id='place'
                name='place'
                placeholder='Adress'
                onChange={formik.handleChange}
                value={formik.values.place}
              />
            </Box>
            {formik.errors.place && formik.touched.place ? (
              <p>{formik.errors.place}</p>
            ) : null}

            <Box>
              <Button variant='contained' type='submit'>
                Submit
              </Button>

              <Button
                color='warning'
                variant='contained'
                type='reset'
                onClick={formik.handleReset}
              >
                Reset
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export { AddEventForm };
