import { EditTwoTone } from '@ant-design/icons';
import { Button, Descriptions } from 'antd';
import { useState } from 'react';
import FormDrawer from '../../components/form-drawer/FormDrawer';
import { FormField } from '../../components/form/types';
import { AuthData } from '../../redux/auth/auth.slice';
import { User } from '../../redux/auth/types';
import { useAppSelector } from '../../redux/hooks';
const Profile:React.FC = ():JSX.Element => {
    const currentUser:User = useAppSelector(AuthData);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    }

    const closeForm = () => {
        setIsEdit(false);
    }

    let fields:FormField[] = [
        {
            type: 'text',
            name: 'name',
            label: 'Full Name',
            placeholder: 'Full Name',
            value: currentUser.name,
            validationProps: [{ required: true, message: 'Please enter your full name' }],
        },
        {
            type: 'text',
            name: 'email',
            label: 'Email Address',
            placeholder: 'Email Address',
            value: currentUser.email,
            validationProps: [{ required: true, message: 'Please enter your email address' }],
        },
        {
            type: 'text',
            name: 'phone',
            label: 'Phone Number',
            placeholder: 'Phone Number',
            value: currentUser.phone,
            validationProps: [{ required: true, message: 'Please enter your phone number' }],
        }         
    ]

    console.log({fields});
    
    
    const onFormSubmit = (values: any) => {
        console.log('Form submitted ', values);
    }

    return (
        <div className='bg-white p-5 rounded w-1/2'>
            <Descriptions title="My Profile" bordered column={1} extra={<button onClick={toggleEdit} className='mr-5'><EditTwoTone /></button>}>
                <Descriptions.Item label="Name">{currentUser.name}</Descriptions.Item>
                <Descriptions.Item label="Email">{currentUser.email}</Descriptions.Item>
                <Descriptions.Item label="Phone">{currentUser.phone}</Descriptions.Item>
            </Descriptions>
            <FormDrawer 
                title='Edit Profile'
                fields={fields}
                isOpen={isEdit}
                onClose={closeForm}
                primaryAction={onFormSubmit}
            />
            
        </div>
        
    );
}
export default Profile;