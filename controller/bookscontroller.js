const db = require('../model')
const book = db.books


const add_books = async(req,res)=>{
    const {BookName,AuthorName,Price,IsActive} = req.body    //use destructuring assignmet here.
    const data = await book.create({BookName,AuthorName,Price,IsActive})
    res.status(200).json({data:data,message:"book name inserted"})
}
const search_books = async(req,res)=>{
    var id = req.params.id
    const data = await book.findOne({where:{id:id}})
        res.status(200).json({data:data,message:"book found "})
}
const books_list = async(req,res)=>{
    const data = await book.findAll({})
    res.status(200).json({data:data,message:"books list is here"})
}
const book_edit = async(req,res)=>{
    var id = req.params.id
    const {BookName,AuthorName,Price,IsActive} = req.body
    const data = await book.update(req.body,{where:{id:id}})
    res.status(200).json({data:data,message:"books are updated"})
}
const delete_book = async(req,res)=>{
    var id = req.params.id
    const data = await book.destroy({where:{id:id}})
    res.status(200).json({data:data,message:"books is removed"})
}
module.exports = {
    add_books,
    search_books,
    books_list,
    book_edit,
    delete_book

}




