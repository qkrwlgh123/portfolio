import Style from './modal.style';
import { ProjectDataType } from '../contents/projects/projectsList/projectsListData';

const Modal = (props: ProjectDataType) => {
  return (
    <Style.ModalBackground>
      <Style.ModalInnerBox>
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
            <div>
              <p>{props.introduce}</p>
            </div>
            <div>
              <span>주요 기능</span>
              <span>Github</span>
              <span>URL</span>
              <span>Frontend</span>
              <span>Deployment</span>
            </div>
          </Style.TextsContainer>
        </Style.ContentsContainer>
      </Style.ModalInnerBox>
    </Style.ModalBackground>
  );
};

export default Modal;
