import React from 'react';


class Emoji extends React.Component {
    render () {
        return (
            <div>
                <span>{this.props.title}</span>
                <span>{this.props.symbol}</span>
            </div>
        );
    }
}

export default Emoji;