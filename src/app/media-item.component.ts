import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  // this is a PROPERTY of the comp, which can be fed data from other components
  @Input() mediaItem;
  // this thing can be wired up to emit events at certain times,
  // and have other components subscribe to it (i.e. do something w/ the data in the Event obj)
  @Output() delete = new EventEmitter();

  onDelete() {
    console.log('deleted');
    // return data telling us which media item that the user wants to delete
    this.delete.emit(this.mediaItem);
  }
}
