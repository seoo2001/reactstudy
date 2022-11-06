import React, { useState, useRef } from 'react';
import InputData from './InputData';
import List from './List' 

const App = () => {
    const index = useRef(4);
    const [user, setUser] = useState([
        {
            id: 1,
            name: "seodongjoon",
            phone: "010-0000-0000",
            info: "mobile"
        },
        {
            id: 2,
            name: "seodj",
            phone: "010-1000-0000",
            info: "home"
        },
        {
            id: 3,
            name: "ssseodj",
            phone: "010-1200-0000",
            info: "home"
        }
    ]);

    return (
        <>
            <InputData />
            <List user = {user}/>
        </>
    )
}
export default App;