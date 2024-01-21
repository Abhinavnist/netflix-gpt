// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"

import { getAnalytics } from "firebase/analytics"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBLHQv6cOzQoA_MZP1JYpZdDDM0Ih1tZu4",

  authDomain: "netflix-gpt-e770f.firebaseapp.com",

  projectId: "netflix-gpt-e770f",

  storageBucket: "netflix-gpt-e770f.appspot.com",

  messagingSenderId: "303160082470",

  appId: "1:303160082470:web:c4994b33e6d793dc5d66e7",

  measurementId: "G-HXLTPVGV46",
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
