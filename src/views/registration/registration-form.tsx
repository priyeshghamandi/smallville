import { useState } from "react";
import { skipToken } from '@reduxjs/toolkit/query';
import { Form, Input, Select } from 'antd';
import {useAppDispatch} from '../../redux/hooks';
import {addNewStudentAction} from '../../redux/auth/auth.slice';
import { FormField } from "../../components/form/types";
import './styles.css'
import { Org } from "../../redux/auth/types";

const RegistrationForm:React.FC<{org: Org}> = ({org}):JSX.Element => {
    const [form] = Form.useForm();
    
    //const [form, setForm] = useState<any>(skipToken);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const dispatch = useAppDispatch();

    // const setField = (field: any, value: any) => {
    //     setForm({
    //         ...form,
    //         [field]: value,
    //     });
    // };

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            await submitForm(e);
        }
    };

    const submitForm = async (values) => {
        console.log({values});
        let orgID = org.id;
        await dispatch(addNewStudentAction({...values, orgID}))
        return;
    };


    return (
        <Form onFinish={submitForm} form={form}>            
            <div className="relative mb-4"><Form.Item
                    name="name"                        
                    rules={[{ required: true, message: 'Please enter your full name' }]}
                >
                    <Input placeholder="Full name" className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"/>
                </Form.Item>
                
                
            </div>      
            <div className="relative mb-4">
                <Form.Item
                    name="phone"                        
                    rules={[{ required: true, message: 'Please enter your full phone number' }]}
                >
                    <Input placeholder="Phone Number" className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"/>
                </Form.Item>              
            </div>      
            <div className="relative mb-4">
                <Form.Item
                    name="email"                        
                    rules={[{ required: true, message: 'Please enter your full email address' }]}
                >
                    <Input placeholder="Email address" className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"/>
                </Form.Item>                
            </div>            
            <div className="relative mb-4">
                <Form.Item
                    name="password"                        
                    rules={[{ required: true, message: 'Please enter your full email address' }]}
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
            <div className="relative mb-4">
                <Form.Item
                    name="branchID"                        
                    rules={[{ required: true, message: 'Please select a branch' }]}
                >
                    <Select
                        placeholder="Select a branch"
                        className="w-full bg-transparent leading-[1.6]"
                        onChange={(value) => {form.setFieldsValue({ branchID: value })}}
                        options={org.branches.map((branch) => ({value: branch.id, label: branch.name}))}
                    />  
                </Form.Item>
                                                              
            </div>
            <div className="relative mb-4">
                <Form.Item
                    name="studentCategoryID"                        
                    rules={[{ required: true, message: 'Please select a category' }]}
                >
                    <Select
                        placeholder="Select a category"
                        className="w-full bg-transparent leading-[1.6]"
                        onChange={(value) => {form.setFieldsValue({ studentCategoryID: value })}}
                        options={org.studentCategories.map((category) => ({value: category.id, label: category.name}))}
                    />  
                </Form.Item>                                                             
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
        </Form>
    )
}
export default RegistrationForm;