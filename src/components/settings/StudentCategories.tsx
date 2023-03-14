import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {setStudentCategoriesAction, addStudentCategoryAction, deleteStudentCategoryAction, updateStudentCategoryAction} from '../../redux/student-category/student-category.slice';
import FormDrawer from '../form-drawer/FormDrawer';
import {FormField} from '../form/types';
import {Space, Table, Popconfirm} from 'antd';
import { StudentCategory } from "../../redux/student-category/types";


const StudentCategories:React.FC = ():JSX.Element => {
    const [dataSource, setDataSource] = useState<any>([]);
    const studentCategories = useSelector((state:RootState) => state.studentCategory.studentCategories);
    const [addCategoryFormOpen, setAddCategoryFormOpen] = useState<boolean>(false);
    const [editCategoryFormOpen, setEditCategoryFormOpen] = useState<boolean>(false);
    const [editCategoryFormFields, setEditCategoryFormFields] = useState<FormField[]>([]);
    const [activeCategoryID, setActiveCategoryID] = useState<string>('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setStudentCategoriesAction())
    },[dispatch])

    useEffect(() => {
        updateDataSource();
    },[studentCategories])
    

    const openAddCategoryForm = () => {
        setAddCategoryFormOpen(true);
    }

    const closeAddCategoryForm = () => {
        setAddCategoryFormOpen(false);
    }

    const openEditCategoryForm = () => {
        setEditCategoryFormOpen(true);
    }

    const closeEditCategoryForm = () => {
        setEditCategoryFormOpen(false);
    }

    const addStudentCategory = (data) => {
        dispatch(addStudentCategoryAction(data))
    }

    const editStudentCategory = (data) => {
        dispatch(updateStudentCategoryAction(data, activeCategoryID))
    }

    const deleteStudentCategory = (id) => {
        dispatch(deleteStudentCategoryAction(id))
    }

    let addStudentFields:FormField[] = [
        {
            type: 'text',
            name: 'name',
            label: 'Name',
            placeholder: 'Name',
            value: '',
            validationProps: [{ required: true, message: 'Please enter category name' }],
        },
        {
            type: 'number',
            name: 'fees',
            label: 'Fees',
            placeholder: 'Fees',
            value: 0,
            validationProps: [{ required: true, message: 'Please enter fees for this category' }],
        }
    ];  

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Fee',
          dataIndex: 'fees',
          key: 'fees',
        },
        {
            title: '',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">                              
                <a href="#" onClick={() => {handleEdit(record)}} className="a-primary">Edit</a>
                <a href="#" className="a-primary">
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this category?"
                        onConfirm={() => {deleteStudentCategory(record.key)}}
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

    const updateDataSource = () => {
        if(studentCategories.length) {
            let ds = studentCategories.map((studentCategory:StudentCategory) => {
                return {
                   key: studentCategory.id,
                   name: studentCategory.name,
                   fees: studentCategory.fees
                }
            });
            setDataSource(ds);
        }
    }

    const handleEdit = (data) => {        
        setActiveCategoryID(data.key);
        setEditCategoryFormFields([
            {
                type: 'text',
                name: 'name',
                label: 'Name',
                placeholder: 'Name',
                value: data.name,
                validationProps: [{ required: true, message: 'Please enter category name' }],
            },
            {
                type: 'number',
                name: 'fees',
                label: 'Fees',
                placeholder: 'Fees',
                value: data.fees,
                validationProps: [{ required: true, message: 'Please enter fees for this category' }],
            }])
            openEditCategoryForm();
    }
    
    return (
            <div>
                <div className="flex w-full mb-5 items-center px-2">
                    <div className="w-full text-[16px] text-[#000000e0] font-semibold ">
                        Student Categories
                    </div>
                    <div className="w-full justify-end flex">
                        <button onClick={openAddCategoryForm} className="btn-primary">Add Category</button>
                    </div>
                </div>
                <Table dataSource={dataSource} columns={columns} />
                <FormDrawer 
                    title='Add Category'
                    fields={addStudentFields}
                    isOpen={addCategoryFormOpen}
                    onClose={closeAddCategoryForm}
                    primaryAction={addStudentCategory}
                />
                <FormDrawer 
                    title='Edit Category'
                    fields={editCategoryFormFields}
                    isOpen={editCategoryFormOpen}
                    onClose={closeEditCategoryForm}
                    primaryAction={editStudentCategory}
                />
            </div>
    )
}
export default StudentCategories;