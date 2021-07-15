import React from "react";


const ShowInfo = ({showData}) => {

  // if(showData.showTitle !== undefined) {
return (
  <div>
    {/* <h1> Show Info
    {data.title} {data.rating} {data.street}
    {data.city} {data.zip} {data.state} {data.date} {data.website}
    {data.description} {data.photo} {data["cast"]}

    </h1> */}

    <h1> Show Info  </h1>
    <p class = 'showTitle'> {showData.showTitle} </p>

    <div class='showInfo'>
          <img class='showPhoto' src={showData.showPhoto} />
          <p class='showRating' > Rating: {showData.showRating}</p>

          <p class = 'showDates'> Dates: {showData.showDate} </p>
          <p class = 'showWeb'> {showData.showWebsite} </p>

          <p class = 'showDescript'> Description: {showData.showDescription} </p>
          <p class = 'showCast'> {showData.showCast} </p>

          <p class = 'showLocation'> Address: {showData.showStreet}
          {showData.showCity} {showData.showZip} {showData.showState}  </p>

     </div>




  </div>
)
  // }

};

export default ShowInfo;