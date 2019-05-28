/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NodeBase } from '../../form-entry/form-factory/form-node';
import { AfeFormGroup } from '../../abstract-controls-extension/afe-form-group';
import { DataSources } from '../../form-entry/data-sources/data-sources';
import { EncounterViewerService } from '../encounter-viewer.service';
var EncounterViewerComponent = /** @class */ (function () {
    function EncounterViewerComponent(encounterViewerService, dataSources) {
        this.encounterViewerService = encounterViewerService;
        this.dataSources = dataSources;
    }
    Object.defineProperty(EncounterViewerComponent.prototype, "node", {
        set: /**
         * @param {?} rootNode
         * @return {?}
         */
        function (rootNode) {
            this.rootNode = rootNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncounterViewerComponent.prototype, "schema", {
        set: /**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            this._schema = schema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncounterViewerComponent.prototype, "encounter", {
        set: /**
         * @param {?} enc
         * @return {?}
         */
        function (enc) {
            this.enc = enc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncounterViewerComponent.prototype, "form", {
        set: /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            this.rootNode = form.rootNode;
            this._schema = form.schema;
            console.log(this.getQuestionNodes(this.traverse(this.rootNode)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pages
     * @return {?}
     */
    EncounterViewerComponent.prototype.getQuestionNodes = /**
     * @param {?} pages
     * @return {?}
     */
    function (pages) {
        /** @type {?} */
        var merged = [];
        /** @type {?} */
        var arrays = [];
        try {
            for (var pages_1 = tslib_1.__values(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
                var page = pages_1_1.value;
                arrays.push(page.page);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (pages_1_1 && !pages_1_1.done && (_a = pages_1.return)) _a.call(pages_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return merged.concat.apply([], arrays);
        var e_1, _a;
    };
    /**
     * @return {?}
     */
    EncounterViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.rootNode) {
        }
        if (this.rootNode && this.rootNode.question.extras
            && this.rootNode.question.renderingType === 'file') {
            this.fileDataSource =
                this.dataSources.dataSources[this.rootNode.question.dataSource];
        }
        else if (this.rootNode && this.rootNode.question.extras
            && this.rootNode.question.renderingType === 'remote-select') {
            this.remoteDataSource =
                this.dataSources.dataSources[this.rootNode.question.dataSource];
        }
        else {
            this.customDataSource = this.encounterViewerService;
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    EncounterViewerComponent.prototype.questionsAnswered = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var $answered = this.encounterViewerService.questionsAnswered(node);
        return $answered;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    EncounterViewerComponent.prototype.questionAnswered = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var answered = this.encounterViewerService.hasAnswer(node);
        return answered;
    };
    /**
     * @param {?} questionLabel
     * @return {?}
     */
    EncounterViewerComponent.prototype.checkForColon = /**
     * @param {?} questionLabel
     * @return {?}
     */
    function (questionLabel) {
        if (questionLabel.indexOf(':') === -1) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} o
     * @param {?=} type
     * @return {?}
     */
    EncounterViewerComponent.prototype.traverse = /**
     * @param {?} o
     * @param {?=} type
     * @return {?}
     */
    function (o, type) {
        /** @type {?} */
        var questions = [];
        if (o.children) {
            if (o.children instanceof Array) {
                /** @type {?} */
                var returned = this.repeatingGroup(o.children);
                return returned;
            }
            if (o.children instanceof Object) {
                for (var key in o.children) {
                    if (o.children.hasOwnProperty(key)) {
                        switch (o.children[key].question.renderingType) {
                            case 'page':
                                /** @type {?} */
                                var page = this.traverse(o.children[key]);
                                questions.push({ page: page });
                                break;
                            case 'section':
                                /** @type {?} */
                                var section = this.traverse(o.children[key]);
                                questions.push({ section: section });
                                break;
                            case 'group':
                                /** @type {?} */
                                var qs = this.traverse(o.children[key]);
                                questions.push({ node: o.children[key], question: o.children[key].question, groupMembers: qs });
                                break;
                            case 'repeating':
                                /** @type {?} */
                                var rep = this.repeatingGroup(o.children[key].children);
                                questions.push({ node: o.children[key], question: o.children[key].question, groupMembers: rep });
                                break;
                            default:
                                questions.push(o.children[key]);
                                break;
                        }
                    }
                }
            }
            else {
                console.log('Console.log', o);
            }
        }
        return questions;
    };
    /**
     * @param {?} nodes
     * @return {?}
     */
    EncounterViewerComponent.prototype.repeatingGroup = /**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        /** @type {?} */
        var toReturn = [];
        try {
            for (var nodes_1 = tslib_1.__values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                var node = nodes_1_1.value;
                toReturn.push({ question: node.question, groupMembers: this.traverse(node) });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return toReturn;
        var e_2, _a;
    };
    EncounterViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'encounter-viewer',
                    template: "<div class=\"viewer\">\n\n  <div *ngIf=\"rootNode.question.renderingType === 'form'\" class=\"form\">\n    <div *ngFor=\"let question of rootNode.question.questions; let i = index;\">\n      <div *ngIf=\"questionsAnswered(rootNode.children[question.key])\">\n        <div [attr.id]=\"'page'+i\" class=\"panel panel-default\">\n          <p class=\"page-label panel-heading text-primary\">{{question.label}}</p>\n          <div class=\"panel-body\">\n            <encounter-viewer [node]=\"rootNode.children[question.key]\" [schema]=\"_schema\" [parentComponent]=\"this\" [parentGroup]=\"rootNode.control\"></encounter-viewer>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"rootNode.question.renderingType === 'page'\" class=\"page\">\n    <encounter-viewer *ngFor=\"let question of rootNode.question.questions\" [parentComponent]=\"this\" [node]=\"rootNode.children[question.key]\"\n      [schema]=\"_schema\" [parentGroup]=\"parentGroup\"></encounter-viewer>\n  </div>\n\n\n  <div *ngIf=\"rootNode.question.renderingType === 'section'&& questionsAnswered(rootNode)\"\n    class=\"section\">\n    <div class=\"panel panel-primary\">\n      <p class=\"panel-heading section-label\">{{ rootNode.question.label }}</p>\n    </div>\n    <div *ngFor=\"let question of rootNode.question.questions\">\n      <encounter-viewer [node]=\"rootNode.children[question.key]\" [parentComponent]=\"this\" [schema]=\"_schema\" [parentGroup]=\"parentGroup\"></encounter-viewer>\n    </div>\n  </div>\n\n  <!--Leaf Controls-->\n  <div style=\"margin-left:10px;\">\n  <form *ngIf=\"rootNode.question.controlType === 0\" [formGroup]=\"parentGroup\">\n    <div *ngIf=\"rootNode.control.value\">\n    <div class=\"question-answer\">\n      <label *ngIf=\"rootNode.question.label\" [attr.for]=\"rootNode.question.key\" style=\"font-weight:400;\">\n          {{ rootNode.question.label }}\n      </label>\n      <span *ngIf=\"checkForColon(rootNode.question.label)\">:</span>\n      <div [ngSwitch]=\"rootNode.question.renderingType\" style=\"display:inline-block; font-weight:bold;\">\n          <div *ngSwitchCase=\" 'file' \">\n            <file-preview [formControlName]=\"rootNode.question.key\" [id]=\"rootNode.question.key + 'id'\" [dataSource]=\"fileDataSource\"></file-preview>\n          </div>\n          <div *ngSwitchCase=\"'remote-select'\">\n            <remote-answer [formControlName]=\"rootNode.question.key\" [id]=\"rootNode.question.key + 'id'\" [dataSource]=\"remoteDataSource\"></remote-answer>\n          </div>\n          <div *ngSwitchDefault style=\"display:inline-block\">\n              <question-control [schema]=\"_schema\" [value]=\"rootNode.control.value\" [dataSource]=\"customDataSource\"></question-control>\n            </div>\n      </div>\n     \n    </div>\n    </div>\n  </form>\n</div>\n\n  <!--Array Controls-->\n  <div *ngIf=\"rootNode.question.controlType === 1 && questionsAnswered(rootNode)\">\n    <div [ngSwitch]=\"rootNode.question.renderingType\">\n      <div *ngSwitchCase=\" 'repeating' \">\n        <div [ngSwitch]=\"rootNode.question.extras.type\">\n          <div *ngSwitchCase=\"'testOrder'\">\n            <label>{{rootNode.question.label}}:</label>\n            <div *ngFor=\"let child of rootNode.children; let i=index \">\n              <encounter-viewer *ngFor=\"let question of child.question.questions \" [parentComponent]=\"this\" [node]=\"child.children[question.key]\n                \" [parentGroup]=\"child.control \" [schema]=\"_schema\"></encounter-viewer>\n            </div>\n          </div>\n          \n          <div *ngSwitchCase=\"'obsGroup'\">\n            <div *ngFor=\"let child of rootNode.children; let i=index \">\n              <encounter-viewer *ngFor=\"let question of child.question.questions \" [parentComponent]=\"this\" [node]=\"child.children[question.key]\n                \" [parentGroup]=\"child.control \" [schema]=\"_schema\"></encounter-viewer>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"rootNode.question.controlType === 2\">\n\n    <!--GROUP-->\n    <div [ngSwitch]=\"rootNode.question.renderingType \">\n      <div *ngSwitchCase=\" 'group' \">\n        <encounter-viewer *ngFor=\"let question of rootNode.question.questions \" [parentComponent]=\"this\" [node]=\"rootNode.children[question.key]\n                  \" [parentGroup]=\"rootNode.control \" [schema]=\"_schema\"></encounter-viewer>\n      </div>\n      <div *ngSwitchCase=\" 'field-set' \">\n        <encounter-viewer *ngFor=\"let question of rootNode.question.questions \" [parentComponent]=\"this\" [node]=\"rootNode.children[question.key]\n                  \" [parentGroup]=\"rootNode.control \" [schema]=\"_schema\"></encounter-viewer>\n      </div>\n    </div>\n  </div>\n\n\n\n  </div>\n",
                    styles: [".page-label{font-size:20px;font-weight:700}.section-label{font-size:18px;font-weight:500}.panel-primary{border:none!important}.question-answer{font-size:16px}.panel{margin-bottom:5px}div.section{margin-bottom:15px!important}.line-breaker{white-space:pre-line}hr{margin:10px}"],
                },] },
    ];
    EncounterViewerComponent.ctorParameters = function () { return [
        { type: EncounterViewerService },
        { type: DataSources }
    ]; };
    EncounterViewerComponent.propDecorators = {
        parentGroup: [{ type: Input }],
        parentComponent: [{ type: Input }],
        node: [{ type: Input }],
        schema: [{ type: Input }],
        encounter: [{ type: Input }],
        form: [{ type: Input }]
    };
    return EncounterViewerComponent;
}());
export { EncounterViewerComponent };
if (false) {
    /** @type {?} */
    EncounterViewerComponent.prototype.rootNode;
    /** @type {?} */
    EncounterViewerComponent.prototype.enc;
    /** @type {?} */
    EncounterViewerComponent.prototype.fileDataSource;
    /** @type {?} */
    EncounterViewerComponent.prototype.remoteDataSource;
    /** @type {?} */
    EncounterViewerComponent.prototype.customDataSource;
    /** @type {?} */
    EncounterViewerComponent.prototype._schema;
    /** @type {?} */
    EncounterViewerComponent.prototype.parentGroup;
    /** @type {?} */
    EncounterViewerComponent.prototype.parentComponent;
    /**
     * @type {?}
     * @private
     */
    EncounterViewerComponent.prototype.encounterViewerService;
    /**
     * @type {?}
     * @private
     */
    EncounterViewerComponent.prototype.dataSources;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb3VudGVyLXZpZXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJlbmNvdW50ZXItdmlld2VyL2VuY291bnRlci12aWV3L2VuY291bnRlci12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSx5Q0FBeUMsQ0FBQztBQUl4RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBR3pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFO0lBa0lJLGtDQUNZLHNCQUE4QyxFQUM5QyxXQUF3QjtRQUR4QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQW5CekMsc0JBQWEsMENBQUk7Ozs7O1FBQWpCLFVBQWtCLFFBQWtCO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQW9CLDRDQUFNOzs7OztRQUExQixVQUEyQixNQUFXO1lBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQW9CLCtDQUFTOzs7OztRQUE3QixVQUE4QixHQUFRO1lBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWEsMENBQUk7Ozs7O1FBQWpCLFVBQWtCLElBQVM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlC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Ozs7OztRQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7O0lBQ3BCLENBQUM7O2dCQTdOSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLHV1SkFtR2I7b0JBQ0csTUFBTSxFQUFFLENBQUMsb1JBQW9SLENBQUM7aUJBQ2pTOzs7Z0JBekdRLHNCQUFzQjtnQkFIdEIsV0FBVzs7OzhCQW9IZixLQUFLO2tDQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFJTCxLQUFLOzRCQUlMLEtBQUs7dUJBR0wsS0FBSzs7SUFtR1YsK0JBQUM7Q0FBQSxBQS9ORCxJQStOQztTQXZIWSx3QkFBd0I7OztJQUNqQyw0Q0FBMEI7O0lBQzFCLHVDQUFnQjs7SUFDaEIsa0RBQWtDOztJQUNsQyxvREFBb0M7O0lBQ3BDLG9EQUFvQzs7SUFDcEMsMkNBQWU7O0lBQ2YsK0NBQTBDOztJQUMxQyxtREFBMEQ7Ozs7O0lBbUJ0RCwwREFBc0Q7Ozs7O0lBQ3RELCtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5vZGVCYXNlLCBHcm91cE5vZGUsIExlYWZOb2RlIH0gZnJvbSAnLi4vLi4vZm9ybS1lbnRyeS9mb3JtLWZhY3RvcnkvZm9ybS1ub2RlJztcclxuaW1wb3J0IHsgUXVlc3Rpb25CYXNlIH0gZnJvbSAnLi4vLi4vZm9ybS1lbnRyeS9xdWVzdGlvbi1tb2RlbHMvcXVlc3Rpb24tYmFzZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IEFmZUZvcm1Hcm91cCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LWNvbnRyb2xzLWV4dGVuc2lvbi9hZmUtZm9ybS1ncm91cCc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2VzIH0gZnJvbSAnLi4vLi4vZm9ybS1lbnRyeS9kYXRhLXNvdXJjZXMvZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2Zvcm0tZW50cnkvcXVlc3Rpb24tbW9kZWxzL2ludGVyZmFjZXMvZGF0YS1zb3VyY2UnO1xyXG5cclxuaW1wb3J0IHsgRW5jb3VudGVyVmlld2VyU2VydmljZSB9IGZyb20gJy4uL2VuY291bnRlci12aWV3ZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZW5jb3VudGVyLXZpZXdlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ2aWV3ZXJcIj5cclxuXHJcbiAgPGRpdiAqbmdJZj1cInJvb3ROb2RlLnF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPT09ICdmb3JtJ1wiIGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgcXVlc3Rpb24gb2Ygcm9vdE5vZGUucXVlc3Rpb24ucXVlc3Rpb25zOyBsZXQgaSA9IGluZGV4O1wiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwicXVlc3Rpb25zQW5zd2VyZWQocm9vdE5vZGUuY2hpbGRyZW5bcXVlc3Rpb24ua2V5XSlcIj5cclxuICAgICAgICA8ZGl2IFthdHRyLmlkXT1cIidwYWdlJytpXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInBhZ2UtbGFiZWwgcGFuZWwtaGVhZGluZyB0ZXh0LXByaW1hcnlcIj57e3F1ZXN0aW9uLmxhYmVsfX08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZW5jb3VudGVyLXZpZXdlciBbbm9kZV09XCJyb290Tm9kZS5jaGlsZHJlbltxdWVzdGlvbi5rZXldXCIgW3NjaGVtYV09XCJfc2NoZW1hXCIgW3BhcmVudENvbXBvbmVudF09XCJ0aGlzXCIgW3BhcmVudEdyb3VwXT1cInJvb3ROb2RlLmNvbnRyb2xcIj48L2VuY291bnRlci12aWV3ZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAqbmdJZj1cInJvb3ROb2RlLnF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPT09ICdwYWdlJ1wiIGNsYXNzPVwicGFnZVwiPlxyXG4gICAgPGVuY291bnRlci12aWV3ZXIgKm5nRm9yPVwibGV0IHF1ZXN0aW9uIG9mIHJvb3ROb2RlLnF1ZXN0aW9uLnF1ZXN0aW9uc1wiIFtwYXJlbnRDb21wb25lbnRdPVwidGhpc1wiIFtub2RlXT1cInJvb3ROb2RlLmNoaWxkcmVuW3F1ZXN0aW9uLmtleV1cIlxyXG4gICAgICBbc2NoZW1hXT1cIl9zY2hlbWFcIiBbcGFyZW50R3JvdXBdPVwicGFyZW50R3JvdXBcIj48L2VuY291bnRlci12aWV3ZXI+XHJcbiAgPC9kaXY+XHJcblxyXG5cclxuICA8ZGl2ICpuZ0lmPVwicm9vdE5vZGUucXVlc3Rpb24ucmVuZGVyaW5nVHlwZSA9PT0gJ3NlY3Rpb24nJiYgcXVlc3Rpb25zQW5zd2VyZWQocm9vdE5vZGUpXCJcclxuICAgIGNsYXNzPVwic2VjdGlvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLXByaW1hcnlcIj5cclxuICAgICAgPHAgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHNlY3Rpb24tbGFiZWxcIj57eyByb290Tm9kZS5xdWVzdGlvbi5sYWJlbCB9fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgcXVlc3Rpb24gb2Ygcm9vdE5vZGUucXVlc3Rpb24ucXVlc3Rpb25zXCI+XHJcbiAgICAgIDxlbmNvdW50ZXItdmlld2VyIFtub2RlXT1cInJvb3ROb2RlLmNoaWxkcmVuW3F1ZXN0aW9uLmtleV1cIiBbcGFyZW50Q29tcG9uZW50XT1cInRoaXNcIiBbc2NoZW1hXT1cIl9zY2hlbWFcIiBbcGFyZW50R3JvdXBdPVwicGFyZW50R3JvdXBcIj48L2VuY291bnRlci12aWV3ZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLUxlYWYgQ29udHJvbHMtLT5cclxuICA8ZGl2IHN0eWxlPVwibWFyZ2luLWxlZnQ6MTBweDtcIj5cclxuICA8Zm9ybSAqbmdJZj1cInJvb3ROb2RlLnF1ZXN0aW9uLmNvbnRyb2xUeXBlID09PSAwXCIgW2Zvcm1Hcm91cF09XCJwYXJlbnRHcm91cFwiPlxyXG4gICAgPGRpdiAqbmdJZj1cInJvb3ROb2RlLmNvbnRyb2wudmFsdWVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi1hbnN3ZXJcIj5cclxuICAgICAgPGxhYmVsICpuZ0lmPVwicm9vdE5vZGUucXVlc3Rpb24ubGFiZWxcIiBbYXR0ci5mb3JdPVwicm9vdE5vZGUucXVlc3Rpb24ua2V5XCIgc3R5bGU9XCJmb250LXdlaWdodDo0MDA7XCI+XHJcbiAgICAgICAgICB7eyByb290Tm9kZS5xdWVzdGlvbi5sYWJlbCB9fVxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cImNoZWNrRm9yQ29sb24ocm9vdE5vZGUucXVlc3Rpb24ubGFiZWwpXCI+Ojwvc3Bhbj5cclxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwicm9vdE5vZGUucXVlc3Rpb24ucmVuZGVyaW5nVHlwZVwiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7IGZvbnQtd2VpZ2h0OmJvbGQ7XCI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIgJ2ZpbGUnIFwiPlxyXG4gICAgICAgICAgICA8ZmlsZS1wcmV2aWV3IFtmb3JtQ29udHJvbE5hbWVdPVwicm9vdE5vZGUucXVlc3Rpb24ua2V5XCIgW2lkXT1cInJvb3ROb2RlLnF1ZXN0aW9uLmtleSArICdpZCdcIiBbZGF0YVNvdXJjZV09XCJmaWxlRGF0YVNvdXJjZVwiPjwvZmlsZS1wcmV2aWV3PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIncmVtb3RlLXNlbGVjdCdcIj5cclxuICAgICAgICAgICAgPHJlbW90ZS1hbnN3ZXIgW2Zvcm1Db250cm9sTmFtZV09XCJyb290Tm9kZS5xdWVzdGlvbi5rZXlcIiBbaWRdPVwicm9vdE5vZGUucXVlc3Rpb24ua2V5ICsgJ2lkJ1wiIFtkYXRhU291cmNlXT1cInJlbW90ZURhdGFTb3VyY2VcIj48L3JlbW90ZS1hbnN3ZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgKm5nU3dpdGNoRGVmYXVsdCBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgPHF1ZXN0aW9uLWNvbnRyb2wgW3NjaGVtYV09XCJfc2NoZW1hXCIgW3ZhbHVlXT1cInJvb3ROb2RlLmNvbnRyb2wudmFsdWVcIiBbZGF0YVNvdXJjZV09XCJjdXN0b21EYXRhU291cmNlXCI+PC9xdWVzdGlvbi1jb250cm9sPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+XHJcblxyXG4gIDwhLS1BcnJheSBDb250cm9scy0tPlxyXG4gIDxkaXYgKm5nSWY9XCJyb290Tm9kZS5xdWVzdGlvbi5jb250cm9sVHlwZSA9PT0gMSAmJiBxdWVzdGlvbnNBbnN3ZXJlZChyb290Tm9kZSlcIj5cclxuICAgIDxkaXYgW25nU3dpdGNoXT1cInJvb3ROb2RlLnF1ZXN0aW9uLnJlbmRlcmluZ1R5cGVcIj5cclxuICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiICdyZXBlYXRpbmcnIFwiPlxyXG4gICAgICAgIDxkaXYgW25nU3dpdGNoXT1cInJvb3ROb2RlLnF1ZXN0aW9uLmV4dHJhcy50eXBlXCI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndGVzdE9yZGVyJ1wiPlxyXG4gICAgICAgICAgICA8bGFiZWw+e3tyb290Tm9kZS5xdWVzdGlvbi5sYWJlbH19OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNoaWxkIG9mIHJvb3ROb2RlLmNoaWxkcmVuOyBsZXQgaT1pbmRleCBcIj5cclxuICAgICAgICAgICAgICA8ZW5jb3VudGVyLXZpZXdlciAqbmdGb3I9XCJsZXQgcXVlc3Rpb24gb2YgY2hpbGQucXVlc3Rpb24ucXVlc3Rpb25zIFwiIFtwYXJlbnRDb21wb25lbnRdPVwidGhpc1wiIFtub2RlXT1cImNoaWxkLmNoaWxkcmVuW3F1ZXN0aW9uLmtleV1cclxuICAgICAgICAgICAgICAgIFwiIFtwYXJlbnRHcm91cF09XCJjaGlsZC5jb250cm9sIFwiIFtzY2hlbWFdPVwiX3NjaGVtYVwiPjwvZW5jb3VudGVyLXZpZXdlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ29ic0dyb3VwJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjaGlsZCBvZiByb290Tm9kZS5jaGlsZHJlbjsgbGV0IGk9aW5kZXggXCI+XHJcbiAgICAgICAgICAgICAgPGVuY291bnRlci12aWV3ZXIgKm5nRm9yPVwibGV0IHF1ZXN0aW9uIG9mIGNoaWxkLnF1ZXN0aW9uLnF1ZXN0aW9ucyBcIiBbcGFyZW50Q29tcG9uZW50XT1cInRoaXNcIiBbbm9kZV09XCJjaGlsZC5jaGlsZHJlbltxdWVzdGlvbi5rZXldXHJcbiAgICAgICAgICAgICAgICBcIiBbcGFyZW50R3JvdXBdPVwiY2hpbGQuY29udHJvbCBcIiBbc2NoZW1hXT1cIl9zY2hlbWFcIj48L2VuY291bnRlci12aWV3ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgKm5nSWY9XCJyb290Tm9kZS5xdWVzdGlvbi5jb250cm9sVHlwZSA9PT0gMlwiPlxyXG5cclxuICAgIDwhLS1HUk9VUC0tPlxyXG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwicm9vdE5vZGUucXVlc3Rpb24ucmVuZGVyaW5nVHlwZSBcIj5cclxuICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiICdncm91cCcgXCI+XHJcbiAgICAgICAgPGVuY291bnRlci12aWV3ZXIgKm5nRm9yPVwibGV0IHF1ZXN0aW9uIG9mIHJvb3ROb2RlLnF1ZXN0aW9uLnF1ZXN0aW9ucyBcIiBbcGFyZW50Q29tcG9uZW50XT1cInRoaXNcIiBbbm9kZV09XCJyb290Tm9kZS5jaGlsZHJlbltxdWVzdGlvbi5rZXldXHJcbiAgICAgICAgICAgICAgICAgIFwiIFtwYXJlbnRHcm91cF09XCJyb290Tm9kZS5jb250cm9sIFwiIFtzY2hlbWFdPVwiX3NjaGVtYVwiPjwvZW5jb3VudGVyLXZpZXdlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIiAnZmllbGQtc2V0JyBcIj5cclxuICAgICAgICA8ZW5jb3VudGVyLXZpZXdlciAqbmdGb3I9XCJsZXQgcXVlc3Rpb24gb2Ygcm9vdE5vZGUucXVlc3Rpb24ucXVlc3Rpb25zIFwiIFtwYXJlbnRDb21wb25lbnRdPVwidGhpc1wiIFtub2RlXT1cInJvb3ROb2RlLmNoaWxkcmVuW3F1ZXN0aW9uLmtleV1cclxuICAgICAgICAgICAgICAgICAgXCIgW3BhcmVudEdyb3VwXT1cInJvb3ROb2RlLmNvbnRyb2wgXCIgW3NjaGVtYV09XCJfc2NoZW1hXCI+PC9lbmNvdW50ZXItdmlld2VyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gIDwvZGl2PlxyXG5gLFxyXG4gICAgc3R5bGVzOiBbYC5wYWdlLWxhYmVse2ZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMH0uc2VjdGlvbi1sYWJlbHtmb250LXNpemU6MThweDtmb250LXdlaWdodDo1MDB9LnBhbmVsLXByaW1hcnl7Ym9yZGVyOm5vbmUhaW1wb3J0YW50fS5xdWVzdGlvbi1hbnN3ZXJ7Zm9udC1zaXplOjE2cHh9LnBhbmVse21hcmdpbi1ib3R0b206NXB4fWRpdi5zZWN0aW9ue21hcmdpbi1ib3R0b206MTVweCFpbXBvcnRhbnR9LmxpbmUtYnJlYWtlcnt3aGl0ZS1zcGFjZTpwcmUtbGluZX1ocnttYXJnaW46MTBweH1gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVuY291bnRlclZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgcm9vdE5vZGU6IE5vZGVCYXNlO1xyXG4gICAgcHVibGljIGVuYzogYW55O1xyXG4gICAgcHVibGljIGZpbGVEYXRhU291cmNlOiBEYXRhU291cmNlO1xyXG4gICAgcHVibGljIHJlbW90ZURhdGFTb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgICBwdWJsaWMgY3VzdG9tRGF0YVNvdXJjZTogRGF0YVNvdXJjZTtcclxuICAgIHB1YmxpYyBfc2NoZW1hO1xyXG4gICAgQElucHV0KCkgcHVibGljIHBhcmVudEdyb3VwOiBBZmVGb3JtR3JvdXA7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcGFyZW50Q29tcG9uZW50OiBFbmNvdW50ZXJWaWV3ZXJDb21wb25lbnQ7XHJcbiAgICBASW5wdXQoKSBzZXQgbm9kZShyb290Tm9kZTogTm9kZUJhc2UpIHtcclxuICAgICAgICB0aGlzLnJvb3ROb2RlID0gcm9vdE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIHNldCBzY2hlbWEoc2NoZW1hOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zY2hlbWEgPSBzY2hlbWE7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIHNldCBlbmNvdW50ZXIoZW5jOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmVuYyA9IGVuYztcclxuICAgIH1cclxuICAgIEBJbnB1dCgpIHNldCBmb3JtKGZvcm06IGFueSkge1xyXG4gICAgICAgIHRoaXMucm9vdE5vZGUgPSBmb3JtLnJvb3ROb2RlO1xyXG4gICAgICAgIHRoaXMuX3NjaGVtYSA9IGZvcm0uc2NoZW1hO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0UXVlc3Rpb25Ob2Rlcyh0aGlzLnRyYXZlcnNlKHRoaXMucm9vdE5vZGUpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbmNvdW50ZXJWaWV3ZXJTZXJ2aWNlOiBFbmNvdW50ZXJWaWV3ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVNvdXJjZXM6IERhdGFTb3VyY2VzKSB7IH1cclxuXHJcbiAgICBnZXRRdWVzdGlvbk5vZGVzKHBhZ2VzKSB7XHJcbiAgICAgICAgY29uc3QgbWVyZ2VkID0gW107XHJcbiAgICAgICAgY29uc3QgYXJyYXlzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGFycmF5cy5wdXNoKHBhZ2UucGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZXJnZWQuY29uY2F0LmFwcGx5KFtdLCBhcnJheXMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJvb3ROb2RlKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb290Tm9kZSAmJiB0aGlzLnJvb3ROb2RlLnF1ZXN0aW9uLmV4dHJhc1xyXG4gICAgICAgICAgICAmJiB0aGlzLnJvb3ROb2RlLnF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPT09ICdmaWxlJykge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVEYXRhU291cmNlID1cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZXNbdGhpcy5yb290Tm9kZS5xdWVzdGlvbi5kYXRhU291cmNlXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm9vdE5vZGUgJiYgdGhpcy5yb290Tm9kZS5xdWVzdGlvbi5leHRyYXNcclxuICAgICAgICAgICAgJiYgdGhpcy5yb290Tm9kZS5xdWVzdGlvbi5yZW5kZXJpbmdUeXBlID09PSAncmVtb3RlLXNlbGVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdGVEYXRhU291cmNlID1cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZXNbdGhpcy5yb290Tm9kZS5xdWVzdGlvbi5kYXRhU291cmNlXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbURhdGFTb3VyY2UgPSB0aGlzLmVuY291bnRlclZpZXdlclNlcnZpY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBxdWVzdGlvbnNBbnN3ZXJlZChub2RlOiBhbnkpIHtcclxuICAgICAgICBjb25zdCAkYW5zd2VyZWQgPSB0aGlzLmVuY291bnRlclZpZXdlclNlcnZpY2UucXVlc3Rpb25zQW5zd2VyZWQobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuICRhbnN3ZXJlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVlc3Rpb25BbnN3ZXJlZChub2RlOiBOb2RlQmFzZSkge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlcmVkID0gdGhpcy5lbmNvdW50ZXJWaWV3ZXJTZXJ2aWNlLmhhc0Fuc3dlcihub2RlKTtcclxuICAgICAgICByZXR1cm4gYW5zd2VyZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrRm9yQ29sb24ocXVlc3Rpb25MYWJlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uTGFiZWwuaW5kZXhPZignOicpID09PSAtMSkgeyByZXR1cm4gdHJ1ZTsgfSBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhdmVyc2UobywgdHlwZT8pIHtcclxuICAgICAgICBjb25zdCBxdWVzdGlvbnMgPSBbXTtcclxuICAgICAgICBpZiAoby5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoby5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5lZCA9IHRoaXMucmVwZWF0aW5nR3JvdXAoby5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG8uY2hpbGRyZW4gaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoby5jaGlsZHJlbi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoby5jaGlsZHJlbltrZXldLnF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnRyYXZlcnNlKG8uY2hpbGRyZW5ba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zLnB1c2goeyBwYWdlOiBwYWdlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VjdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMudHJhdmVyc2Uoby5jaGlsZHJlbltrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnMucHVzaCh7IHNlY3Rpb246IHNlY3Rpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdncm91cCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXMgPSB0aGlzLnRyYXZlcnNlKG8uY2hpbGRyZW5ba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zLnB1c2goeyBub2RlOiBvLmNoaWxkcmVuW2tleV0sIHF1ZXN0aW9uOiBvLmNoaWxkcmVuW2tleV0ucXVlc3Rpb24sIGdyb3VwTWVtYmVyczogcXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZXBlYXRpbmcnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcCA9IHRoaXMucmVwZWF0aW5nR3JvdXAoby5jaGlsZHJlbltrZXldLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnMucHVzaCh7IG5vZGU6IG8uY2hpbGRyZW5ba2V5XSwgcXVlc3Rpb246IG8uY2hpbGRyZW5ba2V5XS5xdWVzdGlvbiwgZ3JvdXBNZW1iZXJzOiByZXAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucy5wdXNoKG8uY2hpbGRyZW5ba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnNvbGUubG9nJywgbyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBxdWVzdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwZWF0aW5nR3JvdXAobm9kZXMpIHtcclxuICAgICAgICBjb25zdCB0b1JldHVybiA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG4gICAgICAgICAgICB0b1JldHVybi5wdXNoKHsgcXVlc3Rpb246IG5vZGUucXVlc3Rpb24sIGdyb3VwTWVtYmVyczogdGhpcy50cmF2ZXJzZShub2RlKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=