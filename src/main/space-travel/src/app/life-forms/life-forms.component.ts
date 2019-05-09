import {Component, OnInit} from '@angular/core';
import {LifeFormService} from '../service/life-form/life-form.service';
import {LifeForm} from '../entity/LifeForm';

@Component({
  selector: 'app-life-forms',
  templateUrl: './life-forms.component.html',
  styleUrls: ['./life-forms.component.css']
})
export class LifeFormsComponent implements OnInit {
  private forms: Array<any>;
  private latestLifeForm: LifeForm;

  constructor(private lifeFormService: LifeFormService) {
  }

  ngOnInit() {
    this.getAllForms();
  }

  getAllForms() {
    this.lifeFormService.getAll().subscribe(d => {
      this.forms = d;
    });
  }

  showLatest() {
    this.lifeFormService.getLatest().subscribe(data => {
      this.latestLifeForm = data;
    });
    this.getAllForms();
  }

}
