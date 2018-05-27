# 젠킨스 정리

## 젠킨스란?

젠킨스는 빌드, 테스팅, 배포와 관련된 모든 일들을 자동화해주는 서버입니다.
CI/CD 툴이라고도 합니다.
Continuous Integration/Continuous Delivery or Deploy의 줄인말로 지속적으로 빌드하여 통합하고 배포해주는 툴입니다.

### 젠킨스 파이프라인

젠킨스 파이프라인은 버전 컨트롤 시스템에서 소스를 가져와서 빌드, 테스트, 배포를 하는 일련의 자동화 과정을 의미하는 말로
Jenkinsfile을 통해 흐름을 제어할 수 있습니다.

### 젠킨스를 이용해 nodejs 백엔드 빌드 및 배포

nodejs는 별도의 빌드가 필요없으므로 테스팅만 진행하고 배포

다음 단계를 활용해서 배포했음

* 빌드 및 배포 자동화 전에 배포할 서버에서 미리 배포를 한번 이상 해보고 잘 작동되는지 확인 후 구성

1. 젠킨스 설치
2. 새로운 free style project 생성
3. publish over ssh 플러그인 설치
4. 시스템 설정에서 배포할 서버의 ssh 정보 설정(rsa key 또는 패스워드, 호스트, 유저정보 등)
5. 빌드 프로젝트의 구성에서 Build 설정을 Send files or execute command over ssh 선택
6. 배포 명령어 작성
7. 필요에 따라 push hook 등 설정
