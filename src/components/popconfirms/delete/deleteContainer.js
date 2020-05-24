import React from "react";
import { deleteBookOnServer } from "../../../actions";
import { withBookstoreService } from "../../hoc";
import { connect } from "react-redux";
import DeleteBook from "./delete";

const DeleteBookContainer = ({ bookId, deleteBookOnServer }) => {
    return <DeleteBook bookId={bookId} deleteBookOnServer={deleteBookOnServer}/>
};

const mapStateToProps = ({ addingAndRenameBookLoading }) => {
    return {
        addingAndRenameBookLoading: addingAndRenameBookLoading
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        deleteBookOnServer: (id) => deleteBookOnServer(bookstoreService, dispatch, id)
    };
};

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(DeleteBookContainer)
);
