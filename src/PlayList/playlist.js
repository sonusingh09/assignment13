import React,{Component} from 'react';
import axios from 'axios';
import VideoCard from '../VideoCard/VideoCard';
import classes from './playlist.module.css';

class Playlist extends Component {
    state = {
        videoarr: []
    }
    componentDidMount() {
        axios.get("https://5ee9fc4aca5957001602a6b7.mockapi.io/PlayList")
        .then(response => {
            this.setState({videoarr: [...response.data]});
        })
        .catch(err => {
            console.log('Call Failed!!');
        });
    }
    render() {
            
            return(
                <div className={classes.VideoGrid}>
                    {
                       this.state.videoarr.map((item) => {
                            return <VideoCard key={item.id} 
                                id={item.id}
                                nowPlaying={this.props.videoId} 
                                thumbnail={item.thumbnail} 
                                title={item.title} />
                            }
                        )
                    }
                </div>
            )
    }
}

export default Playlist;