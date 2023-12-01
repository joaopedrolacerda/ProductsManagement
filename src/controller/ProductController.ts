import { MainController } from './index';
import { Request, Response } from 'express';
import ProductDomain from '../domain/index';

export class ProductController extends MainController{
  domain: any;
  constructor() {
    super(ProductDomain);
  }
  async save(req: Request, res:Response){
    try {
      if(!req.body.name) return res.status(400).json({ message:"name é obrigatório!"})
      if(!req.body.price)return  res.status(400).json({ message:"price é obrigatório!"})
      const product = await this.domain.save(req.body);
      
      return res.status(200).json({ message:"produto Cadastrado com sucesso", data: product})
    } catch (error) {
      return res.status(400).json({ message:"Ocorreu um erro ao cadastrar produto"})
    }
  }
  async getByPrice(req: Request, res:Response){
    try {
      const price = req.params.price;
      if(!price || price == 'null' || price == undefined){
        return res.status(400).json({ message:"Informe o valor esperado"})
      }
      const productPrice = req.params.price;

      const product = await this.domain.getByPrice(productPrice);
      return res.status(200).json({ message:"Produtos encontrados com sucesso", data: product})
    } catch (error) {
      return res.status(400).json({ message:"Ocorreu um erro ao buscar os produtos"})
    }
  }
  async getByDescription(req: Request, res:Response){
    try {
      const keyWord = req.params.keyWord;
      console.log("keyword",keyWord)
      if(!keyWord || keyWord == 'null' || keyWord == undefined){
        console.log("aqui ????")
        return res.status(400).json( {message:"Informe a palavra esperada"})
      }
      const productKeyWord = req.params.keyWord;

      const product = await this.domain.getByDescription(productKeyWord);
      return res.status(200).json({ message:"Produtos encontrados com sucesso", data: product})
    } catch (error) {
      return res.status(300).json({ message: "Ocorreu um erro ao Atualizar item" });
    }
  }
}