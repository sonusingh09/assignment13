  
import React, { Component } from 'react';
import classes from './videopage.module.css';
import axios from 'axios';
class WatchVideo extends Component{
    state={
        data:{},
        isLiked: false,
        isSaved: false
    }
    componentDidMount(){
        axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/1')
        .then(response=>{
            this.setState({
                data:{...response.data}
            })
        })
        .catch(err=>{
            console.log('error')
        })
       }
     componentDidUpdate(){
       const videoId = this.props.videoId; 
       if(videoId !== this.state.data.id) 
       {
           axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${videoId}`)
           .then(response=>{
               this.setState({data:{...response.data}})
               window.scroll(0,0)
           })
           .catch(err => {
               console.log("Call Failed");
           })
       }
     }
      render(){ 
       const data=this.state.data;
       console.log(data);
      return(
            <div className={classes.VideoWrapper}>
                
                <iframe src={`https://player.vimeo.com/video/${data.vimeoId}`} 
                 id="" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                </iframe>

                      <div className={classes.VideoInfoWrapper}>
                    <p><span className={classes.ViewsCount}>{data.views}</span> views</p>
                          <div className={classes.Feedback}>
                                <i className={data.isLiked === 'true' ? ["far", "fa-heart", classes.Yellow].join(' ') : null}></i>
                                <i class="far fa-comment-alt"></i>
                                <i className={data.isLiked === 'true' ? ["far", "fa-bookmark", classes.Yellow].join(' ') : null}></i>
                          </div>
                      </div>
                    <div>
                        <h1 className={classes.VideoTitle}>{data.title}</h1>
                        <p className={classes.VideoDescription}>{data.description}</p>
                    </div>
            </div>
      )
    }
}
   
export default WatchVideo;