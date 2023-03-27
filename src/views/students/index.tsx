import {Space, Table, Popconfirm} from 'antd';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { User } from "../../redux/auth/types";
import { RootState } from "../../redux/store";
import { getAllStudents, updateStudentFromOrg } from "../../services/students.service";
import {FormField} from '../../components/form/types';
import FormDrawer from '../../components/form-drawer/FormDrawer';
import { QrcodeOutlined } from "@ant-design/icons";
import {useAppDispatch} from '../../redux/hooks';
import {setStudentsAction, updateStudentAction, addStudentAction, deleteStudentAction} from '../../redux/student/student.slice';

const Students:React.FC = ():JSX.Element => {
    const students = useSelector((state:RootState) => state.student.students);
    const [dataSource, setDataSource] = useState<any>([]);
    const [editFormFields, setEditFormFields] = useState<FormField[]>([]);
    const [activeStudentID, setActiveStudentID] = useState<string>('');
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const currentUser = useSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
            title: '',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                <div className="pb-1">
                    <a href="#" className="a-primary">
                        <QrcodeOutlined className="" />
                    </a>
                </div>                
                <a href="#" onClick={() => {handleEdit(record)}} className="a-primary">Edit</a>
                <a href="#" className="a-primary">
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this category?"
                        onConfirm={() => {deleteStudent(record.key)}}
                        onCancel={null}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a href="#">Delete</a>
                    </Popconfirm>
                </a>
              </Space>
            ),
          },
    ];

    let addStudentFields:FormField[] = [
        {
            type: 'text',
            name: 'name',
            label: 'Full Name',
            placeholder: 'Full Name',
            value: '',
            validationProps: [{ required: true, message: 'Please enter your full name' }],
        },
        {
            type: 'text',
            name: 'email',
            label: 'Email Address',
            placeholder: 'Email Address',
            value: '',
            validationProps: [{ required: true, message: 'Please enter your email address' }],
        },
        {
            type: 'text',
            name: 'phone',
            label: 'Phone Number',
            placeholder: 'Phone Number',
            value: '',
            validationProps: [{ required: true, message: 'Please enter your phone number' }],
        }         
    ];   
    
    useEffect(() => {        
       dispatch(setStudentsAction(currentUser?.org?.id))
    },[currentUser])

    useEffect(() => {
        updateDataSource();
    },[students])

    const handleEdit = (studentData) => {    
        setActiveStudentID(studentData.id);    
        setEditFormFields([
            {
                type: 'text',
                name: 'name',
                label: 'Full Name',
                placeholder: 'Full Name',
                value: studentData.name,
                validationProps: [{ required: true, message: 'Please enter a full name' }],
            },
            {
                type: 'text',
                name: 'email',
                label: 'Email Address',
                placeholder: 'Email Address',
                value: studentData.email,
                validationProps: [{ required: true, message: 'Please enter an email address' }],
            },
            {
                type: 'text',
                name: 'phone',
                label: 'Phone Number',
                placeholder: 'Phone Number',
                value: studentData.phone,
                validationProps: [{ required: true, message: 'Please enter a phone number' }],
            }         
        ])
        openEditStudentForm();
    }

    const closeEditStudentForm = () => {
        setIsEdit(false);
    }

    const openEditStudentForm = () => {
        setIsEdit(true);
    }

    const closeAddStudentForm = () => {
        setIsAdd(false);
    }

    const openAddStudentForm = () => {
        setIsAdd(true);
    }
    
    const updateStudentData = async (data) => {
        await dispatch(updateStudentAction(data, activeStudentID));
        closeEditStudentForm();
    }

    const addStudent = async (data) => {
        await dispatch(addStudentAction(data))
        closeAddStudentForm();
    }

    const deleteStudent = async (studentID: string) => {
        await dispatch(deleteStudentAction(studentID));        
    }

    const updateDataSource = () => {
        if(students?.length) {
            let ds = students.map((student:User) => {
                return {
                   key: student.id,
                   id: student.id,
                   name: student.name,
                   email: student.email,
                   phone: student.phone
                }
            });
            setDataSource(ds);
        }
    }

    useEffect(() => {
        updateDataSource();        
    },[students])

    return (
        <div className='bg-white p-5 rounded w-full'>
            <div className="flex w-full mb-5 items-center px-2">
                <div className="text-xl font-semibold text-gray-600">
                    Students
                </div>
                <div className="w-full justify-end flex">
                    <button onClick={openAddStudentForm} className="btn-primary">Add Student</button>
                </div>
            </div>
            <Table dataSource={dataSource} columns={columns} />
            <FormDrawer 
                title='Edit Student'
                fields={editFormFields}
                isOpen={isEdit}
                onClose={closeEditStudentForm}
                primaryAction={updateStudentData}
            />

            <FormDrawer 
                title='Add Student'
                fields={addStudentFields}
                isOpen={isAdd}
                onClose={closeAddStudentForm}
                primaryAction={addStudent}
            />
        </div>
    )
}
export default Students;