import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAcOwd3QRCa5_lLE6fbCHwoj-5ZvHZr_78';


YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
})



// Create a new component
// Should produce some HTML and put it in the DOM

//JSX appears to be HTML within JavaScript, but it is actually JavaScript


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			}); // equal to this.setState({videos: videos})
		});
	}

	render () {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));