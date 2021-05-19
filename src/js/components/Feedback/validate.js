import * as yup from 'yup';

const phoneRegExp = new RegExp(
  /^(\+7|7|8)?(\s|-)?\(?[489][0-9]{2}\)?(\s|-)?[0-9]{3}(\s|-)?[0-9]{2}(\s|-)?[0-9]{2}$/,
  'g'
);
const nameRegExp = new RegExp(/^[a-zA-Z]+$/, 'gi');

const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'Напишите ваше имя пожалуйста'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Пожалуйста проверьте номер телефона'),
});

export default schema;
