import { useRef } from 'react';
import {
  CompanyInfoBox,
  EducationContentsBox,
  SubcontentsContainer,
} from '../career.style';
import useIntersectionObsever from '../../../../hooks/useIntersectionObserver';

const Education = () => {
  const isVisibleRef = useRef(null);
  const isInViewport = useIntersectionObsever(isVisibleRef);
  return (
    <EducationContentsBox ref={isVisibleRef} isInViewport={isInViewport}>
      <h2>Education.</h2>
      <SubcontentsContainer>
        <CompanyInfoBox>
          <h3>유데미 스타터스</h3>
          <span>2022.10.11 ~ 2023.01.15</span>
        </CompanyInfoBox>
        <div>
          <span>웅진씽크빅 & 유데미 주관 교육 프로그램</span>
        </div>
      </SubcontentsContainer>
    </EducationContentsBox>
  );
};

export default Education;
