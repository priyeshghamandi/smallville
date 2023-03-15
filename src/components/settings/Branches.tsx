import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {setBranchesAction, addBranchAction, deleteBranchAction, updateBranchAction} from '../../redux/branch/branch.slice';
import FormDrawer from '../form-drawer/FormDrawer';
import {FormField} from '../form/types';
import {Space, Table, Popconfirm} from 'antd';
import { Branch } from "../../redux/branch/types";


const Branches:React.FC = ():JSX.Element => {
    const [dataSource, setDataSource] = useState<any>([]);
    const branches = useSelector((state:RootState) => state.branch.branches);
    const [addCategoryFormOpen, setAddCategoryFormOpen] = useState<boolean>(false);
    const [editCategoryFormOpen, setEditCategoryFormOpen] = useState<boolean>(false);
    const [editCategoryFormFields, setEditCategoryFormFields] = useState<FormField[]>([]);
    const [activeCategoryID, setActiveCategoryID] = useState<string>('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setBranchesAction())
    },[dispatch])

    useEffect(() => {
        updateDataSource();
    },[branches])
    

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

    const addBranch = (data) => {
        dispatch(addBranchAction(data.name, data.address))
    }

    const editBranch = (data) => {
        dispatch(updateBranchAction(activeCategoryID, data.name, data.address))
    }

    const deleteBranch = (id) => {
        dispatch(deleteBranchAction(id))
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
            type: 'textarea',
            name: 'address',
            label: 'Address',
            placeholder: 'Address',
            value: '',
            validationProps: [{ required: true, message: 'Please enter address for this category' }],
        }
    ];  

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
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
                        onConfirm={() => {deleteBranch(record.key)}}
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
        if(branches.length) {
            let ds = branches.map((branch:Branch) => {
                return {
                   key: branch.id,
                   name: branch.name,
                   address: branch.address
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
                type: 'textarea',
                name: 'address',
                label: 'Address',
                placeholder: 'Address',
                value: data.address,
                validationProps: [{ required: true, message: 'Please enter address for this category' }],
            }])
            openEditCategoryForm();
    }
    
    return (
            <div>
                <div className="flex w-full mb-5 items-center px-2">
                    <div className="w-full text-[16px] text-[#000000e0] font-semibold ">
                        Branches
                    </div>
                    <div className="w-full justify-end flex">
                        <button onClick={openAddCategoryForm} className="btn-primary">Add Branch</button>
                    </div>
                </div>
                <Table dataSource={dataSource} columns={columns} />
                <FormDrawer 
                    title='Add Branch'
                    fields={addStudentFields}
                    isOpen={addCategoryFormOpen}
                    onClose={closeAddCategoryForm}
                    primaryAction={addBranch}
                />
                <FormDrawer 
                    title='Edit Branch'
                    fields={editCategoryFormFields}
                    isOpen={editCategoryFormOpen}
                    onClose={closeEditCategoryForm}
                    primaryAction={editBranch}
                />
            </div>
    )
}
export default Branches;