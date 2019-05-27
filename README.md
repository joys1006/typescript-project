> Typescript Sample code

## Build Setup (npm) (실행 방법)

node version v11.0.0

``` bash
#client, Api server
client 폴더와 server폴더 동일
# install dependencies
npm install
# serve with hot reload at localhost:3000
npm start
# build for production with minification
npm run build
```

## Spec (개발 환경 스펙)
- Webpack4
- Babel7
- Typescript
- ES6 ~
- whatwg-fetch Polyfill
- Fetch Api

## Directory Architecture (디렉토리 구조 설명)
``` bash
# build(webpack)
base - 개발 공통 스펙 정의
dev - 개발 환경 로컬 서버 구동
build - 개발코드 빌드 실행
```