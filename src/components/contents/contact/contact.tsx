import Style from './contact.style';
import MailImg from '../../../assets/mail.jpeg';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <Style.ContactContainer>
      <Style.ContactIntroBox>
        <h2>
          CONTACT <FiMail />
        </h2>
        <span>{'Thank you : )'}</span>
        <Style.ImageBox>
          <img src={MailImg} alt="image" />
        </Style.ImageBox>
      </Style.ContactIntroBox>
      <Style.SendEmailBox>
        <form
          action="MAILTO:jiho1024@naver.com"
          method="post"
          encType="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
          />

          <input
            type="text"
            name="title"
            placeholder="Title"
            autoComplete="off"
          />

          <textarea name="message" placeholder="Message" autoComplete="off" />

          <Style.SubmitButton type="submit">SEND</Style.SubmitButton>
        </form>
      </Style.SendEmailBox>
    </Style.ContactContainer>
  );
};

export default Contact;
