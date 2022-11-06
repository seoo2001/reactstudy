import React from "react";
import Listuser from "./Listuser";

const List = (props) => {
    return (
        props.user.map((user) =>
            <div key = {user.id}>
            <Listuser user={user} />
            </div>
        )
    )
}
export default List;