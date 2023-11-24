import Style from './about.style';
import TypeIt from 'typeit-react';
import ProfileBox from './profileBox/profileBox';
import SnowFlakes from '../../../styles/layout/snowFlakes/snowFlakes';
import { INTRO_SENTENCES } from './introSentences';

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
              loop: false,
              waitUntilVisible: true,
            }}
          />
        </Style.TitleBox>

        <Style.IntroSentencesBox>
          {INTRO_SENTENCES.map((sentence, index) => (
            <span key={index}>{sentence}</span>
          ))}
        </Style.IntroSentencesBox>

        <ProfileBox />
      </Style.AboutContainer>
    </>
  );
};

export default About;
