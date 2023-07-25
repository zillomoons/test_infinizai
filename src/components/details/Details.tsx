import details_img from '../../assets/detailsImage.png';
import smImg1 from '../../assets/det1.png';
import smImg2 from '../../assets/det2.png';
import smImg3 from '../../assets/det3.png';
import { SubHeader } from '../SubHeader';

export const Details = () => {
  return (
    <section className='container'>
      <img src={details_img} alt='' />
      <div>
        <SubHeader />
        <h2>Customize Your Own Character</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae.
        </p>
        <div className='split'>
          <img src={smImg1} alt='' />
          <img src={smImg2} alt='' />
          <img src={smImg3} alt='' />
        </div>
      </div>
    </section>
  );
};
