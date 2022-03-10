import { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';




export default function AddNewCar() {
  const [formLayout, setFormLayout] = useState('horizontal');

const onFormLayoutChange = ({ layout }) => {
  setFormLayout(layout);
};


const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
        : null;


    return (
        <>
        <h1 style={{marginTop: 60}}>you made it</h1>
        <Form style={{marginTop: 200}}>
        <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item 
      {...buttonItemLayout}
      >
        <Button type="primary">Submit</Button>
      </Form.Item>
      </Form>
      </>
    )
}