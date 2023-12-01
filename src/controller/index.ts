import { ProductDomain } from "../domain/productDomain";
import {Request, Response} from "express"
export class MainController {
  domain:any;
  constructor(domain: any){
    this.domain = new ProductDomain();
  }
  async get(req: Request, res:Response){
    try {
      const products = await this.domain.getAll();
      return res.status(200).json({ message:"Registros listados com sucesso", data: products})

    } catch (error) {
      return res.status(400).json({ message:"Nenhum registro encontrado",})
    }
  }
  async save(req: Request, res:Response){
    try {
      const product = await this.domain.save(req.body);
      
      return res.status(200).json({ message:"item Cadastrado com sucesso", data: product})
    } catch (error) {
      return res.status(400).json({ message:"Ocorreu um erro ao cadastrar item"})
    }
  }
  async put(req: Request, res:Response){
    try {
      const productId = req.params.id;
      
      if(productId){
        res.status(400).json({ message:"Informe o id do item"})
      }

      const product = await this.domain.update(productId,req.body);
      return res.status(200).json({message:"item Cadastrado com sucesso", data: product})
    } catch (error) {
      return res.status(400).json({ message:"Ocorreu um erro ao Atualizar item"})
    }
  }
  async delete(req: Request, res:Response){
    try {
      const productId = req.params.id;
      if(productId){
        res.json({status:"300", message:"Informe o id do item"})
      }
      await this.domain.delete(productId);
      return res.status(200).json({message:"item deletado com sucesso com sucesso"})
    } catch (error) {
      return res.status(400).json({ message:"Ocorreu um erro ao deletar item"})
    }
  }
}