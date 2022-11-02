

class Book{
    constructor(bookName,bookAuthor,bookISBN){
        this.bookName= bookName;
        this.bookAuthor= bookAuthor;
        this.bookISBN= bookISBN;
    }
}

class UI{
    addBook(book){
        const table= document.getElementById('bookList');
        const row= document.createElement('tr');
        row.innerHTML= `
        <td>${book.bookName}</td>
        <td>${book.bookAuthor}</td>
        <td>${book.bookISBN}</td>
        <td><i class="fa-solid fa-trash"></i></td>
        `

        table.appendChild(row);


    }
    showMessage(message,className){
      const messageBox= document.createElement('div');
      messageBox.className= ` alert ${className}`;
      messageBox.appendChild(document.createTextNode(message));
      const container= document.getElementById('container');
      const form= document.getElementById('booksForm');
      container.insertBefore(messageBox, form);

      setTimeout(function(){
        document.querySelector('.alert').remove();
      },1500);


    }
    numberOfBook(){
        const table= document.getElementById('bookList');
        const numberOfRecords=document.getElementsByTagName("tr").length-1;
        document.getElementById('result').innerHTML= numberOfRecords+" "+ 'adet kayıtlı kitap bulunmaktadır';

    }
    deleteBook(target){
        if(target.className === 'fa-solid fa-trash'){
            target.parentNode.parentNode.remove()
        }


    }
    clearForm(){
        document.getElementById('bookName').value= " ";
        document.getElementById('bookAuthor').value= " ";
        document.getElementById('bookIsbn').value= " ";
    }


}



document.getElementById('booksForm').addEventListener('submit', function(e){
    
    const bookName=document.getElementById('bookName').value,
        bookAuthor= document.getElementById('bookAuthor').value,
        bookISBN= document.getElementById('bookIsbn').value;

    const book= new Book(bookName,bookAuthor,bookISBN);
    const ui= new UI();
   

    if(bookName!=='' && bookAuthor!=='' && bookISBN !== ''){
        ui.addBook(book);
        ui.showMessage('Kitap başarılı bir şekilde eklendi!', 'success')
        ui.clearForm();
        ui.numberOfBook();
    }else{
        ui.showMessage('Lütfen tüm alanları doldurun!', 'error')
    }


    e.preventDefault();

});


document.getElementById('bookList').addEventListener('click', function(e){

    const ui= new UI(); 
    ui.deleteBook(e.target);

    ui.showMessage('Kitap başarılı bir şekilde silindi!', 'error')

    ui.numberOfBook();

    e.preventDefault();

});

