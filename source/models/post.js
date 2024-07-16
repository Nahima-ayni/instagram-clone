// post schema

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.objectId, ref: 'User', required: true },
	image: { type: String, required: true },
	caption: { type: String, default: ''},
	likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
	createdAt: { type: Date, default: Date.now() },
});

module.export = mongoose.model('Post', PostSchema);
