import { useForm } from 'react-hook-form';
import {Form, Button, Col, Row} from 'antd';
import { FormField } from './types';
import GetFormField from './GetFormField';



const CustomForm: React.FC<{ fields: FormField[]; onSubmit: any;}> = ({
    fields,
    onSubmit,
}) => {
    const renderFields = () => {
        return fields.map((field) => GetFormField(field));
    };
    return (
        <Form layout="vertical" hideRequiredMark onFinish={onSubmit}>
            {renderFields()}
            <Row gutter={16} className="mt-5">
                <Col span={12}>
                    <button
                        type="submit"
                        className="bg-blue-primary px-4 py-1 text-white rounded-md font-semibold"
                    >
                        Submit
                    </button>
                </Col>
            </Row>
        </Form>
    );
}
export default CustomForm;