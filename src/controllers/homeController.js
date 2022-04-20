import db from '../models/index'
import CRUDservice from "../services/CRUDservice"


let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.error(error)
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('CRUD.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body)
    console.log(message)
    return res.send('ok');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUsers();
    // console.log("...........................")
    // console.log(data)
    // console.log("...........................")
    return res.render('displayCRUD', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDservice.getUserInfoById(userId);
        // check user data not found
        return res.render('editCRUD.ejs', { user: userData });
    } else {
        return res.send('user not found');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body
    // await CRUDservice.updateUserData(data);
    let allUsers = await CRUDservice.updateUserData(data)
    return res.render('displayCRUD', {
        dataTable: allUsers
    })
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDservice.deleteUserById(id);
        return res.send("delete user succeed")
    }
    else {
        return res.send("user not found");
    }
    // return res.render('displayCRUD', {
    //     dataTable: allUsers
    // })
}

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}
