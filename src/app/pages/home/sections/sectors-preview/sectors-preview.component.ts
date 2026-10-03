import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { sectors } from '../../../../shared/data/sectors';

@Component({
  selector: 'app-sectors-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sectors-preview.component.html',
  styleUrl: './sectors-preview.component.css'
})
export class SectorsPreviewComponent {
  langService = inject(LanguageService);

  // Dominant Primary Sector Block (01 — الشركات والمؤسسات)
  primarySector = {
    ...sectors[0],
    num: '01',
    image: 'sectors/companies-organizations.jpg'
  };

  // Secondary Stacked Sectors (02 — المطاعم والمقاهي & 03 — المشاريع والأعمال)
  secondarySectors = [
    {
      ...sectors[1],
      num: '02',
      image: 'sectors/restaurants-cafes.jpg'
    },
    {
      ...sectors[4], // id: 5 (المشاريع والأعمال)
      num: '03',
      image: 'sectors/projects-businesses.jpg'
    }
  ];
}
