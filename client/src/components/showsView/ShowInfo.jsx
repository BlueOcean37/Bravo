import React from 'react';

const ShowInfo = ({ showData }) => (
  <div>
    <h1> Show Info </h1>
    <p className="showTitle"> {showData.showTitle} </p>

    <div className="showInfo">
      <img className="showPhoto" src={showData.showPhoto} />
      <p className="showRating"> Rating: {showData.showRating}</p>

      <p className="showDates"> Dates: {showData.showDate} </p>
      <p className="showWeb"> {showData.showWebsite} </p>

      <p className="showDescript"> Description: {showData.showDescription} </p>
      <p className="showCast"> {showData.showCast} </p>

      <p className="showLocation">
        {' '}
        Address: {showData.showStreet}
        {showData.showCity} {showData.showZip} {showData.showState}{' '}
      </p>
    </div>
  </div>
);
// }
export default ShowInfo;
