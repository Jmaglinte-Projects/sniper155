import mongoose from 'mongoose';

const receiptSchema = mongoose.Schema({
    receipt_note: { type: String, required:  true },
    receipt_image: { type: String, required:  true },
    receipt_date: { type: Date, required:  true },
    created_at: {
        type: Date,
        default: new Date(),
    },
	updated_at: {
        type: Date,
        default: new Date(),
    },
	receipt_creator: { type: mongoose.SchemaTypes.ObjectId, 
		ref: "User"
	},
})

var receipt = mongoose.model('receipt', receiptSchema);

export default receipt;