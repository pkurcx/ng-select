import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'append-to-example',
    templateUrl: './append-to-example.component.html',
    styleUrls: ['./append-to-example.component.scss'],
    standalone: true,
    imports: [
        NgSelectComponent,
        FormsModule,
        AsyncPipe,
    ],
//     encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppendToExampleComponent implements OnInit {

    people: any = [];
    selected: any;
    selected2: any;
    selected3: any;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.people = this.dataService.getPeople();
    }

}
