import React, { Suspense } from 'react';


import Navbar from './Component/Navbar';


const Home = React.lazy(() => import('./Component/Home'));
const How = React.lazy(() => import('./Component/How'));
const Courses = React.lazy(() => import('./Component/Courses'));
const Intern = React.lazy(() => import('./Component/Intern'));
const Hand = React.lazy(() => import('./Component/Hand'));
const About = React.lazy(() => import('./Component/About'));
const WhatsApp = React.lazy(() => import('./Component/Whatsapp'));

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <How />
        <Courses />
        <Intern />
        <Hand />
        <About />
        <WhatsApp />
      </Suspense>
    </div>
  );
};

export default App;
