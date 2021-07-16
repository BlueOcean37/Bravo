// import React from 'react';
// // import { useAuth } from '../../contexts/AuthContext';

// // const { currentUser } = useAuth();

// class AddComment extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user_id: '',
//       review_id: '',
//       text: '',
//     };
//   }

//   handleInputChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     this.props.handleAddNewComment({
//       user_id: this.props.user_id,
//       review_id: this.props.review_id,
//       text: this.state.text,
//     });
//     this.setState({
//       user_id: '',
//       review_id: '',
//       text: '',
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit.bind(this)}>
//         <div>
//           <div className="addCommentBox">
//             Add Comment:
//             <input
//               type="text"
//               name="text"
//               value={this.state.text}
//               onChange={this.handleInputChange.bind(this)}
//             />
//           </div>

//           <input type="submit" value="Submit Comment" />
//         </div>
//       </form>
//     );
//   }
// }
// export default AddComment;
