import React, { useEffect, useState } from "react";
import { Modal, Button, Input, Form } from "antd";
import "./addChange.css";

const AddChangeBook = ({ nameOfBtn, addBookOnServer, requestBookLoading, updateBookOnServer, book }) => {
    const [form] = Form.useForm();
    useEffect(() => {
        if(requestBookLoading === 0){
            setModalText(`${nameOfBtn} please`);
            setVisible(false);
            setConfirmLoading(false);
            form.resetFields();
        }
    },[requestBookLoading, nameOfBtn, form]);

    let modalTextAfterPressOk;
    let titleChange, authorChange, priceChange, coverImageChange, id;

    const [ModalText, setModalText] = useState(`${nameOfBtn} please`);
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    if(nameOfBtn === "Change"){
        modalTextAfterPressOk = "The book is changing...";
        titleChange = book.title;
        authorChange = book.author;
        priceChange = book.price;
        coverImageChange =  book.coverImage;
        id = book._id;
    }
    if(nameOfBtn === "Add new book"){
        modalTextAfterPressOk = "Book is being added...";
    }

    const showModal = () => {
        setVisible(true)
    };

    const handleOk = (newBookValues) => {
        setModalText(modalTextAfterPressOk);
        setConfirmLoading(true);

        if(nameOfBtn === "Change"){
            updateBookOnServer(id, newBookValues)
        }
        if(nameOfBtn === "Add new book"){
            addBookOnServer(newBookValues);
        }
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const validateMessages = {
        required: "Enter the ${name}"
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                {nameOfBtn}
            </Button>
            <Modal
                getContainer={false}
                footer={null}
                title={nameOfBtn}
                visible={visible}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{ModalText}</p>
                <Form
                    form={form}
                    initialValues={{
                        title: titleChange,
                        author: authorChange,
                        price: priceChange,
                        coverImage: coverImageChange
                    }}
                    onFinish={handleOk}
                    validateMessages={validateMessages}
                >
                    <Form.Item name={"title"} rules={[{required: true}, {whitespace: true}]}>
                        <Input
                            placeholder="Title"
                        />
                    </Form.Item>
                    <Form.Item name={"author"} rules={[{required: true}, {whitespace: true}]}>
                        <Input
                            placeholder="Author"
                        />
                    </Form.Item>
                    <Form.Item name={"price"} rules={[{required: true}]}>
                        <Input
                            type={"number"}
                            placeholder="Price"
                        />
                    </Form.Item>
                    <Form.Item name={"coverImage"} rules={[{required: true}, {whitespace: true}]}>
                        <Input
                            placeholder="Link to picture"
                        />
                    </Form.Item>
                    <div className="modalButtons">
                        <Button onClick={handleCancel} className="btnCancel">
                            Cancel
                        </Button>
                        <Button loading={confirmLoading} type={"primary"} htmlType={"submit"}>
                            Ok
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};

export default AddChangeBook