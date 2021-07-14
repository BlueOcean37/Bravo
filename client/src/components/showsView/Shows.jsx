// shows MAIN page, only import sub components here
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ShowInfo from "./ShowInfo.jsx";
import Reviews from "./Reviews.jsx";


// export default function Shows() {
//   return <div>Shows Main Page</div>;
// }

class Shows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [],
      reviews: [],
      showData: []

    };
  }


  getPReviews() {
    axios.get('/show/:id/reviews')
      .then(({ data }) => {
        // console.log(data);
        this.setState({
          reviews: data
        });
      })
      .catch((err) => console.log(err));
  }

  handleAddNewReview(newstate) {
    // console.log("THIS IS NEW REVIEW", state)
    // console.log("THIS IS NUMBER OF REVIEWS", this.state.reviews.length + 1);
    // console.log("THIS IS NAME OF NEW REVIEW", newstate.name);
    axios.post('/show:id/reviews', {id: this.state.reviews.length + 1,
      name: newstate.name,
      types: newstate.types,
      imageUrl: newstate.imageUrl})
    .then((response) => {
      console.log("THIS IS RESPONSE WITH NEW review", response);
    })
    .catch ((error) => {
      console.log("THIS IS RESPONSE WITH NEW review", error);
    })
    .then ( () => this.getPokemons());
  }

  // user_id integer NOT NULL,
  // show_rating numeric NOT NULL,
  // text character varying NOT NULL,
  // date bigint NOT NULL,
  // rating

  handleFilterReviews(types) {
    // console.log("TYPES", types)
    axios.get('/reviews', {params: types})
      .then(({ data }) => {
        // console.log(data);
        this.setState({
          reviews: data
        });
      })
      .catch((err) => console.log(err));
  }






  // componentDidMount() {
  //   this.getReviews();
  // }

  render() {
    return (

   <div>
    <div>

      <ShowInfo showData= {this.props.data} stars ={this.state.stars}
      />
     </div>

      <Reviews reviewData= {this.state.reviews} />

    </div>

    )}
}
export default Shows;


// ReactDOM.render(<App />, document.getElementById("app"));