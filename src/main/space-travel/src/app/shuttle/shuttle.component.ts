import {Component, OnInit} from '@angular/core';
import {Shuttle} from '../entity/Shuttle';
import {ShuttleService} from '../service/shuttle/shuttle.service';

@Component({
  selector: 'app-shuttle',
  templateUrl: './shuttle.component.html',
  styleUrls: ['./shuttle.component.css']
})
export class ShuttleComponent implements OnInit {

  private shuttles: Array<Shuttle>;

  constructor(private shuttleService: ShuttleService) {
  }

  ngOnInit() {
    this.getShuttles();
  }

  getShuttles() {
    this.shuttleService.getShuttle().subscribe(data => {
      this.shuttles = data;
    });
  }

  assignLatest() {
    this.shuttleService.assignLatest().subscribe(() =>
      this.getShuttles()
    );
  }
}
