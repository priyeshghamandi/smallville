
import { notification } from 'antd';

export const message = {
    error: (message:string, description?: string) => {
        notification.open({
            message,
            description,
            placement: 'bottomRight',
            duration: 2,
            type: 'error'
          });
    },
    info: (message:string, description?: string) => {
        notification.open({
            message,
            description,
            placement: 'bottomRight',
            duration: 2,
            type: 'info'
        });
    },
    success: (message:string, description?: string) => {
        notification.open({
            message,
            description,
            placement: 'bottomRight',
            duration: 2,
            type: 'success'
        });
    }
};