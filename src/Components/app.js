import React from 'react';
import SearchBar from './searchBar';
import EmojiList from './emojiList';


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            searchTerm : ''
        };
        this.getSearchTerm = this.getSearchTerm.bind(this);
    }
    render () {
        return (
            <div>
                App
                <SearchBar getSearchTerm={this.getSearchTerm}/>
                <EmojiList searchTerm={this.state.searchTerm}/>
            </div>
        );
    }
    getSearchTerm(text) {
        this.setState({
            searchTerm : text
        });
        console.log(this.state.searchTerm);
    }
}

export default App;