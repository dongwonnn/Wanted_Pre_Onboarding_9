# Assignment 9 : 페이워크

## Demo Link

**heroku 특징으로 첫 접속 시 10초 정도 대기 시간이 필요합니다.** </br>
🔗 Demo Page : [https://paywork-dw.herokuapp.com/](https://paywork-dw.herokuapp.com/)

## 실행 방법

로컬 테스트 시 다음 순서를 지켜주세요.

#### Project setup

`npm install | yarn`

#### Json Server setup

`json-server ./data.json --port 4000`

#### Project start

`npm install | yarn start`

## 구현 목록

- [x] Todo App 구현 ( CRUD )
- [x] json-server 이용한 네트워크 통신
- [x] RduxRedux Saga를 이용해 비동기 네트워크 통신
 
### REST API

HTTP 요청 리스트

#### GET / todos
- todos 목록 가져오기
- return ITodo[]
#### POST / todos
- toto 생성
- body: { content: string(할 일), isCheck: boolean(완료 상태), createAt: string(생성일) }
- retuun ITodo
#### DELETE / todos
- todo 삭제
- return 'ok'
#### PATCH / todos ( content )
- toto content 수정
- body { id: number(아이디), content: string(할 일)}
- return ITodo
#### PATCH / todos ( isCheck )
- toto isCheck 수정
- body { id: number(아이디), isCheck: boolean(완료 상태)}
- return ITodo


## Skills

- React, Styled Components, Typescript, Redux, Redux-Saga

## 폴더 구조

```html
📦src
 ┣ 📂components
 ┃  ┣ 📂Common
 ┃  ┃  ┗ 📜Spinner.tsx
 ┃  ┗ 📂Todo
 ┃     ┣ 📜TodoInsert.tsx
 ┃     ┣ 📜TodoList.tsx
 ┃     ┣ 📜TodoListItem.tsx
 ┃     ┗ 📜TodoTemplate.tsx
 ┣ 📂store
 ┃  ┣  📂actions
 ┃  ┃   ┗ 📜todo.ts
 ┃  ┣  📂reducers
 ┃  ┃   ┣ 📜todo.ts
 ┃  ┃   ┗ 📜index.ts
 ┃  ┣  📂sagas
 ┃  ┣   ┣ 📜todo.ts
 ┃  ┣   ┗ 📜index.ts
 ┃  ┗ 📜index.ts
 ┣ 📂utils
 ┃  ┣  📂api
 ┃  ┣  📂constants
 ┃  ┣  📂stlyes
 ┃  ┗  📂types
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```
