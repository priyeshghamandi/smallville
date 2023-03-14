
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import { AuthData } from "../../redux/auth/auth.slice";
import { User } from "../../redux/auth/types";
import { useAppSelector } from "../../redux/hooks";
import './styles.css'


export const comp:React.FC = ():JSX.Element => {
    return (
        <div className="text-3xl w-full flex justify-center items-center py-10 px-24">
            <span>20</span>
        </div>
    )
}


const Dashboard:React.FC = ():JSX.Element => {
    const currentUser:User = useAppSelector(AuthData);
    return (
        <div className="dashboard">
            <div className="flex gap-8 w-2/3">
                <div className='w-full'>
                    <Card bordered={false}>
                        <Statistic
                            title="Total Students"
                            value={500}
                            precision={0}
                            valueStyle={{ color: '#cf1322' }}
                        />
                    </Card>
                </div>
                <div className='w-full items-center justify-center'>
                    <Card bordered={false}>
                        <Statistic
                            title="Students this Month"
                            value={11}
                            precision={0}
                            valueStyle={{ color: '#3f8600' }}
                            suffix={<ArrowUpOutlined className='pb-1' />}          
                        />
                    </Card>
                </div>
                <div className='w-full'>
                    <Card bordered={false}>
                        <Statistic
                            title="Branches"
                            value={5}
                            precision={0}
                            valueStyle={{ color: '#cf1322' }}
                        />
                    </Card>
                </div>
                <div className='w-full'>
                    <Card bordered={false}>
                        <Statistic
                            title="Coaches"
                            value={10}
                            precision={0}
                            valueStyle={{ color: '#cf1322' }}
                        />
                    </Card>
                </div>     
            
            </div>
        </div>
    )
}
export default Dashboard;

