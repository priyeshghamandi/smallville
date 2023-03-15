import { Col, Form, Input, Row, InputNumber } from "antd";
import { FormField } from "./types";
import {useState} from 'react';
import TextArea from "antd/es/input/TextArea";

export default function GetFormField(field: FormField) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { type, name, label, validationProps, placeholder, value, selectOptions, selectedOption } = field;
    switch (type) {
        case 'text':
            return (
                <Row gutter={16} key={name}>
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
        case 'number':
            return (
                <Row gutter={16} key={name}>
                    <Col span={12}>
                        <Form.Item
                            name={name}
                            label={label}
                            rules={validationProps}
                        >
                            <InputNumber placeholder={placeholder} defaultValue={value}/>
                        </Form.Item>
                    </Col>
                </Row>
            )
        case 'password':            
            return (
                <Row gutter={16} key={name}>
                    <Col span={12}>
                        <Form.Item
                            name={name}
                            label={label}
                            rules={validationProps}
                        >
                            <Input.Password
                                type="password"
                                className="border w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]"
                                visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                                placeholder="Password"                                
                                name="password"
                            />
                        </Form.Item>
                    </Col>
                </Row>
            )
            case 'textarea':
                return (
                    <Row gutter={16} key={name}>
                        <Col span={12}>
                            <Form.Item
                                name={name}
                                label={label}
                                rules={validationProps}
                            >
                                <TextArea placeholder={placeholder} defaultValue={value} autoSize={{ minRows: 2, maxRows: 6 }}/>
                            </Form.Item>
                        </Col>
                    </Row>
                )
    }
}
