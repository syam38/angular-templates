import { Component, VERSION, OnInit, Input } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  comments: any;
  @Input() data: any;
  constructor(private service: CommentsService) {}

  ngOnInit() {
    this.service.getData().subscribe((res) => {
      this.comments = res;
    });
  }
}
