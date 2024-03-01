import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ChooseHouse from './components/ChooseHouse/ChooseHouse';

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
