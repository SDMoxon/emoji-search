import React from 'react';


class SearchBar extends React.Component {
    render () {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.props.handleChange}/>
                </form>
            </div>
        );
    }
}
export default SearchBar;