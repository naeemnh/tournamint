import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import cors from 'cors';
import passport from 'passport';
import keys from './config/keys.js';
import path from 'path';

import './lib/passport.js'
import authRoutes from './routes/authRoutes.js'

const app = express();

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {console.log('Connected to MongoDB successfully')}).catch((e) => console.log(e))


app.use(cors());
app.use(express.json());
app.use(
	cookieSession({
		maxAge: 1000 * 60 * 60 * 24 * 30,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening to Port ${PORT}`));