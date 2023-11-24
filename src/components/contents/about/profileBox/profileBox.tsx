import Style from './profileBox.style';
import ProfileImage from '../../../../assets/profileImage.jpeg';
import { FaBirthdayCake } from 'react-icons/fa';
import { SiBloglovin } from 'react-icons/si';
import { GoPerson, GoHome, GoMail } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa';

const ProfileBox = () => {
  return (
    <Style.ProfileBoxContainer>
      <h2>ABOUT</h2>
      <Style.ProfileInnerBox>
        <Style.ProfileImageBox>
          <img src={ProfileImage} alt="profile_image" />
        </Style.ProfileImageBox>
        <Style.ProfileList>
          <ul>
            <li>
              <GoPerson />
              <span>박지호</span>
            </li>
            <li>
              <FaBirthdayCake />
              <span>1993. 10. 24</span>
            </li>
            <li>
              <GoHome />
              <span>서울특별시</span>
            </li>
            <li>
              <GoMail />
              <span>jiho10245@gmail.com</span>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://github.com/qkrwlgh123">
                <FaGithub />
                <span>Git</span>
              </a>
            </li>
            <li>
              <a href="https://velog.io/@jiho1024">
                <SiBloglovin />
                <span>BLOG</span>
              </a>
            </li>
          </ul>
        </Style.ProfileList>
      </Style.ProfileInnerBox>
    </Style.ProfileBoxContainer>
  );
};

export default ProfileBox;
