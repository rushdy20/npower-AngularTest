import { Injectable } from '@angular/core';
import { ModalData } from '../models/modalData';
import { MockedData } from 'src/environments/mocked-data';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private mockedData: MockedData) { }
  getAllProducts(): ModalData[] {
    return this.mockedData.getproducts;
  }
}
