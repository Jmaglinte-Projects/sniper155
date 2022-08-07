import mongoose from 'mongoose';

const receiptSchema = mongoose.Schema({
    note: String,
    creator: String,
    selectedFile: String,
    date: Date,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var receipt = mongoose.model('receipt', receiptSchema);

export default receipt;