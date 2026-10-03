import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  currentLang: 'ar' | 'en' = 'ar';
  currentDir: 'rtl' | 'ltr' = 'rtl';

  constructor() {
    this.initLanguage();
  }

  private initLanguage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('musaned_lang') as 'ar' | 'en' | null;
      if (savedLang === 'ar' || savedLang === 'en') {
        this.setLanguage(savedLang);
        return;
      }
    }
    this.setLanguage('ar');
  }

  setLanguage(lang: 'ar' | 'en'): void {
    this.currentLang = lang;
    this.currentDir = lang === 'ar' ? 'rtl' : 'ltr';

    if (isPlatformBrowser(this.platformId) && this.document && this.document.documentElement) {
      this.document.documentElement.lang = lang;
      this.document.documentElement.dir = this.currentDir;
    }

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('musaned_lang', lang);
    }
  }

  toggleLanguage(): void {
    const nextLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.setLanguage(nextLang);
  }

  isRtl(): boolean {
    return this.currentDir === 'rtl';
  }
}
