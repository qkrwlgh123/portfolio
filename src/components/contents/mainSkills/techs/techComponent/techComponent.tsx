import React, { useRef } from 'react';
import Style from './techComponent.style';
import useIntersectionObsever from '../../../../../hooks/useIntersectionObserver';

const TechComponent = ({
  title,
  sentences,
}: {
  title: string;
  sentences: string[];
}) => {
  const isVisibleRef = useRef(null);
  const isInViewport = useIntersectionObsever(isVisibleRef);

  return (
    <Style.TechBox ref={isVisibleRef} isInViewport={isInViewport}>
      <Style.TitleBox>
        <span>{title}</span>
      </Style.TitleBox>
      <div>
        {sentences.map((sentence, index) => (
          <p key={index}>{sentence}</p>
        ))}
      </div>
    </Style.TechBox>
  );
};

export default TechComponent;
