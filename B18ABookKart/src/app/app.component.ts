-// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my-app';
//   displayedColumns: string[] = ['position', 'name', 'weight'];
//   dataSource = ELEMENT_DATA;
// }


// export interface PeriodicElement {
//   name: string;
//   position: string;
//   weight: string;
//   // symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 'HP3', name: '4', weight: '₹852.00'},
//   // {position: '2', name: 'Helium', weight: '4.0026'},
//   // {position: '3', name: 'Lithium', weight: '6.941'},
//   // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

// /**

//  */
// // @Component({
// //   selector: 'table-basic-example',
// //   styleUrls: ['table-basic-example.css'],
// //   templateUrl: 'table-basic-example.html',
// // })
// // export class TableBasicExample {

// // }



import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Example';
  products: any = [];


  // Shrinika = true


  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }
}








