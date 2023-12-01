import { MainController } from './index';
import {ProductDomain} from '../domain/index';

export class ProductController extends MainController{
  constructor() {
    super(ProductDomain);
  }

  async getByPrice(req: Request, res:Response){
    try {
      if(!req.params && !req.params.price){
        res.json({status:"300", message:"Informe o valor esperado"})
      }
      const productPrice = req.params.price;

      const product = await this.domain.getByPrice(productPrice);
      return res.json({status:"200", message:"item Cadastrado com sucesso", data: product})
    } catch (error) {
      console.log(error)
      return res.json({status:"300", message:"Ocorreu um erro ao Atualizar item"})
    }
  }
  async getByDescription(req: Request, res:Response){
    try {
      if(!req.params && !req.params.keyWord){
        res.json({status:"300", message:"Informe a palavra esperada"})
      }
      const productKeyWord = req.params.keyWord;
      console.log(productKeyWord)

      const product = await this.domain.getByDescription(productKeyWord);
      return res.json({status:"200", message:"item Cadastrado com sucesso", data: product})
    } catch (error) {
      console.log(error)
      return res.json({status:"300", message:"Ocorreu um erro ao Atualizar item"})
    }
  }
}