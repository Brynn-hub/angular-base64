import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FileRenderService } from '../file-render.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {

  @Output() setImgSrc = new EventEmitter<string>();
  @Output() handleButtonProps = new EventEmitter<any>();

  constructor(private FileRenderService: FileRenderService) { }

  ngOnInit(): void {
  }

  async handleInput(e: any) {
    this.setImgSrc.emit(await this.FileRenderService.getBase64(e.target.files[0]));
  }
  handleButton() {
    this.handleButtonProps.emit();
  }

  async handleDrop(e: any) {
    e.preventDefault();
    this.setImgSrc.emit(await this.FileRenderService.getBase64(e.dataTransfer.files[0]));
  }
  handleDragover(e: any) {
    e.preventDefault();
  }

  async handlePaste(e: any) {
    this.setImgSrc.emit(await this.FileRenderService.getBase64(e.clipboardData.files[0]));
  }
}
