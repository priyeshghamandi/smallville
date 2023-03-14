import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/auth.slice";
import { useAppDispatch } from '../../redux/hooks';
import { Input } from 'antd';

const LoginForm:React.FC = ():JSX.Element => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const dispatch = useAppDispatch();

    const loginAction = async () => {
       // setIsLoading(true);
        await dispatch(
            login({
                email,
                password,
            }),
        );
        //setIsLoading(false);
    };


    return (
        <form>
            <p className="mb-4 text-xs text-gray-500 font-light">Please login to your account</p>
            <div className="relative mb-4" data-te-input-wrapper-init>
                <Input
                type="text"
                className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username" />
                
            </div>
            <div className="relative mb-4" data-te-input-wrapper-init>
                <Input.Password
                    type="password"
                    className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"
                    onChange={(e) => setPassword(e.target.value)}
                    visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                    placeholder="Password" 
                />                                
            </div>
            <div className="mb-12 pt-1 pb-1 text-center">
                <button
                    className="mb-3 bg-blue-primary text-white inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="button"
                    onClick={loginAction}
                    //style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}
                >                
                    Log in
                </button>
                <a href="#!" className="text-xs text-gray-500 font-light">Forgot password?</a>
            </div>
            
        </form>
    )
}
export default LoginForm;