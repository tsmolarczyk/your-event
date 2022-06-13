import { eventsUrl } from '../../utils/apiUrls';
import { FormValues } from '../../utils/types';

const useAddEventForm = () => {
  const handleSubmit = (values: FormValues) => {
    try {
      fetch(eventsUrl, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ ...values }),
      });
    } catch {
      console.log('lol');
    }
  };

  return {
    handleSubmit,
  };
};

export { useAddEventForm };
