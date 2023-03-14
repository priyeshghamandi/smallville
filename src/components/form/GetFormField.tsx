import { Col, Form, Input, Row } from "antd";
import { FormField } from "./types";

export default function GetFormField(field: FormField) {
    const { type, name, label, validationProps, placeholder, value, selectOptions, selectedOption } = field;
    switch (type) {
        case 'text':
            //setValue(name, value);
            return (
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name={name}
                            label={label}
                            rules={validationProps}
                        >
                            <Input placeholder={placeholder} defaultValue={value} />
                        </Form.Item>
                    </Col>
                </Row>
            )
    }
}
