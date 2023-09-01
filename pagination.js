let Pagination={
book : [],
currentPage : 1,
pageSize : 1,
gettotalPages (){
    return Math.ceil(this.book.length / this.pageSize)
},

init(book, num) {
    this.book = book;
    this.pageSize = num;
    this.currentPage = 1;
    return this;
},


nextPage () {
    if (this.currentPage < this.gettotalPages()) {
      this.currentPage++;
    }
    return this;
  },

getPageItems(){
    
        let startIndex = (this.currentPage-1) * this.pageSize;
        let endIndex = startIndex + this.pageSize;
        return this.book.slice( startIndex, endIndex);
},

goToPage(num) {
    this.currentPage = num;
    return this;
},

prevPage () {
    if (this.currentPage > 1) this.currentPage--;
    return this;
},

firstPage () {
     this.currentPage = 1; 
     return this;
},

lastPage (){
   this.currentPage = this.gettotalPages(); 
   return this;     
   },
}

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
Pagination.goToPage(3); // current page must be set to 3