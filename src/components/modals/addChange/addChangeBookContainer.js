import React from "react";
import { addBookOnServer, updateBookOnServer } from "../../../actions";
import { withBookstoreService } from "../../hoc";
import { connect } from "react-redux";
import AddChangeBook from "./addChangeBook";

const AddChangeBookContainer = ({ nameOfBtn, addBookOnServer, requestBookLoading, updateBookOnServer, book }) => {
    return <AddChangeBook
                nameOfBtn={nameOfBtn}
                addBookOnServer={addBookOnServer}
                requestBookLoading={requestBookLoading}
                updateBookOnServer={updateBookOnServer}
                book={book}
            />
};


const mapStateToProps = ({bookLoading}) => {
    return {
        requestBookLoading: bookLoading
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        addBookOnServer: (newBook) => addBookOnServer(bookstoreService, dispatch, newBook),
        updateBookOnServer: (id, updatedBook) => updateBookOnServer(bookstoreService, dispatch, id, updatedBook)
    };
};

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(AddChangeBookContainer)
);