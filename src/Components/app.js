import React from 'react';
import SearchBar from './searchBar';
import EmojiList from './emojiList';
import emojiList from '../emojiList.json';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            searchTerm : this.props.value
        };
        this.handleChange = this.handleChange.bind(this);
    }
    render () {
        return (
            <div>
                App
                <SearchBar onChange={this.handleChange}/>
                <EmojiList emojiList={emojiList}/>
            </div>
        );
    }
    handleChange(text) {
        this.setState({
            searchTerm : text
        });
    }
}

export default App;