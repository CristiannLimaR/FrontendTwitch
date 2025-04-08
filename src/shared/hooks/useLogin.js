import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api.js";
import toast from "react-hot-toast";


export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const login = async (email, password) => {

        setIsLoading(true)

        const response = await loginRequest({
            email,
            password
        })

        setIsLoading(false)

        if(response.error){
            console.log(response.e)
            return toast.error(response.error?.response?.data || 'An error occurred while logging in, please try again.')
        }

        const { userDetails } = response.data

        localStorage.setItem('user', JSON.stringify(userDetails));
        toast.success('Successful Login')
        navigate('/')
    }
    return {
        login,
        isLoading
    }


}
