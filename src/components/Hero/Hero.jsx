import Button from '../Button';

import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.section}>
      Hero
      <p>diD yOu seE iT ?</p>
      <Button section={'hero'}>MEET APES</Button>
    </div>
  );
};

export default Hero;
