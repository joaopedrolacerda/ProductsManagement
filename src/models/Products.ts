import mongoose, { Schema,  model,Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
export interface IProduct extends Document {
  _id: string;
  name: string;
  price: number;
}

const ProductSchema: Schema = new Schema({
  _id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: false },
},
{
  versionKey: false, // Set versionKey option to false to remove __v field
});


ProductSchema.statics.findByPriceAbove = function (price: number): Promise<IProduct[]> {
  return this.find({ price: { $gt: price } }).exec();
};

ProductSchema.statics.findByDescriptionKeyWord = function (keyword: string): Promise<IProduct[]> {
  return this.find({ description: { $regex: keyword, $options: 'i' } }).exec();
};
export default model<IProduct>('Product', ProductSchema);