import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../constants/paths";
import { Org } from "../../redux/auth/types";
import { getOrgBySubdomain } from "../../services/org.service";
import { getSubdomain } from "../../utils/StringUtil";
import RegistrationForm from "./registration-form";

const Registration:React.FC = ():JSX.Element => {
    const navigate = useNavigate();
    const [org, setOrg] = useState<Org | null>(null);

    const subdomain = getSubdomain();
    useEffect(() => {
        if(!subdomain) navigate(LOGIN);
        async function getOrg() {
            const response = await getOrgBySubdomain(subdomain);
            setOrg(response);
        }
        getOrg();
    },[subdomain])

    
    
    return (
            <section className="gradient-form h-screen w-full md:w-3/5 mx-0 md:mx-auto my-auto flex">
                <div className="container h-full p-10">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-600">
                        <div className="w-full">
                            <div className="block rounded-lg bg-white shadow-lg border">
                                <div className="g-0 lg:flex lg:flex-wrap">
                                    <div className="px-4 md:px-0 lg:w-6/12">
                                        <div className="md:mx-6 md:p-12">
                                            <div className="text-center text-3xl font-bold font-billabong mb-10">
                                                {org?.name}                                       
                                            </div>
                                            {org && <RegistrationForm orgID={org.id}/>}
                                            
                                        </div>
                                    </div>
                                    <div
                                        className="hidden md:flex bg-[#b44593] items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none "
                                        // style={{
                                        //     background:
                                        //         'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                                        // }}
                                    >
                                        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                            <h4 className="mb-6 text-xl font-semibold">
                                                The ultimate club management solution
                                            </h4>
                                            <p className="text-sm">
                                                Welcome to ClubShub, a solution designed to streamline and simplify the management of your club. <br/><br/>
                                                Our system offers an all-in-one solution, providing tools for membership management, event scheduling, payment processing, and communication with your members.  <br/><br/>                                           
                                                Say goodbye to tedious administrative tasks and hello to a more efficient and effective way of managing your sports club.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
)
}
export default Registration;