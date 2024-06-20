import { Component, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { NgTypeToSearchTemplateDirective, NgNotFoundTemplateDirective, NgLoadingTextTemplateDirective } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'template-display-example',
    templateUrl: './template-display-example.component.html',
    styleUrls: ['./template-display-example.component.scss'],
    standalone: true,
    imports: [NgSelectComponent, FormsModule, NgTypeToSearchTemplateDirective, NgNotFoundTemplateDirective, NgLoadingTextTemplateDirective]
})
export class TemplateDisplayExampleComponent implements OnInit {

    peopleTypeahead = new EventEmitter<string>();
    serverSideFilterItems = [];
    selectedPeople;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.serverSideSearch();
    }

    private serverSideSearch() {
        this.peopleTypeahead.pipe(
            distinctUntilChanged(),
            debounceTime(300),
            switchMap(term => this.dataService.getPeople(term))
        ).subscribe(x => {
            this.serverSideFilterItems = x;
        }, (err) => {
            console.log(err);
            this.serverSideFilterItems = [];
        });
    }

}
