import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table-directive-component',
  templateUrl: './app.table.directive.view.html'
})
export class TableDirectiveComponent implements OnInit {
  private _DataSource: Array<any>;
  headers: Array<string>;
  @Output()
  rowClick: EventEmitter<any>;
  constructor(){
    this._DataSource = new Array<any>();
    this.headers = new Array<string>();
    this.rowClick =new EventEmitter<any>();
  }

  // this method will be bound to the click event of table row
  // d is the data that is bound to table row
  onrowClick(d: any): void {
      this.rowClick.emit(d);
  }

  ngOnInit(): void {
    // iterate over the 0th record from array read all properties of the
    // record
    for(let p in this._DataSource[0]) {
      this.headers.push(p);
    }
  }

  // DataSource will be used for property binding
  // to accept data from parent
  @Input()
  set DataSource(v: Array<any>) {
    if(v.length > 0) {
        this._DataSource = v;
    } else {
      this._DataSource = new Array<any>();
    }
  }

  get DataSource(): Array<any> {
     return this._DataSource;
  }
}
