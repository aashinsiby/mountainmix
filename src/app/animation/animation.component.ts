import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css'
})
export class AnimationComponent implements OnInit {
  ngOnInit() {
    gsap.from('.box', {
      scrollTrigger: {
        trigger: '.section',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: true
      },
      x: 150,
      rotation:360,
      borderRadius: '100%',
      scale: 1.5,
   
      ease: 'power2.out'
    });
  }

}
