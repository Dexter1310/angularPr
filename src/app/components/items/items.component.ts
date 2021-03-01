import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from '../../models/item'



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[]=[];
  total:number=0;
  @Output()deleteItem:EventEmitter<Item>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.items=[{ide:0,title:'dron',quantity:2,price:200,completed:true},{ide:2,title:'dron',quantity:2,price:300,completed:false},{ide:3,title:'dron',quantity:3,price:100,completed:false}];
  }

  onDelete(idde:Item){//delete element
    this.items = this.items.filter(item => item.ide !== idde.ide);
    alert(this.getTotal())

  }
  onToggle(idde:Item){
    idde.completed=!idde.completed;
  }
  getTotal(){
    return this.items.filter(item=>!item.completed)
     .map(item=>item.quantity*item.price);

  }
}
