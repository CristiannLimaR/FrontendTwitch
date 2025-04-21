import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getChannelsSettings, updateChannelSettings } from "../../services";

export const useChannelSettings = () => {
    const [channelSettings, setChannelSettings] = useState()
    const fetchChannelSettings = async () => {
        const response = await getChannelsSettings();

        if(response.error){
            return toast.error(
                response.e?.response?.data || 'An error occurred while obtaining the channel data'
            )
        }
        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            avatarUrl: response.data.avatarUrl,
            streamKey: response.data.streamKey,
            description: response.data.description
        })
    }

    const saveSettings = async (data) => {
        const response = await updateChannelSettings(data)
        if(response.error){
            return toast.error(
                response.e?.response?.data || "An error occurred while saving channel data"
            )
        }
        toast.success('Correctly updated information')
    }

    useEffect(()=>{
        fetchChannelSettings()
    }, [])

    return{
        isFetching: !channelSettings,
        channelSettings,
        saveSettings
    }
}