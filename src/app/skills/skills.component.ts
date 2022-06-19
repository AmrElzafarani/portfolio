import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScrollAnimationComponent } from '../shared/scroll-animation.component';
import { scrollAnimation } from '../shared/animations';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [scrollAnimation]
})
export class SkillsComponent extends ScrollAnimationComponent implements OnInit {

  skills: any = [];
  constructor(
    private http: HttpClient,
    _el:ElementRef,
    cdRef:ChangeDetectorRef
    ) {
    super(_el, cdRef);
   }

  ngOnInit(): void {
    this.http.get('./assets/json/skills.json').subscribe(skills => {
      this.skills = skills;
    });
  }

}
