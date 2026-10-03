import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { services } from '../../../../shared/data/services';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-preview.component.html',
  styleUrl: './services-preview.component.css'
})
export class ServicesPreviewComponent {
  langService = inject(LanguageService);

  // Three featured service pillars for homepage editorial preview
  featuredServices = [
    {
      ...services[0], // 01 — توريد الأعمال
      num: '01',
      image: 'services/business-supply.jpg'
    },
    {
      ...services[1], // 02 — الوساطة التجارية
      num: '02',
      image: 'services/commercial-brokerage.jpg'
    },
    {
      ...services[5], // 03 — حلول التوريد المخصصة (id: 6 in data)
      num: '03',
      image: 'services/custom-supply-solutions.jpg'
    }
  ];
}
