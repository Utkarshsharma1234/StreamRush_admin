import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios"
import { BASE_URL } from "../../helper";

export default function WidgetSm() {
  const [newUsers,setNewUsers] = useState([]);

  useEffect(()=>{
    const getNewUsers = async() =>{

      try{
        const res = await axios.get(`${BASE_URL}/api/users?new=true`,{
          headers : {
            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWFmYmU0NWY5ZDBlMzNjYTk3MGI5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTA5MzI3MywiZXhwIjoxNjg5NTI1MjczfQ.6hxio-DmZ8Rjv9wMqlxxw0F4CuHnq6whjfk_Y2n4sSM"
          }
    })

        setNewUsers(res.data);
      }
      catch(err){
        console.log(err);
      }
      
    }
    getNewUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user)=>(
          <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8onCrYBFNnAnI4YSwUy87YY4LrRl8jo-PpLohqjKB&s"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
