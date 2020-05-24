import axios from "axios";

export default class BookstoreService {
    getBooks(){
        return axios.get("http://localhost:4000/books")
    }
    createBook(newBook){
        return axios.post("http://localhost:4000/books", newBook)
    }
    updateBook(id, updatedBook){
        return axios.put(`http://localhost:4000/books/${id}`, updatedBook)
    }
    deleteBook(id){
        return axios.delete(`http://localhost:4000/books/${id}`)
    }
}