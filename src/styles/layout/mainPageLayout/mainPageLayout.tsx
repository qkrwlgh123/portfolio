import Header from '../../../components/header/header';
import Style from './mainPageLayout.style';

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Style.Container>
      <Header />
      <Style.InnerBox>{children}</Style.InnerBox>
    </Style.Container>
  );
};

export default MainPageLayout;
