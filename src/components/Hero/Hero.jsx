import Button from '../Button';

import ape_mob1x from '../../assets/images/ape_mob@1x.png';
import ape_mob2x from '../../assets/images/ape_mob@2x.png';
import ape_tabl1x from '../../assets/images/ape_tabl@1x.png';
import ape_tabl2x from '../../assets/images/ape_tabl@2x.png';
import ape_desk1x from '../../assets/images/ape_desk@1x.png';
import ape_desk2x from '../../assets/images/ape_desk@2x.png';

import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <p className={css.txtDecor}>diD yOu seE iT ?</p>

        <h1 className={css.title}>YACHT APES</h1>

        <p className={css.txtDecor}>Apes aRe eveRywhere</p>

        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${ape_desk1x} 1x, ${ape_desk2x} 2x`}
            type="image/jpg"
          />

          <source
            media="(min-width: 768px)"
            srcSet={`${ape_tabl1x} 1x, ${ape_tabl2x} 2x`}
            type="image/jpg"
          />

          <source
            media="(min-width: 360px)"
            srcSet={`${ape_mob1x} 1x, ${ape_mob2x} 2x`}
            type="image/jpg"
          />

          <img className={css.img} src={ape_mob1x} alt="Ape" />
        </picture>

        <Button section={'hero'}>MEET APES</Button>

        <p className={css.txt}>
          Yacht Ape is a collection of unique digital apes that you can own in NFT format
        </p>
      </div>
    </section>
  );
};

export default Hero;
