import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'tags-custom-example',
    templateUrl: './tags-custom-example.component.html',
    styleUrls: ['./tags-custom-example.component.scss'],
    standalone: true,
    imports: [NgSelectComponent, FormsModule, JsonPipe]
})
export class TagsCustomExampleComponent implements OnInit {

    selectedCompanies;
    companies: any[] = [];
    companiesNames = ['Uber', 'Microsoft', 'Flexigen'];

    ngOnInit() {
        this.companiesNames.forEach((c, i) => {
            this.companies.push({ id: i, name: c });
        });
    }

    addTagFn(name) {
        return { name: name, tag: true };
    }
}
