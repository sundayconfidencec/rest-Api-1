

const bookModel = require("../myModel/book");

const createBookController = (req, res) => {
    const {Title, Author, Description} = req.body;
    const book = new bookModel ({Title,Author,Description});
    book.save().then(result => {
        res.json({message: "book has been created successfully", bookShelf: result})
    }).catch(err => console.log(err));
}

const updateBookController = (req, res) => {
    const {id,Title, Author, Description} = req.body;
    bookModel.findById(id).then(book => {
        if(book){
            book.Title = Title;
            book.Author = Author;
            book.Description = Description;

            book.save();
            res.json({message: "update successful", bookShelf: book});
        }
            res.json({message: "book not found"});
        
    }).catch(err => console.log(err));
}

const deleteBookController = (req,res) => {
     const {id} =  req.body;
     bookModel.findByIdAndRemove(id).then(deletedBook => {
        if(deletedBook){
            res.json({message: "delete successful", bookShelf: deletedBook});
            return;
        }
        res.json({message: "failed to delete"});
     })
}





module.exports = {createBookController,updateBookController,deleteBookController}