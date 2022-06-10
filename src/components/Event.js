import React from "react";

class Event extends React.Component{

   showMsg = (msg) => {
       alert('Đây là thông báo: '+msg);
   } 

   render() {

       const eventShowMsg = ()=>{
           this.showMsg('Unicode')
       };

       return (
           <div>
               <button type="button" onClick={eventShowMsg}>Click me</button>
           </div>
       );
   }
}

export default Event;