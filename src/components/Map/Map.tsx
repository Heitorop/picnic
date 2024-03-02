import AddBtn from '@/ui/AddBtn/AddBtn';
import map from 'assets/housesMap.svg';
import mapTablet from 'assets/housesMapTablet.svg';
import mapMobile from 'assets/housesMapMobile.svg';
import './Styles.scss';

const Map = () => {
  return (
    <div className='map'>
      <picture>
        <source srcSet={mapMobile} media='(max-width: 767px)' />
        <source srcSet={mapTablet} media='(max-width: 1024px)' />
        <img src={map} alt='map' />
      </picture>
      <AddBtn
        className='map__btn-first'
        pathColor='#7EA373'
        circleColor='#fff'
      />
      <AddBtn
        className='map__btn-second'
        pathColor='#7EA373'
        circleColor='#fff'
      />
      <AddBtn
        className='map__btn-third'
        pathColor='#7EA373'
        circleColor='#fff'
      />
      <AddBtn
        className='map__btn-fourth'
        pathColor='#7EA373'
        circleColor='#fff'
      />
      <AddBtn
        className='map__btn-fifth'
        pathColor='#7EA373'
        circleColor='#fff'
      />
    </div>
  );
};

export default Map;
