import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgHeaderTemplateDirective, NgFooterTemplateDirective } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'template-header-footer-example',
    templateUrl: './template-header-footer-example.component.html',
    styleUrls: ['./template-header-footer-example.component.scss'],
    standalone: true,
    imports: [NgSelectComponent, FormsModule, NgHeaderTemplateDirective, NgFooterTemplateDirective]
})
export class TemplateHeaderFooterExampleComponent implements OnInit {

    people = [];
    selectedPeople = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getPeople().subscribe(items => {
            this.people = items;
        });
    }

    selectAll() {
        this.selectedPeople = this.people.map(x => x.name);
    }

    unselectAll() {
        this.selectedPeople = [];
    }

}
