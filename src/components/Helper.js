import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../firebase.config';

export const color = {
  light: {
    bg: '#F3F4F6',
    color: '#1F2937',
    primary: '#60A5FA',
    darkPrimary: '#60a5fa',
  },
  dark: {
    color: '#F3F4F6',
    bg: '#1F2937',
    primary: '#60A5FA',
    darkPrimary: '#60a5fa',
  },
};

export const breakpoint = {
  sm: '640px',
  // => @media (min-width: 640px) { ... }

  md: '768px',
  // => @media (min-width: 768px) { ... }

  lg: '1024px',
  // => @media (min-width: 1024px) { ... }

  xl: '1280px',
  // => @media (min-width: 1280px) { ... }

  '2xl': '1536px',
  // => @media (min-width: 1536px) { ... }
};

export const fontSize = {
  sm: '0.75rem',
  base: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
};

export const animation = {
  typewriterSpeed: '2.5s',
  typewiterSteps: '25',
  blinkSpeed: '600ms',
  aboutMeDelay: '4.0s',
};

export async function getCoursesFromDB() {
  const coursesCol = collection(db, 'courses');
  const courseSnapshot = await getDocs(coursesCol);
  const coursesList = courseSnapshot.docs.map((doc) => doc.data());
  return coursesList;
}

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

export async function getQuestionsFromDB(id) {
  const questionCol = collection(db, 'questions');
  const questionSnapshot = await getDocs(questionCol);
  const questionList = questionSnapshot.docs
    .map((doc) => doc.data())
    .filter((doc) => doc.courseId === Number.parseInt(id, 10));

  return getMultipleRandom(questionList, 3);
}
