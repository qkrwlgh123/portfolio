import Style from './about.style';
import TypeIt from 'typeit-react';
import ProfileBox from './profileBox/profileBox';
import SnowFlakes from '../../../styles/layout/snowFlakes/snowFlakes';

const About = () => {
  return (
    <>
      <SnowFlakes />
      <Style.AboutContainer>
        <Style.TitleBox>
          <TypeIt
            options={{
              strings: ['안녕하세요 : ) <br/>Frontend 개발자 박지호입니다.'],
              speed: 100,
              loop: true,
              loopDelay: 2500,
              waitUntilVisible: true,
            }}
          />
        </Style.TitleBox>

        <Style.IntroSentencesBox>
          <p>블라블라블라블라.</p>
          <p>블라블라블라블라.</p>
          <p>블라블라블라블라.</p>
          <p>블라블라블라블라.</p>
          <p>블라블라블라블라.</p>
          <p>블라블라블라블라.</p>
        </Style.IntroSentencesBox>

        <ProfileBox />
      </Style.AboutContainer>
    </>
  );
};

export default About;
