import { useChannelSettings } from "../../shared/hooks";
import { ChannelSettings } from "../channel/ChannelSettings";
import {LoadingSpinner} from '../LoadingSpinner'
import { StreamKey } from "./StreamKey";
import { PasswordSettings } from "./passwordSettings";
import { useState } from "react";


export const Settings = () => {
    const {channelSettings, isFetching, saveSettings} = useChannelSettings()

    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings settings={channelSettings} saveSettings={saveSettings}/>
            <PasswordSettings/>
            <StreamKey stremKey={channelSettings.streamKey}/>
        </div>
    )
}