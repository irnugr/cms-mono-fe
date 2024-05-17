import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // Register SVG icons
    this.matIconRegistry.addSvgIcon(
      'eye',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/solid/eye.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'eye-slash',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/solid/eye-slash.svg')
    );
    // Add more icon registrations as needed
  }
}
