import { useState } from 'react';
import LoginForm from './login-form';
import SignupForm from './signup-form';

const Login: React.FC = (): JSX.Element => {
    const [loginMode, setLoginMode] = useState<boolean>(true);

    return (
        <section className="gradient-form h-full w-full md:w-1/2 mx-auto my-auto">
            <div className="container h-full p-10">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-600">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg border">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-40"
                                                //src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                src='/images/logo-v1.png'
                                                alt="logo"
                                            />
                                            {/* <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold">
                                                Lorem ipsum dolor sit amet,
                                            </h4> */}
                                        </div>
                                        {loginMode ? <LoginForm /> : <SignupForm />} 
                                        


                                        <div className="flex items-center justify-between pb-6">
                                            <p className="mb-0 mr-2">{loginMode ? "Don't have an account?" : "Already a member?"} </p>
                                            <button
                                                type="button"
                                                className="inline-block rounded border-2 border-danger px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                onClick={() => setLoginMode(!loginMode)}
                                            >
                                                {loginMode ? 'Register' : 'Login'} 
                                            </button>
                                        </div>


                                    </div>
                                </div>
                                <div
                                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{
                                        background:
                                            'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                                    }}
                                >
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            We are more than just a company
                                        </h4>
                                        <p className="text-sm">
                                            Welcome to the ultimate sports club management system, designed to streamline and simplify the management of your club. <br/><br/>
                                            Our system offers an all-in-one solution, providing tools for membership management, event scheduling, payment processing, and communication with your members.  <br/><br/>                                           
                                            Say goodbye to tedious administrative tasks and hello to a more efficient and effective way of managing your sports club.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Login;
