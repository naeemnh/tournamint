import dotenv from 'dotenv';
dotenv.config()

export default {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	clientURL: process.env.CLIENT_URL,
};