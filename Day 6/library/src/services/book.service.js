import { firestore } from "../firebase/firebase";
import {
     collection,
     addDoc, 
     deleteDoc, 
     doc, 
     getDocs,
     query
    } from "firebase/firestore";
import { Book } from "../models/book"

class BookService {
    constructor() {
        this.collection = 'books';
    }

    async createBook(book) {
        const collectionReference = collection(firestore, this.collection);
        const docReference = await addDoc(collectionReference, {
            name: book.name,
            author: book.author,
            isbn: book.isbn
        });

        book.id = docReference.id;
        return book
    }

    async readBooks() {
        const collectionReference = collection(firestore, this.collection);
        const q = query(collectionReference);

        const querySnapshot = await getDocs(q);

        const books = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const book = new Book(
                doc.id,
                data.name,
                data.author,
                data.isbn
            );
              
            books.push(book);
        });

        return books;
    }

    async deleteBook(book) {
        const docReference = doc(firestore, 'books', book.id);
        await deleteDoc(docReference);
    }
}

const service = new BookService();

export default service;