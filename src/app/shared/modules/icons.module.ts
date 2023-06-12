import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule],
})
export class IconsModule {
  private path: string = '../../assets/icons';
  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry.addSvgIcon(
      'home',
      this.setPath(`${this.path}/home.svg`)
    );
  }
}
