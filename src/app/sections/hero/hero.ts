import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Button } from "../../components/button/button";

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, Button],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  private readonly data = inject(PortfolioDataService);
  readonly info = signal<{ name: string; github: string; linkedin: string } | null>(null);
  readonly avatarSrc = '/AyushSoam.jpeg';

  constructor() {
    this.info.set(this.data.getPersonalInfo());
  }
}
