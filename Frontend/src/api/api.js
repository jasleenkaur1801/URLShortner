import axios from "axios";

const api = axios.create({
    baseURL: "https://urlshortner-backend-vj3y.onrender.com/"
});
export default api;

/*
cors - cross origin resource sharing
single origin
http://api.facebook.com:80
https://api.facebook.com:80
https://api.facebook.com:40

HOST DOMAIN PORT - common definition - agr ek bhi cheez change ho jati hai browser use different consider krega
if host domain port same then it is single origin
http://icici.com  can't access http://api.icici.com
add cors to http://api.icici.com to allow requessts from http://icici.com

frontend: http://localhost:5173/
backend: http://localhost:3000/
*/