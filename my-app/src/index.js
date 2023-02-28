import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
/* 
ReactDom.render()로 바로 쓰려면 ~ from 'react-dom'
createRoot 후 render 는 상관 x
*/
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// Chapter 03
// import Library from './chapter03/Library';
// 1
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( 
//    <React.StrictMode>
//      <Library /> // 화면에 렌더링 할 부분. library를 노드에 렌더링
//    </React.StrictMode>,
// );

// 2
// ReactDOM.render(
//    <React.StrictMode>
//      <Library />
//    </React.StrictMode>,
//    document.getElementById('root')
// );


// Chapter 03 - ex
// import Coffee from './chapter03/Coffee';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// // ReactDOM.render(
//   /* jshint ignore:start */
//    <React.StrictMode>
//      <Coffee />
//    </React.StrictMode>,
//    /* jshint ignore:end */
//   //  document.getElementById('root')
// );

// Chapter 04
// import Clock from './chapter04/Clock';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => { // setInterval()을 이용하여 1초마다 새로운 엘리먼트를 만들어 re-render
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//   // ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>, 
//     // document.getElementById('root')
//   );
// }, 1000);

// Chapter 05
// import CommentList from './chapter05/CommentList';
// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// )

// chapter 05 - homework
// import DiffList from './chapter05/DiffList';
// ReactDOM.render(
//   <React.StrictMode>
//     <DiffList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// chapter 06
// import NotificationList from './chapter06/NotificationList';
// ReactDOM.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter 06 - Homework
// import WorkList from './chapter06/WorkList';
// ReactDOM.render(
//   <React.StrictMode>
//     <WorkList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// chapter 07
// import Accommodate from './chapter07/Accommodate';
// ReactDOM.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter 07 - diff
// count value > 10 and < 0 캡처 후 제출
// import Diff from './chapter07/Diff';
// ReactDOM.render(
//   <React.StrictMode>
//     <Diff />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter 07 - User
// import User from './chapter07/User.js';
// ReactDOM.render(
//   <React.StrictMode>
//     <User />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter 07 - Average
// import Average from './chapter07/Average.js';
// ReactDOM.render(
//   <React.StrictMode>
//     <Average />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// chapter 08
// import ConfirmButton from './chapter08/ConfirmButton';
// ReactDOM.render(
//   <React.StrictMode>
//     <ConfirmButton />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// chapter 08 - EventPractice
// import EventPractice from './chapter08/EventPractice.class';
// ReactDOM.render(
//   <React.StrictMode>
//     <EventPractice />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 위 내용을 함수 컴포넌트로 변경
// import EventPractice from './chapter08/EventPractice.function';
// ReactDOM.render(
//   <React.StrictMode>
//     <EventPractice />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import EventPractice from './chapter08/EventPractice';
// ReactDOM.render(
//   <React.StrictMode>
//     <EventPractice />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import LandingPage from './chapter09/LandingPage';
// ReactDOM.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import NumberList from './chapter10/NumberList';
// const numbers = [1,2,3,4,5];
// ReactDOM.render(
//   <React.StrictMode>
//     <NumberList numbers={numbers} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import AttendanceBook from './chapter10/AttendanceBook';
// ReactDOM.render(
//   <React.StrictMode>
//     <AttendanceBook />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import IterationSample from './chapter10/IterationSample.js';
// ReactDOM.render(
//   <React.StrictMode>
//     <IterationSample />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 1018
// import NameForm from './chapter11/NameForm';
// ReactDOM.render(
//   <React.StrictMode>
//     <NameForm />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import RequestForm from './chapter11/RequestForm';
// ReactDOM.render(
//   <React.StrictMode>
//     <RequestForm />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import FruitSelect from './chapter11/FruitSelect';
// ReactDOM.render(
//   <React.StrictMode>
//     <FruitSelect />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import Reservation from './chapter11/Reservation';
// ReactDOM.render(
//   <React.StrictMode>
//     <Reservation />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import SignUp from './chapter11/SignUp';
// ReactDOM.render(
//   <React.StrictMode>
//     <SignUp />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import Calculator from './chapter12/Calculator';
// ReactDOM.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import Calculator from './chapter_12/Calculator';
// ReactDOM.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// import WelcomeDialog from './chapter13/WelcomeDialog';
// ReactDOM.render(
//   <React.StrictMode>
//     <WelcomeDialog />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import SignUpDialog from './chapter13/SignUpDialog';
// ReactDOM.render(
//   <React.StrictMode>
//     <SignUpDialog />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import ProfileCard from './chapter13/ProfileCard';
// ReactDOM.render(
//   <React.StrictMode>
//     <ProfileCard />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import App from './chapter14/App.before';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import App from './chapter14/App.jsx';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// import DarkOrLight from './chapter14/DarkOrLight';
// ReactDOM.render(
//   <React.StrictMode>
//     <DarkOrLight />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import MainPage from './chapter15/MainPage';
// ReactDOM.render(
//   <React.StrictMode>
//     <MainPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import Sample from './chapter15/Sample';
// ReactDOM.render(
//   <React.StrictMode>
//     <Sample />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import Blocks from './chapter15/Blocks';
// ReactDOM.render(
//   <React.StrictMode>
//     <Blocks />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
