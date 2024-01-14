import { Component } from '@angular/core';

@Component({
  selector: 'app-chapter4',
  templateUrl: './chapter4.component.html',
  styleUrls: ['./chapter4.component.css']
})
export class Chapter4Component {


  imageLoaded() {
    // Reference the actual image element
    const actualImage = document.querySelector('.skeleton-image') as HTMLElement;
    const skeletonContainer = document.querySelector('.image-container') as HTMLElement;

    // Set visibility to 'visible'
    actualImage.style.display = 'inline';
    skeletonContainer.classList.remove("skeleton-container");
  }

}
