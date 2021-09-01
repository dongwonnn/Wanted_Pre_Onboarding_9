# Assignment 9 : 페이워크

## Demo Link

🔗 Demo Page :

## 프로젝트 개요

> 1. Redux, Redux-Saga를 이용해 Todo App 구현
> 2. 실제 서버가 있다고 생각하고 구현

## 구현 목록

- [x]

## 실행 방법

#### Project setup

`npm install | yarn`

#### Json Server setup

`json-server ./data.json --port 4000`

#### Project start

`npm install | yarn start`

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
