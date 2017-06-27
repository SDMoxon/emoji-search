import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleChange} />
                </form>
            </div>
        );
    }
    handleChange(event) {
        this.props.getSearchTerm(event.target.value);
    }
}
export default SearchBar;