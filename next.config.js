/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  env: {
    ATLAS_URI:"mongodb+srv://krutik:workdeal123@cluster0.ylkhmsk.mongodb.net/workdeal",
    PORT: "5000",
    FIREBASE_API: "AIzaSyAJY27z7WlHopWx_eDBgi9hk4Q4LEWl4rc",
    AUTH_DOMAIN: "workdeal-6b31e.firebaseapp.com",
    PROJECT_ID: "workdeal-6b31e",
    STORAGE_BUCKET: "workdeal-6b31e.appspot.com",
    MESSEGE_ID: "1001913204216",
    APP_ID: "1:1001913204216:web:9267460c718890df10aa0d",
    MESSUREMENT_ID: "G-D9Y9ZTWHM0",
  },
};

