import React from "react";
import {connect} from "react-redux";
import { message, Space } from "antd";

const ErrorMessage = ({ bookError }) => {
    if(bookError){
        const error = () => {
            message.error(`Error: ${bookError}`);
        };
        return(
            <Space>
                {error()}
            </Space>
        )
    }
    return null
};

const mapStateToProps = ({ bookError }) => {
    return {
        bookError: bookError
    };
};

export default connect(mapStateToProps)(ErrorMessage);