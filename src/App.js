import './App.scss';
import {Video} from "./components/video/video";
import {User} from "./components/user/user";
import {useEffect, useState} from "react";

function App() {

    const [data , setData] = useState({});
    useEffect(()=>{
        fetch("https://tz.smart-ui.pro/")
            .then((data)=>{
                return data.json();
            }
            )
            .then((resp)=>{
                setData(resp)
            })
    },[])

    const valid = data.video && data.users;

    if(!valid){
        return  
    }

    const { users, video } = data;
    return (
        <div className="wrapper">
            <header/>
                <main  >
                    <Video video={video}/>
                    <User users={users}/>
                </main>
            <footer/>
        </div>
    );
}

export default App;