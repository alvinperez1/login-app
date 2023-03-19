import React from 'react';
import Post from './post';
import LikeButton from './reply-button';

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        return (
            <div className="container">
               <LikeButton />
               
               
               <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
               <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                
                
                
                
                
                
                
                <br></br><Post />
                
            </div>
        );
    }
}