import { Form, Input } from 'antd';
import {useState} from 'react';
import { useAppDispatch } from '../../redux/hooks';
import {signupUser} from '../../redux/auth/auth.slice';

const SignupForm:React.FC = ():JSX.Element => {
    const [form] = Form.useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const dispatch = useAppDispatch();

    const submitForm = async (values) => {
        await dispatch(signupUser(values));
    };   

    return (
        <Form onFinish={submitForm} form={form}>            
            <div className="relative mb-4">
                <Form.Item
                    name="name"                        
                    rules={[{ required: true, message: 'Please enter your full name' }]}
                >
                    <Input placeholder="Full name" className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"/>
                </Form.Item>
            </div>
            <div className="relative mb-4">
                <Form.Item
                    name="orgName"                        
                    rules={[{ required: true, message: `Please enter your organization's name` }]}
                >
                    <Input placeholder="Organization name" className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"/>
                </Form.Item>
            </div>      
            <div className="relative mb-4">
                <Form.Item
                    name="phone"                        
                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                >
                    <Input placeholder="Phone Number" className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"/>
                </Form.Item>              
            </div>      
            <div className="relative mb-4">
                <Form.Item
                    name="email"                        
                    rules={[{ required: true, message: 'Please enter your email address' }]}
                >
                    <Input placeholder="Email address" className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"/>
                </Form.Item>                
            </div>            
            <div className="relative mb-4">
                <Form.Item
                    name="password"              
                    rules={[{ required: true, message: 'Please enter a password' }]}
                >
                    <Input.Password
                        type="password"
                        className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        placeholder="Password"
                        name="password"
                    />             
                </Form.Item>                   
            </div>
            <div className="mb-12 pt-1 pb-1 text-center">
                <button
                    className="mb-3 bg-blue-primary text-white inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="submit"
                    //style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}
                >                
                    Register
                </button>
                <span className="text-xs text-gray-500 font-light">By signing up, you agree to our <u>Privacy Policy</u> and <u>Terms of Use</u></span>
            </div>
        </Form>
    )
}
export default SignupForm;