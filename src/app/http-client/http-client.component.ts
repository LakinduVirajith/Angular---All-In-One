import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../services/http.service';
import { ProductData } from '../models/ProductData';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit{
  isPageLoading: boolean = false;
  productData: ProductData[] = [];

  constructor(private httpService: HTTPService){ }

  ngOnInit(): void {
    this.fetchPostData();
  }

  /* GET ALL PRODUCTS */
  fetchPostData(){
    this.isPageLoading = true;
    this.httpService.getAllData().subscribe({
      next: (response: any) => {
          if(response.status == 200) this.fetchResult(response.result);
          else this.fetchError(response);
      },error: (error) => {
        console.log(error.message);
        this.isPageLoading = true;
      },complete: () => {
        this.isPageLoading = true;
      },
    })
  }

  fetchResult(result: ProductData[]){
    console.log(result);
    this.productData = result;
  }

  fetchError(error: any){
    console.log(error);
  }
}
