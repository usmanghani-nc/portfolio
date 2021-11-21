import { initializeApp } from 'firebase/app';
import * as auth from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDuIe6ke6PITXc3XxDl4wZqyHdSSzZygUE',
  authDomain: 'portfolio-e0bb4.firebaseapp.com',
  projectId: 'portfolio-e0bb4',
  storageBucket: 'portfolio-e0bb4.appspot.com',
  messagingSenderId: '30399507676',
  appId: '1:30399507676:web:507cf83f9a63e118aa1819',
};

const app = initializeApp(firebaseConfig);

export const firbaseAuth = auth;
