import { SubHeader } from '../SubHeader';
import largeImg from '../../assets/newsLgImg.png';
import img1 from '../../assets/newSmImg1.png';
import img2 from '../../assets/newSmImg2.png';
import img3 from '../../assets/newSmImg3.png';
import img4 from '../../assets/newSmImg4.png';

const news = [
  {
    imgUrl: img1,
    text: 'Esports Group teams up with the Indianapolis Colts',
    time: 'April 2, 2021',
  },
  {
    imgUrl: img2,
    text: 'NAVI reveals s1mple fifth anniversary',
    time: 'April 2, 2021',
  },
  {
    imgUrl: img3,
    text: 'A1esports Shares new picture',
    time: 'April 2, 2021',
  },
  {
    imgUrl: img4,
    text: 'RX secures content partnership with',
    time: 'April 2, 2021',
  },
];

export const News = () => {
  return (
    <section className='news bg-black'>
      <div className='container'>
        <div className='news__header'>
          <div>
            <SubHeader />
            <h2>Latest News & Articles</h2>
          </div>
          <button className='cta__button'>Read More</button>
        </div>
        <div className='news__left'>
          <img src={largeImg} alt='' />
          <time>April 2, 2021</time>
          <p>Esports Group teams up with the Indianapolis Colts</p>
        </div>
        <div className='news__right'>
          <div className='auto-grid'>
            {news.map((el, i) => (
              <div key={i}>
                <img src={el.imgUrl} alt='' />
                <time>{el.time}</time>
                <p>{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
