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
  async handleInput(e) {
    this.value = await this.FileRenderService.getBase64(e.target.files[0]);
  }
  handleButton() {
    this.input.click();
  }

  async handleDrop(e) {
    e.preventDefault();
    this.value = await this.FileRenderService.getBase64(e.dataTransfer.files[0]);
  }
  handleDragover(e) {
    e.preventDefault();
  }

  async handlePaste(e) {
    this.value = await this.FileRenderService.getBase64(e.clipboardData.files[0]);
  }
}
