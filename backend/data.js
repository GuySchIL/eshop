import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345'),
    },
  ],
  products: [
    // Product A
    {
      name: 'productA-name',
      category: 'Pharma',
      description: '',
      price: 100,
      token: 'productA-token',
      brand: 'Teva',
      countInStock: 6,
      rating: 2.5,
      numReviews: 100,
      image: '/images/p1.jpg',
    },
    //product B
    {
      name: 'productB-name',
      category: 'Pharma',
      description: '',
      price: 70,
      token: 'productB-token',
      brand: 'Teva',
      countInStock: 3,
      rating: 3,
      numReviews: 95,
      image: '/images/p2.jpg',
    },
    //product C
    {
      name: 'productC-name',
      category: 'Pharma',
      description: '',
      price: 10,
      token: 'productC-token',
      brand: 'Teva',
      countInStock: 24,
      rating: 4,
      numReviews: 120,
      image: '/images/p3.jpg',
    },
    //product D
    {
      name: 'productD-name',
      category: 'Pharma',
      description: '',
      price: 110,
      token: 'productD-token',
      brand: 'Teva',
      countInStock: 7,
      rating: 4.5,
      numReviews: 80,
      image: '/images/p4.jpg',
    },

    // ProductE
    {
      name: 'productE-name',
      category: 'Pharma',
      description: '',
      price: 100,
      token: 'productE-token',
      brand: 'Teva',
      countInStock: 6,
      rating: 2.5,
      numReviews: 100,
      image: '/images/p1.jpg',
    },
    //product F
    {
      name: 'productF-name',
      category: 'Pharma',
      description: '',
      price: 70,
      token: 'productF-token',
      brand: 'Teva',
      countInStock: 3,
      rating: 3,
      numReviews: 95,
      image: '/images/p2.jpg',
    },
    //product G
    {
      name: 'productG-name',
      category: 'Pharma',
      description: '',
      price: 10,
      token: 'productG-token',
      brand: 'Teva',
      countInStock: 24,
      rating: 4,
      numReviews: 120,
      image: '/images/p3.jpg',
    },
    //product H
    {
      name: 'productH-name',
      category: 'Pharma',
      description: '',
      price: 110,
      token: 'productH-token',
      brand: 'Teva',
      countInStock: 7,
      rating: 4.5,
      numReviews: 80,
      image: '/images/p4.jpg',
    },
  ],
};

export default data;
