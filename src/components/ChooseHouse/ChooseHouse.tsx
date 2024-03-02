import Banner from '@/ui/Banner/Banner';
import Map from '../Map/Map';
import './Styles.scss';
import { useTranslation } from 'react-i18next';

const ChooseHouse = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('chooseHouse.title')}</h1>
      <Map />
      <Banner
        img='src/assets/bannerImg.svg'
        title={t('chooseHouse.firstBanner.title')}
        description={t('chooseHouse.firstBanner.description')}
        date={t('chooseHouse.firstBanner.date')}
      />
    </>
  );
};

export default ChooseHouse;
