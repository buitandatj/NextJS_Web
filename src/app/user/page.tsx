'use client'
import { getUser } from '@/api/Api';
import { LoginSuccess } from '@/constants/Message';
import { login } from '@/store/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validateEmail, setValidateEmail] = useState(false)
    const [validatePassword, setValidatePassword] = useState(false)

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!email) {
            setValidateEmail(true)
        }
        if (!password) {
            setValidatePassword(true)
            return;
        }
        try {
            const res = await getUser('users')
            const users = res;
            const user = users.find((item: any) => item.email === email && item.password === password);
            const userCheck = users.find((item: any) => item.password !== password && item.email === email);
            if (user) {
                dispatch(login({ email: user.email, password: user.password, userName: user.name, type: user.type }));
                LoginSuccess()
                router.push('/products/all')
            } else if (userCheck) {
                setPassword('')
                return
            }
            else {
                setEmail('')
                setPassword('')
            }
        } catch (error) {
            console.log('get user error >>', error);
        }


    }
    return (
        <div className='container mx-auto flex justify-center'>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4 tracking-widest uppercase">Login</h2>
                <hr />
                <form className="space-y-4 mt-3" onSubmit={handleLogin}>
                    <div className="relative">
                        <label htmlFor="email" className="text-gray-600 uppercase text-base font-medium tracking-widest">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setValidateEmail(false)
                                setEmail(e.target.value)
                            }}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-gray-800"
                            placeholder="your email"
                        />
                    </div>
                    {validateEmail ? <div className='font-lg text-[red]'>Enter your email!</div> : ''}
                    <div className="relative ">
                        <label htmlFor="password" className="text-gray-600 uppercase text-base font-medium tracking-widest">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setValidatePassword(false)
                                setPassword(e.target.value)
                            }}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-gray-800"
                            placeholder="********"
                        />
                    </div>
                    {validatePassword ? <div className='font-lg text-[red]'>Enter password!</div> : ''}
                    <button
                        type="submit"
                        className="w-full uppercase font-medium tracking-widest py-2 bg-black text-white rounded focus:outline-none focus:ring focus:ring-indigo-300 transform transition-transform ease-in-out duration-300 hover:scale-105"
                    >
                        login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">Not a member? <Link href="/user/signup" className="text-indigo-500">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;