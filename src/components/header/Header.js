import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
    getAllUsers
} from '../../store/users/UsersSlice';
export const Header = (props) => {
    const [categoryMenu, setCategoryMenu] = useState('hidden');
    const [singIn, setSingIn] = useState('hidden');
    const {
        register,
        handleSubmit
    } = useForm();
    const allUsers = useSelector(getAllUsers);
    const enterUser = data => {
        Object.keys(allUsers).map((item) => {
            if (data.login === 'ApexPredator' && data.password === 'Flhtyfkby21987' && allUsers[item]['userID'] === 'prime') {
                window.localStorage.setItem('userCodeID', allUsers[item]['codeUnice']);
                window.localStorage.setItem('link', `admin/${allUsers[item]['login']}`);
                window.localStorage.setItem('name', `${allUsers[item]['name']}`);
                window.location.href = `admin/${allUsers[item]['login']}/overview`;
            }
            if (allUsers[item]['login'] === data.login && allUsers[item]['password'] === data.password && allUsers[item]['userID'] === 'user') {
                window.localStorage.setItem('userCodeID', allUsers[item]['codeUnice']);
                window.localStorage.setItem('link', `user/${allUsers[item]['login']}`);
                window.localStorage.setItem('name', `${allUsers[item]['name']}`);
                window.location.href = `user/${allUsers[item]['login']}/info`;
            }
        })
    }
    return (
        <header className="w-full flex flex-col">
            <nav className="bg-gray-700 w-full border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        to={`/`}
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                        onClick={() => {
                            setCategoryMenu('hidden');
                            setSingIn('hidden');
                        }}
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-600">Shop App</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className={`text-white bg-orange-600 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 text-center ${props.status_01}`}
                            onClick={() => setSingIn('block')}
                        >Sing in</button>
                        <Link to={`${window.localStorage.getItem('link')}/overview`} className={`flex text-sm text-orange-600 rounded-xl md:me-0 py-1 px-3 ${props.status_02}`}>
                            {window.localStorage.getItem('name')}
                        </Link>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <form className="w-96 mx-auto">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-50 sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-50 border border-gray-50 rounded-lg bg-gray-700 outline-none" placeholder="Search Products, Technique..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            <nav className="border-gray-200 bg-gray-700">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <button
                        className="flex items-center space-x-3 rtl:space-x-reverse px-4 pb-1 border-2 rounded-lg text-white hover:text-orange-600 hover:border-orange-600"
                        onClick={() => (categoryMenu === 'hidden') ? setCategoryMenu('block') : setCategoryMenu('hidden')}
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Category</span>
                    </button>
                    <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-700 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <Link to={`/`} className="block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 ">Discount 1</Link>
                            </li>
                            <li>
                                <Link to={`/`} className="block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 ">Discount 2</Link>
                            </li>
                            <li>
                                <Link to={`/`} className="block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0">Marketplace</Link>
                            </li>
                            <li>
                                <Link to={`/`} className="block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${categoryMenu} mt-1 border-gray-200 shadow-sm bg-gray-700 md:bg-gray-700 border-y`}>
                    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-white sm:grid-cols-3 md:px-6">
                        <ul>
                            <li>
                                <Link to={`/`} className="block p-3 rounded-lg text-white hover:text-gray-800 hover:bg-gray-100">
                                    <div className="font-semibold">Online Stores</div>
                                    <span className="text-sm">Connect with third-party tools that you're already using.</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/`} className="block p-3 rounded-lg text-white hover:text-gray-800 hover:bg-gray-100">
                                    <div className="font-semibold">Segmentation</div>
                                    <span className="text-sm">Connect with third-party tools that you're already using.</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/`} className="block p-3 rounded-lg text-white hover:text-gray-800 hover:bg-gray-100">
                                    <div className="font-semibold">Marketing CRM</div>
                                    <span className="text-sm">Connect with third-party tools that you're already using.</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to={``} className="block p-3 rounded-lg text-white hover:text-gray-800 hover:bg-gray-100">
                                    <div className="font-semibold">Online Stores</div>
                                    <span className="text-sm">Connect with third-party tools that you're already using.</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/`} className="block p-3 rounded-lg text-white hover:text-gray-800 hover:bg-gray-100">
                                    <div className="font-semibold">Segmentation</div>
                                    <span className="text-sm ">Connect with third-party tools that you're already using.</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/`} className="block p-3 rounded-lg text-white hover:text-gray-800 hover:bg-gray-100">
                                    <div className="font-semibold">Marketing CRM</div>
                                    <span className="text-sm">Connect with third-party tools that you're already using.</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={`${singIn}`}>
                <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className={`bg-gray-950 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                    <div className="relative p-4 w-full max-w-md mx-auto top-20 max-h-full">
                        <div className="relative rounded-lg shadow bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Sign in to our platform
                                </h3>
                                <button
                                    type="button"
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                    onClick={() => setSingIn('hidden')}
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" onSubmit={handleSubmit(enterUser)}>
                                    <div>
                                        <label htmlFor="login" className="block mb-2 text-sm font-medium text-white">Your login</label>
                                        <input
                                            type="text"
                                            id="login"
                                            className="bg-gray-700 outline-none border border-orange-600 text-gray-50 text-sm rounded-lg block w-full p-2.5"
                                            placeholder="login"
                                            required
                                            {...register('login')}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-50">Your password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-700 outline-none border border-orange-600 text-gray-50 text-sm rounded-lg block w-full p-2.5"
                                            required
                                            {...register('password')}
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                                                    required
                                                    {...register('check')}
                                                />
                                            </div>
                                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-50">Remember me</label>
                                        </div>
                                        <Link to={`/`} className="text-sm text-orange-600 hover:underline">Lost Password?</Link>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-orange-600 hover:bg-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                                    <div className="text-sm font-medium text-gray-500=">
                                        Not registered? <Link to={`/sing-up`} className="text-orange-600 hover:underline"
                                            onClick={() => setSingIn('hidden')}
                                        >Create account</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}