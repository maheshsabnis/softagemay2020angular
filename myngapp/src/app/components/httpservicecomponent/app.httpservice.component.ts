import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/app.http.service';
import { Product } from '../../models/app.product.model';

@Component({
  selector: 'app-httpservice-component',
  template:`
     <input type="button" value="Get" (click)="loadData()" class="btn btn-warning"/>
     <br/>
     <input type="button" value="Post" (click)="save()" class="btn btn-success"/>
     <br/>
  `
})
export class HttpServiceComponent implements OnInit {
  // inject the HttpService as Constructor Dependency
  constructor(private serv: HttpService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  // read all products, by subscribing to observable
  // returned from the HttpService class methods
  loadData(): void {
    this.serv.getData().subscribe((resp) => {
        console.log(`Received Data ${JSON.stringify(resp)}`);
    }, (error) => {
       console.log(`Error Occured ${error}`);
    });
  }

  save(): void {
    const prd: Product = new Product(
      0, 'Prd2002', 'Parle-G', 'Parle',
       'Food', 'Energy Food', 20
    );
    this.serv.postData(prd).subscribe((resp) => {
      console.log(`Received Data ${JSON.stringify(resp)}`);
    }, (error) => {
     console.log(`Error Occured ${error}`);
    });
  }
}
