import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';
// import { isAuth, isAdmin, mailgun, payOrderEmailTemplate } from '../utils.js';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();

//Endpoints
//Need to get!!

// orderRouter.get(
//     '/',
//     isAuth,
//     isAdmin,
//     expressAsyncHandler(async(req, res) => {
//         const orders = await Order.find().populate('user', 'name');
//         res.send(orders);
//     })
// );

// orderRouter.post(
//     '/',
//     isAuth,
//     expressAsyncHandler(async(req, res) => {
//         const newOrder = new Order({
//             orderItems: req.body.orderItems.map((x) => ({...x, product: x._id})),
//             shippingAddress: req.body.shippingAddress,

//         })
//     })
// )

export default orderRouter;
