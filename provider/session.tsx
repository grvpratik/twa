// 'use client'
// import { jwtVerify } from 'jose';
// import { cookies } from 'next/headers'
// import React,{useEffect} from 'react'
// import { useTelegram } from './telegram-provider';
// import axios from 'axios';

// const secret = new TextEncoder().encode(
//     'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
// );

// async function verifyToken(token: string) {
//     try {
//         const { payload } = await jwtVerify(token, secret);
//         return payload as { id: string; tg_id: string };
//     } catch (error) {
//         console.error('Error verifying token:', error);
//         return null;
//     }
// }

// export async function getSession() {
//     const session = cookies().get("session")?.value
//     console.log("Session value in getSession ", session)
//     if (!session) return null
//     return await verifyToken(session)
// }
// const AuthSession = () => {
//     const { user, webApp } = useTelegram();
//     const data = getSession()
//     if (!data) {
//         const auth = async () => {
//             if (webApp && user) {
//                 const response = axios.post('http://localhost:8080/v1/user/auth/session', null, {
//                     headers: {
//                         Authorization: `tma ${webApp?.initData}`
//                     }
//                 });
//                 if ((await response).status === 200) {
//                 cookies.set("")
//             }
//                 console.log(response)
//             }
//         }
//     }
//   return (
//     <div>AuthSession</div>
//   )
// }

// export default AuthSession