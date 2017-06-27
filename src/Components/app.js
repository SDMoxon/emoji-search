import React from 'react';
import SearchBar from './searchBar';
import EmojiList from './emojiList';

class App extends React.Component {
    render () {
        return (
            <div>
                App
                <SearchBar/>
                <EmojiList/>
            </div>
        );
    }
}

export default App;