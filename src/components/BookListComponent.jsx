import { Component } from "react";
import SingleBookComponent from "./SingleBookComponent";

class BookListComponent extends Component {
    state = {
        searchTerm: "",
    };

    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        const { books } = this.props;
        const { searchTerm } = this.state;

        const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

        return (
            <>
                <label htmlFor="search"></label>

                <input type="text" id="search" value={searchTerm} onChange={this.handleSearchChange} />
                {filteredBooks.map((book, index) => (
                    <SingleBookComponent key={index} book={book} />
                ))}
            </>
        );
    }
}

export default BookListComponent;
