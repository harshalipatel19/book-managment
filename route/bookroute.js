
const bookctrl = require('../controller/bookscontroller.js')
const router = require('express').Router()

router.post('/add_book',bookctrl.add_books)
router.get('/search_book/:id',bookctrl.search_books)
router.get('/search_book',bookctrl.books_list)
router.put('/update_book/:id',bookctrl.book_edit)
router.delete('/delete_book/:id',bookctrl.delete_book)


module.exports = router