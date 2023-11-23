import { useEffect, useState } from 'react';
import About from '../components/contents/about/about';
import MainSkills from '../components/contents/mainSkills/mainSkills';
import Header from '../components/header/header';
import MainPageLayout from '../styles/layout/mainPageLayout/mainPageLayout';
import Projects from '../components/contents/projects/projects';
import Contact from '../components/contents/contact/contact';

const MainPage = () => {
  return (
    <MainPageLayout>
      <About />
      <MainSkills />
      <Projects />
      <Contact />
    </MainPageLayout>
  );
};

export default MainPage;
