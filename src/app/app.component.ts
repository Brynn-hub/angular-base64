import { Component } from '@angular/core';
import { FileRenderService } from './file-render.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private FileRenderService: FileRenderService) { }

  input:HTMLElement;
  value:String;

  ngOnInit() {
    this.input = document.querySelector('input');
  }

  handleButton() {
    this.input.click();
  }

  setImgSrc(value: string) {
    this.value = value;
  }
}
