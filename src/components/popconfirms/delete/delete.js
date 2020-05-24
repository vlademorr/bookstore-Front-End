import React from "react";
import { Popconfirm, Button } from "antd";

const DeleteBook = ({ bookId, deleteBookOnServer }) => {
    const confirm = () => {
        deleteBookOnServer(bookId);
    };

  return(
      <Popconfirm
          title="Are you sure delete this book?"
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
      >
          <Button>
              Delete
          </Button>
      </Popconfirm>
  )
};

export default DeleteBook