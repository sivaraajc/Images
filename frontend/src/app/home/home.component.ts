// import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
// import { Router } from '@angular/router';
// import { AdminService } from '../admin.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   admins: any[] = [];
//   selectedAdmin: any;
//   isModalFullscreen = false;


//   constructor(private router: Router, private adminService: AdminService,private el:ElementRef,private renderer: Renderer2) {}

//   ngOnInit(): void {
//     try {
//       this.adminService.getAll().subscribe(
//         (res: any) => {
//           if (Array.isArray(res)) {
//             this.admins = res;
//           } else {
//             console.error('Unexpected response structure:', res);
//           }
//         },
//         (error) => {
//           console.error('Error fetching data:', error);
//         }
//       );
//     } catch (error) {
//       console.error('Unexpected error in ngOnInit:', error);
//     }
//   }

//   admin() {
//     this.router.navigate(['admin']);
//   }

//   getImageSrc(adminId: any): string {
//     if (!adminId) {
//       console.log('Invalid admin ID:', adminId);
//       return ''; // Provide a default image URL or an empty string
//     }
//     return `http://localhost:3000/image/${adminId}`;
//   }

//   onImageLoad(): void {
//     console.log('Image loaded successfully');
//   }
//   openModal(admin: any): void {
//     this.selectedAdmin = admin;
//     this.isModalFullscreen = true;
//     const modal = this.el.nativeElement.querySelector('#productModal');
  
//     if (modal) {
      
//       this.renderer.addClass(modal, 'show');
//       this.renderer.setStyle(modal, 'display', 'block');
//     } else {
//       console.error('Modal element not found.');
//     }
//   }
  

//   closeModal(): void {
//     this.selectedAdmin = null;
//     this.isModalFullscreen = false;
//     const modal = this.el.nativeElement.querySelector('#productModal');
//     this.renderer.removeClass(modal, 'show');
//     this.renderer.setStyle(modal, 'display', 'none');
//   }
// }


import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  admins: any[] = [];
  selectedAdmin: any;
  isModalFullscreen = false;

  constructor(
    private router: Router,
    private adminService: AdminService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    try {
      this.adminService.getAll().subscribe(
        (res: any) => {
          if (Array.isArray(res)) {
            this.admins = res;
          } else {
            console.error('Unexpected response structure:', res);
          }
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    } catch (error) {
      console.error('Unexpected error in ngOnInit:', error);
    }
  }

  admin() {
    this.router.navigate(['admin']);
  }

  getImageSrc(adminId: any): string {
    if (!adminId) {
      console.log('Invalid admin ID:', adminId);
      return ''; // Provide a default image URL or an empty string
    }
    return `http://localhost:3000/image/${adminId}`;
  }

  onImageLoad(): void {
    console.log('Image loaded successfully');
  }

  openModal(admin: any): void {
    this.selectedAdmin = admin;
    this.isModalFullscreen = true;
    const modal = this.el.nativeElement.querySelector('#productModal');

    if (modal) {
      this.renderer.addClass(modal, 'show');
      this.renderer.setStyle(modal, 'display', 'block');
    } else {
      console.error('Modal element not found.');
    }
  }

  closeModal(): void {
    this.selectedAdmin = null;
    this.isModalFullscreen = false;
    const modal = this.el.nativeElement.querySelector('#productModal');

    if (modal) {
      this.renderer.removeClass(modal, 'show');
      this.renderer.setStyle(modal, 'display', 'none');
    } else {
      console.error('Modal element not found.');
    }
  }
}
