import React from 'react'
import { connect } from 'react-redux'

import YouTubeSearchListItem from './YouTubeSearchListItem'
import { searchYouTube } from '../actions/'

class YoutubeSearch extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchQuery: ''
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange (e) {
    const value = e.target.value

    this.setState({ searchQuery: value })
    this.props.dispatch(searchYouTube(value))
  }

  render() {
    const { showHide, dispatch } = this.props

    return (
      <div>
        <input type='text' onChange={this.handleSearchChange} value={this.state.searchQuery} />

        <div>
          {this.props.results.map((result, i) => <YouTubeSearchListItem key={i} {...result} />)}
        </div>
      </div>
    )
  }
}

export default connect(state => ({...state.youtubeSearch}))(YoutubeSearch)
