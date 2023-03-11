import { CopyOutlined } from "@ant-design/icons";
import { Button, Input, Tooltip } from "antd";
import { message } from "../../notifications/toast";
import { AuthData } from "../../redux/auth/auth.slice";
import { User } from "../../redux/auth/types";
import { useAppSelector } from "../../redux/hooks";
import {REACT_APP_URL} from '../../constants/config';
import './styles.css'
import Widget from "./widget";
import RegistrationURL from "../../components/widgets/RegistrationURL";

const Dashboard:React.FC = ():JSX.Element => {
    const authData = useAppSelector(AuthData);
    const currentUser:User = authData.user;
    const registrationURL = `http://${currentUser.org.subdomain}.${REACT_APP_URL.substring(7)}/register`

    const copyURL = () => {
        navigator.clipboard.writeText(registrationURL);
        message.info('URL copied to clipboard');
    };


    return (
        <div className="dashboard">
            <div className="w-1/2">
                <Widget 
                    title="Registration URL"
                    component={RegistrationURL}
                />
            </div>
        </div>
    )
}
export default Dashboard;