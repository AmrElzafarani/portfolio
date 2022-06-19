import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { scrollAnimation } from '../shared/animations';
import { ScrollAnimationComponent } from '../shared/scroll-animation.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [scrollAnimation]

})
export class ProjectsComponent extends ScrollAnimationComponent implements OnInit {

  constructor(
    private http: HttpClient,
    _el:ElementRef,
    cdRef: ChangeDetectorRef
    ) { 
      super(_el, cdRef)
    }

  projects: any = [];

  ngOnInit(): void {
    this.http.get('./assets/json/projects.json').subscribe((project) => {
      this.projects = project;
      console.log(project)
    })
  }

}
