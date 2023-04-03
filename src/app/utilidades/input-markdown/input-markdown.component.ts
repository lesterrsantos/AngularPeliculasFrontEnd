import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css'],
})
export class InputMarkdownComponent implements OnInit {
  contenidoMarkdown = '';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  inputTextArea(event: any) {
    if ((event.target as HTMLInputElement)?.value) {
      console.log((event.target as HTMLInputElement)?.value);
      this.contenidoMarkdown = (event.target as HTMLInputElement)?.value;
      this.changeMarkdown.emit((event.target as HTMLInputElement)?.value);
    }
  }
}
