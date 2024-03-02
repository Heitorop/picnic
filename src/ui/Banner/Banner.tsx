import './Banner.scss';

interface Banner {
  img: string;
  title: string;
  description: string;
  date: string;
}

const Banner = ({ img, title, description, date }: Banner) => {
  return (
    <div className='banner'>
      <img className='banner__img' src={img} alt='banner image' />
      <div className='banner__content'>
        <div className='banner__text'>
          <h2 className='banner__title'>{title}</h2>
          <p className='banner__description'>{description}</p>
        </div>
        <p className='banner__date'>{date}</p>
      </div>
    </div>
  );
};

export default Banner;
