import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkXSZ57rcI92-u8RdxBwOtkmg2-2hjwqY",
  authDomain: "foodapp-15c20.firebaseapp.com",
  projectId: "foodapp-15c20",
  storageBucket: "foodapp-15c20.appspot.com",
  messagingSenderId: "676859331808",
  appId: "1:676859331808:web:97fa428ddc8bf0effd3c85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;  