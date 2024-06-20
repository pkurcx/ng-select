import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'tags-default-example',
    templateUrl: './tags-default-example.component.html',
    styleUrls: ['./tags-default-example.component.scss'],
    standalone: true,
    imports: [NgSelectComponent, FormsModule, JsonPipe]
})
export class TagsDefaultExampleComponent implements OnInit {

    selectedCompany;

    ngOnInit() {
    }
}
