import ProductModel from '../models/Products';

export class ProductDomain {
  private model;
  constructor() {
    this.model = ProductModel
  }
  async getAll(){
    return this.model.find();
  }
  async getById(id: string) {
    return this.model.findById(id);
  }
  async getByPrice(id: string) {
    //@ts-ignore

    return this.model.findByPriceAbove(id);
  }
  async getByDescription(keyWord:string){
    //@ts-ignore
    return this.model.findByDescriptionKeyWord(keyWord);
  }
  async save(data:any) {
    return this.model.create(data);
  }
  async update(id: string,data:any) {
    return this.model.findByIdAndUpdate(id,data);
  }
  async delete(id:any) {
    return this.model.findByIdAndDelete(id);
  }
}