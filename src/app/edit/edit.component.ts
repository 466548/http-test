import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'edit-book',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() item: Book;
  @Onput() edited =new EventEmitter<Book>();
  

  ngOnInit() {
  }

}
