import { useRef } from 'react';
import Style from './career.style';
import Education from './education/education';
import useIntersectionObsever from '../../../hooks/useIntersectionObserver';

const Career = () => {
  const isVisibleRef = useRef(null);
  const isInViewport = useIntersectionObsever(isVisibleRef);
  return (
    <Style.CareerContainer>
      <Style.InnerContainer>
        <Style.CareerContentsBox ref={isVisibleRef} isInViewport={isInViewport}>
          <h2>Career.</h2>
          <Style.SubcontentsContainer>
            <Style.CompanyInfoBox>
              <h3>웅진씽크빅</h3>
              <span>2023.02.01 ~ 2023.07.27</span>
            </Style.CompanyInfoBox>
            <div>
              <span>Anydevice-PJT / 프론트엔드 개발 인턴</span>
            </div>
          </Style.SubcontentsContainer>
        </Style.CareerContentsBox>
        <Education />
      </Style.InnerContainer>
    </Style.CareerContainer>
  );
};

export default Career;
