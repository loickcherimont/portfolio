import { Component } from '@angular/core';

type Experience = {
  role: string;
  /** Optional precision shown next to the role (e.g. "(Bénévolat)"). */
  note?: string;
  company: string;
  period: string;
  /** Short mission summary. May contain <strong> tags, rendered via [innerHTML]. */
  description: string;
};

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  protected readonly experiences: Array<Experience> = [
    {
      role: 'Développeur Back-End Go(lang)',
      company: 'ENERGY-Lab · Saint-Denis de La Réunion',
      period: '01/2022 – 03/2022',
      description:
        "Conception d'une <strong>API REST</strong> en Go (Gin) avec base <strong>InfluxDB</strong>. API versionnée avec l'équipe d'ingénieur d'ENERGY-Lab sous <strong>Git / GitHub</strong>. Projet documentée avec <strong>Swagger UI (OpenAPI)</strong>.",
    },
    {
      role: 'Testeur QA',
      company: 'Accenture · Nantes / Saint-Herblain',
      period: '11/2022 – 10/2023',
      description:
        "Validation de <strong>tests fonctionnels E2E</strong> sur modems, analyse de performances via logs <strong>Wireshark</strong> et scripts <strong>Bash</strong>, qualification d'anomalies avec les équipes développement du client.",
    },
    {
      role: 'Développeur Web WordPress',
      note: '(Bénévolat)',
      company: 'CSC Alain Kabulo · Remote',
      period: "10/2025 – 07/2026",
      description:
        'Refonte du site associatif avec <strong>WordPress</strong>, optimisation <strong>SEO</strong> et performances, documentation technique.',
    },
  ];

  /** Key takeaways displayed in the "Ce que ces expériences m'ont apporté" card. */
  protected readonly takeaways: Array<string> = [
    'Rigueur et méthode acquises en contexte de test logiciel industriel',
    'Capacité à travailler en équipe et à documenter son travail',
    'Goût pour la qualité et la fiabilité du code',
  ];
}
