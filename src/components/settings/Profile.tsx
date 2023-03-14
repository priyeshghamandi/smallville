import {useEffect, useState} from 'react';
import {FormField} from '../form/types';
import {AuthData, update} from '../../redux/auth/auth.slice';
import {User} from '../../redux/auth/types';
import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import {EditTwoTone} from '@ant-design/icons';
import {Descriptions} from 'antd';
import FormDrawer from '../form-drawer/FormDrawer';

const Profile:React.FC = ():JSX.Element => {
    const currentUser:User = useAppSelector(AuthData);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const [profile, setProfile] = useState<User>({ ...currentUser });

    useEffect(() => {
        if (currentUser) {
            setProfile((prev) => ({ ...prev, avatar: currentUser.avatar }));
        }
    }, [currentUser]);

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
            value: profile.name,
            validationProps: [{ required: true, message: 'Please enter your full name' }],
        },
        {
            type: 'text',
            name: 'email',
            label: 'Email Address',
            placeholder: 'Email Address',
            value: profile.email,
            validationProps: [{ required: true, message: 'Please enter your email address' }],
        },
        {
            type: 'text',
            name: 'phone',
            label: 'Phone Number',
            placeholder: 'Phone Number',
            value: profile.phone,
            validationProps: [{ required: true, message: 'Please enter your phone number' }],
        }         
    ];    
    
    const onFormSubmit = async (data: any) => {
        setProfile({ ...profile, ...data });
        await dispatch(update(data));        
    }

    return (
            <>
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
            </>
        )
}
export default Profile;