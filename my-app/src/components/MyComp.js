import App from "../App"
import React, {useEffect} from 'react';

const MyComp = () => {

    useEffect(()=> {
        const time = setInterval(()=> {
            console.log('반복')
        }, 1000)

        return() => {
          //컴포넌트가 화면에서 사라질 때, 실행
          //clean up 코드
          console.log('clean up!')
          clearInterval(time)
        }
      },[]);

    return (
        <>
            <h1>myComp</h1>
        </>
    )

}

export default MyComp;