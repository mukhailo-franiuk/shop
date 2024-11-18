
import { useForm } from "react-hook-form";
import axios from "axios";

export const SingUpPage = () => {
    document.title = `Create a new user`;
    const {
        register,
        handleSubmit
    } = useForm()
  
    const regUser = (data) => {
        axios.post('http://localhost:3500/singup',[data])
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <section className="bg-white">
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
        </div>
    );
}