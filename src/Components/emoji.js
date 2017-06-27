import React from 'react';


class Emoji extends React.Component {
    render () {
        return (
            <div>
                <span>{this.props.symbol}</span>
                {' '}
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default Emoji;