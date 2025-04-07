import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

//(pdfMake as any).vfs = pdfFonts.vfs;
@Component({
  selector: 'app-app-form-floors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-form-floors.component.html',
  styleUrl: './app-form-floors.component.css',
})
export class AppFormFloorsComponent {
  pdfSrc: string | ArrayBuffer | null = null;
  constructor() {
    (window as any).pdfMake.vfs = pdfFonts.vfs;
  }
  generatePdf(action: 'download' | 'open' = 'download'): void {
    const documentDefinition: TDocumentDefinitions = {
      compress: true,
      pageSize: 'A4',
      pageMargins: [40, 40, 40, 40] as [number, number, number, number],

      header: (currentPage, pageCount) => {
        return {
          text: `Page ${currentPage} of ${pageCount}`,
          alignment: 'right',
          margin: [0, 20, 40, 0],
          fontSize: 8,
        };
      },

      content: [
        
      ],

      styles: {
        title: {
          fontSize: 12,
          bold: true,
        },
        paragraph: {
          fontSize: 11,
          lineHeight: 1.5,
        },
        signature: {
          fontSize: 11,
          bold: false,
          alignment: 'left',
        },
      },
    };

    // Generate PDF
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);

    // Based on action, either download or open the PDF
    if (action === 'download') {
      pdfDocGenerator.download('application_form.pdf');
    } else {
      // For preview in the component
      pdfDocGenerator.getBlob((blob) => {
        // Create a URL for the blob
        const url = URL.createObjectURL(blob);
        this.pdfSrc = url;
      });
    }
  }
}
