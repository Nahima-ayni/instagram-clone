// user schema

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	profileImage: { type: String, default: 'efault.jpg' },
	bio: { type: String, default: '' },
	website: { type: String, default: '' },
	followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
	createAt: {type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);