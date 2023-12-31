import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { BASE_URL } from "../../helper";

export default function Home() {
  const MONTHS = useMemo(()=>[
    "Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ],
  [])

  const [userStats, setUserStats] = useState([]);

  useEffect(()=>{
    const getstats = async() =>{

      try{
          const res = await axios.get(`${BASE_URL}/api/users/stats`, {
          headers : {
            token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          }
      })

      const statsList = res.data.sort(function (a,b){
        return a._id - b._id;
      })
      statsList.map((item)=>
          setUserStats((prev)=> [
            ...prev,
            {name : MONTHS[item._id-1], "New User" : item.total},
          ])
        )
      }
      catch(err){
        console.log(err);
      }
      
    }

    getstats();
  },[MONTHS])


  console.log(userStats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        {/* <WidgetLg/> */}
      </div>
    </div>
  );
}
