import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../firebase.config';

export const color = {
  light: {
    bg: '#F3F4F6',
    color: '#1F2937',
    primary: '#60A5FA',
  },
  dark: {
    color: '#F3F4F6',
    bg: '#1F2937',
    primary: '#60A5FA',
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

export async function getCourses() {
  const coursesCol = collection(db, 'courses');
  const courseSnapshot = await getDocs(coursesCol);
  const coursesList = courseSnapshot.docs.map((doc) => doc.data());
  return coursesList;
}

export async function getCreds() {
  const authCol = collection(db, 'auth');
  const authSnapshot = await getDocs(authCol);
  const authList = authSnapshot.docs.map((doc) => doc.data());
  return authList;
}
