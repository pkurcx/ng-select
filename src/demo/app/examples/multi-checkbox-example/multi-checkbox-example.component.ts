import { Component, OnInit } from '@angular/core';
import { DataService, Person } from '../data.service';
import { map } from 'rxjs/operators';
import { JsonPipe, UpperCasePipe } from '@angular/common';
import { NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'multi-checkbox-example',
    templateUrl: './multi-checkbox-example.component.html',
    styleUrls: ['./multi-checkbox-example.component.scss'],
    standalone: true,
    imports: [NgSelectComponent, FormsModule, NgOptgroupTemplateDirective, NgOptionTemplateDirective, UpperCasePipe, JsonPipe]
})
export class MultiCheckboxExampleComponent implements OnInit {

    people: Person[] = [];
    selectedPeople = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getPeople()
            .pipe(map(x => x.filter(y => !y.disabled)))
            .subscribe((res) => {
                this.people = res;
                this.selectedPeople = [this.people[0].id, this.people[1].id];
            });
    }
}
