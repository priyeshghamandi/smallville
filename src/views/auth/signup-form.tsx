const SignupForm:React.FC = ():JSX.Element => {
    return (
        <form>            
            <div className="relative mb-4">
                <input
                type="text"
                name="name"
                className="border block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] "                
                placeholder="Full name" />
                
            </div>            
            <div className="relative mb-4">
                <input
                type="text"
                name="email"
                className="border block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] "                
                placeholder="Email address" />
                
            </div>
            <div className="relative mb-4">
                <input
                type="text"
                name="orgName"
                className="border block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] "                
                placeholder="Organization" />                
            </div>
            <div className="relative mb-4">
                <input
                    type="password"
                    className="border block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] "
                    id="exampleFormControlInput11"
                    placeholder="Password" 
                    name="password"
                />                                
            </div>
            <div className="mb-12 pt-1 pb-1 text-center">
                <button
                    className="mb-3 bg-[#b44593] text-white inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    //style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}
                >
                
                    Register
                </button>
                <span className="text-xs text-gray-500 font-light">By signing up, you agree to our <b>Privacy Policy</b> and <b>Terms of Use</b></span>
            </div>
        </form>
    )
}
export default SignupForm;