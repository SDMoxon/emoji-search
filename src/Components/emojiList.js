import React from 'react';
import Emoji from './emoji';


class EmojiList extends React.Component {
    render () {
        return (
            <div>
                {this.props.emojiList.map((emoji) => {
                    return <Emoji title={emoji.title} symbol={emoji.symbol} />;
                })}
            </div>
        );
    }
}
export default EmojiList;