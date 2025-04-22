import { useState } from "react";
import toast from "react-hot-toast";
import { getChannelsDetails as getChannelDetailsRequest } from "../../services";

export const useChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState()

    const getChannelDetails = async (id) => {
        const responseData = await getChannelDetailsRequest(id)
        
        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'error loading channel information'
            )
        }
        console.log(responseData.data)

        setChannelDetails(responseData.data)

        
    }

    return{
        channelDetails,
        isFetching: !channelDetails,
        getChannelDetails
    }
}