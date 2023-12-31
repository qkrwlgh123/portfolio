import Footer from '../../../components/footer/footer';
import Header from '../../../components/header/header';
import Style from './mainPageLayout.style';

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Style.Container>
        <Style.InnerBox>{children}</Style.InnerBox>
      </Style.Container>
      <Footer />
    </>
  );
};

export default MainPageLayout;
