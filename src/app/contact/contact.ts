import { Component } from '@angular/core';

type ContactCard = {
  icon: string;
  label: string;
  href: string;
  detail: string;
  testId: string;
  /** Security: when true, adds `target="_blank"` + `rel="noopener noreferrer"` to
   * the rendered link. Without these tokens, the opened tab can access
   * `window.opener` and redirect this portfolio to a phishing clone
   * (reverse tabnapping). `noopener` cuts that link, `noreferrer` hides
   * the referrer. */
  external?: boolean;
};

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly cards: ContactCard[] = [
    {
      icon: 'bi bi-envelope-fill',
      label: 'Email',
      href: 'mailto:[A COMPLETER AVEC EMAIL]',
      detail: '[A COMPLETER AVEC EMAIL]',
      testId: 'contact__card-email',
    },
    {
      icon: 'bi bi-linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/[A COMPLETER AVEC LINKEDIN]',
      detail: '[A COMPLETER AVEC LINKEDIN]',
      testId: 'contact__card-linkedin',
      external: true,
    },
    {
      icon: 'bi bi-telephone-fill',
      label: 'Téléphone',
      href: 'tel:[A COMPLETER AVEC TEL]',
      detail: '[A COMPLETER AVEC TEL]',
      testId: 'contact__card-phone',
    },
  ];
}
