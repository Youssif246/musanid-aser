import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { sectors } from '../../shared/data/sectors';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [],
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.css'
})
export class SectorsComponent {
  langService = inject(LanguageService);
  sectorsList = sectors;
}
