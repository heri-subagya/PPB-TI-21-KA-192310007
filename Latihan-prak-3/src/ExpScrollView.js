import { ScrollView } from "react-native";
import React from "react";
import UserItem from "./UserItem";

const ExpScrollView = ({Users}) => {
    return (
        <ScrollView>
            {Users.map((v,index)=>(
                <UserItem item={v} key={index}/>
            ))}
        </ScrollView>
    )
}

export default ExpScrollView;