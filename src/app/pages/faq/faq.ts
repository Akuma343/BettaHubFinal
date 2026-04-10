import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {

  faqs = [
    {
      question: 'How big should a betta fish tank be?',
      answer: 'A betta fish should be kept in at least a 5-gallon tank for proper swimming space and stable water conditions.',
      open: false
    },
    {
      question: 'Do betta fish need a heater?',
      answer: 'Yes, bettas are tropical fish and require water temperatures between 24–28°C to stay healthy.',
      open: false
    },
    {
      question: 'How often should I feed my betta fish?',
      answer: 'Feed your betta once or twice daily with small portions to avoid overfeeding.',
      open: false
    },
    {
      question: 'Can betta fish live with other fish?',
      answer: 'Bettas are territorial and should generally be kept alone unless in carefully planned community tanks.',
      open: false
    },
    {
      question: 'How often should I clean the tank?',
      answer: 'Perform partial water changes (25–30%) once a week to maintain clean water.',
      open: false
    },
    {
      question: 'Why is my betta fish not moving much?',
      answer: 'It could be due to stress, poor water conditions, or illness. Check water parameters first.',
      open: false
    },
    {
      question: 'What do betta fish eat?',
      answer: 'They eat high-protein pellets, flakes, and occasional treats like bloodworms or brine shrimp.',
      open: false
    },
    {
      question: 'Why are my betta’s fins torn?',
      answer: 'This may be caused by sharp decorations, fin rot, or stress. Inspect the tank and water quality.',
      open: false
    },
    {
      question: 'Do betta fish need a filter?',
      answer: 'Yes, but use a gentle filter since strong currents can stress bettas.',
      open: false
    },
    {
      question: 'How long do betta fish live?',
      answer: 'With proper care, bettas typically live 2–4 years.',
      open: false
    }
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
