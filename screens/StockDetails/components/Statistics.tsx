import React from "react";
import { usePrevClose } from "../hooks/usePrevClose";
import InfoItem from "./InfoItem";
import { View } from "native-base";

export default function Statistics() {
    const prevClose = usePrevClose();
    
    if(prevClose) {
        const { close, open, high, low, volume } = prevClose;
        return <View>
            <InfoItem title="Close" value={close} />
            <InfoItem title="Open" value={open} />
            <InfoItem title="High" value={high} />
            <InfoItem title="Low" value={low} />
            <InfoItem title="Volume" value={volume} />
        </View>
    }
    return null;
}