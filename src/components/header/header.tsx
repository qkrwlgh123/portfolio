import { useEffect, useState } from 'react';
import Style from './header.style';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Style.HeaderBox scrollPosition={scrollPosition}>
      <Style.InnerBox>
        <Style.LogoBox>
          <button>PARK JIHO</button>
        </Style.LogoBox>
        <Style.MenusBox>
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Skills</button>
            </li>
            <li>
              <button>Projects</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </Style.MenusBox>
      </Style.InnerBox>
    </Style.HeaderBox>
  );
};

export default Header;
