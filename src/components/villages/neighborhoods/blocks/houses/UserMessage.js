import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

const FirebaseConfig = {
    apiKey: "AIzaSyBr-2cJNcrTR197OWbwl78lWgp4epYchok",
    authDomain: "chat-bot-demo-23237.firebaseapp.com",
    databaseURL: "https://chat-bot-demo-23237.firebaseio.com",
    projectId: "chat-bot-demo-23237",
    storageBucket: "chat-bot-demo-23237.appspot.com",
    messagingSenderId: "164069812704",
    appId: "1:164069812704:web:ccebd8c027c7141eac6385",
    measurementId: "G-4TG1D14G5H"
  };

  firebase.initializeApp(FirebaseConfig);

  const database = firebase.database();
  const user = database.ref('user');

class UserMessage extends React.Component{
  constructor(){
    super();
    this.state = {avatar: "", username: "", message: "", showComponent: false}
  }

  componentDidMount(){
    let firebaseAvatar;
    let firebaseUsername;
    let firebaseMessage;

    let promise1 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot){
        firebaseAvatar = snapshot.val().avatar;
        resolve(firebaseAvatar);
      });
    });

    let promise2 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot){
        firebaseUsername = snapshot.val().username;
        resolve(firebaseUsername);
      });
    });

    let promise3 = new Promise((resolve, reject) =>
  {
    user.on('value', function(snapshot){
      firebaseMessage = snapshot.val().message;
      resolve(firebaseMessage);
    });
  });

  Promise.all([promise1, promise2, promise3]).then(values=> {
    this.setState({
      avatar: values[0],
      username: values[1],
      message: values[2]
    })
    console.log(values);
  });

  setTimeout(()=>{
    this.setState({showComponent: true});
  }, 3000
  )

  }
  render(){
    const showComponent = this.state.showComponent;
    return (
      <div>
      {showComponent? (
      <div className = "user-message">
        <div style={{background: this.state.avatar}} className="user-avatar">
        </div>
        <div className="username">{this.state.username}</div>
        <div className="message">{this.state.message}</div>
        </div>
      ) : (
        <div></div>
      )}
      </div>
    )


  }
}


export default UserMessage;
