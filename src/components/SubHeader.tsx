import fire_icon from '../assets/fire_icon.png';

export const SubHeader = () => {
  return (
    <p className='subheader'>
      <img src={fire_icon} alt='fire-icon' />
      <span>future of esports</span>
    </p>
  );
};
