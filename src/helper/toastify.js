import { toast } from 'react-toastify';

export const visitRequestToast = (text , type) => {
    if(type === "success"){
        toast.success(text);
    } else if (type === "error") {
        toast.error(text);
    } else {
        toast.warning(text);
    }
}