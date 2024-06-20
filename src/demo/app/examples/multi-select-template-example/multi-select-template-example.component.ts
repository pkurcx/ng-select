import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { AsyncPipe } from '@angular/common';
import { NgSelectComponent, NgLabelTemplateDirective, NgOptionTemplateDirective } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'multi-select-template-example',
    templateUrl: './multi-select-template-example.component.html',
    styleUrls: ['./multi-select-template-example.component.scss'],
    standalone: true,
    imports: [NgSelectComponent, FormsModule, NgLabelTemplateDirective, NgOptionTemplateDirective, AsyncPipe]
})
export class MultiSelectTemplateExampleComponent implements OnInit {

    githubUsers$: Observable<any[]>;
    selectedUsers = ['anjmao'];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.githubUsers$ = this.dataService.getGithubAccounts('anjm');
    }
}
