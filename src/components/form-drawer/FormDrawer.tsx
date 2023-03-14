import { Button, Drawer, Space } from "antd";
import CustomForm from "../form/CustomForm";
import {FormField} from '../form/types';

const FormDrawer:React.FC<{
    title: string;
    fields: FormField[];
    isOpen: boolean;
    onClose?: () => void;
    primaryAction?: (values: any) => void;
}> = ({ title, fields, isOpen, onClose, primaryAction }) =>  {
    return (
        <Drawer
        title={title}
        width={720}        
        onClose={onClose}
        open={isOpen}
        bodyStyle={{ paddingBottom: 80 }}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button onClick={primaryAction} type="primary" className="bg-blue-primary">
        //       Submit
        //     </Button>
        //   </Space>
        // }
      >
        <CustomForm 
            fields={fields}
            onSubmit={primaryAction}
        />
      </Drawer>
    )
}
export default FormDrawer;