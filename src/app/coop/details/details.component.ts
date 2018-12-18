import { Component, Input } from '@angular/core';
import { Book } from '../../book';

@Component({
  selector: 'detail-book',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  
  //値を保持するためのプライベート変数を準備
  private _item: Book;

  //プライベート変数に値を設定するためのセッター
  @Input()
  set item(_item: Book) {
    this._item = _item;
  }

  //プライベート変数に値を設定するためのゲッター
  get item() {
    return this._item;
  }

}