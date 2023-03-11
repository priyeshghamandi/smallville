import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSubdomain } from "../../utils/StringUtil";

const Registration:React.FC = ():JSX.Element => {
    const navigate = useNavigate();
    const subdomain = getSubdomain();
    useEffect(() => {
        if(!subdomain) navigate('/login');
    },[subdomain])
    
    return <>{subdomain}</>
}
export default Registration;