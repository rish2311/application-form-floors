import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions, Content } from 'pdfmake/interfaces';

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
        // ============= PAGE 1 START =============
        {
          text: 'Application Date_____________',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'APPLICATION FORM',
          style: 'title',
          alignment: 'center',
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Contents:',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          ul: [
            'Application',
            'Applicant Details',
            'Declaration',
            'Annexure-1: Details of the Applicant',
            'Annexure-2: Details of Independent Residential Floor Applied For',
            'Schedule-1: Key Indicative Terms & Conditions',
            'Schedule-2: Price Details',
            'Schedule-3: Payment Plan',
            'Schedule 4: Proposed Specifications',
            'Schedule 5: Common Areas & Facilities of the Building within the Said Plot',
            'Schedule 6: Floor Plan',
          ],
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Guidelines for filling the Application Form',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          ul: [
            'All information to be filled legibly.',
            'Applicant(s) to sign on all pages of the Application Form. In case of joint applicants, signatures of all the applicants are required.',
            'All documents need to be self-attested by the Applicant(s).',
          ],
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Documents to be submitted along with the Application Form',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          ul: [
            'Copy of PAN Card /Form - 60 duly filled.',
            'Copy of latest Aadhaar Card.',
            'One recent passport size color photograph of each Applicant(s).',
            'In case of an incorporated company, copy of the Memorandum of Association and the Board Resolution authorizing the signatory.',
            'In case of a Partnership Firm, copy of the Partnership Deed, Firm Registration Certificate and a Letter of Authority from the other partners for purchasing the property on behalf of the partnership firm.',
            'In case of a Hindu Undivided Family (HUF), a letter of authority from all other co-partners of the HUF authorizing the Karta to act on behalf of the HUF along with self-certified ID proof.',
            'In case of Non-Resident Indian/ Person of Indian Origin ("NRI/PIO"), a copy of passport of each Applicant who is an NRI/ PIO and payment through their own NRE/ NRO A/c or FCNR A/c.',
            'Photocopy of Photo ID proof issued by Central/ State Authority (if PAN card copy is not supplied).',
            'Address Proof of the applicant, which may be latest Electricity Bill, latest Telephone Bill, Aadhar Card, Voter ID Card or passport, etc.',
          ],
          margin: [0, 0, 0, 20],
        },
        {
          text: '* Incomplete Application Forms shall not be considered and will be liable for rejection at the sole discretion of the Promoter.',
          italics: true,
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Applicant',
          bold: true,
        },
        // ============= PAGE 1 END =============
        // ============= PAGE 2 START =============
        {
          text: 'Application Date _____________',
          margin: [0, 20, 0, 20],
        },
        {
          text: 'APPLICATION FOR ALLOTMENT OF AN INDEPENDENT RESIDENTIAL FLOOR IN TRIDENT HILLS\nSECTOR- 3, 4 & 4A OF PINJORE KALKA URBAN COMPLEX, DISTRICT PANCHKULA',
          style: 'title',
          alignment: 'center',
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        {
          text: 'To,',
          margin: [0, 0, 0, 10],
        },
        {
          text: [
            'Trident Hills Private Limited\n',
            '(Formerly known as Ireo Fiveriver Private Limited)\n',
            'Sector-4, Pinjore Kalka Urban Complex,\n',
            'Pinjore, Panchkula – 134102, Haryana (India)',
          ],
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Dear Sir,',
          margin: [0, 0, 0, 20],
        },
        {
          ol: [
            {
              text: [
                'I/We, the Applicant(s), whose particulars are mentioned below in this Application, understand that ',
                {
                  text: 'Trident Hills Private Limited (CIN:U45200DL2007PTC160318)',
                  bold: true,
                },
                ' (formerly known as ',
                { text: 'Ireo Fiveriver Private Limited', bold: true },
                ') having its registered office at 310, Prakashdeep Building, 7 Tolstoy Marg, New Delhi-110001 (',
                { text: '"Promoter"', bold: true },
                '), has conceived, planned and is in the process of developing and promoting independent residential floors named ',
                { text: '"Windsong Residences"', bold: true, italics: true },
                '. The independent residential floors are registered with HRERA as two separate projects ',
                {
                  text: 'Windsong Residences-1/ Windsong Residences-2',
                  bold: true,
                  italics: true,
                },
                ' falling in ',
                { text: 'Trident Hills', bold: true },
                ', District Panchkula, Haryana in accordance with requisite approvals from competent authority(ies).',
              ],
              margin: [0, 0, 0, 15],
            },
            {
              text: [
                'I/We understand that the Promoter is inviting Applications for allotment and booking of an independent residential floor in the project as specified in ',
                { text: 'Annexure-2', bold: true },
                ' (',
                { text: '"Project"', bold: true },
                ').',
              ],
              margin: [0, 0, 0, 15],
            },
            {
              text: [
                'I/We have also read and understood the key indicative terms and conditions (',
                { text: '"Terms & Conditions"', bold: true },
                '), annexed hereto as ',
                { text: 'Schedule -1', bold: true },
                ', pertaining to the booking of the Floor, which form part of this Application, and I/ We have given my/our consent to the same. I/We understand that these terms and conditions are merely indicative and conveyed herein for the purpose of acquainting me/us with the broad terms and conditions which are required to be fulfilled by me/us.',
              ],
              margin: [0, 0, 0, 15],
            },
            {
              text: 'I/We hereby confirm that I/we have prior knowledge of the Project and have visited the Project site, visited website of Real Estate Regulatory Authority for the Project and hereby confirm that the Project is registered with the Haryana RERA Authority, Panchkula and have also done requisite due diligence with respect to approvals and sanctions including RERA registration pertaining to the Floor/ Project, for which the Promoter has readily provided all information/clarifications as required by me/us, and declare that I /We have satisfied my-self/our-selves with respect to legality, validity and correctness of the same by consulting the lawyer/ architect/consultant of my choice to understand it better. Further, I/we have satisfied my-self/our-selves with regard to integrity, capability for development of the Floor by the Promoter and its ability for timely completion and on time delivery of the Floor.',
              margin: [0, 0, 0, 15],
            },
            {
              text: 'I/We declare that that I/we have fully satisfied myself/ourselves about the right, title and interest of the Promoter in Project, to develop and sell the aforesaid Floor comprised therein and have understood all limitations and obligations in respect of the same after carrying out requisite due diligence &',
              margin: [0, 0, 0, 15],
            },
          ],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 20, 0, 0],
        },
        // ============= PAGE 2 END =============
        // ============= PAGE 3 START =============
        {
          text: '5. inspection of the relevant documents, court orders, decrees, etc. kept at the site office of the Project & available to me/us for inspection on demand.',
          margin: [0, 0, 0, 15],
        },
        {
          text: "6. As such, I/We acknowledge and declare that I/we have not relied upon nor been influenced by any sales plans, sale brochures, advertisements, representations, architects' plans, or any other information or data provided by the Promoter or any person representing the Promoter, all of which I/ we understand is tentative and subject to change, except as specifically represented in this Application, and I/we have relied solely on my/our own judgment in deciding to make the Application for allotment of the Floor.",
          margin: [0, 0, 0, 15],
        },
        {
          text: '7. Accordingly, I/we, the undersigned Applicants(s), after having read and understood in my vernacular language (after translation) also and agreed with the Terms & Conditions, do hereby choose to invest and apply for allotment and booking of the Floor as per agreed Payment Plan.',
          margin: [0, 0, 0, 15],
        },
        {
          text: '8. I/We understand that this Application does not constitute any offer or definitive allotment or any Floor Buyer Agreement I/we, the Applicant(s) do not become entitled to allotment of the Floor, notwithstanding the fact, that the Promoter may have issued a receipt(s) in acknowledgement of the money tendered with this Application.',
          margin: [0, 0, 0, 15],
        },
        {
          text: '9. I/ We agree that this Application shall become definitive only after the execution of the Floor Buyer Agreement and other documents. In the event the Promoter accepts this Application to allot a Floor to me/us, I/we agree to execute all documents/agreements as required and undertake to strictly adhere to all the terms and conditions stipulated by the Promoter from time to time and pay all installments/ monies/dues and charges as applicable or as demanded by the Promoter. I/We also understand and agree that the actual terms and conditions contained in the Floor Buyer Agreement shall be detailed and comprehensive and shall deal with many other issues besides those mentioned in Schedule- 1 hereto. I/We further understand that the terms and conditions as given in Schedule- 1 are tentative and subject to modification/change in the Floor Buyer Agreement, and which shall then prevail over Schedule - 1. It is also made clear to me/us that in case of any conflict between the Application Form and the Floor Buyer Agreement, the terms of the Floor Buyer Agreement shall supersede this Application Form.',
          margin: [0, 0, 0, 15],
        },
        {
          text: '10. I/We agree and acknowledge that merely forwarding the Floor Buyer Agreement to the Applicant by the Promoter does not create a binding obligation on the part of the Promoter until, firstly, the Applicant signs and delivers the Floor Buyer Agreement with all the annexures/ schedules along with the payments due as stipulated in the Payment Plan within 30 (thirty) days from the date of receipt of the Floor Buyer Agreement by the Applicant. Secondly, the Applicant and the Promoter have an obligation to execute the Agreement and register the said Agreement as per the provision of the relevant Act of the State of Haryana. For the aforesaid purposes, the Applicant undertakes to come for registration of the Floor Buyer Agreement as per applicable law and as and when called upon by the Promoter at the office of the concerned sub-registrar.',
          margin: [0, 0, 0, 15],
        },
        {
          text: 'Further, I/We agree and acknowledge that if I/ we fail to execute and deliver to the Promoter the Floor Buyer Agreement within 30 (thirty) days from the date of receipt of the Floor Buyer Agreement and execute and register the Floor Buyer Agreement, as per intimation by the Promoter, then the Promoter shall be entitled to serve a notice for rectifying the default, which if not rectified within 60 (sixty) days',
          margin: [0, 0, 0, 15],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 20, 0, 0],
        },
        // ============= PAGE 3 END =============
        // ============= PAGE 4 START =============
        {
          text: 'from the date of receipt of the notice , the Promoter may without prejudice to any other rights and entitlements at its sole discretion, including entitlement to charge interest (as stipulated under the RERA Act, 2016) with effect from expiry of 30 (thirty) days from the date of receipt of the Floor Buyer Agreement by the Applicant(s), cancel the Application Form/ Allotment Letter/ booking and forfeit the Booking Amount plus interest (as aforesaid) on delayed payments along with all the charges paid towards taxes, levies, govt. dues, interest, penalty, cess, duties to the concerned department/ authority in respect of the said Floor as on the date of cancellation, from the amounts paid and the balance amount, if any, shall be returned without any interest or compensation whatsoever.',
          margin: [0, 0, 0, 15],
        },
        {
          text: '11. Further, I/We understand that this Application cannot be revoked by me/us and in the event I/we withdraw our instant Application for allotment of the Floor or in case I/we do not accept the allotment of the Floor for any reason whatsoever on my/our instant Application or fail to abide by any terms and conditions of this Application or contained elsewhere or otherwise prescribed by the Promoter, then , the Promoter may, without prejudice to any other rights and entitlements at its sole discretion, including entitlement to charge interest, cancel the Application Form/ Allotment Letter (if any issued)/ booking and forfeit the Booking Amount (which includes Application Money) plus interest on delayed payments along with all the charges paid towards taxes, levies, govt. dues, interest, penalty, cess, duties to the concerned department/ authority in respect of the said Floor as on the date of cancellation from the amounts paid by the me/us and I/we shall be left with no right, interest or claim on the Floor applied for or otherwise on the Promoter in any other manner whatsoever.',
          margin: [0, 0, 0, 15],
        },
        {
          text: '12. I/ We agree and acknowledge that the Promoter may issue demand letters to the Applicant for making payments, however the Promoter shall not be obliged to do the same and I/we, the Applicant(s) further undertake and confirm that I/we shall pay to the Promoter the Total Price of the Floor in accordance with the Payment Plan and applicable timelines.',
          margin: [0, 0, 0, 15],
        },
        {
          text: [
            '13. I/We understand that Total Price for the Floor is specified in ',
            { text: 'Schedule-2', bold: true },
            '.',
          ],
          margin: [0, 0, 0, 15],
        },
        {
          text: '14. I/We agree that this Application and subsequent allotment of the Floor is at the sole discretion of the Promoter and in case the Floor is not allotted to me/us for any reason whatsoever, I /We am/ are not entitled to raise any objection/ claim/ seek damages/ raise dispute/ challenge the same in a court of law and the amount deposited herein shall be refunded to me/us without any interest within 30 (Thirty) days from the date of notice regarding rejection of this Application.',
          margin: [0, 0, 0, 15],
        },
        {
          text: '15. I/We unequivocally undertake and declare that till the execution of the Floor Buyer Agreement, I/ we shall continue to remain bound by the terms and conditions of this Application.',
          margin: [0, 0, 0, 30],
        },
        {
          text: 'Yours faithfully,',
          margin: [0, 0, 0, 30],
        },
        {
          columns: [
            {
              width: '45%',
              stack: [
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 180,
                      h: 2,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Sole/ First Applicant',
                },
              ],
              margin: [0, 0, 10, 0],
            },
            {
              width: '45%',
              stack: [
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 180,
                      h: 2,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Second Applicant (if any)',
                },
              ],
            },
          ],
          margin: [0, 0, 0, 30],
        },
        {
          stack: [
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 180,
                  h: 2,
                  color: 'yellow',
                },
              ],
              margin: [0, 0, 0, 5],
            },
          ],
          margin: [0, 0, 0, 30],
        },
        {
          text: 'Applicant',
          bold: true,
        },
        // ============= PAGE 4 END =============
        // ============= PAGE 5 START =============
        {
          text: 'Signature of the Third Applicant (if any)',
          margin: [0, 0, 0, 30],
        },
        {
          text: 'ANNEXURE-1',
          style: 'title',
          alignment: 'center',
          fontSize: 14,
          bold: true,
          margin: [0, 0, 0, 15],
        },
        {
          text: 'Applicant(s) Details',
          alignment: 'center',
          bold: true,
          margin: [0, 0, 0, 15],
        },
        {
          text: 'My/Our particulars are given below for your reference and record:',
          margin: [0, 0, 0, 15],
        },
        {
          columns: [
            {
              width: '70%',
              stack: [
                {
                  text: '1.    Sole/First Applicant: Mr./Mrs./Ms./M/s. ____________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      S/W/D of: ____________________________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Present Residential Address: ___________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 400,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 400,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      City: ________________ State: _________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Country: __________________________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Telephone No. ___________________ Fax No. ___________   Email: ___________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Mob. No.: _______________PAN No.: _______________    Aadhaar No. ______________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      DOB:_________________ Spouse DOB:___________  Anniversary: ___________  Nationality:______',
                  margin: [0, 0, 0, 5],
                },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 400,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Profession ______________ Status (Resident / NRI / POI): _________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Passport No.: ________________________ Permanent Residential Address:____________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 400,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Telephone No. _____________________Designation: ______________________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Company Name:______________________________ CIN No.___ in case of company_____________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Address: _____________________________________________________________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Telephone No.: ___________________ Fax No.: ___________ Email: ___________________________',
                  margin: [0, 0, 0, 20],
                },
              ],
            },
            {
              width: '30%',
              stack: [
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 10,
                      y: 0,
                      w: 120,
                      h: 120,
                      lineWidth: 1,
                      lineColor: 'black',
                    },
                  ],
                },
                {
                  text: 'Photo',
                  alignment: 'center',
                  margin: [0, 5, 0, 0],
                },
              ],
              margin: [20, 0, 0, 0],
            },
          ],
        },
        {
          columns: [
            {
              width: '70%',
              stack: [
                {
                  text: '2.    Co/Second Applicant: Mr./Mrs./Ms./M/s. ___________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      S/W/D of: ____________________________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Present Residential Address: ___________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 400,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 400,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      City: ________________ State: _________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Country: __________________________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Telephone No. ___________________ Fax No. ___________   Email: ___________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Mob. No.: _______________PAN No.: _______________    Aadhaar No. ______________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      DOB: _________________ Spouse DOB: ___________  Anniversary: ___________  Nationality:______',
                  margin: [0, 0, 0, 5],
                },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 400,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Profession ______________ Status (Resident / NRI / POI): _________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Passport No.: ________________________ Permanent Residential Address:____________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 400,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Telephone No._____________________Designation: ______________________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Company Name: ______________________________ CIN No._In Case of Company______________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Address: _____________________________________________________________________________',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: '      Telephone No.: ___________________ Fax No.: ___________ Email: ___________________________',
                  margin: [0, 0, 0, 20],
                },
              ],
            },
            {
              width: '30%',
              stack: [
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 10,
                      y: 0,
                      w: 120,
                      h: 120,
                      lineWidth: 1,
                      lineColor: 'black',
                    },
                  ],
                },
                {
                  text: 'Photo',
                  alignment: 'center',
                  margin: [0, 5, 0, 0],
                },
              ],
              margin: [20, 0, 0, 0],
            },
          ],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 20, 0, 0],
        },
        // ============= PAGE 5 END =============
        // ============= PAGE 6 START =============
        {
          text: '3. Co/Third Applicant: Mr./Mrs./Ms./M/s. ______',
          margin: [0, 20, 0, 5],
        },
        {
          text: '   S/W/D of: ______',
          margin: [0, 0, 0, 5],
        },
        {
          text: '   Present Residential Address: ______',
          margin: [0, 0, 0, 5],
        },
        {
          columns: [
            {
              text: 'City: ______',
              width: '33%',
            },
            {
              text: 'State: ______',
              width: '33%',
            },
            {
              text: 'Country: ______',
              width: '33%',
            },
          ],
          margin: [15, 0, 0, 5],
        },
        {
          columns: [
            {
              text: 'Telephone No. ______',
              width: '33%',
            },
            {
              text: 'Fax No. ______',
              width: '33%',
            },
            {
              text: 'Email: ______',
              width: '33%',
            },
          ],
          margin: [15, 0, 0, 5],
        },
        {
          columns: [
            {
              text: 'Mob. No.: ______',
              width: '50%',
            },
            {
              text: 'PAN No.: ______',
              width: '50%',
            },
          ],
          margin: [15, 0, 0, 5],
        },
        {
          columns: [
            {
              text: 'DOB: ______',
              width: '33%',
            },
            {
              text: 'Spouse DOB: ______',
              width: '33%',
            },
            {
              text: 'Anniversary: ______',
              width: '33%',
            },
          ],
          margin: [15, 0, 0, 5],
        },
        {
          columns: [
            {
              text: 'Nationality: ______',
              width: '50%',
            },
            {
              text: 'Profession ______',
              width: '50%',
            },
          ],
          margin: [15, 0, 0, 5],
        },
        {
          columns: [
            {
              text: 'Status (Resident / NRI / POI): ______',
              width: '50%',
            },
            {
              text: 'Passport No.: ______',
              width: '50%',
            },
          ],
          margin: [15, 0, 0, 5],
        },
        {
          text: '   Permanent Residential Address: ______',
          margin: [0, 0, 0, 5],
        },
        {
          text: '   Telephone No. ______',
          margin: [15, 0, 0, 5],
        },
        {
          columns: [
            {
              text: 'Designation: ______',
              width: '50%',
            },
            {
              text: 'Company Name: ______',
              width: '50%',
            },
          ],
          margin: [15, 0, 0, 5],
        },
        {
          text: '   CIN No. ______ in case of company ______',
          margin: [15, 0, 0, 5],
        },
        {
          text: '   Address: ______',
          margin: [15, 0, 0, 5],
        },
        {
          columns: [
            {
              text: 'Telephone No.: ______',
              width: '33%',
            },
            {
              text: 'Fax No.: ______',
              width: '33%',
            },
            {
              text: 'Email: ______',
              width: '33%',
            },
          ],
          margin: [15, 0, 0, 40],
        },
        // Signature section
        {
          columns: [
            {
              width: '45%',
              stack: [
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 180,
                      h: 2,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Sole/ First Applicant',
                },
              ],
              margin: [0, 0, 10, 0],
            },
            {
              width: '45%',
              stack: [
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 180,
                      h: 2,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Second Applicant (if any)',
                },
              ],
            },
          ],
          margin: [0, 20, 0, 20],
        },
        {
          stack: [
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 180,
                  h: 2,
                  color: 'yellow',
                },
              ],
              margin: [0, 0, 0, 5],
            },
            {
              text: 'Signature of the Third Applicant (if any)',
            },
          ],
          margin: [0, 0, 0, 100],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 6 END =============
        // ============= PAGE 7 START =============
        {
          text: 'ANNEXURE-2',
          style: 'header',
          alignment: 'center',
          margin: [0, 20, 0, 15],
        },
        {
          text: 'Details of independent residential floor applied for',
          style: 'subheader',
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          table: {
            widths: ['40%', '30%', '30%'],
            body: [
              [
                {
                  text: [
                    { text: '*Project Name\n', bold: true },
                    {
                      text: '(*Please Tick whichever is applicable)',
                      italics: true,
                    },
                  ],
                },
                'Windsong Residences – 1',
                {
                  text: '(    )',
                  alignment: 'center',
                },
              ],
              [
                '',
                'Windsong Residences – 2',
                {
                  text: '(    )',
                  alignment: 'center',
                },
              ],
              [
                {
                  text: [
                    { text: 'Unit No.:\n', bold: true },
                    { text: '(Independent residential floor)', italics: true },
                  ],
                },
                {
                  text: 'XXXXX',
                  colSpan: 2,
                  alignment: 'center',
                },
                '',
              ],
              [
                { text: 'Floor', bold: true },
                {
                  text: 'XXXXX',
                  colSpan: 2,
                  alignment: 'center',
                },
                '',
              ],
              [
                { text: 'Plot No. ("Said Plot")', bold: true },
                {
                  text: 'XXXXX',
                  colSpan: 2,
                  alignment: 'center',
                },
                '',
              ],
              [
                { text: 'Block No.', bold: true },
                {
                  text: 'XXXXX',
                  colSpan: 2,
                  alignment: 'center',
                },
                '',
              ],
              [
                { text: 'Carpet Area', bold: true },
                {
                  text: 'Square Feet',
                  alignment: 'center',
                },
                {
                  text: 'Square Meters',
                  alignment: 'center',
                },
              ],
              [
                { text: 'Exclusive Right to Use', bold: true },
                {
                  text: 'Parking No(s). X',
                  alignment: 'center',
                },
                {
                  text: 'XXXXX',
                  alignment: 'center',
                },
              ],
              [
                '',
                {
                  text: 'On Terrace\nDeck No. XXXXX',
                  alignment: 'center',
                },
                {
                  columns: [
                    {
                      width: '50%',
                      text: 'Square Feet/',
                    },
                    {
                      width: '50%',
                      text: 'XXXXX',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
              ],
              [
                '',
                '',
                {
                  columns: [
                    {
                      width: '50%',
                      text: 'Square Meters',
                    },
                    {
                      width: '50%',
                      text: 'XXXXX',
                    },
                  ],
                },
              ],
              [
                '',
                {
                  text: 'In the Basement\nStore No. XXXXX',
                  alignment: 'center',
                },
                {
                  columns: [
                    {
                      width: '50%',
                      text: 'Square Feet/',
                    },
                    {
                      width: '50%',
                      text: 'XXXXX',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
              ],
              [
                '',
                '',
                {
                  columns: [
                    {
                      width: '50%',
                      text: 'Square Meters',
                    },
                    {
                      width: '50%',
                      text: 'XXXXX',
                    },
                  ],
                },
              ],
              [
                {
                  text: {
                    text: '(The above details are tentative. Final details will be confirmed by the Promoter at the time of offer of possession.)',
                    italics: true,
                  },
                  colSpan: 3,
                  alignment: 'center',
                },
                '',
                '',
              ],
              [
                {
                  text: [
                    { text: '*Payment Plan\n', bold: true },
                    {
                      text: '(*Please Tick whichever is applicable)',
                      italics: true,
                    },
                  ],
                },
                'Construction Linked',
                {
                  text: '(    )',
                  alignment: 'center',
                },
              ],
              [
                '',
                'Development Linked',
                {
                  text: '(    )',
                  alignment: 'center',
                },
              ],
              [
                {
                  text: [
                    { text: '*Purpose\n', bold: true },
                    {
                      text: '(*Please Tick whichever is applicable)',
                      italics: true,
                    },
                  ],
                },
                'First/ Present Home',
                {
                  text: '(    )',
                  alignment: 'center',
                },
              ],
              [
                '',
                'Second Home',
                {
                  text: '(    )',
                  alignment: 'center',
                },
              ],
              [
                '',
                'Investment',
                {
                  text: '(    )',
                  alignment: 'center',
                },
              ],
              [
                '',
                'Other',
                {
                  text: '(    )',
                  alignment: 'center',
                },
              ],
            ],
          },
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Note:',
          bold: true,
          margin: [0, 0, 0, 5],
        },
        {
          ol: [
            {
              text: [
                'Common Areas and Facilities for use of the Applicant within the Building on the Said Plot are provided in ',
                { text: 'Schedule-5', bold: true },
              ],
              margin: [0, 0, 0, 5],
            },
            {
              text: [
                'The Floor Plan of the Floor applied for is attached as ',
                { text: 'Schedule-6', bold: true },
                '.',
              ],
              margin: [0, 0, 0, 5],
            },
            {
              text: '1 Square Foot = 0.0929 Square Meters (1 Square Meter = 10.764 Square Feet)',
              margin: [0, 0, 0, 5],
            },
          ],
          margin: [0, 0, 0, 40],
        },
        {
          columns: [
            {
              width: '45%',
              stack: [
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 180,
                      h: 2,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Sole/ First Applicant',
                },
              ],
              margin: [0, 0, 10, 0],
            },
            {
              width: '45%',
              stack: [
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 180,
                      h: 2,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Second Applicant (if any)',
                },
              ],
            },
          ],
          margin: [0, 0, 0, 80],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 7 END =============
        // ============= PAGE 8 START =============
        {
          stack: [
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 180,
                  h: 2,
                  color: 'yellow',
                },
              ],
              margin: [0, 0, 0, 5],
            },
            {
              text: 'Signature of the Third Applicant (if any)',
            },
          ],
          margin: [0, 20, 0, 30],
        },
        {
          text: 'DECLARATION',
          style: 'header',
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: [
            'I/We, the undersigned Applicant(s), do herewith remit a sum of Rs.',
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 400,
                  h: 1,
                  color: 'yellow',
                },
              ],
            },
          ],
          margin: [0, 0, 0, 5],
        },
        {
          text: [
            '(Rupees ',
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 400,
                  h: 1,
                  color: 'yellow',
                },
              ],
            },
            ' only) by Bank Draft/',
          ],
          margin: [0, 0, 0, 5],
        },
        {
          text: [
            'Cheque No.',
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 150,
                  h: 1,
                  color: 'yellow',
                },
              ],
            },
            ' dated ',
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 80,
                  h: 1,
                  color: 'yellow',
                },
              ],
            },
            ' drawn on ',
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 120,
                  h: 1,
                  color: 'yellow',
                },
              ],
            },
            'Bank towards Application Money.',
          ],
          margin: [0, 0, 0, 30],
        },
        {
          text: 'I/We agree to pay the Booking Amount and further installments of Total Price as stipulated in Payment Plan/called for by the Promoter and other charges as and when called for.',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'I/We declare that selection of Broker for this purchase (if applicable) has been done by me at my sole discretion and the Promoter had no role to play in this.',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'I/We, the undersigned, do hereby declare that the abovementioned particulars/information given by me/us are true and correct to the best of my/our knowledge and no material fact has been concealed therefrom. We also undertake to inform in writing, to the Promoter of any future changes related to the information and details shown in this Application Form.',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Yours faithfully,',
          margin: [0, 0, 0, 40],
        },
        {
          columns: [
            {
              width: '45%',
              stack: [
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 180,
                      h: 2,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Sole/ First Applicant',
                },
              ],
              margin: [0, 0, 10, 0],
            },
            {
              width: '45%',
              stack: [
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 180,
                      h: 2,
                      color: 'yellow',
                    },
                  ],
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Second Applicant (if any)',
                },
              ],
            },
          ],
          margin: [0, 0, 0, 30],
        },
        {
          stack: [
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 180,
                  h: 2,
                  color: 'yellow',
                },
              ],
              margin: [0, 0, 0, 5],
            },
            {
              text: 'Signature of the Third Applicant (if any)',
            },
          ],
          margin: [0, 0, 0, 60],
        },
        {
          text: [
            'Place: ',
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 120,
                  h: 1,
                  color: 'black',
                },
              ],
            },
            '  Date: ',
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 120,
                  h: 1,
                  color: 'black',
                },
              ],
            },
          ],
          margin: [0, 0, 0, 80],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 8 END =============
        // ============= PAGE 9 START =============
        {
          text: 'Note:',
          bold: true,
          margin: [0, 20, 0, 10],
        },
        {
          ol: [
            {
              text: [
                "All payments shall be made by the Applicant(s) from its own bank account by way of (i) a banker's cheque/ demand draft(s) in favour of: ",
                '\n"',
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 250,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                },
                ' A/C" payable at ',
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 200,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                },
                ' or through RTGS/NEFT/online/ wire transfer in favour of\n"',
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 250,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                },
                ' A/C", A/c # ',
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 150,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                },
                ', IFSC Code: ',
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 150,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                },
                '\nBranch: ',
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0,
                      y: 0,
                      w: 200,
                      h: 1,
                      color: 'yellow',
                    },
                  ],
                },
                ' (This may be change at the sole discretion of the Promoter).',
              ],
              margin: [0, 0, 0, 10],
            },
            {
              text: 'Cheques are subject to realization.',
              margin: [0, 0, 0, 10],
            },
            {
              text: 'In case the cheque for the Application Money bounces, the Promoter retains the right to cancel the Application Form without any notice to the Applicant(s) and without prejudice to the rights of the Promoter to recover applicable cheque bouncing charges.',
              margin: [0, 0, 0, 10],
            },
            {
              text: "Applicant's signature on all pages of the Application.",
              margin: [0, 0, 0, 10],
            },
            {
              text: 'Incomplete Applications or those without proper photographs or documents shall not be considered by the Promoter.',
              margin: [0, 0, 0, 10],
            },
          ],
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 9 END =============
        // ============= PAGE 10 START =============
        {
          text: 'SCHEDULE-1',
          style: 'header',
          alignment: 'center',
          margin: [0, 20, 0, 10],
        },
        {
          text: 'Key Indicative Terms & Conditions of Application',
          style: 'subheader',
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: "The terms and conditions given below are only indicative to enable the Applicant to acquaint himself/herself/them-selves with the terms and conditions as will be comprehensively set out in the Floor Buyer's Agreement.",
          margin: [0, 0, 0, 20],
        },
        {
          text: '1. Definitions and Interpretations',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'In this Application, the following words and expressions, when written in capital letters, shall have the meanings assigned herein. When not written in capital letters, such words and expressions shall be attributed their ordinary meaning and/or as specified in the Agreement.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Agreement" shall mean the Floor Buyer Agreement which will be executed between the Applicant(s) and the Promoter.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Applicant" shall mean the applicant(s), applying for allotment of the said Floor particulars of which are set out in this Application and who have appended their signatures on each page, as acknowledgement of having agreed to the terms and conditions of this Application and the Agreement.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Application" shall mean this application for allotment of the Floor in the Project specified in Annexure-2 along with the terms and conditions contained herein.',
          margin: [10, 0, 0, 15],
        },
        {
          text: [
            '"Application Money" shall mean an amount of Rs. ',
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 200,
                  h: 1,
                  color: 'yellow',
                },
              ],
            },
            '(Rupees ',
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 200,
                  h: 1,
                  color: 'yellow',
                },
              ],
            },
            ' only) payable by the Applicant at the time of submitting this Application Form. The Application Money shall be adjusted from the Booking Amount/ Total Price of the Floor and shall form part payment towards Booking Amount payable by the Applicant for booking the Floor.',
          ],
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Building" shall mean the building constructed/ to be constructed on the Said Plot in which the Floor is constructed/ to be constructed.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Booking Amount" shall mean 10 % of the Unit Price to be paid by the Applicant as per the Payment Plan for due fulfillment of the terms and conditions of the Application/Agreement.',
          margin: [10, 0, 0, 15],
        },
        {
          text: 'It is clarified that the Application Money forms part of the Booking Amount and that the Booking Amount is payable in more than one instalment for the convenience of the Applicant(s) and the Booking Amount shall be treated as earnest money for due performance of the obligations of the Applicant(s) under this Application and the Agreement.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Colony" shall mean the integrated residential colony developed/ being developed in Sectors- 3, 4 & 4A of Pinjore-Kalka Urban Complex, District Panchkula, Haryana.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Common Areas and Facilities of the Building" shall mean the common areas and facilities for use of the Applicant and occupants of other floors within the Building.',
          margin: [10, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 10 END =============
        // ============= PAGE 11 START =============
        {
          text: '"Common Areas and Facilities of the Colony" shall mean the common areas and facilities of the Colony as defined in Rule 2 (1) (f) of the Haryana Real Estate (Regulation and Development) Rules, 2017.',
          margin: [10, 20, 0, 15],
        },
        {
          text: '"Common Areas" shall mean collectively the Common Areas and Facilities of the Colony and Common Areas and Facilities of the Building.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"EDC" shall mean external development charges and shall include interest thereon.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Floor" means the independent residential floor applied for by the Applicant, details of which have been set out in this Application Form.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Holding Charges" shall mean the additional charges payable by the Applicant to the Promoter in the event it fails/ delays in taking possession of the said Floor when offered for possession under the terms of the Agreement and shall be calculated at the rate of Rs.10/- (Rupees Ten only) per square foot per month / Rs.107.64/- (Rupees One Hundred and Seven and Paise Sixty Four only) per square meter per month of the carpet area of the said Floor.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"HRERA" means the Haryana Real Estate Regulatory Authority.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"IDC" shall mean the infrastructure development charges and shall include interest thereon.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"IFMSD" means the interest free maintenance security deposit payable at the rate specified in Clause 19(iv) by the Applicant(s) to the Promoter or to the Maintenance Agency as security deposit for the maintenance and upkeep of the Common Areas.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Force Majeure" means any event or combination of events or circumstances beyond the control of the Promoter which cannot, by the exercise of reasonable diligence, or despite the adoption of reasonable precaution and/or alternative measures, be prevented, or caused to be prevented, and which adversely affects the Promoter\'s ability to perform obligations under this Application, which shall include but not be limited to:',
          margin: [10, 0, 0, 15],
        },
        {
          stack: [
            {
              text: 'a)   acts of God i.e. fire, drought, flood, earthquake, epidemics, pandemics, endemics, restrictions or lock-down imposed on account of any epidemics, pandemics, endemics, natural disasters;',
              margin: [30, 0, 0, 10],
            },
            {
              text: 'b)   explosions or accidents, air crashes and shipwrecks, act of terrorism;',
              margin: [30, 0, 0, 10],
            },
            {
              text: 'c)   strikes or lock outs, industrial dispute;',
              margin: [30, 0, 0, 10],
            },
            {
              text: 'd)   non-availability, inability to procure any men or material or general shortage of energy, labour, equipment, facilities, materials or supplies, cement, steel or other construction material, failure of transportation, whether due to strikes of manufacturers, suppliers, transporters or other intermediaries or due to any other reason whatsoever; e) war and hostilities of war, riots, bandh, act of terrorism or civil commotion;',
              margin: [30, 0, 0, 10],
            },
            {
              text: 'e)   change in any applicable laws, rules, guidelines or the promulgation of or amendment in any law, rule or regulation or the issue of any injunction, or order by a competent court of law, or any order, direction, instruction or clarification from any governmental authority, any legislative change, policy change or otherwise any competent authority action that prevents or restricts',
              margin: [30, 0, 0, 10],
            },
          ],
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 11 END =============
        // ============= PAGE 12 START =============
        {
          text: 'the Promoter from complying with any or all the terms and conditions as agreed in this Application;',
          margin: [30, 20, 0, 10],
        },
        {
          text: 'f)   any legislation, order, rule or regulation made or issued by the government or any other authority; or refusals/ delays in the grant of any necessary approvals, permissions or licenses for the Project or part thereof by any competent authority; or if any matters, issues relating to such approvals, permissions, or licenses by the competent authority become subject matter of any suit/ writ before a competent court; or for any other reason whatsoever;',
          margin: [30, 0, 0, 10],
        },
        {
          text: 'g)   any event or circumstances analogous to the foregoing.',
          margin: [30, 0, 0, 20],
        },
        {
          text: '"Maintenance Agency" shall mean the society, association or body corporate, by whatever name called, that may be engaged by the Promoter to provide maintenance services with respect to the Common Areas.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Maintenance Agreement" shall mean the maintenance agreement to be executed by the Applicant with the Promoter/Maintenance Agency in accordance with the terms of the Agreement.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Maintenance Charges" shall have the meaning ascribed to it in the maintenance agreement for maintaining the Common Areas.',
          margin: [10, 0, 0, 15],
        },
        {
          text: [
            '"Payment Plan" means the schedule of payment mentioned set out in ',
            { text: 'Schedule-3', bold: true },
            '.',
          ],
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Project" shall mean the project as specified in Annexure-2 of this Application hereinbefore.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"RERA Act/ HRERA Rules" means the Real Estate (Regulation and Development) Act, 2016 and Real Estate (Regulation and Development) Rules, 2017 for the state of Haryana as amended from time to time.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Said Land" means the piece and parcel of land over which the Project is situated.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Said Plot" shall mean the plot on which the building comprising the Floor is constructed/ to be constructed.',
          margin: [10, 0, 0, 15],
        },
        {
          text: [
            '"Total Price" of the said Floor is specified in ',
            { text: 'Schedule-2', bold: true },
            '.',
          ],
          margin: [10, 0, 0, 15],
        },
        {
          text: '"Trident Hills" shall mean the integrated residential colony(ies) being developed under various licenses issued to the Promoter and/ or its group companies in Sectors- 3, 4 & 4A of Pinjore-Kalka Urban Complex, District Panchkula, Haryana.',
          margin: [10, 0, 0, 15],
        },
        {
          text: [
            '"Unit Price" of the said Floor is specified in ',
            { text: 'Schedule-2', bold: true },
          ],
          margin: [10, 0, 0, 15],
        },
        {
          text: 'Explanation:',
          bold: true,
          margin: [10, 0, 0, 10],
        },
        {
          stack: [
            {
              text: '(i)   The Total Price as mentioned above includes the Booking Amount paid by the Applicant to the Promoter towards the said Floor.',
              margin: [20, 0, 0, 10],
            },
            {
              text: '(ii)  The Total Price above includes taxes (Goods and Service Tax or any other similar taxes/fees/charges/levies etc which are presently levied, in connection with the development of',
              margin: [20, 0, 0, 10],
            },
          ],
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 12 END =============
        // ============= PAGE 13 START =============
        {
          text: 'the Project payable by the Promoter, by whatever name called) up to the date of handing over the possession of the said Floor to the Applicant after obtaining the necessary approvals from competent authority for the purposes of handing over the possession: Provided however that the Total Price does not include taxes (Goods and Service Tax or any other similar taxes/fees/charges/levies etc. in connection with the development of the Project payable by the Promoter, by whatever name called) in case the same is/ are levied retrospectively after the date of handing over possession of the said Floor or the date of registration of conveyance deed of the Floor in favour of the Applicant, whichever is earlier. In case the same are levied in future retrospectively, then the same shall be separately payable by the Applicant.',
          margin: [20, 20, 0, 15],
        },
        {
          text: 'Provided further that in case there is any change / modification in the taxes/ charges/ fees/ levies etc., the subsequent amount payable by the Applicant to the Promoter shall be increased/reduced based on such change / modification.',
          margin: [20, 0, 0, 15],
        },
        {
          text: 'Provided further that if there is any increase in the taxes/ charges/ fees/ levies etc. after the expiry of the scheduled date of completion/ part completion of the Project as per registration with HRERA, which shall include the extension of registration, if any, granted to the said Project by HRERA, as per the Act, the same shall be charged from the Applicant only if such increase/ extension is on account of (i) any reason which is not solely attributable to the Promoter; or (ii) due to any Force Majeure event; or (iii) due to any change in legislation, change in policy or any clarification issued by the competent authority.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(iii) The Promoter shall periodically intimate in writing to the Applicant, the amount payable as stated in (i) above and the Applicant shall make payment demanded by the Promoter within the time and in the manner specified therein. In addition, the Promoter shall provide to the Applicant(s) the details of the taxes/ fees/ charges/ levies etc. paid or demanded along with the acts/ rules/ notifications together with dates from which such taxes/ fees/ charges/ levies etc. have been imposed or become effective.',
          margin: [20, 0, 0, 15],
        },
        {
          text: [
            '(iv) The Total Price of the said Floor includes recovery of price of Said Plot, development and construction of not only of the said Floor and Common Areas (if applicable), IDC, EDC, taxes/ fees/ levies etc., cost of providing electric wiring, connectivity to the Floor, power back up installation, lift waterline and plumbing, fire detection and firefighting equipment in the Common Areas and Facilities of the Building  (if applicable), finishing with paint,  marble, tiles, doors and windows, maintenance charges and includes cost of other facilities, amenities and specifications to be provided within the Floor along with parking(s) in the Said Plot. The proposed specifications for the Floor are given in detail in ',
            { text: 'Schedule-4', bold: true },
            '. It is clarified that the Total Price of the Floor does not include cost of construction of the building comprising the Club (specified in Clause 20 of Schedule-1 of this Application) and/ or cost of land underneath the Club.',
          ],
          margin: [20, 0, 0, 15],
        },
        {
          text: '(v) The Applicant agrees and understands that the Promoter shall conform to the carpet area of the Floor after the Floor is allotted to the Applicant post completion of construction of the building/ Floor and after occupation certificate is granted by the competent authority, by furnishing details of the changes, if any, in the carpet area. The Applicant understands that the Total Price payable for the carpet area shall be recalculated upon confirmation by the',
          margin: [20, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 13 END =============
        // ============= PAGE 14 START =============
        {
          text: 'Promoter. If there is reduction in the carpet area, then the Promoter shall refund the excess amounts paid by Applicant within 90 (ninety) days with Interest at the rate prescribed in the Rules, from the date when such an excess amount was paid by the Applicant. If there is any increase in the carpet area, which is not more than 5% (five percent) of the carpet area of the Floor, allotted to the Applicant, the Promoter shall demand that from the Applicant as per the next milestone of the Payment Plan as provided in Schedule-3. All these monetary adjustments shall be made at the same rate per square meter/ per square foot as provided in Schedule-2.',
          margin: [20, 20, 0, 15],
        },
        {
          text: '(vi) The Applicant agrees that the Promoter shall adjust/ appropriate all the amounts received from the Applicant first towards Interest on overdue instalments and only thereafter towards the previous/ overdue instalments or any other outstanding demand and finally the balance, if any, would be adjusted/ appropriated towards the current instalment or current dues towards which the payment has been tendered.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(vii) The Total Price does not include stamp duty, registration charges, Interest Free Maintenance Security Deposit, Maintenance Charges, any other charges/ fees/ costs which shall be payable by the Applicant in accordance with the provisions mentioned in the Floor Buyer Agreement and/ or as per demand raised by the Promoter/ concerned entity. Apart from the above, internal services, if any, external and/or peripheral services, if any, are provided by the Central/State Government or local authority for the Project/ Colony, in future, the same shall also be payable by the Applicants with respect to the said Floor, calculated proportionately with the other units in the Project/ Colony, in addition to the Total Price.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(viii) The Applicant shall always be responsible and liable for the payment of all municipal taxes, property tax, value added tax, Goods and Service Tax, enhancement of EDC/IDC etc., wherever applicable and any other third party/ statutory fee/ taxes/ charges, including enhancements thereof, even if they are retrospective in effect as may be levied on the Promoter or the Project/ Colony, as determined by the Promoter /Maintenance Agency. All such amount shall be payable on demand either to the Promoter or the Maintenance Agency as the case may be.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(ix)  In addition to the above mentioned, if any other demands are raised by the Government of Haryana or any other authority, with a view to recover the cost of development for any sector roads, state/national highways, transport, irrigation facilities, power facilities, environment conservation schemes, welfare or special project/ scheme, etc., or in the nature of infrastructure charges and/ or by whatever name called, the Applicant agrees to pay the same on demand to the Promoter, calculated proportionately with the other units in the Project/ Colony.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(x)   In case any of the above demands has been made by the concerned authority after the execution of the conveyance deed in favour of the Applicant, the same shall be treated as unpaid part of the Total Price of the said Floor and the Promoter shall have the first charge/lien on the said Floor to the extent of such unpaid amount.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '2.   The Applicant(s) has/have understood that he/she/they is/are making the Application to Promoter, for allotment of a Floor by the Promoter in the Project. The Applicant(s) has/have fully satisfied',
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 14 END =============
        // ============= PAGE 15 START =============
        {
          text: 'himself/herself/ themselves about the right, title and interest of the Promoter to sell the Floor and receive the sale price.',
          margin: [0, 20, 0, 15],
        },
        {
          text: '3.   The Applicant(s) have visited the Project and acknowledges that the Applicant(s) has seen the relevant documents/papers pertaining to the Said Land and is fully satisfied about the right and interest of the Promoter to develop the Complex on the Said Land and has understood all limitations and obligations in respect thereof. The Applicant agrees that he/she/they has/have no objection with respect to title/interest of the Said Land Promoter and/or the right of the Promoter for the development of the Complex on the Said Land.',
          margin: [0, 0, 0, 15],
        },
        {
          text: '4.   This Application Form does not constitute a document conferring any right, title or interest in the Applicant(s) in any way and shall not be construed as an agreement to sell between the Promoter and the Applicant(s). The Applicant(s) shall remain in such capacity till the time the Floor Buyer Agreement has been executed in their favour by the Promoter. It shall be incumbent on the Applicant(s) to comply with all the terms and conditions including terms of payment against proposed allotment/ proposed sale, as contained in this Application Form.',
          margin: [0, 0, 0, 15],
        },
        {
          text: '5.   The Applicant(s) has/have applied for allotment of a Floor in the Project with full knowledge and subject to all laws, notifications, rules, judgment, order, decree, etc. applicable to the Said Land and/or the Project, which have been fully explained by the Promoter and understood by him/ her/ them. The Applicant(s) has/ have perused the sanctioned plans duly approved by the Competent Authority.',
          margin: [0, 0, 0, 15],
        },
        {
          text: '6.   Application Money & Booking Amount',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'After receipt of the Application Form, complete in all respects along with the Application Money, the Promoter shall process the same and subject to receipt of full Booking Amount within the specified timeframe, at its sole discretion may allot the Floor in favour of the Applicant(s). It is clarified that the Application Money shall be adjusted in the Booking Amount.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '7.   Revocation of Application/ allotment by Applicant(s)',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'In the event that the Applicant(s) revoke(s) or withdraw(s) his/her/their Application/ once such Application is made, the Promoter  shall be entitled to forfeit the Booking Amount paid for the allotment and interest component on delayed payment (payable by the Applicant for breach of Agreement and non-payment of any due payable to the Promoter), as the case may be and the other amounts paid/ due and payable to the Promoter.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '8.   Revocation/ Withdrawal by Applicant(s) after execution of Floor Buyer Agreement/ Agreement to Sell',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: "After the Applicant(s) has/have executed the Floor  Buyer's Agreement, but subsequently fail(s) to comply with any of the terms & conditions of the said Agreement, or in case the Applicant(s) decide(s) to cancel/surrender his/her/their allotment, the amount paid by the Applicant(s) shall be refunded to him/her/them after forfeiture and adjustment of the Booking Amount paid for the allotment and interest component on delayed payment (payable by the Applicant for breach of the Agreement and non-payment of any due payable to the Promoter), as the case may be and the other amounts paid/ due and payable to the Promoter.",
          margin: [10, 0, 0, 15],
        },
        {
          text: '9.   Escalation',
          bold: true,
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 15 END =============
        // ============= PAGE 16 START =============
        {
          text: 'The Total Price is escalation-free, save and except increases which the Applicant hereby agrees to pay, due to increase on account of development charges/ EDC/IDC payable to the competent authority and/or any other increase in taxes, GST or charges which may be levied or imposed by the competent authority from time to time. The Promoter undertakes and agrees that while raising a demand on the Applicant for increase in development charges, cost/charges/fees/levies etc. imposed by the competent authorities, the Promoter shall enclose the said notification/ order/rule/regulation to that effect along with the demand letter being issued to the Applicant, which shall only be applicable on subsequent payments, unless such imposition is retrospective in nature and earlier payments are covered within the same and in which case the same may be demanded to be paid in addition to earlier payments. Provided that if there is any new imposition or increase of any development charges and/or taxes after the expiry of the scheduled date of completion of the Project (which shall include the extension of registration, if any, granted to the said project by the Authority, as per the Act ) as per registration with the Authority, the same shall not be charged from the Applicant unless such imposition is retrospective in nature and pertains to the period prior to scheduled date of completion of the project (including extension thereof) as specified hereinbefore. Notwithstanding anything to the contrary contained in this Application Form, in case of any increase in carpet area of the Unit, the Total Price of the Unit shall be recalculated as per the provisions of Explanation (v) contained herein.',
          margin: [10, 20, 0, 15],
        },
        {
          text: '10. Interest Free Maintenance Security Deposit (IFMSD)',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'The IFMSD shall be deposited by the Applicant(s) to ensure timely payment of maintenance charges towards maintenance of the Common Areas and shall be payable by the Applicant(s) at the time of offer of possession of the Floor.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '11. Other Charges',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'The Applicant(s) shall make all payments in accordance with the Payment Plan. The Applicant(s) shall further make payment of all statutory and third-party charges, including registration charges, stamp duty charges and other charges as and when demanded by the Promoter.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '12. Mode of Payment',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: "The Applicant(s) shall make all payments as per the specifications provided in this Application Form. All payments made in this manner shall be subject to realization in designated bank accounts specified by the Promoter. It is specifically clarified to the Applicant that if any amount towards Total Price and any taxes, cess/ fees/ charges/ levies etc. by whatever name called, required to be paid by the Applicant as per the Payment Plan or on the demand being raised by the Promoter, is not deposited in the Account (as specified in this Application Form) in respect of the Project then it will not amount to a valid discharge of Applicant's obligation to pay the sale consideration or part thereof under the Floor Buyer Agreement to purchase the Floor. In case the Applicant(s) default(s) in the payment of any installment or any other charges, then the Promoter is not under any obligation to send any demand letter or other reminder for payment of installment and/or other charges due, but not paid by the Applicant(s). In case of dishonor of any cheque, the Applicant(s) shall be liable to pay administrative charges equivalent to Rs.1,000/- (Rupees One Thousand only) per instance in addition to the interest applicable as per the Rules for delayed payment. After first dishonor of cheque, the Promoter shall not be bound to accept any further cheque(s) from the Applicant(s) and payments shall be accepted through bank demand draft(s) only. Any dishonor of cheque(s) shall be without prejudice to the right of the Promoter to initiate appropriate proceedings against the Applicant.",
          margin: [10, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 16 END =============
        // ============= PAGE 17 START =============
        {
          text: '13. Adjustment/ appropriation of payments',
          bold: true,
          margin: [0, 20, 0, 10],
        },
        {
          text: 'The Applicant authorizes the Promoter to adjust/appropriate all payments made by him/her/them under any head(s) of dues against lawful outstanding of the Applicant against the said Floor, if any, in his/her/their name and the Applicant agrees and undertakes not to object/demand/direct the Promoter to adjust/ appropriate the payments in any manner.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '14. Time is of essence',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'Timely payment of installments/ balance sale consideration/ security deposits/ charges, interest on delayed payment(s) etc. shall be of essence in respect of this Application Form. In case any installment(s) are delayed, the Applicant(s) shall pay interest at the rate prescribed in the Rule 15 of HRERA, 2017 on delayed payments at the time of every succeeding installment which shall be calculated from the due date of outstanding payment/amount till the date of payment. The Applicant agrees and bounds himself/herself/itself to abide by the time schedule for payment of the Total Price/ balance amounts as per the Payment Plan and/or the demands raised by the Promoter time to time, failing which the Applicant shall be held to be in default. Timely Payment of the instalment/ amounts due shall be of the essence of the Floor Buyer Agreement/ Agreement to Sell. If payment is not made within the period as stipulated and or the Applicant commits breach of any of the terms and conditions of the Floor Buyer Agreement/ Agreement to Sell, then the Floor Buyer Agreement shall be liable to be cancelled. In the eventuality, the Booking Amount along with the charges towards taxes, levies, penalties interest, brokerage etc. if any shall be liable to be forfeited and the balance, if any, would be refundable without Interest. In any case, all the dues, whatsoever, including Interest, if any, shall be payable before taking possession of the said Floor.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '15. Possession of the Floor',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: '(i)   Schedule for possession of the Floor',
          bold: true,
          margin: [10, 0, 0, 10],
        },
        {
          text: [
            'The Promoter assures to hand over possession of the said Floor on or before _________ unless there is delay or failure due to Force Majeure affecting the regular development of the Project. If the completion of the Project is delayed due to the Force Majeure, court orders, government policy guidelines, decisions affecting the regular development of the Project then the Applicant agrees that the Promoter shall be entitled to the extension of time for delivery of possession of the said Floor.',
          ],
          margin: [20, 0, 0, 15],
        },
        {
          text: 'The Applicant agrees and confirms that, in the event it becomes impossible for the Promoter to implement the Project due to Force Majeure and abovementioned conditions, then the Agreement and allotment of the said Floor may be terminated by the Promoter for which the Promoter shall be entitled to give a prior intimation to the Applicant. In the event of such termination, the Promoter shall refund to the Applicant the entire amount received by the Promoter (subject to deduction of taxes, and other outgoing charges already paid by the Promoter to the concerned authorities and the penalty charges., if any paid by the Applicant on account of his default under the Agreement) within 90 days from the date from when the Project becomes impossible to be implemented without any interest therein. The Promoter shall intimate the Applicant about such impossibility of performance which led to such termination, at least thirty (30) days prior to such termination. After refund of the money paid by the Applicant, the Applicant agrees that he/',
          margin: [20, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 17 END =============
        // ============= PAGE 18 START =============
        {
          text: 'she/they shall not have any rights, claims etc. against the Promoter and that the Promoter shall be released and discharged from all its obligations and liabilities under the Agreement.',
          margin: [20, 20, 0, 15],
        },
        {
          text: '(ii)   Procedure for taking possession',
          bold: true,
          margin: [10, 0, 0, 10],
        },
        {
          text: 'The Promoter, upon obtaining the Part Occupancy Certificate/  Occupancy Certificate / Part Completion certificate / completion certificate from the competent authority shall offer in writing the possession of the Floor, to the Applicant in terms of the Agreement to be taken within 30 (thirty) days from the date of issue of Part Occupancy Certificate/  Occupancy Certificate / part Completion certificate / completion certificate and shall execute and register the conveyance deed in favour of the Applicant simultaneously along with other documents/undertaking/indemnities which the Promoter may deem necessary.',
          margin: [20, 0, 0, 15],
        },
        {
          text: 'The Applicant, agree(s) to pay the maintenance charges as determined by the Promoter/Maintenance Agency, as the case may be, from the date of offer of possession of the Floor.',
          margin: [20, 0, 0, 15],
        },
        {
          text: 'The Promoter agrees and undertakes to indemnify the Applicant in case of failure of fulfillment of any of the provisions, formalities, documentation on part of the Promoter. The Promoter shall provide copy (on demand) of Building Plan and completion certificate/occupation certificate or part thereof in respect of Project at the time of conveyance of the same. The Applicant(s) after taking possession, agree(s) to pay the Maintenance Charges (as applicable) and Holding Charges (as mentioned in Schedule-3) as determined by the Promoter/ association of allottees/ competent authority as the case may be.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(iii)  Failure of Applicant to take Possession of Floor',
          bold: true,
          margin: [10, 0, 0, 10],
        },
        {
          text: 'Upon receiving a written intimation from the Promoter as per para 16 (ii) above, the Applicant shall take possession of the said Floor from the Promoter by executing necessary indemnities, undertakings and such other documentation as prescribed in the Agreement, and submitting proof of having deposited the entire stamp duty and registration charges in the government treasury, the Promoter shall give possession of the said Floor to the Applicant in accordance with the terms of the Agreement. In case the Applicant fails to take possession within the stipulated time, such Applicant shall continue to be liable to pay maintenance charges and other charges etc.  from the date of offer of possession by the Promoter. Provided however that notwithstanding the foregoing and/ or any other provisions of this Agreement, failure of the allottee (Applicant herein) to take possession of the Floor shall be deemed to be a default under provisions of the Floor Buyer Agreement and the Promoter shall be entitled terminate the Agreement.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(iv)  Possession by the Applicant',
          bold: true,
          margin: [10, 0, 0, 10],
        },
        {
          text: 'After obtaining the Part Occupancy Certificate/ Occupancy Certificate / part Completion certificate / completion certificate and handing over the physical possession of the floor to the Applicant(s), it shall be the responsibility of the Promoter to hand over the necessary documents and plans to the association of allottee(s) or the competent authority, as the case may be under the terms of the Act/Rules.',
          margin: [20, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 18 END =============
        // ============= PAGE 19 START =============
        {
          text: '(v)   Cancellation by Applicant',
          bold: true,
          margin: [10, 20, 0, 10],
        },
        {
          text: 'The Applicant shall have the right to cancel/withdraw his/her/their allotment in the Project as provided in the Act:',
          margin: [20, 0, 0, 15],
        },
        {
          text: 'Provided that where the Applicant proposes to cancel/withdraw from the Project, the Promoter herein is entitled to forfeit the Booking Amount and Interest component on delayed payment (payable by the Applicant for breach of the Agreement and non-payment of any dues payable to the Promoter) along with all the charges paid towards taxes, levies, govt. dues, interest, penalty, cess, duties to the concerned department / authority in respect of the said Floor, as on the date of termination. The balance amount of money paid by the Applicant (subject to deduction of taxes and other outgoing charges already paid by the Promoter and the penalty charges, if any) shall be returned by the Promoter to the Applicant without interest within 90 (ninety) days of such cancellation.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(vi)  Compensation',
          bold: true,
          margin: [10, 0, 0, 10],
        },
        {
          text: 'The Promoter shall compensate the Applicant in case of any loss caused to him due to defective title of the land on which the Floor is being developed or has been developed, in the manner as provided under the Act and the claim for interest and compensation under this provision shall not be barred by limitation provided under any law for the time being in force.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(vii) Except for occurrence of a Force Majeure, if the Promoter fails to complete or is unable to give possession of the said Floor:',
          bold: true,
          margin: [10, 0, 0, 10],
        },
        {
          text: 'a)   in accordance with the terms of the Agreement, duly completed by the date specified in Para 16 (i) above; or',
          margin: [20, 0, 0, 10],
        },
        {
          text: 'b)   due to discontinuance of its business as a developer on account of suspension or revocation of the registration under the Act; or for any other reason; the Promoter shall be liable, on demand to the Applicant, in case the Applicant wishes to withdraw from the Project, without prejudice to any other remedy available, to return the total amount received by him in respect of the said Floor with Interest (or interest at the rate prescribed in the Rules including compensation in the manner as provided under the Act within 90 (ninety) days of it becoming due.',
          margin: [20, 0, 0, 15],
        },
        {
          text: 'Provided that if the Applicant does not intend to withdraw from the Project, the Promoter shall pay the Applicant Interest (or interest at the rate prescribed in the Rules) for every month of delay, till the offer of the possession of the said Floor, which shall be paid by the Promoter to the Applicant within 90 (ninety) days of it becoming due.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '16. Lien',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'The Promoter may mortgage or create a charge on the Said Land or part thereof including the Floor and if any such mortgage or charge is made or created then notwithstanding anything contained in any other law for the time being in force, such mortgage or charge shall not affect the right and interest of the Applicant who has taken or agreed to take such said Floor. Without prejudice to the other rights of the Promoter hereunder, the Promoter shall in respect of any amounts remaining unpaid by the Applicant under the Agreement, have a first charge / lien on the Floor and the Applicant shall not',
          margin: [10, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        ,
        // ============= PAGE 19 END =============
        // ============= PAGE 20 START =============
        {
          text: 'transfer his/her/their/its rights under the Agreement, in any manner whatsoever, without making full payment of all amounts which are already due and payable by the Applicant under the Agreement, to the Promoter.',
          margin: [10, 20, 0, 15],
        },
        {
          text: '17. Assignment/ Transfer',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'The Applicant shall not be entitled to transfer/assign this Application and/ or its rights and obligations hereunder till the Floor Buyer Agreement is registered. Provided however that the Applicant may, after execution and registration of the Floor Buyer Agreement, transfer/ assign the Floor Buyer Agreement as per terms and conditions specified therein subject to prior written consent of the Promoter and subject to payment of all the dues outstanding in respect of the Floor at the time of assignment and the applicable transfer charges. Claims, if any, between assignor and assignee as related to transfer/assignment will be settled between assignor and assignee themselves and the Promoter will not be party to or responsible for the same. The assignee shall be bound by the terms of the Agreement.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '18. Conveyance',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'The Promoter shall, on receipt of Total Price of the Floor under the Agreement from the Applicant including Interest on any delayed payments, registration charges, applicable stamp duty, Holding Charges (if any) and all other charges as mentioned under the terms of the Agreement, shall execute a conveyance deed and convey the title of the said Floor preferably within 3 months but no later than 6 months from possession.',
          margin: [10, 0, 0, 15],
        },
        {
          text: 'All cost of Stamp duty, registration fee, ancillary charges, statutory levies of any nature and other miscellaneous/incidental expenses for execution and registration of the Conveyance Deed/ Sale Deed/ Sub Lease/Transfer Deed/ of the Floor in favour of the Applicant shall be borne and paid by the Applicant. However, in case the Applicant fails to deposit the stamp duty and/or registration charges and other ancillary charges payable for the registration within the period mentioned in the notice, the Applicant authorizes the Promoter to withhold registration of the conveyance deed in his/her/its favor till payment of stamp duty and registration charges to the Promoter is made by the Applicant.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '19. Maintenance',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: '(i)   The Promoter shall be responsible to provide and maintain essential services in the Colony/ Building till the taking over of the maintenance of the Colony/ Building by the association of allottees or competent authority, as the case may be, after the issuance of the part occupation certificate/ occupation certificate/ part completion certificate/ completion certificate of the Colony/ Project, as the case may be. Cost of such maintenance for the period up to the date of offer of possession post issuance of part occupation certificate/ occupation certificate/ part completion certificate/ completion certificate, has been included in the Total Price of the Floor after which the same shall be recovered from the allottees.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '(ii)  In case, the Applicant/ association of allottees fails to take possession of the said essential services as envisaged in the Agreement or prevalent laws governing the same, then in such a case, the Promoter has right to recover such amount as spent on maintaining such essential services beyond its scope.',
          margin: [10, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        ,
        // ============= PAGE 20 END =============
        // ============= PAGE 21 START =============
        {
          text: '(iii) The Applicant is aware that the Colony/ Building requires proper and periodic maintenance and upkeep and unless the Colony/ Building including its common areas are maintained in proper neat and clean form, the full utilization of the Colony/ Building cannot be availed by the allottee(s)/ occupants. On account of, inter alia, these reasons, the Applicant has agreed to purchase the said Floor on specific understanding that the right to use the common areas shall be subject to payment of regular and timely maintenance charges among other charges as may be applicable or as may be determined by the Promoter/ Maintenance Agency/ association of allottees. For the said purposes the Applicant undertakes to sign a separate maintenance agreement ("Maintenance Agreement") as per applicable format with the Promoter or its nominee maintenance service provider ("Maintenance Agency"), on or prior to taking over possession of the Floor and agrees to get it registered at his cost, if it may be so required. Execution of the maintenance agreement shall be a condition precedent for handing over of possession of the Floor by the Promoter and also for executing the conveyance deed of the Floor. The Applicant agrees and authorizes the Promoter to appoint a Maintenance Agency in respect of the Colony/ Building and post the formation of the association of allottees, to continue and novate the Maintenance Agreement in favor of association of allottees as the case may be; and post expiry of the term of the Maintenance Agreement, the association of allottees shall have the option to either continue with the Maintenance Agency appointed by the Promoter or to appoint a new Maintenance Agency as it may deem fit. The Applicant undertakes to pay to the Promoter/the Maintenance Agency monthly charges for provision of maintenance services (hereinafter referred to as "Maintenance Charges") with effect from the date of offer of possession of the Floor or as per the Maintenance Agreement to be entered into between the Applicant and the Maintenance Agency.',
          margin: [10, 20, 0, 15],
        },
        {
          text: '(iv) The Applicant shall deposit with the Promoter/ Maintenance Agency a sum @ Rs.100/- per sq. foot of the carpet area of the Floor by way of interest free maintenance security deposit ("IFMSD") to ensure timely payment of maintenance charges by him. The amount will be payable by the Applicant at the time of taking of the possession or execution of conveyance deed of the said Floor, whichever is earlier. Besides, the Applicant shall also make proportionate contributions to the replacement/sinking fund as may be prescribed by the Developer/ Promoter and/or its nominee Maintenance Agency to be utilized for replacement/ major repairs of infrastructural facilities, roads, drains, water supply, sewer disposal system, electrical or other installations etc.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '(v)  The Applicant hereby agrees and undertakes to become a member of the Residents Welfare Association (RWA) as and when it would be formed on behalf of all the property owners in the Colony/ Building and to complete the documentation and fulfill its obligations towards this purpose as may be required, including but not limited to submission of the RWA Membership form, payment of annual subscription charges/fees, etc.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '20. Club',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'A club facility is being developed within Trident Hills which may be transferred by the Promoter in favour of a third-party operator/ group company/ nominee, inter alia, for operating/ managing the Club on such terms and conditions as the Promoter and/ or its nominee/ group company/ transferee/ operator may deem fit at its sole discretion (the "Club"). Club membership charges for 5 (five) years are included in the Total Price and the Applicant shall be entitled to use and access the Club for the Applicant\'s family comprising of the applicant (First applicant in case of joint applicants), its spouse and 2 (two) children below 25 (twenty five) years of age for 5 years (with effect from date of',
          margin: [10, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        ,
        // ============= PAGE 21 END =============
        // ============= PAGE 22 START =============
        {
          text: 'commencement of Club operations or date of offer of possession whichever is later) subject, inter alia, to the following terms and conditions:',
          margin: [10, 20, 0, 15],
        },
        {
          text: '(i)   The Applicant shall comply with all applicable terms & conditions as may be notified from time to time by the Promoter and/ or its nominee/ group company/ transferee/ operator.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(ii)  The Applicant undertakes to sign and execute necessary documents containing detailed terms and conditions for use and access of the Club at the time of offer of possession.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(iii) The Applicant shall pay usage charges for chargeable services/ facilities availed in the Club; &',
          margin: [20, 0, 0, 15],
        },
        {
          text: '(iv) Beyond expiry of the aforesaid period of 5 years, the Applicant undertakes to pay Club charges, and security deposit (if applicable) at applicable rates as and when demanded by the Promoter and/ or its nominee/ group company/ transferee/ operator.',
          margin: [20, 0, 0, 15],
        },
        {
          text: 'It is clarified that the Club is not/ shall not be part of the Common Areas and Facilities of the Colony/ Project/ Trident Hills and is/ shall be under absolute ownership of the Promoter and/ or its group companies and cost of construction of the building comprising the Club and/ or cost of land underneath the Club is not recovered as part of the Total Price.',
          margin: [20, 0, 0, 15],
        },
        {
          text: '21. Compliance by Applicant(s)',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: '(i)   The Applicant agrees to abide by the provisions of applicable laws, the terms contained in the License/and the agreements governing or relating to the said Floor, and shall be responsible/liable for all defaults, violations or breaches of any of the conditions or rules and regulations. The Applicant also agrees to abide by the terms of the Real Estate (Regulations and Development) Act, 2016 and Haryana Real Estate (Regulations and Development) Rules, 2017.',
          margin: [10, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        ,
        // ============= PAGE 22 END =============
        // ============= PAGE 23 START =============
        {
          text: '(ii)  The Applicant undertakes that all or any payments made/ to be made in terms of the transaction contemplated herein shall be made by the Applicant from its own bank account(s). Provided however that in case the Applicant intends to make any payment(s) from sources(s)other than its bank account(s), the Applicant shall subject to ensuring that such payments are in full compliance with all applicable laws, furnish to the Promoter at its own risk (1) a request letter made by the Applicant (2) an undertaking of the person from whose account the payment is being made on behalf of the Applicant and (3) a deed of indemnity, on formats provided by the Promoter. Provided however that in case of any non-compliance with this clause, the Promoter shall be entitled to forthwith cancel this Application Form.',
          margin: [10, 20, 0, 15],
        },
        {
          text: '(iii) The Applicant(s) agree(s) to use the said Floor(s) for residential  purpose  only and not to use the said Floor(s) or permit the same to be used for any purpose other than that sanctioned by the Competent/ Relevant Authorities or use it in any manner which may or is likely to cause nuisance or annoyance to other unit Promoter in the Project/ Colony/ Building or for any illegal or immoral purposes or to do or in any manner interfere with the use thereof or of space, passage or amenities available for common use.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '(iv) The Applicant undertakes that all and any payment made/to be made in terms of the transaction contemplated under the Agreement shall be from identifiable sources and the Applicant shall be the real and beneficial owner of the said Floor.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '(v)  The Applicant hereby acknowledges and agrees that the Promoter is obliged to adhere to the Anti-Money Laundering Laws & Regulations ("AML Regulations") applicable in all relevant jurisdictions including but not limited to Prohibition of Benami Property Transactions Act, 1988, Prevention of Corruption Act, Central Act, 1988, etc. The Applicant further undertakes that he shall not attempt to initiate any transactions that may contravene any AML Regulations and will provide all such information as is necessary or desirable by the Promoter.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '(vi) The Promoter reserves the right to collect such information as is necessary from the Applicant to meet its obligations under applicable AML Regulations. The Promoter may pass on information collected from the Applicant and relating to transactions and/or the Applicant as required by applicable AML Regulations and is under no obligation to inform the Applicant that it has done so.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '(vii) In the event if the Applicant is found to be in contravention of any AML Regulations by the concerned authority, this would be deemed to be a material breach of the Agreement and the Promoter reserves its right to forthwith terminate the Agreement without any further notice to the Applicant. The Promoter shall also have the right to take all necessary actions against the Applicant in this regard.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '(viii)The Applicant shall be responsible for any loss or damage out of any breach of the aforementioned conditions. The Applicant undertakes to indemnify and hold the Promoter, its assets, directors, employees, agents, shareholders, etc. indemnified from any loss that may be caused to the Promoter and/or its rights and interests under the Agreement including on account of any breach of any AML Regulations by the Applicant.',
          margin: [10, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 23 END =============
        // ============= PAGE 24 START =============
        {
          text: 'That in case there are Joint Applicants all communications shall be sent by the Promoter to the Applicant whose name appears first and at the address given by him/her which shall for all intents and purposes to consider as properly served on all the Applicants.',
          margin: [10, 20, 0, 15],
        },
        {
          text: '22. Compliance of all laws',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'The Applicant is submitting this Application for allotment of the Floor with the full knowledge of all laws, rules, regulations, notifications applicable to the Project/ Colony and undertakes to comply with the same.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '23. Compliance of Laws relating to Remittances',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'The Applicant, if resident outside India, shall be solely responsible for complying with the necessary formalities as laid down in Foreign Exchange Management Act, 1999, Reserve Bank of India Act, 1934 and the Rules and Regulations made thereunder or any statutory amendment(s) modification(s) made thereof and all other applicable laws including that of remittance of payment acquisition/sale/transfer of immovable properties in India etc. and provide the Promoter with such permission, approvals which would enable the Promoter to fulfill its obligations under the Agreement. Any refund, transfer of security, if provided in terms of the Agreement shall be made in accordance with the provisions of Foreign Exchange Management Act, 1999 or the statutory enactments or amendments thereof and the Rules and Regulations of the Reserve Bank of India or any other applicable law. The Applicant understands and agrees and undertakes that in the event of any failure on his/her/their part to comply with the applicable guidelines issued by the Reserve Bank of India, he/she/they may be liable for any action under the Foreign Exchange Management Act, 1999 or other laws as applicable, as amended from time to time.',
          margin: [10, 0, 0, 15],
        },
        {
          text: 'The Promoter accepts no responsibility in regard to matters specified above. The Applicant shall keep the Promoter fully indemnified and harmless in this regard. Whenever there is any change in the residential status of the Applicant subsequent to the signing of the Agreement and/ or submission of this Application Form, it shall be the sole responsibility of the Applicant to intimate the same in writing to the Promoter immediately and comply with necessary formalities if any under the applicable laws. The Promoter shall not be responsible towards any third-party making payment/remittances on behalf of any Applicant and such third party shall not have any right in the application/allotment of the said Floor applied for herein in any way and the Promoter shall be issuing the payment receipts in favour of the Applicant only.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '24. Correspondence',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'The Applicant(s) shall get his/ her/ their complete address registered with the Promoter at the time of booking/ application of the Floor and it shall be his/ her/ their responsibility to inform the Promoter by registered post/ email/ courier about all or any subsequent changes, if any, failing which all communications/ notices etc. sent at the first address as stated by the Applicant(s) in the Application Form shall be deemed to have been received by him/ her/ them.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '25. Additional Construction/ Development',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'The Promoter undertakes that it shall have the right to make additions or modifications in the Project/ Colony/ Building as per the Building Plan, sanction plan, amenities and facilities approved by the competent authority(ies) from time to time, and such alterations or additions or modifications shall be binding on the Applicant.',
          margin: [10, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 24 END =============
        // ============= PAGE 25 START =============
        {
          text: 'in accordance with the Act and the Rules. The Applicant consents to such alterations or additions or modifications provided that it is done as per the sanctioned plans.',
          margin: [10, 20, 0, 15],
        },
        {
          text: 'The Applicant hereby acknowledges and agrees that the Promoter is/ shall be carrying out development of land parcels adjoining the Said Land, and accordingly, the Colony along with such other development works may be referred to as different phases of development wherein the Colony or any part thereof may be referred to as different phases. The Applicant hereby provides its irrevocable consent towards the same and it shall not raise any dispute or objection in this regard in future in any manner whatsoever.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '26. Force Majeure',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'Development, construction and completion of the Project are subject to Force Majeure events. The Promoter shall be entitled to extend the time by a reasonable period required by it for performance of any of its obligations.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '27. Arbitration',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'All or any disputes arising out or touching upon or in relation to the terms and conditions of this Application, including the interpretation and validity of the terms thereof and the respective rights and obligations of the Parties, shall be settled amicably by mutual discussion, failing which the same shall be settled through arbitration. The arbitration shall be governed by the Arbitration & Conciliation Act, 1996 as amended up to date. The arbitration proceedings shall be held at Panchkula by a sole arbitrator who shall be mutually appointed by the Parties, subject to jurisdiction of courts at Panchkula, Haryana. The arbitration proceedings shall be in English language only.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '28. Governing Law & Jurisdiction',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'That the rights and obligations of the Parties under or arising out of this Application shall be construed and enforced in accordance with the RERA Act and the rules and regulations made thereunder including other applicable laws of India for the time being in force. This Application shall be subject to the jurisdiction of courts at Haryana only.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '29. Dispute resolution',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'All or any disputes arising out or touching upon or in relation to the terms and conditions of this, including the interpretation and validity of the terms thereof and the respective rights and obligations of the Parties, shall be settled amicably by mutual discussion, failing which the same shall be settled through the adjudicating officer appointed under the Act.',
          margin: [10, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 25 END =============
        // ============= PAGE 26 START =============
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        {
          text: '30. Misrepresentation/ Concealment',
          bold: true,
          margin: [0, 20, 0, 10],
        },
        {
          text: 'The Promoter shall also be entitled to and hereby reserves its right to cancel/terminate this Application/ allotment in the manner described in Clause 32 herein, in case in the opinion of the Promoter, (a) the Applicant has made any misrepresentation and concealment or suppression of any material fact in signing this Application Form or in seeking allotment of the Floor, OR (b) the Applicant(s) has/have violated or violate(s) any of the directions issued, rules and regulations framed by the Promoter.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '31. Default by Applicant(s)',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'The Applicant shall be considered under a condition of default, inter alia, on the occurrence of the following events:',
          margin: [10, 0, 0, 15],
        },
        {
          text: 'i.         In case the Applicant fails to make payment for two consecutive demands as per the Payment Plan, the Applicant shall be liable to pay Interest to the Promoter on the unpaid amount from the due date of such instalment at the rate prescribed under the Rules.',
          margin: [10, 0, 0, 15],
        },
        {
          text: 'ii.        In case of default by Applicant under the condition listed above continues for a period beyond 90 (ninety) days after the said due date, the Promoter may cancel the allotment of the said Floor in favour of the Applicant and refund the money paid by the Applicant after forfeiting the Booking Amount and Interest component on delayed payment (payable by the Applicant for breach of the Agreement and non-payment of any dues payable to the Promoter) along with all the charges paid towards taxes, levies, govt. dues, interest, penalty, cess, duties to the concerned department/ authority in respect of the said Floor, as on the date of termination. It is provided hereunder that the aforesaid balance amount shall be paid by the Promoter to the Applicant within 90 (ninety) days of such cancellation, the Promoter shall stand discharged of any liability towards the Applicant(s) upon such termination and the Applicant shall have no right, claim or interest against the promoter in connection with the Application/ Floor Buyer Agreement and/ or the Floor. Provided that the Promoter shall intimate the Applicant about such termination at least thirty days prior to such termination. The Interest liability accrued till the termination of the said Floor shall remain payable by the Applicant and the Promoter shall be entitled to recover the same from the Applicant through legally permitted means.',
          margin: [10, 0, 0, 15],
        },
        {
          text: 'iii.       Further, in the event of any other breach/ default by the Applicant of the terms and conditions of the Application Form/ Floor Buyer Agreement, the Promoter shall be entitled to cancel the Application Form/ terminate the Floor Buyer Agreement by giving a notice of 30 (thirty) days to the Applicant to rectify the breach/ default, failing which the Application Form/ Floor Buyer Agreement shall stand cancelled/ terminated. In the event of such cancellation/ termination, the Promoter shall be entitled to forfeit the Booking Amount and interest component on delayed payment (payable by the Applicant for breach and non-payment of any due payable to the Promoter) along with all the charges paid towards taxes, levies, govt. dues, interest, penalty, cess, duties to the concerned department/ authority in respect of the said Floor, as on the date of cancellation/ termination, and refund the balance, if any without any interest, as the case may be. The rate of interest payable by the Applicant(s) to the Promoter shall be the rate of Interest as specified in the Rules. It is provided hereunder that the aforesaid balance amount shall be paid by the Promoter to the Applicant within 90 (ninety) days of such cancellation/ termination; the Promoter shall stand discharged of any liability towards the Applicant(s) upon such cancellation/ termination; and the Applicant shall have no right, claim or interest against the Promoter in connection with the Application/ Floor Buyer Agreement and/ or the Floor.',
          margin: [10, 0, 0, 15],
        },
        {
          text: '32. Floor Buyer Agreement to supersede Application',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'It is specifically understood by the Applicant(s) that upon execution, the terms & conditions as set out in the Floor Buyer Agreement shall supersede the terms and conditions as set out herein.',
          margin: [10, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 26 END =============
        // ============= PAGE 27 START =============
        {
          text: '33. Broker Transactions',
          bold: true,
          margin: [0, 20, 0, 10],
        },
        {
          text: 'In the event that the sale transaction has been conducted through an estate agent/ consultant/ broker appointed by the Applicant(s), the Applicant(s) agree(s) that the Promoter is not and shall at no point be held responsible in any manner for any representations, assurances and/ or warranties made by such estate agent/ consultant/ broker with regard to the Floor and/ or Project. Further, it shall be the responsibility of the Applicant(s) to ensure that such estate agent/ consultant/ broker appointed by him/ her/ them holds a valid registration/ license under applicable laws.',
          margin: [10, 0, 0, 20],
        },
        {
          text: 'I/We have fully read and understood the abovementioned terms and conditions and agree to abide by the same. I/We understand that the terms and conditions given above are of indicative nature with a view to acquaint me/us with the terms and conditions as comprehensively set out in the Floor Buyer Agreement which shall supersede the terms and conditions set out in this Application.',
          margin: [0, 0, 0, 40],
        },
        {
          text: '',
          margin: [0, 0, 0, 40],
        },
        {
          columns: [
            {
              width: '30%',
              stack: [
                {
                  text: '',
                  background: 'yellow',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Sole/ First Applicant',
                  margin: [0, 0, 0, 0],
                },
              ],
            },
            {
              width: '5%',
              text: '',
            },
            {
              width: '30%',
              stack: [
                {
                  text: '',
                  background: 'yellow',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Second Applicant (if any)',
                  margin: [0, 0, 0, 0],
                },
              ],
            },
          ],
          margin: [0, 0, 0, 30],
        },
        {
          columns: [
            {
              width: '30%',
              stack: [
                {
                  text: '',
                  background: 'yellow',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Third Applicant (if any)',
                  margin: [0, 0, 0, 0],
                },
              ],
            },
          ],
          margin: [0, 0, 0, 40],
        },
        {
          columns: [
            {
              width: '40%',
              text: 'Place: ________________',
            },
            {
              width: '60%',
              text: 'Date: ________________',
            },
          ],
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Disclaimer:',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'While every reasonable care and precaution has been taken in preparing this application form by the Promoter, the right to add/delete any of the Terms & Conditions, specifications, facilities/amenities as may be required is reserved and the same shall be as intimated from time to time and do not form part of this Application Form.',
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 27 END =============
        // ============= PAGE 28 START =============
        {
          text: 'FOR OFFICE USE ONLY',
          bold: true,
          alignment: 'center',
          fontSize: 14,
          margin: [0, 20, 0, 20],
        },
        {
          table: {
            widths: ['40%', '60%'],
            body: [
              [
                { text: 'Application Form Dated', margin: [5, 5, 5, 5] },
                {
                  text: 'Received from Mr./Mrs./Ms./M/s.',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  stack: [
                    { text: '*Project Name', margin: [5, 5, 5, 0] },
                    {
                      text: '(*Please Tick whichever is',
                      italics: true,
                      fontSize: 10,
                      margin: [5, 0, 5, 0],
                    },
                    {
                      text: 'applicable)',
                      italics: true,
                      fontSize: 10,
                      margin: [5, 0, 5, 5],
                    },
                  ],
                },
                {
                  stack: [
                    {
                      columns: [
                        {
                          text: 'Windsong Residences – 1',
                          width: '80%',
                          margin: [5, 5, 5, 5],
                        },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                    {
                      columns: [
                        {
                          text: 'Windsong Residences – 2',
                          width: '80%',
                          margin: [5, 5, 5, 5],
                        },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                  ],
                },
              ],
              [
                {
                  stack: [
                    { text: 'Unit No.:', margin: [5, 5, 5, 0] },
                    {
                      text: '(Independent residential floor)',
                      italics: true,
                      fontSize: 10,
                      margin: [5, 0, 5, 5],
                    },
                  ],
                },
                { text: 'XXXXX', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Floor', margin: [5, 5, 5, 5] },
                { text: 'XXXXX', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Plot No. ("Said Plot")', margin: [5, 5, 5, 5] },
                { text: 'XXXXX', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Block No.', margin: [5, 5, 5, 5] },
                { text: 'XXXXX', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Carpet Area', margin: [5, 5, 5, 5] },
                {
                  columns: [
                    {
                      text: 'Square Feet/ XXX',
                      width: '50%',
                      margin: [5, 5, 5, 5],
                    },
                    {
                      text: 'Square Meters XXXXX',
                      width: '50%',
                      margin: [5, 5, 5, 5],
                    },
                  ],
                },
              ],
              [
                { text: 'Exclusive Right to Use', margin: [5, 5, 5, 5] },
                {
                  stack: [
                    {
                      columns: [
                        {
                          text: 'Parking No(s).',
                          width: '50%',
                          margin: [5, 5, 5, 5],
                        },
                        { text: 'XXXXX', width: '50%', margin: [5, 5, 5, 5] },
                      ],
                    },
                    {
                      columns: [
                        {
                          text: 'On Terrace',
                          width: '50%',
                          margin: [5, 5, 5, 5],
                        },
                        {
                          text: 'Square Feet/ XXXXX',
                          width: '50%',
                          margin: [5, 5, 5, 5],
                        },
                      ],
                    },
                    {
                      columns: [
                        {
                          text: 'Deck No. XXXXX',
                          width: '50%',
                          margin: [5, 5, 5, 5],
                        },
                        {
                          text: 'Square Meters XXXXX',
                          width: '50%',
                          margin: [5, 5, 5, 5],
                        },
                      ],
                    },
                    {
                      columns: [
                        {
                          text: 'In the Basement',
                          width: '50%',
                          margin: [5, 5, 5, 5],
                        },
                        {
                          text: 'Square Feet XXXXX',
                          width: '50%',
                          margin: [5, 5, 5, 5],
                        },
                      ],
                    },
                    {
                      columns: [
                        {
                          text: 'Store No. XXXXX',
                          width: '50%',
                          margin: [5, 5, 5, 5],
                        },
                        {
                          text: 'Square Meters XXXXX',
                          width: '50%',
                          margin: [5, 5, 5, 5],
                        },
                      ],
                    },
                  ],
                },
              ],
              [
                {
                  text: '(The above details are tentative. Final details will be confirmed by the Promoter at the time of offer of possession.)',
                  fontSize: 10,
                  italics: true,
                  colSpan: 2,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                {
                  stack: [
                    {
                      text: '*Payment Plan (*Please Tick',
                      margin: [5, 5, 5, 0],
                    },
                    {
                      text: 'whichever is applicable)',
                      italics: true,
                      fontSize: 10,
                      margin: [5, 0, 5, 5],
                    },
                  ],
                },
                {
                  stack: [
                    {
                      columns: [
                        {
                          text: 'Construction Linked',
                          width: '80%',
                          margin: [5, 5, 5, 5],
                        },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                    {
                      columns: [
                        {
                          text: 'Development Linked',
                          width: '80%',
                          margin: [5, 5, 5, 5],
                        },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                  ],
                },
              ],
              [
                {
                  stack: [
                    {
                      text: '*Purpose (*Please Tick whichever is',
                      margin: [5, 5, 5, 0],
                    },
                    {
                      text: 'applicable)',
                      italics: true,
                      fontSize: 10,
                      margin: [5, 0, 5, 5],
                    },
                  ],
                },
                {
                  stack: [
                    {
                      columns: [
                        {
                          text: 'First/ Present Home',
                          width: '80%',
                          margin: [5, 5, 5, 5],
                        },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                    {
                      columns: [
                        {
                          text: 'Second Home',
                          width: '80%',
                          margin: [5, 5, 5, 5],
                        },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                    {
                      columns: [
                        {
                          text: 'Investment',
                          width: '80%',
                          margin: [5, 5, 5, 5],
                        },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                    {
                      columns: [
                        { text: 'Other', width: '80%', margin: [5, 5, 5, 5] },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                  ],
                },
              ],
              [
                { text: 'Total Price', margin: [5, 5, 5, 5] },
                {
                  stack: [
                    {
                      columns: [
                        { text: 'Rs.', width: '10%', margin: [5, 5, 5, 5] },
                        { text: 'XXXXX', width: '35%', margin: [5, 5, 5, 5] },
                        { text: '/-', width: '15%', margin: [5, 5, 5, 5] },
                        { text: 'XXXX', width: '15%', margin: [5, 5, 5, 5] },
                        { text: 'only', width: '25%', margin: [5, 5, 5, 5] },
                      ],
                    },
                  ],
                },
              ],
              [
                { text: 'Booking', margin: [5, 5, 5, 5] },
                {
                  stack: [
                    {
                      columns: [
                        { text: 'Direct', width: '80%', margin: [5, 5, 5, 5] },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                    {
                      columns: [
                        { text: 'Broker', width: '80%', margin: [5, 5, 5, 5] },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                  ],
                },
              ],
            ],
          },
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 28 END =============
        // ============= PAGE 29 START =============
        {
          table: {
            widths: ['40%', '60%'],
            body: [
              [
                { text: '', margin: [5, 5, 5, 5] },
                { text: 'Name of Broker', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Payment Mode', margin: [5, 5, 5, 5] },
                {
                  stack: [
                    {
                      columns: [
                        {
                          text: 'Demand Draft',
                          width: '80%',
                          margin: [5, 5, 5, 5],
                        },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                    {
                      columns: [
                        { text: 'Cheque', width: '80%', margin: [5, 5, 5, 5] },
                        { text: '(    )', width: '20%', margin: [5, 5, 5, 5] },
                      ],
                    },
                  ],
                },
              ],
              [
                { text: '', margin: [5, 5, 5, 5] },
                {
                  stack: [
                    { text: 'DD/ Cheque No. XXXXX', margin: [5, 5, 5, 0] },
                    { text: 'dated XXXXX', margin: [5, 0, 5, 0] },
                    { text: 'drawn on XXXXX', margin: [5, 0, 5, 0] },
                    { text: 'Rs. XXXXX', margin: [5, 0, 5, 5] },
                  ],
                },
              ],
              [
                { text: 'Payment Received by', margin: [5, 5, 5, 5] },
                { text: 'XXXXX', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  stack: [
                    { text: 'Place:________________', margin: [5, 5, 5, 0] },
                    { text: 'Date:________________', margin: [5, 5, 5, 5] },
                  ],
                },
                {
                  text: '(Authorized Personnel)',
                  alignment: 'right',
                  margin: [5, 20, 15, 5],
                },
              ],
            ],
          },
          margin: [0, 0, 0, 30],
        },
        {
          text: 'SCHEDULE-2',
          bold: true,
          alignment: 'center',
          fontSize: 14,
          margin: [0, 20, 0, 10],
        },
        {
          text: 'Total Price',
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'A.   Total Price*',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          text: '',
          background: 'yellow',
          margin: [0, 0, 0, 0],
        },
        {
          text: 'Rs.____________________________________________________________________(Rupees',
          background: 'yellow',
          margin: [0, 0, 0, 0],
        },
        {
          text: '_____________________________________________________________only)',
          background: 'yellow',
          margin: [0, 0, 0, 20],
        },
        {
          table: {
            widths: ['50%', '50%'],
            body: [
              [
                {
                  stack: [
                    {
                      text: 'Unit No.: _______________________',
                      margin: [5, 5, 5, 5],
                    },
                    {
                      text: 'Floor: _________________________',
                      margin: [5, 5, 5, 5],
                    },
                    {
                      text: 'Plot No.:________________________',
                      margin: [5, 5, 5, 5],
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: 'Rate of Floor per Square meter* XXXXX',
                      margin: [5, 5, 5, 5],
                    },
                    {
                      text: 'Rate of Floor per Square Feet* XXXXX',
                      margin: [5, 5, 5, 5],
                    },
                  ],
                },
              ],
              [
                { text: 'Unit Price (in Rupees)', margin: [5, 5, 5, 5] },
                { text: 'XXXXX', alignment: 'center', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'Applicable taxes and cesses payable by the Applicant (including GST payable at rate specified from time to time, which presently is 5%)',
                  margin: [5, 5, 5, 5],
                },
                { text: 'XXXXX', alignment: 'center', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'Total Price (in Rupees)',
                  margin: [5, 5, 5, 5],
                  bold: true,
                },
                {
                  text: 'XXXXX',
                  background: 'yellow',
                  alignment: 'center',
                  margin: [5, 5, 5, 5],
                },
              ],
            ],
          },
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Size of Floor:',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          columns: [
            { text: 'Carpet Area:', width: '20%', margin: [0, 0, 0, 0] },
            {
              text: 'Square Meters ( XXXXX',
              width: '45%',
              margin: [0, 0, 0, 0],
            },
            { text: 'Square Feet* XXXXX)', width: '35%', margin: [0, 0, 0, 0] },
          ],
          margin: [0, 0, 0, 10],
        },
        {
          text: 'Note: *1 Square Feet = 0.0929 Square Meters',
          italics: true,
          fontSize: 10,
          margin: [0, 0, 0, 0],
        },
        {
          text: '1 Square Meter = 10.764 Square Feet',
          italics: true,
          fontSize: 10,
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 29 END =============
        // ============= PAGE 30 START =============
        {
          text: 'Note:',
          bold: true,
          margin: [0, 20, 0, 10],
        },
        {
          ol: [
            {
              text: '*Total Price is inclusive of EDC, IDC, PLC (if applicable), GST, Electric/ Sewer Connection Charges, Power Back Up installation and Club Membership for 5 (five) years. However, the Total Price is exclusive of stamp duty, registration, documentation charges, IFMSD, maintenance charges, other charges as applicable etc. which shall be additionally payable by the Allottee(s) in accordance with the Payment Plan/ Plot Buyer Agreement and as per the demand raised by the Promoter/ concerned entity.',
              margin: [0, 0, 0, 10],
            },
            {
              text: 'It is clarified that the Total Price of the Floor does not include cost of construction of the building comprising the Club and/ or cost of land underneath the Club.',
              margin: [0, 0, 0, 10],
            },
            {
              text: 'Total Price is subject to change and the Promoter reserves the right to revise the Total Price without prior notice.',
              margin: [0, 0, 0, 20],
            },
          ],
        },
        {
          columns: [
            {
              width: '30%',
              stack: [
                {
                  text: '',
                  background: 'yellow',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Sole/ First Applicant',
                  margin: [0, 0, 0, 0],
                },
              ],
            },
            {
              width: '5%',
              text: '',
            },
            {
              width: '30%',
              stack: [
                {
                  text: '',
                  background: 'yellow',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Second Applicant (if any)',
                  margin: [0, 0, 0, 0],
                },
              ],
            },
          ],
          margin: [0, 0, 0, 30],
        },
        {
          columns: [
            {
              width: '30%',
              stack: [
                {
                  text: '',
                  background: 'yellow',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Third Applicant (if any)',
                  margin: [0, 0, 0, 0],
                },
              ],
            },
          ],
          margin: [0, 0, 0, 30],
        },
        {
          text: 'SCHEDULE 3',
          bold: true,
          alignment: 'center',
          fontSize: 14,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'Payment Plan*',
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 5],
        },
        {
          text: '(*Please tick whichever is applicable)',
          italics: true,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'A.   Construction Linked Payment Plan                                   [XXXXX]',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          table: {
            widths: ['60%', '40%'],
            body: [
              [
                { text: 'Milestones', margin: [5, 5, 5, 5], bold: true },
                {
                  text: 'Part/ (%) of "Total Price" Due',
                  margin: [5, 5, 5, 5],
                  bold: true,
                },
              ],
              [
                {
                  text: 'Application Money (on Application)',
                  margin: [5, 5, 5, 5],
                },
                { text: '9 Lakhs', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'Within 30 days of Application (Booking)',
                  margin: [5, 5, 5, 5],
                },
                {
                  text: 'Booking Amount (i.e.10% of Total Price) – (minus) 9 Lakhs paid earlier.',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Within 90 days of Application', margin: [5, 5, 5, 5] },
                { text: '15%', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'Completion of Building Structure for the Building in which the booked Unit is situated',
                  margin: [5, 5, 5, 5],
                },
                { text: '25%', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'Completion of internal plaster of the booked Unit',
                  margin: [5, 5, 5, 5],
                },
                { text: '10%', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'Completion of flooring of the booked Unit',
                  margin: [5, 5, 5, 5],
                },
                { text: '10%', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'On Application of OC for the Building in which the booked Unit is situated',
                  margin: [5, 5, 5, 5],
                },
                { text: '15%', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'On Offer of Possession (as intimated by the Promoter)',
                  margin: [5, 5, 5, 5],
                },
                { text: '15%', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Total', margin: [5, 5, 5, 5], bold: true },
                { text: '100%', margin: [5, 5, 5, 5], bold: true },
              ],
            ],
          },
          margin: [0, 0, 0, 20],
        },
        {
          text: 'B.   Down Payment Plan                                                      [XXXXX]',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          table: {
            widths: ['60%', '40%'],
            body: [
              [
                { text: 'Milestones', margin: [5, 5, 5, 5], bold: true },
                { text: 'Payment', margin: [5, 5, 5, 5], bold: true },
              ],
              [
                {
                  text: 'Application Money (on Application)',
                  margin: [5, 5, 5, 5],
                },
                { text: '9 Lakhs', margin: [5, 5, 5, 5] },
              ],
            ],
          },
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 30 END =============
        // ============= PAGE 31 START =============
        {
          table: {
            widths: ['60%', '40%'],
            body: [
              [
                {
                  text: 'Within 30 days of Application (Booking)',
                  margin: [5, 5, 5, 5],
                },
                {
                  text: 'Booking Amount (i.e.10% of Total Price) – (minus) 9 Lakhs paid earlier.',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Within 60 days of Application', margin: [5, 5, 5, 5] },
                { text: '80%', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'On Offer of Possession (as intimated by the Promoter)',
                  margin: [5, 5, 5, 5],
                },
                { text: '10%', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Total', margin: [5, 5, 5, 5], bold: true },
                { text: '100%', margin: [5, 5, 5, 5], bold: true },
              ],
            ],
          },
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Note:',
          bold: true,
          margin: [0, 0, 0, 10],
        },
        {
          ol: [
            {
              text: 'Stamp Duty and Registration Charges as applicable shall be borne and paid by the Applicant at the time of offer of possession.',
              margin: [0, 0, 0, 10],
            },
            {
              text: 'Holding Charges (if applicable) at the rate of Rs.10 per square foot per month of the area of the said Floor shall be payable.',
              margin: [0, 0, 0, 10],
            },
            {
              text: 'Interest Free Maintenance Security Deposit (IFMSD) at the rate of Rs.100/- per square foot of the carpet area of the Floor shall be paid by the Applicant at the time of offer of possession.',
              margin: [0, 0, 0, 20],
            },
          ],
        },
        {
          columns: [
            {
              width: '30%',
              stack: [
                {
                  text: '',
                  background: 'yellow',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Sole/ First Applicant',
                  margin: [0, 0, 0, 0],
                },
              ],
            },
            {
              width: '5%',
              text: '',
            },
            {
              width: '30%',
              stack: [
                {
                  text: '',
                  background: 'yellow',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Second Applicant (if any)',
                  margin: [0, 0, 0, 0],
                },
              ],
            },
          ],
          margin: [0, 0, 0, 30],
        },
        {
          columns: [
            {
              width: '30%',
              stack: [
                {
                  text: '',
                  background: 'yellow',
                  margin: [0, 0, 0, 5],
                },
                {
                  text: 'Signature of the Third Applicant (if any)',
                  margin: [0, 0, 0, 0],
                },
              ],
            },
          ],
          margin: [0, 0, 0, 30],
        },
        {
          text: 'SCHEDULE-4',
          bold: true,
          alignment: 'center',
          fontSize: 14,
          margin: [0, 20, 0, 10],
        },
        {
          text: 'Proposed Specifications inside the Independent Floor',
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          table: {
            widths: ['30%', '70%'],
            body: [
              [
                {
                  text: 'FAMILY LOUNGE/ DINING & DRAWING ROOM',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Wall', margin: [5, 5, 5, 5] },
                {
                  text: 'Acrylic Emulsion Paint/ Plastic Emulsion/ OBD',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Flooring', margin: [5, 5, 5, 5] },
                {
                  text: 'Imported Marble Flooring/ Anti-Skid Ceramic Tiles',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Ceiling', margin: [5, 5, 5, 5] },
                {
                  text: 'Acrylic Emulsion Paint/ Plastic Emulsion / OBD',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Electrical Appliances', margin: [5, 5, 5, 5] },
                { text: "Cassette/ Split AC's", margin: [5, 5, 5, 5] },
              ],
            ],
          },
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 31 END =============
        // ============= PAGE 32 START =============
        {
          table: {
            widths: ['30%', '70%'],
            body: [
              [
                { text: 'Storage Units & Cupboards', margin: [5, 5, 5, 5] },
                {
                  text: 'Modular Kitchen with Storage Units & Cabinets Fittings (Premium Brand)',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Fittings/ Fixtures', margin: [5, 5, 5, 5] },
                {
                  text: 'CP Fittings – ISI Mark (Premium Brand), Dual Bowl Stainless Steel Sink',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Electrical Appliances', margin: [5, 5, 5, 5] },
                {
                  text: 'Hob, Chimney, Oven, Microwave, Dishwasher, Refrigerator, Washing Machine (At Utility), Instant Geyser, Water Purifier, Exhaust Fan, LPG Storage (At Utility) With Connection till Hob',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  text: 'BALCONY',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Wall', margin: [5, 5, 5, 5] },
                { text: 'Stone Texture Paint', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Flooring', margin: [5, 5, 5, 5] },
                {
                  text: 'Stone Finish Tiles/ IPS/ Anti-Skid Ceramic Tiles',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Ceiling', margin: [5, 5, 5, 5] },
                { text: 'Exterior Grade Paint/ OBD', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Railings', margin: [5, 5, 5, 5] },
                {
                  text: 'Toughened Glass Railing/ MS Railing',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  text: 'TOILETS',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Wall', margin: [5, 5, 5, 5] },
                {
                  stack: [
                    {
                      text: 'Stone Cladding in Master Bedroom Toilet',
                      margin: [0, 0, 0, 5],
                    },
                    {
                      text: 'Vitrified Tiles in other Bedroom Toilets',
                      margin: [0, 0, 0, 0],
                    },
                  ],
                },
              ],
              [
                { text: 'Flooring', margin: [5, 5, 5, 5] },
                {
                  text: 'Imported Marble / Anti-Skid Ceramic Tiles/ Vitrified Tiles',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Counter', margin: [5, 5, 5, 5] },
                {
                  text: 'Imported Marble/ Synthetic Stone/ Granite',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Ceiling', margin: [5, 5, 5, 5] },
                {
                  text: 'Acrylic Emulsion Paint/ Pop False Ceiling/ OBD',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Wardrobe', margin: [5, 5, 5, 5] },
                {
                  text: 'Modular Wardrobe of Standard Make',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Fixture/ Accessories', margin: [5, 5, 5, 5] },
                {
                  text: 'Fixed Shower Partitions up to 7\'-0" Ht., Fixture of Standard Make',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Sanitaryware / CP Fitting', margin: [5, 5, 5, 5] },
                {
                  text: 'Wash Basin, Floor / Wall Mounted WC Of Standard Make, CP Fittings – ISI Mark',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  text: 'POWDER ROOM',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Wall', margin: [5, 5, 5, 5] },
                {
                  text: 'Stone/ Tile Cladding up to Ceiling Height',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Flooring', margin: [5, 5, 5, 5] },
                {
                  text: 'Imported Marble Flooring/ Anti-Skid Ceramic Tiles/Vitrified Tiles',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Counter', margin: [5, 5, 5, 5] },
                {
                  text: 'Marble/ Synthetic Stone/ Granite',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Ceiling', margin: [5, 5, 5, 5] },
                {
                  text: 'Acrylic Emulsion Paint/ Pop False Ceiling/ OBD',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Fixture/ Accessories', margin: [5, 5, 5, 5] },
                { text: 'Fixtures of Standard Make', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Sanitaryware / CP Fitting', margin: [5, 5, 5, 5] },
                {
                  text: 'Wash Basin, Floor / Wall Mounted WC of Standard Make, CP Fittings – ISI Mark',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  text: 'SERVANT ROOMS',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Flooring', margin: [5, 5, 5, 5] },
                { text: 'Anti-Skid Ceramic Tiles', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Walls & Ceiling', margin: [5, 5, 5, 5] },
                {
                  text: 'Acrylic Emulsion Paint/ Stone Texture Paint/ Oil Bound Distemper',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Toilet', margin: [5, 5, 5, 5] },
                {
                  text: 'Anti-Skid Ceramic Tiles - Flooring, Tiles on Walls, Conventional CP Fittings',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  text: 'Terrace',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Flooring', margin: [5, 5, 5, 5] },
                { text: 'Anti-Skid Ceramic Tiles', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Walls', margin: [5, 5, 5, 5] },
                {
                  text: 'Weatherproof Paint / Stone Texture Paint',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  text: 'DOORS & WINDOWS',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Main Door', margin: [5, 5, 5, 5] },
                {
                  text: 'Factory Fabricated Veneer Door & Painted Frame with Biometric Door Lock/ Teakwood',
                  margin: [5, 5, 5, 5],
                },
              ],
            ],
          },
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 32 END =============
        // ============= PAGE 33 START =============
        {
          table: {
            widths: ['30%', '70%'],
            body: [
              [
                { text: 'Internal Doors', margin: [5, 5, 5, 5] },
                {
                  text: 'Factory Fabricated Veneer Door & Painted Frame / both side Laminated Flush Doors',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'External Doors', margin: [5, 5, 5, 5] },
                {
                  text: 'Aluminum Powder Coated Frames/ UPVC with Toughened Glass / UPVC',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'External Windows', margin: [5, 5, 5, 5] },
                {
                  text: 'Aluminum Powder Coated Frames/ UPVC with Toughened Glass/ UPVC',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Toilet Windows', margin: [5, 5, 5, 5] },
                {
                  text: 'Aluminum Powder Coated Frames/ UPVC with Frosted Glass/ UPVC',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  text: 'ELECTRICAL WORKS',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Wiring', margin: [5, 5, 5, 5] },
                {
                  text: 'Copper Electrical Wiring – ISI Mark',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Lighting', margin: [5, 5, 5, 5] },
                {
                  text: 'Ceiling Light Fixtures in all Rooms',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Switches & Sockets', margin: [5, 5, 5, 5] },
                {
                  text: 'Modular Switches & Sockets – ISI Mark',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Home Automation', margin: [5, 5, 5, 5] },
                { text: 'Smart Switching', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Smart Security System', margin: [5, 5, 5, 5] },
                {
                  text: 'Video Door Phone from the Entrance Gate to Each Unit',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'CCTV', margin: [5, 5, 5, 5] },
                { text: 'Stilt Parking & Lift Landing', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Doorbell', margin: [5, 5, 5, 5] },
                {
                  stack: [
                    { text: 'Smart Door Ringbell', margin: [0, 0, 0, 5] },
                    {
                      text: 'Servant Bell from Kitchen to Servant Room',
                      margin: [0, 0, 0, 0],
                    },
                  ],
                },
              ],
              [
                { text: 'Wi-Fi/ Fiber', margin: [5, 5, 5, 5] },
                {
                  text: 'Provision for Cable for each unit',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Fans/ Exhaust Fan', margin: [5, 5, 5, 5] },
                {
                  text: 'Ceiling Fans – All Bedrooms, Exhaust Fan - Kitchen & Toilets',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Geyser', margin: [5, 5, 5, 5] },
                {
                  text: 'Geyser - All Bathrooms, Instant Geyser - Kitchen & Powder Room',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  text: 'PLUMBING',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Water Supply Piping', margin: [5, 5, 5, 5] },
                { text: 'CPVC', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Soil Waste Piping', margin: [5, 5, 5, 5] },
                { text: 'UPVC', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'COMMON FACILITIES AND FIXTURES',
                  colSpan: 2,
                  bold: true,
                  alignment: 'center',
                  margin: [5, 15, 5, 5],
                },
                {},
              ],
              [
                { text: 'POWER BACK-UP', margin: [5, 5, 5, 5], bold: true },
                {
                  stack: [
                    {
                      text: 'Back-Up Of 9 KVA for each Floor (For 456 sq. m. – Plot Area Type)',
                      margin: [0, 0, 0, 5],
                    },
                    {
                      text: 'Back-Up Of 8 KVA for each Floor (For 300 sq. m. – Plot Area Type)',
                      margin: [0, 0, 0, 0],
                    },
                  ],
                },
              ],
              [
                { text: 'SECURITY SYSTEM', margin: [5, 5, 5, 5], bold: true },
                {
                  text: 'CCTV in Parking, Ground Floor Entrance Lobby',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'LIFT', margin: [5, 5, 5, 5], bold: true },
                {
                  text: 'One Lift for each Plot – 8 Passenger Lift with Stilt + 6 Stops',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  text: 'Staircase',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Wall', margin: [5, 5, 5, 5] },
                { text: 'Stone Texture Paint', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Flooring', margin: [5, 5, 5, 5] },
                { text: 'Anti -Skid Ceramic Tiles', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Ceiling', margin: [5, 5, 5, 5] },
                {
                  text: 'Acrylic Emulsion Paint/ Pop Running Over Cement Plaster/ OBD',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'Miscellaneous', margin: [5, 5, 5, 5] },
                { text: 'MS Railing', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'Fittings/ Fixtures/ Appliances',
                  margin: [5, 5, 5, 5],
                },
                {
                  text: 'Surface Mounted Ceiling Down Lighters',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  text: 'STILT/PARKING/DRIVEWAY',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Wall', margin: [5, 5, 5, 5] },
                { text: 'Stone Texture Paint/ OBD', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Flooring', margin: [5, 5, 5, 5] },
                { text: 'Anti -Skid Ceramic Tiles', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Ceiling', margin: [5, 5, 5, 5] },
                { text: 'Acrylic Emulsion Paint/POP', margin: [5, 5, 5, 5] },
              ],
            ],
          },
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 33 END =============
        // ============= PAGE 34 START =============
        {
          table: {
            widths: ['30%', '70%'],
            body: [
              [
                {
                  text: 'GROUND FLOOR LOBBY',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Wall', margin: [5, 5, 5, 5] },
                { text: 'Stone Texture Paint', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Flooring', margin: [5, 5, 5, 5] },
                { text: 'Imported Marble Flooring', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Ceiling', margin: [5, 5, 5, 5] },
                {
                  text: 'Acrylic Emulsion Paint/ POP / OBD',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                {
                  text: 'BASEMENT',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Wall', margin: [5, 5, 5, 5] },
                { text: 'Stone Texture Paint/ OBD', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Flooring', margin: [5, 5, 5, 5] },
                { text: 'Vitrified Tiles', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Ceiling', margin: [5, 5, 5, 5] },
                { text: 'Acrylic Emulsion Paint/ OBD', margin: [5, 5, 5, 5] },
              ],
              [
                {
                  text: 'TERRACE',
                  colSpan: 2,
                  bold: true,
                  margin: [5, 5, 5, 5],
                },
                {},
              ],
              [
                { text: 'Wall', margin: [5, 5, 5, 5] },
                { text: 'Stone Texture Paint', margin: [5, 5, 5, 5] },
              ],
              [
                { text: 'Flooring', margin: [5, 5, 5, 5] },
                {
                  text: 'Vitrified/ Anti-Skid Ceramic Tiles',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'SOLAR PANEL', margin: [5, 5, 5, 5], bold: true },
                {
                  text: '1 KW Solar Panel for Common Area (for 456 sq. m. Plot Area Type) (On-Grid)',
                  margin: [5, 5, 5, 5],
                },
              ],
              [
                { text: 'DISCLAIMER', margin: [5, 5, 5, 5], bold: true },
                {
                  stack: [
                    {
                      text: 'Marble/ Granite being natural material has an inherent character of color and grain variation',
                      margin: [0, 0, 0, 5],
                    },
                    {
                      text: 'Specifications are indicative and are subject to change as decided by the Promoter in accordance with applicable laws',
                      margin: [0, 0, 0, 5],
                    },
                    {
                      text: 'The extent/number/variety of equipment/ appliances and their make/brand are tentative and liable to change at the sole discretion of the Promoter.',
                      margin: [0, 0, 0, 0],
                    },
                  ],
                },
              ],
            ],
          },
          margin: [0, 0, 0, 20],
        },
        {
          text: 'SCHEDULE-5',
          bold: true,
          alignment: 'center',
          fontSize: 14,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'Common Areas and Facilities of the Building',
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'List of common areas and facilities for use of the Applicant within the Building on the Said Plot',
          margin: [0, 0, 0, 15],
        },
        {
          ol: [
            { text: 'Staircase and mumty', margin: [0, 0, 0, 5] },
            { text: 'Lift Lobbies, lift and lift shaft', margin: [0, 0, 0, 5] },
            { text: 'Entrance Lobby at Stilt level', margin: [0, 0, 0, 5] },
            { text: 'Lift machine room (if any)', margin: [0, 0, 0, 5] },
            {
              text: 'Electrical room, guard room (if any)',
              margin: [0, 0, 0, 5],
            },
            { text: 'Terrace and services on terrace', margin: [0, 0, 0, 5] },
            {
              text: 'Set-back area on front side and rear side of the building,',
              margin: [0, 0, 0, 5],
            },
            {
              text: 'Driveway and stilt area except parking bays.',
              margin: [0, 0, 0, 5],
            },
            { text: 'Services at Stilt / ground level', margin: [0, 0, 0, 5] },
            { text: 'Services at basement (if any)', margin: [0, 0, 0, 5] },
            {
              text: 'Common Corridor in Basement (if any)',
              margin: [0, 0, 0, 5],
            },
          ],
        },
        {
          text: 'It is specifically made clear by the Promoter and agreed by the Applicant that this Application is limited and confined in its scope only to the independent residential Floor, amenities and facilities as described in this schedule on the Footprint of the Independent Floor/ Said Plot. It is understood and confirmed by the Applicant that all other land(s), areas, facilities and amenities outside the periphery / boundary of the Floor/ Said Plot or anywhere in the Project/ Colony are specifically excluded from the scope of this Application and the Applicant',
          margin: [0, 0, 0, 40],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 34 END =============
        // ============= PAGE 35 START =============
        {
          text: 'agrees that it shall have no ownership rights, title or interest in any manner whatsoever in such other lands, areas, facilities and amenities as these have been excluded from the scope of this Application for calculating the sale price.',
          margin: [0, 20, 0, 100],
        },
        {
          text: 'SCHEDULE-6',
          bold: true,
          alignment: 'center',
          fontSize: 14,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'Floor Plan',
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 40],
        },
        {
          text: 'XXXXX',
          background: 'yellow',
          margin: [0, 0, 0, 200],
        },
        {
          text: 'Applicant',
          bold: true,
          margin: [0, 0, 0, 0],
          background: 'yellow',
        },
        // ============= PAGE 35 END =============
      ] as Content[],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          decoration: 'underline',
        },
        subheader: {
          fontSize: 14,
          bold: true,
        },
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
      defaultStyle: {
        fontSize: 12,
        lineHeight: 1.2,
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
