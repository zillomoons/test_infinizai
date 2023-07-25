import { Logo } from '../Logo';
import { BsCart2 } from 'react-icons/bs';

export const Header = () => {
  const headerBtnStyle = { border: '1px solid #fff' };

  return (
    <header>
      <div className='container'>
        <Logo />
        <nav>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Team</a>
          <a href='#'>Shop</a>
          <a href='#'>Pages</a>
        </nav>
        <div>
          <i>
            <BsCart2 />
          </i>
          <button className='cta__button' style={headerBtnStyle}>
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};
