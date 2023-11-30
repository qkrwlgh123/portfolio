import RoastingLandmarkImage from '../../../../assets/roasting_landmark.png';
import CommonViewerImage from '../../../../assets/commonVIewer.png';
import AttendanceImage from '../../../../assets/attendance_manager.png';
import SmartAllImage from '../../../../assets/smartAllMid.png';
import PortfolioImage from '../../../../assets/portfolio.png';

export interface ProjectDataType {
  title: string;
  image: string;
  duration: string;
  introduce: string;
  learned: string[];
  whatIDone?: string[];
  mainFuncs?: string;
  github?: string;
  url: string;
  frontendStacks: string;
  backendStacks?: string;
  deployment: string;
  isModalOpened?: boolean;
  handleOpenModal?: () => void;
}

export const PROJECTS_DATA = [
  {
    title: 'Roasting Landmark',
    image: RoastingLandmarkImage,
    duration: '2023.08 - 2023.10 (개인 프로젝트)',
    introduce: `소상공인을 위한 <span>키워드 기반 카페 홍보 플랫폼인 로스팅 랜드마크를 개발</span>하였습니다. 카페에서 경험할 수 있는 특징들이 보기 쉽게 담겨져 카페가 홍보될 수 있다면, <span>소비자가 해당 카페에서 얻을 수 있는 경험들을 직관적으로 파악</span>할 수 있게 되고, 카페를 운영하는 소상공인분들도 <span>카페의 강점을 어필하며 홍보</span>하는 것이 가능하게 될 것이라는 생각이 들었습니다.
    이를 통해 궁극적으로 <span>소상공인, 소비자 모두에게 이점</span>을 가져다 줄 수 있을 것이라 생각하며 해당 프로젝트를 기획하게 되었습니다.`,
    learned: [
      '기획안을 작성하기 위해 여러 레퍼런스를 참고하며, 기획안 구성 과정 및 기획안의 가독성을 고려하며 작성하는 방법을 배울 수 있었습니다.',
      '카페로부터의 반경 거리를 계산하는 로직을 구성할 때 예상했던 거리와 다르게 산출되었었는데, 지구는 구의 형태를 띄기 때문에 단순 직선거리로 계산하는 방법은 적절하지 않고 구의 표면을 고려하여 거리를 계산해야한다는 점을 알게 되었습니다.',
      'React와 TypeScript를 활용하여 각 모듈을 컴포넌트 단위로 개발하여 재사용성을 적극 활용하였고, 웹의 뷰와 동작 로직을 구분하여 유지보수성을 증진할 수 있었습니다.',
      'AWS 클라우드 서비스를 이용하여 프로젝트를 배포하기 위해, AWS 내 각 서비스의 문서를 읽어보며 개념을 이해하였고, 서비스끼리 유기적으로 연결되는 흐름을 파악할 수 있었습니다.',
    ],
    mainFuncs:
      '키워드 기반 카페 등록 및 조회, 위치 기반 근처 홍보 중인 카페 조회, 평점 및 리뷰 작성',
    github: 'https://github.com/qkrwlgh123/roasting-landmark-front',
    url: 'https://roasting-landmark.com',
    frontendStacks: 'React, TypeScript, Recoil, Styled-Component',
    backendStacks: 'Node.js, Express, Sequelize, PostgreSQL',
    deployment: 'S3, Cloudfront, EC2, Load-balancer',
  },
  {
    title: 'Contents Player/Viewer',
    image: CommonViewerImage,
    duration: '2023.02 - 2023.05 (웅진 씽크빅 인턴 과제)',
    introduce:
      '<span>PDF, 오디오북, 동영상 및 전자출판물을 재생할 수 있는 컨텐츠 통합 뷰어를 개발</span>하였습니다. 인턴 과제로 수행한 프로젝트이며, 기존에 사용되던 컨텐츠 뷰어를 직접 사용해보고 사용성에 대한 아쉬움이 있었습니다. 따라서 기존 뷰어 대비 <span>사용성이 증진된 웹 뷰어 개발</span>에 대한 욕심이 생겨 해당 과제 주제를 선정하게 되었습니다.',
    learned: [
      '다양한 파일 유형(PDF, PDFA(Audio book) EPUB, M3u8)을 웹 환경에서 재생하는 매커니즘을 배울 수 있었습니다.',
      '동영상 재생을 위한 실시간 스트리밍 기술인 HLS에 대해 학습하고, 이를 적용하여 M3u8 영상 플레이어를 구현하였습니다.',
      '구간별 재생 정보(MP3, PDF)를 담고 있는 마크업 언어에 대해 이해하고, 이를 이용하여 오디오북을 구현하였습니다.',
      'Flutter 앱을 사용하는 디바이스에서의 컨텐츠 재생을 위해, Webview 매커니즘을 이해 및 적용하였습니다.',
      'Web Crypto에 기반한 암호화 및 복호화 매커니즘을 학습하였고, 이를 통해 보안이 적용된 DRM 컨텐츠 재생을 구현하였습니다. ',
    ],
    mainFuncs:
      '도서 & 오디오북 & 동영상 재생, 독서 중 화면 저장(부분 및 전체), 독서앨범, 독서 중 사전 내 단어 검색, 시리즈물 보기 ',
    url: '',
    frontendStacks: 'React, TypeScript, Styled-Component, Web Crypto API',
    backendStacks: 'Firebase',
    deployment: 'Internal Content Delivery Network',
  },
  {
    title: 'Attendance Manager',
    image: AttendanceImage,
    duration: '2022.11 - 2023.01 (유데미 스타터스 팀 프로젝트)',
    introduce:
      '<span>부트캠프 교육생들을 위한 출결 관리 및 정보 공유 서비스 개발</span>에 참여하였습니다. 유데미 스타터스 부트캠프 기간 중 진행된 팀 프로젝트 결과물이며, <span>QR코드를 촬영하여 출결 정보를 입력해야하는 기존 방식의 불편함을 개선하기 위하여 해당 팀 프로젝트를 기획</span>하였습니다. 수강생들끼리 친밀 관계가 빠르게 형성되도록 돕기 위해 점심 식사 메이트 모집 기능을 기획안에 추가하였으며, 교육 기간 중 정보 공유 및 교육 품질 개선을 위해 게시판, 운영진 건의 요청 기능도 추가하였습니다.',
    learned: [
      'React 기반 프레임워크인 Next.js의 구조 및 동작 방식에 대해 익힐 수 있었습니다.',
      '서버 사이드 렌더링 방식을 이해하고, 이를 적용한 웹 어플리케이션을 개발하였습니다.',
      '팀원들과의 데일리 스크럼을 통해 일정 및 Task를 관리하였고, 이를 통해 커뮤니케이션 역량을 증진시킬 수 있었습니다.',
    ],
    whatIDone: [
      '출결 기능 구현',
      '추천 맛집 등록, 조회 및 수정 삭제 구현',
      '팀 관리 페이지 구현',
    ],
    mainFuncs:
      '위치 기반 출결, 일정 별 출결 관리, 점심 식사 메이트 모집, 맛집 추천, 수강생 정보 조회, 자유 게시판, 건의 요청',

    url: '',
    frontendStacks: 'Next.js, TypeScript, Recoil, Styled-Component',
    backendStacks: 'Java, Spring, MariaDB',
    deployment: 'EC2',
  },
  {
    title: 'Smartall Mid',
    image: SmartAllImage,
    duration: '2023.6 - 2023.08 (웅진씽크빅 프론트엔드 실무 참여)',
    introduce:
      '<span>중학 교육 서비스인 스마트올 중학 프론트엔드 개발 및 유지보수에 참여</span>하였습니다. 처음으로 접한 기업 실무 프로젝트이며, <span>방대한 양의 코드를 인수인계 문서와 함께 읽으며 프로젝트의 구조와 내용을 이해할 수 있도록 노력</span>하였습니다. 그리고 기획, 디자인 및 백엔드 팀과 협업하여 프로젝트 기능 확장 및 유지보수하는 과정을 거치며 일정 관리, 커뮤니케이션 능력을 증진시킬 수 있었습니다.',
    whatIDone: [
      '화상 과외 일정 조회 기능 확장 및 유지보수',
      '이벤트 배너 동작 구현',
    ],
    learned: [
      '사내 여러 문서들을 통해 기업 프로젝트를 이해하는 경험을 할 수 있었습니다.',
      'Jira, Zeplin에 기반하여 유관 부서와의 일정 관리, 커뮤니케이션 능력을 증진시킬 수 있었습니다.',
      '발생한 이슈에 대해 타 팀과의 협업을 통해 문제를 해결하는 경험을 할 수 있었습니다.',
    ],
    mainFuncs: '화상 과외, 과외 일정 조회, 교육 동영상 시청',

    url: '',
    frontendStacks: 'React, JavaScript, Redux',
    backendStacks: 'Java, Spring, MariaDB',
    deployment: 'Internal Content Delivery Network',
  },
  {
    title: 'Portfolio',
    image: PortfolioImage,
    duration: '2023.11 - 2023.11 (개인 프로젝트)',
    introduce:
      '현재 보여지는 포트폴리오 페이지를 개발하였습니다. 제가 걸어왔던 개발 커리어들을 다시 되돌아보며 <span>무엇을 경험했는지, 그리고 경험들을 통해 어떤 것을 배울 수 있었는 지를 다시 한 번 회고</span>해볼 수 있는 좋은 기회가 된 프로젝트입니다.',
    learned: [
      'Custom hooks 사용을 통해 컴포넌트 재사용성을 적극 활용할 수 있었습니다.',
      '스크롤 위치에 따른 컴포넌트 애니메이션을 구현하며, IntersectionObserver 개념을 이해할 수 있었습니다.',
      '제가 경험했던 개발에 관련된 커리어들을 정리해보며 돌아보고, 무엇을 경험하고 배울 수 있었는지를 정리할 좋은 기회였습니다.',
    ],
    url: 'https://qkrwlgh123.github.io/portfolio',
    frontendStacks: 'React, TypeScript, Styled-Component',

    deployment: 'Github pages',
  },
];
