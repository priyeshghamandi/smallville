import { useSelector } from 'react-redux';
import Branches from '../../components/settings/Branches';
import Profile from '../../components/settings/Profile';
import StudentCategories from '../../components/settings/StudentCategories';
import { RootState } from '../../redux/store';
import { ADMIN_ONLY } from '../../router';

const Settings:React.FC = ():JSX.Element => {
    const currentUser = useSelector((state:RootState) => state.auth);
    
    return (
        <div>
            <div className='w-full flex gap-2'>
                <div className='bg-white p-5 rounded w-1/2'>
                    <Profile />            
                </div>
                {ADMIN_ONLY.includes(currentUser.type) && <div className='bg-white p-5 rounded w-1/2'>
                    <StudentCategories />            
                </div>}
            </div>
            <br/>
            <div className='w-full flex gap-2'>
                {ADMIN_ONLY.includes(currentUser.type) && <div className='bg-white p-5 rounded w-1/2'>
                    <Branches />            
                </div>}
            </div>
        </div>
    );
}
export default Settings;