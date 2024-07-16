// like schema

const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
	createdAt: { type: Date, default: Date.now },
});

module.export = mongoose.model('Like', LikeSchema);
