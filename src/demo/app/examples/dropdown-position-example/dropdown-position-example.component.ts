import { Component, OnInit } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'dropdown-position-example',
    templateUrl: './dropdown-position-example.component.html',
    styleUrls: ['./dropdown-position-example.component.scss'],
    standalone: true,
    imports: [NgSelectComponent]
})
export class DropdownPositionExampleComponent implements OnInit {

    cities = [
        { value: 1, label: 'Vilnius' },
        { value: 2, label: 'Kaunas' },
        { value: 3, label: 'Pavilnys' }
    ];

    ngOnInit() {
    }
}
