import React from "react";
import { ActivityIndicator } from "react-native";

export default function Loader({loading}) {
    return loading ? <ActivityIndicator color="#0E89B1" /> : null;
}