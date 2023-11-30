import Style from './about.style';
import TypeIt from 'typeit-react';
import ProfileBox from './profileBox/profileBox';
import SnowFlakes from '../../../styles/layout/snowFlakes/snowFlakes';
import { INTRO_SENTENCES } from './introSentences';
import { forwardRef, useEffect, useState } from 'react';

const About = forwardRef((props, ref) => {
  const [isSentenceCompleted, setIsSentenceCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSentenceCompleted(true);
    }, 3700);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <SnowFlakes />
      <Style.AboutContainer>
        <Style.TitleBox isSentenceCompleted={isSentenceCompleted}>
          <TypeIt
            options={{
              strings: [
                '안녕하세요 : ) <br/>Frontend 개발자 <span>박지호</span>입니다.',
              ],
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

        <ProfileBox ref={ref} />
      </Style.AboutContainer>
    </>
  );
});

export default About;
