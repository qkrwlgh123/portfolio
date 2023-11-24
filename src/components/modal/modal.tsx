import Style from './modal.style';
import { ProjectDataType } from '../contents/projects/projectsList/projectsListData';
import { FaCheck } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const Modal = (props: ProjectDataType) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (
        props.isModalOpened &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        // 이벤트가 발생한 노드가 모달 컴포넌트 내부에 존재하지 않는다면 close
        props.handleOpenModal!();
      }
    };

    // 이벤트 리스너를 document 전체에 붙여줌
    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, []);

  return (
    <Style.ModalBackground>
      <Style.ModalInnerBox ref={modalRef}>
        <Style.TitleBox>
          <div>
            <h1>{props.title}</h1>
          </div>
          <div>
            <h3>{props.duration}</h3>
          </div>
        </Style.TitleBox>
        <Style.ContentsContainer>
          <Style.ImageBox>
            <img src={props.image} alt="image" />
          </Style.ImageBox>
          <Style.TextsContainer>
            <Style.IntroduceTextBox>
              <p>{props.introduce}</p>
            </Style.IntroduceTextBox>
            <Style.UsedTechsBox>
              <Style.TopicBox>
                <Style.SubjectBox>
                  <span>
                    <FaCheck />
                    주요 기능
                  </span>
                </Style.SubjectBox>
                <Style.ContentBox>
                  <span>{props.mainFuncs}</span>
                </Style.ContentBox>
              </Style.TopicBox>
              <Style.TopicBox>
                <Style.SubjectBox>
                  <span>
                    <FaCheck />
                    Github
                  </span>
                </Style.SubjectBox>
                <Style.ContentBox>
                  <a href={props.github}>{props.github?.slice(8)}</a>
                </Style.ContentBox>
              </Style.TopicBox>
              <Style.TopicBox>
                <Style.SubjectBox>
                  <span>
                    <FaCheck />
                    URL
                  </span>
                </Style.SubjectBox>
                <Style.ContentBox>
                  <a href={props.url}>{props.url?.slice(8)}</a>
                </Style.ContentBox>
              </Style.TopicBox>
              <Style.TopicBox>
                <Style.SubjectBox>
                  <span>
                    <FaCheck />
                    Frontend
                  </span>
                </Style.SubjectBox>
                <Style.ContentBox>
                  <span>{props.frontendStacks}</span>
                </Style.ContentBox>
              </Style.TopicBox>
              <Style.TopicBox>
                <Style.SubjectBox>
                  <span>
                    <FaCheck />
                    Backend
                  </span>
                </Style.SubjectBox>
                <Style.ContentBox>
                  <span>{props.backendStacks}</span>
                </Style.ContentBox>
              </Style.TopicBox>
              <Style.TopicBox>
                <Style.SubjectBox>
                  <span>
                    <FaCheck />
                    Deployment
                  </span>
                </Style.SubjectBox>
                <Style.ContentBox>
                  <span>{props.deployment}</span>
                </Style.ContentBox>
              </Style.TopicBox>
            </Style.UsedTechsBox>
          </Style.TextsContainer>
        </Style.ContentsContainer>
      </Style.ModalInnerBox>
    </Style.ModalBackground>
  );
};

export default Modal;
