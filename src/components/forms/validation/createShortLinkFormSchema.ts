import * as Yup from 'yup';

export const createShortLinkFormSchema = Yup.object().shape({
    url: Yup.string().url('Invalid URL').required('Required'),
    durationHours: Yup.number().oneOf([0, 1, 24, 24 * 7], 'Duration not supported').required('Required'),
});
