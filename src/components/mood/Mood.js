import React, {Component} from 'react';
import './mood.css'
class Mood extends Component {
    state = {
        numberGif: 200,
    }

    angryClick = () => {
        this.props.getdataFeel(`https://api.giphy.com/v1/gifs/search?api_key=1JdcZTBUIBXD2kaE1z59aDzYXu2VtVGH&q=${this.props.angry}&limit=${this.state.numberGif}&offset=0&rating=G&lang=fr`)
    }
    happyClick = () => {
        this.props.getdataFeel(`https://api.giphy.com/v1/gifs/search?api_key=1JdcZTBUIBXD2kaE1z59aDzYXu2VtVGH&q=${this.props.happy}&limit=${this.state.numberGif}&offset=0&rating=G&lang=fr`)
    }
    
    render() { 
        const buttonFeel = this.props.click? "buttonVisible" : "buttonInvisible"
        return ( 
        <div>
            <h2>How do you feel ?</h2>
            <button onClick={this.angryClick}>Angry</button>
            <button onClick={this.happyClick}>Happy</button>
            <br/>
           { 
        this.props.data.slice(`${this.state.previous}`,`${this.props.next}`).map((e, index) => ( <img key={index} src={e.images.fixed_height.url} alt="" /> ))
        }
        <button className={buttonFeel} onClick={this.props.moreGif}>More</button>
        </div> );
    }
}
 
export default Mood;