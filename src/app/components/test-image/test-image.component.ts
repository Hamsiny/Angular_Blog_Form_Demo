import { Component, OnInit } from '@angular/core';
import {NgxImageCompressService} from "ngx-image-compress";

@Component({
  selector: 'app-test-image',
  templateUrl: './test-image.component.html',
  styleUrls: ['./test-image.component.css']
})
export class TestImageComponent implements OnInit {

  imgResultBeforeCompression: string = "";
  imgResultAfterCompression: string = "";
  
  constructor(private imageCompress: NgxImageCompressService) { }

  ngOnInit(): void {
  }

  compressFile() {
    this.imageCompress.uploadFile().then(
      ({image, orientation}) => {

        this.imgResultBeforeCompression = image;
        console.log("Size in bytes of the uploaded image was:", this.imageCompress.byteCount(image));

        this.imageCompress
          .compressFile(image, orientation, 50, 50) // 50% ratio, 50% quality
          .then(
            (compressedImage) => {
              this.imgResultAfterCompression = compressedImage;
              console.log("Size in bytes after compression is now:", this.imageCompress.byteCount(compressedImage));
            }
          );
      }
    );
  }

}
