export class Book {
    constructor(public title: string,
        public author: string,
        public publisher: string,
        public genre: string,
        public description: string,
        public image: string,
        public date_published: Date,
        public bookId: string
    ) {

    }
}