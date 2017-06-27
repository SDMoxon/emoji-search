import React from 'react';
import Emoji from './emoji';
import emojiList from '../emojiList.json';

class EmojiList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {emojiList.reduce((acc, emoji) => {
                    const expression = new RegExp(this.props.searchTerm,'i');
                    if (expression.test(emoji.title) || emoji.keywords.includes(this.props.searchTerm)) {
                        acc.push(<Emoji title={emoji.title} symbol={emoji.symbol} />);
                    }
                    return acc;
                }, [])}
            </div>
        );
    }
}
export default EmojiList;