
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../../option/env/env";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getAllUsers,
    uniceCode
} from '../../../store/users/UsersSlice';

export const SingUpPage = () => {
    document.title = `Create a new user`;
    const dispatch = useDispatch();
    const usersLength = useSelector(getAllUsers);
    const [count, setCount] = useState();
    const [showStatus, setShowStatus] = useState('hidden');
    const [showReg, setShowReg] = useState('block');
    const [link, setLink] = useState('');
    const db = getDatabase(app);
    let arr = [];
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    useEffect(() => {
        Object.keys(usersLength).map(item => {
            if (usersLength[item] === null) return
            arr.push(item);
            setCount(arr.length + 1);
        }, [])
    })
    const GeneratePassword = () => {
        let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let passwordLength = 17;
        let password = "";
        for (let i = 0; i <= passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        dispatch(uniceCode(password))
        return password;
    }
    const regUser = (data) => {
        set(ref(db, 'users/' + count), {
            email: data.email,
            password: data.password,
            login: data.login,
            name: data.name,
            age: data.age,
            phone: data.phone,
            country: data.country,
            status: '',
            codeUnice: GeneratePassword(),
            userID: 'user'
        });
        reset();
        setShowReg('hidden');
        setShowStatus('block');
    }
    return (
        <div>
            <section className={`bg-white ${showReg}`}>
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-700 text-center">Add a new user</h2>
                    <form className="max-w-md mx-auto my-10" onSubmit={handleSubmit(regUser)}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                placeholder=" "
                                required
                                {...register('email')}
                            />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                id="floating_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                placeholder=" "
                                required
                                {...register('password')}
                            />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                id="login_user"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                placeholder=" "
                                required
                                {...register('login')}
                            />
                            <label htmlFor="login_user" className="peer-focus:font-medium absolute text-sm text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Login</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                id="name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                placeholder=" "
                                required
                                {...register('name')}
                            />
                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                id="age"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                placeholder=" "
                                required
                                {...register('age')}
                            />
                            <label htmlFor="age" className="peer-focus:font-medium absolute text-sm text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                id="phone_number"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                placeholder=" "
                                required
                                {...register('phone')}
                            />
                            <label htmlFor="phone_number" className="peer-focus:font-medium absolute text-sm text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone (+38 123 4568 90)</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                id="country"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                placeholder=" "
                                required
                                {...register('country')}
                            />
                            <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                        </div>
                        <button type="submit" className="my-5 text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-600 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center">Sing up</button>
                    </form>
                </div>
            </section>
            <div id="successModal" tabIndex="-1" aria-hidden="true" className={`${showStatus} overflow-y-auto overflow-x-hidden flex justify-center items-center fixed top-0 right-0 left-0 z-50  w-full md:inset-0 h-modal md:h-full`}>
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <button type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                            <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Success</span>
                        </div>
                        <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully removed product.</p>
                        <button
                            className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
                            onClick={() => {
                                Object.keys(usersLength).map(item =>{ 
                                    if (window.localStorage.getItem('userCodeID') === usersLength[item]['codeUnice']) {
                                        window.location.href = `user/${usersLength[item]['login']}`;
                                        setShowReg('block');
                                        setShowStatus('hidden');
                                    }
                                    else {
                                        return
                                    }
                            })
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}