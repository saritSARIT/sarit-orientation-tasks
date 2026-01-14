import { connect } from 'mongoose';
const dbURI = 'mongodb://localhost:27017/TweeterDB';

connect(dbURI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
