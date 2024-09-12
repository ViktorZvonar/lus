import Container from './Container/Container';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import Loader from './Loader/Loader';

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const AboutUs = lazy(() => import('./AboutUs/AboutUs'));
const Activity = lazy(() => import('./Activity/Activity'));
const Kontakts = lazy(() => import('./Kontakts/Kontakts'));
const AboutUsDetails = lazy(() =>
  import('../components/AboutUs/AboutUsItem/AboutUsDetails/AboutUsDetails')
);
const ActivityDetails = lazy(() =>
  import('../components/Activity/ActivityItem/ActivityDetails/ActivityDetails')
);
const Questionary = lazy(() => import('./Home/Home'));

export const App = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Loader />
        </div>
      }
    >
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<AboutUs />} />
          <Route path="/co-robimy" element={<Activity />} />
          <Route path="/kontakt" element={<Kontakts />} />
          <Route path="/ankieta" element={<Questionary />} />
          <Route path="/robimy/details/:id" element={<ActivityDetails />} />
          <Route path="/o-nas/details/:id" element={<AboutUsDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Suspense>
  );
};
