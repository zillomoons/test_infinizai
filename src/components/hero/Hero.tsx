import line from '../../assets/line.png';
import hero_img from '../../assets/heroImage.png';
import { SubHeader } from '../SubHeader';

export const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-bg'>
        <div className='bg-black'></div>
        <div className='bg-blue'></div>
      </div>
      <div className='container'>
        <img src={hero_img} alt='gamer' id='hero-img' />
        <div className='hero__text'>
          <div className='social-media'>
            <a>facebook</a>
            <a>instagram</a>
            <a>twitch</a>
          </div>
          <div>
            <SubHeader />
            <h1>
              Unleash The Next{' '}
              <span>
                Generation
                <img src={line} alt='header-line' />
              </span>{' '}
              Of Gaming
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className='cta__button'>Explore More</button>
            <a href=''>View our team</a>
          </div>
        </div>
      </div>
    </section>
  );
};
