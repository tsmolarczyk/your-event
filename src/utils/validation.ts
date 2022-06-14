import * as Yup from 'yup';

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

export { validationSchema };
