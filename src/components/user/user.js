import React from 'react';

export const User = ({users}) => {
    return (
        <section className='table'>
            <h2 className='table-title'>our users</h2>
            <div className="table-card d-none">
                <div className="table-photo"> photo</div>
                <div className="table-name"> name</div>
                <div className="table-status">status</div>
                <div className="table-registration">registration</div>
                <div className="table-age">age</div>
                <div className="table-action">action</div>
            </div>
            {
                users.map((userData, i)=>{
                    return <div className="user" key={i}>
                    <div className="user-photo"> 
                        <img src={`https://tz.smart-ui.pro${userData.photo}`} alt="avatar"/>
                    </div>
                    <div className="user-name">  
                        {userData.name} 
                    </div>
                    <div className="user-status"> 
                        { userData.online?"online":"offline"} 
                    </div>
                    <div className="user-registration"> 
                        {userData.registration}
                    </div>
                    <div className="user-age">
                        {userData.age} 
                    </div>
                    <div className="user-chat"> 
                        <button disabled={!userData.online}>Chat</button> 
                    </div>
                </div>
                })
            }          
        </section>
    );
};
