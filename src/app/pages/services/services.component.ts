import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { services } from '../../shared/data/services';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  langService = inject(LanguageService);
  servicesList = services;
}
