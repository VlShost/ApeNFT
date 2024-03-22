import Button from '../Button';

import ape_mob1x from '../../assets/images/ape_mob@1x.png';
import ape_mob2x from '../../assets/images/ape_mob@2x.png';

import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.section}>
      <p>diD yOu seE iT ?</p>
      <h1>YACHT APES</h1>
      <p>Apes aRe eveRywhere</p>
      <img
        loading="lazy"
        className={css.img}
        srcSet={`${ape_mob1x} 1x, ${ape_mob2x} 2x`}
        src={ape_mob1x}
        alt="Ape"
      />
      <Button section={'hero'}>MEET APES</Button>
      <p>Yacht Ape is a collection of unique digital apes that you can own in NFT format</p>
    </div>
  );
};

export default Hero;
