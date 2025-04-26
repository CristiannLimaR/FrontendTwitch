import toast from "react-hot-toast";
import { followChannel as followChannelRequest } from "../../services";

export const useFollowChannel = () => {

    const followChannel = async (channelId, onSuccess) => {

        const responseData = await followChannelRequest(channelId);

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'An error occurred while following the channel.'
            )
        }

        toast.success('Channel followed successfully!')
        onSuccess(true)
    }

    return {
        followChannel
    }
}