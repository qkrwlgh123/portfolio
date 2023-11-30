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
        props.handleOpenModal!();
      }
    };
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    document.addEventListener('mousedown', closeModal);

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
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
              <p dangerouslySetInnerHTML={{ __html: props.introduce }} />
              {props.whatIDone && (
                <Style.WhatIDoneList>
                  {props.whatIDone.map((done) => (
                    <li key={done}>{done}</li>
                  ))}
                </Style.WhatIDoneList>
              )}

              <Style.LearnedTitle>What I learned...</Style.LearnedTitle>
              <ul>
                {props.learned.map((sentence, index) => (
                  <li key={index}>
                    <span>{sentence}</span>
                  </li>
                ))}
              </ul>
            </Style.IntroduceTextBox>
            <Style.UsedTechsBox>
              {props.mainFuncs && (
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
              )}
              {props.github && (
                <Style.TopicBox>
                  <Style.SubjectBox>
                    <span>
                      <FaCheck />
                      Github
                    </span>
                  </Style.SubjectBox>
                  <Style.ContentBox>
                    <a href={props.github} target="_blank">
                      {props.github?.slice(8)}
                    </a>
                  </Style.ContentBox>
                </Style.TopicBox>
              )}
              <Style.TopicBox>
                <Style.SubjectBox>
                  <span>
                    <FaCheck />
                    URL
                  </span>
                </Style.SubjectBox>
                <Style.ContentBox>
                  <a href={props.url} target="_blank">
                    {props.url?.slice(8)}
                  </a>
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
              {props.backendStacks && (
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
              )}
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
