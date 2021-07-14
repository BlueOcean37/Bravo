import React from "react";


const ShowInfo = ({data}) => (

  <div>
    {/* <h1> Show Info
    {data.title} {data.rating} {data.street}
    {data.city} {data.zip} {data.state} {data.date} {data.website}
    {data.description} {data.photo} {data["cast"]}

    </h1> */}

    <h1> Show Info  </h1>
    <p class = 'showTitle'> {data.title} </p>

    <div class='showInfo'>
          <img class='showPhoto' src={data.photo} />
          <img class='showRating' src={this.props.stars(this.state.rating)}/>

          <p class = 'showDates'> {data.date} </p>
          <p class = 'showWeb'> {data.website} </p>

          <p class = 'showDescript'> {data.description} </p>
          <p class = 'showCast'> {data[cast]} </p>

          <p class = 'showLocation'> {data.street}
          {data.city} {data.zip} {data.state}  </p>

     </div>




  </div>
);

export default ShowInfo;