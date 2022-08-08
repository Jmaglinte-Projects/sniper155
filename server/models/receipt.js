import mongoose from 'mongoose';

const receiptSchema = mongoose.Schema({
    receipt_note: String,
    receipt_creator_id: String,
    receipt_image: String,
    receipt_date: Date,
    created_at: {
        type: Date,
        default: new Date(),
    },
	updated_at: {
        type: Date,
        default: new Date(),
    },
})

var receipt = mongoose.model('receipt', receiptSchema);

export default receipt;