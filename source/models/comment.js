// comment schema

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
	text: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

module.export = mongoose.model('Comment', CommentSchema);