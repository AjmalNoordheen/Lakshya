import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import userInstance from "../../Api/UserApi";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import adminInstance from "../../Api/AdminApi";
import AdminNanbar from "./AdminNanbar";

function ListEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    userInstance
      .get("/listEvents")
      .then((res) => {
        if (res.data.result === true) {
          setEvents(res.data.eventLists);
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteItem =async (id)=>{
    try {
       const res = await adminInstance.delete(`/deleteEvent?id=${id}`)
       if(res.data.result==='success'){
        setEvents(events.filter((item)=>item._id !== id))
        toast.success('deleted successfully')
       }else{
        toast.error('Something went Wrong')
        console.log(res.data.result)
       }
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
     <div className="min-h-screen relative  bg-[#14191f] ">
    <AdminNanbar/>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-[#14191f] xl:grid-cols-4 gap-4 p-4">
        {events.map((item, index) => (
          <Card className="ml-[5%] md:ml-0 mt-2 col-span-1 xl:col-span-1" sx={{ maxWidth: 345 ,background:'#000000'}}>
            <CardActionArea>
              <CardMedia
                component=""
                style={{
                  height: "200px",
                  width: "100%",
                  objectFit: "cover",
                }}
                className=""
                image={
                  item.image
                    ? item.image
                    : "https://www.setupguimaraes.com/wp-content/plugins/post-grid/assets/frontend/css/images/placeholder.png"
                }
                alt={item.heading || "Event Image"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" color={'#a79898'}  component="div">
                  {item.heading || "Event Title"}
                </Typography>
                <Typography variant="body2" color="#7f7a7a">
                {item.description
    ? item.description.substring(0,80).match(/.{1,40}/g).map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>     
      ))
    : "Event Description"}                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick={()=>deleteItem(item._id)} color="primary"  size="small" >
                <p className="text-purple-800 hover:text-purple-700">Delete</p>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
     </div>
    </>
  );
}

export default ListEvents;
