import Button from '../Button';

import css from './Form.module.css';

const Form = () => {
  return (
    <form className={css.section}>
      Form
      <Button section={'form'}>MINT</Button>
    </form>
  );
};

export default Form;
