import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
       return(
        <div>
            <h1>Manish </h1>
        </div>
       )
    }
};
export default Profile;