import { Component, OnInit } from '@angular/core';
import { NgTagTemplateDirective } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'tags-backend-example',
    templateUrl: './tags-backend-example.component.html',
    styleUrls: ['./tags-backend-example.component.scss'],
    standalone: true,
    imports: [NgSelectComponent, FormsModule, NgTagTemplateDirective]
})
export class TagsBackendExampleComponent implements OnInit {

    selectedCompanies;
    companies: any[] = [];
    loading = false;
    companiesNames = ['Uber', 'Microsoft', 'Flexigen'];

    ngOnInit() {
        this.companiesNames.forEach((c, i) => {
            this.companies.push({ id: i, name: c });
        });
    }

    addTagPromise(name) {
        return new Promise((resolve) => {
            this.loading = true;
            // Simulate backend call.
            setTimeout(() => {
                resolve({ id: 5, name: name, valid: true });
                this.loading = false;
            }, 1000);
        })
    }
}
