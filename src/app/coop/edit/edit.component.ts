import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'edit-book',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  @Input() item: Book;
  @Output() edited = new EventEmitter<Book>();

  //サブミット時にedited
  onsubmit() {
    this.edited.emit(this.item);
  }

}
