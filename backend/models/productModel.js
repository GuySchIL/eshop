import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, required: true },
    token: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },

  { timesamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
