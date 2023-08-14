import React from "react";
import Title from "./Title";
import Channel from "./Channel";

const Channels: React.FC = () => {
    return(
        <div className="mt-4 " >
            <Title label="Text Channel" />
            <Channel selectec name='general'/>
            
            <Title label="Voice Channel"/>
            <Channel name='general' type="voice"/>

        </div>
    )
}

export default Channels