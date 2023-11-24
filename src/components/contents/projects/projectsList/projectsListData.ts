import KeystoneImage from '../../../../assets/roasting_landmark.png';

export interface ProjectDataType {
  title: string;
  image: string;
  duration: string;
  introduce: string;
  mainFuncs: string;
  github?: string;
  url: string;
  frontendStacks: string;
  backendStacks: string;
  deployment: string;
}

export const PROJECTS_DATA = [
  {
    title: 'Roasting Landmark',
    image: KeystoneImage,
    duration: '2023.08 - 2023.10 (개인 프로젝트)',
    introduce:
      '소상공인을 위한 키워드 기반 카페 홍보 플랫폼인 로스팅 랜드마크를 개발하였습니다. 서비스 기획은 물론 프론트엔드, 백엔드 개발까지 진행 및 서비스 런칭까지 완료하였습니다.',
    mainFuncs: '',
    github: '',
    url: '',
    frontendStacks: '',
    backendStacks: '',
    deployment: '',
  },
];
