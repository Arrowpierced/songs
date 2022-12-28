import React, {Component} from 'react'
import { connect} from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
    renderList(){
        return this.props.songs.map((song)=> {
            return (
                <div className='item' key={song.title}>
                    <div className="right floated content">
                        <button 
                        onClick = {() => this.props.selectSong(song)}
                        className='ui button primary'>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='ui divided list'>
                {this.renderList()}
            </div>
        )
    }
}

//convention to name mapStateToProps thusly
//runs computation to cause data to show up as props inside component
//entire list of songs + currently selected song from selectedSongReducer
const mapStateToProps = (state) => {
    return { songs: state.songs }
}

export default connect(mapStateToProps, {selectSong})(SongList)