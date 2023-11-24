import KeystoneImage from '../../../../assets/roasting_landmark.png';

export interface ProjectDataType {
  title: string;
  image: string;
  duration: string;
  introduce: string;
  learned: string;
  mainFuncs: string;
  github?: string;
  url: string;
  frontendStacks: string;
  backendStacks: string;
  deployment: string;
  isModalOpened?: boolean;
  handleOpenModal?: () => void;
}

export const PROJECTS_DATA = [
  {
    title: 'Roasting Landmark',
    image: KeystoneImage,
    duration: '2023.08 - 2023.10 (개인 프로젝트)',
    introduce:
      '소상공인을 위한 키워드 기반 카페 홍보 플랫폼인 로스팅 랜드마크를 개발하였습니다. 서비스 기획은 물론 프론트엔드, 백엔드 개발까지 진행 및 서비스 런칭까지 완료하였습니다.',
    learned: '',
    mainFuncs:
      '키워드 기반 카페 등록 및 조회, 위치 기반 근처 홍보 중인 카페 조회, 평점 및 리뷰 작성',
    github: 'https://github.com/qkrwlgh123/roasting-landmark-front',
    url: 'https://roasting-landmark.com',
    frontendStacks: 'React, TypeScript, Recoil, Styled-Component,',
    backendStacks: 'Node.js, Express, Sequelize, PostgreSQL',
    deployment: 'S3, Cloudfront, EC2, Load-balancer ',
  },
];
