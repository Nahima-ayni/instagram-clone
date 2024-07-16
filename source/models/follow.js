// follow schema

const mongoose = require('mongoose');

const FollowSchema = new mongoose.Schema({
	follower: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	following: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	createdAt: { type: Date, default: Date.now() },
});

module.export = mongoose.model('Follow', FollowSchema);
