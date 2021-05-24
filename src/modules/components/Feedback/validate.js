import * as yup from 'yup';

const phoneRegExp = new RegExp(
  /^(\+7|7|8)?(\s|-)?\(?[489][0-9]{2}\)?(\s|-)?[0-9]{3}(\s|-)?[0-9]{2}(\s|-)?[0-9]{2}$/,
  // eslint-disable-next-line comma-dangle
  'g'
);

const schema = yup.object().shape({
  name: yup.string().required('Напишите ваше имя пожалуйста'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Пожалуйста, проверьте номер телефона'),
});

export default schema;
