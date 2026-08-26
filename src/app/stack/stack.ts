import { Component } from '@angular/core';

type Badge = { label: string; kind?: 'featured' | 'standard' | 'soft' };

@Component({
  selector: 'app-stack',
  templateUrl: './stack.html',
})
export class Stack {
  protected readonly backendBadges: Badge[] = [
    { label: 'Java 21', kind: 'featured' },
    { label: 'Spring Boot', kind: 'featured' },
    { label: 'Spring Security' },
    { label: 'Spring Data JPA (Hibernate)' },
    { label: 'Spring Web MVC' },
  ];

  protected readonly dataBadges: Badge[] = [{ label: 'SQL (PostgreSQL)' }];

  protected readonly devopsBadges: Badge[] = [
    { label: 'Docker / Docker Compose' },
    { label: 'Git / GitHub' },
  ];

  protected readonly testingBadges: Badge[] = [
    { label: 'JUnit 5 / AssertJ' },
    { label: 'Mockito' },
    { label: 'Postman' },
  ];

  protected readonly iaBadges: Badge[] = [{ label: 'OpenCode (agent de code)' }];

  protected readonly frontendBadges: Badge[] = [
    { label: 'TypeScript' },
    { label: 'Angular' },
    { label: 'Bootstrap 5' },
  ];

  protected readonly softSkillBadges: Badge[] = [
    { label: 'Curiosité', kind: 'soft' },
    { label: 'Esprit analytique', kind: 'soft' },
    { label: 'Persévérance', kind: 'soft' },
  ];

  /** Returns the Bootstrap classes for a badge. Default (empty badge): outlined. */
  protected badgeClass(kind?: Badge['kind']): string {
    switch (kind) {
      case 'featured':
        return 'text-bg-primary';
      case 'soft':
        return 'text-bg-secondary';
      default:
        return 'border text-body';
    }
  }
}
