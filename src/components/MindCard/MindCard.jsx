import css from './MindCard.module.css';

// eslint-disable-next-line react/prop-types, no-unused-vars
const MindCard = ({ title, text }) => {
  return (
    <div className={css.card}>
      <p className={css.txt}>{text}</p>
      <h3 className={css.title}>{title}</h3>
    </div>
  );
};

export default MindCard;
