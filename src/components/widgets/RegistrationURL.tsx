import {CopyOutlined} from '@ant-design/icons';
import {Button, Input, Tooltip} from 'antd';
import {message} from '../../notifications/toast';
import {AuthData} from '../../redux/auth/auth.slice';
import {User} from '../../redux/auth/types';
import {useAppSelector} from '../../redux/hooks';
import {REACT_APP_URL} from '../../constants/config';
const RegistrationURL:React.FC = ():JSX.Element => {
    const currentUser:User = useAppSelector(AuthData);
    const registrationURL = `http://${currentUser?.org?.subdomain}.${REACT_APP_URL.substring(7)}/register`

    const copyURL = () => {
        navigator.clipboard.writeText(registrationURL);
        message.info('URL copied to clipboard');
    };
    
    return (
        <Input.Group compact>
        <Input
            style={{ width: 'calc(100% - 40px)' }}
            defaultValue={registrationURL}
            readOnly
            className='bg-gray-50'
        />
        <Tooltip title="Copy URL" className='hover:text-white'>
            <Button className='bg-blue-primary text-white hover:text-white' icon={<CopyOutlined className=' pb-10 hover:text-white' />} onClick={copyURL} />
        </Tooltip>
    </Input.Group>
    )
}
export default RegistrationURL;