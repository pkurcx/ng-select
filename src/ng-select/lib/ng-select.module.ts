import { NgModule } from '@angular/core';
import { NgDropdownPanelComponent } from './ng-dropdown-panel.component';
import { NgOptionComponent } from './ng-option.component';
import { NgSelectComponent } from './ng-select.component';
import {
    NgFooterTemplateDirective,
    NgHeaderTemplateDirective,
    NgItemLabelDirective,
    NgLabelTemplateDirective,
    NgLoadingSpinnerTemplateDirective,
    NgLoadingTextTemplateDirective,
    NgMultiLabelTemplateDirective,
    NgNotFoundTemplateDirective,
    NgOptgroupTemplateDirective,
    NgOptionTemplateDirective,
    NgTagTemplateDirective,
    NgTypeToSearchTemplateDirective
} from './ng-templates.directive';

@NgModule({
    imports: [
    NgDropdownPanelComponent,
    NgOptionComponent,
    NgSelectComponent,
    NgOptgroupTemplateDirective,
    NgOptionTemplateDirective,
    NgLabelTemplateDirective,
    NgMultiLabelTemplateDirective,
    NgHeaderTemplateDirective,
    NgFooterTemplateDirective,
    NgNotFoundTemplateDirective,
    NgTypeToSearchTemplateDirective,
    NgLoadingTextTemplateDirective,
    NgTagTemplateDirective,
    NgLoadingSpinnerTemplateDirective,
    NgItemLabelDirective
    ],
    exports: [
    NgSelectComponent,
    NgOptionComponent,
    NgOptgroupTemplateDirective,
    NgOptionTemplateDirective,
    NgLabelTemplateDirective,
    NgMultiLabelTemplateDirective,
    NgHeaderTemplateDirective,
    NgFooterTemplateDirective,
    NgNotFoundTemplateDirective,
    NgTypeToSearchTemplateDirective,
    NgLoadingTextTemplateDirective,
    NgTagTemplateDirective,
    NgLoadingSpinnerTemplateDirective
    ],
    })
export class NgSelectModule {}
