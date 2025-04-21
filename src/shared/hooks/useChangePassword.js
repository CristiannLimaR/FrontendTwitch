import toast from "react-hot-toast";   
import { changePassword as changePasswordRequest } from "../../services"

export const useChangePassword = () => {
    const changePassword = async (password, newPassword) => {
        const responseData = await changePasswordRequest({password, newPassword})
        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'it is not possible to change the password'

            )
           
        }
        toast.success('Password updated successfully')
        
        return{
            changePassword
        }
    }
}