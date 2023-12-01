import { ProductDomain } from "../domain/productDomain";
import {Request, Response} from "express"
export class MainController {
  domain:Promise<any>;
  constructor(domain: any){
    this.domain = new ProductDomain();
  }
  async get(req: Request, res:Response){
    try {
      const products = await this.domain.getAll();
      return res.json({status:"200", message:"Registros listados com sucesso", data: products})

    } catch (error) {
      console.log(error)
      return res.json({status:"200", message:"Nenhum registro encontrado",})
    }
  }
  async save(req: Request, res:Response){
    try {
      const product = await this.domain.save(req.body);
      return res.json({status:"200", message:"item Cadastrado com sucesso", data: product})
    } catch (error) {
      console.log(error)
      return res.json({status:"300", message:"Ocorreu um erro ao cadastrar item"})
    }
  }
  async put(req: Request, res:Response){
    try {
      if(!req.params && !req.params.id){
        res.json({status:"300", message:"Informe o id do item"})
      }
      const productId = req.params.id;

      const product = await this.domain.update(productId,req.body);
      return res.json({status:"200", message:"item Cadastrado com sucesso", data: product})
    } catch (error) {
      console.log(error)
      return res.json({status:"300", message:"Ocorreu um erro ao Atualizar item"})
    }
  }
  async delete(req: Request, res:Response){
    try {
      if(!req.params && !req.params.id){
        res.json({status:"300", message:"Informe o id do item"})
      }
      const productId = req.params.id;
      await this.domain.delete(productId);
      return res.json({status:"200", message:"item deletado com sucesso com sucesso"})
    } catch (error) {
      console.log(error);
      return res.json({status:"300", message:"Ocorreu um erro ao deletar item"})
    }
  }
}