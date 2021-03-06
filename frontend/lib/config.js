export const firebaseConfig = {
    apiKey: `${process.env.FB_APIKEY}` || "",
    authDomain: `${process.env.FB_AUTH_DOMAIN}` || "",
    databaseURL: `${process.env.FB_DATABASE_URL}` || "",
    projectId: `${process.env.FB_PROJECT_ID}` || "",
    storageBucket: `${process.env.FB_STORAGE_BUCKET}` || "",
    messagingSenderId: `${process.env.FB_MESSAGING_SENDER_ID}` || "",
    appId: `${process.env.FB_APP_ID}` || ""
};


export const navLinks = [
  {
    name: 'about',
    url: '/#about'
  },
  {
    name: 'experience',
    url: '/#experience'
  },
  {
    name: 'contact',
    url: '/#contact'
  },
  {
    name: 'resume',
    url: '/#resume'
  },
]