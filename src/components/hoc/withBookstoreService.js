import React, { useContext } from "react";
import { bookstoreServiceContext } from "../bookstoreServiceContext";

const withBookstoreService = () => {
    return function (Wrapped) {
        return (props) => {
            const bookstoreService = useContext(bookstoreServiceContext);
            return <Wrapped {...props} bookstoreService={bookstoreService}/>
        }
    }
};
export default withBookstoreService;