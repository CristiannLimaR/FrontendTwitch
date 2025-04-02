import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api.js";
import toast from "react-hot-toast";


export const useLogin = async () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const login = async (email, password) => {
        setIsLoading(true)

        const response = await loginRequest({
            email,
            password
        })

        setIsLoading(false)

        if (response.error) {
            return toast.error(response.error?.response?.data || 'An error occurred while logging in, please try again.')
        }

        const { useDetails } = response.data

        localStorage.setItem('user', JSON.stringify(useDetails))

        navigate('/')
    }

    return {
        login,
        isLoading
    }


}