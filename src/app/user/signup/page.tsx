'use client'
import { addUser, getUser } from '@/api/Api';
import { SignUpCheck } from '@/constants/Message';
import axios from 'axios';
import React, { useState } from 'react';
import { uuid } from 'uuidv4';
const SignUp = () => {
    const [nameUser, setNameUser] = useState('')
    const [emailUser, setEmailUser] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('');
    const [validate, setValidate] = useState(false)
    const [checkMail, setCheckMail] = useState(false)
    const [checkName, setCheckName] = useState(false)
    const [checkPass, setCheckPass] = useState(false)
    const [checkPassLenght, setCheckPassLenght] = useState(false)
    const [checkType, setCheckType] = useState(false)
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!emailUser) {
            setCheckMail(true)
        }
        if (!nameUser) {
            setCheckName(true)
        }
        if (!password) {
            setCheckPass(true);
        } else if (password.length < 5) {
            setCheckPassLenght(true);
            return;
        } else {
            setCheckPassLenght(false);
        }

        if (!userType) {
            setCheckType(true)
            return;
        }
        try {
            const response = await getUser(`users?email=${emailUser}`);
            if (response.data.length > 0) {
                setValidate(true);
                setEmailUser('');
                return;
            } else if (emailUser && nameUser && password) {
                await addUser('users', {
                    id: uuid(),
                    name: nameUser,
                    email: emailUser,
                    type: userType,
                    password: password
                });
                setValidate(false);
                setNameUser('');
                setEmailUser('');
                setPassword('');
                setUserType('');
                SignUpCheck();
            }
        } catch (error) {
            console.log('erorr sign up', error);

        }
    }
    return (
        <div className='container mx-auto flex justify-center'>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4 tracking-widest uppercase">Sign Up</h2>
                <hr />
                <form className="space-y-4 mt-3" onSubmit={handleSubmit}>
                    <div className="relative">
                        <label htmlFor="text" className="text-gray-600 uppercase text-base font-medium tracking-widest">Name</label>
                        <input
                            type="text"
                            value={nameUser}
                            onChange={(e) => {
                                setNameUser(e.target.value);
                                setCheckName(false);
                            }}
                            className={checkName ? 'w-full p-2 border border-[red] rounded focus:outline-none focus:border-indigo-500 text-gray-800' : 'w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-gray-800'}
                            placeholder={checkName ? 'Please enter name' : 'your name'}
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="email" className="text-gray-600 uppercase text-base font-medium tracking-widest">Email</label>
                        <input
                            type="email"
                            value={emailUser}
                            onChange={(e) => {
                                setEmailUser(e.target.value);
                                setCheckMail(false)
                            }}
                            className={checkMail ? 'w-full p-2 border border-[red] rounded focus:outline-none focus:border-indigo-500 text-gray-800' : 'w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-gray-800'}
                            placeholder={checkMail ? 'Please enter email' : 'your email'}
                        />
                    </div>
                    {validate ? <div className='font-lg text-[red] '>Đã có email này!</div> : ''}
                    <div className="relative ">
                        <label htmlFor="password" className="text-gray-600 uppercase text-base font-medium tracking-widest">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setCheckPass(false)
                            }
                            }
                            className={checkPass ? 'w-full p-2 border border-[red] rounded focus:outline-none focus:border-indigo-500 text-gray-800' : 'w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-gray-800'}
                            placeholder={checkPass ? 'Please enter password' : '********'}
                        />
                    </div>
                    {checkPassLenght ? <div className='font-lg text-[red]'>Password must be more than 5 characters</div> : ''}
                    <div className="relative">
                        <label htmlFor="userType" className="text-gray-600 uppercase text-base font-medium tracking-widest">User Type</label>
                        <select
                            id="userType"
                            value={userType}
                            onChange={(e) => {
                                setUserType(e.target.value)
                                setCheckType(false)
                            }}
                            className={checkType ? 'w-full p-2 border border-[red] rounded focus:outline-none focus:border-indigo-500 text-gray-800' : 'w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-gray-800'}
                        >
                            <option value="">{checkType ? 'Please choose' : 'Select User Type'}</option>
                            <option value="admin">Admin</option>
                            <option value="member">Member</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full uppercase font-medium tracking-widest py-2 bg-black text-white rounded focus:outline-none focus:ring focus:ring-indigo-300 transform transition-transform ease-in-out duration-300 hover:scale-105"
                    >
                        sign up
                    </button>
                </form>
            </div >
        </div >
    );
};

export default SignUp;