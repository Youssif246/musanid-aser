import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent {
  langService = inject(LanguageService);

  processSteps = [
    {
      step: '01',
      stageAr: 'المرحلة الأولى',
      stageEn: 'STAGE 01 · SPECIFICATION',
      icon: 'fa-solid fa-file-invoice',
      titleAr: 'إرسال الطلب والمواصفات',
      titleEn: 'Send Your Request & Specs',
      descAr: 'تحديد نوع المواد، الكميات، والجداول الزمنية المطلوبة بدقة عبر نموذج طلب التسعيرة.',
      descEn: 'Specify material specs, volume, and required timelines via the quotation form.'
    },
    {
      step: '02',
      stageAr: 'المرحلة الثانية',
      stageEn: 'STAGE 02 · TECHNICAL AUDIT',
      icon: 'fa-solid fa-clipboard-check',
      titleAr: 'المراجعة والدراسة الفنية',
      titleEn: 'Technical Review & Analysis',
      descAr: 'فحص المواصفات ومطابقتها للمعايير المعتمدة لضمان الجاهزية للطرح.',
      descEn: 'Thorough evaluation ensuring technical clarity and compliance before sourcing.'
    },
    {
      step: '03',
      stageAr: 'المرحلة الثالثة',
      stageEn: 'STAGE 03 · SUPPLIER SOURCING',
      icon: 'fa-solid fa-magnifying-glass-chart',
      titleAr: 'البحث عن الموردين المناسبين',
      titleEn: 'Supplier Sourcing',
      descAr: 'البحث عن الموردين المناسبين لمتطلبات الطلب واستدراج عروض الأسعار التنافسية في السوق.',
      descEn: 'Identifying suitable suppliers matching project requirements and soliciting competitive quotes.'
    },
    {
      step: '04',
      stageAr: 'المرحلة الرابعة',
      stageEn: 'STAGE 04 · QUOTATION MATRIX',
      icon: 'fa-solid fa-table-columns',
      titleAr: 'تقديم جدول المقارنة',
      titleEn: 'Audited Quotation Comparison',
      descAr: 'إعداد تقرير مقارن يوضح أفضل الخيارات المالية والفنية المتاحة للمنشأة.',
      descEn: 'Delivering audited comparison matrices highlighting optimal commercial value.'
    },
    {
      step: '05',
      stageAr: 'المرحلة الخامسة',
      stageEn: 'STAGE 05 · CONTRACT & APPROVAL',
      icon: 'fa-solid fa-file-signature',
      titleAr: 'اعتماد أمر الشراء والتعاقد',
      titleEn: 'Order Approval & Contracting',
      descAr: 'اختيار العرض الأنسب وإتمام الإجراءات التعاقدية والشروط بضمانات معتمدة.',
      descEn: 'Finalizing supplier selection and commercial agreements under secure terms.'
    },
    {
      step: '06',
      stageAr: 'المرحلة السادسة',
      stageEn: 'STAGE 06 · DELIVERY & HANDOVER',
      icon: 'fa-solid fa-truck-ramp-box',
      titleAr: 'التنسيق والمتابعة حتى التسليم',
      titleEn: 'Execution & Final Delivery',
      descAr: 'إشراف ومتابعة دقيقة لمراحل الشحن والتسليم والتأكد من مطابقة المواد.',
      descEn: 'Diligent shipment tracking and handover verification through final delivery.'
    }
  ];
}
