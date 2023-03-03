import React from 'react'
import { Form, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const { TextArea } = Input;

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


const Contact = () => {
  return (
    <div>
      <h1 className='text-2xl aspirefont text-center tracking-[0.1em] leading-none md:text-5xl lg:text-4  xl text-transparent bg-clip-text bg-gradient-to-r from-[#D9009C] via-[#9504D2] to-[#681CBE] mb-5 mt-32'>UPLOAD YOUR TRACK</h1>
      <div className='items-center justify-center'>
      <Form className='max-w-screen-lg items-center justify-center mx-auto'>
        <h3 className='text-white text-sm md:text-xl interfont font-bold mb-2'>Enter Song Name</h3>
      <Input placeholder="Song Name" className='mb-10 w-96 h-10'/>
      <br></br>
      <h3 className='text-white text-sm md:text-xl interfont font-bold mb-2'>Description</h3>
      <TextArea rows={4} placeholder="Descsribe your song track" maxLength={6} className='w-96 h-10'/>
      <br></br>
      <div className='mt-8'>
      <Upload {...props} className='bg-white'>
      <h3 className='text-white text-sm md:text-xl interfont font-bold mb-2'>Upload Track</h3>
        <Button className='bg-white h-10 w-44'icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      </div>
      </Form>
      </div>
      
    </div>
  )
}


export default Contact;

