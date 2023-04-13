import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
	{
		transactionType: {
			type: String,
			required: true
		},
		status: {
			type: String
		},
		passengerId: {
			type: String,
			required: true
		},
		amount: {
			type: Number,
			required: true
		},
		processed: {
			type: Boolean,
			default: false
		},
		initRef: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const transactionModel = mongoose.model('transactions', transactionSchema);

export default transactionModel;
