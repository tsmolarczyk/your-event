import Button from '@mui/material/Button';
import { InputLabel } from '@mui/material';
import * as Yup from 'yup';

import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  useFormik,
} from 'formik';

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
    // validationSchema: Yup.object({
    //   email: Yup.string()
    //     .email('lol')
    //     .max(15, 'Must be 15 or less characters')
    //     .required('Required'),
    // }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
        }}
      >
        {({ errors, touched, isValidating, resetForm }) => (
          <Form onSubmit={formik.handleSubmit}>
            <Field
              type='text'
              id='title'
              name='title'
              placeholder='Title'
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <Field
              type='date'
              id='date'
              name='date'
              placeholder='Date of the event'
              onChange={formik.handleChange}
              value={formik.values.date}
            />
            <Field
              type='text'
              id='description'
              name='description'
              placeholder='Description'
              onChange={formik.handleChange}
              value={formik.values.description}
            />

            <Field
              type='text'
              id='picture'
              name='picture'
              placeholder='Picture source'
              onChange={formik.handleChange}
              value={formik.values.picture}
            />

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
            {/* {errors.email && touched.email && <div>{errors.email}</div>} */}

            <Field
              type='text'
              id='place'
              name='place'
              placeholder='Adress'
              onChange={formik.handleChange}
              value={formik.values.place}
            />

            <Button
              variant='contained'
              type='submit'
              onClick={formik.handleReset}
            >
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { AddEventForm };
