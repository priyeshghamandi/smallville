import {AuthData} from '../../redux/auth/auth.slice';
import {User} from '../../redux/auth/types';
import {useAppSelector} from '../../redux/hooks';
import {EditTwoTone} from '@ant-design/icons';
import {Descriptions} from 'antd';

const OrgSettings:React.FC = ():JSX.Element => {
    const currentUser:User = useAppSelector(AuthData);
    const org = currentUser.org;

    return (
            <>
                <Descriptions title="Organization" bordered column={1} extra={<button onClick={null} className='mr-5'><EditTwoTone /></button>}>
                    <Descriptions.Item label="Name">{org.name}</Descriptions.Item>
                </Descriptions>
            </>
        )
}
export default OrgSettings;