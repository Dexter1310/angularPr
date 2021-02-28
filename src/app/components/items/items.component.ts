import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from '../../models/item'



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[]=[];
  @Output()deleteItem:EventEmitter<Item>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.items=[{ide:0,title:'dron',quantity:2,price:200,completed:true},{ide:2,title:'dron',quantity:2,price:200,completed:false}];
  }

  onDelete(idde:Item){//delete element
    this.items = this.items.filter(item => item.ide !== idde.ide);
  }
  onToggle(idde:Item){
    alert(idde.quantity*idde.price)
  }
}
