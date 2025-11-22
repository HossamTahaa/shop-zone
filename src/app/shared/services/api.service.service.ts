import { Injectable } from '@angular/core';
import axios from 'axios';
import { GET_ALL_PRODUCT, GET_FILTER_PRODUCTS, GET_ALL_CATEGORIES, GET_PRODUCT_DEATILS_BY_ID } from '../../enums/endpoint';
  @Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor() {}

  async getAllProducts() {
    try {
      const response = await axios.get(GET_ALL_PRODUCT);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
   async getAllCategories() {
    try {
      const response = await axios.get(GET_ALL_CATEGORIES);
      return response.data
    } catch (error) {
      console.error('Error fetching products',error);
      return [];
    } 
  }

  async getProductDetails(id:number){
     try {
      const response = await axios.get(`${GET_PRODUCT_DEATILS_BY_ID}/${id}`);
       return response.data
    } catch (error) {
      console.error('Error featching products deatils', error)
    }
  }
 
  async getFilteredProducts(filters:{ categoryId?: number; price_min?: number; price_max?: number;} = {}) {
    try{
    let productFilterURL = GET_FILTER_PRODUCTS;
    const params = new URLSearchParams;

     if (filters.categoryId && filters.categoryId != 0) {
      params.append('categoryId', filters.categoryId.toString());
     }
   
     if (filters.price_min){
         params.append('price_min', filters.price_min.toString())
     }
       if (filters.price_max){
         params.append('price_max', filters.price_max.toString())
     }
    //  if (filters.title){
    //      params.append('title', filters.title.toString())
    //  }
     if (params.toString()){
           productFilterURL += `?${params.toString()}`;
     }      
     const response = await axios.get(productFilterURL)
     return response.data

     } catch(error) {
      console.error('Filter error:',error);
        return [];
     }

  }  
    

}
 