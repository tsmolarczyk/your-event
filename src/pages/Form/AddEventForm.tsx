import { useAddEventForm } from './useAddEventForm';

import { FormValues } from '../../utils/types';
import { validationSchema } from '../../utils/validation';

import { Formik, Form } from 'formik';

import { Box, ButtonGroup, MenuItem } from '@mui/material';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Select } from '@mui/material';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledParagraph = styled(Typography)({
  color: 'red',
  marginLeft: 10,
});
const StyledTextField = styled(TextField)({
  marginBottom: 15,
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
              {errors.title && touched.title && (
                <StyledParagraph>{errors.title}</StyledParagraph>
              )}

              <StyledTextField
                id='datetime-local'
                type='datetime-local'
                defaultValue='2022-05-24T10:30'
                name='date'
                onChange={handleChange}
                value={values.date}
                {...commonProps}
              />
              {errors.date && touched.date && (
                <StyledParagraph>{errors.date}</StyledParagraph>
              )}

              <StyledTextField
                label='Description'
                variant='outlined'
                color='info'
                type='text'
                id='description'
                name='description'
                onChange={handleChange}
                value={values.description}
                {...commonProps}
              />
              {errors.description && touched.description && (
                <StyledParagraph>{errors.description}</StyledParagraph>
              )}

              <StyledTextField
                label='Picture'
                variant='outlined'
                color='info'
                type='text'
                id='picture'
                name='picture'
                onChange={handleChange}
                value={values.picture}
                {...commonProps}
              />
              {errors.picture && touched.picture && (
                <StyledParagraph>{errors.picture}</StyledParagraph>
              )}

              <StyledTextField
                label='Phone'
                variant='outlined'
                color='info'
                type='text'
                id='phone'
                name='phone'
                onChange={handleChange}
                value={values.phone}
                {...commonProps}
              />
              {errors.phone && touched.phone && (
                <StyledParagraph>{errors.phone}</StyledParagraph>
              )}

              <StyledTextField
                label='Email'
                variant='outlined'
                color='info'
                type='email'
                id='email'
                name='email'
                onChange={handleChange}
                value={values.email}
                {...commonProps}
              />
              {errors.email && touched.email && (
                <StyledParagraph>{errors.email}</StyledParagraph>
              )}

              <StyledTextField
                label='Adress'
                variant='outlined'
                color='info'
                type='text'
                id='place'
                name='place'
                onChange={handleChange}
                value={values.place}
                {...commonProps}
              />
              {errors.place && touched.place && (
                <StyledParagraph>{errors.place}</StyledParagraph>
              )}

              <Select
                fullWidth
                name='category'
                value={values.category}
                onChange={handleChange}
              >
                <MenuItem value='sport'>
                  <Typography fontSize={20}>Sport</Typography>
                </MenuItem>
                <MenuItem value='culture'>
                  <Typography fontSize={20}>Culture</Typography>
                </MenuItem>
                <MenuItem value='health'>
                  <Typography fontSize={20}>Health</Typography>
                </MenuItem>
              </Select>
            </Box>

            <ButtonGroup
              style={{
                fontSize: '20px',
                marginTop: '20px',
                height: '50px',
              }}
            >
              <Button
                variant='contained'
                type='submit'
                size='large'
                style={{ fontSize: '15px' }}
              >
                Submit
              </Button>

              <Button
                color='warning'
                variant='contained'
                type='reset'
                size='large'
                onClick={handleReset}
                style={{ fontSize: '15px' }}
              >
                Reset
              </Button>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export { AddEventForm };
