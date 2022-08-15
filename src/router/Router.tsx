import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Work from '../pages/Work';
import WorksIndex from '../pages/WorksIndex';
import WorksDetail from '../pages/WorksDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/work' element={<Work />}>
        <Route index element={<WorksIndex />} />
        <Route path=':worksId' element={<WorksDetail />} />
      </Route>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default Router;