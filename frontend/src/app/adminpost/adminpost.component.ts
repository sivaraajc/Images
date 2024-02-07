import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpost',
  templateUrl: './adminpost.component.html',
  styleUrls: ['./adminpost.component.css']
})
export class AdminpostComponent {
  product_name: string;
  content: string;
  price: number;
  image: any;
  imageId: string = '';
  imageToShow: any;
  category: string = ''; 

  constructor(private adminService: AdminService, private router: Router) {}

  onFileChange(event: any) {
    this.image = event.target.files[0];
  }

  uploadImage() {
    if (!this.product_name || !this.content || !this.price || !this.image || !this.category) {
      console.error('Missing required fields');
      return;
    }
  
    const formData = new FormData();
    formData.append('product_name', this.product_name);
    formData.append('content', this.content);
    formData.append('price', this.price.toString());
    formData.append('image', this.image);
    formData.append('category', this.category); 
  
    this.adminService.uploadImage(formData).subscribe(
      () => {
        this.router.navigate(['']);
        console.log('Image uploaded successfully');
      },
      (error) => {
        console.error('Error uploading image', error);
      }
    );
  }

  home() {
    this.router.navigate(['']);
  }

  fetchImage() {
    if (!this.imageId) {
      console.error('Image ID is required for fetching');
      return;
    }

    this.adminService.getImageById(this.imageId).subscribe(
      (response) => {
        this.createImageFromBlob(response);
      },
      (error) => {
        console.error('Error fetching image:', error);
      }
    );
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
