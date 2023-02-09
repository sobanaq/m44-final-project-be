const {Router} = require("express");

const {addBooks, addWishBooks, listBooks, deleteBooks, deleteWishBooks} = require("./bookControllers");

const bookRouter = Router();

bookRouter.post("/addBook", addBooks);
bookRouter.post("/addWishBook", addWishBooks);
bookRouter.get("/listBooks", listBooks);
//bookRouter.delete("/deleteBook", deleteBooks);//delete will not sent request but delete it the controller will do delete
bookRouter.post("/deleteBook", deleteBooks);
//bookRouter.delete("/deleteWishBook", deleteWishBooks)
bookRouter.post("/deleteWishBook", deleteWishBooks);
// bookRouter.put("/updateDetails", updateDetails);

module.exports = bookRouter;

