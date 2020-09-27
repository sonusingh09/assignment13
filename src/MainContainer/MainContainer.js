import React, { Component } from 'react';
import classes from './MainContainer.module.css';
import WatchVideo from '../VideoPage/videopage';
import Playlist from '../PlayList/playlist';
import {Link} from 'react-router-dom';

class MainVideoContainer extends Component{
    render()
    {
        return(
                <div>
                    <Link to='/' className={classes.BackButton }>Back to Home</Link>
                    <div className={classes.Title}>The Video Player</div> 
                        <div className={classes.MainContainer}>
                            <WatchVideo videoId={this.props.match.params.vId}/>
                            <Playlist videoId={this.props.match.params.vId}/>   
                        </div>  
                </div>
             
        );
    }

}
export default MainVideoContainer;