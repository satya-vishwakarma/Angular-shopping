import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products :Observable<any[]>;
  allproducts : any;
  constructor(db: AngularFireDatabase) {
  this.products = db.list('/products').valueChanges();  

  this.products.subscribe(products => {
      this.allproducts = products;
      console.log(this.allproducts);
    })

  }
  ngOnInit() {
  }

}
