import { Logo } from '../Logo';

export const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div>
          <Logo />
          <p>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
            quam ac sed turpis volutpat. Cursus sed massa non .
          </p>
        </div>
        <div className='split'>
          <div className='column'>
            <h3>Menu Items</h3>
            <a href='#'>About</a>
            <a href='#'>Blog</a>
            <a href='#'>Shop</a>
            <a href='#'>Contact Us</a>
          </div>
          <div className='column'>
            <h3>Other Pages</h3>
            <a href='#'>Styleguide</a>
            <a href='#'>ChangeLog</a>
            <a href='#'>Licenses</a>
            <a href='#'>Team</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
