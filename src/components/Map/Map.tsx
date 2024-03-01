import AddBtn from 'assets/AddBtn';
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
        className='map_btn-first'
        pathColor='#7EA373'
        circleColor='#fff'
      />
      <AddBtn
        className='map_btn-second'
        pathColor='#7EA373'
        circleColor='#fff'
      />
      <AddBtn
        className='map_btn-third'
        pathColor='#7EA373'
        circleColor='#fff'
      />
      <AddBtn
        className='map_btn-fourth'
        pathColor='#7EA373'
        circleColor='#fff'
      />
      <AddBtn
        className='map_btn-fifth'
        pathColor='#7EA373'
        circleColor='#fff'
      />
    </div>
  );
};

export default Map;
