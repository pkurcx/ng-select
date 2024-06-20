import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'bindings-default-example',
    templateUrl: './bindings-default-example.component.html',
    styleUrls: ['./bindings-default-example.component.scss'],
    standalone: true,
    imports: [NgSelectComponent, FormsModule, JsonPipe]
})
export class BindingsDefaultExampleComponent implements OnInit {

    defaultBindingsList = [
        { value: 1, label: 'Vilnius' },
        { value: 2, label: 'Kaunas' },
        { value: 3, label: 'Pavilnys', disabled: true }
    ];

    selectedCity = null;

    ngOnInit() {
        this.selectedCity = this.defaultBindingsList[0];
    }
}
