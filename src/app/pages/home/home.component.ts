import { Component, ElementRef, ViewChild, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAVIGATION_LANG_ENG } from 'src/app/shared/constants/language-eng';
import { GITHUB, LINKEDIN, THEME_TYPES, URL_REDIRECTS } from 'src/app/shared/constants/constants';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { 
    effect(() => {
      // console.log(this.darkTheme());
    })
  }

  public itemsNavigation = signal(NAVIGATION_LANG_ENG);
  public darkTheme = signal<boolean>(false);

  public linkedin = computed(() => LINKEDIN);
  public github = computed(() => GITHUB);

  public setTheme = (): void => this.darkTheme.set(!this.darkTheme());

  public redirectTo(page: string): void {
    window.open(URL_REDIRECTS[page]);
  }
  
}
