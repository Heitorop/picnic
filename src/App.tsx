import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ChooseHouse from './components/ChooseHouse/ChooseHouse';
import '@/plugins/i18n'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<ChooseHouse />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
