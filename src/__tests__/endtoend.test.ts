// product.test.ts
import request from 'supertest';
import {Request, Response} from 'express';
import { ProductController } from '../controller/ProductController';
import productsRoute from '../routes';
const productController = new ProductController();

import app from '..';
// Mount your route
app.use('/products', productsRoute);

describe('Test end to end', () => {
  describe("/", () => {
    it('should return a list of products', async () => {
      const response: any = await request(app).get('/products');
      
      expect(response.status).toBe(200);
      expect(response.body.message).toEqual('Registros listados com sucesso');
      expect(Array.isArray(response.body.data)).toBe(true);
    });
  });
  describe("/", () => {
    it('should save a product', async () => {
      const response = await request(app)
        .post('/products')
        .send({
          name: 'first',
          price: 50,
          description: "muito legal"
        });
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'produto Cadastrado com sucesso');
      expect(response.body).toHaveProperty('data');
    });
    it('should return error on save a product', async () => {
      const response = await request(app)
        .post('/products')
        .send({
          price: 100,
        });
  
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'name é obrigatório!');
    });
    it('should return error on save a product', async () => {
      const response = await request(app)
        .post('/products')
        .send({
          name: 'first',
        });
  
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'price é obrigatório!');
    });

    it('should return at least 1 price specific', async () => {
      const param = 40
      const response = await request(app).get(`/products/priceAbove/${param}`);

      expect(response.statusCode).toBe(200);
      expect(response.body.message).toContain( 'Produtos encontrados com sucesso');
      expect(response.body.data[0].price).toBeGreaterThan(50);
    });
    it('should return error on price', async () => {
      const param = null
      const response = await request(app).get(`/products/priceAbove/${param}`);

      expect(response.statusCode).toBe(400);
      expect(response.body.message).toContain( 'Informe o valor esperado');
    });
    it('should return item by description', async () => {
      const param = "muito legal"
      const response = await request(app).get(`/products/specificDescription/${param}`);

      expect(response.statusCode).toBe(200);
      expect(response.body.message).toContain('Produtos encontrados com sucesso');
      expect(response.body.data[0].description).toEqual(param);
    });
    it('should return error on find by description ', async () => {
      const paramNull = null
      const response = await request(app).get(`/products/specificDescription/${paramNull}`);

      expect(response.statusCode).toBe(400);
      expect(response.body.message).toContain('Informe a palavra esperada');
    });
    it('should update some product', async () => {
      const response = await request(app).get(`/products`);
      const randomProduc = response.body.data[Math.floor(Math.random()*response.body.data.length)];
      const update = await request(app).put(`/products/${randomProduc._id}`).send({name: "brusao",
      price: 700})

      expect(update.statusCode).toBe(200);
      expect(update.body.message).toContain('item atualizado com sucesso');
    });
    it('should return error', async () => {
      const paramNull = null
      const response = await request(app).get(`/products`);
   
      const update = await request(app).put(`/products/${paramNull}`).send({name: "brusao",
      price: 700})

      expect(update.statusCode).toBe(400);
      expect(update.body.message).toContain('Informe o id do item');
    });
    it('should delete item', async () => {
      
      const response = await request(app).get(`/products`);
      const randomProduc = response.body.data[Math.floor(Math.random()*response.body.data.length)];
      const del = await request(app).delete(`/products/${randomProduc._id}`)
  
      expect(del.statusCode).toBe(200);
      expect(del.body.message).toContain('item deletado com sucesso com sucesso');
    });
    it('should return error hen delete item item', async () => {
      const paramNull = null
      
      const del = await request(app).delete(`/products/${paramNull}`)
  
      expect(del.statusCode).toBe(400);
      expect(del.body.message).toContain('Informe o id do item');
    });
  });
});