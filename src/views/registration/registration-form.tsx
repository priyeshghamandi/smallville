import { useState } from "react";
import { skipToken } from '@reduxjs/toolkit/query';
import { Input } from 'antd';
import {useAppDispatch} from '../../redux/hooks';
import {addNewStudentAction} from '../../redux/auth/auth.slice';

const RegistrationForm:React.FC<{orgID: string}> = ({orgID}):JSX.Element => {
    const [form, setForm] = useState<any>(skipToken);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const dispatch = useAppDispatch();

    const setField = (field: any, value: any) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            await submitForm(e);
        }
    };

    const submitForm = async (e: any) => {
        e.preventDefault();
        addUser();
        return;
    };

    const addUser = async () => {
        await dispatch(addNewStudentAction({...form, orgID}))
    }


    return (
        <form onSubmit={submitForm} onKeyPress={handleKeyPress}>            
            <div className="relative mb-4">
                <Input
                type="text"
                name="name"
                className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"               
                placeholder="Full name" 
                onChange={(e) => setField('name', e.target.value)}
            />
                
            </div>      
            <div className="relative mb-4">
                <Input
                    type="text"
                    name="phone"
                    className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"               
                    placeholder="Phone Number" 
                    onChange={(e) => setField('phone', e.target.value)}
                />                
            </div>      
            <div className="relative mb-4">
                <Input
                    type="text"
                    name="email"
                    className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"               
                    placeholder="Email address"                
                    onChange={(e) => setField('email', e.target.value)} 
                />
                
            </div>            
            <div className="relative mb-4">
                <Input.Password
                    type="password"
                    className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"
                    visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                    placeholder="Password"
                    onChange={(e) => setField('password', e.target.value)}
                    name="password"
                />                                
            </div>
            <div className="mb-12 pt-1 pb-1 text-center">
                <button
                    className="mb-3 bg-[#b44593] text-white inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="submit"
                    //style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}
                >                
                    Register
                </button>
                <span className="text-xs text-gray-500 font-light">By signing up, you agree to our <b>Privacy Policy</b> and <b>Terms of Use</b></span>
            </div>
        </form>
    )
}
export default RegistrationForm;