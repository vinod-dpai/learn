import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import db from '../firebase.config';

export const color = {
  light: {
    bg: '#F3F4F6',
    color: '#1F2937',
    primary: '#b0d2fd',
    darkPrimary: '#60a5fa',
  },
  dark: {
    color: '#F3F4F6',
    bg: '#1F2937',
    primary: '#b0d2fd',
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
  xxs: '0.25rem',
  xs: '0.5rem',
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

export async function addUserDetails(user) {
  const usersCol = collection(db, 'users');
  const userSnapshot = await addDoc(usersCol, user);
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

  return getMultipleRandom(questionList, 10);
}

export const clearUserDetails = () => {
  window.sessionStorage.removeItem('userName');
  window.sessionStorage.removeItem('dob');
  window.sessionStorage.removeItem('gender');
  window.sessionStorage.removeItem('email');
  window.sessionStorage.removeItem('phno');
  window.sessionStorage.removeItem('address');
  window.sessionStorage.removeItem('district');
  window.sessionStorage.removeItem('taluk');
  window.sessionStorage.removeItem('religion');
  window.sessionStorage.removeItem('isStudent');
  window.sessionStorage.removeItem('schoolOrCollege');
  window.sessionStorage.removeItem('classOrCourse');
}


export const districtAndTalukInfo = [
  {
    code: 'alappuzha',
    name: 'Alappuzha',
    taluks: [
      { code: 'ambalappuzha', name: 'Ambalappuzha (Alappuzha)' },
      { code: 'chengannur', name: 'Chengannur' },
      { code: 'cherthala', name: 'Cherthala' },
      { code: 'karthikappally', name: 'Karthikappally (Haripad)' },
      { code: 'kuttanad', name: 'Kuttanad (Mankombu)' },
      { code: 'mavelikkara', name: 'Mavelikkara' },
    ],
  },
  {
    code: 'ernakulam',
    name: 'Ernakulam',
    taluks: [
      { code: 'aluva', name: 'Aluva' },
      { code: 'kanayannur', name: 'Kanayannur (Ernakulam)' },
      { code: 'kochi', name: 'Kochi (Fort Kochi)' },
      { code: 'kothamangalam', name: 'Kothamangalam' },
      { code: 'kunnathunad', name: 'Kunnathunad (Perumbavoor)' },
      { code: 'muvattupuzha', name: 'Muvattupuzha' },
      { code: 'northParavur', name: 'North Paravur' },
    ],
  },
  {
    code: 'idukki',
    name: 'Idukki',
    taluks: [
      { code: 'devikulam', name: 'Devikulam' },
      { code: 'peermade', name: 'Peermade' },
      { code: 'udumbanchola', name: 'Udumbanchola (Nedumkandam)' },
      { code: 'idukki', name: 'Idukki (Painavu)' },
      { code: 'thodupuzha', name: 'Thodupuzha' },
    ],
  },
  {
    code: 'kannur',
    name: 'Kannur',
    taluks: [
      { code: 'thalassery', name: 'Thalassery' },
      { code: 'iritty', name: 'Iritty' },
      { code: 'kannur', name: 'Kannur' },
      { code: 'taliparamba', name: 'Taliparamba' },
      { code: 'payyanur', name: 'Payyanur' },
    ],
  },
  {
    code: 'kasaragod',
    name: 'Kasaragod',
    taluks: [
      { code: 'manjeshwaram', name: 'Manjeshwaram (Uppala)' },
      { code: 'kasaragod', name: 'Kasaragod' },
      { code: 'vellarikundu', name: 'Vellarikundu' },
      { code: 'hosdurg', name: 'Hosdurg' },
    ],
  },
  {
    code: 'kollam',
    name: 'Kollam',
    taluks: [
      { code: 'kollam', name: 'Kollam (Paravur, Chathannoor)' },
      { code: 'karunagappally', name: 'Karunagappally' },
      { code: 'kunnathur', name: 'Kunnathur (Sasthamkotta)' },
      { code: 'kottarakara', name: 'Kottarakkara' },
      { code: 'punalur', name: 'Punalur' },
      { code: 'pathanapuram', name: 'Pathanapuram' },
    ],
  },
  {
    code: 'kottayam',
    name: 'Kottayam',
    taluks: [
      { code: 'changanassery', name: 'Changanassery' },
      { code: 'kanjirappally', name: 'Kanjirappally' },
      { code: 'kottayam', name: 'Kottayam' },
      { code: 'vaikom', name: 'Vaikom' },
      { code: 'meenachil', name: 'Meenachil (Palai)' },
    ],
  },
  {
    code: 'kozhikode',
    name: 'Kozhikode',
    taluks: [
      { code: 'kozhikode', name: 'Kozhikode' },
      { code: 'thamarassery', name: 'Thamarassery' },
      { code: 'koyilandy', name: 'Koyilandy' },
      { code: 'vatakara', name: 'Vatakara' },
    ],
  },
  {
    code: 'malappuram',
    name: 'Malappuram',
    taluks: [
      { code: 'nilambur', name: 'Nilambur' },
      { code: 'manjeri', name: 'Manjeri (Eranad)' },
      { code: 'kondotty', name: 'Kondotty' },
      { code: 'perinthalmanna', name: 'Perinthalmanna' },
      { code: 'ponnani', name: 'Ponnani' },
      { code: 'tirur', name: 'Tirur' },
      { code: 'tirurangadi', name: 'Tirurangadi' },
    ],
  },
  {
    code: 'palakkad',
    name: 'Palakkad',
    taluks: [
      { code: 'alathur', name: 'Alathur' },
      { code: 'chittur', name: 'Chittur' },
      { code: 'palakkad', name: 'Palakkad' },
      { code: 'pattambi', name: 'Pattambi' },
      { code: 'ottappalam', name: 'Ottappalam' },
      { code: 'mannarkkad', name: 'Mannarkkad' },
      { code: 'attappady', name: 'Attappady (Agali)' },
    ],
  },
  {
    code: 'pathanamthitta',
    name: 'Pathanamthitta',
    taluks: [
      { code: 'adoor', name: 'Adoor' },
      { code: 'konni', name: 'Konni' },
      { code: 'kozhencherry', name: 'Kozhencherry' },
      { code: 'ranni', name: 'Ranni' },
      { code: 'mallappally', name: 'Mallappally' },
      { code: 'thiruvalla', name: 'Thiruvalla' },
    ],
  },
  {
    code: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    taluks: [
      { code: 'neyyattinkara', name: 'Neyyattinkara' },
      { code: 'kattakada', name: 'Kattakada' },
      { code: 'nedumangad', name: 'Nedumangad' },
      { code: 'thiruvananthapuram', name: 'Thiruvananthapuram' },
      { code: 'chirayinkeezhu', name: 'Chirayinkeezhu (Attingal)' },
      { code: 'varkala', name: 'Varkala' },
    ],
  },
  {
    code: 'thrissur',
    name: 'Thrissur',
    taluks: [
      { code: 'kodungallur', name: 'Kodungallur' },
      { code: 'mukundapuram', name: 'Mukundapuram (Irinjalakuda)' },
      { code: 'chalakudy', name: 'Chalakudy' },
      { code: 'chavakkad', name: 'Chavakkad' },
      { code: 'thalapilly', name: 'Thalapilly (Wadakkancheri)' },
      { code: 'thrissur', name: 'Thrissur' },
      { code: 'kunnamkulam', name: 'Kunnamkulam' },
    ],
  },
  {
    code: 'wayanad',
    name: 'Wayanad',
    taluks: [
      { code: 'mananthavady', name: 'Mananthavady' },
      { code: 'sultanBathery', name: 'Sultan Bathery' },
      { code: 'vythiri', name: 'Vythiri (Kalpetta)' },
    ],
  },
];
