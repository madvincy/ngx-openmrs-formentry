(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-formentry/fesm5/ngx-openmrs-formentry.js":
/*!***********************************************************!*\
  !*** ./dist/ngx-formentry/fesm5/ngx-openmrs-formentry.js ***!
  \***********************************************************/
/*! exports provided: FormEntryModule, AfeFormControl, AfeFormGroup, AfeFormArray, AfeControlType, EncounterPdfViewerService, ControlRelationsFactory, FormControlService, FormFactory, Form, QuestionFactory, ValidationFactory, FormSchemaCompiler, HistoricalEncounterDataService, FormErrorsService, EncounterAdapter, PersonAttribuAdapter, OrderValueAdapter, ObsValueAdapter, ObsAdapterHelper, DataSources, CheckBoxQuestion, ConditionalValidationModel, DateQuestion, DateValidationModel, FileUploadQuestion, QuestionGroup, JsExpressionValidationModel, MaxValidationModel, MinValidationModel, MultiSelectQuestion, Pair, QuestionBase, RenderingType, RepeatingQuestion, Option, SelectQuestion, TestOrderQuestion, TextAreaInputQuestion, TextInputQuestion, UiSelectQuestion, ValidationModel, NestedQuestion, DateTimePickerModule, NgxDateTimePickerModule, JsExpressionHelper, ɵbe, ɵbf, ɵz, ɵy, ɵg, ɵk, ɵi, ɵj, ɵh, ɵq, ɵn, ɵp, ɵba, ɵbb, ɵm, ɵl, ɵe, ɵf, ɵb, ɵc, ɵd, ɵa, ɵw, ɵv, ɵx, ɵu, ɵs, ɵr, ɵt, ɵbg, ɵbi, ɵbk, ɵbj, ɵbm, ɵbc, ɵbd, ɵbh, ɵbl, ɵo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEntryModule", function() { return FormEntryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfeFormControl", function() { return AfeFormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfeFormGroup", function() { return AfeFormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfeFormArray", function() { return AfeFormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfeControlType", function() { return AfeControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterPdfViewerService", function() { return EncounterPdfViewerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlRelationsFactory", function() { return ControlRelationsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlService", function() { return FormControlService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFactory", function() { return FormFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFactory", function() { return QuestionFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFactory", function() { return ValidationFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSchemaCompiler", function() { return FormSchemaCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricalEncounterDataService", function() { return HistoricalEncounterDataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorsService", function() { return FormErrorsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterAdapter", function() { return EncounterAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonAttribuAdapter", function() { return PersonAttribuAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderValueAdapter", function() { return OrderValueAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObsValueAdapter", function() { return ObsValueAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObsAdapterHelper", function() { return ObsAdapterHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSources", function() { return DataSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxQuestion", function() { return CheckBoxQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionalValidationModel", function() { return ConditionalValidationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateQuestion", function() { return DateQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidationModel", function() { return DateValidationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadQuestion", function() { return FileUploadQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionGroup", function() { return QuestionGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsExpressionValidationModel", function() { return JsExpressionValidationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxValidationModel", function() { return MaxValidationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinValidationModel", function() { return MinValidationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectQuestion", function() { return MultiSelectQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pair", function() { return Pair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return QuestionBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingType", function() { return RenderingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatingQuestion", function() { return RepeatingQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectQuestion", function() { return SelectQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestOrderQuestion", function() { return TestOrderQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaInputQuestion", function() { return TextAreaInputQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputQuestion", function() { return TextInputQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSelectQuestion", function() { return UiSelectQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationModel", function() { return ValidationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedQuestion", function() { return NestedQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePickerModule", function() { return DateTimePickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDateTimePickerModule", function() { return NgxDateTimePickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsExpressionHelper", function() { return JsExpressionHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return AfeNgSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return AppointmentsOverviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return CheckboxControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return CheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return DatePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return DateTimePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return MomentPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return TimePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return RemoteFileUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return RemoteFileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return SecurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return NgxDateTimePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return RemoteSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return RemoteSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return SelectDropdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return STYLE$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return FilePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return QuestionControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return RemoteAnswerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return EncounterContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return EncounterViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return EncounterViewerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return EncounterViewerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return HistoricalValueDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return ErrorRendererComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return ExpressionRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return HidersDisablersFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbm", function() { return AlertsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return FormRendererComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return HistoricalFieldHelperService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbl", function() { return DebugModeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_file_uploader_ampath__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-file-uploader-ampath */ "./node_modules/ngx-file-uploader-ampath/fesm5/ngx-file-uploader-ampath.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pdfmake/build/pdfmake.js */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! pdfmake/build/vfs_fonts.js */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");























/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DebugModeService = /** @class */ (function () {
    function DebugModeService() {
        this.cookieKey = 'formDebug';
    }
    /**
     * @return {?}
     */
    DebugModeService.prototype.debugEnabled = /**
     * @return {?}
     */
    function () {
        // check if the hidefield
        return false;
    };
    DebugModeService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    DebugModeService.ctorParameters = function () { return []; };
    return DebugModeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormErrorsService = /** @class */ (function () {
    function FormErrorsService() {
        this.announceErrorFieldSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.announceErrorField$ = this.announceErrorFieldSource.asObservable();
    }
    /**
     * @param {?} error
     * @return {?}
     */
    FormErrorsService.prototype.announceErrorField = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.announceErrorFieldSource.next(error);
    };
    // Observable string sources
    FormErrorsService.control = null;
    FormErrorsService.tab = null;
    FormErrorsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return FormErrorsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { CanHide } from '../form-entry/control-hiders-disablers/can-hide';
// import { CanDisable } from '../form-entry/control-hiders-disablers/can-disable';
var 
// import { CanHide } from '../form-entry/control-hiders-disablers/can-hide';
// import { CanDisable } from '../form-entry/control-hiders-disablers/can-disable';
ControlRelation = /** @class */ (function () {
    function ControlRelation(control, relatedTo) {
        this._control = control;
        this._relatedTo = relatedTo;
        this._registerForChangesFromRelatedControl();
    }
    Object.defineProperty(ControlRelation.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this._control;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlRelation.prototype, "relatedTo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._relatedTo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlRelation.prototype, "lastUpdateValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lastUpdateValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    ControlRelation.prototype.updateControlBasedOnRelation = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        if (newValue !== this._lastUpdateValue) {
            this._lastUpdateValue = newValue;
            if (((/** @type {?} */ (this._control))).updateCalculatedValue) {
                ((/** @type {?} */ (this._control))).updateCalculatedValue();
            }
            this._control.updateValueAndValidity();
            if (((/** @type {?} */ (this._control))).updateHiddenState) {
                ((/** @type {?} */ (this._control))).updateHiddenState();
            }
            if (((/** @type {?} */ (this._control))).updateDisabledState) {
                ((/** @type {?} */ (this._control))).updateDisabledState();
            }
            if (((/** @type {?} */ (this._control))).updateAlert) {
                ((/** @type {?} */ (this._control))).updateAlert();
            }
            return true;
        }
        return false;
    };
    /**
     * @private
     * @return {?}
     */
    ControlRelation.prototype._registerForChangesFromRelatedControl = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._relatedTo.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.updateControlBasedOnRelation(value);
        }));
    };
    return ControlRelation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlRelations = /** @class */ (function () {
    function ControlRelations(relationFor, relatedTo) {
        this._otherRelations = [];
        this._relationFor = relationFor;
        this._relations = [];
        if (relatedTo) {
            this.addRelatedControls(relatedTo);
        }
    }
    Object.defineProperty(ControlRelations.prototype, "relationsFor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._relationFor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlRelations.prototype, "relations", {
        get: /**
         * @return {?}
         */
        function () {
            return this._relations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlRelations.prototype, "otherRelations", {
        get: /**
         * @return {?}
         */
        function () {
            return this._otherRelations;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} relatedTo
     * @return {?}
     */
    ControlRelations.prototype.addRelatedControls = /**
     * @param {?} relatedTo
     * @return {?}
     */
    function (relatedTo) {
        if (relatedTo instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["AbstractControl"]) {
            this.relations.push(new ControlRelation(this._relationFor, relatedTo));
        }
        if (relatedTo instanceof Array) {
            for (var i = 0; i < relatedTo.length; i++) {
                this.relations.push(new ControlRelation(this._relationFor, relatedTo[i]));
            }
        }
    };
    return ControlRelations;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HiderHelper = /** @class */ (function () {
    function HiderHelper() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    HiderHelper.prototype.hideControl = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        control.hidden = true;
        if (control.disable) {
            control.disable();
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    HiderHelper.prototype.showControl = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        control.hidden = false;
    };
    /**
     * @param {?} control
     * @param {?} hider
     * @return {?}
     */
    HiderHelper.prototype.setHiderForControl = /**
     * @param {?} control
     * @param {?} hider
     * @return {?}
     */
    function (control, hider) {
        control.hiders.push(hider);
    };
    /**
     * @param {?} control
     * @return {?}
     */
    HiderHelper.prototype.clearHidersForControl = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        control.hiders.splice(0);
        control.hidden = false;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    HiderHelper.prototype.evaluateControlHiders = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var hiddenValue = false;
        control.hiders.forEach((/**
         * @param {?} hider
         * @return {?}
         */
        function (hider) {
            hider.reEvaluateHidingExpression();
            if (hider.toHide === true) {
                hiddenValue = true;
            }
        }));
        control.hidden = hiddenValue;
        if (control.hidden && control.disable) {
            control.disable();
            // control.setValue(null);
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    HiderHelper.prototype.setUpReEvaluationWhenValueChanges = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.updateHiddenState) {
            control.valueChanges.subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                control.updateHiddenState();
            }));
        }
    };
    return HiderHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertHelper = /** @class */ (function () {
    function AlertHelper() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    AlertHelper.prototype.hideAlert = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        control.shown = false;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    AlertHelper.prototype.showAlert = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        control.shown = true;
    };
    /**
     * @param {?} control
     * @param {?} alert
     * @return {?}
     */
    AlertHelper.prototype.setAlertsForControl = /**
     * @param {?} control
     * @param {?} alert
     * @return {?}
     */
    function (control, alert) {
        control.alerts.push(alert);
    };
    /**
     * @param {?} control
     * @return {?}
     */
    AlertHelper.prototype.clearAlertsForControl = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        control.alerts.splice(0);
        control.alert = '';
    };
    /**
     * @param {?} control
     * @return {?}
     */
    AlertHelper.prototype.evaluateControlAlerts = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var messageValue = '';
        control.alerts.forEach((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            message.reEvaluateAlertExpression();
            if (message.shown === true) {
                messageValue = message.alertMessage;
            }
            else {
                messageValue = '';
            }
        }));
        control.alert = messageValue;
        // if (control.message && control.disable) {
        //     control.disable();
        //     // control.setValue(null);
        // }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    AlertHelper.prototype.setUpReEvaluationWhenValueChanges = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.updateAlert) {
            control.valueChanges.subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                control.updateAlert();
            }));
        }
    };
    return AlertHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DisablerHelper = /** @class */ (function () {
    function DisablerHelper() {
    }
    /**
     * @param {?} control
     * @param {?} disabler
     * @return {?}
     */
    DisablerHelper.prototype.setDisablerForControl = /**
     * @param {?} control
     * @param {?} disabler
     * @return {?}
     */
    function (control, disabler) {
        control.disablers.push(disabler);
    };
    /**
     * @param {?} control
     * @return {?}
     */
    DisablerHelper.prototype.clearDisablersForControl = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        control.disablers.splice(0);
        control.disable();
    };
    /**
     * @param {?} control
     * @return {?}
     */
    DisablerHelper.prototype.evaluateControlDisablers = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var toDisable = false;
        control.disablers.forEach((/**
         * @param {?} hider
         * @return {?}
         */
        function (hider) {
            hider.reEvaluateDisablingExpression();
            if (hider.toDisable === true) {
                toDisable = true;
            }
        }));
        // console.log('Control', control);
        if (toDisable) {
            control.disable();
        }
        else {
            control.enable();
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    DisablerHelper.prototype.setUpReEvaluationWhenValueChanges = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.updateDisabledState) {
            control.valueChanges.subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                control.updateDisabledState();
            }));
        }
    };
    return DisablerHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NodeBase = /** @class */ (function () {
    function NodeBase(question, control, form, parentPath) {
        this._control = control;
        this._questionModel = question;
        this._form = form;
        this._path = parentPath ? parentPath + '.' + question.key : question.key;
    }
    Object.defineProperty(NodeBase.prototype, "question", {
        get: /**
         * @return {?}
         */
        function () {
            return this._questionModel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeBase.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this._control;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeBase.prototype, "form", {
        get: /**
         * @return {?}
         */
        function () {
            return this._form;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeBase.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    NodeBase.prototype.removeAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) { };
    /**
     * @return {?}
     */
    NodeBase.prototype.createChildNode = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    NodeBase.prototype.removeChildNode = /**
     * @return {?}
     */
    function () { };
    return NodeBase;
}());
var LeafNode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(LeafNode, _super);
    function LeafNode(question, control, parentControl, form, parentPath) {
        return _super.call(this, question, control, form, parentPath) || this;
    }
    return LeafNode;
}(NodeBase));
var GroupNode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(GroupNode, _super);
    function GroupNode(question, control, parentControl, form, parentPath) {
        var _this = _super.call(this, question, control, form, parentPath) || this;
        _this._children = {};
        return _this;
    }
    Object.defineProperty(GroupNode.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @param {?} node
     * @return {?}
     */
    GroupNode.prototype.setChild = /**
     * @param {?} key
     * @param {?} node
     * @return {?}
     */
    function (key, node) {
        this.children[key] = node;
    };
    return GroupNode;
}(NodeBase));
var ArrayNode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(ArrayNode, _super);
    function ArrayNode(question, control, parentControl, formFactory, form, parentPath) {
        var _this = _super.call(this, question, control, form, parentPath) || this;
        _this.formFactory = formFactory;
        _this.childNodeCreatedEvents = [];
        _this._children = [];
        _this.childNodeCreatedEvents = [];
        return _this;
    }
    Object.defineProperty(ArrayNode.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ArrayNode.prototype.createChildNode = /**
     * @return {?}
     */
    function () {
        if (this.createChildFunc) {
            /** @type {?} */
            var g = this.createChildFunc((/** @type {?} */ (this.question)), this, this.formFactory);
            this.fireChildNodeCreatedListener(g);
            return g;
        }
        return null;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ArrayNode.prototype.removeAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.removeChildFunc) {
            this.removeChildFunc(index, this);
        }
    };
    /**
     * @param {?} func
     * @return {?}
     */
    ArrayNode.prototype.addChildNodeCreatedListener = /**
     * @param {?} func
     * @return {?}
     */
    function (func) {
        this.childNodeCreatedEvents.push(func);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ArrayNode.prototype.fireChildNodeCreatedListener = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        for (var i = 0; i < this.childNodeCreatedEvents.length; i++) {
            /** @type {?} */
            var func = this.childNodeCreatedEvents[i];
            func(node);
        }
    };
    return ArrayNode;
}(NodeBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidationModel = /** @class */ (function () {
    function ValidationModel(validations) {
        this.type = validations.type;
        this.message = validations.message || null;
    }
    return ValidationModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsExpressionValidationModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(JsExpressionValidationModel, _super);
    function JsExpressionValidationModel(validations) {
        var _this = _super.call(this, validations) || this;
        _this.failsWhenExpression = validations.failsWhenExpression;
        return _this;
    }
    return JsExpressionValidationModel;
}(ValidationModel));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConditionalValidationModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(ConditionalValidationModel, _super);
    function ConditionalValidationModel(validations) {
        var _this = _super.call(this, validations) || this;
        _this.referenceQuestionId = validations.referenceQuestionId;
        _this.referenceQuestionAnswers = validations.referenceQuestionAnswers;
        return _this;
    }
    return ConditionalValidationModel;
}(ValidationModel));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlRelationsFactory = /** @class */ (function () {
    function ControlRelationsFactory() {
    }
    /**
     * @param {?} rootNode
     * @return {?}
     */
    ControlRelationsFactory.prototype.buildRelations = /**
     * @param {?} rootNode
     * @return {?}
     */
    function (rootNode) {
        /** @type {?} */
        var controlsStore = this.mapControlIds(rootNode, {});
        for (var key in controlsStore) {
            if (controlsStore.hasOwnProperty(key)) {
                /** @type {?} */
                var nodeBase = controlsStore[key];
                this.setRelations(controlsStore, nodeBase);
            }
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ControlRelationsFactory.prototype.buildArrayNodeRelations = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var form = node.form;
        if (!form) {
            return;
        }
        /** @type {?} */
        var rootNode = form.rootNode;
        // build relations for controls in the same array
        this.buildRelations(node);
        // build relations for control outside the array
        /** @type {?} */
        var rootControlsStore = this.mapControlIds(rootNode, {});
        /** @type {?} */
        var arrayControlStore = this.mapControlIds(node, {});
        for (var key in rootControlsStore) {
            if (rootControlsStore.hasOwnProperty(key)) {
                /** @type {?} */
                var child = rootControlsStore[key];
                if (child instanceof LeafNode) {
                    /** @type {?} */
                    var questionBase = ((/** @type {?} */ (child))).question;
                    if (questionBase.key && questionBase.key.length > 0) {
                        this.setRelations(arrayControlStore, child);
                    }
                }
            }
        }
        // define relations for controls outside the group to controls in this group
        this.createRelationsToArrayControls(node);
        // fire relations
        for (var id in arrayControlStore) {
            if (arrayControlStore.hasOwnProperty(id)) {
                /** @type {?} */
                var child = arrayControlStore[id];
                /** @type {?} */
                var control = (/** @type {?} */ (child.control));
                control.updateHiddenState();
                control.updateAlert();
            }
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ControlRelationsFactory.prototype.createRelationsToArrayControls = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var form = node.form;
        /** @type {?} */
        var rootNode = form.rootNode;
        // build relations for control outside the array
        /** @type {?} */
        var rootControlsStore = this.mapControlIds(rootNode, {});
        /** @type {?} */
        var arrayControlStore = this.mapControlIds(node, {});
        // loop through form controls
        for (var key in rootControlsStore) {
            if (rootControlsStore.hasOwnProperty(key)) {
                /** @type {?} */
                var rChild = rootControlsStore[key];
                /** @type {?} */
                var parentNodePath = node.path.substring(0, node.path.lastIndexOf('.'));
                if (rChild.path.indexOf(parentNodePath + '.') === -1) {
                    var _loop_1 = function (id) {
                        if (arrayControlStore.hasOwnProperty(id)) {
                            /** @type {?} */
                            var aChild = arrayControlStore[id];
                            /** @type {?} */
                            var aChildId = aChild.question.key;
                            if (this_1.hasRelation(aChildId, rChild.question)) {
                                /** @type {?} */
                                var nodes = node.form.searchNodeByPath(rootNode, parentNodePath, []);
                                if (nodes.length > 0) {
                                    /** @type {?} */
                                    var an = (/** @type {?} */ (nodes[0]));
                                    /** @type {?} */
                                    var rootControl_1 = ((/** @type {?} */ (rChild.control)));
                                    if (rootControl_1.controlRelations.otherRelations.indexOf(an) === -1) {
                                        rootControl_1.controlRelations.otherRelations.push(an);
                                    }
                                    ((/** @type {?} */ (aChild.control))).addValueChangeListener((/**
                                     * @param {?} value
                                     * @return {?}
                                     */
                                    function (value) {
                                        if (((/** @type {?} */ (rootControl_1))).updateCalculatedValue) {
                                            ((/** @type {?} */ (rootControl_1))).updateCalculatedValue();
                                        }
                                        rootControl_1.updateValueAndValidity();
                                        if (((/** @type {?} */ (rootControl_1))).updateHiddenState) {
                                            ((/** @type {?} */ (rootControl_1))).updateHiddenState();
                                        }
                                        if (((/** @type {?} */ (rootControl_1))).updateAlert) {
                                            ((/** @type {?} */ (rootControl_1))).updateAlert();
                                        }
                                        if (((/** @type {?} */ (rootControl_1))).updateDisabledState) {
                                            ((/** @type {?} */ (rootControl_1))).updateDisabledState();
                                        }
                                    }));
                                }
                            }
                        }
                    };
                    var this_1 = this;
                    // loop through controls in the array group
                    for (var id in arrayControlStore) {
                        _loop_1(id);
                    }
                }
            }
        }
    };
    /**
     * @param {?} id
     * @param {?} node
     * @return {?}
     */
    ControlRelationsFactory.prototype.getRelationsForControl = /**
     * @param {?} id
     * @param {?} node
     * @return {?}
     */
    function (id, node) {
        /** @type {?} */
        var relations = new Array();
        /** @type {?} */
        var nodeBaseArray = node.form.searchNodeByQuestionId(id);
        if (nodeBaseArray.length > 0) {
            /** @type {?} */
            var nodeBase = nodeBaseArray[0];
            /** @type {?} */
            var controlList = this.mapControlIds(node, {});
            for (var key in controlList) {
                if (controlList.hasOwnProperty(key)) {
                    if (this.hasRelation(controlList[key].question.key, nodeBase.question)) {
                        relations.push(controlList[key].control);
                    }
                }
            }
        }
        return relations;
    };
    /**
     * @param {?} node
     * @param {?} controlsStore
     * @return {?}
     */
    ControlRelationsFactory.prototype.mapControlIds = /**
     * @param {?} node
     * @param {?} controlsStore
     * @return {?}
     */
    function (node, controlsStore) {
        /** @type {?} */
        var children = node.children;
        for (var key in children) {
            if (children.hasOwnProperty(key)) {
                /** @type {?} */
                var child = children[key];
                if (child instanceof GroupNode) {
                    this.mapControlIds(child, controlsStore);
                }
                else if (child instanceof LeafNode) {
                    /** @type {?} */
                    var questionBase = ((/** @type {?} */ (child))).question;
                    if (questionBase.key && questionBase.key.length > 0) {
                        controlsStore[questionBase.key] = child;
                    }
                }
                else if (child instanceof ArrayNode) {
                    /** @type {?} */
                    var questionBase = ((/** @type {?} */ (child))).question;
                    if (questionBase.key && questionBase.key.length > 0) {
                        controlsStore[questionBase.key] = child;
                    }
                }
            }
        }
        return controlsStore;
    };
    /**
     * @param {?} controlsStore
     * @param {?} nodeBase
     * @return {?}
     */
    ControlRelationsFactory.prototype.setRelations = /**
     * @param {?} controlsStore
     * @param {?} nodeBase
     * @return {?}
     */
    function (controlsStore, nodeBase) {
        /** @type {?} */
        var questionBase = nodeBase.question;
        /** @type {?} */
        var id = questionBase.key;
        for (var key in controlsStore) {
            if (controlsStore.hasOwnProperty(key) && key !== id) {
                /** @type {?} */
                var node = controlsStore[key];
                /** @type {?} */
                var question = node.question;
                if (this.hasRelation(id, question, nodeBase)) {
                    this.addRelationToControl((/** @type {?} */ (node.control)), (/** @type {?} */ (nodeBase.control)));
                }
                // add conditional required and conditional answered relations
                if (typeof question.required === 'object') {
                    /** @type {?} */
                    var required = question.required;
                    if (required.type === 'conditionalRequired') {
                        if (required.referenceQuestionId === id) {
                            this.addRelationToControl((/** @type {?} */ (node.control)), (/** @type {?} */ (nodeBase.control)));
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {?} id
     * @param {?} questionBase
     * @param {?=} nodeBase
     * @return {?}
     */
    ControlRelationsFactory.prototype.hasRelation = /**
     * @param {?} id
     * @param {?} questionBase
     * @param {?=} nodeBase
     * @return {?}
     */
    function (id, questionBase, nodeBase) {
        /** @type {?} */
        var hasRelation = false;
        if (questionBase.validators && questionBase.validators.length > 0) {
            questionBase.validators.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                if (element instanceof JsExpressionValidationModel) {
                    /** @type {?} */
                    var model = (/** @type {?} */ (element));
                    /** @type {?} */
                    var failsWhenExpression = model.failsWhenExpression;
                    if (failsWhenExpression && failsWhenExpression.indexOf(id) !== -1) {
                        hasRelation = true;
                    }
                }
                else if (element instanceof ConditionalValidationModel && element.type === 'conditionalAnswered'
                    && element.referenceQuestionId === id) {
                    hasRelation = true;
                }
            }));
        }
        // add hiders and disablers relations
        if (!hasRelation) {
            if (typeof questionBase.hide === 'string') {
                /** @type {?} */
                var hide = (/** @type {?} */ (questionBase.hide));
                if (hide.length > 0 && hide.indexOf(id) !== -1) {
                    hasRelation = true;
                }
            }
            else if (typeof questionBase.hide === 'object') {
                /** @type {?} */
                var hideObj = questionBase.hide;
                if (hideObj.field === id) {
                    hasRelation = true;
                }
            }
            if (questionBase.alert && typeof questionBase.alert === 'object') {
                hasRelation = true;
            }
            if (typeof questionBase.disable === 'string') {
                /** @type {?} */
                var disable = (/** @type {?} */ (questionBase.disable));
                if (disable.length > 0 && disable.indexOf(id) !== -1) {
                    hasRelation = true;
                }
            }
        }
        // add calculate expressions relations
        if (!hasRelation && questionBase.calculateExpression && questionBase.calculateExpression.length > 0
            && questionBase.calculateExpression.indexOf(id) !== -1) {
            hasRelation = true;
        }
        return hasRelation;
    };
    /**
     * @param {?} control
     * @param {?} related
     * @return {?}
     */
    ControlRelationsFactory.prototype.addRelationToControl = /**
     * @param {?} control
     * @param {?} related
     * @return {?}
     */
    function (control, related) {
        //  let relations = control.controlRelations.relations;
        //
        //  let hasRelation = false;
        //
        //   relations.forEach(element => {
        //
        //     let controlRelation: ControlRelation = element as ControlRelation;
        //
        //     let relation: AfeFormControl | AfeFormArray = controlRelation.control as AfeFormControl | AfeFormArray;
        //
        //     if ( control.uuid !== undefined && control.uuid === relation.uuid ) {
        //       hasRelation = true;
        //     }
        //   });
        // if ( !hasRelation ) {
        control.controlRelations.addRelatedControls(related);
        // }
    };
    ControlRelationsFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    ControlRelationsFactory.ctorParameters = function () { return []; };
    return ControlRelationsFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment = moment__WEBPACK_IMPORTED_MODULE_4__;
var ExpressionRunner = /** @class */ (function () {
    function ExpressionRunner() {
    }
    /**
     * @param {?} expression
     * @param {?} control
     * @param {?} helper
     * @param {?} dataDependencies
     * @param {?=} form
     * @return {?}
     */
    ExpressionRunner.prototype.getRunnable = /**
     * @param {?} expression
     * @param {?} control
     * @param {?} helper
     * @param {?} dataDependencies
     * @param {?=} form
     * @return {?}
     */
    function (expression, control, helper, dataDependencies, form) {
        /** @type {?} */
        var runner = this;
        /** @type {?} */
        var runnable = {
            run: (/**
             * @return {?}
             */
            function () {
                /* tslint:disable */
                /** @type {?} */
                var scope = {};
                if (control.uuid) {
                    scope[control.uuid] = control.value;
                }
                window['moment'] = moment;
                // scope.moment = moment;
                scope['myValue'] = control.value;
                runner.getControlRelationValueString(control, scope);
                runner.getHelperMethods(helper, scope);
                runner.getDataDependencies(dataDependencies, scope);
                if (form) {
                    // console.error('Form defined', form);
                    runner.getDataDependencies(form.dataSourcesContainer.dataSources, scope);
                }
                /** @type {?} */
                var paramList = '';
                /** @type {?} */
                var argList = '';
                for (var o in scope) {
                    paramList = paramList === "" ? paramList + o : paramList + ',' + o;
                    argList = argList === "" ? argList + "scope['" + o + "']" : argList + ",scope['" + o + "']";
                }
                // prevent more than one return statements
                if (expression.indexOf('return') === -1) {
                    expression = '"return ' + expression + '"';
                }
                /** @type {?} */
                var funcDeclarationCode = 'var afeDynamicFunc = new Function("' + paramList + '", ' + expression + ');';
                /** @type {?} */
                var funcCallCode = 'afeDynamicFunc.call(this ' + (argList === '' ? '' : ',' + argList) + ');';
                try {
                    if (Object.keys(scope).indexOf('undefined') >= 0) {
                        console.warn('Missing reference found', expression, scope);
                        return false;
                    }
                    //console.info('results: ', expression, eval(funcDeclarationCode + funcCallCode));
                    return eval(funcDeclarationCode + funcCallCode);
                }
                catch (e) {
                    // if (window['error_count']) {
                    //     window['error_count'] = window['error_count'] + 1;
                    // } else {
                    //     window['error_count'] = 1;
                    // }
                    // console.error(window['error_count'] + ' Error running expression:' + expression + '. ',
                    //     e, control, 'Effective Expression', (funcDeclarationCode + funcCallCode));
                    // console.error('Error running expression:' + expression + '. ',
                    //     e, control, 'Effective Expression', (funcDeclarationCode + funcCallCode));
                    // Uncomment the line above during debugging
                    // console.error('Error running expression:' + expression, scope);
                    return false;
                }
                /* tslint:enable */
            })
        };
        return runnable;
    };
    /**
     * @private
     * @param {?} control
     * @param {?} scope
     * @return {?}
     */
    ExpressionRunner.prototype.getControlRelationValueString = /**
     * @private
     * @param {?} control
     * @param {?} scope
     * @return {?}
     */
    function (control, scope) {
        var _this = this;
        if (control && control.controlRelations && control.controlRelations.relations) {
            control.controlRelations.relations.forEach((/**
             * @param {?} relation
             * @return {?}
             */
            function (relation) {
                if (relation.relatedTo) {
                    /** @type {?} */
                    var related = (/** @type {?} */ (relation.relatedTo));
                    /** @type {?} */
                    var relatedAsControl = (/** @type {?} */ (relation.relatedTo));
                    if (relatedAsControl && Array.isArray(relatedAsControl.value)) {
                        scope[related.uuid] = relation.relatedTo.value;
                    }
                    else {
                        scope[related.uuid] = relation.relatedTo.value && relation.relatedTo.value.value ?
                            relation.relatedTo.value.value : relation.relatedTo.value;
                    }
                }
            }));
        }
        if (control && control.controlRelations && control.controlRelations.otherRelations
            && control.controlRelations.otherRelations.length > 0) {
            control.controlRelations.otherRelations.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                if (node instanceof ArrayNode) {
                    /** @type {?} */
                    var arrayNode = (/** @type {?} */ (node));
                    /** @type {?} */
                    var uuid_1 = control.uuid;
                    /** @type {?} */
                    var controlRelationsFactory_1 = new ControlRelationsFactory();
                    /** @type {?} */
                    var relationsForControl_1 = [];
                    // get all related controls
                    arrayNode.children.forEach((/**
                     * @param {?} child
                     * @return {?}
                     */
                    function (child) {
                        relationsForControl_1 = relationsForControl_1.concat(controlRelationsFactory_1.getRelationsForControl(uuid_1, child));
                    }));
                    _this.setControlArrayValues((/** @type {?} */ (control)), relationsForControl_1, scope);
                }
            }));
        }
    };
    /**
     * @private
     * @param {?} control
     * @param {?} relationsForControl
     * @param {?} scope
     * @return {?}
     */
    ExpressionRunner.prototype.setControlArrayValues = /**
     * @private
     * @param {?} control
     * @param {?} relationsForControl
     * @param {?} scope
     * @return {?}
     */
    function (control, relationsForControl, scope) {
        var _this = this;
        /** @type {?} */
        var keys = this._getFormControlKeys(relationsForControl);
        keys.forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var values = _this._getValuesForKey(key, relationsForControl);
            scope[key] = values;
        }));
    };
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    ExpressionRunner.prototype._getFormControlKeys = /**
     * @private
     * @param {?} array
     * @return {?}
     */
    function (array) {
        /** @type {?} */
        var keys = [];
        array.forEach((/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (keys.indexOf(control.uuid) === -1) {
                keys.push(control.uuid);
            }
        }));
        return keys;
    };
    /**
     * @private
     * @param {?} key
     * @param {?} array
     * @return {?}
     */
    ExpressionRunner.prototype._getValuesForKey = /**
     * @private
     * @param {?} key
     * @param {?} array
     * @return {?}
     */
    function (key, array) {
        /** @type {?} */
        var values = [];
        array.forEach((/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (control.uuid === key) {
                values.push(control.value);
            }
        }));
        return values;
    };
    /**
     * @private
     * @param {?} obj
     * @param {?=} scope
     * @return {?}
     */
    ExpressionRunner.prototype.getHelperMethods = /**
     * @private
     * @param {?} obj
     * @param {?=} scope
     * @return {?}
     */
    function (obj, scope) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                scope[key] = obj[key];
            }
        }
    };
    /**
     * @private
     * @param {?} obj
     * @param {?=} scope
     * @return {?}
     */
    ExpressionRunner.prototype.getDataDependencies = /**
     * @private
     * @param {?} obj
     * @param {?=} scope
     * @return {?}
     */
    function (obj, scope) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                scope[key] = obj[key];
            }
        }
    };
    return ExpressionRunner;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AfeFormControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(AfeFormControl, _super);
    function AfeFormControl(formState, validator, asyncValidator) {
        var _this = _super.call(this, formState, validator, asyncValidator) || this;
        _this.hidden = false;
        _this.hiderHelper = new HiderHelper();
        _this.disablerHelper = new DisablerHelper();
        _this.AlertHelper = new AlertHelper();
        _this._controlRelations = new ControlRelations(_this);
        _this.hiders = [];
        _this.disablers = [];
        _this.alerts = [];
        _this.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this._previousValue !== value) {
                _this.fireValueChangeListener(value);
                _this._previousValue = value;
            }
        }));
        return _this;
    }
    Object.defineProperty(AfeFormControl.prototype, "controlRelations", {
        get: /**
         * @return {?}
         */
        function () {
            return this._controlRelations;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} param
     * @return {?}
     */
    AfeFormControl.prototype.disable = /**
     * @param {?=} param
     * @return {?}
     */
    function (param) {
        _super.prototype.disable.call(this, param);
        _super.prototype.setValue.call(this, '');
    };
    /**
     * @return {?}
     */
    AfeFormControl.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.hideControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormControl.prototype.show = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.showControl(this);
    };
    /**
     * @param {?} newHider
     * @return {?}
     */
    AfeFormControl.prototype.setHidingFn = /**
     * @param {?} newHider
     * @return {?}
     */
    function (newHider) {
        this.hiderHelper.setHiderForControl(this, newHider);
    };
    /**
     * @param {?} newCalculator
     * @return {?}
     */
    AfeFormControl.prototype.setCalculatorFn = /**
     * @param {?} newCalculator
     * @return {?}
     */
    function (newCalculator) {
        this.calculator = newCalculator;
    };
    /**
     * @return {?}
     */
    AfeFormControl.prototype.updateCalculatedValue = /**
     * @return {?}
     */
    function () {
        if (this.calculator) {
            /** @type {?} */
            var _val = this.calculator.call(ExpressionRunner, {});
            this.setValue(_val);
        }
    };
    /**
     * @return {?}
     */
    AfeFormControl.prototype.clearHidingFns = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.clearHidersForControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormControl.prototype.updateHiddenState = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.evaluateControlHiders(this);
    };
    /**
     * @param {?} newDisabler
     * @return {?}
     */
    AfeFormControl.prototype.setDisablingFn = /**
     * @param {?} newDisabler
     * @return {?}
     */
    function (newDisabler) {
        this.disablerHelper.setDisablerForControl(this, newDisabler);
    };
    /**
     * @return {?}
     */
    AfeFormControl.prototype.clearDisablingFns = /**
     * @return {?}
     */
    function () {
        this.disablerHelper.clearDisablersForControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormControl.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        this.disablerHelper.evaluateControlDisablers(this);
    };
    /**
     * @param {?} newHider
     * @return {?}
     */
    AfeFormControl.prototype.setAlertFn = /**
     * @param {?} newHider
     * @return {?}
     */
    function (newHider) {
        this.AlertHelper.setAlertsForControl(this, newHider);
    };
    /**
     * @return {?}
     */
    AfeFormControl.prototype.clearMessageFns = /**
     * @return {?}
     */
    function () {
        this.AlertHelper.clearAlertsForControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormControl.prototype.updateAlert = /**
     * @return {?}
     */
    function () {
        this.AlertHelper.evaluateControlAlerts(this);
    };
    /**
     * @param {?} func
     * @return {?}
     */
    AfeFormControl.prototype.addValueChangeListener = /**
     * @param {?} func
     * @return {?}
     */
    function (func) {
        this._valueChangeListener = func;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AfeFormControl.prototype.fireValueChangeListener = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this._valueChangeListener && typeof this._valueChangeListener === 'function') {
            this._valueChangeListener(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AfeFormControl.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        _super.prototype.setValue.call(this, value);
    };
    return AfeFormControl;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AfeFormGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(AfeFormGroup, _super);
    function AfeFormGroup(controls, validator, asyncValidator) {
        var _this = _super.call(this, controls, validator, asyncValidator) || this;
        _this.hiderHelper = new HiderHelper();
        _this.disablerHelper = new DisablerHelper();
        _this.AlertHelper = new AlertHelper();
        _this._controlRelations = new ControlRelations(_this);
        _this.hiders = [];
        _this.disablers = [];
        _this.alerts = [];
        return _this;
    }
    Object.defineProperty(AfeFormGroup.prototype, "controlRelations", {
        get: /**
         * @return {?}
         */
        function () {
            return this._controlRelations;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AfeFormGroup.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.hideControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormGroup.prototype.show = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.showControl(this);
    };
    /**
     * @param {?=} param
     * @return {?}
     */
    AfeFormGroup.prototype.disable = /**
     * @param {?=} param
     * @return {?}
     */
    function (param) {
        _super.prototype.disable.call(this, param);
        _super.prototype.setValue.call(this, {});
    };
    /**
     * @param {?} newHider
     * @return {?}
     */
    AfeFormGroup.prototype.setHidingFn = /**
     * @param {?} newHider
     * @return {?}
     */
    function (newHider) {
        this.hiderHelper.setHiderForControl(this, newHider);
    };
    /**
     * @return {?}
     */
    AfeFormGroup.prototype.clearHidingFns = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.clearHidersForControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormGroup.prototype.updateHiddenState = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.evaluateControlHiders(this);
    };
    /**
     * @param {?} newDisabler
     * @return {?}
     */
    AfeFormGroup.prototype.setDisablingFn = /**
     * @param {?} newDisabler
     * @return {?}
     */
    function (newDisabler) {
        this.disablerHelper.setDisablerForControl(this, newDisabler);
    };
    /**
     * @return {?}
     */
    AfeFormGroup.prototype.clearDisablingFns = /**
     * @return {?}
     */
    function () {
        this.disablerHelper.clearDisablersForControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormGroup.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        this.disablerHelper.evaluateControlDisablers(this);
    };
    /**
     * @param {?} newHider
     * @return {?}
     */
    AfeFormGroup.prototype.setAlertFn = /**
     * @param {?} newHider
     * @return {?}
     */
    function (newHider) {
        this.AlertHelper.setAlertsForControl(this, newHider);
    };
    /**
     * @return {?}
     */
    AfeFormGroup.prototype.clearMessageFns = /**
     * @return {?}
     */
    function () {
        this.AlertHelper.clearAlertsForControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormGroup.prototype.updateAlert = /**
     * @return {?}
     */
    function () {
        this.AlertHelper.evaluateControlAlerts(this);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AfeFormGroup.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        _super.prototype.setValue.call(this, value);
    };
    return AfeFormGroup;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AfeFormArray = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(AfeFormArray, _super);
    function AfeFormArray(controls, validator, asyncValidator) {
        var _this = _super.call(this, controls, validator, asyncValidator) || this;
        _this.hiderHelper = new HiderHelper();
        _this.AlertHelper = new AlertHelper();
        _this.disablerHelper = new DisablerHelper();
        _this._controlRelations = new ControlRelations(_this);
        _this.hiders = [];
        _this.alerts = [];
        _this.disablers = [];
        _this.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this._previousValue !== value) {
                _this.fireValueChangeListener(value);
                _this._previousValue = value;
            }
        }));
        return _this;
    }
    Object.defineProperty(AfeFormArray.prototype, "uuid", {
        get: /**
         * @return {?}
         */
        function () {
            return this._uuid;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._uuid = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AfeFormArray.prototype, "controlRelations", {
        get: /**
         * @return {?}
         */
        function () {
            return this._controlRelations;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AfeFormArray.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.hideControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormArray.prototype.show = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.showControl(this);
    };
    /**
     * @param {?=} param
     * @return {?}
     */
    AfeFormArray.prototype.disable = /**
     * @param {?=} param
     * @return {?}
     */
    function (param) {
        _super.prototype.disable.call(this, param);
        _super.prototype.setValue.call(this, []);
    };
    /**
     * @param {?} newHider
     * @return {?}
     */
    AfeFormArray.prototype.setHidingFn = /**
     * @param {?} newHider
     * @return {?}
     */
    function (newHider) {
        this.hiderHelper.setHiderForControl(this, newHider);
    };
    /**
     * @return {?}
     */
    AfeFormArray.prototype.clearHidingFns = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.clearHidersForControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormArray.prototype.updateHiddenState = /**
     * @return {?}
     */
    function () {
        this.hiderHelper.evaluateControlHiders(this);
    };
    /**
     * @param {?} newDisabler
     * @return {?}
     */
    AfeFormArray.prototype.setDisablingFn = /**
     * @param {?} newDisabler
     * @return {?}
     */
    function (newDisabler) {
        this.disablerHelper.setDisablerForControl(this, newDisabler);
    };
    /**
     * @return {?}
     */
    AfeFormArray.prototype.clearDisablingFns = /**
     * @return {?}
     */
    function () {
        this.disablerHelper.clearDisablersForControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormArray.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        this.disablerHelper.evaluateControlDisablers(this);
    };
    /**
     * @param {?} newHider
     * @return {?}
     */
    AfeFormArray.prototype.setAlertFn = /**
     * @param {?} newHider
     * @return {?}
     */
    function (newHider) {
        this.AlertHelper.setAlertsForControl(this, newHider);
    };
    /**
     * @return {?}
     */
    AfeFormArray.prototype.clearMessageFns = /**
     * @return {?}
     */
    function () {
        this.AlertHelper.clearAlertsForControl(this);
    };
    /**
     * @return {?}
     */
    AfeFormArray.prototype.updateAlert = /**
     * @return {?}
     */
    function () {
        this.AlertHelper.evaluateControlAlerts(this);
    };
    /**
     * @param {?} func
     * @return {?}
     */
    AfeFormArray.prototype.addValueChangeListener = /**
     * @param {?} func
     * @return {?}
     */
    function (func) {
        this._valueChangeListener = func;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AfeFormArray.prototype.fireValueChangeListener = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.alerts.length > 0) {
            this.updateAlert();
        }
        if (this._valueChangeListener && typeof this._valueChangeListener === 'function') {
            this._valueChangeListener(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AfeFormArray.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        _super.prototype.setValue.call(this, value);
    };
    return AfeFormArray;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var AfeControlType = {
    AfeFormControl: 0,
    AfeFormArray: 1,
    AfeFormGroup: 2,
    None: 3,
};
AfeControlType[AfeControlType.AfeFormControl] = 'AfeFormControl';
AfeControlType[AfeControlType.AfeFormArray] = 'AfeFormArray';
AfeControlType[AfeControlType.AfeFormGroup] = 'AfeFormGroup';
AfeControlType[AfeControlType.None] = 'None';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QuestionBase = /** @class */ (function () {
    function QuestionBase(options) {
        this.defaultValue = options.defaultValue;
        this.originalValue = options.originalValue;
        this.extras = options.extras;
        this.renderingType = options.type;
        this.key = options.key || '';
        this.label = options.label || '';
        this.validators = options.validators || [];
        this.required = options.required;
        this.hide = options.hide;
        this.disable = options.disable;
        this.alert = options.alert;
        this.historicalDataValue = options.historicalDataValue;
        this.calculateExpression = options.calculateExpression;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    QuestionBase.prototype.setHistoricalValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        this.enableHistoricalValue = v;
    };
    /**
     * @param {?=} v
     * @return {?}
     */
    QuestionBase.prototype.showHistoricalEncounterDate = /**
     * @param {?=} v
     * @return {?}
     */
    function (v) {
        this.showHistoricalValueDate = v === undefined ? true : v;
    };
    return QuestionBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConditionalRequiredValidator = /** @class */ (function () {
    function ConditionalRequiredValidator() {
    }
    /**
     * @param {?} model
     * @return {?}
     */
    ConditionalRequiredValidator.prototype.validate = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        // convert helper functions to string
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var value = control.value;
            /** @type {?} */
            var relationValue = null;
            /** @type {?} */
            var referenceQuestionId = model.referenceQuestionId;
            /** @type {?} */
            var referenceQuestionAnswers = model.referenceQuestionAnswers;
            /** @type {?} */
            var isRequired;
            if (control && control.controlRelations && control.controlRelations.relations) {
                control.controlRelations.relations.forEach((/**
                 * @param {?} relation
                 * @return {?}
                 */
                function (relation) {
                    /** @type {?} */
                    var relatedAsControl = (/** @type {?} */ (relation.relatedTo));
                    if (relatedAsControl.uuid === referenceQuestionId) {
                        if (relatedAsControl && Array.isArray(relatedAsControl.value)) {
                            relationValue = relation.relatedTo.value;
                        }
                        else {
                            relationValue = relation.relatedTo.value && relation.relatedTo.value.value ?
                                relation.relatedTo.value.value : relation.relatedTo.value;
                        }
                    }
                }));
            }
            if (typeof referenceQuestionAnswers === 'object' && referenceQuestionAnswers.indexOf(relationValue) !== -1) {
                isRequired = true;
            }
            if (isRequired && !value) {
                return { 'conditional_required': { message: model.message } };
            }
            return null;
        });
    };
    return ConditionalRequiredValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConditionalAnsweredValidator = /** @class */ (function () {
    function ConditionalAnsweredValidator() {
    }
    /**
     * @param {?} model
     * @return {?}
     */
    ConditionalAnsweredValidator.prototype.validate = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var value = control.value;
            /** @type {?} */
            var relationValue = null;
            /** @type {?} */
            var referenceQuestionId = model.referenceQuestionId;
            /** @type {?} */
            var referenceQuestionAnswers = model.referenceQuestionAnswers;
            /** @type {?} */
            var successCondition = true;
            if (value) {
                if (control && control.controlRelations && control.controlRelations.relations) {
                    control.controlRelations.relations.forEach((/**
                     * @param {?} relation
                     * @return {?}
                     */
                    function (relation) {
                        /** @type {?} */
                        var relatedAsControl = (/** @type {?} */ (relation.relatedTo));
                        if (relatedAsControl.uuid === referenceQuestionId) {
                            if (Array.isArray(relatedAsControl.value)) {
                                relationValue = relatedAsControl.value;
                            }
                            else {
                                relationValue = relatedAsControl.value && typeof relatedAsControl.value === 'object' && relatedAsControl.value.value ?
                                    relatedAsControl.value.value : relatedAsControl.value;
                            }
                        }
                        if (!relationValue) {
                            successCondition = false;
                        }
                        else if (typeof referenceQuestionAnswers === 'object' && referenceQuestionAnswers.indexOf(relationValue) === -1) {
                            successCondition = false;
                        }
                    }));
                }
            }
            if (!successCondition) {
                return { 'conditional_answered': { message: model.message } };
            }
            return null;
        });
    };
    return ConditionalAnsweredValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RequiredValidator = /** @class */ (function () {
    function RequiredValidator() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    RequiredValidator.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.hidden) {
            return null;
        }
        /** @type {?} */
        var value = control.value;
        /** @type {?} */
        var isEmpty$$1 = value == null || typeof value === 'string' && value.length === 0;
        return isEmpty$$1 ? { 'required': true } : null;
    };
    return RequiredValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateValidator = /** @class */ (function () {
    function DateValidator() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    DateValidator.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.hidden) {
            return null;
        }
        /** @type {?} */
        var value = control.value;
        if (value && value.length !== 0) {
            // YYYY-MM-DD or DD-MM-YYYY
            /** @type {?} */
            var test = !/Invalid|NaN/.test(new Date(value).toString());
            return test ? null : { 'date': true };
        }
        else {
            return null;
        }
    };
    return DateValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MinValidator = /** @class */ (function () {
    function MinValidator() {
    }
    /**
     * @param {?} min
     * @return {?}
     */
    MinValidator.prototype.validate = /**
     * @param {?} min
     * @return {?}
     */
    function (min) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (control.hidden) {
                return null;
            }
            if (control.value && control.value.length !== 0) {
                /** @type {?} */
                var v = control.value;
                return v >= min ? null : { 'min': { requiredValue: min, actualValue: v } };
            }
            return null;
        });
    };
    return MinValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaxValidator = /** @class */ (function () {
    function MaxValidator() {
    }
    /**
     * @param {?} max
     * @return {?}
     */
    MaxValidator.prototype.validate = /**
     * @param {?} max
     * @return {?}
     */
    function (max) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (control.hidden) {
                return null;
            }
            if (control.value && control.value.length !== 0) {
                /** @type {?} */
                var v = control.value;
                return v <= max ? null : { 'max': { requiredValue: max, actualValue: v } };
            }
            return null;
        });
    };
    return MaxValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MinDateValidator = /** @class */ (function () {
    function MinDateValidator() {
    }
    /**
     * @param {?} min
     * @return {?}
     */
    MinDateValidator.prototype.validate = /**
     * @param {?} min
     * @return {?}
     */
    function (min) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (control.hidden) {
                return null;
            }
            if (control.value && control.value.length !== 0) {
                if (!new DateValidator().validate(control.value)) {
                    /** @type {?} */
                    var newDate = new Date(control.value);
                    return newDate.getTime() < min.getTime() ? { 'mindate': { 'requiredDate': min, actualDate: newDate } } : null;
                }
                else {
                    return { 'mindate': { 'requiredDate': min } };
                }
            }
            return null;
        });
    };
    return MinDateValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaxDateValidator = /** @class */ (function () {
    function MaxDateValidator() {
    }
    /**
     * @param {?} max
     * @return {?}
     */
    MaxDateValidator.prototype.validate = /**
     * @param {?} max
     * @return {?}
     */
    function (max) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (control.hidden) {
                return null;
            }
            if (control.value && control.value.length !== 0) {
                if (!new DateValidator().validate(control.value)) {
                    /** @type {?} */
                    var newDate = new Date(control.value);
                    return newDate.getTime() > max.getTime() ? { 'maxdate': { 'requiredDate': max, actualDate: newDate } } : null;
                }
                else {
                    return { 'maxdate': { 'requiredDate': max } };
                }
            }
            return null;
        });
    };
    return MaxDateValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FutureDateRestrictionValidator = /** @class */ (function () {
    function FutureDateRestrictionValidator() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    FutureDateRestrictionValidator.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.hidden) {
            return null;
        }
        /** @type {?} */
        var value = control.value;
        /** @type {?} */
        var now = new Date();
        if (value && value.length !== 0) {
            if (!new DateValidator().validate(value)) {
                /** @type {?} */
                var d = new Date(value);
                return d.getTime() > now.getTime() ? { 'futureDateRestriction': true } : null;
            }
        }
        return null;
    };
    return FutureDateRestrictionValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsExpressionHelper = /** @class */ (function () {
    function JsExpressionHelper() {
    }
    /**
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    JsExpressionHelper.prototype.calcBMI = /**
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    function (height, weight) {
        /** @type {?} */
        var r;
        if (height && weight) {
            r = (weight / (height / 100 * height / 100)).toFixed(1);
        }
        return height && weight ? parseFloat(r) : null;
    };
    /**
     * @param {?} bmiForAgeRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    JsExpressionHelper.prototype.calcBMIForAgeZscore = /**
     * @param {?} bmiForAgeRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    function (bmiForAgeRef, height, weight) {
        /** @type {?} */
        var bmi;
        if (height && weight) {
            bmi = (weight / (height / 100 * height / 100)).toFixed(1);
        }
        /** @type {?} */
        var refSectionObject = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["first"])(bmiForAgeRef);
        /** @type {?} */
        var formattedSDValue;
        if (refSectionObject) {
            /** @type {?} */
            var refObjectValues = Object.keys(refSectionObject).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return refSectionObject[key]; })).map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x; }));
            /** @type {?} */
            var refObjectKeys = Object.keys(refSectionObject);
            /** @type {?} */
            var minimumValue = refObjectValues[1];
            /** @type {?} */
            var minReferencePoint_1 = [];
            if (bmi < minimumValue) {
                minReferencePoint_1.push(minimumValue);
            }
            else {
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(refObjectValues, (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    if (value <= bmi) {
                        minReferencePoint_1.push(value);
                    }
                }));
            }
            /** @type {?} */
            var lastReferenceValue_1 = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["last"])(minReferencePoint_1);
            /** @type {?} */
            var lastValueIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["findIndex"])(refObjectValues, (/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return o === lastReferenceValue_1;
            }));
            /** @type {?} */
            var SDValue = refObjectKeys[lastValueIndex];
            formattedSDValue = SDValue.replace('SD', '');
            if (formattedSDValue.includes('neg')) {
                formattedSDValue = formattedSDValue.substring(1, 0);
                formattedSDValue = '-' + formattedSDValue;
            }
            if (formattedSDValue === 'S' || formattedSDValue === 'L' || formattedSDValue === 'M' || formattedSDValue === '-5') {
                formattedSDValue = '-4';
            }
        }
        return bmi && refSectionObject ? formattedSDValue : null;
    };
    /**
     * @param {?} weightForHeightRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    JsExpressionHelper.prototype.calcWeightForHeightZscore = /**
     * @param {?} weightForHeightRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    function (weightForHeightRef, height, weight) {
        /** @type {?} */
        var refSection;
        /** @type {?} */
        var formattedSDValue;
        if (height && weight) {
            height = parseFloat(height).toFixed(1);
        }
        /** @type {?} */
        var standardHeightMin = 45;
        /** @type {?} */
        var standardMaxHeight = 110;
        if (height < standardHeightMin || height > standardMaxHeight) {
            formattedSDValue = -4;
        }
        else {
            refSection = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"])(weightForHeightRef, (/**
             * @param {?} refObject
             * @return {?}
             */
            function (refObject) {
                return parseFloat(refObject['Length']).toFixed(1) === height;
            }));
        }
        /** @type {?} */
        var refSectionObject = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["first"])(refSection);
        if (refSectionObject) {
            /** @type {?} */
            var refObjectValues = Object.keys(refSectionObject).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return refSectionObject[key]; })).map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x; }));
            /** @type {?} */
            var refObjectKeys = Object.keys(refSectionObject);
            /** @type {?} */
            var minimumValue = refObjectValues[1];
            /** @type {?} */
            var minReferencePoint_2 = [];
            if (weight < minimumValue) {
                minReferencePoint_2.push(minimumValue);
            }
            else {
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(refObjectValues, (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    if (value <= weight) {
                        minReferencePoint_2.push(value);
                    }
                }));
            }
            /** @type {?} */
            var lastReferenceValue_2 = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["last"])(minReferencePoint_2);
            /** @type {?} */
            var lastValueIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["findIndex"])(refObjectValues, (/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return o === lastReferenceValue_2;
            }));
            /** @type {?} */
            var SDValue = refObjectKeys[lastValueIndex];
            formattedSDValue = SDValue.replace('SD', '');
            if (formattedSDValue.includes('neg')) {
                formattedSDValue = formattedSDValue.substring(1, 0);
                formattedSDValue = '-' + formattedSDValue;
            }
            if (formattedSDValue === 'S' || formattedSDValue === 'L' || formattedSDValue === 'M' || formattedSDValue === '-5') {
                formattedSDValue = '-4';
            }
        }
        return height && weight ? formattedSDValue : null;
    };
    /**
     * @param {?} heightForAgeRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    JsExpressionHelper.prototype.calcHeightForAgeZscore = /**
     * @param {?} heightForAgeRef
     * @param {?} height
     * @param {?} weight
     * @return {?}
     */
    function (heightForAgeRef, height, weight) {
        /** @type {?} */
        var refSectionObject = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["first"])(heightForAgeRef);
        /** @type {?} */
        var formattedSDValue;
        if (refSectionObject) {
            /** @type {?} */
            var refObjectValues = Object.keys(refSectionObject).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return refSectionObject[key]; })).map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x; }));
            /** @type {?} */
            var refObjectKeys = Object.keys(refSectionObject);
            /** @type {?} */
            var minimumValue = refObjectValues[1];
            /** @type {?} */
            var minReferencePoint_3 = [];
            if (height < minimumValue) {
                minReferencePoint_3.push(minimumValue);
            }
            else {
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(refObjectValues, (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    if (value <= height) {
                        minReferencePoint_3.push(value);
                    }
                }));
            }
            /** @type {?} */
            var lastReferenceValue_3 = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["last"])(minReferencePoint_3);
            /** @type {?} */
            var lastValueIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["findIndex"])(refObjectValues, (/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return o === lastReferenceValue_3;
            }));
            /** @type {?} */
            var SDValue = refObjectKeys[lastValueIndex];
            formattedSDValue = SDValue.replace('SD', '');
            if (formattedSDValue.includes('neg')) {
                formattedSDValue = formattedSDValue.substring(1, 0);
                formattedSDValue = '-' + formattedSDValue;
            }
            if (formattedSDValue === 'S' || formattedSDValue === 'L' || formattedSDValue === 'M' || formattedSDValue === '-5') {
                formattedSDValue = '-4';
            }
        }
        return height && weight && refSectionObject ? formattedSDValue : null;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    JsExpressionHelper.prototype.isEmpty = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val === undefined || val === null || val === '' || val === 'null' || val === 'undefined') {
            return true;
        }
        if (Array.isArray(val) && val.length === 0) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} array
     * @param {?} members
     * @return {?}
     */
    JsExpressionHelper.prototype.arrayContains = /**
     * @param {?} array
     * @param {?} members
     * @return {?}
     */
    function (array, members) {
        if (Array.isArray(members)) {
            if (members.length === 0) {
                return true;
            }
            /** @type {?} */
            var contains = true;
            for (var i = 0; i < members.length; i++) {
                /** @type {?} */
                var val = members[i];
                if (array.indexOf(val) === -1) {
                    contains = false;
                }
            }
            return contains;
        }
        else {
            return array.indexOf(members) !== -1;
        }
    };
    /**
     * @param {?} key
     * @param {?} array
     * @return {?}
     */
    JsExpressionHelper.prototype.extractRepeatingGroupValues = /**
     * @param {?} key
     * @param {?} array
     * @return {?}
     */
    function (key, array) {
        /** @type {?} */
        var values = array.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return item[key];
        }));
        return values;
    };
    /**
     * @param {?} value
     * @param {?} format
     * @param {?} offset
     * @return {?}
     */
    JsExpressionHelper.prototype.formatDate = /**
     * @param {?} value
     * @param {?} format
     * @param {?} offset
     * @return {?}
     */
    function (value, format, offset) {
        format = format || 'yyyy-MM-dd';
        offset = offset || '+0300';
        if (!(value instanceof Date)) {
            value = new Date(value);
            if (value === null || value === undefined) {
                throw new Error('DateFormatException: value passed ' +
                    'is not a valid date');
            }
        }
        return value; // TODO implement this
        // return $filter('date')(value, format, offset);
    };
    /**
     * @param {?} array
     * @param {?} members
     * @return {?}
     */
    JsExpressionHelper.prototype.arrayContainsAny = /**
     * @param {?} array
     * @param {?} members
     * @return {?}
     */
    function (array, members) {
        if (Array.isArray(members)) {
            if (members.length === 0) {
                return true;
            }
            /** @type {?} */
            var contains = false;
            for (var i = 0; i < members.length; i++) {
                /** @type {?} */
                var val = members[i];
                if (array.indexOf(val) !== -1) {
                    contains = true;
                }
            }
            return contains;
        }
        else {
            return array.indexOf(members) !== -1;
        }
    };
    Object.defineProperty(JsExpressionHelper.prototype, "helperFunctions", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var helper = this;
            return {
                arrayContainsAny: helper.arrayContainsAny,
                calcBMI: helper.calcBMI,
                calcBMIForAgeZscore: helper.calcBMIForAgeZscore,
                calcWeightForHeightZscore: helper.calcWeightForHeightZscore,
                calcHeightForAgeZscore: helper.calcHeightForAgeZscore,
                isEmpty: helper.isEmpty,
                arrayContains: helper.arrayContains,
                extractRepeatingGroupValues: helper.extractRepeatingGroupValues
            };
        },
        enumerable: true,
        configurable: true
    });
    return JsExpressionHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Validations = /** @class */ (function () {
    function Validations() {
    }
    Validations.JSExpressionValidatorsEnabled = false;
    return Validations;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsExpressionValidator = /** @class */ (function () {
    function JsExpressionValidator() {
    }
    /**
     * @param {?} model
     * @param {?=} form
     * @return {?}
     */
    JsExpressionValidator.prototype.validate = /**
     * @param {?} model
     * @param {?=} form
     * @return {?}
     */
    function (model, form) {
        // convert helper functions to string
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (!Validations.JSExpressionValidatorsEnabled) {
                return null;
            }
            /** @type {?} */
            var expression = model.failsWhenExpression;
            /** @type {?} */
            var helper = new JsExpressionHelper();
            /** @type {?} */
            var dataDependencies = {};
            /** @type {?} */
            var helperFunctions = helper.helperFunctions;
            /** @type {?} */
            var runnable = new ExpressionRunner().getRunnable(expression, control, helperFunctions, dataDependencies, form);
            if (runnable.run()) {
                return { 'js_expression': { 'expression': expression, message: model.message } };
            }
            return null;
        });
    };
    return JsExpressionValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Messages = /** @class */ (function () {
    function Messages() {
    }
    Messages.REQUIRED_FIELD_MSG = 'This field is required!';
    Messages.INVALID_DATE_MSG = 'Provided date is invalid!';
    Messages.FUTURE_DATE_RESTRICTION_MSG = 'Future date is not allowed!';
    Messages.MIN_LENGTH_MSG = 'Min Length should be {minLength}';
    Messages.MAX_LENGTH_MSG = 'Max Length should be {maxLength}';
    Messages.MAX_DATE_MSG = 'Max Date should be {maxDate}';
    Messages.MIN_DATE_MSG = 'Min Date should be {minDate}';
    Messages.MAX_MSG = 'Max value should be {max}';
    Messages.MIN_MSG = 'Min value should be {min}';
    return Messages;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidationFactory = /** @class */ (function () {
    function ValidationFactory() {
    }
    /**
     * @param {?} question
     * @param {?=} form
     * @return {?}
     */
    ValidationFactory.prototype.getValidators = /**
     * @param {?} question
     * @param {?=} form
     * @return {?}
     */
    function (question, form) {
        var _this = this;
        /** @type {?} */
        var list = [];
        if (question.validators) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(question.validators, (/**
             * @param {?} validator
             * @return {?}
             */
            function (validator) {
                switch (validator.type) {
                    case 'date':
                        list.push(_this.dateValidator);
                        /** @type {?} */
                        var allowFutureDates = ((/** @type {?} */ (validator))).allowFutureDates;
                        if (!allowFutureDates) {
                            list.push(_this.futureDateRestrictionValidator);
                        }
                        break;
                    case 'js_expression':
                        list.push(_this.jsExpressionValidator.validate((/** @type {?} */ (validator)), form));
                        break;
                    case 'max':
                        list.push(_this.getMaxValueValidator(((/** @type {?} */ (validator))).max));
                        break;
                    case 'min':
                        list.push(_this.getMinValueValidator(((/** @type {?} */ (validator))).min));
                        break;
                    case 'conditionalRequired':
                        list.push(_this.conditionalRequiredValidator.validate((/** @type {?} */ (validator))));
                        break;
                    case 'conditionalAnswered':
                        list.push(_this.conditionalAnsweredValidator.validate((/** @type {?} */ (validator))));
                        break;
                }
            }));
        }
        if (question.required && typeof (question.required) === 'string' && question.required === 'true') {
            list.push(this.requiredValidator);
        }
        return list;
    };
    Object.defineProperty(ValidationFactory.prototype, "conditionalRequiredValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return new ConditionalRequiredValidator();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "conditionalAnsweredValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return new ConditionalAnsweredValidator();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "requiredValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return new RequiredValidator().validate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "dateValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return new DateValidator().validate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "futureDateRestrictionValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return new FutureDateRestrictionValidator().validate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "maxDateValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return new MaxDateValidator().validate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "minDateValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return new MinDateValidator().validate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "minLengthValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "maxLengthValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} min
     * @return {?}
     */
    ValidationFactory.prototype.getMinValueValidator = /**
     * @param {?} min
     * @return {?}
     */
    function (min) {
        return new MinValidator().validate(min);
    };
    /**
     * @param {?} max
     * @return {?}
     */
    ValidationFactory.prototype.getMaxValueValidator = /**
     * @param {?} max
     * @return {?}
     */
    function (max) {
        return new MaxValidator().validate(max);
    };
    Object.defineProperty(ValidationFactory.prototype, "jsExpressionValidator", {
        get: /**
         * @return {?}
         */
        function () {
            return new JsExpressionValidator();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} errors
     * @param {?} question
     * @return {?}
     */
    ValidationFactory.prototype.errors = /**
     * @param {?} errors
     * @param {?} question
     * @return {?}
     */
    function (errors, question) {
        /** @type {?} */
        var messages = [];
        for (var property in errors) {
            if (errors.hasOwnProperty(property)) {
                switch (property) {
                    case 'required':
                        messages.push(Messages.REQUIRED_FIELD_MSG);
                        break;
                    case 'date':
                        messages.push(Messages.INVALID_DATE_MSG);
                        break;
                    case 'futureDateRestriction':
                        messages.push(Messages.FUTURE_DATE_RESTRICTION_MSG);
                        break;
                    case 'minlength':
                        messages.push(Messages.MIN_LENGTH_MSG.replace('{minLength}', errors.minlength.requiredLength));
                        break;
                    case 'maxlength':
                        messages.push(Messages.MIN_LENGTH_MSG.replace('{maxLength}', errors.maxlength.requiredLength));
                        break;
                    case 'maxdate':
                        messages.push(Messages.MAX_DATE_MSG.replace('{maxDate}', errors.maxdate.requiredDate));
                        break;
                    case 'mindate':
                        messages.push(Messages.MIN_DATE_MSG.replace('{minDate}', errors.mindate.requiredDate));
                        break;
                    case 'max':
                        messages.push(Messages.MAX_MSG.replace('{max}', errors.max.requiredValue));
                        break;
                    case 'min':
                        messages.push(Messages.MIN_MSG.replace('{min}', errors.min.requiredValue));
                        break;
                    case 'js_expression':
                        messages.push(errors['js_expression'].message);
                        break;
                    case 'conditional_required':
                        messages.push(errors['conditional_required'].message);
                        break;
                    case 'conditional_answered':
                        messages.push(errors['conditional_answered'].message);
                        break;
                }
            }
        }
        return messages;
    };
    ValidationFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    ValidationFactory.ctorParameters = function () { return []; };
    return ValidationFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HidersDisablersFactory = /** @class */ (function () {
    function HidersDisablersFactory(expressionRunner, expressionHelper, _debugModeService) {
        this.expressionRunner = expressionRunner;
        this.expressionHelper = expressionHelper;
        this._debugModeService = _debugModeService;
    }
    /**
     * @param {?} question
     * @param {?} control
     * @param {?=} form
     * @return {?}
     */
    HidersDisablersFactory.prototype.getJsExpressionDisabler = /**
     * @param {?} question
     * @param {?} control
     * @param {?=} form
     * @return {?}
     */
    function (question, control, form) {
        /** @type {?} */
        var runnable = this.expressionRunner.getRunnable((/** @type {?} */ (question.disable)), control, this.expressionHelper.helperFunctions, {}, form);
        /** @type {?} */
        var disabler = {
            toDisable: false,
            disableWhenExpression: (/** @type {?} */ (question.disable)),
            reEvaluateDisablingExpression: (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var result = runnable.run();
                disabler.toDisable = result;
            })
        };
        return disabler;
    };
    /**
     * @param {?} question
     * @param {?} control
     * @param {?=} form
     * @return {?}
     */
    HidersDisablersFactory.prototype.getJsExpressionHider = /**
     * @param {?} question
     * @param {?} control
     * @param {?=} form
     * @return {?}
     */
    function (question, control, form) {
        /** @type {?} */
        var hide = question.hide;
        /** @type {?} */
        var value = typeof hide === 'object' ? this.convertHideObjectToString(hide) : (/** @type {?} */ (question.hide));
        // check if debugging has been enabled
        /** @type {?} */
        var debugEnabled = this._debugModeService.debugEnabled();
        /** @type {?} */
        var runnable = this.expressionRunner.getRunnable(value, control, this.expressionHelper.helperFunctions, {}, form);
        /** @type {?} */
        var hider = {
            toHide: false,
            hideWhenExpression: value,
            reEvaluateHidingExpression: (/**
             * @return {?}
             */
            function () {
                /* if debug is enabled then hiders to be false
                else run the normal eveluator i.e runnable.run()
                */
                if (debugEnabled === true) {
                    hider.toHide = false;
                }
                else {
                    hider.toHide = runnable.run();
                }
            })
        };
        return hider;
    };
    /**
     * @param {?} hide
     * @return {?}
     */
    HidersDisablersFactory.prototype.convertHideObjectToString = /**
     * @param {?} hide
     * @return {?}
     */
    function (hide) {
        if (hide.value instanceof Array) {
            /** @type {?} */
            var arrayStr = '\'' + hide.value.join('\',\'') + '\'';
            /** @type {?} */
            var exp = '!arrayContains([' + arrayStr + '],' + hide.field + ')';
            return exp;
        }
        return '';
    };
    HidersDisablersFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    HidersDisablersFactory.ctorParameters = function () { return [
        { type: ExpressionRunner },
        { type: JsExpressionHelper },
        { type: DebugModeService }
    ]; };
    return HidersDisablersFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertsFactory = /** @class */ (function () {
    function AlertsFactory(expressionRunner, expressionHelper) {
        this.expressionRunner = expressionRunner;
        this.expressionHelper = expressionHelper;
    }
    /**
     * @param {?} question
     * @param {?} control
     * @param {?=} form
     * @return {?}
     */
    AlertsFactory.prototype.getJsExpressionshowAlert = /**
     * @param {?} question
     * @param {?} control
     * @param {?=} form
     * @return {?}
     */
    function (question, control, form) {
        /** @type {?} */
        var runnable = this.expressionRunner.getRunnable(question.alert.alertWhenExpression, control, this.expressionHelper.helperFunctions, {}, form);
        /** @type {?} */
        var showAlert = {
            shown: false,
            alertWhenExpression: question.alert.alertWhenExpression,
            alertMessage: question.alert.message,
            reEvaluateAlertExpression: (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var result = runnable.run();
                showAlert.shown = result;
            })
        };
        return showAlert;
    };
    AlertsFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    AlertsFactory.ctorParameters = function () { return [
        { type: ExpressionRunner },
        { type: JsExpressionHelper }
    ]; };
    return AlertsFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormControlService = /** @class */ (function () {
    function FormControlService(validationFactory, hidersDisablersFactory, alertsFactory) {
        this.alertsFactory = alertsFactory;
        this.controls = [];
        this.validationFactory = validationFactory;
        this.hidersDisablersFactory = hidersDisablersFactory;
    }
    /**
     * @param {?} questionModel
     * @param {?} parentControl
     * @param {?} generateChildren
     * @param {?=} form
     * @return {?}
     */
    FormControlService.prototype.generateControlModel = /**
     * @param {?} questionModel
     * @param {?} parentControl
     * @param {?} generateChildren
     * @param {?=} form
     * @return {?}
     */
    function (questionModel, parentControl, generateChildren, form) {
        if (questionModel instanceof QuestionBase) {
            if (questionModel.controlType === AfeControlType.AfeFormArray) {
                return this.generateFormArray(questionModel, parentControl, form);
            }
            if (questionModel.controlType === AfeControlType.AfeFormGroup) {
                return this.generateFormGroupModel(questionModel, generateChildren, parentControl, form);
            }
            if (questionModel.controlType === AfeControlType.AfeFormControl) {
                return this.generateFormControl(questionModel, parentControl, form);
            }
        }
        return null;
    };
    /**
     * @param {?} question
     * @param {?} generateChildren
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    FormControlService.prototype.generateFormGroupModel = /**
     * @param {?} question
     * @param {?} generateChildren
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    function (question, generateChildren, parentControl, form) {
        /** @type {?} */
        var formGroup = new AfeFormGroup({});
        this.wireHidersDisablers(question, formGroup, form);
        this.wireAlerts(question, formGroup, form);
        if (parentControl instanceof AfeFormGroup) {
            parentControl.setControl(question.key, formGroup);
        }
        /** @type {?} */
        var asGroup = (/** @type {?} */ (question));
        if (generateChildren && asGroup && asGroup.questions.length > 0) {
            this._generateFormGroupChildrenModel(asGroup.questions, formGroup, form);
        }
        return formGroup;
    };
    /**
     * @param {?} questions
     * @param {?} parentControl
     * @param {?=} form
     * @return {?}
     */
    FormControlService.prototype._generateFormGroupChildrenModel = /**
     * @param {?} questions
     * @param {?} parentControl
     * @param {?=} form
     * @return {?}
     */
    function (questions, parentControl, form) {
        var _this = this;
        if (questions.length > 0) {
            questions.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                /** @type {?} */
                var generated = _this.generateControlModel(element, parentControl, true, form);
                if (generated !== null) {
                    parentControl.addControl(element.key, generated);
                }
            }));
        }
    };
    /**
     * @param {?} question
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    FormControlService.prototype.generateFormArray = /**
     * @param {?} question
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    function (question, parentControl, form) {
        /** @type {?} */
        var validators = this.validationFactory.getValidators(question, form);
        /** @type {?} */
        var formArray;
        if (validators && validators.length > 0) {
            formArray = new AfeFormArray([], validators[0]);
        }
        else {
            formArray = new AfeFormArray([]);
        }
        formArray.uuid = question.key;
        this.wireHidersDisablers(question, formArray, form);
        this.wireAlerts(question, formArray, form);
        if (parentControl instanceof AfeFormGroup) {
            parentControl.setControl(question.key, formArray);
        }
        return formArray;
    };
    /**
     * @param {?} question
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    FormControlService.prototype.generateFormControl = /**
     * @param {?} question
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    function (question, parentControl, form) {
        /** @type {?} */
        var value = question.defaultValue || '';
        /** @type {?} */
        var validators = this.validationFactory.getValidators(question, form);
        /** @type {?} */
        var control = new AfeFormControl(value, validators);
        control.uuid = question.key;
        this.wireHidersDisablers(question, control, form);
        this.wireAlerts(question, control, form);
        this.wireCalculator(question, control, (form ? form.dataSourcesContainer.dataSources : null));
        if (parentControl instanceof AfeFormGroup) {
            parentControl.setControl(question.key, control);
        }
        return control;
    };
    /**
     * @private
     * @param {?} question
     * @param {?} control
     * @param {?=} form
     * @return {?}
     */
    FormControlService.prototype.wireAlerts = /**
     * @private
     * @param {?} question
     * @param {?} control
     * @param {?=} form
     * @return {?}
     */
    function (question, control, form) {
        if (question.alert && question.alert !== '') {
            /** @type {?} */
            var alert_1 = this.alertsFactory.getJsExpressionshowAlert(question, control, form);
            control.setAlertFn(alert_1);
        }
    };
    /**
     * @private
     * @param {?} question
     * @param {?} control
     * @param {?=} form
     * @return {?}
     */
    FormControlService.prototype.wireHidersDisablers = /**
     * @private
     * @param {?} question
     * @param {?} control
     * @param {?=} form
     * @return {?}
     */
    function (question, control, form) {
        if (question.hide && question.hide !== '') {
            /** @type {?} */
            var hider = this.hidersDisablersFactory.getJsExpressionHider(question, control, form);
            control.setHidingFn(hider);
        }
        if (question.disable && question.disable !== '') {
            /** @type {?} */
            var disable = this.hidersDisablersFactory.getJsExpressionDisabler(question, control, form);
            control.setDisablingFn(disable);
        }
    };
    /**
     * @private
     * @param {?} question
     * @param {?} control
     * @param {?=} dataSource
     * @return {?}
     */
    FormControlService.prototype.wireCalculator = /**
     * @private
     * @param {?} question
     * @param {?} control
     * @param {?=} dataSource
     * @return {?}
     */
    function (question, control, dataSource) {
        if (question.calculateExpression && question.calculateExpression !== '') {
            /** @type {?} */
            var helper = new JsExpressionHelper();
            /** @type {?} */
            var runner = new ExpressionRunner();
            /** @type {?} */
            var runnable = runner.getRunnable(question.calculateExpression, control, helper.helperFunctions, dataSource);
            // this functionality strictly assumes the calculateExpression function has been defined in the JsExpressionHelper class
            control.setCalculatorFn(runnable.run);
        }
    };
    FormControlService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    FormControlService.ctorParameters = function () { return [
        { type: ValidationFactory },
        { type: HidersDisablersFactory },
        { type: AlertsFactory }
    ]; };
    return FormControlService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_STYLES = "a {\n      color: white;\n      text-decoration: none;\n      font-size: 12px;\n      text-transform: uppercase;\n    }\n\n    ul {\n      list-style-type: none;\n      margin: 2px auto;\n      position: relative;\n    }\n\n    li {\n      display: block;\n      padding: 10px 20px;\n      white-space: nowrap;\n      transition: all 0.3s ease-in;\n      border-bottom: 4px solid transparent;\n    }\n\n    li:hover {\n      border-bottom: 4px solid white;\n      opacity: 0.7;\n      cursor: pointer;\n    }\n\n    .owl-theme .owl-controls .owl-nav {\n      position: absolute;\n      width: 100%;\n      top: 0;\n    }\n\n    .owl-theme .owl-controls .owl-nav [class*=\"owl-\"] {\n      position: absolute;\n      background: none;\n      color: black;\n    }\n\n    .owl-theme .owl-controls .owl-nav [class*=\"owl-\"]:hover {\n      background: none;\n      color: black;\n    }\n\n    .owl-theme .owl-controls .owl-nav .owl-next {\n      right: 0;\n      transform: translate(120%);\n    }\n\n    .owl-theme .owl-controls .owl-nav .owl-prev {\n      left: 0;\n      transform: translate(-120%);\n    }\n\n    .slick-initialized .swipe-tab-content {\n      position: relative;\n      min-height: 365px;\n    }\n    @media screen and (min-width: 767px) {\n      .slick-initialized .swipe-tab-content {\n        min-height: 500px;\n      }\n    }\n    .slick-initialized .swipe-tab {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 50px;\n      background: none;\n      border: 0;\n      color: #757575;\n      cursor: pointer;\n      text-align: center;\n      border-bottom: 2px solid rgba(51, 122, 183, 0);\n      transition: all 0.5s;\n    }\n    .slick-initialized .swipe-tab:hover {\n      color: #337AB7;\n    }\n    .slick-initialized .swipe-tab.active-tab {\n      border-bottom-color: #337AB7;\n      color: #337AB7;\n      font-weight: bold;\n    }\n\n    .disabled {\n      opacity: .5;\n      pointer-events: none;\n    }\n\n    .select2-container {\n      margin-top: -5px;\n    }\n\n    .btn {\n      padding: 0px 12px !important;\n    }\n\n    .form-tooltip{\n      color:rgb(51, 122, 183);\n      display: inline-block;\n    }\n    .question-info{\n          opacity:0;\n          height:0px;\n          display: none;\n          transition-duration: opacity 1s ease-out;\n          transtion-delay: 0.5s;\n          padding-top: 2px;\n          padding-bottom: 2px;\n          color: #696969;\n          border-style: ridge;\n          border-width: 1px;\n          border-color: #337ab7;\n          margin-top: 2px;\n    }\n    .hide-info{\n      display:none;\n      height:0px;\n    }\n    .form-tooltip:hover ~ .question-info {\n          display:block;\n          opacity:1;\n          height:auto;\n     }\n    .form-tooltip .tooltipcontent::after {\n          content: \" \";\n          position: absolute;\n          bottom: 100%;  /* At the top of the tooltip */\n          right: 0%;\n          margin-left: -5px;\n          border-width: 5px;\n          border-style: solid;\n          border-top-color: transparent;\n          border-right-color: transparent;\n          border-bottom-color: #337ab7;\n          border-left-color: transparent;\n }\n\n    ng-select.form-control {\n      padding-top: 0;\n      height: auto;\n      padding-bottom: 0;\n    }\n\n .forms-dropdown-menu {\n     max-height: 450px;\n     overflow-y: scroll;\n }\n .no-border {\n  border: 0;\n  box-shadow: none;\n}\n\n    ";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataSources = /** @class */ (function () {
    function DataSources() {
        this._dataSources = {};
    }
    Object.defineProperty(DataSources.prototype, "dataSources", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSources;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @param {?} dataSource
     * @param {?=} unWrap
     * @return {?}
     */
    DataSources.prototype.registerDataSource = /**
     * @param {?} key
     * @param {?} dataSource
     * @param {?=} unWrap
     * @return {?}
     */
    function (key, dataSource, unWrap) {
        if (unWrap === void 0) { unWrap = false; }
        if (unWrap) {
            // tslint:disable-next-line:forin
            for (var o in dataSource) {
                console.log('registering', o, dataSource[o]);
                this.registerDataSource(o, dataSource[o], false);
            }
        }
        if (this.dataSources[key]) {
            console.warn('Overriding registered data source', key);
        }
        this._dataSources[key] = dataSource;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DataSources.prototype.clearDataSource = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        delete this._dataSources[key];
    };
    DataSources.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    DataSources.ctorParameters = function () { return []; };
    return DataSources;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { concat, of, Observable, Subject, BehaviorSubject } from 'rxjs';
// import * as _ from 'lodash';
// import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, map } from 'rxjs/operators';
// import { QuestionBase } from '../question-models';
var FormRendererComponent = /** @class */ (function () {
    // items$: Observable<any[]>;
    // itemsLoading = false;
    // itemsInput$ = new Subject<string>();
    function FormRendererComponent(validationFactory, dataSources, formErrorsService, document) {
        this.validationFactory = validationFactory;
        this.dataSources = dataSources;
        this.formErrorsService = formErrorsService;
        this.document = document;
        this.childComponents = [];
        this.isCollapsed = false;
        this.activeTab = 0;
    }
    /**
     * @return {?}
     */
    FormRendererComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setUpRemoteSelect();
        this.setUpFileUpload();
        if (this.node && this.node.form) {
            /** @type {?} */
            var tab = this.node.form.valueProcessingInfo.lastFormTab;
            if (tab && tab !== this.activeTab) {
                this.activeTab = tab;
            }
        }
        if (this.node && this.node.question.renderingType === 'form') {
            this.formErrorsService.announceErrorField$.subscribe((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.scrollToControl(error);
            }));
        }
        if (this.node && this.node.question.renderingType === 'section') {
            this.isCollapsed = !((/** @type {?} */ (this.node.question))).isExpanded;
        }
        if (this.parentComponent) {
            this.parentComponent.addChildComponent(this);
        }
    };
    /**
     * @param {?} child
     * @return {?}
     */
    FormRendererComponent.prototype.addChildComponent = /**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        this.childComponents.push(child);
    };
    /**
     * @return {?}
     */
    FormRendererComponent.prototype.setUpRemoteSelect = /**
     * @return {?}
     */
    function () {
        if (this.node && this.node.question.extras &&
            this.node.question.renderingType === 'remote-select') {
            // let selectQuestion = this.node.form.searchNodeByQuestionId(this.node.question.key)[0];
            this.dataSource = this.dataSources.dataSources[this.node.question.dataSource];
            /*
             let defaltValues = of([]);
             if (this.dataSource.resolveSelectedValue(selectQuestion.control.value)) {
               defaltValues = this.dataSource.resolveSelectedValue(selectQuestion.control.value).pipe(
                 catchError(() => of([])), // empty list on error
               );
             }
             this.items$ = concat(
               defaltValues,
               this.itemsInput$.pipe(
                 debounceTime(200),
                 distinctUntilChanged(),
                 tap(() => this.itemsLoading = true),
                 switchMap(term => this.dataSource.searchOptions(term).pipe(
                   catchError(() => of([])), // empty list on error
                   tap(() => {
                     this.itemsLoading = false
                   })
                 ))
               )
             );
             */
            if (this.dataSource && this.node.question.dataSourceOptions) {
                this.dataSource.dataSourceOptions = this.node.question.dataSourceOptions;
            }
        }
    };
    /**
     * @return {?}
     */
    FormRendererComponent.prototype.setUpFileUpload = /**
     * @return {?}
     */
    function () {
        if (this.node && this.node.question.extras && this.node.question.renderingType === 'file') {
            this.dataSource = this.dataSources.dataSources[this.node.question.dataSource];
            // console.log('Key', this.node.question);
            // console.log('Data source', this.dataSource);
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    FormRendererComponent.prototype.checkSection = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.question.renderingType === 'section') {
            /** @type {?} */
            var groupChildrenHidden_1 = false;
            /** @type {?} */
            var allSectionControlsHidden = Object.keys(node.children).every((/**
             * @param {?} k
             * @return {?}
             */
            function (k) {
                /** @type {?} */
                var innerNode = node.children[k];
                if (innerNode instanceof GroupNode) {
                    groupChildrenHidden_1 = Object.keys(innerNode.children).every((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return innerNode.children[i].control.hidden; }));
                }
                return node.children[k].control.hidden || groupChildrenHidden_1;
            }));
            return !allSectionControlsHidden;
        }
        return true;
    };
    /**
     * @param {?} tabNumber
     * @return {?}
     */
    FormRendererComponent.prototype.clickTab = /**
     * @param {?} tabNumber
     * @return {?}
     */
    function (tabNumber) {
        this.activeTab = tabNumber;
    };
    /**
     * @return {?}
     */
    FormRendererComponent.prototype.loadPreviousTab = /**
     * @return {?}
     */
    function () {
        if (!this.isCurrentTabFirst()) {
            this.clickTab(this.activeTab - 1);
            document.body.scrollTop = 0;
        }
    };
    /**
     * @return {?}
     */
    FormRendererComponent.prototype.isCurrentTabFirst = /**
     * @return {?}
     */
    function () {
        return this.activeTab === 0;
    };
    /**
     * @return {?}
     */
    FormRendererComponent.prototype.isCurrentTabLast = /**
     * @return {?}
     */
    function () {
        return this.activeTab === this.node.question['questions'].length - 1;
    };
    /**
     * @return {?}
     */
    FormRendererComponent.prototype.loadNextTab = /**
     * @return {?}
     */
    function () {
        if (!this.isCurrentTabLast()) {
            this.clickTab(this.activeTab + 1);
            document.body.scrollTop = 0;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FormRendererComponent.prototype.tabSelected = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.activeTab = $event;
        this.setPreviousTab();
    };
    /**
     * @return {?}
     */
    FormRendererComponent.prototype.setPreviousTab = /**
     * @return {?}
     */
    function () {
        if (this.node && this.node.form) {
            this.node.form.valueProcessingInfo['lastFormTab'] = this.activeTab;
        }
    };
    /**
     * @return {?}
     */
    FormRendererComponent.prototype.hasErrors = /**
     * @return {?}
     */
    function () {
        return this.node.control.touched && !this.node.control.valid;
    };
    /**
     * @return {?}
     */
    FormRendererComponent.prototype.errors = /**
     * @return {?}
     */
    function () {
        return this.getErrors(this.node);
    };
    /**
     * @param {?} error
     * @return {?}
     */
    FormRendererComponent.prototype.scrollToControl = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        var _this = this;
        /** @type {?} */
        var tab = +error.split(',')[0];
        /** @type {?} */
        var elSelector = error.split(',')[1] + 'id';
        // the tab components
        /** @type {?} */
        var tabComponent = this.childComponents[tab];
        this.clickTab(tab);
        setTimeout((/**
         * @return {?}
         */
        function () {
            // expand all sections
            tabComponent.childComponents.forEach((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                section.isCollapsed = false;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var element = _this.document.getElementById(elSelector);
                    if (element !== null && element.focus) {
                        element.focus();
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }), 100);
            }));
        }), 200);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    FormRendererComponent.prototype.onDateChanged = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        // console.log('Node', node);
        this.node = node;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FormRendererComponent.prototype.upload = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('Event', event);
        // console.log('Data', this.dataSource);
    };
    /**
     * @param {?} infoId
     * @return {?}
     */
    FormRendererComponent.prototype.toggleInformation = /**
     * @param {?} infoId
     * @return {?}
     */
    function (infoId) {
        /** @type {?} */
        var e = document.getElementById(infoId);
        if (e.style.display === 'block') {
            e.style.display = 'none';
        }
        else {
            e.style.display = 'block';
        }
        console.log('InfoId', infoId);
    };
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    FormRendererComponent.prototype.getErrors = /**
     * @private
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var errors = node.control.errors;
        if (errors) {
            return this.validationFactory.errors(errors, node.question);
        }
        return [];
    };
    FormRendererComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'form-renderer',
                    template: "<!--CONTAINERS-->\n<div *ngIf=\"node.question.renderingType === 'form'\">\n  <div class=\"dropdown dropdown-tabs forms-dropdown\">\n    <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n      <i class=\"fa fa-angle-double-down\"></i>\n    </a>\n    <ul class=\"dropdown-menu dropdown-menu-right forms-dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu\">\n      <li *ngFor=\"let question of node.question.questions; let i = index;\" (click)=\"clickTab(i)\">\n        {{question.label}}\n      </li>\n    </ul>\n  </div>\n  <mat-tab-group (selectedIndexChange)='tabSelected($event)' [selectedIndex]='activeTab'>\n    <mat-tab [label]='question.label' *ngFor=\"let question of node.question.questions; let i = index;\">\n      <div (swipeLeft)='loadNextTab()' (swipeRight)='loadPreviousTab()'>\n        <form-renderer [node]=\"node.children[question.key]\" [parentComponent]=\"this\" [parentGroup]=\"node.control\"></form-renderer>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n\n  <div style=\"text-align: center;\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"loadPreviousTab()\" [ngClass]=\"{disabled: isCurrentTabFirst()}\">&lt;&lt;</button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"loadNextTab()\" [ngClass]=\"{disabled: isCurrentTabLast()}\">\n      &gt;&gt;</button>\n  </div>\n</div>\n<div *ngIf=\"node.question.renderingType === 'page'\">\n  <!--<h2>{{node.question.label}}</h2>-->\n  <form-renderer *ngFor=\"let question of node.question.questions\" [parentComponent]=\"this\" [node]=\"node.children[question.key]\"\n    [parentGroup]=\"parentGroup\"></form-renderer>\n</div>\n<div *ngIf=\"node.question.renderingType === 'section' && checkSection(node)\"> \n  <div class=\"panel  panel-primary\">\n    <div class=\"panel-heading\">\n      <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"isCollapsed = !isCollapsed\">\n        {{isCollapsed ? 'Show' : 'Hide'}}\n      </button> {{node.question.label}}\n    </div>\n    <div class=\"panel-body\" [collapse]=\"isCollapsed\">\n      <form-renderer *ngFor=\"let question of node.question.questions\" [parentComponent]=\"this\" [node]=\"node.children[question.key]\"\n        [parentGroup]=\"parentGroup\"></form-renderer>\n    </div>\n  </div>\n</div>\n\n<!-- MESSAGES -->\n<div *ngIf=\"node.control && node.control.alert && node.control.alert !== ''\" class=\"alert alert-warning\">\n  <a class=\"close\" data-dismiss=\"alert\">&times;</a> {{node.control.alert}}\n</div>\n\n<!--CONTROLS-->\n\n<div *ngIf=\"node.question.controlType === 0\" class=\"form-group\" [formGroup]=\"parentGroup\" [hidden]=\"node.control.hidden\"\n  [ngClass]=\"{disabled: node.control.disabled}\">\n  <!--LEAF CONTROL-->\n  <div class=\"question-area\">\n    <a class=\"form-tooltip pull-right\" (click)=\"toggleInformation(node.question.extras.id)\" data-placement=\"right\"\n      *ngIf=\"node.question && node.question.extras.questionInfo  && node.question.extras.questionInfo !== ''  && node.question.extras.questionInfo !== ' '\">\n      <i class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\"></i>\n    </a>\n\n    <label *ngIf=\"node.question.label\" [style.color]=\"hasErrors()? 'red' :''\" class=\"control-label\" [attr.for]=\"node.question.key\">\n      {{node.question.required ? '*':''}} {{node.question.label}}\n    </label>\n    <div [ngSwitch]=\"node.question.renderingType\">\n      <select class=\"form-control\" *ngSwitchCase=\"'select'\" [formControlName]=\"node.question.key\" [id]=\"node.question.key + 'id'\">\n        <option *ngFor=\"let o of node.question.options\" [ngValue]=\"o.value\">{{o.label}}\n        </option>\n      </select>\n\n      <remote-file-upload *ngSwitchCase=\"'file'\" [dataSource]=\"dataSource\" [formControlName]=\"node.question.key\" [id]=\"node.question.key + 'id'\"\n        (fileChanged)=\"upload($event)\">\n      </remote-file-upload>\n      <textarea [placeholder]=\"node.question.placeholder\" [rows]=\"node.question.rows\" class=\"form-control\"\n        *ngSwitchCase=\"'textarea'\" [formControlName]=\"node.question.key\" [id]=\"node.question.key + 'id'\">\n      </textarea>\n      <!--\n      <ng-select *ngSwitchCase=\"'remote-select'\" [items]=\"items$ | async\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"{{node.question.placeholder}}\"\n        [hideSelected]=\"true\" [loading]=\"itemsLoading\"  [typeahead]=\"itemsInput$\" [formControlName]=\"node.question.key\" [id]=\"node.question.key + 'id'\">\n      </ng-select>\n    -->\n      <remote-select *ngSwitchCase=\"'remote-select'\" [placeholder]=\"node.question.placeholder\" tabindex=\"0\"\n        [dataSource]=\"dataSource\" [componentID]=\"node.question.key + 'id'\" [formControlName]=\"node.question.key\" [id]=\"node.question.key + 'id'\"></remote-select>\n      <!--  \n      <date-time-picker *ngSwitchCase=\"'date'\" [showTime]=\"node.question.showTime\" tabindex=\"0\" [weeks]='node.question.extras.questionOptions.weeksList'\n        (onDateChange)=\"onDateChanged(node)\" [showWeeks]=\"node.question.showWeeksAdder\" [formControlName]=\"node.question.key\"\n        [id]=\"node.question.key + 'id'\"></date-time-picker>\n  -->\n\n      <ngx-date-time-picker *ngSwitchCase=\"'date'\" [showTime]=\"node.question.showTime\" [id]=\"node.question.key + 'id'\"\n        [formControlName]=\"node.question.key\" [weeks]='node.question.extras.questionOptions.weeksList' (onDateChange)=\"onDateChanged(node)\"\n        [showWeeks]=\"node.question.showWeeksAdder\"></ngx-date-time-picker>\n      <ng-select *ngSwitchCase=\"'multi-select'\" [style.height]=\"'auto'\"  [style.overflow-x]=\"'hidden'\" tabindex=\"0\" [formControlName]=\"node.question.key\" [id]=\"node.question.key + 'id'\"\n          [options]=\"node.question.options\" [multiple]=\"true\">\n      </ng-select>\n      <ng-select *ngSwitchCase=\"'single-select'\" [style.height]='auto'  tabindex=\"0\" [formControlName]=\"node.question.key\"\n        [id]=\"node.question.key + 'id'\" [options]=\"node.question.options\" [multiple]=\"false\">\n      </ng-select>\n      <input class=\"form-control\" *ngSwitchCase=\"'number'\" [formControlName]=\"node.question.key \" [attr.placeholder]=\"node.question.placeholder \"\n        [type]=\"'number'\" [id]=\"node.question.key + 'id' \" [step]=\"'any'\" [min]=\"node.question.extras.questionOptions.min\"\n        [max]=\"node.question.extras.questionOptions.max\">\n      <input class=\"form-control\" *ngSwitchDefault [formControlName]=\"node.question.key \" [attr.placeholder]=\"node.question.placeholder \"\n        [type]=\"node.question.renderingType\" [id]=\"node.question.key + 'id' \">\n\n      <div *ngSwitchCase=\"'radio'\">\n        <div *ngFor=\"let o of node.question.options\">\n          <label class=\"form-control no-border\">\n            <input type=\"radio\" [formControlName]=\"node.question.key\" [id]=\"node.question.key + 'id'\" [value]=\"o.value\">\n            {{ o.label }}\n          </label>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'checkbox'\">\n        <checkbox  [id]=\"node.question.key + 'id'\" [formControlName]=\"node.question.key\" [options]=\"node.question.options\"></checkbox>\n      </div>\n\n      <div *ngIf=\"node.question.enableHistoricalValue && node.question.historicalDisplay\" style=\"margin-top: 2px;\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <span class=\"text-warning\">Previous Value: </span>\n              <strong>{{node.question.historicalDisplay?.text}}</strong>\n              <span *ngIf=\"node.question.showHistoricalValueDate\">\n                <span> | </span>\n                <strong class=\"text-primary\">{{node.question.historicalDisplay?._date}} </strong>\n                <span class=\"text-primary\" *ngIf=\"node.question.historicalDisplay && node.question.historicalDisplay._date \"> ({{node.question.historicalDisplay._date | timeAgo}})</span>\n              </span>\n\n            </div>\n            <button type=\"button\" [node]=\"node\" [name]=\"'historyValue'\" class=\"btn btn-primary btn-small col-xs-3\">Use\n              Value\n            </button>\n          </div>\n        </div>\n      </div>\n      <appointments-overview [node]=\"node\"></appointments-overview>\n      <div *ngIf=\"hasErrors() \">\n        <p *ngFor=\"let e of errors() \">\n          <span class=\"text-danger \">{{e}}</span>\n        </p>\n      </div>\n    </div>\n\n    <div class=\"question-info col-md-12 col-lg-12 col-sm-12\" id=\"{{node.question.extras.id}}\" *ngIf=\"node.question && node.question.extras.questionInfo  && node.question.extras.questionInfo !== ''  && node.question.extras.questionInfo !== ' '\">\n      {{node.question.extras.questionInfo}}\n    </div>\n\n  </div>\n</div>\n<div *ngIf=\"node.question.controlType === 1\" [hidden]=\"node.control.hidden\" [ngClass]=\"{disabled: node.control.disabled}\">\n\n\n  <!--ARRAY CONTROL-->\n  <div [ngSwitch]=\"node.question.renderingType \">\n    <div class='well' style=\"padding: 2px; \" *ngSwitchCase=\" 'repeating' \">\n      <h4 style=\"margin: 2px; font-weight: bold;\">{{node.question.label}}</h4>\n      <hr style=\"margin-left:-2px; margin-right:-2px; margin-bottom:4px; margin-top:8px; border-width:2px;\" />\n      <div [ngSwitch]=\"node.question.extras.type\">\n        <div *ngSwitchCase=\"'testOrder'\">\n          <div *ngFor=\"let child of node.children; let i=index \">\n            <form-renderer *ngFor=\"let question of child.question.questions \" [parentComponent]=\"this\" [node]=\"child.children[question.key]\n            \"\n              [parentGroup]=\"child.control \"></form-renderer>\n            <div>{{child.orderNumber}}</div>\n            <button type=\"button \" class='btn btn-sm btn-danger' (click)=\"node.removeAt(i) \">Remove</button>\n            <br />\n            <hr style=\"margin-left:-2px; margin-right:-2px; margin-bottom:4px; margin-top:8px; border-width:1px;\" />\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'obsGroup'\" style=\"margin-bottom:20px;\">\n          <div *ngFor=\"let child of node.children; let i=index \">\n            <form-renderer *ngFor=\"let question of child.question.questions \" [parentComponent]=\"this\" [node]=\"child.children[question.key]\n            \"\n              [parentGroup]=\"child.control \"></form-renderer>\n            <button type=\"button \" class='btn btn-sm btn-danger' (click)=\"node.removeAt(i) \">Remove</button>\n            <br />\n            <hr style=\"margin-left:-2px; margin-right:-2px; margin-bottom:4px; margin-top:8px; border-width:1px;\" />\n          </div>\n        </div>\n      </div>\n      <button type=\"button \" class='btn btn-primary' (click)=\"node.createChildNode() \">Add</button>\n    </div>\n  </div>\n\n</div>\n<div *ngIf=\"node.question.controlType === 2\" [hidden]=\"node.control.hidden\" [ngClass]=\"{disabled: node.control.disabled}\">\n\n  <!--GROUP-->\n  <div [ngSwitch]=\"node.question.renderingType \">\n    <div *ngSwitchCase=\" 'group' \">\n      <form-renderer *ngFor=\"let question of node.question.questions \" [parentComponent]=\"this\" [node]=\"node.children[question.key]\n            \"\n        [parentGroup]=\"node.control \"></form-renderer>\n    </div>\n    <div *ngSwitchCase=\" 'field-set' \" style=\"border: 1px solid #eeeeee; padding: 2px; margin: 2px;\">\n      <form-renderer *ngFor=\"let question of node.question.questions \" [parentComponent]=\"this\" [node]=\"node.children[question.key]\n            \"\n        [parentGroup]=\"node.control \"></form-renderer>\n    </div>\n  </div>\n\n</div>",
                    styles: ['../../style/app.css', DEFAULT_STYLES]
                },] },
    ];
    FormRendererComponent.ctorParameters = function () { return [
        { type: ValidationFactory },
        { type: DataSources },
        { type: FormErrorsService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"],] }] }
    ]; };
    FormRendererComponent.propDecorators = {
        parentComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        parentGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FormRendererComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Form = /** @class */ (function () {
    function Form(schema, formFactory, questionFactory) {
        this.schema = schema;
        this.formFactory = formFactory;
        this.questionFactory = questionFactory;
        this.valueProcessingInfo = {};
        this.existingOrders = {};
        this._showErrors = false;
        this._dataSourcesContainer = new DataSources();
    }
    Object.defineProperty(Form.prototype, "dataSourcesContainer", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSourcesContainer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} node
     * @param {?} path
     * @param {?} found
     * @return {?}
     */
    Form.prototype.searchNodeByPath = /**
     * @param {?} node
     * @param {?} path
     * @param {?} found
     * @return {?}
     */
    function (node, path, found) {
        var _this = this;
        /** @type {?} */
        var children = node.children;
        for (var key in children) {
            if (children.hasOwnProperty(key)) {
                /** @type {?} */
                var child = children[key];
                if (child instanceof GroupNode) {
                    if (path === child.path) {
                        found.push(child);
                        return found;
                    }
                    this.searchNodeByPath(child, path, found);
                }
                else if (child instanceof LeafNode) {
                    if (path === child.path) {
                        found.push(child);
                        return found;
                    }
                }
                else if (child instanceof ArrayNode) {
                    if (path === child.path) {
                        found.push(child);
                        return found;
                    }
                    /** @type {?} */
                    var aChild = (/** @type {?} */ (child));
                    aChild.children.forEach((/**
                     * @param {?} aChildNode
                     * @return {?}
                     */
                    function (aChildNode) {
                        _this.searchNodeByPath(aChildNode, path, found);
                    }));
                }
            }
        }
        return found;
    };
    /**
     * @param {?} questionId
     * @param {?=} questionType
     * @return {?}
     */
    Form.prototype.searchNodeByQuestionId = /**
     * @param {?} questionId
     * @param {?=} questionType
     * @return {?}
     */
    function (questionId, questionType) {
        /** @type {?} */
        var found = [];
        if (questionType) {
            this.searchNodeByQuestionType(this.rootNode, questionType, found);
        }
        else {
            this.findNodesByQuestionId(this.rootNode, questionId, found);
        }
        return found;
    };
    /**
     * @param {?} rootNode
     * @param {?} questionType
     * @param {?} found
     * @return {?}
     */
    Form.prototype.searchNodeByQuestionType = /**
     * @param {?} rootNode
     * @param {?} questionType
     * @param {?} found
     * @return {?}
     */
    function (rootNode, questionType, found) {
        var _this = this;
        if (rootNode instanceof GroupNode) {
            /** @type {?} */
            var nodeAsGroup = (/** @type {?} */ (rootNode));
            // tslint:disable-next-line:forin
            for (var o in nodeAsGroup.children) {
                this.searchNodeByQuestionType(nodeAsGroup.children[o], questionType, found);
            }
        }
        if (rootNode instanceof ArrayNode) {
            /** @type {?} */
            var nodeAsArray = (/** @type {?} */ (rootNode));
            nodeAsArray.children.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                _this.searchNodeByQuestionType(node, questionType, found);
            }));
        }
        if (rootNode instanceof LeafNode) {
            /** @type {?} */
            var questionBase = rootNode.question;
            if (questionBase.extras && questionBase.extras.type && questionBase.extras.type === questionType) {
                found.push(rootNode);
            }
        }
    };
    /**
     * @private
     * @param {?} rootNode
     * @param {?} questionId
     * @param {?} results
     * @return {?}
     */
    Form.prototype.findNodesByQuestionId = /**
     * @private
     * @param {?} rootNode
     * @param {?} questionId
     * @param {?} results
     * @return {?}
     */
    function (rootNode, questionId, results) {
        var _this = this;
        if (rootNode.question.key === questionId) {
            results.push(rootNode);
        }
        if (rootNode instanceof GroupNode) {
            /** @type {?} */
            var nodeAsGroup = (/** @type {?} */ (rootNode));
            // tslint:disable-next-line:forin
            for (var o in nodeAsGroup.children) {
                this.findNodesByQuestionId(nodeAsGroup.children[o], questionId, results);
            }
        }
        if (rootNode instanceof ArrayNode) {
            /** @type {?} */
            var nodeAsArray = (/** @type {?} */ (rootNode));
            nodeAsArray.children.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                _this.findNodesByQuestionId(node, questionId, results);
            }));
        }
    };
    Object.defineProperty(Form.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rootNode.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "showErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showErrors;
        },
        set: /**
         * @param {?} show
         * @return {?}
         */
        function (show) {
            this._showErrors = show;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} node
     * @param {?=} invalidControlNodes
     * @return {?}
     */
    Form.prototype.markInvalidControls = /**
     * @param {?} node
     * @param {?=} invalidControlNodes
     * @return {?}
     */
    function (node, invalidControlNodes) {
        var _this = this;
        /** @type {?} */
        var children = node.children;
        for (var key in children) {
            if (children.hasOwnProperty(key)) {
                /** @type {?} */
                var child = children[key];
                if (child instanceof GroupNode) {
                    this.markInvalidControls(child, invalidControlNodes);
                }
                else if (child instanceof LeafNode) {
                    /** @type {?} */
                    var questionBase = ((/** @type {?} */ (child))).question;
                    if (questionBase.key && questionBase.key.length > 0) {
                        /** @type {?} */
                        var c = (/** @type {?} */ (child.control));
                        if (!c.valid && !c.disabled) {
                            if (invalidControlNodes) {
                                invalidControlNodes.push(child);
                            }
                            c.markAsTouched();
                        }
                    }
                }
                else if (child instanceof ArrayNode) {
                    /** @type {?} */
                    var arrayNode = (/** @type {?} */ (child));
                    if (arrayNode && arrayNode.children && arrayNode.children.length > 0) {
                        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(arrayNode.children, (/**
                         * @param {?} groupNode
                         * @return {?}
                         */
                        function (groupNode) {
                            _this.markInvalidControls(groupNode, invalidControlNodes);
                        }));
                    }
                }
            }
        }
        return invalidControlNodes;
    };
    /**
     * @return {?}
     */
    Form.prototype.updateHiddenDisabledStateForAllControls = /**
     * @return {?}
     */
    function () {
        this._updateHiddenDisabledStateForAllControls(this.rootNode);
    };
    /**
     * @return {?}
     */
    Form.prototype.updateAlertsForAllControls = /**
     * @return {?}
     */
    function () {
        this._updateAlertsForAllControls(this.rootNode);
    };
    /**
     * @private
     * @param {?} rootNode
     * @return {?}
     */
    Form.prototype._updateAlertsForAllControls = /**
     * @private
     * @param {?} rootNode
     * @return {?}
     */
    function (rootNode) {
        var _this = this;
        if (rootNode.control) {
            if (((/** @type {?} */ (rootNode.control))).updateAlert) {
                ((/** @type {?} */ (rootNode.control))).updateAlert();
            }
        }
        if (rootNode instanceof GroupNode) {
            /** @type {?} */
            var nodeAsGroup = (/** @type {?} */ (rootNode));
            // tslint:disable-next-line:forin
            for (var o in nodeAsGroup.children) {
                this._updateAlertsForAllControls(nodeAsGroup.children[o]);
            }
        }
        if (rootNode instanceof ArrayNode) {
            /** @type {?} */
            var nodeAsArray = (/** @type {?} */ (rootNode));
            nodeAsArray.children.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                _this._updateAlertsForAllControls(node);
            }));
        }
    };
    /**
     * @private
     * @param {?} rootNode
     * @return {?}
     */
    Form.prototype._updateHiddenDisabledStateForAllControls = /**
     * @private
     * @param {?} rootNode
     * @return {?}
     */
    function (rootNode) {
        var _this = this;
        if (rootNode.control) {
            if (((/** @type {?} */ (rootNode.control))).updateDisabledState) {
                ((/** @type {?} */ (rootNode.control))).updateDisabledState();
            }
            if (((/** @type {?} */ (rootNode.control))).updateHiddenState) {
                ((/** @type {?} */ (rootNode.control))).updateHiddenState();
            }
        }
        if (rootNode instanceof GroupNode) {
            /** @type {?} */
            var nodeAsGroup = (/** @type {?} */ (rootNode));
            // tslint:disable-next-line:forin
            for (var o in nodeAsGroup.children) {
                this._updateHiddenDisabledStateForAllControls(nodeAsGroup.children[o]);
            }
        }
        if (rootNode instanceof ArrayNode) {
            /** @type {?} */
            var nodeAsArray = (/** @type {?} */ (rootNode));
            nodeAsArray.children.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                _this._updateHiddenDisabledStateForAllControls(node);
            }));
        }
    };
    return Form;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ErrorRendererComponent = /** @class */ (function () {
    function ErrorRendererComponent(validationFactory, formErrorsService) {
        this.validationFactory = validationFactory;
        this.formErrorsService = formErrorsService;
    }
    /**
     * @return {?}
     */
    ErrorRendererComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ErrorRendererComponent.prototype.showErrors = /**
     * @return {?}
     */
    function () {
        return !this.form.valid && this.form.showErrors;
    };
    Object.defineProperty(ErrorRendererComponent.prototype, "errorNodes", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var invalidControls = this.form.markInvalidControls(this.form.rootNode, []);
            return invalidControls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} node
     * @return {?}
     */
    ErrorRendererComponent.prototype.getControlError = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var errors = node.control.errors;
        if (errors) {
            return this.validationFactory.errors(errors, node.question);
        }
        return [];
    };
    /**
     * @param {?} errorNode
     * @return {?}
     */
    ErrorRendererComponent.prototype.announceErrorField = /**
     * @param {?} errorNode
     * @return {?}
     */
    function (errorNode) {
        var _this = this;
        /** @type {?} */
        var nodes = this.form.searchNodeByQuestionId(errorNode.path.substring(0, errorNode.path.indexOf('.')));
        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(nodes, (/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            if (node.question.renderingType === 'page') {
                /** @type {?} */
                var pageIndex = _this.getPageIndex(node);
                _this.formErrorsService.announceErrorField(pageIndex + ',' + errorNode.question.key);
            }
        }));
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ErrorRendererComponent.prototype.getPageIndex = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var questionGroup = (/** @type {?} */ (this.form.rootNode.question));
        return questionGroup.questions.indexOf(node.question);
    };
    ErrorRendererComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'error-renderer',
                    template: "<div *ngIf=\"showErrors()\" class=\"container\">\n<ul class=\"list-group\">\n  <li class=\"list-group-item list-group-item-warning\" *ngFor=\"let errorNode of errorNodes\" (click)=announceErrorField(errorNode)>\n    <div class=\"error\" *ngIf=\"errorNode.control.valid == false\">\n      <h4>{{errorNode.question.label}}</h4>\n      <span class=\"text-danger\"> {{getControlError(errorNode)}}</span>\n    </div>\n  </li>\n</ul>\n</div>\n",
                    styles: ["ul{list-style:none}.list-group-item{padding:2px 15px;cursor:pointer}ul li:hover{background-color:#fff}h4{margin-top:7px;margin-bottom:7px}"]
                },] },
    ];
    ErrorRendererComponent.ctorParameters = function () { return [
        { type: ValidationFactory },
        { type: FormErrorsService }
    ]; };
    ErrorRendererComponent.propDecorators = {
        form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ErrorRendererComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HistoricalFieldHelperService = /** @class */ (function () {
    function HistoricalFieldHelperService() {
    }
    /**
     * @param {?} question
     * @param {?} valueProperty
     * @param {?} displayProperty
     * @return {?}
     */
    HistoricalFieldHelperService.prototype.getDisplayTextFromOptions = /**
     * @param {?} question
     * @param {?} valueProperty
     * @param {?} displayProperty
     * @return {?}
     */
    function (question, valueProperty, displayProperty) {
        /** @type {?} */
        var displayText = '';
        /** @type {?} */
        var historicalValue = question.historicalDataValue;
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(historicalValue.value)) {
            /** @type {?} */
            var valueConverted_1 = 0;
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(historicalValue.value, (/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(question.options, (/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    if (option[valueProperty] === val) {
                        if (valueConverted_1 === 0) {
                            displayText = displayText + option[displayProperty];
                        }
                        else {
                            displayText = displayText + ', ' + option[displayProperty];
                        }
                        valueConverted_1++;
                    }
                }));
            }));
        }
        else {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(question.options, (/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                if (option[valueProperty] === historicalValue.value) {
                    displayText = option[displayProperty];
                }
            }));
        }
        return displayText;
    };
    return HistoricalFieldHelperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HistoricalValueDirective = /** @class */ (function () {
    function HistoricalValueDirective(historicalFieldHelper) {
        this.historicalFieldHelper = historicalFieldHelper;
        this._nodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    HistoricalValueDirective.prototype.setValue = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.target.name === 'historyValue') {
            if (this._node && (!this.compareString(this._node.question.renderingType, 'page')
                || !this.compareString(this._node.question.renderingType, 'section'))) {
                this._node.control.setValue(this._node.question.historicalDataValue.value);
                this._node.question['historicalValue'] = this._node.question.historicalDataValue;
                e.stopPropagation();
                this._nodeChange.emit(this._node);
            }
        }
    };
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    HistoricalValueDirective.prototype.compareString = /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (a === b) {
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(HistoricalValueDirective.prototype, "node", {
        set: /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            if (node) {
                this._node = node;
                if (this._node.question.enableHistoricalValue && !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isUndefined"])(this._node.question.historicalDataValue)) {
                    /** @type {?} */
                    var display = { text: '', _date: '' };
                    if ((this._node.question.renderingType === 'select'
                        || this._node.question.renderingType === 'multi-select'
                        || this._node.question.renderingType === 'single-select')) {
                        display.text = this.historicalFieldHelper.getDisplayTextFromOptions(this._node.question, 'value', 'label');
                        display._date = this._node.question.historicalDataValue.valueDate;
                        this._node.question['historicalDisplay'] = display;
                    }
                    else if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isUndefined"])(this._node.question.historicalDataValue)) {
                        display.text = this._node.question.historicalDataValue.value;
                        display._date = this._node.question.historicalDataValue.valueDate;
                        this._node.question['historicalDisplay'] = display;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    HistoricalValueDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "[node]"
                },] },
    ];
    HistoricalValueDirective.ctorParameters = function () { return [
        { type: HistoricalFieldHelperService }
    ]; };
    HistoricalValueDirective.propDecorators = {
        _node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        _nodeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        setValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
        node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return HistoricalValueDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE = "\nng-select {\n  display: inline-block;\n  margin: 0;\n  position: relative;\n  vertical-align: middle;\n  width: 100%;\n}\nng-select * {\n  box-sizing: border-box;\n  font-family: Sans-Serif;\n}\nng-select > div {\n  border: 1px solid #ddd;\n  box-sizing: border-box;\n  cursor: pointer;\n  user-select: none;\n  width: 100%;\n}\nng-select > div.disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: default;\n  pointer-events: none;\n}\nng-select > div > div.single {\n  display: flex;\n  height: 30px;\n  width: 100%;\n}\nng-select > div > div.single > div.value,\nng-select > div > div.single > div.placeholder {\n  flex: 1;\n  line-height: 30px;\n  overflow: hidden;\n  padding: 0 10px;\n  white-space: nowrap;\n}\nng-select > div > div.single > div.placeholder {\n  color: #a9a9a9;\n}\nng-select > div > div.single > div.clear,\nng-select > div > div.single > div.toggle {\n  color: #aaa;\n  line-height: 30px;\n  text-align: center;\n  width: 30px;\n}\nng-select > div > div.single > div.clear:hover,\nng-select > div > div.single > div.toggle:hover {\n  background-color: #ececec;\n}\nng-select > div > div.single > div.clear {\n  font-size: 18px;\n}\nng-select > div > div.single > div.toggle {\n  font-size: 14px;\n}\nng-select > div > div.multiple {\n  display: flex;\n  flex-flow: row wrap;\n  height: 100%;\n  min-height: 30px;\n  padding: 0 10px;\n  width: 100%;\n}\nng-select > div > div.multiple > div.option {\n  background-color: #eee;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  color: #333;\n  cursor: default;\n  display: inline-block;\n  flex-shrink: 0;\n  font-size: 14px;\n  line-height: 22px;\n  margin: 3px 5px 3px 0;\n  padding: 0 4px;\n}\nng-select > div > div.multiple > div.option span.deselect-option {\n  color: #aaa;\n  cursor: pointer;\n  font-size: 14px;\n  height: 20px;\n  line-height: 20px;\n}\nng-select > div > div.multiple > div.option span.deselect-option:hover {\n  color: #555;\n}\nng-select > div > div.multiple input {\n  background-color: transparent;\n  border: none;\n  height: 30px;\n  line-height: 30px;\n  padding: 0;\n}\nng-select > div > div.multiple input:focus {\n  outline: none;\n}\n";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE$1 = "select-dropdown {\n  box-sizing: border-box;\n  font-family: Sans-Serif;\n}\nselect-dropdown * {\n  box-sizing: border-box;\n  font-family: Sans-Serif;\n}\nselect-dropdown > div {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top: none;\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 1;\n}\nselect-dropdown > div .filter {\n  padding: 3px;\n  width: 100%;\n}\nselect-dropdown > div .filter input {\n  border: 1px solid #eee;\n  box-sizing: border-box;\n  padding: 4px;\n  width: 100%;\n}\nselect-dropdown > div .options {\n  max-height: 200px;\n  overflow-y: auto;\n}\nselect-dropdown > div .options ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nselect-dropdown > div .options ul li {\n  padding: 4px 8px;\n  cursor: pointer;\n  user-select: none;\n}\nselect-dropdown .selected {\n  background-color: #e0e0e0;\n}\nselect-dropdown .selected.highlighted {\n  background-color: #2196F3;\n  color: #fff;\n}\nselect-dropdown .highlighted {\n  background-color: #2196F3;\n  color: #fff;\n}\nselect-dropdown .disabled {\n  background-color: #fff;\n  color: #9e9e9e;\n  cursor: default;\n  pointer-events: none;\n}";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Option = /** @class */ (function () {
    function Option(value, label) {
        this.value = value;
        this.label = label;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
    }
    /**
     * @return {?}
     */
    Option.prototype.show = /**
     * @return {?}
     */
    function () {
        this.shown = true;
    };
    /**
     * @return {?}
     */
    Option.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.shown = false;
    };
    /**
     * @return {?}
     */
    Option.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.disabled = true;
    };
    /**
     * @return {?}
     */
    Option.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.disabled = false;
    };
    /**
     * @return {?}
     */
    Option.prototype.undecoratedCopy = /**
     * @return {?}
     */
    function () {
        return {
            label: this.label,
            value: this.value
        };
    };
    return Option;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Diacritics = /** @class */ (function () {
    function Diacritics() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    Diacritics.strip = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var _this = this;
        /** @type {?} */
        var match = (/**
         * @param {?} a
         * @return {?}
         */
        function (a) {
            return _this.DIACRITICS[a] || a;
        });
        if (text) {
            return text.replace(/[^\u0000-\u007E]/g, match);
        }
        else {
            return '';
        }
    };
    Diacritics.DIACRITICS = {
        '\u24B6': 'A',
        '\uFF21': 'A',
        '\u00C0': 'A',
        '\u00C1': 'A',
        '\u00C2': 'A',
        '\u1EA6': 'A',
        '\u1EA4': 'A',
        '\u1EAA': 'A',
        '\u1EA8': 'A',
        '\u00C3': 'A',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u1EB0': 'A',
        '\u1EAE': 'A',
        '\u1EB4': 'A',
        '\u1EB2': 'A',
        '\u0226': 'A',
        '\u01E0': 'A',
        '\u00C4': 'A',
        '\u01DE': 'A',
        '\u1EA2': 'A',
        '\u00C5': 'A',
        '\u01FA': 'A',
        '\u01CD': 'A',
        '\u0200': 'A',
        '\u0202': 'A',
        '\u1EA0': 'A',
        '\u1EAC': 'A',
        '\u1EB6': 'A',
        '\u1E00': 'A',
        '\u0104': 'A',
        '\u023A': 'A',
        '\u2C6F': 'A',
        '\uA732': 'AA',
        '\u00C6': 'AE',
        '\u01FC': 'AE',
        '\u01E2': 'AE',
        '\uA734': 'AO',
        '\uA736': 'AU',
        '\uA738': 'AV',
        '\uA73A': 'AV',
        '\uA73C': 'AY',
        '\u24B7': 'B',
        '\uFF22': 'B',
        '\u1E02': 'B',
        '\u1E04': 'B',
        '\u1E06': 'B',
        '\u0243': 'B',
        '\u0182': 'B',
        '\u0181': 'B',
        '\u24B8': 'C',
        '\uFF23': 'C',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010A': 'C',
        '\u010C': 'C',
        '\u00C7': 'C',
        '\u1E08': 'C',
        '\u0187': 'C',
        '\u023B': 'C',
        '\uA73E': 'C',
        '\u24B9': 'D',
        '\uFF24': 'D',
        '\u1E0A': 'D',
        '\u010E': 'D',
        '\u1E0C': 'D',
        '\u1E10': 'D',
        '\u1E12': 'D',
        '\u1E0E': 'D',
        '\u0110': 'D',
        '\u018B': 'D',
        '\u018A': 'D',
        '\u0189': 'D',
        '\uA779': 'D',
        '\u01F1': 'DZ',
        '\u01C4': 'DZ',
        '\u01F2': 'Dz',
        '\u01C5': 'Dz',
        '\u24BA': 'E',
        '\uFF25': 'E',
        '\u00C8': 'E',
        '\u00C9': 'E',
        '\u00CA': 'E',
        '\u1EC0': 'E',
        '\u1EBE': 'E',
        '\u1EC4': 'E',
        '\u1EC2': 'E',
        '\u1EBC': 'E',
        '\u0112': 'E',
        '\u1E14': 'E',
        '\u1E16': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u00CB': 'E',
        '\u1EBA': 'E',
        '\u011A': 'E',
        '\u0204': 'E',
        '\u0206': 'E',
        '\u1EB8': 'E',
        '\u1EC6': 'E',
        '\u0228': 'E',
        '\u1E1C': 'E',
        '\u0118': 'E',
        '\u1E18': 'E',
        '\u1E1A': 'E',
        '\u0190': 'E',
        '\u018E': 'E',
        '\u24BB': 'F',
        '\uFF26': 'F',
        '\u1E1E': 'F',
        '\u0191': 'F',
        '\uA77B': 'F',
        '\u24BC': 'G',
        '\uFF27': 'G',
        '\u01F4': 'G',
        '\u011C': 'G',
        '\u1E20': 'G',
        '\u011E': 'G',
        '\u0120': 'G',
        '\u01E6': 'G',
        '\u0122': 'G',
        '\u01E4': 'G',
        '\u0193': 'G',
        '\uA7A0': 'G',
        '\uA77D': 'G',
        '\uA77E': 'G',
        '\u24BD': 'H',
        '\uFF28': 'H',
        '\u0124': 'H',
        '\u1E22': 'H',
        '\u1E26': 'H',
        '\u021E': 'H',
        '\u1E24': 'H',
        '\u1E28': 'H',
        '\u1E2A': 'H',
        '\u0126': 'H',
        '\u2C67': 'H',
        '\u2C75': 'H',
        '\uA78D': 'H',
        '\u24BE': 'I',
        '\uFF29': 'I',
        '\u00CC': 'I',
        '\u00CD': 'I',
        '\u00CE': 'I',
        '\u0128': 'I',
        '\u012A': 'I',
        '\u012C': 'I',
        '\u0130': 'I',
        '\u00CF': 'I',
        '\u1E2E': 'I',
        '\u1EC8': 'I',
        '\u01CF': 'I',
        '\u0208': 'I',
        '\u020A': 'I',
        '\u1ECA': 'I',
        '\u012E': 'I',
        '\u1E2C': 'I',
        '\u0197': 'I',
        '\u24BF': 'J',
        '\uFF2A': 'J',
        '\u0134': 'J',
        '\u0248': 'J',
        '\u24C0': 'K',
        '\uFF2B': 'K',
        '\u1E30': 'K',
        '\u01E8': 'K',
        '\u1E32': 'K',
        '\u0136': 'K',
        '\u1E34': 'K',
        '\u0198': 'K',
        '\u2C69': 'K',
        '\uA740': 'K',
        '\uA742': 'K',
        '\uA744': 'K',
        '\uA7A2': 'K',
        '\u24C1': 'L',
        '\uFF2C': 'L',
        '\u013F': 'L',
        '\u0139': 'L',
        '\u013D': 'L',
        '\u1E36': 'L',
        '\u1E38': 'L',
        '\u013B': 'L',
        '\u1E3C': 'L',
        '\u1E3A': 'L',
        '\u0141': 'L',
        '\u023D': 'L',
        '\u2C62': 'L',
        '\u2C60': 'L',
        '\uA748': 'L',
        '\uA746': 'L',
        '\uA780': 'L',
        '\u01C7': 'LJ',
        '\u01C8': 'Lj',
        '\u24C2': 'M',
        '\uFF2D': 'M',
        '\u1E3E': 'M',
        '\u1E40': 'M',
        '\u1E42': 'M',
        '\u2C6E': 'M',
        '\u019C': 'M',
        '\u24C3': 'N',
        '\uFF2E': 'N',
        '\u01F8': 'N',
        '\u0143': 'N',
        '\u00D1': 'N',
        '\u1E44': 'N',
        '\u0147': 'N',
        '\u1E46': 'N',
        '\u0145': 'N',
        '\u1E4A': 'N',
        '\u1E48': 'N',
        '\u0220': 'N',
        '\u019D': 'N',
        '\uA790': 'N',
        '\uA7A4': 'N',
        '\u01CA': 'NJ',
        '\u01CB': 'Nj',
        '\u24C4': 'O',
        '\uFF2F': 'O',
        '\u00D2': 'O',
        '\u00D3': 'O',
        '\u00D4': 'O',
        '\u1ED2': 'O',
        '\u1ED0': 'O',
        '\u1ED6': 'O',
        '\u1ED4': 'O',
        '\u00D5': 'O',
        '\u1E4C': 'O',
        '\u022C': 'O',
        '\u1E4E': 'O',
        '\u014C': 'O',
        '\u1E50': 'O',
        '\u1E52': 'O',
        '\u014E': 'O',
        '\u022E': 'O',
        '\u0230': 'O',
        '\u00D6': 'O',
        '\u022A': 'O',
        '\u1ECE': 'O',
        '\u0150': 'O',
        '\u01D1': 'O',
        '\u020C': 'O',
        '\u020E': 'O',
        '\u01A0': 'O',
        '\u1EDC': 'O',
        '\u1EDA': 'O',
        '\u1EE0': 'O',
        '\u1EDE': 'O',
        '\u1EE2': 'O',
        '\u1ECC': 'O',
        '\u1ED8': 'O',
        '\u01EA': 'O',
        '\u01EC': 'O',
        '\u00D8': 'O',
        '\u01FE': 'O',
        '\u0186': 'O',
        '\u019F': 'O',
        '\uA74A': 'O',
        '\uA74C': 'O',
        '\u01A2': 'OI',
        '\uA74E': 'OO',
        '\u0222': 'OU',
        '\u24C5': 'P',
        '\uFF30': 'P',
        '\u1E54': 'P',
        '\u1E56': 'P',
        '\u01A4': 'P',
        '\u2C63': 'P',
        '\uA750': 'P',
        '\uA752': 'P',
        '\uA754': 'P',
        '\u24C6': 'Q',
        '\uFF31': 'Q',
        '\uA756': 'Q',
        '\uA758': 'Q',
        '\u024A': 'Q',
        '\u24C7': 'R',
        '\uFF32': 'R',
        '\u0154': 'R',
        '\u1E58': 'R',
        '\u0158': 'R',
        '\u0210': 'R',
        '\u0212': 'R',
        '\u1E5A': 'R',
        '\u1E5C': 'R',
        '\u0156': 'R',
        '\u1E5E': 'R',
        '\u024C': 'R',
        '\u2C64': 'R',
        '\uA75A': 'R',
        '\uA7A6': 'R',
        '\uA782': 'R',
        '\u24C8': 'S',
        '\uFF33': 'S',
        '\u1E9E': 'S',
        '\u015A': 'S',
        '\u1E64': 'S',
        '\u015C': 'S',
        '\u1E60': 'S',
        '\u0160': 'S',
        '\u1E66': 'S',
        '\u1E62': 'S',
        '\u1E68': 'S',
        '\u0218': 'S',
        '\u015E': 'S',
        '\u2C7E': 'S',
        '\uA7A8': 'S',
        '\uA784': 'S',
        '\u24C9': 'T',
        '\uFF34': 'T',
        '\u1E6A': 'T',
        '\u0164': 'T',
        '\u1E6C': 'T',
        '\u021A': 'T',
        '\u0162': 'T',
        '\u1E70': 'T',
        '\u1E6E': 'T',
        '\u0166': 'T',
        '\u01AC': 'T',
        '\u01AE': 'T',
        '\u023E': 'T',
        '\uA786': 'T',
        '\uA728': 'TZ',
        '\u24CA': 'U',
        '\uFF35': 'U',
        '\u00D9': 'U',
        '\u00DA': 'U',
        '\u00DB': 'U',
        '\u0168': 'U',
        '\u1E78': 'U',
        '\u016A': 'U',
        '\u1E7A': 'U',
        '\u016C': 'U',
        '\u00DC': 'U',
        '\u01DB': 'U',
        '\u01D7': 'U',
        '\u01D5': 'U',
        '\u01D9': 'U',
        '\u1EE6': 'U',
        '\u016E': 'U',
        '\u0170': 'U',
        '\u01D3': 'U',
        '\u0214': 'U',
        '\u0216': 'U',
        '\u01AF': 'U',
        '\u1EEA': 'U',
        '\u1EE8': 'U',
        '\u1EEE': 'U',
        '\u1EEC': 'U',
        '\u1EF0': 'U',
        '\u1EE4': 'U',
        '\u1E72': 'U',
        '\u0172': 'U',
        '\u1E76': 'U',
        '\u1E74': 'U',
        '\u0244': 'U',
        '\u24CB': 'V',
        '\uFF36': 'V',
        '\u1E7C': 'V',
        '\u1E7E': 'V',
        '\u01B2': 'V',
        '\uA75E': 'V',
        '\u0245': 'V',
        '\uA760': 'VY',
        '\u24CC': 'W',
        '\uFF37': 'W',
        '\u1E80': 'W',
        '\u1E82': 'W',
        '\u0174': 'W',
        '\u1E86': 'W',
        '\u1E84': 'W',
        '\u1E88': 'W',
        '\u2C72': 'W',
        '\u24CD': 'X',
        '\uFF38': 'X',
        '\u1E8A': 'X',
        '\u1E8C': 'X',
        '\u24CE': 'Y',
        '\uFF39': 'Y',
        '\u1EF2': 'Y',
        '\u00DD': 'Y',
        '\u0176': 'Y',
        '\u1EF8': 'Y',
        '\u0232': 'Y',
        '\u1E8E': 'Y',
        '\u0178': 'Y',
        '\u1EF6': 'Y',
        '\u1EF4': 'Y',
        '\u01B3': 'Y',
        '\u024E': 'Y',
        '\u1EFE': 'Y',
        '\u24CF': 'Z',
        '\uFF3A': 'Z',
        '\u0179': 'Z',
        '\u1E90': 'Z',
        '\u017B': 'Z',
        '\u017D': 'Z',
        '\u1E92': 'Z',
        '\u1E94': 'Z',
        '\u01B5': 'Z',
        '\u0224': 'Z',
        '\u2C7F': 'Z',
        '\u2C6B': 'Z',
        '\uA762': 'Z',
        '\u24D0': 'a',
        '\uFF41': 'a',
        '\u1E9A': 'a',
        '\u00E0': 'a',
        '\u00E1': 'a',
        '\u00E2': 'a',
        '\u1EA7': 'a',
        '\u1EA5': 'a',
        '\u1EAB': 'a',
        '\u1EA9': 'a',
        '\u00E3': 'a',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u1EB1': 'a',
        '\u1EAF': 'a',
        '\u1EB5': 'a',
        '\u1EB3': 'a',
        '\u0227': 'a',
        '\u01E1': 'a',
        '\u00E4': 'a',
        '\u01DF': 'a',
        '\u1EA3': 'a',
        '\u00E5': 'a',
        '\u01FB': 'a',
        '\u01CE': 'a',
        '\u0201': 'a',
        '\u0203': 'a',
        '\u1EA1': 'a',
        '\u1EAD': 'a',
        '\u1EB7': 'a',
        '\u1E01': 'a',
        '\u0105': 'a',
        '\u2C65': 'a',
        '\u0250': 'a',
        '\uA733': 'aa',
        '\u00E6': 'ae',
        '\u01FD': 'ae',
        '\u01E3': 'ae',
        '\uA735': 'ao',
        '\uA737': 'au',
        '\uA739': 'av',
        '\uA73B': 'av',
        '\uA73D': 'ay',
        '\u24D1': 'b',
        '\uFF42': 'b',
        '\u1E03': 'b',
        '\u1E05': 'b',
        '\u1E07': 'b',
        '\u0180': 'b',
        '\u0183': 'b',
        '\u0253': 'b',
        '\u24D2': 'c',
        '\uFF43': 'c',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010B': 'c',
        '\u010D': 'c',
        '\u00E7': 'c',
        '\u1E09': 'c',
        '\u0188': 'c',
        '\u023C': 'c',
        '\uA73F': 'c',
        '\u2184': 'c',
        '\u24D3': 'd',
        '\uFF44': 'd',
        '\u1E0B': 'd',
        '\u010F': 'd',
        '\u1E0D': 'd',
        '\u1E11': 'd',
        '\u1E13': 'd',
        '\u1E0F': 'd',
        '\u0111': 'd',
        '\u018C': 'd',
        '\u0256': 'd',
        '\u0257': 'd',
        '\uA77A': 'd',
        '\u01F3': 'dz',
        '\u01C6': 'dz',
        '\u24D4': 'e',
        '\uFF45': 'e',
        '\u00E8': 'e',
        '\u00E9': 'e',
        '\u00EA': 'e',
        '\u1EC1': 'e',
        '\u1EBF': 'e',
        '\u1EC5': 'e',
        '\u1EC3': 'e',
        '\u1EBD': 'e',
        '\u0113': 'e',
        '\u1E15': 'e',
        '\u1E17': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u00EB': 'e',
        '\u1EBB': 'e',
        '\u011B': 'e',
        '\u0205': 'e',
        '\u0207': 'e',
        '\u1EB9': 'e',
        '\u1EC7': 'e',
        '\u0229': 'e',
        '\u1E1D': 'e',
        '\u0119': 'e',
        '\u1E19': 'e',
        '\u1E1B': 'e',
        '\u0247': 'e',
        '\u025B': 'e',
        '\u01DD': 'e',
        '\u24D5': 'f',
        '\uFF46': 'f',
        '\u1E1F': 'f',
        '\u0192': 'f',
        '\uA77C': 'f',
        '\u24D6': 'g',
        '\uFF47': 'g',
        '\u01F5': 'g',
        '\u011D': 'g',
        '\u1E21': 'g',
        '\u011F': 'g',
        '\u0121': 'g',
        '\u01E7': 'g',
        '\u0123': 'g',
        '\u01E5': 'g',
        '\u0260': 'g',
        '\uA7A1': 'g',
        '\u1D79': 'g',
        '\uA77F': 'g',
        '\u24D7': 'h',
        '\uFF48': 'h',
        '\u0125': 'h',
        '\u1E23': 'h',
        '\u1E27': 'h',
        '\u021F': 'h',
        '\u1E25': 'h',
        '\u1E29': 'h',
        '\u1E2B': 'h',
        '\u1E96': 'h',
        '\u0127': 'h',
        '\u2C68': 'h',
        '\u2C76': 'h',
        '\u0265': 'h',
        '\u0195': 'hv',
        '\u24D8': 'i',
        '\uFF49': 'i',
        '\u00EC': 'i',
        '\u00ED': 'i',
        '\u00EE': 'i',
        '\u0129': 'i',
        '\u012B': 'i',
        '\u012D': 'i',
        '\u00EF': 'i',
        '\u1E2F': 'i',
        '\u1EC9': 'i',
        '\u01D0': 'i',
        '\u0209': 'i',
        '\u020B': 'i',
        '\u1ECB': 'i',
        '\u012F': 'i',
        '\u1E2D': 'i',
        '\u0268': 'i',
        '\u0131': 'i',
        '\u24D9': 'j',
        '\uFF4A': 'j',
        '\u0135': 'j',
        '\u01F0': 'j',
        '\u0249': 'j',
        '\u24DA': 'k',
        '\uFF4B': 'k',
        '\u1E31': 'k',
        '\u01E9': 'k',
        '\u1E33': 'k',
        '\u0137': 'k',
        '\u1E35': 'k',
        '\u0199': 'k',
        '\u2C6A': 'k',
        '\uA741': 'k',
        '\uA743': 'k',
        '\uA745': 'k',
        '\uA7A3': 'k',
        '\u24DB': 'l',
        '\uFF4C': 'l',
        '\u0140': 'l',
        '\u013A': 'l',
        '\u013E': 'l',
        '\u1E37': 'l',
        '\u1E39': 'l',
        '\u013C': 'l',
        '\u1E3D': 'l',
        '\u1E3B': 'l',
        '\u017F': 'l',
        '\u0142': 'l',
        '\u019A': 'l',
        '\u026B': 'l',
        '\u2C61': 'l',
        '\uA749': 'l',
        '\uA781': 'l',
        '\uA747': 'l',
        '\u01C9': 'lj',
        '\u24DC': 'm',
        '\uFF4D': 'm',
        '\u1E3F': 'm',
        '\u1E41': 'm',
        '\u1E43': 'm',
        '\u0271': 'm',
        '\u026F': 'm',
        '\u24DD': 'n',
        '\uFF4E': 'n',
        '\u01F9': 'n',
        '\u0144': 'n',
        '\u00F1': 'n',
        '\u1E45': 'n',
        '\u0148': 'n',
        '\u1E47': 'n',
        '\u0146': 'n',
        '\u1E4B': 'n',
        '\u1E49': 'n',
        '\u019E': 'n',
        '\u0272': 'n',
        '\u0149': 'n',
        '\uA791': 'n',
        '\uA7A5': 'n',
        '\u01CC': 'nj',
        '\u24DE': 'o',
        '\uFF4F': 'o',
        '\u00F2': 'o',
        '\u00F3': 'o',
        '\u00F4': 'o',
        '\u1ED3': 'o',
        '\u1ED1': 'o',
        '\u1ED7': 'o',
        '\u1ED5': 'o',
        '\u00F5': 'o',
        '\u1E4D': 'o',
        '\u022D': 'o',
        '\u1E4F': 'o',
        '\u014D': 'o',
        '\u1E51': 'o',
        '\u1E53': 'o',
        '\u014F': 'o',
        '\u022F': 'o',
        '\u0231': 'o',
        '\u00F6': 'o',
        '\u022B': 'o',
        '\u1ECF': 'o',
        '\u0151': 'o',
        '\u01D2': 'o',
        '\u020D': 'o',
        '\u020F': 'o',
        '\u01A1': 'o',
        '\u1EDD': 'o',
        '\u1EDB': 'o',
        '\u1EE1': 'o',
        '\u1EDF': 'o',
        '\u1EE3': 'o',
        '\u1ECD': 'o',
        '\u1ED9': 'o',
        '\u01EB': 'o',
        '\u01ED': 'o',
        '\u00F8': 'o',
        '\u01FF': 'o',
        '\u0254': 'o',
        '\uA74B': 'o',
        '\uA74D': 'o',
        '\u0275': 'o',
        '\u01A3': 'oi',
        '\u0223': 'ou',
        '\uA74F': 'oo',
        '\u24DF': 'p',
        '\uFF50': 'p',
        '\u1E55': 'p',
        '\u1E57': 'p',
        '\u01A5': 'p',
        '\u1D7D': 'p',
        '\uA751': 'p',
        '\uA753': 'p',
        '\uA755': 'p',
        '\u24E0': 'q',
        '\uFF51': 'q',
        '\u024B': 'q',
        '\uA757': 'q',
        '\uA759': 'q',
        '\u24E1': 'r',
        '\uFF52': 'r',
        '\u0155': 'r',
        '\u1E59': 'r',
        '\u0159': 'r',
        '\u0211': 'r',
        '\u0213': 'r',
        '\u1E5B': 'r',
        '\u1E5D': 'r',
        '\u0157': 'r',
        '\u1E5F': 'r',
        '\u024D': 'r',
        '\u027D': 'r',
        '\uA75B': 'r',
        '\uA7A7': 'r',
        '\uA783': 'r',
        '\u24E2': 's',
        '\uFF53': 's',
        '\u00DF': 's',
        '\u015B': 's',
        '\u1E65': 's',
        '\u015D': 's',
        '\u1E61': 's',
        '\u0161': 's',
        '\u1E67': 's',
        '\u1E63': 's',
        '\u1E69': 's',
        '\u0219': 's',
        '\u015F': 's',
        '\u023F': 's',
        '\uA7A9': 's',
        '\uA785': 's',
        '\u1E9B': 's',
        '\u24E3': 't',
        '\uFF54': 't',
        '\u1E6B': 't',
        '\u1E97': 't',
        '\u0165': 't',
        '\u1E6D': 't',
        '\u021B': 't',
        '\u0163': 't',
        '\u1E71': 't',
        '\u1E6F': 't',
        '\u0167': 't',
        '\u01AD': 't',
        '\u0288': 't',
        '\u2C66': 't',
        '\uA787': 't',
        '\uA729': 'tz',
        '\u24E4': 'u',
        '\uFF55': 'u',
        '\u00F9': 'u',
        '\u00FA': 'u',
        '\u00FB': 'u',
        '\u0169': 'u',
        '\u1E79': 'u',
        '\u016B': 'u',
        '\u1E7B': 'u',
        '\u016D': 'u',
        '\u00FC': 'u',
        '\u01DC': 'u',
        '\u01D8': 'u',
        '\u01D6': 'u',
        '\u01DA': 'u',
        '\u1EE7': 'u',
        '\u016F': 'u',
        '\u0171': 'u',
        '\u01D4': 'u',
        '\u0215': 'u',
        '\u0217': 'u',
        '\u01B0': 'u',
        '\u1EEB': 'u',
        '\u1EE9': 'u',
        '\u1EEF': 'u',
        '\u1EED': 'u',
        '\u1EF1': 'u',
        '\u1EE5': 'u',
        '\u1E73': 'u',
        '\u0173': 'u',
        '\u1E77': 'u',
        '\u1E75': 'u',
        '\u0289': 'u',
        '\u24E5': 'v',
        '\uFF56': 'v',
        '\u1E7D': 'v',
        '\u1E7F': 'v',
        '\u028B': 'v',
        '\uA75F': 'v',
        '\u028C': 'v',
        '\uA761': 'vy',
        '\u24E6': 'w',
        '\uFF57': 'w',
        '\u1E81': 'w',
        '\u1E83': 'w',
        '\u0175': 'w',
        '\u1E87': 'w',
        '\u1E85': 'w',
        '\u1E98': 'w',
        '\u1E89': 'w',
        '\u2C73': 'w',
        '\u24E7': 'x',
        '\uFF58': 'x',
        '\u1E8B': 'x',
        '\u1E8D': 'x',
        '\u24E8': 'y',
        '\uFF59': 'y',
        '\u1EF3': 'y',
        '\u00FD': 'y',
        '\u0177': 'y',
        '\u1EF9': 'y',
        '\u0233': 'y',
        '\u1E8F': 'y',
        '\u00FF': 'y',
        '\u1EF7': 'y',
        '\u1E99': 'y',
        '\u1EF5': 'y',
        '\u01B4': 'y',
        '\u024F': 'y',
        '\u1EFF': 'y',
        '\u24E9': 'z',
        '\uFF5A': 'z',
        '\u017A': 'z',
        '\u1E91': 'z',
        '\u017C': 'z',
        '\u017E': 'z',
        '\u1E93': 'z',
        '\u1E95': 'z',
        '\u01B6': 'z',
        '\u0225': 'z',
        '\u0240': 'z',
        '\u2C6C': 'z',
        '\uA763': 'z',
        '\u0386': '\u0391',
        '\u0388': '\u0395',
        '\u0389': '\u0397',
        '\u038A': '\u0399',
        '\u03AA': '\u0399',
        '\u038C': '\u039F',
        '\u038E': '\u03A5',
        '\u03AB': '\u03A5',
        '\u038F': '\u03A9',
        '\u03AC': '\u03B1',
        '\u03AD': '\u03B5',
        '\u03AE': '\u03B7',
        '\u03AF': '\u03B9',
        '\u03CA': '\u03B9',
        '\u0390': '\u03B9',
        '\u03CC': '\u03BF',
        '\u03CD': '\u03C5',
        '\u03CB': '\u03C5',
        '\u03B0': '\u03C5',
        '\u03C9': '\u03C9',
        '\u03C2': '\u03C3'
    };
    return Diacritics;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OptionList = /** @class */ (function () {
    function OptionList(options) {
        /* Consider using these for performance improvement. */
        // private _selection: Array<Option>;
        // private _filtered: Array<Option>;
        // private _value: Array<string>;
        this._highlightedOption = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            /** @type {?} */
            var o = new Option(option.value, option.label);
            if (option.disabled) {
                o.disable();
            }
            return o;
        }));
        this.highlight();
    }
    // v0 and v1 are assumed not to be undefined or null.
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    OptionList.equalValues = 
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        /** @type {?} */
        var a = v0.slice().sort();
        /** @type {?} */
        var b = v1.slice().sort();
        return a.every((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        function (v, i) {
            return v === b[i];
        }));
    };
    Object.defineProperty(OptionList.prototype, "options", {
        /** Options. **/
        get: /**
         * Options. *
         * @return {?}
         */
        function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    OptionList.prototype.getOptionsByValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.value === value;
        }));
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            return this.selection.map((/**
             * @param {?} selectedOption
             * @return {?}
             */
            function (selectedOption) {
                return selectedOption.value;
            }));
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                option.selected = v.indexOf(option.value) > -1;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /** Selection. **/
        get: /**
         * Selection. *
         * @return {?}
         */
        function () {
            return this.options.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return option.selected;
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    OptionList.prototype.select = /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.deselect = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected = false;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            option.selected = false;
        }));
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /** Filter. **/
        get: /**
         * Filter. *
         * @return {?}
         */
        function () {
            return this.options.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return option.shown;
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    OptionList.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        if (term.trim() === '') {
            this.resetFilter();
        }
        else {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var l = Diacritics.strip(option.label).toUpperCase();
                /** @type {?} */
                var t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
            }));
        }
        this.highlight();
    };
    /**
     * @return {?}
     */
    OptionList.prototype.resetFilter = /**
     * @return {?}
     */
    function () {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            option.shown = true;
        }));
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /** Highlight. **/
        get: /**
         * Highlight. *
         * @return {?}
         */
        function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.highlight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        this.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.highlightOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightNextOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownOptions = this.filtered;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index > -1 && index < shownOptions.length - 1) {
            this.highlightOption(shownOptions[index + 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightPreviousOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownOptions = this.filtered;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index > 0) {
            this.highlightOption(shownOptions[index - 1]);
        }
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.clearHighlightedOption = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndexFromList = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndex = /**
     * @return {?}
     */
    function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    /** Util. **/
    /**
     * Util. *
     * @return {?}
     */
    OptionList.prototype.hasShown = /**
     * Util. *
     * @return {?}
     */
    function () {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.shown;
        }));
    };
    /**
     * @return {?}
     */
    OptionList.prototype.hasSelected = /**
     * @return {?}
     */
    function () {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.selected;
        }));
    };
    /**
     * @return {?}
     */
    OptionList.prototype.hasShownSelected = /**
     * @return {?}
     */
    function () {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.shown && option.selected;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShown = /**
     * @private
     * @return {?}
     */
    function () {
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(this.options), _b = _a.next(); !_b.done; _b = _a.next()) {
                var option = _b.value;
                if (option.shown) {
                    return option;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
        var e_1, _c;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShownSelected = /**
     * @private
     * @return {?}
     */
    function () {
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(this.options), _b = _a.next(); !_b.done; _b = _a.next()) {
                var option = _b.value;
                if (option.shown && option.selected) {
                    return option;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return null;
        var e_2, _c;
    };
    return OptionList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectDropdownComponent = /** @class */ (function () {
    function SelectDropdownComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.optionClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.singleFilterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.singleFilterInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.singleFilterKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
    }
    /** Event handlers. **/
    // Angular life cycle hooks.
    /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    SelectDropdownComponent.prototype.ngOnInit = /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    function () {
        this.optionsReset();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.moveHighlightedIntoView();
        if (!this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
    };
    // Filter input (single select).
    // Filter input (single select).
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = 
    // Filter input (single select).
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterKeydown.emit(event);
    };
    // Options list.
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = 
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionMouseover = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionList.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked.emit(option);
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = /**
     * Initialization. *
     * @private
     * @return {?}
     */
    function () {
        this.optionList.resetFilter();
        this.optionList.highlight();
    };
    /** View. **/
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.highlighted) {
            return {
                'background-color': this.highlightColor,
                'color': this.highlightTextColor
            };
        }
        else {
            return {};
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.clearFilterInput = /**
     * @return {?}
     */
    function () {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var list = this.optionsList.nativeElement;
        /** @type {?} */
        var listHeight = list.offsetHeight;
        /** @type {?} */
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            var item = list.children[0].children[itemIndex];
            /** @type {?} */
            var itemHeight = item.offsetHeight;
            /** @type {?} */
            var itemTop = itemIndex * itemHeight;
            /** @type {?} */
            var itemBottom = itemTop + itemHeight;
            /** @type {?} */
            var viewTop = list.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var div = this.optionsList.nativeElement;
        /** @type {?} */
        var atTop = div.scrollTop === 0;
        /** @type {?} */
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    SelectDropdownComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'select-dropdown',
                    template: "<div\n    [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\">\n\n    <div class=\"filter\"\n        *ngIf=\"!multiple\">\n        <input\n            *ngIf=\"filterEnabled\"\n            #filterInput\n            (click)=\"onSingleFilterClick($event)\"\n            (input)=\"onSingleFilterInput($event)\"\n            (keydown)=\"onSingleFilterKeydown($event)\">\n    </div>\n\n    <div class=\"options\"\n        #optionsList>\n        <ul\n            (wheel)=\"onOptionsWheel($event)\">\n            <li *ngFor=\"let option of optionList.filtered\"\n                [ngClass]=\"{'highlighted': option.highlighted, 'selected': option.selected, 'disabled': option.disabled}\"\n                [ngStyle]=\"getOptionStyle(option)\"\n                (click)=\"onOptionClick(option)\"\n                (mouseover)=\"onOptionMouseover(option)\">\n                {{option.label}}\n            </li>\n            <li\n                *ngIf=\"!optionList.hasShown()\"\n                class=\"message\">\n                {{notFoundMsg}}\n            </li>\n        </ul>\n    </div>\n</div>\n",
                    styles: [STYLE$1],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    SelectDropdownComponent.propDecorators = {
        filterEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        highlightColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        highlightTextColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        left: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        notFoundMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        optionList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        top: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        optionClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        singleFilterClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        singleFilterInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        singleFilterKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        filterInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['filterInput',] }],
        optionsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['optionsList',] }]
    };
    return SelectDropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SELECT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return SelectComponent; })),
    multi: true
};
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        /** Keys. **/
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40
        };
        this.allowClear = false;
        this.disabled = false;
        this.highlightColor = '#2196f3';
        this.highlightTextColor = '#fff';
        this.multiple = false;
        this.noFilter = 0;
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deselected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.typed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._value = [];
        // Selection state variables.
        this.hasSelected = false;
        // View state variables.
        this.filterEnabled = true;
        this.filterInputWidth = 1;
        this.hasFocus = false;
        this.isBelow = true;
        this.isDisabled = false;
        this.isOpen = false;
        this.placeholderView = '';
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /** Event handlers. **/
    // Angular lifecycle hooks.
    /**
     * Event handlers. *
     * @return {?}
     */
    // Angular lifecycle hooks.
    SelectComponent.prototype.ngOnInit = /**
     * Event handlers. *
     * @return {?}
     */
    // Angular lifecycle hooks.
    function () {
        this.placeholderView = this.placeholder;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateFilterWidth();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('options')) {
            this.updateOptionsList(changes['options'].isFirstChange());
        }
        if (changes.hasOwnProperty('noFilter')) {
            /** @type {?} */
            var numOptions = this.optionList.options.length;
            /** @type {?} */
            var minNumOptions = changes['noFilter'].currentValue;
            this.filterEnabled = numOptions >= minNumOptions;
        }
    };
    // Window.
    // Window.
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowClick = 
    // Window.
    /**
     * @return {?}
     */
    function () {
        if (!this.selectContainerClicked) {
            this.closeDropdown();
        }
        this.clearClicked = false;
        this.selectContainerClicked = false;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        this.updateWidth();
    };
    // Select container.
    // Select container.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerClick = 
    // Select container.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerFocus = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSelectContainerKeydown(event);
    };
    // Dropdown container.
    // Dropdown container.
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDropdownOptionClicked = 
    // Dropdown container.
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.multiple ?
            this.toggleSelectOption(option) : this.selectOption(option);
    };
    /**
     * @param {?} focus
     * @return {?}
     */
    SelectComponent.prototype.onDropdownClose = /**
     * @param {?} focus
     * @return {?}
     */
    function (focus) {
        this.closeDropdown(focus);
    };
    // Single filter input.
    // Single filter input.
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterClick = 
    // Single filter input.
    /**
     * @return {?}
     */
    function () {
        this.selectContainerClicked = true;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterInput = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (term.length > 2) {
                _this.typed.emit(term);
            }
        }), 500);
        this.optionList.filter(term);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSingleFilterKeydown(event);
    };
    // Multiple filter input.
    // Multiple filter input.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterInput = 
    // Multiple filter input.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.isOpen) {
            this.openDropdown();
        }
        this.updateFilterWidth();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.optionList.filter(event.target.value);
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    // Single clear select.
    // Single clear select.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onClearSelectionClick = 
    // Single clear select.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    };
    // Multiple deselect option.
    // Multiple deselect option.
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDeselectOptionClick = 
    // Multiple deselect option.
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    /** API. **/
    // TODO fix issues with global click/key handler that closes the dropdown.
    /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    SelectComponent.prototype.open = /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    function () {
        this.openDropdown();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeDropdown();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.clearSelection();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.select = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.optionList.getOptionsByValue(value).forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _this.selectOption(option);
        }));
        this.valueChanged();
    };
    /** ControlValueAccessor interface methods. **/
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.writeValue = /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            if (this._value.length === 0) {
                return '';
            }
            else {
                return this.multiple ? this._value : this._value[0];
            }
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (typeof v === 'undefined' || v === null || v === '') {
                v = [];
            }
            else if (typeof v === 'string') {
                v = [v];
            }
            else if (!Array.isArray(v)) {
                throw new TypeError('Value must be a string or an array.');
            }
            if (!OptionList.equalValues(v, this._value)) {
                this.optionList.value = v;
                this.valueChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.valueChanged = /**
     * @private
     * @return {?}
     */
    function () {
        this._value = this.optionList.value;
        this.hasSelected = this._value.length > 0;
        this.placeholderView = this.hasSelected ? '' : this.placeholder;
        this.updateFilterWidth();
        this.onChange(this.value);
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @private
     * @param {?} firstTime
     * @return {?}
     */
    SelectComponent.prototype.updateOptionsList = /**
     * Initialization. *
     * @private
     * @param {?} firstTime
     * @return {?}
     */
    function (firstTime) {
        /** @type {?} */
        var v;
        if (!firstTime) {
            v = this.optionList.value;
        }
        this.optionList = new OptionList(this.options);
        if (!firstTime) {
            this.optionList.value = v;
            this.valueChanged();
        }
    };
    /** Dropdown. **/
    /**
     * Dropdown. *
     * @private
     * @return {?}
     */
    SelectComponent.prototype.toggleDropdown = /**
     * Dropdown. *
     * @private
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.openDropdown = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            this.updateWidth();
            this.updatePosition();
            this.isOpen = true;
            if (this.multiple && this.filterEnabled) {
                this.filterInput.nativeElement.focus();
            }
            this.opened.emit(null);
        }
    };
    /* tslint:disable */
    /* tslint:disable */
    /**
     * @private
     * @param {?=} focus
     * @return {?}
     */
    SelectComponent.prototype.closeDropdown = /* tslint:disable */
    /**
     * @private
     * @param {?=} focus
     * @return {?}
     */
    function (focus) {
        if (focus === void 0) { focus = false; }
        if (this.isOpen) {
            this.clearFilterInput();
            this.isOpen = false;
            if (focus) {
                this.focus();
            }
            this.closed.emit(null);
        }
    };
    /* tslint:enable */
    /** Select. **/
    /* tslint:enable */
    /**
     * Select. *
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.selectOption = /* tslint:enable */
    /**
     * Select. *
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!option.selected) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.undecoratedCopy());
            // Is this not allready done when setting the value??
            /*setTimeout(() => {
                if (this.multiple) {
                    this.updateFilterWidth();
                }
            });*/
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.deselectOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.undecoratedCopy());
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.multiple) {
                    // this.updateFilterWidth();
                    _this.updatePosition();
                    _this.optionList.highlight();
                    if (_this.isOpen) {
                        _this.dropdown.moveHighlightedIntoView();
                    }
                }
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.clearSelection = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            if (selection.length === 1) {
                this.deselected.emit(selection[0].undecoratedCopy());
            }
            else {
                this.deselected.emit(selection.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return option.undecoratedCopy();
                })));
            }
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.toggleSelectOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected ?
            this.deselectOption(option) : this.selectOption(option);
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.selectHighlightedOption = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.deselectLast = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sel = this.optionList.selection;
        if (sel.length > 0) {
            /** @type {?} */
            var option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    /** Filter. **/
    /**
     * Filter. *
     * @private
     * @return {?}
     */
    SelectComponent.prototype.clearFilterInput = /**
     * Filter. *
     * @private
     * @return {?}
     */
    function () {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
        else {
            this.dropdown.clearFilterInput();
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.setMultipleFilterInput = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSelectContainerKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var key = event.which;
        if (this.isOpen) {
            if (key === this.KEYS.ESC ||
                (key === this.KEYS.UP && event.altKey)) {
                this.closeDropdown(true);
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
            }
            else if (key === this.KEYS.UP) {
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
            else if (key === this.KEYS.DOWN) {
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
        }
        else {
            if (key === this.KEYS.ENTER || key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                /* FIREFOX HACK:
                 *
                 * The setTimeout is added to prevent the enter keydown event
                 * to be triggered for the filter input field, which causes
                 * the dropdown to be closed again.
                 */
                setTimeout((/**
                 * @return {?}
                 */
                function () { _this.openDropdown(); }));
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleMultipleFilterKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSingleFilterKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    /** View. **/
    /**
     * View. *
     * @return {?}
     */
    SelectComponent.prototype.focus = /**
     * View. *
     * @return {?}
     */
    function () {
        this.hasFocus = true;
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
        else {
            this.selectionSpan.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.hasFocus = false;
        this.selectionSpan.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        this.width = this.selectionSpan.nativeElement.offsetWidth;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var e = this.selectionSpan.nativeElement;
        this.left = e.offsetLeft;
        this.top = e.offsetTop + e.offsetHeight;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateFilterWidth = /**
     * @return {?}
     */
    function () {
        if (typeof this.filterInput !== 'undefined') {
            /** @type {?} */
            var value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    };
    SelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-select',
                    template: "<div\n    #selection\n    [attr.tabindex]=\"disabled ? null : 0\"\n    [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'disabled': disabled}\"\n    (click)=\"onSelectContainerClick($event)\"\n    (focus)=\"onSelectContainerFocus()\"\n    (keydown)=\"onSelectContainerKeydown($event)\"\n    (window:click)=\"onWindowClick()\"\n    (window:resize)=\"onWindowResize()\">\n\n    <div class=\"single\"\n        *ngIf=\"!multiple\">\n        <div class=\"value\"\n            *ngIf=\"optionList.hasSelected()\">\n            {{optionList.selection[0].label}}\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!optionList.hasSelected()\">\n            {{placeholderView}}\n        </div>\n        <div class=\"clear\"\n            *ngIf=\"allowClear\"\n            (click)=\"onClearSelectionClick($event)\">\n            &#x2715;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"isOpen\">\n            &#x25B2;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"!isOpen\">\n            &#x25BC;\n        </div>\n    </div>\n\n    <div class=\"multiple\"\n        *ngIf=\"multiple\">\n        <div class=\"option\"\n            *ngFor=\"let option of optionList.selection\">\n            <span class=\"deselect-option\"\n                (click)=onDeselectOptionClick(option)>\n                &#x2715;\n            </span>\n            {{option.label}}\n        </div>\n        <input\n            *ngIf=\"filterEnabled\"\n            #filterInput\n            tabindex=\"-1\"\n            [placeholder]=\"placeholderView\"\n            [ngStyle]=\"{'width.px': filterInputWidth}\"\n            (input)=\"onMultipleFilterInput($event)\"\n            (keydown)=\"onMultipleFilterKeydown($event)\"/>\n    </div>\n\n</div>\n<select-dropdown\n    *ngIf=\"isOpen\"\n    #dropdown\n    [multiple]=\"multiple\"\n    [optionList]=\"optionList\"\n    [notFoundMsg]=\"notFoundMsg\"\n    [highlightColor]=\"highlightColor\"\n    [highlightTextColor]=\"highlightTextColor\"\n    [filterEnabled]=\"filterEnabled\"\n    [width]=\"width\"\n    [top]=\"top\"\n    [left]=\"left\"\n    (close)=\"onDropdownClose($event)\"\n    (optionClicked)=\"onDropdownOptionClicked($event)\"\n    (singleFilterClick)=\"onSingleFilterClick()\"\n    (singleFilterInput)=\"onSingleFilterInput($event)\"\n    (singleFilterKeydown)=\"onSingleFilterKeydown($event)\">\n</select-dropdown>\n",
                    styles: [STYLE],
                    providers: [SELECT_VALUE_ACCESSOR],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    SelectComponent.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        allowClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        highlightColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        highlightTextColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        noFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        notFoundMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        deselected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        typed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selectionSpan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['selection',] }],
        dropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dropdown',] }],
        filterInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['filterInput',] }]
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        SelectComponent,
                        SelectDropdownComponent
                    ],
                    exports: [
                        SelectComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                    ]
                },] },
    ];
    return SelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { FileUploadResourceService } from '../../etl-api/file-upload-resource.service';
// Using similarity from AsyncPipe to avoid having to pipe |secure|async in HTML.
// tslint:disable-next-line:use-pipe-transform-interface
var SecurePipe = /** @class */ (function () {
    function SecurePipe(_ref, sanitizer) {
        this._ref = _ref;
        this.sanitizer = sanitizer;
        this._latestValue = null;
        this._latestReturnedValue = null;
        this._subscription = null;
        this._obj = null;
        this._result = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.result = this._result.asObservable();
        this._internalSubscription = null;
    }
    /**
     * @return {?}
     */
    SecurePipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._subscription) {
            this._dispose();
        }
    };
    /**
     * @param {?} url
     * @param {?} getfile
     * @return {?}
     */
    SecurePipe.prototype.transform = /**
     * @param {?} url
     * @param {?} getfile
     * @return {?}
     */
    function (url, getfile) {
        this.getfile = getfile;
        /** @type {?} */
        var obj = this.internalTransform(url);
        return this.asyncTrasnform(obj);
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    SecurePipe.prototype.internalTransform = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        if (!url) {
            return this.result;
        }
        if (this.previousUrl !== url) {
            this.previousUrl = url;
            this._internalSubscription = this.getfile(url)
                .subscribe((/**
             * @param {?} m
             * @return {?}
             */
            function (m) {
                /** @type {?} */
                var sanitized = _this.sanitizer.bypassSecurityTrustUrl(m);
                _this._result.next(sanitized);
            }));
        }
        return this.result;
    };
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    SecurePipe.prototype.asyncTrasnform = /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (!this._obj) {
            if (obj) {
                this._subscribe(obj);
            }
            this._latestReturnedValue = this._latestValue;
            return this._latestValue;
        }
        if (obj !== this._obj) {
            this._dispose();
            return this.asyncTrasnform(obj);
        }
        if (this._latestValue === this._latestReturnedValue) {
            return this._latestReturnedValue;
        }
        this._latestReturnedValue = this._latestValue;
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["WrappedValue"].wrap(this._latestValue);
    };
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    SecurePipe.prototype._subscribe = /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var _this = this;
        this._obj = obj;
        this._subscription = obj.subscribe({
            next: (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                return _this._updateLatestValue(obj, value);
            }), error: (/**
             * @param {?} e
             * @return {?}
             */
            function (e) { throw e; })
        });
    };
    /**
     * @private
     * @return {?}
     */
    SecurePipe.prototype._dispose = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._internalSubscription) {
            this._internalSubscription.unsubscribe();
        }
        this._internalSubscription = null;
        this._latestValue = null;
        this._latestReturnedValue = null;
        this._subscription = null;
        this._obj = null;
    };
    /**
     * @private
     * @param {?} async
     * @param {?} value
     * @return {?}
     */
    SecurePipe.prototype._updateLatestValue = /**
     * @private
     * @param {?} async
     * @param {?} value
     * @return {?}
     */
    function (async, value) {
        if (async === this._obj) {
            this._latestValue = value;
            this._ref.markForCheck();
        }
    };
    SecurePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'secure',
                    pure: false
                },] },
    ];
    SecurePipe.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }
    ]; };
    return SecurePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        SecurePipe
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
                    exports: [
                        SecurePipe
                    ],
                    providers: [
                        DataSources
                    ],
                },] },
    ];
    return SharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RemoteFileUploadComponent = /** @class */ (function () {
    function RemoteFileUploadComponent(renderer) {
        this.renderer = renderer;
        this.uploading = false;
        this.innerValue = null;
        // the method set in registerOnChange, it is just
        // a placeholder for a method that takes one parameter,
        // we use it to emit changes back to the form
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
    }
    Object.defineProperty(RemoteFileUploadComponent.prototype, "dataSource", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._dataSource = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RemoteFileUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RemoteFileUploadComponent.prototype.upload = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (this.dataSource) {
            this.uploading = true;
            this.dataSource.fileUpload(data).subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                // console.log('Result', result);
                _this.innerValue = result.image;
                _this.propagateChange(_this.innerValue);
                _this.uploading = false;
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.uploading = false;
            }));
        }
    };
    // this is the initial value set to the component
    // this is the initial value set to the component
    /**
     * @param {?} value
     * @return {?}
     */
    RemoteFileUploadComponent.prototype.writeValue = 
    // this is the initial value set to the component
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    // registers 'fn' that will be fired when changes are made
    // this is how we emit the changes back to the form
    // registers 'fn' that will be fired when changes are made
    // this is how we emit the changes back to the form
    /**
     * @param {?} fn
     * @return {?}
     */
    RemoteFileUploadComponent.prototype.registerOnChange = 
    // registers 'fn' that will be fired when changes are made
    // this is how we emit the changes back to the form
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    // not used, used for touch input
    // not used, used for touch input
    /**
     * @return {?}
     */
    RemoteFileUploadComponent.prototype.registerOnTouched = 
    // not used, used for touch input
    /**
     * @return {?}
     */
    function () { };
    // change events from the textarea
    // change events from the textarea
    /**
     * @param {?} event
     * @return {?}
     */
    RemoteFileUploadComponent.prototype.onChange = 
    // change events from the textarea
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.propagateChange(event.id);
        // .....
        // update the form
        // this.propagateChange(this.data);
    };
    /**
     * @return {?}
     */
    RemoteFileUploadComponent.prototype.clearValue = /**
     * @return {?}
     */
    function () {
        this.innerValue = null;
        this.propagateChange(this.innerValue);
    };
    RemoteFileUploadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'remote-file-upload',
                    template: "<div>\n    <file-uploader [(ngModel)]=\"innerValue\" (onClear)=\"clearValue()\" (fileChanged)=\"upload($event)\">\n    </file-uploader>\n    <img *ngIf=\"innerValue\" class=\"img-responsive\" [src]=\"innerValue | secure:this.dataSource.fetchFile\" alt=\"\" />\n</div>",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return RemoteFileUploadComponent; })),
                            multi: true,
                        }
                    ],
                    styles: ["img {\n        margin-left: auto;margin-right: auto;display: block;\n    }"
                    ]
                },] },
    ];
    RemoteFileUploadComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    RemoteFileUploadComponent.propDecorators = {
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return RemoteFileUploadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RemoteFileUploadModule = /** @class */ (function () {
    function RemoteFileUploadModule() {
    }
    RemoteFileUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], SelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_file_uploader_ampath__WEBPACK_IMPORTED_MODULE_9__["NgxFileUploaderModule"], SharedModule],
                    exports: [RemoteFileUploadComponent],
                    declarations: [RemoteFileUploadComponent],
                    providers: [],
                },] },
    ];
    return RemoteFileUploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$1 = moment__WEBPACK_IMPORTED_MODULE_4__;
// const myDpStyles: string = require('./date-picker.component.css');
// const myDpTpl: string = require('./date-picker.component.html');
// webpack2_
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
        this.locale = 'en';
        this.viewFormat = 'll';
        this.returnObject = 'js';
        this.onDatePickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDisplayMonths = false;
        this.onDisplayYears = false;
        this.displayYearsIndex = 0;
        this.monthsShort = moment$1.monthsShort();
    }
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initValue();
        // default to current year range
        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(this.fullYearRange, (/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        function (v, i) {
            _this.currentYear = _this.calendarDate.clone().startOf('year').year();
            if (v.indexOf(_this.currentYear) !== -1) {
                _this.displayYearsIndex = i;
            }
        }));
        this.displayYearRange = this.fullYearRange[this.displayYearsIndex];
        this.generateCalendar();
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this.onDisplayYears) {
            this.displayYearsIndex--;
            if (this.displayYearsIndex < 0) {
                this.displayYearsIndex = 0;
            }
            this.displayYearRange = this.fullYearRange[this.displayYearsIndex];
        }
        else {
            this.calendarDate = this.calendarDate.clone().subtract(1, 'M');
        }
        this.generateCalendar();
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.showMonthSelection = /**
     * @return {?}
     */
    function () {
        this.onDisplayMonths = true;
        this.onDisplayYears = false;
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.showYearSelection = /**
     * @return {?}
     */
    function () {
        this.onDisplayYears = true;
        this.onDisplayMonths = false;
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.onDisplayYears) {
            this.displayYearsIndex++;
            if (this.displayYearsIndex >= this.fullYearRange.length) {
                this.displayYearsIndex = this.fullYearRange.length - 1;
            }
            this.displayYearRange = this.fullYearRange[this.displayYearsIndex++];
        }
        else {
            this.calendarDate = this.calendarDate.clone().add(1, 'M');
        }
        this.generateCalendar();
    };
    /**
     * @param {?} day
     * @return {?}
     */
    DatePickerComponent.prototype.selectDay = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        /** @type {?} */
        var daysDifference = day.diff(this.calendarDate.clone().startOf('date'), 'days');
        day = this.calendarDate.clone().add(daysDifference, 'd');
        /** @type {?} */
        var selectedDay = this.parseToReturnObjectType(day);
        this.onSelectDate.emit(selectedDay);
        this.cancelDatePicker();
        return;
    };
    /**
     * @param {?} month
     * @return {?}
     */
    DatePickerComponent.prototype.selectMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.calendarDate = this.calendarDate.clone().month(month);
        this.onDisplayMonths = false;
        this.generateCalendar();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    DatePickerComponent.prototype.selectYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.calendarDate = this.calendarDate.clone().year(year);
        this.onDisplayYears = false;
        this.generateCalendar();
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.selectToday = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var today = this.parseToReturnObjectType(moment$1());
        this.onSelectDate.emit(today);
        this.cancelDatePicker();
        return;
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.clearPickDate = /**
     * @return {?}
     */
    function () {
        this.onSelectDate.emit(null);
        this.cancelDatePicker();
        return;
    };
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.cancelDatePicker = /**
     * @return {?}
     */
    function () {
        this.onDatePickerCancel.emit(false);
        return;
    };
    /**
     * @protected
     * @return {?}
     */
    DatePickerComponent.prototype.generateYears = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentYear = moment$1().year();
        /** @type {?} */
        var startYr = this.calendarDate.clone().subtract(100, 'y').year();
        // const endYr = this.calendarDate.clone().add(10, 'y').year();
        /** @type {?} */
        var years = [];
        for (var year = startYr; year <= currentYear; year++) {
            years.push(year);
        }
        this.fullYearRange = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["chunk"])(years, 14);
    };
    /**
     * @protected
     * @return {?}
     */
    DatePickerComponent.prototype.initValue = /**
     * @protected
     * @return {?}
     */
    function () {
        // set moment locale (default is en)
        moment$1.locale(this.locale);
        // set today value
        this.today = moment$1().startOf('date');
        this.currentMonth = this.monthsShort[moment$1().month()];
        this.currentYear = moment$1().year();
        // set week days name array
        this.dayNames = moment$1.weekdaysShort(true);
        // check if the input initDate has value
        if (this.initDate) {
            this.calendarDate = this.returnObject === 'string' ? moment$1(this.initDate, this.viewFormat) :
                moment$1(this.initDate);
            this.selectedDate = this.calendarDate.clone().startOf('date');
        }
        else {
            this.calendarDate = moment$1();
        }
        this.generateYears();
    };
    /**
     * @protected
     * @return {?}
     */
    DatePickerComponent.prototype.generateCalendar = /**
     * @protected
     * @return {?}
     */
    function () {
        this.calendarDays = [];
        /** @type {?} */
        var start = 0 - (this.calendarDate.clone().startOf('month').day() +
            (7 - moment$1.localeData().firstDayOfWeek())) % 7;
        /** @type {?} */
        var end = 41 + start;
        for (var i = start; i <= end; i += 1) {
            /** @type {?} */
            var day = this.calendarDate.clone().startOf('month').add(i, 'days');
            this.calendarDays.push(day);
        }
    };
    /**
     * @protected
     * @param {?} day
     * @return {?}
     */
    DatePickerComponent.prototype.parseToReturnObjectType = /**
     * @protected
     * @param {?} day
     * @return {?}
     */
    function (day) {
        switch (this.returnObject) {
            case 'js':
                return day.toDate();
            case 'string':
                return day.format(this.viewFormat);
            case 'moment':
                return day;
            case 'json':
                return day.toJSON();
            case 'array':
                return day.toArray();
            case 'iso':
                return day.toISOString();
            case 'object':
                return day.toObject();
            default:
                return day;
        }
    };
    DatePickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'date-picker',
                    template: "<picker-modal (onOverlayClick)=\"cancelDatePicker()\">\n  <div class=\"picker-wrap\">\n    <div class=\"picker-box\">\n      <div class=\"picker-header\">\n        <div class=\"picker-header-nav\">\n          <span class=\"nav-prev\" (click)=\"prev()\"></span>\n        </div>\n        <div class=\"picker-header-content\">\n          <div class=\"content\">\n            <span (click)=\"showMonthSelection()\" class=\"month\">{{calendarDate | moment: \"MMMM\"}}</span>\n            <span class=\"seperator\">|</span>\n            <span (click)=\"showYearSelection()\" class=\"year\">{{calendarDate | moment: \"YYYY\"}}</span>\n          </div>\n        </div>\n        <div class=\"picker-header-nav\">\n          <span class=\"nav-next\" (click)=\"next()\"></span>\n        </div>\n      </div>\n      <div class=\"picker-calendar\">\n        <div class=\"picker-calendar-row\" *ngIf=\"!onDisplayMonths && !onDisplayYears\">\n          <span class=\"picker-weekday\" *ngFor=\"let day of dayNames\">{{ day }}</span>\n        </div>\n        <div class=\"picker-calendar-row\" *ngIf=\"!onDisplayMonths && !onDisplayYears\">\n                    <span class=\"picker-day\" (click)=\"selectDay(day)\" [ngClass]=\"{\n                       'out-focus': day.month() != calendarDate.month(),\n                       'today': day.isSame(today),\n                       'selected': day.isSame(selectedDate)\n                      }\" *ngFor=\"let day of calendarDays\">\n                    {{ day | moment: 'D'}}\n                </span>\n        </div>\n        <div class=\"picker-calendar-row\" *ngIf=\"onDisplayMonths\">\n                    <span class=\"picker-month\" *ngFor=\"let month of monthsShort\"\n                          (click)=\"selectMonth(month)\"\n                          [ngClass]=\"{\n                       'selected': month === currentMonth\n                      }\">\n                    {{ month }}\n                </span>\n        </div>\n        <div class=\"picker-calendar-row\" *ngIf=\"onDisplayYears\">\n                    <span class=\"picker-year\" *ngFor=\"let year of displayYearRange\"\n                          (click)=\"selectYear(year)\"\n                          [ngClass]=\"{\n                       'selected': year === currentYear\n                      }\">\n                    {{ year }}\n                </span>\n        </div>\n      </div>\n      <div class=\"picker-footer\">\n        <div class=\"picker-action action-today\" (click)=\"selectToday()\"><span class=\"text\">Today</span></div>\n        <div class=\"picker-action action-clear\" (click)=\"clearPickDate()\"><span class=\"text\">Clear</span></div>\n        <div class=\"picker-action action-close\" (click)=\"cancelDatePicker()\"><span class=\"text\">Close</span></div>\n      </div>\n    </div>\n  </div>\n</picker-modal>\n",
                    styles: ["*,::after,::before{box-sizing:border-box}.picker-wrap{width:95vw;max-width:666px}.picker-box{font-family:'Open Sans';min-width:400px!important;padding:.625rem 1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker-footer,.picker-header{font-size:1.333rem;line-height:2.5rem;display:flex;height:2.5rem;width:100%}.picker-header-nav{position:relative;cursor:pointer;width:calc(100% / 8)}.picker-header-nav>*{position:absolute;top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.picker-header-nav .nav-next::before,.picker-header-nav .nav-prev::before{content:\" \";border-top:.5em solid transparent;border-bottom:.5em solid transparent;border-right:.75em solid #000;width:0;height:0;display:block;margin:0 auto}.picker-header-nav .nav-next::before{border-right:0;border-left:.75em solid #000}.picker-header-content{width:calc(100% * 6 / 8);text-align:center}.picker-header-content .month{font-size:1.778rem;line-height:2.5rem;margin-right:.5rem;font-weight:700}.picker-header-content .year{font-style:italic;color:#999}.picker-calendar{width:100%}.picker-calendar .picker-calendar-row{display:flex;flex-wrap:wrap;width:100%;margin-bottom:.625rem}.picker-calendar .picker-weekday{font-weight:700;text-align:left;color:#999;width:calc(100% / 7)}.picker-calendar .picker-day,.picker-calendar .picker-month,.picker-calendar .picker-year{font-size:1.333rem;line-height:2.5rem;position:relative;height:2.5rem;text-align:center;cursor:pointer;width:calc(100% / 7)}.picker-calendar .picker-day:hover,.picker-calendar .picker-month:hover,.picker-calendar .picker-year:hover{background:#b1dcfb}.picker-calendar .out-focus{color:#ddd}.picker-calendar .out-focus:hover{color:#000}.picker-calendar .selected{background:#0089ec;color:#fff}.picker-calendar .selected:hover{background:#0089ec}.picker-calendar .today::before{content:\" \";position:absolute;top:2px;right:2px;width:0;height:0;border-top:.5em solid #0059bc;border-left:.5em solid transparent}.picker-footer{cursor:pointer}.picker-footer .picker-action{text-align:center;width:calc(100% / 3)}.picker-footer .picker-action:hover{background-color:#b1dcfb}.picker-footer .picker-action .text{padding-left:.8rem}.picker-footer .action-clear::before,.picker-footer .action-close::before,.picker-footer .action-today::before{content:\" \";position:relative;display:inline-block;height:0;width:0}.picker-footer .action-today::before{border-top:.66em solid #0059bc;border-left:.66em solid transparent}.picker-footer .action-clear::before{top:-.5rem;width:1rem;border-top:3px solid #e20}.picker-footer .action-close::before{width:1rem;height:1rem;background:linear-gradient(to bottom,transparent 35%,#777 35%,#777 65%,transparent 65%),linear-gradient(to right,transparent 35%,#777 35%,#777 65%,transparent 65%);-webkit-transform:rotate(45deg);transform:rotate(45deg)}"],
                },] },
    ];
    DatePickerComponent.ctorParameters = function () { return []; };
    DatePickerComponent.propDecorators = {
        initDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        returnObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onDatePickerCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onSelectDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DatePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$2 = moment__WEBPACK_IMPORTED_MODULE_4__;
// const myDpStyles: string = require('./time-picker.component.css');
// const myDpTpl: string = require('./time-picker.component.html');
// webpack2_
var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent() {
        this.showSecond = true;
        this.viewFormat = 'hh:mm A';
        this.use12Hour = false;
        this.returnObject = 'js';
        this.onSelectTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTimePickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hourFormat = 'HH';
    }
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.use12Hour) {
            this.hourFormat = 'hh';
        }
        this.time = this.initTime ? moment$2(this.initTime, this.viewFormat) : moment$2();
        // check if the input initDate has value
        if (this.initTime) {
            this.time = this.returnObject === 'string' ? moment$2(this.initTime, this.viewFormat) :
                moment$2(this.initTime);
        }
        else {
            this.time = moment$2();
        }
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.increaseHour = /**
     * @return {?}
     */
    function () {
        this.time = this.time.clone().add(1, 'h');
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.decreaseHour = /**
     * @return {?}
     */
    function () {
        this.time = this.time.clone().subtract(1, 'h');
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.increaseMinute = /**
     * @return {?}
     */
    function () {
        this.time = this.time.clone().add(1, 'm');
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.decreaseMinute = /**
     * @return {?}
     */
    function () {
        this.time = this.time.clone().subtract(1, 'm');
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.increaseSecond = /**
     * @return {?}
     */
    function () {
        this.time = this.time.clone().add(1, 's');
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.decreaseSecond = /**
     * @return {?}
     */
    function () {
        this.time = this.time.clone().subtract(1, 's');
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.selectTime = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectTime = this.parseToReturnObjectType(this.time);
        this.onSelectTime.emit(selectTime);
        this.cancelTimePicker();
        return;
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.selectNow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectTime = this.parseToReturnObjectType(moment$2());
        this.onSelectTime.emit(selectTime);
        this.cancelTimePicker();
        return;
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.clearTime = /**
     * @return {?}
     */
    function () {
        this.onSelectTime.emit(null);
        this.cancelTimePicker();
        return;
    };
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.cancelTimePicker = /**
     * @return {?}
     */
    function () {
        this.onTimePickerCancel.emit(false);
        return;
    };
    /**
     * @protected
     * @param {?} time
     * @return {?}
     */
    TimePickerComponent.prototype.parseToReturnObjectType = /**
     * @protected
     * @param {?} time
     * @return {?}
     */
    function (time) {
        switch (this.returnObject) {
            case 'js':
                return time.toDate();
            case 'string':
                return time.format(this.viewFormat);
            case 'moment':
                return time;
            case 'json':
                return time.toJSON();
            case 'array':
                return time.toArray();
            case 'iso':
                return time.toISOString();
            case 'object':
                return time.toObject();
            default:
                return time;
        }
    };
    TimePickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'time-picker',
                    template: "<picker-modal (onOverlayClick)=\"cancelTimePicker()\">\n    <div class=\"picker-wrap\">\n        <div class=\"picker-box\">\n            <div class=\"picker-header\">Time Picker</div>\n            <div class=\"picker-table\">\n                <ul class=\"picker-table-time\">\n                    <li class=\"picker-table-number hour\">\n                        <span class=\"arrow up\" (click)=\"increaseHour()\"></span>\n                        {{time | moment: hourFormat}}\n                        <span class=\"arrow down\" (click)=\"decreaseHour()\"></span>\n                    </li>\n                    <li class=\"picker-table-separator\">:</li>\n                    <li class=\"picker-table-number minute\">\n                        <span class=\"arrow up\" (click)=\"increaseMinute()\"></span>\n                        {{time | moment: 'mm'}}\n                        <span class=\"arrow down\" (click)=\"decreaseMinute()\"></span>\n                    </li>\n                    <li *ngIf=\"showSecond\" class=\"picker-table-separator\">:</li>\n                    <li *ngIf=\"showSecond\" class=\"picker-table-number second\">\n                        <span class=\"arrow up\" (click)=\"increaseSecond()\"></span>\n                        {{time | moment: 'ss'}}\n                        <span class=\"arrow down\" (click)=\"decreaseSecond()\"></span>\n                    </li>\n                    <li *ngIf=\"use12Hour\" class=\"picker-table-meridiem meridiem\">\n                        {{time | moment: 'A'}}\n                    </li>\n                </ul>\n            </div>\n            <div class=\"picker-footer\">\n                <div class=\"picker-action action-now\" (click)=\"selectNow()\"><span class=\"text\">Now</span></div>\n                <div class=\"picker-action action-confirm\" (click)=\"selectTime()\"><span class=\"text\">Confirm</span></div>\n                <div class=\"picker-action action-clear\" (click)=\"clearTime()\"><span class=\"text\">Clear</span></div>\n                <div class=\"picker-action action-close\" (click)=\"cancelTimePicker()\"><span class=\"text\">Close</span></div>\n            </div>\n        </div>\n    </div>\n</picker-modal>\n",
                    styles: ["*,::after,::before{box-sizing:border-box}.picker-wrap{width:95vw;max-width:40rem;font-family:'Open Sans'}.picker-box{width:100%;padding:.625rem 1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker-footer,.picker-header{font-size:1.333rem;line-height:2.5rem;height:2.5rem;width:100%}.picker-header{text-align:center}.picker-table{width:100%;margin:2.5rem 0}.picker-table-time{font-size:2.37rem;line-height:2.5rem;list-style:none;margin:0;padding:0;display:flex;justify-content:center;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker-table-meridiem,.picker-table-number,.picker-table-separator{text-align:center}.picker-table-meridiem,.picker-table-number{position:relative;width:20%}.arrow{position:absolute;left:50%;border:solid #777;border-width:0 .2rem .2rem 0;display:inline-block;padding:.25rem;cursor:pointer}.arrow.up{top:-1rem;-webkit-transform:translateX(-50%) rotate(-135deg);transform:translateX(-50%) rotate(-135deg)}.arrow.down{bottom:-1rem;-webkit-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg)}.arrow:hover{border-color:#1975d2}.picker-table-separator{width:calc(20% / 3)}.picker-footer{display:flex;justify-content:center;width:100%;cursor:pointer}.picker-footer .picker-action{width:25%;text-align:center}.picker-footer .picker-action:hover{background-color:#b1dcfb}.picker-footer .picker-action .text{padding-left:.8rem}.picker-footer .action-clear::before,.picker-footer .action-close::before,.picker-footer .action-confirm::before,.picker-footer .action-now::before{content:\" \";position:relative;display:inline-block;height:0;width:0}.picker-footer .action-now::before{border-top:.66em solid #0059bc;border-left:.66em solid transparent}.picker-footer .action-confirm::before{width:1rem;height:1rem;border-radius:100%;background-color:#00b5ad}.picker-footer .action-clear::before{top:-.5rem;width:1rem;border-top:3px solid #e20}.picker-footer .action-close::before{width:1rem;height:1rem;background:linear-gradient(to bottom,transparent 35%,#777 35%,#777 65%,transparent 65%),linear-gradient(to right,transparent 35%,#777 35%,#777 65%,transparent 65%);-webkit-transform:rotate(45deg);transform:rotate(45deg)}"],
                },] },
    ];
    TimePickerComponent.ctorParameters = function () { return []; };
    TimePickerComponent.propDecorators = {
        initTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showSecond: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        use12Hour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        returnObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onSelectTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onTimePickerCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return TimePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// const myDpStyles: string = require('./modal.component.css');
// const myDpTpl: string = require('./modal.component.html');
// webpack2_
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.onOverlayClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this.onOverlayClick.emit(false);
    };
    ModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'picker-modal',
                    template: "<section class=\"x-modal\">\n    <section class=\"modal-overlay\" (click)=\"closeModal()\"></section>\n    <section class=\"modal-main\" id=\"section-modal-main\">\n        <ng-content></ng-content>\n    </section>\n</section>\n",
                    styles: [":host{z-index:9999999999}*,::after,::before{box-sizing:border-box}.modal-main{position:absolute;left:19.6%;right:auto;top:auto;z-index:111;background-color:#fff;border:1px solid #d7dad7;border-radius:6px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);box-shadow:0 5px 15px rgba(0,0,0,.3)}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    animations: [],
                },] },
    ];
    ModalComponent.ctorParameters = function () { return []; };
    ModalComponent.propDecorators = {
        onOverlayClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MomentPipe = /** @class */ (function () {
    function MomentPipe() {
    }
    /**
     * @param {?} moment
     * @param {?=} format
     * @return {?}
     */
    MomentPipe.prototype.transform = /**
     * @param {?} moment
     * @param {?=} format
     * @return {?}
     */
    function (moment, format) {
        return format ? moment.format(format) : moment.format('MMM DD, YYYY');
    };
    MomentPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'moment' },] },
    ];
    return MomentPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var Moment = moment__WEBPACK_IMPORTED_MODULE_4__;
var DateTimePickerComponent = /** @class */ (function () {
    function DateTimePickerComponent() {
        this.showDate = true;
        this.showTime = false;
        this.showWeeks = false;
        this.weeks = [2, 4, 6, 8, 12, 16, 24];
        this.onDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showDatePicker = false;
        this.showTimePicker = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    DateTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} count
     * @return {?}
     */
    DateTimePickerComponent.prototype.weeksSelected = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        /** @type {?} */
        var now = new Date();
        /** @type {?} */
        var nextDate = now.setDate(now.getDate() + count * 7);
        this.value = Moment(nextDate).format();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateTimePickerComponent.prototype.setDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (date && date !== '') {
            this.value = Moment(date).format();
        }
        else {
            this.value = date;
        }
    };
    /**
     * @param {?} time
     * @return {?}
     */
    DateTimePickerComponent.prototype.setTime = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        if (time && time !== '') {
            this.value = Moment(time).format();
        }
        else {
            this.value = time;
        }
        return;
    };
    /**
     * @param {?} status
     * @return {?}
     */
    DateTimePickerComponent.prototype.toggleDatePicker = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.showDatePicker = status;
        /*setTimeout(function() {
          let _body = document.getElementById('content-wrapper').getBoundingClientRect(),
            elem = document.getElementById('section-modal-main');
          if (elem) {
            let elemBox = elem.getBoundingClientRect();
            if (elemBox.bottom > _body.bottom) {
              elem.style.bottom = '36px';
            }
          }
        }, 0);*/
        return;
    };
    /**
     * @param {?} status
     * @return {?}
     */
    DateTimePickerComponent.prototype.toggleTimePicker = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.showTimePicker = status;
        return;
    };
    Object.defineProperty(DateTimePickerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modelValue;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.modelValue = val;
            this.onDateChange.emit(val);
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    DateTimePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DateTimePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateTimePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof Date) {
            this.value = Moment(value).format();
        }
        else {
            this.value = value;
        }
    };
    DateTimePickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'date-time-picker',
                    template: "<div class='row'>\n    <div *ngIf=\"!showTime\" class='col-xs-12 col-md-12'>\n        <input *ngIf=\"!showWeeks\" type=\"text\" class=\"form-control\" [value]=\"value | date: 'mediumDate'\" (focus)=\"toggleDatePicker(true)\"\n            readonly placeholder=\"Select Date\" />\n        <div *ngIf=\"showWeeks\" class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" class=\"form-control\" [value]=\"value | date: 'mediumDate'\" (focus)=\"toggleDatePicker(true)\"\n                readonly placeholder=\"Select Date\">\n            <div class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Weeks <span class=\"caret\"></span></button>\n                <ul class=\"dropdown-menu up\">\n                    <li (click)=\"weeksSelected(count)\" *ngFor=\"let count of weeks\"><span> {{count}} Weeks</span></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"showTime\" class='col-xs-8 col-md-8'>\n        <input *ngIf=\"!showWeeks\" type=\"text\" class=\"form-control\" [value]=\"value | date: 'mediumDate'\" (focus)=\"toggleDatePicker(true)\"\n            readonly placeholder=\"Select Date\" />\n        <div *ngIf=\"showWeeks\" class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" class=\"form-control\" [value]=\"value | date: 'mediumDate'\" (focus)=\"toggleDatePicker(true)\"\n                readonly placeholder=\"Select Date\">\n            <div class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Weeks <span class=\"caret\"></span></button>\n                <ul class=\"dropdown-menu up\">\n                    <li (click)=\"weeksSelected(count)\" *ngFor=\"let count of weeks\"><span> {{count}} Weeks</span></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"showTime\" class='col-xs-4 col-md-4'>\n        <input type=\"text\" class=\"form-control\" [value]=\"value | date: 'shortTime'\" (focus)=\"toggleTimePicker(true)\" readonly placeholder=\"Select Time\"\n        />\n    </div>\n</div>\n<date-picker *ngIf=\"showDatePicker\" [initDate]=\"value\" (onSelectDate)=\"setDate($event)\" (onDatePickerCancel)=\"toggleDatePicker($event)\"></date-picker>\n\n<time-picker *ngIf=\"showTimePicker\" [initTime]=\"value\" [use12Hour]=\"true\" (onSelectTime)=\"setTime($event)\" (onTimePickerCancel)=\"toggleTimePicker($event)\"></time-picker>\n",
                    styles: ["input[readonly]{background-color:#fff}.up{bottom:100%!important;top:auto!important}.glyphicon{top:1px}"],
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return DateTimePickerComponent; })),
                            multi: true
                        }
                    ]
                },] },
    ];
    DateTimePickerComponent.ctorParameters = function () { return []; };
    DateTimePickerComponent.propDecorators = {
        modelValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showWeeks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        weeks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DateTimePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateTimePickerModule = /** @class */ (function () {
    function DateTimePickerModule() {
    }
    DateTimePickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                    declarations: [
                        DatePickerComponent,
                        TimePickerComponent,
                        ModalComponent,
                        MomentPipe,
                        DateTimePickerComponent
                    ],
                    exports: [
                        DatePickerComponent,
                        TimePickerComponent,
                        ModalComponent,
                        MomentPipe,
                        DateTimePickerComponent
                    ],
                    providers: []
                },] },
    ];
    return DateTimePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$3 = moment__WEBPACK_IMPORTED_MODULE_4__;
/** @type {?} */
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var NgxDateTimePickerComponent = /** @class */ (function () {
    function NgxDateTimePickerComponent() {
        // public date = new FormControl(moment());
        this.selectedTime = moment$3().format();
        this.selectedDate = moment$3().format();
        this.loadInitial = false;
        this.showTimePicker = false;
        this.weeks = [0, 2, 4, 6, 8, 12, 16, 24];
        this.showTime = false;
        this.showWeeks = true;
        this.onDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = (/**
         * @return {?}
         */
        function () { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.onTimeSelect = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var setDate = moment$3(this.selectedDate);
        /** @type {?} */
        var setTime = $event;
        this.setDateTime(setDate, setTime);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.onDateSelect = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var setDate = moment$3($event.value);
        /** @type {?} */
        var setTime = this.selectedTime;
        /** @type {?} */
        var dateString = this.setDateTime(setDate, setTime);
        /** @type {?} */
        var selectedDate = $event.value;
        this.value = dateString;
    };
    /**
     * @param {?} status
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.toggleTimePicker = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.showTimePicker = status;
        return;
    };
    /**
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.setCurrentTime = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var setDate = moment$3(this.selectedDate);
        /** @type {?} */
        var currentTime = moment$3().format('HH:mm:ss');
        this.setDateTime(setDate, currentTime);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.weekSelect = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var dateToUse = moment$3().format();
        /** @type {?} */
        var nextWeekDate = moment$3(dateToUse).add($event.value, 'weeks');
        /** @type {?} */
        var nextWeekTime = dateToUse;
        this.setDateTime(nextWeekDate, nextWeekTime);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.selectionChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        console.log('Week selected', $event);
    };
    /**
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.getWeekPickerCssClass = /**
     * @return {?}
     */
    function () {
        if (this.showTime) {
            return 'col-sm-2 form-group';
        }
        return 'col-sm-3 form-group';
    };
    /**
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.getDatePickerCssClass = /**
     * @return {?}
     */
    function () {
        if (this.showTime && this.showWeeks) {
            return 'col-sm-5 form-group';
        }
        if (this.showWeeks === true) {
            return 'col-sm-9 form-group';
        }
        if (this.showTime === true) {
            return 'col-sm-8 form-group';
        }
        return 'col-sm-12 form-group';
    };
    /**
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.getTimePickerCssClass = /**
     * @return {?}
     */
    function () {
        if (this.showTime && this.showWeeks) {
            return 'col-sm-5 form-group';
        }
        if (this.showWeeks === true) {
            return 'col-sm-9 form-group';
        }
        return 'col-sm-4 form-group';
    };
    /**
     * @param {?} setDate
     * @param {?} setTime
     * @return {?}
     */
    NgxDateTimePickerComponent.prototype.setDateTime = /**
     * @param {?} setDate
     * @param {?} setTime
     * @return {?}
     */
    function (setDate, setTime) {
        /** @type {?} */
        var newDate = moment$3(setDate).format('DD-MM-YYYY');
        /** @type {?} */
        var newTime;
        if (this.showTime) {
            newTime = moment$3(setTime).format('HH:mm:ss');
        }
        else {
            newTime = '00:00:00';
        }
        /** @type {?} */
        var newDateTime = moment$3(newDate + '' + newTime, 'DD-MM-YYYY HH:mm:ss');
        /** @type {?} */
        var dateTimeString = moment$3(newDateTime).format();
        this.selectedDate = dateTimeString;
        this.selectedTime = dateTimeString;
        this.value = dateTimeString;
        this.onChange(this.value);
        return dateTimeString;
    };
    NgxDateTimePickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-date-time-picker',
                    template: "<div>\n  <div class=\"row\">\n    <div [class]=\"getDatePickerCssClass()\">\n      <div class=\"input-group\">\n        <input matInput \n              [matDatepicker]=\"picker\" \n              class=\"form-control\" \n              [value]=\"value\" \n              placeholder=\"Choose a date\" \n              (dateChange)=\"onDateSelect($event)\"\n              (click)=\"picker.open()\"\n              readonly\n        >\n        <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\" class=\"input-group-btn\"></mat-datepicker-toggle>\n      </div>\n    </div>\n    <div [class]=\"getWeekPickerCssClass()\" *ngIf=\"showWeeks\">\n      <mat-select placeholder=\"Select Weeks\"  class=\"form-control\" name=\"weeks\" (selectionChange) =\"weekSelect($event)\">\n        <mat-option *ngFor=\"let count of weeks\" [value]=\"count\">\n          {{count}} Weeks\n        </mat-option>\n      </mat-select>\n    </div>\n    <div [class]=\"getTimePickerCssClass()\" *ngIf=\"showTime\">\n          <input type=\"text\" class=\"form-control\" [value]=\"value | date: 'shortTime'\" (focus)=\"toggleTimePicker(true)\" readonly placeholder=\"Select Time\"\n          />\n          <time-picker *ngIf=\"showTimePicker\" [initTime]=\"value\" [use12Hour]=\"true\" (onSelectTime)=\"onTimeSelect($event)\" (onTimePickerCancel)=\"toggleTimePicker($event)\"></time-picker>\n    </div>\n  </div>\n</div>\n\n",
                    styles: ["#time-section{display:inline-block}#ngx-atp-time-picker,#ngx-mat-form-field{width:100%}.up{bottom:100%!important;top:auto!important}.time-btn{margin-top:-20px}"],
                    providers: [
                        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
                        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__["MomentDateAdapter"] },
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return NgxDateTimePickerComponent; })),
                            multi: true
                        }
                    ]
                },] },
    ];
    NgxDateTimePickerComponent.propDecorators = {
        weeks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        modelValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showWeeks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgxDateTimePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDateTimePickerModule = /** @class */ (function () {
    function NgxDateTimePickerModule() {
    }
    NgxDateTimePickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                        DateTimePickerModule,
                        // AmazingTimePickerModule,
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]
                    ],
                    declarations: [
                        NgxDateTimePickerComponent
                    ],
                    exports: [
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                        NgxDateTimePickerComponent
                    ],
                    providers: []
                },] },
    ];
    return NgxDateTimePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Option$1 = /** @class */ (function () {
    function Option(options) {
        this.label = options.label;
        this.value = options.value;
    }
    return Option;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AfeNgSelectComponent = /** @class */ (function () {
    function AfeNgSelectComponent() {
        this.question_options = [];
        this.errors = [];
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    AfeNgSelectComponent.prototype.getChangingText = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // console.log(event);
        this.getData(event).subscribe((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            _this.question_options = options;
        }));
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AfeNgSelectComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AfeNgSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AfeNgSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { };
    /**
     * @param {?} changes
     * @return {?}
     */
    AfeNgSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    /**
     * @return {?}
     */
    AfeNgSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.extras) {
            if (this.extras.originalValue) {
                this.resolveSelectedOption(this.extras.originalValue).subscribe((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    _this.selected_question_option = option;
                }));
            }
        }
    };
    /**
     * @param {?} searchText
     * @return {?}
     */
    AfeNgSelectComponent.prototype.getData = /**
     * @param {?} searchText
     * @return {?}
     */
    function (searchText) {
        var _this = this;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        /** @type {?} */
        var OptionsObservable = this.dataSource.searchOptions(searchText);
        OptionsObservable.subscribe((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            // console.log('options', options);
            /** @type {?} */
            var mappedOptions = new Array();
            for (var i = 0; i < options.length; i++) {
                mappedOptions.push(new Option$1(options[i]));
            }
            _this.subject.next(mappedOptions);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.subject.error(error);
        }));
        return this.subject.asObservable();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AfeNgSelectComponent.prototype.onValueChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} value
     * @return {?}
     */
    AfeNgSelectComponent.prototype.resolveSelectedOption = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.subjectOption = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        /** @type {?} */
        var OptionObservable = this.dataSource.resolveSelectedValue(value);
        OptionObservable.subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            // console.log('option', option);
            _this.subjectOption.next(option);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.subjectOption.error(error);
        }));
        return this.subjectOption.asObservable();
    };
    /**
     * @return {?}
     */
    AfeNgSelectComponent.prototype.resetOptions = /**
     * @return {?}
     */
    function () {
        this.subject.next(new Array());
    };
    AfeNgSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'afe-ng-select',
                    template: "<ng-select\n                   (searchInputText)=\"getChangingText($event)\"\n                    (ngModelChange)=\"onValueChange($event)\"\n                    [options]=\"question_options\"\n                    [multiple]=\"multiple\" >\n            </ng-select>\n  ",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return AfeNgSelectComponent; })),
                            multi: true
                        }
                    ]
                },] },
    ];
    AfeNgSelectComponent.propDecorators = {
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        extras: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AfeNgSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormSchemaCompiler = /** @class */ (function () {
    function FormSchemaCompiler() {
    }
    /**
     * @param {?} formSchema
     * @param {?} referencedComponents
     * @return {?}
     */
    FormSchemaCompiler.prototype.compileFormSchema = /**
     * @param {?} formSchema
     * @param {?} referencedComponents
     * @return {?}
     */
    function (formSchema, referencedComponents) {
        // get all referenced forms
        /** @type {?} */
        var refForms = this.getReferencedForms(formSchema, referencedComponents);
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(refForms)) {
            return formSchema;
        }
        // get all place-holders from the form schema
        /** @type {?} */
        var placeHolders = this.getAllPlaceholderObjects(formSchema);
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(placeHolders)) {
            return formSchema;
        }
        // replace all placeHolders
        this.replaceAllPlaceholdersWithActualObjects(refForms, placeHolders);
        return formSchema;
    };
    /**
     * @private
     * @param {?} schemaArray
     * @param {?} nameOfSchema
     * @return {?}
     */
    FormSchemaCompiler.prototype.findSchemaByName = /**
     * @private
     * @param {?} schemaArray
     * @param {?} nameOfSchema
     * @return {?}
     */
    function (schemaArray, nameOfSchema) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(schemaArray) || Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(nameOfSchema)) {
            return;
        }
        /** @type {?} */
        var foundSchema = {};
        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(schemaArray, (/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            if (schema.name === nameOfSchema) {
                foundSchema = schema;
            }
        }));
        return foundSchema;
    };
    /**
     * @private
     * @param {?} schema
     * @param {?} pageLabel
     * @return {?}
     */
    FormSchemaCompiler.prototype.getPageInSchemaByLabel = /**
     * @private
     * @param {?} schema
     * @param {?} pageLabel
     * @return {?}
     */
    function (schema, pageLabel) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(schema) || Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(pageLabel)) {
            return;
        }
        /** @type {?} */
        var foundPage = {};
        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(schema.pages, (/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (page.label === pageLabel) {
                foundPage = page;
            }
        }));
        return foundPage;
    };
    /**
     * @private
     * @param {?} schema
     * @param {?} pageLabel
     * @param {?} sectionLabel
     * @return {?}
     */
    FormSchemaCompiler.prototype.getSectionInSchemaByPageLabelBySectionLabel = /**
     * @private
     * @param {?} schema
     * @param {?} pageLabel
     * @param {?} sectionLabel
     * @return {?}
     */
    function (schema, pageLabel, sectionLabel) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(schema) || Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(pageLabel) || Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(sectionLabel)) {
            return;
        }
        /** @type {?} */
        var foundPage = this.getPageInSchemaByLabel(schema, pageLabel);
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(foundPage)) {
            return;
        }
        /** @type {?} */
        var foundSection = {};
        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(foundPage.sections, (/**
         * @param {?} section
         * @return {?}
         */
        function (section) {
            if (section.label === sectionLabel) {
                foundSection = section;
            }
        }));
        return foundSection;
    };
    /**
     * @private
     * @param {?} schema
     * @param {?} questionId
     * @return {?}
     */
    FormSchemaCompiler.prototype.getQuestionByIdInSchema = /**
     * @private
     * @param {?} schema
     * @param {?} questionId
     * @return {?}
     */
    function (schema, questionId) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(schema) || Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(questionId)) {
            return;
        }
        if (Array.isArray(schema)) {
            /** @type {?} */
            var question = void 0;
            for (var i = 0; i < schema.length; i++) {
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(schema[i])) {
                    question = this.getQuestionByIdInSchema(schema[i], questionId);
                }
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(question)) {
                    break;
                }
            }
            return question;
        }
        else if (typeof schema === 'object') {
            if (this.isQuestionObjectWithId(schema, questionId)) {
                return schema;
            }
            else if (this.isSchemaSubObjectExpandable(schema)) {
                /** @type {?} */
                var toExpand = (schema.pages || schema.sections || schema.questions);
                return this.getQuestionByIdInSchema(toExpand, questionId);
            }
            else {
                return;
            }
        }
        else {
            return;
        }
    };
    /**
     * @private
     * @param {?} schema
     * @param {?} questionId
     * @return {?}
     */
    FormSchemaCompiler.prototype.getQuestionsArrayByQuestionIdInSchema = /**
     * @private
     * @param {?} schema
     * @param {?} questionId
     * @return {?}
     */
    function (schema, questionId) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(schema) || Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(questionId)) {
            return;
        }
        return this.getQuestionsArrayByQuestionId(schema, schema, questionId);
    };
    /**
     * @private
     * @param {?} parent
     * @param {?} object
     * @param {?} questionId
     * @return {?}
     */
    FormSchemaCompiler.prototype.getQuestionsArrayByQuestionId = /**
     * @private
     * @param {?} parent
     * @param {?} object
     * @param {?} questionId
     * @return {?}
     */
    function (parent, object, questionId) {
        if (Array.isArray(object)) {
            /** @type {?} */
            var returnedValue = void 0;
            for (var i = 0; i < object.length; i++) {
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(object[i])) {
                    returnedValue = this.getQuestionsArrayByQuestionId(object, object[i], questionId);
                }
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(returnedValue)) {
                    break;
                }
            }
            return returnedValue;
        }
        else if (typeof object === 'object') {
            if (this.isQuestionObjectWithId(object, questionId)) {
                return parent;
            }
            else if (this.isSchemaSubObjectExpandable(object)) {
                /** @type {?} */
                var toExpand = (object.pages || object.sections || object.questions);
                return this.getQuestionsArrayByQuestionId(toExpand, toExpand, questionId);
            }
            else {
                return;
            }
        }
        else {
            return;
        }
    };
    // object is page or section or question
    // object is page or section or question
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    FormSchemaCompiler.prototype.isSchemaSubObjectExpandable = 
    // object is page or section or question
    /**
     * @private
     * @param {?} object
     * @return {?}
     */
    function (object) {
        if (typeof object === 'object') {
            /** @type {?} */
            var objectKeys = Object.keys(object);
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["includes"])(objectKeys, 'pages') ||
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["includes"])(objectKeys, 'sections') ||
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["includes"])(objectKeys, 'questions')) {
                return true;
            }
        }
        return false;
    };
    /**
     * @private
     * @param {?} object
     * @param {?} id
     * @return {?}
     */
    FormSchemaCompiler.prototype.isQuestionObjectWithId = /**
     * @private
     * @param {?} object
     * @param {?} id
     * @return {?}
     */
    function (object, id) {
        return object['id'] === id;
    };
    /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    FormSchemaCompiler.prototype.getAllPlaceholderObjects = /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        /** @type {?} */
        var referencedObjects = [];
        this.extractPlaceholderObjects(schema, referencedObjects);
        return referencedObjects;
    };
    /**
     * @private
     * @param {?} subSchema
     * @param {?} objectsArray
     * @return {?}
     */
    FormSchemaCompiler.prototype.extractPlaceholderObjects = /**
     * @private
     * @param {?} subSchema
     * @param {?} objectsArray
     * @return {?}
     */
    function (subSchema, objectsArray) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(subSchema)) {
            return;
        }
        if (Array.isArray(subSchema)) {
            for (var i = 0; i < subSchema.length; i++) {
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(subSchema[i])) {
                    this.extractPlaceholderObjects(subSchema[i], objectsArray);
                }
            }
        }
        else if (typeof subSchema === 'object') {
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(subSchema.reference)) {
                objectsArray.push(subSchema);
            }
            else if (this.isSchemaSubObjectExpandable(subSchema)) {
                /** @type {?} */
                var toExpand = (subSchema.pages || subSchema.sections || subSchema.questions);
                this.extractPlaceholderObjects(toExpand, objectsArray);
            }
        }
    };
    /**
     * @private
     * @param {?} placeHolderObject
     * @param {?} referenceObject
     * @return {?}
     */
    FormSchemaCompiler.prototype.fillPlaceholderObject = /**
     * @private
     * @param {?} placeHolderObject
     * @param {?} referenceObject
     * @return {?}
     */
    function (placeHolderObject, referenceObject) {
        for (var member in referenceObject) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(placeHolderObject[member])) {
                placeHolderObject[member] = referenceObject[member];
            }
        }
        return placeHolderObject;
    };
    /**
     * @private
     * @param {?} keyValReferencedForms
     * @param {?} placeHoldersArray
     * @return {?}
     */
    FormSchemaCompiler.prototype.replaceAllPlaceholdersWithActualObjects = /**
     * @private
     * @param {?} keyValReferencedForms
     * @param {?} placeHoldersArray
     * @return {?}
     */
    function (keyValReferencedForms, placeHoldersArray) {
        var _this = this;
        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(placeHoldersArray, (/**
         * @param {?} placeHolder
         * @return {?}
         */
        function (placeHolder) {
            /** @type {?} */
            var referencedObject = _this.getReferencedObject(placeHolder.reference, keyValReferencedForms);
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(referencedObject)) {
                console.error('Form compile: Error finding referenced object', placeHolder.reference);
            }
            else {
                placeHolder = _this.fillPlaceholderObject(placeHolder, referencedObject);
                placeHolder = _this.removeExcludedQuestionsFromPlaceholder(placeHolder);
                delete placeHolder['reference'];
            }
        }));
        return placeHoldersArray;
    };
    /**
     * @private
     * @param {?} array
     * @param {?} object
     * @return {?}
     */
    FormSchemaCompiler.prototype.removeObjectFromArray = /**
     * @private
     * @param {?} array
     * @param {?} object
     * @return {?}
     */
    function (array, object) {
        /** @type {?} */
        var indexOfObject = array.indexOf(object);
        if (indexOfObject === -1) {
            return;
        }
        array.splice(indexOfObject, 1);
    };
    /**
     * @private
     * @param {?} placeHolder
     * @return {?}
     */
    FormSchemaCompiler.prototype.removeExcludedQuestionsFromPlaceholder = /**
     * @private
     * @param {?} placeHolder
     * @return {?}
     */
    function (placeHolder) {
        var _this = this;
        if (Array.isArray(placeHolder.reference.excludeQuestions)) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(placeHolder.reference.excludeQuestions, (/**
             * @param {?} excludedQuestionId
             * @return {?}
             */
            function (excludedQuestionId) {
                /** @type {?} */
                var questionsArray = _this.getQuestionsArrayByQuestionIdInSchema(placeHolder, excludedQuestionId);
                if (!Array.isArray(questionsArray)) {
                    return;
                }
                /** @type {?} */
                var question = _this.getQuestionByIdInSchema(questionsArray, excludedQuestionId);
                _this.removeObjectFromArray(questionsArray, question);
            }));
        }
        return placeHolder;
    };
    /**
     * @private
     * @param {?} referenceData
     * @param {?} keyValReferencedForms
     * @return {?}
     */
    FormSchemaCompiler.prototype.getReferencedObject = /**
     * @private
     * @param {?} referenceData
     * @param {?} keyValReferencedForms
     * @return {?}
     */
    function (referenceData, keyValReferencedForms) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(referenceData.form)) {
            console.error('Form compile: reference missing form attribute', referenceData);
            return;
        }
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(keyValReferencedForms[referenceData.form])) {
            console.error('Form compile: referenced form alias not found', referenceData);
            return;
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(referenceData.questionId)) {
            return this.getQuestionByIdInSchema(keyValReferencedForms[referenceData.form], referenceData.questionId);
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(referenceData.page) && !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(referenceData.section)) {
            return this.getSectionInSchemaByPageLabelBySectionLabel(keyValReferencedForms[referenceData.form], referenceData.page, referenceData.section);
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(referenceData.page)) {
            return this.getPageInSchemaByLabel(keyValReferencedForms[referenceData.form], referenceData.page);
        }
        console.error('Form compile: Unsupported reference type', referenceData.reference);
    };
    /**
     * @private
     * @param {?} formSchema
     * @param {?} formSchemasLookupArray
     * @return {?}
     */
    FormSchemaCompiler.prototype.getReferencedForms = /**
     * @private
     * @param {?} formSchema
     * @param {?} formSchemasLookupArray
     * @return {?}
     */
    function (formSchema, formSchemasLookupArray) {
        var _this = this;
        /** @type {?} */
        var referencedForms = formSchema.referencedForms;
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(referencedForms)) {
            return;
        }
        /** @type {?} */
        var keyValReferencedForms = {};
        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(referencedForms, (/**
         * @param {?} reference
         * @return {?}
         */
        function (reference) {
            keyValReferencedForms[reference.alias] =
                _this.findSchemaByName(formSchemasLookupArray, reference.formName);
        }));
        return keyValReferencedForms;
    };
    FormSchemaCompiler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    FormSchemaCompiler.ctorParameters = function () { return []; };
    return FormSchemaCompiler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextInputQuestion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(TextInputQuestion, _super);
    function TextInputQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.placeholder = options.placeholder || '';
        _this.controlType = AfeControlType.AfeFormControl;
        return _this;
    }
    return TextInputQuestion;
}(QuestionBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextAreaInputQuestion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(TextAreaInputQuestion, _super);
    function TextAreaInputQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.placeholder = options.placeholder || '';
        _this.isExpanded = options.isExpanded || false;
        _this.rows = options.rows || 18;
        _this.renderingType = 'textarea';
        _this.controlType = AfeControlType.AfeFormControl;
        return _this;
    }
    return TextAreaInputQuestion;
}(TextInputQuestion));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectQuestion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(SelectQuestion, _super);
    function SelectQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.renderingType = 'select';
        _this.options = options.options || [];
        _this.controlType = AfeControlType.AfeFormControl;
        _this.dataSource = options.dataSource || '';
        return _this;
    }
    return SelectQuestion;
}(QuestionBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiSelectQuestion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(UiSelectQuestion, _super);
    function UiSelectQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.renderingType = 'ui-select';
        _this.options = options.options || [];
        _this.controlType = AfeControlType.AfeFormControl;
        return _this;
    }
    return UiSelectQuestion;
}(QuestionBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateQuestion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(DateQuestion, _super);
    function DateQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.showTime = true;
        _this.showWeeksAdder = false;
        _this.renderingType = 'date';
        _this.controlType = AfeControlType.AfeFormControl;
        return _this;
    }
    return DateQuestion;
}(QuestionBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MultiSelectQuestion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(MultiSelectQuestion, _super);
    function MultiSelectQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.renderingType = 'multi-select';
        _this.options = options.options || [];
        _this.controlType = AfeControlType.AfeFormControl;
        return _this;
    }
    return MultiSelectQuestion;
}(SelectQuestion));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
NestedQuestion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NestedQuestion, _super);
    function NestedQuestion(options) {
        return _super.call(this, options) || this;
    }
    return NestedQuestion;
}(QuestionBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QuestionGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(QuestionGroup, _super);
    function QuestionGroup(options) {
        var _this = _super.call(this, options) || this;
        _this.isExpanded = true;
        _this.renderingType = 'group';
        _this.questions = options.questions || [];
        _this.controlType = AfeControlType.AfeFormGroup;
        return _this;
    }
    return QuestionGroup;
}(NestedQuestion));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RepeatingQuestion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(RepeatingQuestion, _super);
    function RepeatingQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.renderingType = 'repeating';
        _this.questions = options.questions || [];
        _this.controlType = AfeControlType.AfeFormArray;
        return _this;
    }
    return RepeatingQuestion;
}(NestedQuestion));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckBoxQuestion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(CheckBoxQuestion, _super);
    function CheckBoxQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.renderingType = 'checkbox';
        _this.options = options.options || [];
        _this.controlType = AfeControlType.AfeFormControl;
        return _this;
    }
    return CheckBoxQuestion;
}(QuestionBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadQuestion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(FileUploadQuestion, _super);
    function FileUploadQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.showTime = true;
        _this.showWeeksAdder = false;
        _this.renderingType = 'file';
        _this.dataSource = options.dataSource;
        _this.controlType = AfeControlType.AfeFormControl;
        return _this;
    }
    return FileUploadQuestion;
}(QuestionBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestOrderQuestion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(TestOrderQuestion, _super);
    function TestOrderQuestion(options) {
        var _this = _super.call(this, options) || this;
        _this.renderingType = 'select';
        _this.orderType = options.orderType;
        _this.selectableOrders = options.selectableOrders;
        _this.options = options.options;
        _this.orderSettingUuid = options.orderSettingUuid;
        _this.rendering = options.orderSettingUuid;
        _this.controlType = AfeControlType.AfeFormControl;
        return _this;
    }
    return TestOrderQuestion;
}(QuestionBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateValidationModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(DateValidationModel, _super);
    function DateValidationModel(validations) {
        var _this = _super.call(this, validations) || this;
        _this.allowFutureDates = false;
        _this.allowFutureDates = validations.allowFutureDates === 'true' ? true : false;
        return _this;
    }
    return DateValidationModel;
}(ValidationModel));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaxValidationModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(MaxValidationModel, _super);
    function MaxValidationModel(validations) {
        var _this = _super.call(this, validations) || this;
        /** @type {?} */
        var max = validations.max;
        _this.max = +max;
        return _this;
    }
    return MaxValidationModel;
}(ValidationModel));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MinValidationModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(MinValidationModel, _super);
    function MinValidationModel(validations) {
        var _this = _super.call(this, validations) || this;
        /** @type {?} */
        var min = validations.min;
        _this.min = +min;
        return _this;
    }
    return MinValidationModel;
}(ValidationModel));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DummyDataSource = /** @class */ (function () {
    function DummyDataSource() {
        this.returnErrorOnNext = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DummyDataSource.prototype.resolveSelectedValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var selectOptions = this.sampleData();
        selectOptions = selectOptions.map((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            /** @type {?} */
            var option = new Option$1({
                label: obj.label,
                value: obj.concept
            });
            return option;
        }));
        selectOptions = selectOptions.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.value === value; }));
        /** @type {?} */
        var test = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        if (!this.returnErrorOnNext) {
            test.next(selectOptions[0]);
        }
        else {
            test.error(new Error('Error loading Options'));
        }
        return test.asObservable();
    };
    /**
     * @param {?} url
     * @return {?}
     */
    DummyDataSource.prototype.fileUpload = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ image: '' });
    };
    /**
     * @param {?} url
     * @return {?}
     */
    DummyDataSource.prototype.fetchFile = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ image: '' });
    };
    /**
     * @param {?} searchText
     * @return {?}
     */
    DummyDataSource.prototype.searchOptions = /**
     * @param {?} searchText
     * @return {?}
     */
    function (searchText) {
        /** @type {?} */
        var selectOptions = this.sampleData();
        selectOptions = selectOptions.map((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            /** @type {?} */
            var option = new Option$1({
                label: obj.label,
                value: obj.concept
            });
            return option;
        }));
        selectOptions = selectOptions.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.label.indexOf(searchText) !== -1; }));
        /** @type {?} */
        var test = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        if (!this.returnErrorOnNext) {
            test.next(selectOptions);
        }
        else {
            test.error(new Error('Error loading Options'));
        }
        return test.asObservable();
    };
    /**
     * @return {?}
     */
    DummyDataSource.prototype.sampleData = /**
     * @return {?}
     */
    function () {
        return [
            {
                concept: 'a899e0ac-1350-11df-a1f1-0026b9348838',
                label: 'None'
            },
            {
                concept: 'a8ad1276-1350-11df-a1f1-0026b9348838',
                label: 'Breathlessness'
            },
            {
                concept: 'a892e4b4-1350-11df-a1f1-0026b9348838',
                label: 'Chest pain'
            },
            {
                concept: 'a8afc8b8-1350-11df-a1f1-0026b9348838',
                label: 'Cough = 2 weeks'
            },
            {
                concept: 'd7adae14-c386-49cc-8f7c-765d8ceec566',
                label: 'Fever for = 2 weeks'
            },
            {
                concept: '3f57aafc-7162-41da-a51b-6a804cb6f5e8',
                label: 'New exposure to household contact with TB'
            },
            {
                concept: 'a89807f0-1350-11df-a1f1-0026b9348838',
                label: 'Noticeable Weight loss'
            },
            {
                concept: 'e1862fef-68ed-4df4-90dd-a00152f719aa',
                label: 'Night sweats = 2 weeks'
            },
            {
                concept: 'a8ad462e-1350-11df-a1f1-0026b9348838',
                label: 'Abdomen'
            },
            {
                concept: 'f218c60e-4b54-475a-a4fa-facab9216da8',
                label: 'Groin'
            },
            {
                concept: 'a8a774b0-1350-11df-a1f1-0026b9348838',
                label: 'Joints'
            },
            {
                concept: '4639388c-ee31-4dcf-abb4-ad71253493bb',
                label: 'Neck Kw'
            }
        ];
    };
    return DummyDataSource;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$4 = moment__WEBPACK_IMPORTED_MODULE_4__;
var HistoricalEncounterDataService = /** @class */ (function () {
    function HistoricalEncounterDataService() {
        this.dataSources = {};
    }
    /**
     * @param {?} name
     * @param {?} encounters
     * @return {?}
     */
    HistoricalEncounterDataService.prototype.registerEncounters = /**
     * @param {?} name
     * @param {?} encounters
     * @return {?}
     */
    function (name, encounters) {
        var _this = this;
        /** @type {?} */
        var encStore = {
            data: [],
            getValue: (/**
             * @param {?} key
             * @param {?=} index
             * @return {?}
             */
            function (key, index) {
                if (index === void 0) { index = 0; }
                /** @type {?} */
                var pathArray = key.split('.');
                if (pathArray.length > 0) {
                    return _this.getFirstValue(pathArray, encStore.data[index]);
                }
                return encStore.data[index][key];
            }),
            getAllObjects: (/**
             * @return {?}
             */
            function () {
                return encStore.data;
            }),
            getSingleObject: (/**
             * @param {?=} index
             * @return {?}
             */
            function (index) {
                if (index === void 0) { index = 0; }
                return encStore.data[index];
            })
        };
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(encounters)) {
            /** @type {?} */
            var group_1 = [];
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(encounters, (/**
             * @param {?} encounter
             * @return {?}
             */
            function (encounter) {
                group_1.push(_this._transformEncounter(encounter));
            }));
            // Sort them in reverse chronological order
            encStore.data = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"])(group_1, 'encounterDatetime').reverse();
        }
        else {
            // Assume a single openmrs rest encounter object.
            encStore.data.push(this._transformEncounter(encounters));
        }
        this.putObject(name, encStore);
    };
    /**
     * @param {?} name
     * @param {?} object
     * @return {?}
     */
    HistoricalEncounterDataService.prototype.putObject = /**
     * @param {?} name
     * @param {?} object
     * @return {?}
     */
    function (name, object) {
        this.dataSources[name] = object;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    HistoricalEncounterDataService.prototype.getObject = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.dataSources[name] || null;
    };
    /**
     * @param {?} path
     * @param {?} object
     * @return {?}
     */
    HistoricalEncounterDataService.prototype.getFirstValue = /**
     * @param {?} path
     * @param {?} object
     * @return {?}
     */
    function (path, object) {
        /** @type {?} */
        var answers = [];
        this.getAllValues(path, object, answers);
        if (answers.length > 0) {
            return {
                value: answers[0],
                valueDate: moment$4(object.encounterDatetime).format('ll')
            };
        }
    };
    /**
     * @param {?} path
     * @param {?} object
     * @param {?} answers
     * @return {?}
     */
    HistoricalEncounterDataService.prototype.getAllValues = /**
     * @param {?} path
     * @param {?} object
     * @param {?} answers
     * @return {?}
     */
    function (path, object, answers) {
        var _this = this;
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(object)) {
            return;
        }
        if (path.length <= 1) {
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(object[path[0]])) {
                answers.push(object[path[0]]);
            }
            return;
        }
        /** @type {?} */
        var newpath = path.splice(1);
        /** @type {?} */
        var key = path[0];
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(object[key]) && object[key].length > 0) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(object[key], (/**
             * @param {?} childObject
             * @return {?}
             */
            function (childObject) {
                _this.getAllValues(newpath.slice(0), childObject, answers);
            }));
        }
        else {
            this.getAllValues(newpath.slice(0), object[key], answers);
        }
    };
    /**
     * @private
     * @param {?} encounter
     * @return {?}
     */
    HistoricalEncounterDataService.prototype._transformEncounter = /**
     * @private
     * @param {?} encounter
     * @return {?}
     */
    function (encounter) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(encounter)) {
            return;
        }
        // Transform encounter Level details to key value pairs.
        /** @type {?} */
        var prevEncounter = {
            encounterDatetime: encounter.encounterDatetime
        };
        if (encounter.location && encounter.location.uuid) {
            prevEncounter.location = encounter.location.uuid;
        }
        if (encounter.patient && encounter.patient.uuid) {
            prevEncounter.patient = encounter.patient.uuid;
        }
        if (encounter.form && encounter.form.uuid) {
            prevEncounter.form = encounter.form.uuid;
        }
        if (encounter.encounterType && encounter.encounterType.uuid) {
            prevEncounter.encounterType = encounter.encounterType.uuid;
        }
        if (encounter.provider) {
            /** @type {?} */
            var provider = encounter.provider;
            prevEncounter.provider = provider.uuid;
        }
        // Deal with obs.
        if (encounter.obs) {
            /** @type {?} */
            var processedObs = this._transformObs(encounter.obs);
            // add in individual processed obs to prevEncounter
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["extend"])(prevEncounter, processedObs);
        }
        return prevEncounter;
    };
    /**
     * @private
     * @param {?} obs
     * @return {?}
     */
    HistoricalEncounterDataService.prototype._transformObs = /**
     * @private
     * @param {?} obs
     * @return {?}
     */
    function (obs) {
        var _this = this;
        if (!obs) {
            return null;
        }
        /** @type {?} */
        var obsRep = {};
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(obs)) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(obs, (/**
             * @param {?} singleObs
             * @return {?}
             */
            function (singleObs) {
                _this._augumentObs(obsRep, _this._transformObs(singleObs));
            }));
            return obsRep;
        }
        else if (obs.groupMembers) {
            /** @type {?} */
            var group_2 = {};
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(obs.groupMembers, (/**
             * @param {?} member
             * @return {?}
             */
            function (member) {
                _this._augumentObs(group_2, _this._transformObs(member));
            }));
            // Handle already existing data
            if (obsRep[obs.concept.uuid] && Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(obsRep[obs.concept.uuid])) {
                obsRep[obs.concept.uuid].push(group_2);
            }
            else {
                obsRep[obs.concept.uuid] = [group_2];
            }
            return obsRep;
        }
        else {
            if (obs.value instanceof Object) {
                obsRep[obs.concept.uuid] = obs.value.uuid;
            }
            else {
                obsRep[obs.concept.uuid] = obs.value;
            }
            return obsRep;
        }
    };
    /**
     * @private
     * @param {?} existing
     * @param {?} toAdd
     * @return {?}
     */
    HistoricalEncounterDataService.prototype._augumentObs = /**
     * @private
     * @param {?} existing
     * @param {?} toAdd
     * @return {?}
     */
    function (existing, toAdd) {
        for (var key in toAdd) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["has"])(existing, key)) {
                // check if not an array yet
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(existing[key])) {
                    /** @type {?} */
                    var temp = existing[key];
                    existing[key] = [temp];
                }
                // Check whether the incoming is array (for group members)
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(toAdd[key])) {
                    Array.prototype.push.apply(existing[key], toAdd[key]);
                }
                else {
                    existing[key].push(toAdd[key]);
                }
            }
            else {
                existing[key] = toAdd[key];
            }
        }
        return existing;
    };
    HistoricalEncounterDataService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    HistoricalEncounterDataService.ctorParameters = function () { return []; };
    return HistoricalEncounterDataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HistoricalHelperService = /** @class */ (function () {
    function HistoricalHelperService() {
    }
    /**
     * @param {?} expr
     * @param {?} dataSources
     * @param {?} additionalScopevalues
     * @return {?}
     */
    HistoricalHelperService.prototype.evaluate = /**
     * @param {?} expr
     * @param {?} dataSources
     * @param {?} additionalScopevalues
     * @return {?}
     */
    function (expr, dataSources, additionalScopevalues) {
        /** @type {?} */
        var HD = new HistoricalEncounterDataService();
        HD.registerEncounters('prevEnc', dataSources['rawPrevEnc']);
        /** @type {?} */
        var deps = {
            HD: HD
        };
        if (additionalScopevalues) {
            for (var o in additionalScopevalues) {
                if (additionalScopevalues[o]) {
                    deps[o] = additionalScopevalues[o];
                }
            }
        }
        /** @type {?} */
        var helper = new JsExpressionHelper();
        /** @type {?} */
        var control = new AfeFormControl();
        /** @type {?} */
        var runner = new ExpressionRunner();
        /** @type {?} */
        var runnable = runner.getRunnable(expr, control, helper.helperFunctions, deps);
        return runnable.run();
    };
    /**
     * @param {?} expr
     * @param {?} dataSources
     * @param {?} historicalValue
     * @return {?}
     */
    HistoricalHelperService.prototype.evaluatePrecondition = /**
     * @param {?} expr
     * @param {?} dataSources
     * @param {?} historicalValue
     * @return {?}
     */
    function (expr, dataSources, historicalValue) {
        /** @type {?} */
        var additionalScope = {
            histValue: historicalValue
        };
        return this.evaluate(expr, dataSources, additionalScope);
    };
    HistoricalHelperService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    HistoricalHelperService.ctorParameters = function () { return []; };
    return HistoricalHelperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$5 = moment__WEBPACK_IMPORTED_MODULE_4__;
var QuestionFactory = /** @class */ (function () {
    function QuestionFactory() {
        this.dataSources = {};
        this.historicalHelperService = new HistoricalHelperService();
    }
    /**
     * @param {?} formSchema
     * @param {?=} form
     * @return {?}
     */
    QuestionFactory.prototype.createQuestionModel = /**
     * @param {?} formSchema
     * @param {?=} form
     * @return {?}
     */
    function (formSchema, form) {
        if (form) {
            /** @type {?} */
            var dataSources = form.dataSourcesContainer.dataSources;
            this.dataSources = dataSources;
        }
        return this.toFormQuestionModel(formSchema);
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toSelectQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new SelectQuestion({ options: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.options = schemaQuestion.questionOptions.answers.map((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            return {
                label: obj.label,
                value: obj.concept
            };
        }));
        /** @type {?} */
        var options = question.options;
        options.splice(0, 0, {
            label: '',
            value: ''
        });
        question.renderingType = schemaQuestion.questionOptions.rendering;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toNumericQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new TextInputQuestion({ placeholder: '', type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'number';
        question.placeholder = schemaQuestion.questionOptions.placeholder;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.placeholder = schemaQuestion.questionOptions.placeholder || '';
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toNumberQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new TextInputQuestion({ placeholder: '', type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'number';
        question.placeholder = schemaQuestion.questionOptions.placeholder || '';
        question.extras = schemaQuestion;
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        question.validators = this.addValidators(schemaQuestion);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toDateQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        if (schemaQuestion.type === 'encounterDatetime') {
            return this.toEncounterDatetimeQuestion(schemaQuestion);
        }
        /** @type {?} */
        var question = new DateQuestion({ type: '', key: '' });
        question.renderingType = 'date';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.showTime = (/** @type {?} */ (schemaQuestion.questionOptions.showTime));
        question.showWeeksAdder = schemaQuestion.questionOptions.weeksList ? true : false;
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toEncounterDatetimeQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new DateQuestion({ type: '', key: '' });
        question.label = schemaQuestion.label;
        question.renderingType = 'date';
        question.key = schemaQuestion.id;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.showWeeksAdder = schemaQuestion.questionOptions.weeksList ? true : false;
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        question.showTime = true;
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toCheckBoxQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new CheckBoxQuestion({ options: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.extras = schemaQuestion;
        question.options = schemaQuestion.questionOptions.answers.map((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            return {
                label: obj.label,
                value: obj.concept
            };
        }));
        question.options.splice(0, 0);
        question.renderingType = schemaQuestion.questionOptions.rendering;
        /** @type {?} */
        var mappings = {
            label: 'label',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toMultiCheckboxQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new MultiSelectQuestion({ renderType: '', options: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.options = schemaQuestion.questionOptions.answers.map((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            return {
                label: obj.label,
                value: obj.concept
            };
        }));
        question.validators = this.addValidators(schemaQuestion);
        question.dataSource = new DummyDataSource();
        question.extras = schemaQuestion;
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toTextAreaQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new TextAreaInputQuestion({
            isExpanded: false, rows: 18,
            placeholder: '', type: '', key: ''
        });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.placeholder = schemaQuestion.questionOptions.placeholder;
        question.isExpanded = schemaQuestion.isExpanded;
        question.rows = schemaQuestion.questionOptions.rows;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.placeholder = schemaQuestion.questionOptions.placeholder || '';
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toTextQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new TextInputQuestion({ placeholder: '', type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'text';
        question.placeholder = schemaQuestion.questionOptions.placeholder;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.placeholder = schemaQuestion.questionOptions.placeholder || '';
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toFileUploadQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new FileUploadQuestion({ type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'file';
        question.dataSource = 'file';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toDrugQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new SelectQuestion({ options: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'remote-select';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.dataSource = 'drug';
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toProblemQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new SelectQuestion({ options: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'remote-select';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.dataSource = 'problem';
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toConceptAnswerSelect = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new SelectQuestion({ options: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'remote-select';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.dataSource = schemaQuestion.questionOptions.dataSource || 'conceptAnswers';
        question.dataSourceOptions = {
            concept: schemaQuestion.questionOptions.concept
        };
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toRepeatingQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new RepeatingQuestion({ questions: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.questions = this.getChildrenQuestionModels(schemaQuestion.questions);
        question.key = schemaQuestion.id;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        if (schemaQuestion.type === 'testOrder') {
            /** @type {?} */
            var testOrder = this.toTestOrderQuestion(schemaQuestion);
            /** @type {?} */
            var orders = [];
            orders.push(testOrder);
            question.questions = orders;
        }
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toGroupQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new QuestionGroup({ questions: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.questions = this.getChildrenQuestionModels(schemaQuestion.questions);
        question.key = schemaQuestion.id;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toPageQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        var _this = this;
        /** @type {?} */
        var question = new QuestionGroup({ questions: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.label;
        question.renderingType = 'page';
        question.controlType = AfeControlType.None;
        question.questions = [];
        schemaQuestion.sections.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            question.questions.push(_this.toSectionQuestion(element));
        }));
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toFormQuestionModel = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        var _this = this;
        /** @type {?} */
        var question = new QuestionGroup({ questions: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.label;
        question.renderingType = 'form';
        question.controlType = AfeControlType.AfeFormGroup;
        question.extras = schemaQuestion;
        question.questions = [];
        schemaQuestion.pages.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            question.questions.push(_this.toPageQuestion(element));
        }));
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toSectionQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new QuestionGroup({ questions: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.label;
        question.renderingType = 'section';
        question.controlType = AfeControlType.None;
        question.isExpanded = schemaQuestion.isExpanded === 'true' ? true : false;
        question.questions = this.getSchemaQuestions(schemaQuestion.questions);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toPersonAttributeQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new UiSelectQuestion({
            options: [], type: '', key: '', searchFunction: (/**
             * @return {?}
             */
            function () { }),
            resolveFunction: (/**
             * @return {?}
             */
            function () {
            })
        });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'remote-select';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.dataSource = 'personAttribute';
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toEncounterProviderQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new UiSelectQuestion({
            options: [], type: '', key: '', searchFunction: (/**
             * @return {?}
             */
            function () { }),
            resolveFunction: (/**
             * @return {?}
             */
            function () {
            })
        });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'remote-select';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.dataSource = 'provider';
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toFieldSetQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var toReturn = this.toGroupQuestion(schemaQuestion);
        toReturn.renderingType = 'field-set';
        return toReturn;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toEncounterLocationQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new UiSelectQuestion({
            options: [], type: '', key: '', searchFunction: (/**
             * @return {?}
             */
            function () { }),
            resolveFunction: (/**
             * @return {?}
             */
            function () {
            })
        });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = schemaQuestion.type;
        question.renderingType = 'remote-select';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.dataSource = 'location';
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.toTestOrderQuestion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var question = new TestOrderQuestion({
            type: '', key: '', orderType: '', selectableOrders: [],
            orderSettingUuid: '', label: '', rendering: ''
        });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.options = schemaQuestion.questionOptions.selectableOrders.map((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            return {
                label: obj.label,
                value: obj.concept
            };
        }));
        /** @type {?} */
        var mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        return question;
    };
    /**
     * @param {?} schema
     * @return {?}
     */
    QuestionFactory.prototype.getSchemaQuestions = /**
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        /** @type {?} */
        var listQuestions = new Array();
        this.getQuestions(schema, listQuestions);
        return listQuestions;
    };
    /**
     * @param {?} schema
     * @param {?} foundArray
     * @return {?}
     */
    QuestionFactory.prototype.getQuestions = /**
     * @param {?} schema
     * @param {?} foundArray
     * @return {?}
     */
    function (schema, foundArray) {
        if (!Array.isArray(foundArray)) {
            foundArray = [];
        }
        if (Array.isArray(schema)) {
            for (var property in schema) {
                if (schema.hasOwnProperty(property)) {
                    this.getQuestions(schema[property], foundArray);
                }
            }
        }
        if (schema && !Array.isArray(schema) && typeof schema === 'object') {
            if (schema.questionOptions) {
                if (schema.questionOptions.rendering === 'group' ||
                    schema.questionOptions.rendering === 'repeating') {
                    // schema.questions = this.getGroupMembers(schema.questions);
                    foundArray.push(this.toModel(schema, schema.questionOptions.rendering));
                }
                else if (schema.questionOptions.rendering === 'field-set') ;
                else {
                    foundArray.push(this.toModel(schema, schema.questionOptions.rendering));
                }
            }
            else {
                for (var o in schema) {
                    if (schema.hasOwnProperty(o)) {
                        this.getQuestions(schema[o], foundArray);
                    }
                }
            }
        }
    };
    /**
     * @param {?} schema
     * @return {?}
     */
    QuestionFactory.prototype.getChildrenQuestionModels = /**
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        /** @type {?} */
        var children = [];
        this.getQuestions(schema, children);
        return children;
    };
    /**
     * @param {?} schema
     * @param {?} renderType
     * @return {?}
     */
    QuestionFactory.prototype.toModel = /**
     * @param {?} schema
     * @param {?} renderType
     * @return {?}
     */
    function (schema, renderType) {
        if (renderType === 'ui-select-extended') {
            renderType = schema.type;
        }
        if (!schema.id) {
            schema['id'] = this.generateId(10);
        }
        if (schema.questionOptions &&
            (schema.questionOptions.showDate === true ||
                schema.questionOptions.showDate === 'true')) {
            schema = this.convertOldVersionComplexObsQuestionToNewVersion(schema);
            renderType = 'field-set';
        }
        switch (renderType) {
            case 'select':
                return this.toSelectQuestion(schema);
            case 'single-select':
                return this.toSelectQuestion(schema);
            case 'multi-select':
                return this.toSelectQuestion(schema);
            case 'numeric':
                return this.toNumericQuestion(schema);
            case 'number':
                return this.toNumberQuestion(schema);
            case 'encounterDatetime':
                return this.toEncounterDatetimeQuestion(schema);
            case 'date':
                return this.toDateQuestion(schema);
            case 'multiCheckbox':
                return this.toMultiCheckboxQuestion(schema);
            case 'drug':
                return this.toDrugQuestion(schema);
            case 'problem':
                return this.toProblemQuestion(schema);
            case 'group':
                return this.toGroupQuestion(schema);
            case 'field-set':
                return this.toFieldSetQuestion(schema);
            case 'repeating':
                return this.toRepeatingQuestion(schema);
            case 'personAttribute':
                return this.toPersonAttributeQuestion(schema);
            case 'text':
                return this.toTextQuestion(schema);
            case 'textarea':
                return this.toTextAreaQuestion(schema);
            case 'textarea':
                return this.toTextAreaQuestion(schema);
            case 'select-concept-answers':
                return this.toConceptAnswerSelect(schema);
            case 'encounterLocation':
                return this.toEncounterLocationQuestion(schema);
            case 'encounterDatetime':
                return this.toEncounterDatetimeQuestion(schema);
            case 'encounterProvider':
                return this.toEncounterProviderQuestion(schema);
            case 'radio':
                return this.toCheckBoxQuestion(schema);
            case 'checkbox':
                return this.toCheckBoxQuestion(schema);
            case 'encounterProvider':
                return this.toEncounterProviderQuestion(schema);
            case 'file':
                return this.toFileUploadQuestion(schema);
            default:
                console.warn('New Schema Question Type found.........' + renderType);
                return this.toTextQuestion(schema);
        }
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.convertOldVersionComplexObsQuestionToNewVersion = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var converted = {};
        converted.type = 'complex-obs';
        converted.label = schemaQuestion.label;
        converted.id = 'complex_' + schemaQuestion.id;
        converted.questionOptions = {};
        converted.questionOptions.concept = schemaQuestion.questionOptions.concept;
        converted.questionOptions.rendering = 'field-set';
        converted.questions = [];
        converted.validators = [];
        /** @type {?} */
        var mainField = JSON.parse(JSON.stringify(schemaQuestion));
        mainField.type = 'complex-obs-child';
        delete mainField.questionOptions.showDate;
        delete mainField.questionOptions.shownDateOptions;
        mainField.questionOptions.obsField = 'value';
        /** @type {?} */
        var dateField = {};
        dateField.type = 'complex-obs-child';
        dateField.label = 'Date of ' + mainField.label;
        dateField.id = 'date_' + mainField.id;
        dateField.questionOptions = {};
        dateField.questionOptions.concept = schemaQuestion.questionOptions.concept;
        dateField.questionOptions.rendering = 'date';
        dateField.questionOptions.obsField = 'obsDatetime';
        /** @type {?} */
        var dateOptions = ((/** @type {?} */ (Object))).assign({}, schemaQuestion.questionOptions.shownDateOptions);
        dateField.validators = dateOptions.validators;
        dateField.hide = dateOptions.hide;
        converted.questions.push(mainField);
        converted.questions.push(dateField);
        return converted;
    };
    /**
     * @param {?} mappings
     * @param {?} source
     * @param {?} destination
     * @return {?}
     */
    QuestionFactory.prototype.copyProperties = /**
     * @param {?} mappings
     * @param {?} source
     * @param {?} destination
     * @return {?}
     */
    function (mappings, source, destination) {
        for (var property in source) {
            if (mappings.hasOwnProperty(property) && destination.hasOwnProperty(mappings[property])) {
                destination[mappings[property]] = source[property];
            }
        }
    };
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    QuestionFactory.prototype.addValidators = /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    function (schemaQuestion) {
        /** @type {?} */
        var validators = [];
        if (schemaQuestion.validators) {
            // TODO - add more validator types
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(schemaQuestion.validators, (/**
             * @param {?} validator
             * @return {?}
             */
            function (validator) {
                switch (validator.type) {
                    case 'date':
                        validators.push(new DateValidationModel(validator));
                        break;
                    case 'js_expression':
                        validators.push(new JsExpressionValidationModel(validator));
                        break;
                    case 'conditionalAnswered':
                        validators.push(new ConditionalValidationModel(validator));
                        break;
                    default:
                        validators.push(new ValidationModel(validator));
                        break;
                }
            }));
        }
        /** @type {?} */
        var questionOptions = schemaQuestion.questionOptions;
        /** @type {?} */
        var renderingType = questionOptions ? questionOptions.rendering : '';
        switch (renderingType) {
            case 'number':
                if (questionOptions.max && questionOptions.min) {
                    validators.push(new MaxValidationModel({
                        type: 'max',
                        max: questionOptions.max
                    }));
                    validators.push(new MinValidationModel({
                        type: 'min',
                        min: questionOptions.min
                    }));
                }
                break;
            default:
                break;
        }
        // add conditional required validators
        if (typeof schemaQuestion.required === 'object') {
            /** @type {?} */
            var required = schemaQuestion.required;
            if (required.type === 'conditionalRequired') {
                validators.push(new ConditionalValidationModel({
                    referenceQuestionId: required.referenceQuestionId,
                    referenceQuestionAnswers: required.referenceQuestionAnswers,
                    type: required.type,
                    message: required.message,
                }));
            }
        }
        return validators;
    };
    /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    QuestionFactory.prototype.addHistoricalExpressions = /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    function (schemaQuestion, question) {
        if (schemaQuestion.historicalExpression && schemaQuestion.historicalExpression.length > 0) {
            question.setHistoricalValue(true);
            if (schemaQuestion.showHistoricalEncounterDate !== undefined) {
                question.showHistoricalEncounterDate((schemaQuestion.showHistoricalEncounterDate === 'true'));
            }
            else {
                question.showHistoricalEncounterDate();
            }
            /** @type {?} */
            var origValue = this.historicalHelperService.evaluate(schemaQuestion.historicalExpression, this.dataSources, undefined);
            question.historicalDataValue = origValue;
            // console.info('historical value', origValue);
            // console.info('historical data question :::', question);
            // console.info('schema data question :::', schemaQuestion);
            if (schemaQuestion.historicalPrepopulateCondition && origValue) {
                /** @type {?} */
                var toPopulate = this.historicalHelperService.evaluatePrecondition(schemaQuestion.historicalPrepopulateCondition, this.dataSources, origValue);
                if (toPopulate) {
                    question.defaultValue = origValue.value;
                }
                return; // don't try to evaluate the other option
            }
            if (schemaQuestion.historicalPrepopulate && origValue) {
                // sample schema options for this branch
                // "historicalPrepopulate":true,
                // "allowedHistoricalValueAgeInDays": 40000,
                /** @type {?} */
                var valDate = moment$5(origValue.valueDate);
                /** @type {?} */
                var differenceInDays = moment$5().diff(valDate, 'days');
                if (Number.isInteger(schemaQuestion.allowedHistoricalValueAgeInDays)) {
                    if (differenceInDays <= schemaQuestion.allowedHistoricalValueAgeInDays) {
                        question.defaultValue = origValue.value;
                    }
                }
                else {
                    question.defaultValue = origValue.value;
                }
            }
        }
    };
    /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    QuestionFactory.prototype.addCalculatorProperty = /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    function (schemaQuestion, question) {
        if (schemaQuestion.questionOptions &&
            typeof schemaQuestion.questionOptions.calculate === 'object') {
            question.calculateExpression = schemaQuestion.questionOptions.calculate.calculateExpression;
        }
    };
    /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    QuestionFactory.prototype.addAlertProperty = /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    function (schemaQuestion, question) {
        if (schemaQuestion.alert) {
            question.alert = schemaQuestion.alert;
        }
        // if (typeof schemaQuestion.message === 'object') {
        //   if (schemaQuestion.message.alertWhenExpression) {
        //     question.message = schemaQuestion.message.alertWhenExpression;
        //   }
        // }
    };
    /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    QuestionFactory.prototype.addDisableOrHideProperty = /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    function (schemaQuestion, question) {
        if (!!schemaQuestion.disable) {
            question.disable = schemaQuestion.disable;
        }
        if (typeof schemaQuestion.disable === 'object') {
            question.disable = schemaQuestion.disable.disableWhenExpression;
        }
        if (!!schemaQuestion.hide) {
            question.hide = schemaQuestion.hide;
        }
        if (typeof schemaQuestion.hide === 'object') {
            if (schemaQuestion.hide.hideWhenExpression) {
                question.hide = schemaQuestion.hide.hideWhenExpression;
            }
        }
    };
    /**
     * @private
     * @param {?} x
     * @return {?}
     */
    QuestionFactory.prototype.generateId = /**
     * @private
     * @param {?} x
     * @return {?}
     */
    function (x) {
        /** @type {?} */
        var s = '_';
        while (s.length < x && x > 0) {
            /** @type {?} */
            var r = Math.random();
            s += (r < 0.1 ? Math.floor(r * 100) :
                String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
        }
        return '_' + s;
    };
    return QuestionFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormFactory = /** @class */ (function () {
    function FormFactory(controlService, questionFactroy, controlRelationsFactory) {
        this.controlService = controlService;
        this.questionFactroy = questionFactroy;
        this.controlRelationsFactory = controlRelationsFactory;
        this.hd = {
            getValue: (/**
             * @return {?}
             */
            function () {
                return 20;
            })
        };
    }
    /**
     * @param {?} schema
     * @param {?=} dataSource
     * @return {?}
     */
    FormFactory.prototype.createForm = /**
     * @param {?} schema
     * @param {?=} dataSource
     * @return {?}
     */
    function (schema, dataSource) {
        /** @type {?} */
        var form = new Form(schema, this, this.questionFactroy);
        if (dataSource) {
            for (var key in dataSource) {
                if (dataSource.hasOwnProperty(key)) {
                    form.dataSourcesContainer.registerDataSource(key, dataSource[key], false);
                }
            }
        }
        /** @type {?} */
        var question = this.questionFactroy.createQuestionModel(schema, form);
        form.rootNode = (/** @type {?} */ (this.createNode(question, null, null, form)));
        this.buildRelations(form.rootNode);
        form.updateHiddenDisabledStateForAllControls();
        form.updateAlertsForAllControls();
        return form;
    };
    /**
     * @param {?} rootNode
     * @return {?}
     */
    FormFactory.prototype.buildRelations = /**
     * @param {?} rootNode
     * @return {?}
     */
    function (rootNode) {
        Validations.JSExpressionValidatorsEnabled = false;
        this.controlRelationsFactory.buildRelations(rootNode);
        // enable js expression validations
        Validations.JSExpressionValidatorsEnabled = true;
    };
    /**
     * @param {?} question
     * @param {?=} parentNode
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    FormFactory.prototype.createNode = /**
     * @param {?} question
     * @param {?=} parentNode
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    function (question, parentNode, parentControl, form) {
        /** @type {?} */
        var node = null;
        if (question instanceof NestedQuestion) {
            if (question instanceof RepeatingQuestion) {
                node = this.createArrayNode(question, parentNode, parentControl, form);
            }
            else {
                node = this.createGroupNode(question, parentNode, parentControl, form);
            }
        }
        else {
            node = this.createLeafNode(question, parentNode, parentControl, form);
        }
        return node;
    };
    /**
     * @param {?} question
     * @param {?} parentNode
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    FormFactory.prototype.createLeafNode = /**
     * @param {?} question
     * @param {?} parentNode
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    function (question, parentNode, parentControl, form) {
        /** @type {?} */
        var controlModel = this.controlService.generateControlModel(question, parentControl, false, form);
        return new LeafNode(question, controlModel, null, form, parentNode ? parentNode.path : undefined);
    };
    /**
     * @param {?} question
     * @param {?=} parentNode
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    FormFactory.prototype.createGroupNode = /**
     * @param {?} question
     * @param {?=} parentNode
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    function (question, parentNode, parentControl, form) {
        /** @type {?} */
        var controlModel = (/** @type {?} */ (this.controlService.generateControlModel(question, parentControl, false, form)));
        /** @type {?} */
        var groupNode = new GroupNode(question, controlModel, null, form, parentNode ? parentNode.path : undefined);
        this.createNodeChildren(question, groupNode, (controlModel || parentControl), form);
        return groupNode;
    };
    /**
     * @param {?} question
     * @param {?=} parentNode
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    FormFactory.prototype.createArrayNode = /**
     * @param {?} question
     * @param {?=} parentNode
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    function (question, parentNode, parentControl, form) {
        var _this = this;
        /** @type {?} */
        var controlModel = (/** @type {?} */ (this.controlService.generateControlModel(question, parentControl, false, form)));
        /** @type {?} */
        var arrayNode = new ArrayNode(question, controlModel, parentControl, this, form, parentNode ? parentNode.path : undefined);
        arrayNode.createChildFunc = this.createArrayNodeChild;
        arrayNode.removeChildFunc = this.removeArrayNodeChild;
        arrayNode.addChildNodeCreatedListener((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            Validations.JSExpressionValidatorsEnabled = false;
            _this.controlRelationsFactory.buildArrayNodeRelations(node);
            Validations.JSExpressionValidatorsEnabled = true;
        }));
        return arrayNode;
    };
    /**
     * @param {?} question
     * @param {?} node
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    FormFactory.prototype.createNodeChildren = /**
     * @param {?} question
     * @param {?} node
     * @param {?=} parentControl
     * @param {?=} form
     * @return {?}
     */
    function (question, node, parentControl, form) {
        var _this = this;
        question.questions.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            /** @type {?} */
            var child = _this.createNode(element, node, parentControl, form);
            node.setChild(element.key, child);
        }));
        return node.children;
    };
    /**
     * @param {?} question
     * @param {?} node
     * @param {?=} factory
     * @return {?}
     */
    FormFactory.prototype.createArrayNodeChild = /**
     * @param {?} question
     * @param {?} node
     * @param {?=} factory
     * @return {?}
     */
    function (question, node, factory) {
        if (factory === null || factory === undefined) {
            factory = this;
        }
        /** @type {?} */
        var groupQuestion = new QuestionGroup({
            key: node.path + '.' + node.children.length + '',
            type: 'group', extras: question.extras, label: '', questions: question.questions
        });
        if (question.controlType === AfeControlType.None) {
            groupQuestion.controlType = question.controlType;
        }
        /** @type {?} */
        var group = factory.createGroupNode(groupQuestion, null, null, node.form);
        node.children.push(group);
        if (node.control instanceof AfeFormArray) {
            /** @type {?} */
            var nodeControl = (/** @type {?} */ (node.control));
            nodeControl.setControl(nodeControl.controls.length, group.control);
        }
        return group;
    };
    /**
     * @param {?} index
     * @param {?} node
     * @return {?}
     */
    FormFactory.prototype.removeArrayNodeChild = /**
     * @param {?} index
     * @param {?} node
     * @return {?}
     */
    function (index, node) {
        /** @type {?} */
        var nodeToRemove = node.children[index];
        node.children.splice(index, 1);
        if (node.control !== null || node.control !== undefined) {
            if (node.control instanceof AfeFormArray) {
                /** @type {?} */
                var control = (/** @type {?} */ (node.control));
                /** @type {?} */
                var controlIndexToRemove = control.controls.indexOf(nodeToRemove.control);
                if (controlIndexToRemove >= 0) {
                    control.removeAt(controlIndexToRemove);
                }
            }
        }
    };
    FormFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    FormFactory.ctorParameters = function () { return [
        { type: FormControlService },
        { type: QuestionFactory },
        { type: ControlRelationsFactory }
    ]; };
    return FormFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$6 = moment__WEBPACK_IMPORTED_MODULE_4__;
var ObsAdapterHelper = /** @class */ (function () {
    function ObsAdapterHelper() {
    }
    /**
     * @param {?} node
     * @param {?} obsArray
     * @return {?}
     */
    ObsAdapterHelper.prototype.findObsAnswerToQuestion = /**
     * @param {?} node
     * @param {?} obsArray
     * @return {?}
     */
    function (node, obsArray) {
        var _this = this;
        /** @type {?} */
        var found = [];
        if (!this.isObsNode(node)) {
            return found;
        }
        if (node instanceof LeafNode ||
            (node instanceof GroupNode &&
                node.question.extras.type === 'complex-obs')) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(obsArray, (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.concept &&
                    item.concept.uuid === node.question.extras.questionOptions.concept) {
                    found.push(item);
                }
            }));
            return found;
        }
        // At this point the node is either a group or a repeating node
        /** @type {?} */
        var childQuestionsUuids = this.getChildQuestionsConceptUuids(node);
        if (childQuestionsUuids.length > 0) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(obsArray, (/**
             * @param {?} obs
             * @return {?}
             */
            function (obs) {
                if (obs.concept &&
                    obs.concept.uuid === node.question.extras.questionOptions.concept &&
                    Array.isArray(obs.groupMembers) &&
                    _this.isSubsetOf(childQuestionsUuids, _this.getGroupMembersConceptUuids(obs))) {
                    found.push(obs);
                }
            }));
        }
        return found;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ObsAdapterHelper.prototype.getChildQuestionsConceptUuids = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var found = [];
        if (node.question.extras && node.question.extras.questions) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(node.question.extras.questions, (/**
             * @param {?} question
             * @return {?}
             */
            function (question) {
                if (question.questionOptions &&
                    question.questionOptions.concept) {
                    found.push(question.questionOptions.concept);
                }
            }));
        }
        return found;
    };
    /**
     * @param {?} obsWithGroupMembers
     * @return {?}
     */
    ObsAdapterHelper.prototype.getGroupMembersConceptUuids = /**
     * @param {?} obsWithGroupMembers
     * @return {?}
     */
    function (obsWithGroupMembers) {
        /** @type {?} */
        var found = [];
        if (Array.isArray(obsWithGroupMembers.groupMembers)) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(obsWithGroupMembers.groupMembers, (/**
             * @param {?} member
             * @return {?}
             */
            function (member) {
                found.push(member.concept.uuid);
            }));
        }
        return found;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ObsAdapterHelper.prototype.isObsNode = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return node.question.extras &&
            (node.question.extras.type === 'obs' ||
                node.question.extras.type === 'obsGroup' ||
                node.question.extras.type === 'complex-obs' ||
                node.question.extras.type === 'complex-obs-child');
    };
    /**
     * @param {?} supersetArray
     * @param {?} subsetArray
     * @return {?}
     */
    ObsAdapterHelper.prototype.isSubsetOf = /**
     * @param {?} supersetArray
     * @param {?} subsetArray
     * @return {?}
     */
    function (supersetArray, subsetArray) {
        if (subsetArray.length === 0 && supersetArray.length === 0) {
            return true;
        }
        return subsetArray.every((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            return supersetArray.indexOf(element) >= 0;
        }));
    };
    /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    ObsAdapterHelper.prototype.setSimpleObsNodeValue = /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    function (node, obs) {
        if (node && obs.length > 0) {
            /** @type {?} */
            var obsToUse = obs[0];
            // set initial value
            node.initialValue = obsToUse;
            if (!this.isEmpty(obsToUse.value) && obsToUse.value.uuid) {
                // answer to the obs is a concept, use uuid value
                this.setNodeFormControlValue(node, obsToUse.value.uuid);
            }
            else if (!this.isEmpty(obsToUse.value)) {
                this.setNodeFormControlValue(node, obsToUse.value);
            }
        }
    };
    /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    ObsAdapterHelper.prototype.setMultiselectObsNodeValue = /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    function (node, obs) {
        if (node && obs.length > 0) {
            node.initialValue = obs;
            /** @type {?} */
            var obsUuids = [];
            try {
                for (var obs_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(obs), obs_1_1 = obs_1.next(); !obs_1_1.done; obs_1_1 = obs_1.next()) {
                    var m = obs_1_1.value;
                    obsUuids.push(m.value.uuid);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (obs_1_1 && !obs_1_1.done && (_a = obs_1.return)) _a.call(obs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.setNodeFormControlValue(node, obsUuids);
        }
        var e_1, _a;
    };
    /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    ObsAdapterHelper.prototype.setComplexObsNodeValue = /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    function (node, obs) {
        if (node && obs.length > 0) {
            /** @type {?} */
            var valueField = void 0;
            // essential memmber
            /** @type {?} */
            var dateField = void 0;
            // other member to be manipulated by user
            /** @type {?} */
            var nodeAsGroup = ((/** @type {?} */ (node)));
            // tslint:disable-next-line:forin
            for (var o in nodeAsGroup.children) {
                if (((/** @type {?} */ (nodeAsGroup.children[o]))).question.extras.questionOptions.obsField === 'value') {
                    valueField = nodeAsGroup.children[o];
                }
                if (((/** @type {?} */ (nodeAsGroup.children[o]))).question.extras.questionOptions.obsField === 'obsDatetime') {
                    dateField = nodeAsGroup.children[o];
                }
            }
            // set the obs value here
            this.setNodeValue(valueField, obs);
            node.initialValue = valueField.initialValue;
            // set the date value here
            dateField.initialValue = valueField.initialValue;
            this.setNodeFormControlValue(dateField, valueField.initialValue.obsDatetime);
        }
    };
    /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    ObsAdapterHelper.prototype.setGroupObsNodeValue = /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    function (node, obs) {
        if (node && obs.length > 0) {
            /** @type {?} */
            var groupNode = (/** @type {?} */ (node));
            groupNode.initialValue = obs[0];
            // tslint:disable-next-line:forin
            for (var o in groupNode.children) {
                this.setNodeValue(groupNode.children[o], obs[0].groupMembers);
            }
        }
    };
    /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    ObsAdapterHelper.prototype.setRepeatingGroupObsNodeValue = /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    function (node, obs) {
        if (node && obs.length > 0) {
            /** @type {?} */
            var arrayNode = (/** @type {?} */ (node));
            arrayNode.initialValue = obs;
            for (var i = 0; i < obs.length; i++) {
                /** @type {?} */
                var createdNode = arrayNode.createChildNode();
                this.setGroupObsNodeValue(createdNode, [obs[i]]);
            }
        }
    };
    /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    ObsAdapterHelper.prototype.setNodeValue = /**
     * @param {?} node
     * @param {?} obs
     * @return {?}
     */
    function (node, obs) {
        switch (this.getObsNodeType(node)) {
            case 'unknown':
                if (node instanceof GroupNode) {
                    /** @type {?} */
                    var groupNode = (/** @type {?} */ (node));
                    // tslint:disable-next-line:forin
                    for (var o in groupNode.children) {
                        this.setNodeValue(groupNode.children[o], obs);
                    }
                    break;
                }
                if (node instanceof ArrayNode) {
                    /** @type {?} */
                    var arrayNode = (/** @type {?} */ (node));
                    for (var i = 0; i < arrayNode.children.length; i++) {
                        this.setNodeValue(arrayNode.children[i], obs);
                    }
                    break;
                }
                break;
            case 'simple':
                // search asnwering obs at this point
                /** @type {?} */
                var answeringObs = this.findObsAnswerToQuestion(node, obs);
                // set answer here
                this.setSimpleObsNodeValue(node, answeringObs);
                break;
            case 'multiselect':
                // search asnwering obs at this point
                /** @type {?} */
                var multiselectObs = this.findObsAnswerToQuestion(node, obs);
                // set answer here
                this.setMultiselectObsNodeValue(node, multiselectObs);
                break;
            case 'complex':
                // search asnwering obs at this point
                /** @type {?} */
                var complexObs = this.findObsAnswerToQuestion(node, obs);
                // set answer here
                this.setComplexObsNodeValue(node, complexObs);
                break;
            case 'group':
                /** @type {?} */
                var groupObs = this.findObsAnswerToQuestion(node, obs);
                if (groupObs.length > 0) {
                    this.setGroupObsNodeValue(node, groupObs);
                }
                break;
            case 'repeatingGroup':
                /** @type {?} */
                var repeatingGroupObs = this.findObsAnswerToQuestion(node, obs);
                if (repeatingGroupObs.length > 0) {
                    this.setRepeatingGroupObsNodeValue(node, repeatingGroupObs);
                }
                break;
            default:
                console.error('Unknown obs node', node);
                break;
        }
    };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    ObsAdapterHelper.prototype.setNodeFormControlValue = /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) {
        node.control.setValue(value);
        // TODO: Determine if we need this call
        // node.control.updateValueAndValidity();
        // TODO: Remove this hack and put it in appropriate place
        if (node.question.enableHistoricalValue && node.initialValue !== undefined) {
            node.question.setHistoricalValue(false);
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ObsAdapterHelper.prototype.getObsNodeType = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.isObsNode(node)) {
            if (node instanceof LeafNode &&
                (node.question.extras.questionOptions.rendering === 'multiCheckbox' ||
                    node.question.extras.questionOptions.rendering === 'checkbox' ||
                    node.question.extras.questionOptions.rendering === 'multi-select')) {
                return 'multiselect';
            }
            if (node instanceof LeafNode) {
                return 'simple';
            }
            if (node instanceof GroupNode &&
                node.question.extras.type === 'complex-obs') {
                return 'complex';
            }
            if (node instanceof ArrayNode &&
                node.question.extras.type === 'obsGroup' &&
                node.question.extras.questionOptions.rendering === 'repeating') {
                return 'repeatingGroup';
            }
            if (node instanceof GroupNode &&
                node.question.extras.type === 'obsGroup') {
                return 'group';
            }
            return 'unknownObs';
        }
        return 'unknown';
    };
    // PAYLOAD GENERATION FUNCTIONS
    // PAYLOAD GENERATION FUNCTIONS
    /**
     * @param {?} node
     * @return {?}
     */
    ObsAdapterHelper.prototype.getSimpleObsPayload = 
    // PAYLOAD GENERATION FUNCTIONS
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        // check for empty values first
        if (this.isEmpty(node.control.value)) {
            if (node.initialValue) {
                // Handle case for existing voided obs
                return {
                    uuid: node.initialValue.uuid,
                    voided: true
                };
            }
            return null;
        }
        // check for exisiting, unchanged values
        if (node.initialValue && !this.simpleNodeValueChanged(node)) {
            return null;
        }
        // all numbers, text, concepts answers are handled in the same way
        // no need for further formatting in this case
        /** @type {?} */
        var obs = {
            concept: node.question.extras.questionOptions.concept,
            value: node.control.value
        };
        // handle date fields
        if (node.question.extras.questionOptions.rendering === 'date') {
            obs.value = this.toOpenMrsDateTimeString(node.control.value);
        }
        if (node.initialValue) {
            // for existing cases, delete concept property, and add uuid
            delete obs.concept;
            obs.uuid = node.initialValue.uuid;
        }
        return obs;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ObsAdapterHelper.prototype.getComplexObsPayload = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var valueField;
        // essential memmber
        /** @type {?} */
        var dateField;
        // other member to be manipulated by user
        /** @type {?} */
        var nodeAsGroup = ((/** @type {?} */ (node)));
        // tslint:disable-next-line:forin
        for (var o in nodeAsGroup.children) {
            if (((/** @type {?} */ (nodeAsGroup.children[o]))).question.extras.questionOptions.obsField === 'value') {
                valueField = nodeAsGroup.children[o];
            }
            if (((/** @type {?} */ (nodeAsGroup.children[o]))).question.extras.questionOptions.obsField === 'obsDatetime') {
                dateField = nodeAsGroup.children[o];
            }
        }
        /** @type {?} */
        var valuePayload = this.getObsNodePayload(valueField);
        console.log('valuePayload', valuePayload);
        // set obs datetime for the generated payload
        if (valuePayload.length > 0) {
            valuePayload[0].obsDatetime = this.toOpenMrsDateTimeString(dateField.control.value);
            return valuePayload[0];
        }
        else if (valuePayload.length === 0 && node.initialValue) {
            // determine if date changed
            if (!this.areDatesEqual(node.initialValue.obsDatetime, dateField.control.value)) {
                /** @type {?} */
                var payload = {
                    uuid: node.initialValue.uuid,
                };
                payload.obsDatetime = this.toOpenMrsDateTimeString(dateField.control.value);
                return payload;
            }
        }
        return null;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ObsAdapterHelper.prototype.getMultiselectObsPayload = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var payload = [];
        /** @type {?} */
        var existingUuids = [];
        // add voided obs i.e. deleted options
        if (Array.isArray(node.initialValue)) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(node.initialValue, (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                existingUuids.push(item.value.uuid);
                if (Array.isArray(node.control.value)) {
                    if (node.control.value.indexOf(item.value.uuid) < 0) {
                        payload.push({
                            uuid: item.uuid,
                            voided: true
                        });
                    }
                }
                else {
                    // every value was deleted
                    payload.push({
                        uuid: item.uuid,
                        voided: true
                    });
                }
            }));
        }
        // add new obs i.e they didn't exisit originally
        if (Array.isArray(node.control.value)) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(node.control.value, (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (existingUuids.indexOf(item) < 0) {
                    payload.push({
                        concept: node.question.extras.questionOptions.concept,
                        value: item
                    });
                }
            }));
        }
        return payload;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ObsAdapterHelper.prototype.getGroupPayload = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        /** @type {?} */
        var nodeAsGroup = (/** @type {?} */ (node));
        /** @type {?} */
        var childrenPayload = [];
        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(nodeAsGroup.children, (/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            /** @type {?} */
            var payload = _this.getObsNodePayload(child);
            if (payload.length > 0) {
                childrenPayload = childrenPayload.concat(payload);
            }
        }));
        if (childrenPayload.length === 0) {
            return null;
        }
        /** @type {?} */
        var groupPayload = {
            groupMembers: childrenPayload
        };
        if (nodeAsGroup.initialValue) {
            groupPayload.uuid = nodeAsGroup.initialValue.uuid;
        }
        else {
            groupPayload.concept = nodeAsGroup.question.extras.questionOptions.concept;
        }
        return groupPayload;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ObsAdapterHelper.prototype.getRepeatingGroupPayload = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        /** @type {?} */
        var nodeAsArray = (/** @type {?} */ (node));
        /** @type {?} */
        var childrenPayload = [];
        /** @type {?} */
        var groupsUuidsAfterEditting = [];
        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(nodeAsArray.children, (/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            /** @type {?} */
            var payload = _this.getObsNodePayload(child);
            if (payload.length > 0) {
                childrenPayload = childrenPayload.concat(payload);
            }
            if (child.initialValue && child.initialValue.uuid) {
                groupsUuidsAfterEditting.push(child.initialValue.uuid);
            }
        }));
        // void deleted groups
        // console.log('groupsUuidsAfterEditting', groupsUuidsAfterEditting);
        if (nodeAsArray.initialValue && Array.isArray(nodeAsArray.initialValue)) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(nodeAsArray.initialValue, (/**
             * @param {?} obs
             * @return {?}
             */
            function (obs) {
                if (groupsUuidsAfterEditting.indexOf(obs.uuid) < 0) {
                    /** @type {?} */
                    var voidedGroup = {
                        uuid: obs.uuid,
                        voided: true
                    };
                    childrenPayload.push(voidedGroup);
                }
            }));
        }
        if (childrenPayload.length <= 0) {
            return null;
        }
        return childrenPayload;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ObsAdapterHelper.prototype.getObsNodePayload = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var payload = [];
        switch (this.getObsNodeType(node)) {
            case 'unknown':
                if (node instanceof GroupNode) {
                    /** @type {?} */
                    var groupNode = (/** @type {?} */ (node));
                    // tslint:disable-next-line:forin
                    for (var o in groupNode.children) {
                        /** @type {?} */
                        var groupNodePayoad = this.getObsNodePayload(groupNode.children[o]);
                        if (Array.isArray(groupNodePayoad) && groupNodePayoad.length > 0) {
                            payload = payload.concat(groupNodePayoad);
                        }
                    }
                    break;
                }
                if (node instanceof ArrayNode) {
                    /** @type {?} */
                    var arrayNode = (/** @type {?} */ (node));
                    for (var i = 0; i < arrayNode.children.length; i++) {
                        /** @type {?} */
                        var arrayNodePayload = this.getObsNodePayload(arrayNode.children[i]);
                        if (Array.isArray(arrayNodePayload) && arrayNodePayload.length > 0) {
                            payload = payload.concat(arrayNodePayload);
                        }
                    }
                    break;
                }
                break;
            case 'simple':
                /** @type {?} */
                var simpleObs = this.getSimpleObsPayload(node);
                if (simpleObs !== null) {
                    payload.push(simpleObs);
                }
                break;
            case 'multiselect':
                /** @type {?} */
                var multiselectObs = this.getMultiselectObsPayload(node);
                if (Array.isArray(multiselectObs) && multiselectObs.length > 0) {
                    payload = payload.concat(multiselectObs);
                }
                break;
            case 'complex':
                /** @type {?} */
                var complexObs = this.getComplexObsPayload(node);
                if (complexObs !== null) {
                    payload.push(complexObs);
                }
                break;
            case 'group':
                /** @type {?} */
                var groupedObs = this.getGroupPayload(node);
                if (groupedObs && groupedObs !== null) {
                    payload.push(groupedObs);
                }
                break;
            case 'repeatingGroup':
                /** @type {?} */
                var repeatingGroupedObs = this.getRepeatingGroupPayload(node);
                if (Array.isArray(repeatingGroupedObs) && repeatingGroupedObs.length > 0) {
                    payload = payload.concat(repeatingGroupedObs);
                }
                break;
            default:
                break;
        }
        return payload;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ObsAdapterHelper.prototype.simpleNodeValueChanged = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.initialValue) {
            if (node.initialValue.value && node.initialValue.value.uuid) {
                // question whose answer is a concept
                return node.control.value !== node.initialValue.value.uuid;
            }
            if (node.question.extras.questionOptions.rendering === 'date') {
                return !this.areDatesEqual(node.control.value, node.initialValue.value);
            }
            return node.control.value !== node.initialValue.value;
        }
        return false;
    };
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    ObsAdapterHelper.prototype.areDatesEqual = /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function (date1, date2) {
        return moment$6(date1).isSame(date2);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ObsAdapterHelper.prototype.isEmpty = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === '' ||
            value === null ||
            value === undefined) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} datetime
     * @return {?}
     */
    ObsAdapterHelper.prototype.toOpenMrsDateTimeString = /**
     * @param {?} datetime
     * @return {?}
     */
    function (datetime) {
        if (this.isEmpty(datetime)) {
            return undefined;
        }
        else {
            // transform value to memoent value to avoid error
            /** @type {?} */
            var formattedVal = moment$6(datetime).format();
            /** @type {?} */
            var val = formattedVal.substring(0, 19).replace('T', ' ');
            return this.isEmpty(val) ? undefined : val;
        }
    };
    return ObsAdapterHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ObsValueAdapter = /** @class */ (function () {
    function ObsValueAdapter(helper) {
        this.helper = helper;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    ObsValueAdapter.prototype.generateFormPayload = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        return this.helper.getObsNodePayload(form.rootNode);
        // TODO: Get rid of the section below when the helper is stable.
        // // Traverse  to get all nodes
        // let pages = this.traverse(form.rootNode);
        // // Extract actual question nodes
        // let questionNodes = this.getQuestionNodes(pages);
        // // Get obs Payload
        // return this.getObsPayload(questionNodes);
    };
    /**
     * @param {?} form
     * @param {?} payload
     * @return {?}
     */
    ObsValueAdapter.prototype.populateForm = /**
     * @param {?} form
     * @param {?} payload
     * @return {?}
     */
    function (form, payload) {
        this.helper.setNodeValue(form.rootNode, payload);
        // TODO: Get rid of the section below when the helper is stable.
        // // Traverse  to get all nodes
        // let pages = this.traverse(form.rootNode);
        // // Extract actual question nodes
        // let questionNodes = this.getQuestionNodes(pages);
        // // Extract set obs
        // this.setValues(questionNodes, payload);
    };
    // TODO: Get rid of all the functions below as they will not be needed
    // once the helper is stable
    // TODO: Get rid of all the functions below as they will not be needed
    // once the helper is stable
    /**
     * @param {?} nodes
     * @param {?=} payload
     * @param {?=} forcegroup
     * @return {?}
     */
    ObsValueAdapter.prototype.setValues = 
    // TODO: Get rid of all the functions below as they will not be needed
    // once the helper is stable
    /**
     * @param {?} nodes
     * @param {?=} payload
     * @param {?=} forcegroup
     * @return {?}
     */
    function (nodes, payload, forcegroup) {
        if (nodes) {
            var _loop_1 = function (node) {
                if (node instanceof LeafNode) {
                    this_1.setObsValue(node, payload);
                    if (node.question.enableHistoricalValue && node.initialValue !== undefined) {
                        node.question.setHistoricalValue(false);
                    }
                }
                else if (node.question && node.question.extras && node.question.renderingType === 'group' || forcegroup) {
                    /** @type {?} */
                    var groupObs = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(payload, (/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) {
                        return o.concept.uuid === node.question.extras.questionOptions.concept && o.groupMembers;
                    }));
                    if (groupObs) {
                        if (node.node) {
                            node.node['initialValue'] = groupObs;
                        }
                        this_1.setValues(node.groupMembers, groupObs.groupMembers);
                    }
                    if (forcegroup && node.payload) {
                        this_1.setValues(node.groupMembers, node.payload.groupMembers);
                    }
                }
                else if (node instanceof GroupNode && node.question.extras.type === 'complex-obs') {
                    this_1.setComplexObsValue(node, payload);
                }
                else if (node.question && node.question.extras && node.question.renderingType === 'repeating' && !forcegroup) {
                    this_1.setRepeatingGroupValues(node, payload);
                    node.node.control.updateValueAndValidity();
                }
                else {
                    throw new Error('not implemented');
                }
            };
            var this_1 = this;
            try {
                for (var nodes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                    var node = nodes_1_1.value;
                    _loop_1(node);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        var e_1, _a;
    };
    /**
     * @param {?} node
     * @param {?} payload
     * @return {?}
     */
    ObsValueAdapter.prototype.setObsValue = /**
     * @param {?} node
     * @param {?} payload
     * @return {?}
     */
    function (node, payload) {
        if (node.question && node.question.extras &&
            (node.question.extras.type === 'obs' ||
                (node.question.extras.type === 'complex-obs-child' &&
                    node.question.extras.questionOptions.obsField === 'value')) &&
            node.question.extras.questionOptions.rendering !== 'multiCheckbox' ||
            node.question.extras.questionOptions.rendering !== 'checkbox' ||
            node.question.extras.questionOptions.rendering !== 'multi-select') {
            /** @type {?} */
            var obs = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(payload, (/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return o.concept.uuid === node.question.extras.questionOptions.concept;
            }));
            if (obs) {
                if (obs.value instanceof Object) {
                    node.control.setValue(obs.value.uuid);
                    node.control.updateValueAndValidity();
                }
                else {
                    node.control.setValue(obs.value);
                    node.control.updateValueAndValidity();
                }
                node['initialValue'] = { obsUuid: obs.uuid, value: obs.value };
            }
        }
        else {
            /** @type {?} */
            var multiObs = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"])(payload, (/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return o.concept.uuid === node.question.extras.questionOptions.concept;
            }));
            if (multiObs && multiObs.length > 0) {
                node.control.setValue(this.getMultiselectValues(multiObs));
                node.control.updateValueAndValidity();
                node['initialValue'] = multiObs;
            }
        }
    };
    /**
     * @param {?} node
     * @param {?} payload
     * @return {?}
     */
    ObsValueAdapter.prototype.setComplexObsValue = /**
     * @param {?} node
     * @param {?} payload
     * @return {?}
     */
    function (node, payload) {
        /** @type {?} */
        var valueField;
        /** @type {?} */
        var dateField;
        // tslint:disable-next-line:forin
        for (var o in node.children) {
            if (((/** @type {?} */ (node.children[o]))).question.extras.questionOptions.obsField === 'value') {
                valueField = node.children[o];
            }
            if (((/** @type {?} */ (node.children[o]))).question.extras.questionOptions.obsField === 'obsDatetime') {
                dateField = node.children[o];
            }
        }
        // set the usual obs value
        this.setObsValue(valueField, payload);
        // set the obs date
        /** @type {?} */
        var obs = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(payload, (/**
         * @param {?} o
         * @return {?}
         */
        function (o) {
            return o.concept.uuid === node.question.extras.questionOptions.concept;
        }));
        if (obs) {
            dateField['initialValue'] = { obsUuid: obs.uuid, value: obs.obsDatetime };
            ((/** @type {?} */ (dateField))).control.setValue(obs.obsDatetime);
            ((/** @type {?} */ (dateField))).control.updateValueAndValidity();
        }
    };
    /**
     * @param {?} multiObs
     * @return {?}
     */
    ObsValueAdapter.prototype.getMultiselectValues = /**
     * @param {?} multiObs
     * @return {?}
     */
    function (multiObs) {
        /** @type {?} */
        var values = [];
        try {
            for (var multiObs_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(multiObs), multiObs_1_1 = multiObs_1.next(); !multiObs_1_1.done; multiObs_1_1 = multiObs_1.next()) {
                var m = multiObs_1_1.value;
                values.push(m.value.uuid);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (multiObs_1_1 && !multiObs_1_1.done && (_a = multiObs_1.return)) _a.call(multiObs_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return values;
        var e_2, _a;
    };
    /**
     * @param {?} node
     * @param {?} payload
     * @return {?}
     */
    ObsValueAdapter.prototype.setRepeatingGroupValues = /**
     * @param {?} node
     * @param {?} payload
     * @return {?}
     */
    function (node, payload) {
        /** @type {?} */
        var groupRepeatingObs = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"])(payload, (/**
         * @param {?} o
         * @return {?}
         */
        function (o) {
            /** @type {?} */
            var found = o.concept.uuid === node.question.extras.questionOptions.concept;
            /** @type {?} */
            var intersect = false;
            if (found && o.groupMembers) {
                /** @type {?} */
                var obs = o.groupMembers.map((/**
                 * @param {?} a
                 * @return {?}
                 */
                function (a) {
                    return a.concept.uuid;
                }));
                /** @type {?} */
                var schemaQuestions = node.question.questions.map((/**
                 * @param {?} a
                 * @return {?}
                 */
                function (a) {
                    return a.extras.questionOptions.concept;
                }));
                intersect = (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["intersection"])(obs, schemaQuestions).length > 0);
            }
            return found && intersect;
        }));
        if (groupRepeatingObs.length > 0) {
            node.node['initialValue'] = groupRepeatingObs;
            for (var i = 0; i < groupRepeatingObs.length; i++) {
                node.node.createChildNode();
            }
        }
        /** @type {?} */
        var groups = [];
        /** @type {?} */
        var index = 0;
        var _loop_2 = function (child) {
            /** @type {?} */
            var children = Object.keys(child.children).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return child.children[key]; }));
            /** @type {?} */
            var groupPayload = groupRepeatingObs[index];
            groups.push({ question: node.question, groupMembers: children, payload: groupPayload });
            index++;
        };
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(node.node.children), _b = _a.next(); !_b.done; _b = _a.next()) {
                var child = _b.value;
                _loop_2(child);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.setValues(groups, groupRepeatingObs, true);
        var e_3, _c;
    };
    /**
     * @param {?} pages
     * @return {?}
     */
    ObsValueAdapter.prototype.getQuestionNodes = /**
     * @param {?} pages
     * @return {?}
     */
    function (pages) {
        /** @type {?} */
        var merged = [];
        /** @type {?} */
        var arrays = [];
        try {
            for (var pages_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
                var page = pages_1_1.value;
                try {
                    for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(page.page), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var section = _b.value;
                        arrays.push(section.section);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (pages_1_1 && !pages_1_1.done && (_d = pages_1.return)) _d.call(pages_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return merged.concat.apply([], arrays);
        var e_5, _d, e_4, _c;
    };
    /**
     * @param {?} nodes
     * @return {?}
     */
    ObsValueAdapter.prototype.repeatingGroup = /**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        /** @type {?} */
        var toReturn = [];
        try {
            for (var nodes_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(nodes), nodes_2_1 = nodes_2.next(); !nodes_2_1.done; nodes_2_1 = nodes_2.next()) {
                var node = nodes_2_1.value;
                toReturn.push({ question: node.question, groupMembers: this.traverse(node) });
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (nodes_2_1 && !nodes_2_1.done && (_a = nodes_2.return)) _a.call(nodes_2);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return toReturn;
        var e_6, _a;
    };
    /**
     * @param {?} obs
     * @param {?} obsPayload
     * @return {?}
     */
    ObsValueAdapter.prototype.processGroup = /**
     * @param {?} obs
     * @param {?} obsPayload
     * @return {?}
     */
    function (obs, obsPayload) {
        if (obs.question && obs.question.extras && obs.question.extras.questionOptions.rendering === 'group') {
            /** @type {?} */
            var members = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"])(this.getObsPayload(obs.groupMembers), (/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return o.value !== '';
            }));
            /** @type {?} */
            var mappedMembers = members.map((/**
             * @param {?} a
             * @return {?}
             */
            function (a) {
                return a.voided;
            }));
            if (members.length > 0 && mappedMembers.every(Boolean)) {
                obsPayload.push({
                    uuid: obs.node.initialValue.uuid,
                    voided: true
                });
            }
            else if (members.length > 0) {
                if (obs.node.initialValue) {
                    obsPayload.push({
                        uuid: obs.node.initialValue.uuid,
                        groupMembers: members
                    });
                }
                else {
                    obsPayload.push({
                        concept: obs.question.extras.questionOptions.concept,
                        groupMembers: members
                    });
                }
            }
        }
    };
    /**
     * @param {?} group
     * @return {?}
     */
    ObsValueAdapter.prototype.mapInitialGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var current = {};
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(group.groupMembers), _b = _a.next(); !_b.done; _b = _a.next()) {
                var member = _b.value;
                /** @type {?} */
                var value = '';
                if (member.value instanceof Object) {
                    value = member.value.uuid;
                }
                else if (member.value) {
                    value = member.value;
                }
                else if (member.groupMembers && member.groupMembers.length > 0) {
                    current = this.mapInitialGroup(group);
                }
                current[member.concept.uuid + ':' + value] = value;
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return current;
        var e_7, _c;
    };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    ObsValueAdapter.prototype.mapModelGroup = /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) {
        /** @type {?} */
        var current = {};
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                /** @type {?} */
                var groupQuestion = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(node.question.questions, { key: key });
                /** @type {?} */
                var modelValue = value[key];
                if (modelValue instanceof Object) ;
                else if (modelValue !== '') {
                    current[groupQuestion.extras.questionOptions.concept + ':'
                        + modelValue] = modelValue;
                }
            }
        }
        return current;
    };
    /**
     * @param {?} node
     * @param {?} obsPayload
     * @return {?}
     */
    ObsValueAdapter.prototype.processRepeatingGroups = /**
     * @param {?} node
     * @param {?} obsPayload
     * @return {?}
     */
    function (node, obsPayload) {
        /** @type {?} */
        var initialValues = [];
        if (node.node.initialValue) {
            try {
                for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(node.node.initialValue), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var group = _b.value;
                    initialValues.push({ uuid: group.uuid, value: this.mapInitialGroup(group) });
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        /** @type {?} */
        var repeatingModel = [];
        try {
            for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(node.node.control.value), _e = _d.next(); !_e.done; _e = _d.next()) {
                var value = _e.value;
                repeatingModel.push({ value: this.mapModelGroup(node, value) });
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
            }
            finally { if (e_9) throw e_9.error; }
        }
        /** @type {?} */
        var deleted = this.leftOuterJoinArrays(initialValues, repeatingModel);
        /** @type {?} */
        var newObs = this.leftOuterJoinArrays(repeatingModel, initialValues);
        /** @type {?} */
        var groupConcept = node.question.extras.questionOptions.concept;
        /** @type {?} */
        var newObsPayload = [];
        if (deleted.length > 0) {
            /** @type {?} */
            var deletedObs = this.createGroupDeletedObs(deleted);
            try {
                for (var deletedObs_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(deletedObs), deletedObs_1_1 = deletedObs_1.next(); !deletedObs_1_1.done; deletedObs_1_1 = deletedObs_1.next()) {
                    var d = deletedObs_1_1.value;
                    obsPayload.push(d);
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (deletedObs_1_1 && !deletedObs_1_1.done && (_g = deletedObs_1.return)) _g.call(deletedObs_1);
                }
                finally { if (e_10) throw e_10.error; }
            }
            if (newObs.length > 0) {
                newObsPayload = this.createGroupNewObs(newObs, groupConcept);
            }
        }
        else {
            newObsPayload = this.createGroupNewObs(newObs, groupConcept);
        }
        if (newObsPayload.length > 0) {
            try {
                for (var newObsPayload_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(newObsPayload), newObsPayload_1_1 = newObsPayload_1.next(); !newObsPayload_1_1.done; newObsPayload_1_1 = newObsPayload_1.next()) {
                    var p = newObsPayload_1_1.value;
                    obsPayload.push(p);
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (newObsPayload_1_1 && !newObsPayload_1_1.done && (_h = newObsPayload_1.return)) _h.call(newObsPayload_1);
                }
                finally { if (e_11) throw e_11.error; }
            }
        }
        var e_8, _c, e_9, _f, e_10, _g, e_11, _h;
    };
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    ObsValueAdapter.prototype.leftOuterJoinArrays = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first$$1, second) {
        /** @type {?} */
        var unique = first$$1.filter((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            return !second.some((/**
             * @param {?} obj2
             * @return {?}
             */
            function (obj2) {
                return Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"])(obj.value, obj2.value);
            }));
        }));
        return unique;
    };
    /**
     * @param {?} payload
     * @param {?} groupConcept
     * @return {?}
     */
    ObsValueAdapter.prototype.createGroupNewObs = /**
     * @param {?} payload
     * @param {?} groupConcept
     * @return {?}
     */
    function (payload, groupConcept) {
        /** @type {?} */
        var newPayload = [];
        try {
            for (var payload_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(payload), payload_1_1 = payload_1.next(); !payload_1_1.done; payload_1_1 = payload_1.next()) {
                var obs = payload_1_1.value;
                /** @type {?} */
                var groupPayload = [];
                /* tslint:disable */
                for (var key in obs.value) {
                    /** @type {?} */
                    var concept = key.split(':')[0];
                    /** @type {?} */
                    var value = key.split(':')[1];
                    groupPayload.push({ concept: concept, value: value });
                }
                newPayload.push({ concept: groupConcept, groupMembers: groupPayload });
                /* tslint:enable */
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (payload_1_1 && !payload_1_1.done && (_a = payload_1.return)) _a.call(payload_1);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return newPayload;
        var e_12, _a;
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    ObsValueAdapter.prototype.createGroupDeletedObs = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var deletedObs = [];
        try {
            for (var payload_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(payload), payload_2_1 = payload_2.next(); !payload_2_1.done; payload_2_1 = payload_2.next()) {
                var d = payload_2_1.value;
                deletedObs.push({ uuid: d.uuid, voided: true });
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (payload_2_1 && !payload_2_1.done && (_a = payload_2.return)) _a.call(payload_2);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return deletedObs;
        var e_13, _a;
    };
    /**
     * @param {?} datetime
     * @return {?}
     */
    ObsValueAdapter.prototype.getExactTime = /**
     * @param {?} datetime
     * @return {?}
     */
    function (datetime) {
        return datetime.substring(0, 19).replace('T', ' ');
    };
    /**
     * @param {?} obs
     * @param {?} obsPayload
     * @return {?}
     */
    ObsValueAdapter.prototype.processObs = /**
     * @param {?} obs
     * @param {?} obsPayload
     * @return {?}
     */
    function (obs, obsPayload) {
        if (obs.control && obs.question.extras) {
            /** @type {?} */
            var obsValue = {
                concept: obs.question.extras.questionOptions.concept,
                value: (obs.question.extras.questionOptions.rendering === 'date' && !this.isEmpty(obs.control.value)) ?
                    this.getExactTime(obs.control.value) : obs.control.value
            };
            if (obs.question.extras.questionOptions.rendering === 'multiCheckbox' ||
                obs.question.extras.questionOptions.rendering === 'checkbox' ||
                obs.question.extras.questionOptions.rendering === 'multi-select') {
                /** @type {?} */
                var multis = this.processMultiSelect(obs.question.extras.questionOptions.concept, obs.control.value);
                if (obs.initialValue) {
                    /** @type {?} */
                    var mappedInitial = obs.initialValue.map((/**
                     * @param {?} a
                     * @return {?}
                     */
                    function (a) {
                        return { uuid: a.uuid, value: { concept: a.concept.uuid, value: a.value.uuid } };
                    }));
                    /** @type {?} */
                    var mappedCurrent = multis.map((/**
                     * @param {?} a
                     * @return {?}
                     */
                    function (a) {
                        return { value: a };
                    }));
                    /** @type {?} */
                    var deletedObs = this.leftOuterJoinArrays(mappedInitial, mappedCurrent);
                    /** @type {?} */
                    var newObs = this.leftOuterJoinArrays(mappedCurrent, mappedInitial);
                    this.processDeletedMultiSelectObs(deletedObs, obsPayload);
                    this.processNewMultiSelectObs(newObs, obsPayload);
                }
                else {
                    this.processNewMultiSelectObs(multis, obsPayload);
                }
            }
            else {
                if (obs.initialValue && obs.initialValue.value && obsValue) {
                    this.updateOrVoidObs(obsValue, obs.initialValue, obsPayload);
                }
                else if (obsValue.value !== '' && obsValue.value !== null) {
                    obsPayload.push(obsValue);
                }
            }
        }
    };
    /**
     * @param {?} node
     * @param {?} obsPayload
     * @return {?}
     */
    ObsValueAdapter.prototype.processComplexObs = /**
     * @param {?} node
     * @param {?} obsPayload
     * @return {?}
     */
    function (node, obsPayload) {
        /** @type {?} */
        var valueField;
        /** @type {?} */
        var dateField;
        // tslint:disable-next-line:forin
        for (var o in node.children) {
            if (((/** @type {?} */ (node.children[o]))).question.extras.questionOptions.obsField === 'value') {
                valueField = node.children[o];
            }
            if (((/** @type {?} */ (node.children[o]))).question.extras.questionOptions.obsField === 'obsDatetime') {
                dateField = node.children[o];
            }
        }
        if (valueField) {
            // process obs as usual
            this.processObs(valueField, obsPayload);
            // obtain the last inserted obs and set the obsDatetime
            /** @type {?} */
            var createdPayload = obsPayload.length > 0 ? obsPayload[obsPayload.length - 1] : undefined;
            if (createdPayload &&
                ((createdPayload.concept && createdPayload.concept === node.question.extras.questionOptions.concept) ||
                    (valueField.initialValue && createdPayload.uuid === valueField.initialValue.obsUuid))) {
                if (dateField.initialValue && dateField.control.value !== dateField.initialValue.value) {
                    createdPayload.obsDatetime = dateField.control.value;
                }
            }
        }
    };
    /**
     * @param {?} values
     * @param {?} obsPayload
     * @return {?}
     */
    ObsValueAdapter.prototype.processDeletedMultiSelectObs = /**
     * @param {?} values
     * @param {?} obsPayload
     * @return {?}
     */
    function (values, obsPayload) {
        try {
            for (var values_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                var value = values_1_1.value;
                obsPayload.push({ uuid: value.uuid, voided: true });
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
            }
            finally { if (e_14) throw e_14.error; }
        }
        var e_14, _a;
    };
    /**
     * @param {?} values
     * @param {?} obsPayload
     * @return {?}
     */
    ObsValueAdapter.prototype.processNewMultiSelectObs = /**
     * @param {?} values
     * @param {?} obsPayload
     * @return {?}
     */
    function (values, obsPayload) {
        try {
            for (var values_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                var multi = values_2_1.value;
                if (multi.value instanceof Object) {
                    obsPayload.push(multi.value);
                }
                else {
                    obsPayload.push(multi);
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
            }
            finally { if (e_15) throw e_15.error; }
        }
        var e_15, _a;
    };
    /**
     * @param {?} obsValue
     * @param {?} initialValue
     * @param {?} obsPayload
     * @return {?}
     */
    ObsValueAdapter.prototype.updateOrVoidObs = /**
     * @param {?} obsValue
     * @param {?} initialValue
     * @param {?} obsPayload
     * @return {?}
     */
    function (obsValue, initialValue, obsPayload) {
        if (this.isEmpty(obsValue.value) && initialValue.value) {
            obsPayload.push({ uuid: initialValue.obsUuid, voided: true });
        }
        else if (!this.isEmpty(obsValue.value) && initialValue.value) {
            obsPayload.push({ uuid: initialValue.obsUuid, value: obsValue.value });
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ObsValueAdapter.prototype.isEmpty = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === '' ||
            value === null ||
            value === undefined) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} o
     * @param {?=} type
     * @return {?}
     */
    ObsValueAdapter.prototype.traverse = /**
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
                                questions.push({ page: page, label: o.children[key].question.label });
                                break;
                            case 'section':
                                /** @type {?} */
                                var section = this.traverse(o.children[key]);
                                questions.push({ section: section, node: o.children[key], label: o.children[key].question.label });
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
        }
        return questions;
    };
    /**
     * @param {?} concept
     * @param {?} values
     * @return {?}
     */
    ObsValueAdapter.prototype.processMultiSelect = /**
     * @param {?} concept
     * @param {?} values
     * @return {?}
     */
    function (concept, values) {
        /** @type {?} */
        var multiSelectObs = [];
        if (values && values !== null) {
            try {
                for (var values_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(values), values_3_1 = values_3.next(); !values_3_1.done; values_3_1 = values_3.next()) {
                    var value = values_3_1.value;
                    /** @type {?} */
                    var obs = {
                        concept: concept,
                        value: value
                    };
                    multiSelectObs.push(obs);
                }
            }
            catch (e_16_1) { e_16 = { error: e_16_1 }; }
            finally {
                try {
                    if (values_3_1 && !values_3_1.done && (_a = values_3.return)) _a.call(values_3);
                }
                finally { if (e_16) throw e_16.error; }
            }
        }
        return multiSelectObs;
        var e_16, _a;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ObsValueAdapter.prototype.isObs = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return (node.question.extras.type === 'obs' ||
            node.question.extras.type === 'obsGroup' ||
            node.question.extras.type === 'complex-obs');
    };
    /**
     * @param {?} nodes
     * @return {?}
     */
    ObsValueAdapter.prototype.getObsPayload = /**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        /** @type {?} */
        var obsPayload = [];
        try {
            for (var nodes_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(nodes), nodes_3_1 = nodes_3.next(); !nodes_3_1.done; nodes_3_1 = nodes_3.next()) {
                var node = nodes_3_1.value;
                if (this.isObs(node)) {
                    if (node.groupMembers, node.question.extras.questionOptions.rendering === 'group') {
                        this.processGroup(node, obsPayload);
                    }
                    else if (node.groupMembers, node.question.extras.questionOptions.rendering === 'repeating') {
                        this.processRepeatingGroups(node, obsPayload);
                    }
                    else if (node instanceof GroupNode && ((/** @type {?} */ (node))).question.extras.type === 'complex-obs') {
                        this.processComplexObs(node, obsPayload);
                    }
                    else {
                        this.processObs(node, obsPayload);
                    }
                }
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (nodes_3_1 && !nodes_3_1.done && (_a = nodes_3.return)) _a.call(nodes_3);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return obsPayload;
        var e_17, _a;
    };
    ObsValueAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    ObsValueAdapter.ctorParameters = function () { return [
        { type: ObsAdapterHelper }
    ]; };
    return ObsValueAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrderValueAdapter = /** @class */ (function () {
    function OrderValueAdapter() {
        this.formOrderNodes = [];
        this.provider = '';
    }
    /**
     * @param {?} form
     * @return {?}
     */
    OrderValueAdapter.prototype.generateFormPayload = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        this.formOrderNodes = [];
        this._setOrderProvider(form);
        this._findTestOrderQuestionNodes(form.rootNode);
        return this._createOrdersPayload(this.formOrderNodes, form);
    };
    /**
     * @param {?} form
     * @param {?} payload
     * @return {?}
     */
    OrderValueAdapter.prototype.populateForm = /**
     * @param {?} form
     * @param {?} payload
     * @return {?}
     */
    function (form, payload) {
        form.existingOrders = payload;
        this.formOrderNodes = [];
        this._findTestOrderQuestionNodes(form.rootNode);
        /** @type {?} */
        var existingOrders = this._getExistingOrders(form);
        this._setOrderValues(this.formOrderNodes, existingOrders);
    };
    /**
     * @private
     * @param {?} form
     * @return {?}
     */
    OrderValueAdapter.prototype._setOrderProvider = /**
     * @private
     * @param {?} form
     * @return {?}
     */
    function (form) {
        if (form.valueProcessingInfo.providerUuid) {
            this.provider = form.valueProcessingInfo.providerUuid;
        }
    };
    /**
     * @private
     * @param {?} orderNodes
     * @param {?} form
     * @return {?}
     */
    OrderValueAdapter.prototype._createOrdersPayload = /**
     * @private
     * @param {?} orderNodes
     * @param {?} form
     * @return {?}
     */
    function (orderNodes, form) {
        /** @type {?} */
        var payload = [];
        /** @type {?} */
        var selectedOrders = [];
        /** @type {?} */
        var deletedOrders = [];
        /** @type {?} */
        var existingOrders = this._getExistingOrders(form);
        var _loop_1 = function (orderNode) {
            /** @type {?} */
            var orderNodeValues = orderNode.control.value;
            /** @type {?} */
            var orders = [];
            if (existingOrders) {
                existingOrders.map((/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    orders[obj.concept] = obj.concept;
                }));
            }
            for (var order in orderNodeValues) {
                if (orderNodeValues.hasOwnProperty(order)) {
                    /** @type {?} */
                    var orderValue = orderNodeValues[order][orderNode.question.key];
                    /** @type {?} */
                    var payloadOrder = this_1._createPayloadOrder(orderValue, orderNode.question.extras);
                    if (orders[orderValue] !== orderValue && payloadOrder.concept !== '') {
                        payload.push(payloadOrder);
                    }
                    selectedOrders[orderValue] = orderValue;
                    if (payloadOrder.orderNumber === '') {
                        delete payloadOrder.orderNumber;
                    }
                    if (payloadOrder.uuid === '') {
                        delete payloadOrder.uuid;
                    }
                }
            }
        };
        var this_1 = this;
        try {
            for (var orderNodes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(orderNodes), orderNodes_1_1 = orderNodes_1.next(); !orderNodes_1_1.done; orderNodes_1_1 = orderNodes_1.next()) {
                var orderNode = orderNodes_1_1.value;
                _loop_1(orderNode);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (orderNodes_1_1 && !orderNodes_1_1.done && (_a = orderNodes_1.return)) _a.call(orderNodes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        deletedOrders = this._getDeletedOrders(selectedOrders, existingOrders);
        return this._addDeletedOrdersToPayload(deletedOrders, payload);
        var e_1, _a;
    };
    /**
     * @private
     * @param {?} form
     * @return {?}
     */
    OrderValueAdapter.prototype._getExistingOrders = /**
     * @private
     * @param {?} form
     * @return {?}
     */
    function (form) {
        if (form.existingOrders && form.existingOrders.orders) {
            /** @type {?} */
            var existingOrders = form.existingOrders.orders.map((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return {
                    concept: o.concept.uuid,
                    orderNumber: o.orderNumber,
                    orderUuid: o.uuid,
                    voided: o.voided,
                    dateVoided: o.auditInfo.dateVoided
                };
            }));
            return existingOrders = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"])(existingOrders, (/**
             * @param {?} order
             * @return {?}
             */
            function (order) {
                if (order.voided === true || order.dateVoided) {
                    return false;
                }
                else {
                    return true;
                }
            }));
        }
        else {
            return;
        }
    };
    /**
     * @private
     * @param {?} node
     * @param {?} existingOrders
     * @return {?}
     */
    OrderValueAdapter.prototype._setOrderValues = /**
     * @private
     * @param {?} node
     * @param {?} existingOrders
     * @return {?}
     */
    function (node, existingOrders) {
        this._findTestOrderQuestionNodes(node);
        /** @type {?} */
        var orderNodes = this.formOrderNodes;
        try {
            for (var orderNodes_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(orderNodes), orderNodes_2_1 = orderNodes_2.next(); !orderNodes_2_1.done; orderNodes_2_1 = orderNodes_2.next()) {
                var orderNode = orderNodes_2_1.value;
                this._setOrderNodeValues(orderNode, existingOrders);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (orderNodes_2_1 && !orderNodes_2_1.done && (_a = orderNodes_2.return)) _a.call(orderNodes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var e_2, _a;
    };
    /**
     * @private
     * @param {?} deletedOrders
     * @param {?} payload
     * @return {?}
     */
    OrderValueAdapter.prototype._addDeletedOrdersToPayload = /**
     * @private
     * @param {?} deletedOrders
     * @param {?} payload
     * @return {?}
     */
    function (deletedOrders, payload) {
        for (var order in deletedOrders) {
            if (deletedOrders.hasOwnProperty(order)) {
                payload.push({ uuid: deletedOrders[order], voided: true });
            }
        }
        return payload;
    };
    /**
     * @private
     * @param {?} orderConcept
     * @param {?} quesitonExtras
     * @return {?}
     */
    OrderValueAdapter.prototype._createPayloadOrder = /**
     * @private
     * @param {?} orderConcept
     * @param {?} quesitonExtras
     * @return {?}
     */
    function (orderConcept, quesitonExtras) {
        /** @type {?} */
        var order = {
            concept: '',
            type: '',
            orderer: '',
            careSetting: ''
        };
        order.concept = orderConcept;
        order.type = quesitonExtras.questionOptions.orderType;
        order.orderer = this.provider;
        order.careSetting = quesitonExtras.questionOptions.orderSettingUuid;
        // delete orderer if provider not provided
        if (order.orderer === '') {
            delete order.orderer;
        }
        return order;
    };
    /**
     * @private
     * @param {?} selectedOrders
     * @param {?} existingOrders
     * @return {?}
     */
    OrderValueAdapter.prototype._getDeletedOrders = /**
     * @private
     * @param {?} selectedOrders
     * @param {?} existingOrders
     * @return {?}
     */
    function (selectedOrders, existingOrders) {
        /** @type {?} */
        var deleteOrders = [];
        if (selectedOrders) {
            for (var order in existingOrders) {
                if (existingOrders.hasOwnProperty(order)) {
                    /** @type {?} */
                    var existingOrderConcept = existingOrders[order].concept;
                    /** @type {?} */
                    var selectedOrder = selectedOrders[existingOrderConcept];
                    if (selectedOrder !== existingOrderConcept) {
                        deleteOrders.push(existingOrders[order].orderUuid);
                    }
                }
            }
        }
        // console.log('Deleted Orders ', deleteOrders);
        return deleteOrders;
    };
    /**
     * @private
     * @param {?} node
     * @param {?} orders
     * @return {?}
     */
    OrderValueAdapter.prototype._setOrderNodeValues = /**
     * @private
     * @param {?} node
     * @param {?} orders
     * @return {?}
     */
    function (node, orders) {
        /** @type {?} */
        var index = 0;
        node['initialValue'] = orders;
        try {
            for (var orders_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(orders), orders_1_1 = orders_1.next(); !orders_1_1.done; orders_1_1 = orders_1.next()) {
                var order = orders_1_1.value;
                node.createChildNode();
                /** @type {?} */
                var value = {};
                value[node.question.key] = order.concept;
                /** @type {?} */
                var childNode = node.children[index];
                childNode.control.setValue(value);
                childNode['initialValue'] = value;
                childNode['orderNumber'] = order.orderNumber;
                // console.log('Set Value', node.children[index].control.value, node, childNode);
                index++;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (orders_1_1 && !orders_1_1.done && (_a = orders_1.return)) _a.call(orders_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var e_3, _a;
    };
    /**
     * @private
     * @param {?} formNode
     * @return {?}
     */
    OrderValueAdapter.prototype._findTestOrderQuestionNodes = /**
     * @private
     * @param {?} formNode
     * @return {?}
     */
    function (formNode) {
        if (formNode.children) {
            if (formNode.children instanceof Object) {
                for (var key in formNode.children) {
                    if (formNode.children.hasOwnProperty(key)) {
                        switch (formNode.children[key].question.renderingType) {
                            case 'page':
                                this._findTestOrderQuestionNodes(formNode.children[key]);
                                break;
                            case 'section':
                                this._findTestOrderQuestionNodes(formNode.children[key]);
                                break;
                            case 'group':
                                this._findTestOrderQuestionNodes(formNode.children[key]);
                                break;
                            case 'repeating':
                                if (formNode.children) {
                                    // tslint:disable-next-line:forin
                                    for (var node in formNode.children) {
                                        /** @type {?} */
                                        var question = formNode.children[node].question;
                                        if (question.extras && question.extras.type === 'testOrder') {
                                            this.formOrderNodes.push(formNode.children[node]);
                                        }
                                    }
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
        }
    };
    OrderValueAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return OrderValueAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$7 = moment__WEBPACK_IMPORTED_MODULE_4__;
var EncounterAdapter = /** @class */ (function () {
    function EncounterAdapter(ordersAdapter, obsAdapter) {
        this.ordersAdapter = ordersAdapter;
        this.obsAdapter = obsAdapter;
    }
    /**
     * @param {?} form
     * @param {?} payload
     * @return {?}
     */
    EncounterAdapter.prototype.populateForm = /**
     * @param {?} form
     * @param {?} payload
     * @return {?}
     */
    function (form, payload) {
        this.populateNode(form.rootNode, payload);
        if (Array.isArray(payload.orders)) {
            this.ordersAdapter.populateForm(form, payload);
        }
        if (Array.isArray(payload.obs)) {
            this.obsAdapter.populateForm(form, payload.obs);
        }
    };
    /**
     * @param {?} rootNode
     * @param {?} payload
     * @return {?}
     */
    EncounterAdapter.prototype.populateNode = /**
     * @param {?} rootNode
     * @param {?} payload
     * @return {?}
     */
    function (rootNode, payload) {
        if (payload === undefined || payload === null) {
            throw new Error('Expected payload');
        }
        /** @type {?} */
        var nodes = this.getEncounterNodes(rootNode);
        nodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            switch (node.question.extras.type) {
                case 'encounterDatetime':
                    if (payload['encounterDatetime']) {
                        // console.log('date', payload['encounterDatetime']);
                        node.control.setValue(moment$7(payload['encounterDatetime']).toDate());
                        node.initialValue = moment$7(payload['encounterDatetime']).toDate();
                    }
                    break;
                case 'encounterProvider':
                    if (Array.isArray(payload['encounterProviders']) && payload['encounterProviders'].length > 0) {
                        /** @type {?} */
                        var firstProvider_1 = payload['encounterProviders'][0].provider;
                        if (firstProvider_1 && firstProvider_1.uuid) {
                            //Very weird work around for an issue with setting the value
                            node.control.setValue(firstProvider_1.uuid);
                            setTimeout((/**
                             * @return {?}
                             */
                            function () {
                                node.control.setValue(firstProvider_1.uuid);
                            }));
                            node.initialValue = firstProvider_1.uuid;
                        }
                    }
                    break;
                case 'encounterLocation':
                    if (payload['location'] && payload['location'].uuid) {
                        node.control.setValue(payload['location'].uuid);
                        node.initialValue = payload['location'].uuid;
                    }
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @param {?} form
     * @return {?}
     */
    EncounterAdapter.prototype.generateFormPayload = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        /** @type {?} */
        var payload = this.generateNodePayload(form.rootNode);
        this.setNonFilledPayloadMembers(form, payload);
        payload['obs'] = this.obsAdapter.generateFormPayload(form) || [];
        payload['orders'] = this.ordersAdapter.generateFormPayload(form) || [];
        return payload;
    };
    /**
     * @param {?} rootNode
     * @return {?}
     */
    EncounterAdapter.prototype.generateNodePayload = /**
     * @param {?} rootNode
     * @return {?}
     */
    function (rootNode) {
        /** @type {?} */
        var nodes = this.getEncounterNodes(rootNode);
        /** @type {?} */
        var payload = {};
        nodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            if (node.control.value !== null &&
                node.control.value !== undefined &&
                node.control.value !== '') {
                switch (node.question.extras.type) {
                    case 'encounterDatetime':
                        /** @type {?} */
                        var dateValue = moment$7(node.control.value)
                            .utcOffset(rootNode.form.valueProcessingInfo.utcOffset || '+0300');
                        payload['encounterDatetime'] = dateValue.format('YYYY-MM-DD HH:mm:ss');
                        break;
                    case 'encounterProvider':
                        if (node.control.value && node.control.value !== '') {
                            /** @type {?} */
                            var providers = [];
                            providers.push({
                                provider: node.control.value,
                                encounterRole: 'a0b03050-c99b-11e0-9572-0800200c9a66' // unknown provider role in the encounter as default
                            });
                            payload['encounterProviders'] = providers;
                        }
                        break;
                    case 'encounterLocation':
                        payload['location'] = node.control.value;
                        break;
                    default:
                        break;
                }
            }
        }));
        return payload;
    };
    /**
     * @param {?} rootNode
     * @return {?}
     */
    EncounterAdapter.prototype.getEncounterNodes = /**
     * @param {?} rootNode
     * @return {?}
     */
    function (rootNode) {
        /** @type {?} */
        var results = [];
        this._getEncounterNodes(rootNode, results);
        return results;
    };
    /**
     * @param {?} form
     * @param {?} payload
     * @return {?}
     */
    EncounterAdapter.prototype.setNonFilledPayloadMembers = /**
     * @param {?} form
     * @param {?} payload
     * @return {?}
     */
    function (form, payload) {
        if (form.valueProcessingInfo.patientUuid) {
            this.setPayloadPatientUuid(payload, form.valueProcessingInfo.patientUuid);
        }
        if (form.valueProcessingInfo.visitUuid) {
            this.setPayloadVisitUuid(payload, form.valueProcessingInfo.visitUuid);
        }
        if (form.valueProcessingInfo.encounterTypeUuid) {
            this.setPayloadEncounterTypeUuid(payload, form.valueProcessingInfo.encounterTypeUuid);
        }
        if (form.valueProcessingInfo.formUuid) {
            this.setPayloadFormUuid(payload, form.valueProcessingInfo.formUuid);
        }
        if (form.valueProcessingInfo.encounterUuid) {
            this.setPayloadEncounterUuid(payload, form.valueProcessingInfo.encounterUuid);
        }
    };
    /**
     * @param {?} payload
     * @param {?} patientUuid
     * @return {?}
     */
    EncounterAdapter.prototype.setPayloadPatientUuid = /**
     * @param {?} payload
     * @param {?} patientUuid
     * @return {?}
     */
    function (payload, patientUuid) {
        payload['patient'] = patientUuid;
    };
    /**
     * @param {?} payload
     * @param {?} visitUuid
     * @return {?}
     */
    EncounterAdapter.prototype.setPayloadVisitUuid = /**
     * @param {?} payload
     * @param {?} visitUuid
     * @return {?}
     */
    function (payload, visitUuid) {
        payload['visit'] = visitUuid;
    };
    /**
     * @param {?} payload
     * @param {?} encounterTypeUuid
     * @return {?}
     */
    EncounterAdapter.prototype.setPayloadEncounterTypeUuid = /**
     * @param {?} payload
     * @param {?} encounterTypeUuid
     * @return {?}
     */
    function (payload, encounterTypeUuid) {
        payload['encounterType'] = encounterTypeUuid;
    };
    /**
     * @param {?} payload
     * @param {?} formUuid
     * @return {?}
     */
    EncounterAdapter.prototype.setPayloadFormUuid = /**
     * @param {?} payload
     * @param {?} formUuid
     * @return {?}
     */
    function (payload, formUuid) {
        payload['form'] = formUuid;
    };
    /**
     * @param {?} payload
     * @param {?} encounterUuid
     * @return {?}
     */
    EncounterAdapter.prototype.setPayloadEncounterUuid = /**
     * @param {?} payload
     * @param {?} encounterUuid
     * @return {?}
     */
    function (payload, encounterUuid) {
        payload['uuid'] = encounterUuid;
    };
    /**
     * @private
     * @param {?} rootNode
     * @param {?} array
     * @return {?}
     */
    EncounterAdapter.prototype._getEncounterNodes = /**
     * @private
     * @param {?} rootNode
     * @param {?} array
     * @return {?}
     */
    function (rootNode, array) {
        var _this = this;
        if (this._isEncounterNode(rootNode)) {
            array.push(rootNode);
        }
        if (rootNode instanceof GroupNode) {
            /** @type {?} */
            var node = (/** @type {?} */ (rootNode));
            // tslint:disable-next-line:forin
            for (var o in node.children) {
                if (node.children[o] instanceof NodeBase) {
                    this._getEncounterNodes(node.children[o], array);
                }
            }
        }
        if (rootNode instanceof ArrayNode) {
            /** @type {?} */
            var node = (/** @type {?} */ (rootNode));
            node.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                _this._getEncounterNodes(child, array);
            }));
        }
    };
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    EncounterAdapter.prototype._isEncounterNode = /**
     * @private
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.question.extras &&
            (node.question.extras.type === 'encounterDatetime' ||
                node.question.extras.type === 'encounterProvider' ||
                node.question.extras.type === 'encounterLocation')) {
            return true;
        }
        return false;
    };
    EncounterAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    EncounterAdapter.ctorParameters = function () { return [
        { type: OrderValueAdapter },
        { type: ObsValueAdapter }
    ]; };
    return EncounterAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PersonAttribuAdapter = /** @class */ (function () {
    function PersonAttribuAdapter() {
    }
    /**
     * @param {?} form
     * @return {?}
     */
    PersonAttribuAdapter.prototype.generateFormPayload = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        return this.generateNodePayload(form.rootNode);
    };
    /**
     * @param {?} rootNode
     * @return {?}
     */
    PersonAttribuAdapter.prototype.generateNodePayload = /**
     * @param {?} rootNode
     * @return {?}
     */
    function (rootNode) {
        /** @type {?} */
        var nodes = this.getPersonAttributeNodes(rootNode);
        /** @type {?} */
        var payload = [];
        nodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            if (node.control.value !== null &&
                node.control.value !== undefined &&
                node.control.value !== '' &&
                node.initialValue !== node.control.value) {
                if (node.question.extras.questionOptions.isSimpleValue === true) {
                    payload.push({
                        attributeType: node.question.extras.questionOptions.attributeType,
                        value: node.control.value
                    });
                }
                else {
                    payload.push({
                        attributeType: node.question.extras.questionOptions.attributeType,
                        hydratedObject: node.control.value
                    });
                }
            }
        }));
        return payload;
    };
    /**
     * @param {?} form
     * @param {?} payload
     * @return {?}
     */
    PersonAttribuAdapter.prototype.populateForm = /**
     * @param {?} form
     * @param {?} payload
     * @return {?}
     */
    function (form, payload) {
        this.populateNode(form.rootNode, payload);
    };
    /**
     * @param {?} rootNode
     * @param {?} payload
     * @return {?}
     */
    PersonAttribuAdapter.prototype.populateNode = /**
     * @param {?} rootNode
     * @param {?} payload
     * @return {?}
     */
    function (rootNode, payload) {
        if (!Array.isArray(payload)) {
            throw new Error('Expected an array of attributes');
        }
        /** @type {?} */
        var nodes = this.getPersonAttributeNodes(rootNode);
        nodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            payload.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                if (element.attributeType.uuid
                    === node.question.extras.questionOptions.attributeType) {
                    if (element.value.uuid) {
                        node.control.setValue(element.value.uuid);
                        node.initialValue = element.value.uuid;
                    }
                    else {
                        node.control.setValue(element.value);
                        node.initialValue = element.value;
                    }
                }
            }));
        }));
    };
    /**
     * @param {?} rootNode
     * @return {?}
     */
    PersonAttribuAdapter.prototype.getPersonAttributeNodes = /**
     * @param {?} rootNode
     * @return {?}
     */
    function (rootNode) {
        /** @type {?} */
        var results = [];
        this._getPersonAttributesNodes(rootNode, results);
        return results;
    };
    /**
     * @private
     * @param {?} rootNode
     * @param {?} array
     * @return {?}
     */
    PersonAttribuAdapter.prototype._getPersonAttributesNodes = /**
     * @private
     * @param {?} rootNode
     * @param {?} array
     * @return {?}
     */
    function (rootNode, array) {
        var _this = this;
        if (rootNode.question.extras &&
            rootNode.question.extras.type === 'personAttribute') {
            array.push(rootNode);
        }
        if (rootNode instanceof GroupNode) {
            /** @type {?} */
            var node = (/** @type {?} */ (rootNode));
            // tslint:disable-next-line:forin
            for (var o in node.children) {
                if (node.children[o] instanceof NodeBase) {
                    this._getPersonAttributesNodes(node.children[o], array);
                }
            }
        }
        if (rootNode instanceof ArrayNode) {
            /** @type {?} */
            var node = (/** @type {?} */ (rootNode));
            node.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                _this._getPersonAttributesNodes(child, array);
            }));
        }
    };
    PersonAttribuAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    PersonAttribuAdapter.ctorParameters = function () { return []; };
    return PersonAttribuAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RemoteSelectComponent = /** @class */ (function () {
    function RemoteSelectComponent(renderer) {
        this.renderer = renderer;
        // @Input() dataSource: DataSource;
        this.placeholder = 'Search...';
        this.items = [];
        this.value = [];
        this.loading = false;
        this.searchText = '';
        this.notFoundMsg = 'match no found';
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.characters = [];
        // the method set in registerOnChange, it is just
        // a placeholder for a method that takes one parameter,
        // we use it to emit changes back to the form
        this.propagateChange = (/**
         * @param {?} change
         * @return {?}
         */
        function (change) { });
    }
    Object.defineProperty(RemoteSelectComponent.prototype, "dataSource", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._dataSource = v;
            if (this._dataSource && this._dataSource.dataFromSourceChanged) {
                this.subscribeToDataSourceDataChanges();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RemoteSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    RemoteSelectComponent.prototype.subscribeToDataSourceDataChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dataSource.dataFromSourceChanged.subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            if (results.length > 0) {
                _this.items = results;
                _this.notFoundMsg = '';
                // console.log('updating items', results, this.selectC.value);
                _this.restoreSelectedValue(_this.selectC.value, results);
            }
            else {
                _this.notFoundMsg = 'Not found';
                _this.items = [];
            }
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RemoteSelectComponent.prototype.typed = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.search(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RemoteSelectComponent.prototype.search = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this.dataSource) {
            this.searchText = value;
            this.notFoundMsg = 'Loading.........';
            this.dataSource.searchOptions(value)
                .subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                if (result.length > 0) {
                    /** @type {?} */
                    var existing = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["map"])(_this.value, lodash__WEBPACK_IMPORTED_MODULE_5__["clone"]);
                    /** @type {?} */
                    var concat = existing.concat(result);
                    _this.items = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["uniqBy"])(concat, 'value');
                }
                _this.notFoundMsg = '';
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.notFoundMsg = 'Errored';
            }));
        }
    };
    /**
     * @param {?} value
     * @param {?} results
     * @return {?}
     */
    RemoteSelectComponent.prototype.restoreSelectedValue = /**
     * @param {?} value
     * @param {?} results
     * @return {?}
     */
    function (value, results) {
        var _this = this;
        /** @type {?} */
        var found = false;
        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["each"])(results, (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.value === value) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.selectC.select(value);
                    _this.selectC.value = value;
                }));
                found = true;
            }
        }));
        if (!found) {
            // console.log('not found after loading items', value, results);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.selectC.select('');
                _this.selectC.value = '';
            }));
        }
    };
    /**
     * @param {?} searchText
     * @return {?}
     */
    RemoteSelectComponent.prototype.canSearch = /**
     * @param {?} searchText
     * @return {?}
     */
    function (searchText) {
        return (searchText.length - this.searchText.length >= 2 ||
            (searchText.length - this.searchText.length <= 2 && searchText !== '')) && this.loading === false;
    };
    // this is the initial value set to the component
    // this is the initial value set to the component
    /**
     * @param {?} value
     * @return {?}
     */
    RemoteSelectComponent.prototype.writeValue = 
    // this is the initial value set to the component
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value && value !== '') {
            if (this.dataSource) {
                this.loading = true;
                this.dataSource.resolveSelectedValue(value).subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    _this.items = [result];
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.selectC.select(result.value);
                        _this.selectC.value = result.value;
                    }));
                    _this.loading = false;
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    _this.loading = false;
                }));
            }
        }
    };
    // registers 'fn' that will be fired when changes are made
    // this is how we emit the changes back to the form
    // registers 'fn' that will be fired when changes are made
    // this is how we emit the changes back to the form
    /**
     * @param {?} fn
     * @return {?}
     */
    RemoteSelectComponent.prototype.registerOnChange = 
    // registers 'fn' that will be fired when changes are made
    // this is how we emit the changes back to the form
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    // not used, used for touch input
    // not used, used for touch input
    /**
     * @return {?}
     */
    RemoteSelectComponent.prototype.registerOnTouched = 
    // not used, used for touch input
    /**
     * @return {?}
     */
    function () { };
    // change events from the textarea
    // change events from the textarea
    /**
     * @param {?} event
     * @return {?}
     */
    RemoteSelectComponent.prototype.onChange = 
    // change events from the textarea
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.propagateChange(event.id);
        // .....
        // update the form
        // this.propagateChange(this.data);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RemoteSelectComponent.prototype.removed = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log('Removed');
        this.propagateChange('');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RemoteSelectComponent.prototype.selected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.propagateChange(event.value);
    };
    RemoteSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'remote-select',
                    template: "<div>\n    <ng-select [id]=\"componentID\" [noFilter]=\"0\" (selected)=\"selected($event)\" (deselected)=\"removed($event)\" [options]=\"items\" [allowClear]=\"true\"\n        [placeholder]=\"placeholder\" [notFoundMsg]=\"notFoundMsg\" (typed)=\"typed($event)\" tabindex=\"0\">\n    </ng-select>\n    <div *ngIf=\"loading\">\n        resolving....\n    </div>\n</div>\n",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return RemoteSelectComponent; })),
                            multi: true,
                        }
                    ]
                },] },
    ];
    RemoteSelectComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    RemoteSelectComponent.propDecorators = {
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        componentID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        done: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selectC: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [SelectComponent,] }],
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return RemoteSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RemoteSelectModule = /** @class */ (function () {
    function RemoteSelectModule() {
    }
    RemoteSelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], SelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                    exports: [RemoteSelectComponent],
                    declarations: [RemoteSelectComponent],
                    providers: [],
                },] },
    ];
    return RemoteSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$8 = moment__WEBPACK_IMPORTED_MODULE_4__;
var AppointmentsOverviewComponent = /** @class */ (function () {
    function AppointmentsOverviewComponent() {
        this.showAppointments = false;
        this.loadingAppointments = false;
        this.errorLoadingAppointments = false;
        this.appointmentsLoaded = false;
        this.appointments = [];
        this.today = '';
    }
    /**
     * @return {?}
     */
    AppointmentsOverviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AppointmentsOverviewComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.node.control.valueChanges.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            _this.resetProperties();
            /** @type {?} */
            var node = _this.node;
            if (node.question.extras.questionOptions.concept
                && (node.question.extras.questionOptions.concept === 'a8a666ba-1350-11df-a1f1-0026b9348838'
                    || node.question.extras.questionOptions.concept === 'a89d2398-1350-11df-a1f1-0026b9348838')) {
                // console.log('what change is here', this.showAppointments);
                if (!_this.showAppointments) {
                    _this.loadingAppointments = true;
                    _this.showAppointments = true;
                    /** @type {?} */
                    var dataSource = void 0;
                    if (node.form && node.form.dataSourcesContainer.dataSources) {
                        dataSource = node.form.dataSourcesContainer.dataSources.monthlyScheduleResourceService;
                    }
                    /** @type {?} */
                    var locationUuid = node.form.dataSourcesContainer.dataSources.userLocation.uuid;
                    if (dataSource && locationUuid) {
                        /** @type {?} */
                        var startDate = moment$8(v).startOf('week').add(1, 'day').format('YYYY-MM-DD');
                        /** @type {?} */
                        var endDate = moment$8(v).endOf('week').subtract(1, 'day').format('YYYY-MM-DD');
                        _this.today = moment$8(v).format('DD-MM-YYYY');
                        // create 5 week days
                        /** @type {?} */
                        var _data_1 = [];
                        /** @type {?} */
                        var programTypes = ['781d85b0-1359-11df-a1f1-0026b9348838', '781d897a-1359-11df-a1f1-0026b9348838',
                            '96047aaf-7ab3-45e9-be6a-b61810fe617d', 'c19aec66-1a40-4588-9b03-b6be55a8dd1d', 'f7793d42-11ac-4cfd-9b35-e0a21a7a7c31',
                            '334c9e98-173f-4454-a8ce-f80b20b7fdf0', '96ba279b-b23b-4e78-aba9-dcbd46a96b7b', '781d8880-1359-11df-a1f1-0026b9348838'];
                        /** @type {?} */
                        var programTypeParams = programTypes.join();
                        for (var i = 1; i <= 5; i++) {
                            _data_1.push({
                                date: moment$8(v).startOf('week').add(i, 'day').format('DD-MM-YYYY'),
                                count: 0
                            });
                        }
                        dataSource.getMonthlySchedule({
                            startDate: startDate,
                            endDate: endDate,
                            limit: 5,
                            locationUuids: locationUuid,
                            programType: programTypeParams
                        }).subscribe((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) {
                            _this.appointmentsLoaded = true;
                            _this.loadingAppointments = false;
                            _data_1.map((/**
                             * @param {?} appointment
                             * @param {?} index
                             * @return {?}
                             */
                            function (appointment, index) {
                                appointment.count = data[index] !== undefined ? data[index].count.scheduled : 0;
                            }));
                            _this.appointments = _data_1;
                        }), (/**
                         * @param {?} error
                         * @return {?}
                         */
                        function (error) {
                            _this.loadingAppointments = false;
                            _this.errorLoadingAppointments = true;
                            _this.showAppointments = false;
                            console.error(error);
                        }));
                    }
                    else {
                        _this.showAppointments = false;
                        _this.errorLoadingAppointments = true;
                    }
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    AppointmentsOverviewComponent.prototype.resetProperties = /**
     * @return {?}
     */
    function () {
        this.loadingAppointments = false;
        this.appointmentsLoaded = false;
        this.errorLoadingAppointments = false;
        this.showAppointments = false;
        this.appointments = [];
        this.today = '';
    };
    AppointmentsOverviewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'appointments-overview',
                    template: "<div *ngIf=\"showAppointments\" class=\"appointments\">\n  <p *ngIf=\"loadingAppointments\">\n    <span *ngIf=\"!appointmentsLoaded && errorLoadingAppointments\">Error checking appointments</span>\n    <span *ngIf=\"loadingAppointments\"><span\n      class=\"fa fa-spinner fa-spin\"></span>Checking appointments...</span>\n  </p>\n  <div *ngIf=\"appointmentsLoaded && !errorLoadingAppointments\">\n    <table *ngIf=\"appointments.length>0\" class=\"table table-stripped table-bordered\">\n      <thead>\n      <tr>\n        <th *ngFor=\"let appointment of appointments\" [ngClass]=\"{'active': appointment.date === today}\">\n          <span>{{appointment.date}}</span>\n        </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td *ngFor=\"let appointment of appointments\"\n            [ngClass]=\"{'active': appointment.date === today}\">\n          <span><strong><em>{{appointment.count}}</em></strong></span>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n",
                    styles: [".appointments{margin-top:12px;font-size:12px;color:#999}.appointments p{padding-top:12px}.appointments th{border-bottom:0!important;color:#333}.appointments td span,.appointments th span{display:block}.appointments td.active,.appointments th.active{background-color:#3c8dbc;color:#fff!important;padding:0}.appointments td.active span,.appointments th.active span{padding:4px}.appointments span.fa{display:inline-block;margin-right:7px}"]
                },] },
    ];
    AppointmentsOverviewComponent.ctorParameters = function () { return []; };
    AppointmentsOverviewComponent.propDecorators = {
        node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AppointmentsOverviewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EncounterViewerService = /** @class */ (function () {
    function EncounterViewerService() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    EncounterViewerService.prototype.resolveSelectedValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return;
    };
    /**
     * @param {?} searchText
     * @return {?}
     */
    EncounterViewerService.prototype.searchOptions = /**
     * @param {?} searchText
     * @return {?}
     */
    function (searchText) {
        return;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    EncounterViewerService.prototype.fileUpload = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    EncounterViewerService.prototype.fetchFile = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return;
    };
    /**
     * @param {?} answerUuid
     * @param {?} schema
     * @return {?}
     */
    EncounterViewerService.prototype.resolveSelectedValueFromSchema = /**
     * @param {?} answerUuid
     * @param {?} schema
     * @return {?}
     */
    function (answerUuid, schema) {
        var _this = this;
        /** @type {?} */
        var label;
        if (schema.pages) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(schema.pages, (/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                /** @type {?} */
                var l = _this.resolveSelectedValueFromSchema(answerUuid, page);
                if (l) {
                    label = l;
                }
            }));
        }
        if (schema.sections) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(schema.sections, (/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                /** @type {?} */
                var l = _this.resolveSelectedValueFromSchema(answerUuid, section);
                if (l) {
                    label = l;
                }
            }));
        }
        if (schema.questions) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(schema.questions, (/**
             * @param {?} question
             * @return {?}
             */
            function (question) {
                if (question.questions) {
                    /** @type {?} */
                    var l = _this.resolveSelectedValueFromSchema(answerUuid, question);
                    if (l) {
                        label = l;
                    }
                }
                else {
                    if (question.questionOptions.answers) {
                        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(question.questionOptions.answers, (/**
                         * @param {?} answer
                         * @return {?}
                         */
                        function (answer) {
                            if (answer.concept === answerUuid) {
                                label = answer.label;
                            }
                        }));
                    }
                    else if (question.questionOptions.selectableOrders) {
                        Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(question.questionOptions.selectableOrders, (/**
                         * @param {?} order
                         * @return {?}
                         */
                        function (order) {
                            if (order.concept === answerUuid) {
                                label = order.label;
                            }
                        }));
                    }
                }
            }));
        }
        return label;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    EncounterViewerService.prototype.hasAnswer = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var answered = false;
        if (node.initialValue) {
            answered = true;
        }
        return answered;
    };
    /**
     * @param {?} node
     * @param {?=} answered
     * @return {?}
     */
    EncounterViewerService.prototype.questionsAnswered = /**
     * @param {?} node
     * @param {?=} answered
     * @return {?}
     */
    function (node, answered) {
        var _this = this;
        /** @type {?} */
        var $answered = answered || [];
        if (node.question.renderingType === 'page') {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(node.children, (/**
             * @param {?} childNode
             * @return {?}
             */
            function (childNode) {
                _this.questionsAnswered(childNode, $answered);
            }));
        }
        else if (node.question.renderingType === 'section') {
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(node.children, (/**
             * @param {?} childNode
             * @return {?}
             */
            function (childNode) {
                if (childNode.question.renderingType === 'group') {
                    Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(childNode.children, (/**
                     * @param {?} child
                     * @return {?}
                     */
                    function (child) {
                        /** @type {?} */
                        var ans = _this.questionsAnswered(child, $answered);
                        if (ans) {
                            $answered.push(ans);
                        }
                    }));
                }
                else if (_this.hasAnswer(childNode)) {
                    $answered.push(true);
                }
            }));
        }
        else {
            return this.hasAnswer(node);
        }
        if ($answered.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    EncounterViewerService.prototype.isDate = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (Date.parse(val)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} unixTimestamp
     * @return {?}
     */
    EncounterViewerService.prototype.convertTime = /**
     * @param {?} unixTimestamp
     * @return {?}
     */
    function (unixTimestamp) {
        /** @type {?} */
        var a = new Date(unixTimestamp);
        /** @type {?} */
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
            'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        /** @type {?} */
        var year = a.getFullYear();
        /** @type {?} */
        var month = months[a.getMonth()];
        /** @type {?} */
        var date = a.getDate();
        /** @type {?} */
        var hour = a.getHours();
        /** @type {?} */
        var min = a.getMinutes();
        /** @type {?} */
        var sec = a.getSeconds();
        /** @type {?} */
        var suffix = hour < 12 ? 'AM' : 'PM';
        /** @type {?} */
        var time;
        if (hour === 0 && min === 0) {
            time = date + ' ' + month + ' ' + year;
        }
        else {
            time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + suffix + ' (EAT)';
        }
        return time;
    };
    EncounterViewerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    EncounterViewerService.ctorParameters = function () { return []; };
    return EncounterViewerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            for (var pages_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
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
        if (this.rootNode) ;
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
            for (var nodes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
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
        parentGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        parentComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        encounter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return EncounterViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment$9 = moment__WEBPACK_IMPORTED_MODULE_4__;
var EncounterPdfViewerService = /** @class */ (function () {
    function EncounterPdfViewerService(encounterViewerService, obsValueAdapter, dataSources) {
        this.encounterViewerService = encounterViewerService;
        this.obsValueAdapter = obsValueAdapter;
        this.dataSources = dataSources;
        this.subscribedAnswers = {
            questions: {
                stack: []
            },
            answers: []
        };
    }
    /**
     * @param {?} pages
     * @param {?} form
     * @param {?=} remoteSelectsOnly
     * @param {?=} remoteAns
     * @return {?}
     */
    EncounterPdfViewerService.prototype.getPages = /**
     * @param {?} pages
     * @param {?} form
     * @param {?=} remoteSelectsOnly
     * @param {?=} remoteAns
     * @return {?}
     */
    function (pages, form, remoteSelectsOnly, remoteAns) {
        /** @type {?} */
        var content = [];
        /** @type {?} */
        var remoteQuestions = [];
        try {
            for (var pages_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
                var page = pages_1_1.value;
                if (remoteSelectsOnly) {
                    remoteQuestions = remoteQuestions.concat(this.getSections(page.page, form, false, remoteAns));
                }
                else {
                    try {
                        for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(form.rootNode.question.questions), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var question = _b.value;
                            if (page.label === form.rootNode.children[question.key].question.label &&
                                this.encounterViewerService.questionsAnswered(form.rootNode.children[question.key])) {
                                content.push({
                                    style: 'tableExample',
                                    table: {
                                        widths: ['*'],
                                        headerRows: 1,
                                        keepWithHeaderRows: 1,
                                        body: [
                                            [{ text: page.label, style: 'tableHeader' }],
                                            [
                                                {
                                                    style: 'tableExample',
                                                    table: {
                                                        widths: ['*'],
                                                        body: this.getSections(page.page, form, true, remoteAns)
                                                    },
                                                    layout: 'noBorders',
                                                    margin: [5, 0, 0, 0]
                                                }
                                            ]
                                        ]
                                    },
                                    layout: {
                                        hLineWidth: (/**
                                         * @param {?} i
                                         * @param {?} node
                                         * @return {?}
                                         */
                                        function (i, node) {
                                            return (i === 0 || i === node.table.body.length) ? 0.5 : 0.5;
                                        }),
                                        vLineWidth: (/**
                                         * @param {?} i
                                         * @param {?} node
                                         * @return {?}
                                         */
                                        function (i, node) {
                                            return (i === 0 || i === node.table.widths.length) ? 0.5 : 0.5;
                                        }),
                                        hLineColor: (/**
                                         * @param {?} i
                                         * @param {?} node
                                         * @return {?}
                                         */
                                        function (i, node) {
                                            return (i === 0 || i === node.table.body.length) ? '#ddd' : '#ddd';
                                        }),
                                        vLineColor: (/**
                                         * @param {?} i
                                         * @param {?} node
                                         * @return {?}
                                         */
                                        function (i, node) {
                                            return (i === 0 || i === node.table.body.length) ? '#ddd' : '#ddd';
                                        })
                                    }
                                });
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (pages_1_1 && !pages_1_1.done && (_d = pages_1.return)) _d.call(pages_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return remoteSelectsOnly ? remoteQuestions : content;
        var e_2, _d, e_1, _c;
    };
    /**
     * @param {?} sections
     * @param {?} form
     * @param {?} resolve
     * @param {?} remoteAns
     * @return {?}
     */
    EncounterPdfViewerService.prototype.getSections = /**
     * @param {?} sections
     * @param {?} form
     * @param {?} resolve
     * @param {?} remoteAns
     * @return {?}
     */
    function (sections, form, resolve, remoteAns) {
        var _this = this;
        /** @type {?} */
        var content = [];
        /** @type {?} */
        var answeredSections = [];
        /** @type {?} */
        var questions = [];
        sections.map((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            if (_this.encounterViewerService.questionsAnswered(s.node)) {
                answeredSections.push(s);
            }
        }));
        try {
            for (var answeredSections_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(answeredSections), answeredSections_1_1 = answeredSections_1.next(); !answeredSections_1_1.done; answeredSections_1_1 = answeredSections_1.next()) {
                var section = answeredSections_1_1.value;
                questions = questions.concat(this.getRemoteSectionData(section.section));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (answeredSections_1_1 && !answeredSections_1_1.done && (_a = answeredSections_1.return)) _a.call(answeredSections_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (resolve && remoteAns) {
            try {
                for (var answeredSections_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(answeredSections), answeredSections_2_1 = answeredSections_2.next(); !answeredSections_2_1.done; answeredSections_2_1 = answeredSections_2.next()) {
                    var section = answeredSections_2_1.value;
                    content.push([
                        {
                            table: {
                                widths: ['*'],
                                body: [
                                    [{ text: section.label, style: 'tableSubheader' }],
                                    [this.getSectionData(section.section, remoteAns, form)]
                                ]
                            },
                            layout: 'noBorders'
                        }
                    ]);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (answeredSections_2_1 && !answeredSections_2_1.done && (_b = answeredSections_2.return)) _b.call(answeredSections_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return content;
        }
        else {
            return questions;
        }
        var e_3, _a, e_4, _b;
    };
    /**
     * @private
     * @param {?} resolvedAnswer
     * @param {?} questions
     * @param {?=} node
     * @return {?}
     */
    EncounterPdfViewerService.prototype.appendResolvedAnswer = /**
     * @private
     * @param {?} resolvedAnswer
     * @param {?} questions
     * @param {?=} node
     * @return {?}
     */
    function (resolvedAnswer, questions, node) {
        if (resolvedAnswer) {
            questions.stack.push({
                text: [
                    "" + ((node) ? node.question.label : 'Question label') + ((node) ? (node.question.label.indexOf(':') > 1 ? '' : ':') : '') + " ",
                    { text: "" + resolvedAnswer, bold: true }
                ], style: 'answers'
            });
        }
    };
    // get remote selects only
    // get remote selects only
    /**
     * @param {?} section
     * @return {?}
     */
    EncounterPdfViewerService.prototype.getRemoteSectionData = 
    // get remote selects only
    /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var questions = [];
        this.subscribedAnswers.questions.stack = [];
        try {
            for (var section_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(section), section_1_1 = section_1.next(); !section_1_1.done; section_1_1 = section_1.next()) {
                var node = section_1_1.value;
                if (node.question.renderingType === 'remote-select') {
                    this.remoteDataSource = this.dataSources.dataSources[node.question.dataSource];
                    if (node.control.value !== '') {
                        if (this.remoteDataSource) {
                            questions.push(this.remoteDataSource.resolveSelectedValue(node.control.value));
                        }
                    }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (section_1_1 && !section_1_1.done && (_a = section_1.return)) _a.call(section_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return questions;
        var e_5, _a;
    };
    // merge remote selects
    // merge remote selects
    /**
     * @param {?} section
     * @param {?} remoteAns
     * @param {?} form
     * @return {?}
     */
    EncounterPdfViewerService.prototype.getSectionData = 
    // merge remote selects
    /**
     * @param {?} section
     * @param {?} remoteAns
     * @param {?} form
     * @return {?}
     */
    function (section, remoteAns, form) {
        /** @type {?} */
        var questions = {
            stack: []
        };
        /** @type {?} */
        var resolvedAnswer = '';
        var _loop_1 = function (node) {
            switch (node.question.renderingType) {
                case 'group':
                    if (node.groupMembers) {
                        questions.stack.push(this_1.getSectionData(node.groupMembers, remoteAns, form));
                    }
                    break;
                case 'field-set':
                    if (node.children) {
                        /** @type {?} */
                        var groupMembers = [];
                        /** @type {?} */
                        var result = Object.keys(node.children).map((/**
                         * @param {?} key
                         * @return {?}
                         */
                        function (key) { return node.children[key]; }));
                        if (result) {
                            groupMembers.push(result);
                            questions.stack.push(this_1.getSectionData(groupMembers[0], remoteAns, form));
                        }
                    }
                    break;
                case 'repeating':
                    if (node.groupMembers) {
                        questions.stack.push(this_1.getSectionData(node.groupMembers, remoteAns, form));
                    }
                    break;
                case 'remote-select':
                    this_1.remoteDataSource = this_1.dataSources.dataSources[node.question.dataSource];
                    try {
                        for (var remoteAns_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(remoteAns), remoteAns_1_1 = remoteAns_1.next(); !remoteAns_1_1.done; remoteAns_1_1 = remoteAns_1.next()) {
                            var ans = remoteAns_1_1.value;
                            if (ans.value === node.control.value) {
                                this_1.appendResolvedAnswer(ans.label, questions, node);
                            }
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (remoteAns_1_1 && !remoteAns_1_1.done && (_a = remoteAns_1.return)) _a.call(remoteAns_1);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                    break;
                default:
                    /** @type {?} */
                    var answer = node.control.value;
                    if (answer) {
                        resolvedAnswer = this_1.resolveValue(answer, form);
                        this_1.appendResolvedAnswer(resolvedAnswer, questions, node);
                    }
            }
            var e_6, _a;
        };
        var this_1 = this;
        try {
            for (var section_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(section), section_2_1 = section_2.next(); !section_2_1.done; section_2_1 = section_2.next()) {
                var node = section_2_1.value;
                _loop_1(node);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (section_2_1 && !section_2_1.done && (_a = section_2.return)) _a.call(section_2);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return questions;
        var e_7, _a;
    };
    /**
     * @param {?} answer
     * @param {?} form
     * @param {?=} arrayElement
     * @return {?}
     */
    EncounterPdfViewerService.prototype.resolveValue = /**
     * @param {?} answer
     * @param {?} form
     * @param {?=} arrayElement
     * @return {?}
     */
    function (answer, form, arrayElement) {
        var _this = this;
        if (answer !== '') {
            if (this.isUuid(answer)) {
                /** @type {?} */
                var val = this.encounterViewerService.resolveSelectedValueFromSchema(answer, form.schema);
                if (!arrayElement) {
                    if (val) {
                        return val.toUpperCase();
                    }
                    else {
                        return answer;
                    }
                }
                else {
                    return val;
                }
            }
            else if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(answer)) {
                /** @type {?} */
                var arr_1 = [];
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(answer, (/**
                 * @param {?} elem
                 * @return {?}
                 */
                function (elem) {
                    arr_1.push(_this.resolveValue(elem, form, true));
                }));
                return arr_1.toString();
            }
            else if (this.isDate(answer)) {
                if (!arrayElement) {
                    return this.encounterViewerService.convertTime(answer);
                }
                else {
                    return this.encounterViewerService.convertTime(answer);
                }
            }
            else if (typeof answer === 'object') {
                /** @type {?} */
                var values = [];
                /** @type {?} */
                var result = Object.keys(answer).map((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return [key, answer[key]]; }));
                values.push(result);
                return values;
            }
            else {
                return answer;
            }
        }
    };
    /**
     * @param {?} form
     * @return {?}
     */
    EncounterPdfViewerService.prototype.generatePdfDefinition = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        var _this = this;
        /** @type {?} */
        var docDefinition$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        /** @type {?} */
        var remoteSelects = this.getPages((this.obsValueAdapter.traverse(form.rootNode)), form, true);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(remoteSelects).subscribe((/**
         * @param {?} remoteAns
         * @return {?}
         */
        function (remoteAns) {
            if (remoteAns) {
                /** @type {?} */
                var docDefinition = {
                    pageSize: 'A4',
                    content: _this.getPages(_this.obsValueAdapter.traverse(form.rootNode), form, false, remoteAns),
                    styles: {
                        answers: {
                            fontSize: 8
                        },
                        banner: {
                            fontSize: 9,
                            bold: true,
                            margin: [50, 15, 30, 0]
                        },
                        bannerItem: {
                            margin: [2, 2, 2, 2]
                        },
                        bannerLabel: {
                            color: '#2f4f4f'
                        },
                        confidential: {
                            color: 'red',
                            fontSize: 8,
                            bold: true,
                            margin: [60, 0, 0, 0]
                        },
                        footer: {
                            alignment: 'center',
                            fontSize: 8,
                            bold: true
                        },
                        header: {
                            fontSize: 9,
                            bold: true,
                            margin: [5, 5, 5, 5]
                        },
                        pageNumber: {
                            color: '#2f4f4f',
                            fontSize: 6
                        },
                        tableExample: {
                            fontSize: 10,
                            margin: [5, 0, 0, 5]
                        },
                        tableHeader: {
                            fillColor: '#f5f5f5',
                            width: ['100%'],
                            borderColor: '#333',
                            fontSize: 9,
                            bold: true,
                            margin: [5, 0, 5, 0]
                        },
                        tableSubheader: {
                            fillColor: '#337ab7',
                            width: ['100%'],
                            fontSize: 9,
                            color: 'white',
                            margin: [5, 0, 5, 0]
                        },
                        timestamp: {
                            bold: true,
                            color: '#2f4f4f'
                        }
                    },
                    defaultStyle: {
                        fontSize: 7
                    }
                };
                docDefinition$.next(docDefinition);
            }
        }));
        return docDefinition$;
    };
    /**
     * @param {?} form
     * @return {?}
     */
    EncounterPdfViewerService.prototype.displayPdf = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        var _this = this;
        /** @type {?} */
        var pdf = pdfmake_build_pdfmake_js__WEBPACK_IMPORTED_MODULE_16__;
        /** @type {?} */
        var patient;
        pdf.vfs = pdfmake_build_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_17__["pdfMake"].vfs;
        if (form.dataSourcesContainer.dataSources._dataSources) {
            patient = form.dataSourcesContainer.dataSources._dataSources['patientInfo'];
        }
        this.generatePdfDefinition(form).subscribe((/**
         * @param {?} docDefinition
         * @return {?}
         */
        function (docDefinition) {
            if (!(Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(docDefinition))) {
                if (typeof patient !== 'undefined') {
                    /** @type {?} */
                    var banner = [];
                    if (patient.name) {
                        banner.push({
                            text: [
                                { text: 'Name: ', style: 'bannerLabel' },
                                { text: "" + _this.titleize(patient.name) }
                            ],
                            style: 'bannerItem'
                        });
                    }
                    if (patient.nid) {
                        banner.push({
                            text: [
                                { text: 'ID: ', style: 'bannerLabel' },
                                { text: "" + patient.nid }
                            ],
                            style: 'bannerItem'
                        });
                    }
                    if (patient.birthdate) {
                        banner.push({
                            text: [
                                { text: 'DOB: ', style: 'bannerLabel' },
                                { text: moment$9(patient.birthdate).format('l') + " (" + patient.age + " yo)" }
                            ],
                            style: 'bannerItem'
                        });
                    }
                    if (patient.mui) {
                        banner.push({
                            text: [
                                { text: 'MUI: ', style: 'bannerLabel' },
                                { text: "" + patient.mui }
                            ],
                            style: 'bannerItem'
                        });
                    }
                    if (patient.mhn) {
                        banner.push({
                            text: [
                                { text: 'MTRH No: ', style: 'bannerLabel' },
                                { text: "" + patient.mhn }
                            ],
                            style: 'bannerItem'
                        });
                    }
                    docDefinition.header = {
                        style: 'banner',
                        table: {
                            body: [banner]
                        },
                        layout: 'noBorders'
                    };
                }
                docDefinition.footer = (/**
                 * @param {?} currentPage
                 * @param {?} pageCount
                 * @return {?}
                 */
                function (currentPage, pageCount) {
                    return {
                        style: 'footer',
                        widths: ['*', 'auto'],
                        table: {
                            body: [
                                [
                                    {
                                        text: 'Note: Confidentiality is one of the core duties of all medical practitioners. '
                                            + 'Patients\' personal health information should be kept private.', style: 'confidential'
                                    }, ''
                                ],
                                [
                                    { text: "Generated on " + new Date().toUTCString(), style: 'timestamp' },
                                    { text: currentPage.toString() + " of " + pageCount, style: 'pageNumber' }
                                ],
                            ]
                        },
                        layout: 'noBorders'
                    };
                });
                /** @type {?} */
                var win = window.open('', '_blank');
                pdf.createPdf(docDefinition).open({}, win);
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log('Error: ', error);
        }));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    EncounterPdfViewerService.prototype.isDate = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return moment$9(val, moment$9.ISO_8601, true).isValid();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EncounterPdfViewerService.prototype.isUuid = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (value.length === 36 && value.indexOf(' ') === -1 && value.indexOf('.') === -1);
    };
    /**
     * @param {?} str
     * @return {?}
     */
    EncounterPdfViewerService.prototype.titleize = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/\w\S*/g, (/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase(); }));
    };
    EncounterPdfViewerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    EncounterPdfViewerService.ctorParameters = function () { return [
        { type: EncounterViewerService },
        { type: ObsValueAdapter },
        { type: DataSources }
    ]; };
    /** @nocollapse */ EncounterPdfViewerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function EncounterPdfViewerService_Factory() { return new EncounterPdfViewerService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(EncounterViewerService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(ObsValueAdapter), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(DataSources)); }, token: EncounterPdfViewerService, providedIn: "root" });
    return EncounterPdfViewerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EncounterContainerComponent = /** @class */ (function () {
    function EncounterContainerComponent(encAdapter, encounterPdfViewerService) {
        this.encAdapter = encAdapter;
        this.encounterPdfViewerService = encounterPdfViewerService;
    }
    Object.defineProperty(EncounterContainerComponent.prototype, "form", {
        set: /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            this.$form = form;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncounterContainerComponent.prototype, "encounter", {
        set: /**
         * @param {?} enc
         * @return {?}
         */
        function (enc) {
            this.$enc = enc;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EncounterContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    EncounterContainerComponent.prototype.displayPdf = /**
     * @return {?}
     */
    function () {
        this.encounterPdfViewerService.displayPdf(this.$form);
    };
    EncounterContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'encounter-renderer',
                    template: "<a type=\"button\" style=\"display: block; font-size: 28px; cursor: pointer\" class=\"text-right\" (click)=\"displayPdf()\">\n  <span class=\"glyphicon text-primary glyphicon-print\"></span>\n</a>\n<encounter-viewer class=\"card\" [form]=\"$form\" [encounter]=\"$enc\"></encounter-viewer>",
                    styles: [".card{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
                },] },
    ];
    EncounterContainerComponent.ctorParameters = function () { return [
        { type: EncounterAdapter },
        { type: EncounterPdfViewerService }
    ]; };
    EncounterContainerComponent.propDecorators = {
        form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        encounter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return EncounterContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var QuestionControlComponent = /** @class */ (function () {
    function QuestionControlComponent() {
        // The internal data model
        this.innerValue = '';
    }
    Object.defineProperty(QuestionControlComponent.prototype, "schema", {
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
    Object.defineProperty(QuestionControlComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionControlComponent.prototype, "dataSource", {
        set: /**
         * @param {?} dataSource
         * @return {?}
         */
        function (dataSource) {
            this._dataSource = dataSource;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    QuestionControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.writeValue(this._value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    QuestionControlComponent.prototype.isUuid = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value.length === 36 && value.indexOf(' ') === -1 && value.indexOf('.') === -1) {
            return true;
        }
        else {
            return false;
        }
    };
    // Current time string.
    // Current time string.
    /**
     * @param {?} v
     * @param {?=} arrayElement
     * @return {?}
     */
    QuestionControlComponent.prototype.writeValue = 
    // Current time string.
    /**
     * @param {?} v
     * @param {?=} arrayElement
     * @return {?}
     */
    function (v, arrayElement) {
        var _this = this;
        if (v !== this.innerValue) {
            if (this.isUuid(v)) {
                if (!arrayElement) {
                    /** @type {?} */
                    var val = this._dataSource.resolveSelectedValueFromSchema(v, this._schema);
                    if (val) {
                        this.innerValue = val.toUpperCase();
                    }
                    else {
                        this.innerValue = v;
                    }
                }
                else {
                    return this._dataSource.resolveSelectedValueFromSchema(v, this._schema);
                }
            }
            else if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(v)) {
                /** @type {?} */
                var arr_1 = [];
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"])(v, (/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) {
                    arr_1.push(_this.writeValue(el, true));
                }));
                this.innerValue = arr_1;
            }
            else if (this.isDate(v)) {
                if (!arrayElement) {
                    this.innerValue = this._dataSource.convertTime(v);
                }
                else {
                    return this._dataSource.convertTime(v);
                }
            }
            else {
                if (!arrayElement) {
                    this.innerValue = v;
                }
                else {
                    return v;
                }
            }
        }
    };
    /**
     * @param {?} str
     * @return {?}
     */
    QuestionControlComponent.prototype.isDate = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return this._dataSource.isDate(str) && !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNumber"])(str);
    };
    QuestionControlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'question-control',
                    styles: ["input{border:none;box-shadow:none;color:#000;background:#fff!important;padding-top:23px;display:block;position:relative}"],
                    template: "<div>\n    {{innerValue}}\n</div>",
                },] },
    ];
    QuestionControlComponent.ctorParameters = function () { return []; };
    QuestionControlComponent.propDecorators = {
        schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return QuestionControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var noop = (/**
 * @return {?}
 */
function () { });
var FilePreviewComponent = /** @class */ (function () {
    function FilePreviewComponent(encounterService) {
        this.encounterService = encounterService;
        this.innerValue = null;
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(FilePreviewComponent.prototype, "dataSource", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._dataSource = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilePreviewComponent.prototype, "value", {
        // get accessor
        get: 
        // get accessor
        /**
         * @return {?}
         */
        function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: 
        // set accessor including call the onchange callback
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    // Current time string.
    // Current time string.
    /**
     * @param {?} v
     * @return {?}
     */
    FilePreviewComponent.prototype.writeValue = 
    // Current time string.
    /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
        }
    };
    // From ControlValueAccessor interface
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    FilePreviewComponent.prototype.registerOnChange = 
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    FilePreviewComponent.prototype.registerOnTouched = 
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    FilePreviewComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouchedCallback();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FilePreviewComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // const files = event.srcElement.files;
        // const fileToLoad = files[0];
        // const fileReader = new FileReader();
        // fileReader.onload = (fileLoadedEvent) => {
        //   const data = fileReader.result;
        //   const fileType = data.substring('data:image/'.length, data.indexOf(';base64'));
        //   const payload = {
        //     data,
        //     extension: fileType
        //   };
        // };
        // fileReader.readAsDataURL(fileToLoad);
    };
    FilePreviewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'file-preview',
                    styles: [""],
                    template: "<div *ngIf=\"innerValue\">\n              <img class=\"img-responsive\"\n                [src]=\"innerValue | secure:this._dataSource.fetchFile\" alt=\"image\" />\n                </div>",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return FilePreviewComponent; })),
                            multi: true
                        }
                    ]
                },] },
    ];
    FilePreviewComponent.ctorParameters = function () { return [
        { type: EncounterViewerService }
    ]; };
    FilePreviewComponent.propDecorators = {
        source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FilePreviewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var noop$1 = (/**
 * @return {?}
 */
function () { });
var RemoteAnswerComponent = /** @class */ (function () {
    function RemoteAnswerComponent() {
        this.innerValue = null;
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop$1;
        this.onChangeCallback = noop$1;
    }
    Object.defineProperty(RemoteAnswerComponent.prototype, "dataSource", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._dataSource = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoteAnswerComponent.prototype, "value", {
        // get accessor
        get: 
        // get accessor
        /**
         * @return {?}
         */
        function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: 
        // set accessor including call the onchange callback
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    // Current time string.
    // Current time string.
    /**
     * @param {?} v
     * @return {?}
     */
    RemoteAnswerComponent.prototype.writeValue = 
    // Current time string.
    /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        var _this = this;
        if (v !== this.innerValue) {
            if (this._dataSource) {
                this._dataSource.resolveSelectedValue(v).subscribe((/**
                 * @param {?} ans
                 * @return {?}
                 */
                function (ans) {
                    _this.innerValue = ans.label;
                }));
            }
            else {
                this.innerValue = v;
            }
        }
    };
    // From ControlValueAccessor interface
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    RemoteAnswerComponent.prototype.registerOnChange = 
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    RemoteAnswerComponent.prototype.registerOnTouched = 
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    RemoteAnswerComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouchedCallback();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RemoteAnswerComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    RemoteAnswerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'remote-answer',
                    styles: [],
                    template: "\n    <div *ngIf=\"innerValue\">\n      {{innerValue}}\n      </div>\n",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return RemoteAnswerComponent; })),
                            multi: true
                        }
                    ]
                },] },
    ];
    RemoteAnswerComponent.ctorParameters = function () { return []; };
    RemoteAnswerComponent.propDecorators = {
        source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return RemoteAnswerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EncounterViewerModule = /** @class */ (function () {
    function EncounterViewerModule() {
    }
    EncounterViewerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        EncounterViewerComponent,
                        EncounterContainerComponent,
                        QuestionControlComponent,
                        FilePreviewComponent,
                        RemoteAnswerComponent
                    ],
                    imports: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                        _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"],
                        SharedModule
                    ],
                    providers: [
                        EncounterViewerService,
                        EncounterPdfViewerService
                    ],
                    exports: [
                        EncounterContainerComponent,
                        _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"]
                    ],
                },] },
    ];
    return EncounterViewerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxControlComponent = /** @class */ (function () {
    function CheckboxControlComponent() {
        this._value = [];
        this.onChange = (/**
         * @param {?} change
         * @return {?}
         */
        function (change) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    CheckboxControlComponent.prototype.getDisplay = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (options < 3) {
            return 'inline-block';
        }
        else {
            return 'block';
        }
    };
    /**
     * @return {?}
     */
    CheckboxControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    CheckboxControlComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxControlComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    Object.defineProperty(CheckboxControlComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._value.length === 0) {
                return '';
            }
            else {
                return this._value || this._value[0];
            }
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (typeof v === 'undefined' || v === null || v === '') {
                v = [];
            }
            else if (typeof v === 'string') {
                v = [v];
            }
            else if (!Array.isArray(v)) {
                throw new TypeError('Value must be a string or an array.');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @param {?} event
     * @return {?}
     */
    CheckboxControlComponent.prototype.selectOpt = /**
     * @param {?} option
     * @param {?} event
     * @return {?}
     */
    function (option, event) {
        var _this = this;
        if (event.target.checked) {
            this._value.push(option.value);
        }
        else {
            this.options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                if (o.value === option.value) {
                    _this._value.splice(o, 1);
                }
            }));
        }
        this.onChange(this.value);
    };
    CheckboxControlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'checkbox',
                    template: "\n<div *ngFor=\"let option of options; let i = index;\" [style.display]=\"getDisplay(options.length)\">\n    <label >\n        <input type=\"checkbox\"  id=\"i + 'id'\" (change)=\"selectOpt(option, $event)\" value=\"option.value\">\n        {{ option.label }} \n    </label>\n</div>",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return CheckboxControlComponent; })),
                            multi: true,
                        }
                    ],
                    styles: ["\n  .no-border {\n    border: 0;\n    box-shadow: none;\n  }\n  div {\n    width: 50%;\n    margin-bottom: 5px;\n    max-width: 100%;\n}\n"]
                },] },
    ];
    CheckboxControlComponent.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CheckboxControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        CheckboxControlComponent
                    ],
                    exports: [
                        CheckboxControlComponent
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
                },] },
    ];
    return CheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormEntryModule = /** @class */ (function () {
    function FormEntryModule() {
    }
    FormEntryModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__["CollapseModule"],
                        // NgSelectModule,
                        SelectModule,
                        DateTimePickerModule,
                        RemoteSelectModule,
                        // NoopAnimationsModule,
                        RemoteFileUploadModule,
                        EncounterViewerModule,
                        CheckboxModule,
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                        NgxDateTimePickerModule,
                        SharedModule
                    ],
                    declarations: [
                        FormRendererComponent,
                        AfeNgSelectComponent,
                        AppointmentsOverviewComponent,
                        HistoricalValueDirective,
                        ErrorRendererComponent,
                        time_ago_pipe__WEBPACK_IMPORTED_MODULE_20__["TimeAgoPipe"]
                    ],
                    providers: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
                        FormControlService,
                        FormErrorsService,
                        ValidationFactory,
                        HidersDisablersFactory,
                        AlertsFactory,
                        ExpressionRunner,
                        JsExpressionHelper,
                        HistoricalFieldHelperService,
                        FormSchemaCompiler,
                        FormFactory,
                        QuestionFactory,
                        ValidationFactory,
                        ControlRelationsFactory,
                        ObsAdapterHelper,
                        ObsValueAdapter,
                        EncounterAdapter,
                        PersonAttribuAdapter,
                        OrderValueAdapter,
                        DebugModeService
                    ],
                    exports: [FormRendererComponent, AfeNgSelectComponent,
                        ErrorRendererComponent, DateTimePickerModule, EncounterViewerModule, NgxDateTimePickerModule]
                },] },
    ];
    return FormEntryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Pair = /** @class */ (function () {
    function Pair(key, value) {
        this.key = key;
        this.value = value;
    }
    return Pair;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var RenderingType = {
    Form: 0,
    Page: 1,
    Section: 2,
    Select: 3,
    DropDown: 4,
};
RenderingType[RenderingType.Form] = 'Form';
RenderingType[RenderingType.Page] = 'Page';
RenderingType[RenderingType.Section] = 'Section';
RenderingType[RenderingType.Select] = 'Select';
RenderingType[RenderingType.DropDown] = 'DropDown';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adult-1.4.json":
/*!********************************!*\
  !*** ./src/app/adult-1.4.json ***!
  \********************************/
/*! exports provided: uuid, display, name, description, encounterType, version, build, published, formFields, retired, auditInfo, resources, links, resourceVersion, pages, referencedForms, processor, default */
/***/ (function(module) {

module.exports = {"uuid":"bcb914ea-1e03-4c7f-9fd5-1baba5841e78","display":"AMPATH POC Adult Return Visit Form v1.4","name":"AMPATH POC Adult Return Visit Form v1.4","description":"AMPATH POC Adult Return Visit Form v1.4","encounterType":{"uuid":"8d5b2be0-c2cc-11de-8d13-0010c6dffd0f","display":"ADULTRETURN","name":"ADULTRETURN","description":"Outpatient Adult Return Visit","retired":false,"links":[{"rel":"self","uri":"https://ngx.ampath.or.ke/amrs/ws/rest/v1/encountertype/8d5b2be0-c2cc-11de-8d13-0010c6dffd0f"},{"rel":"full","uri":"https://ngx.ampath.or.ke/amrs/ws/rest/v1/encountertype/8d5b2be0-c2cc-11de-8d13-0010c6dffd0f?v=full"}],"resourceVersion":"1.8"},"version":"1.4","build":null,"published":false,"formFields":[],"retired":false,"auditInfo":{"creator":{"uuid":"5aa3a3ca-13a9-11df-a1f1-0026b9348838","display":"pseurey","links":[{"rel":"self","uri":"https://ngx.ampath.or.ke/amrs/ws/rest/v1/user/5aa3a3ca-13a9-11df-a1f1-0026b9348838"}]},"dateCreated":"2018-08-29T12:32:32.000+0300","changedBy":{"uuid":"5aa3a3ca-13a9-11df-a1f1-0026b9348838","display":"pseurey","links":[{"rel":"self","uri":"https://ngx.ampath.or.ke/amrs/ws/rest/v1/user/5aa3a3ca-13a9-11df-a1f1-0026b9348838"}]},"dateChanged":"2018-08-29T12:39:01.000+0300"},"resources":[{"uuid":"8d66afda-0b7a-403c-814e-d7253a429f7a","name":"JSON schema","valueReference":"c8588f89-dfe0-428d-a8ed-b29381afb31a","display":"JSON schema","links":[{"rel":"value","uri":"https://ngx.ampath.or.ke/amrs/ws/rest/v1/form/bcb914ea-1e03-4c7f-9fd5-1baba5841e78/resource/8d66afda-0b7a-403c-814e-d7253a429f7a/value"},{"rel":"self","uri":"https://ngx.ampath.or.ke/amrs/ws/rest/v1/form/bcb914ea-1e03-4c7f-9fd5-1baba5841e78/resource/8d66afda-0b7a-403c-814e-d7253a429f7a"},{"rel":"full","uri":"https://ngx.ampath.or.ke/amrs/ws/rest/v1/form/bcb914ea-1e03-4c7f-9fd5-1baba5841e78/resource/8d66afda-0b7a-403c-814e-d7253a429f7a?v=full"}],"resourceVersion":"1.9"}],"links":[{"rel":"self","uri":"https://ngx.ampath.or.ke/amrs/ws/rest/v1/form/bcb914ea-1e03-4c7f-9fd5-1baba5841e78"}],"resourceVersion":"1.9","pages":[{"label":"Encounter Details","sections":[{"label":"Encounter Details","isExpanded":"true","questions":[{"label":"Visit date:","type":"encounterDatetime","required":"true","default":"","id":"encDate","questionOptions":{"rendering":"date"},"validators":[{"type":"date"}]},{"type":"encounterProvider","label":"Provider:","id":"provider","required":"true","default":"","questionOptions":{"rendering":"ui-select-extended"}},{"type":"encounterLocation","label":"Facility name (site/satellite clinic required):","id":"location","required":"true","questionOptions":{"rendering":"ui-select-extended"}}]}]},{"label":"Pre-Clinic Review","sections":[{"label":"Pre-clinic Review","isExpanded":"true","questions":[{"label":"Was this visit scheduled?","id":"scheduledVisit","questionOptions":{"rendering":"select","concept":"a89ff9a6-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89b6440-1350-11df-a1f1-0026b9348838","label":"Scheduled visit"},{"concept":"a89ff816-1350-11df-a1f1-0026b9348838","label":"Unscheduled visit early"},{"concept":"a89ff8de-1350-11df-a1f1-0026b9348838","label":"Unscheduled visit late"}]},"type":"obs","validators":[]},{"label":"If unscheduled, actual scheduled date","id":"actualDate","type":"obs","required":{"type":"conditionalRequired","message":"Patient visit marked as unscheduled. Please provide the scheduled date.","referenceQuestionId":"scheduledVisit","referenceQuestionAnswers":["a89ff816-1350-11df-a1f1-0026b9348838","a89ff8de-1350-11df-a1f1-0026b9348838"]},"questionOptions":{"rendering":"date","concept":"dc1942b2-5e50-4adc-949d-ad6c905f054e"},"validators":[{"type":"date","allowFutureDates":"true"},{"type":"js_expression","failsWhenExpression":"!isEmpty(scheduledVisit) && arrayContains(['a89ff816-1350-11df-a1f1-0026b9348838','a89ff8de-1350-11df-a1f1-0026b9348838'], scheduledVisit) && isEmpty(myValue)","message":"Patient visit marked as unscheduled. Please provide the scheduled date."}],"hide":{"hideWhenExpression":"!arrayContains(['a89ff816-1350-11df-a1f1-0026b9348838','a89ff8de-1350-11df-a1f1-0026b9348838'], scheduledVisit)"}},{"label":"Patient covered by NHIF:","id":"nhif","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('0b49e3e6-55df-4096-93ca-59edadb74b3f')) ? undefined : HD.getObject('prevEnc').getValue('0b49e3e6-55df-4096-93ca-59edadb74b3f')","questionOptions":{"rendering":"select","concept":"0b49e3e6-55df-4096-93ca-59edadb74b3f","answers":[{"concept":"8b715fed-97f6-4e38-8f6a-c167a42f8923","label":"Yes"},{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"No"}]},"type":"obs","validators":[]},{"label":"What is the patient's NHIF status?","id":"nhifStatus","questionInfo":"Indicate if the patient has been remitting monthly contributions towards the NHIF medical cover.","questionOptions":{"rendering":"select","concept":"548e6743-67c0-4a6b-bb07-b5f799f63bc1","answers":[{"concept":"b058a9ad-a0e4-4b37-9214-75b8aed1eaa4","label":"Active"},{"concept":"dd373348-1a7f-4625-9e69-9904fa1cc9c7","label":"Inactive"}]},"type":"obs","validators":[],"hide":{"hideWhenExpression":"nhif !== '8b715fed-97f6-4e38-8f6a-c167a42f8923'"}},{"label":"What insurance do you have?","id":"healthInsurance","questionInfo":"Indicate if the patient has another medical cover.","questionOptions":{"rendering":"select","concept":"a8b02524-1350-11df-a1f1-0026b9348838","answers":[{"concept":"0bfb0150-949b-4625-98b8-b9d8275bcf44","label":"Employer based health insurance"},{"concept":"6fac74c3-fe25-4170-92a4-3ecb8859152e","label":"Individual private health insurance"},{"concept":"21eb8488-76ae-47ce-a542-bb3038ab05de","label":"Zuri health insurance"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}]},"type":"obs","validators":[],"hide":{"hideWhenExpression":"nhif !== 'a899e0ac-1350-11df-a1f1-0026b9348838'"}}]},{"label":"Person Collecting Medication","questions":[{"label":"Visited by:","id":"vistBy","questionInfo":"Record the person that came for the clinic today, whether it is the patient or the treatment supporter.","questionOptions":{"rendering":"select","concept":"a89cd410-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a898c6f4-1350-11df-a1f1-0026b9348838","label":"Self"},{"concept":"01b957da-23bb-4862-819d-036364fe3faf","label":"Treatment supporter"}]},"type":"obs","validators":[]}]}]},{"label":"Clinical History","sections":[{"label":"Social History","isExpanded":"true","questions":[{"label":"Civil status:","type":"obs","historicalExpression":"HD.getObject('prevEnc').getValue('a899a9f2-1350-11df-a1f1-0026b9348838')","questionOptions":{"rendering":"select","concept":"a899a9f2-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899af10-1350-11df-a1f1-0026b9348838","label":"Cohabitating"},{"concept":"a899ad58-1350-11df-a1f1-0026b9348838","label":"Divorced"},{"concept":"a8aa76b0-1350-11df-a1f1-0026b9348838","label":"Married monogamous"},{"concept":"a8b03712-1350-11df-a1f1-0026b9348838","label":"Married polygamous"},{"concept":"a899aba0-1350-11df-a1f1-0026b9348838","label":"Separated"},{"concept":"a899ac7c-1350-11df-a1f1-0026b9348838","label":"Single"},{"concept":"a899ae34-1350-11df-a1f1-0026b9348838","label":"Widowed"}]},"validators":[],"hide":{"hideWhenExpression":"visitTypeUuid !== '164c76c-cc91-4ac2-89e9-ab7c29152ee0'"}},{"label":"Discordant couple:","required":"true","questionOptions":{"answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"},{"concept":"a899b50a-1350-11df-a1f1-0026b9348838","label":"Unknown"},{"concept":"a89ad3a4-1350-11df-a1f1-0026b9348838","label":"N/A"}],"concept":"a8af49d8-1350-11df-a1f1-0026b9348838","rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"visitTypeUuid !== '164c76c-cc91-4ac2-89e9-ab7c29152ee0'"}}]},{"label":"Prevention With Positives","isExpanded":"true","questions":[{"label":"Prevention with positives: At risk population:","required":"true","historicalExpression":"HD.getObject('prevEnc').getValue('93aa3f1d-1c39-4196-b5e6-8adc916cd5d6')","questionOptions":{"rendering":"checkbox","concept":"93aa3f1d-1c39-4196-b5e6-8adc916cd5d6","answers":[{"concept":"5da55301-e28e-4fdf-8b64-02622dedc8b0","label":"Client of sex worker"},{"concept":"a89ff438-1350-11df-a1f1-0026b9348838","label":"Commercial sex worker"},{"concept":"a8af49d8-1350-11df-a1f1-0026b9348838","label":"Discordant couple"},{"concept":"a890d57a-1350-11df-a1f1-0026b9348838","label":"IV drug use"},{"concept":"e19c35f0-12f0-46c2-94ea-97050f37b811","label":"MSM"},{"concept":"a89ad3a4-1350-11df-a1f1-0026b9348838","label":"N/A"}]},"type":"obs","validators":[],"hide":{"hideWhenExpression":"visitTypeUuid !== '164c76c-cc91-4ac2-89e9-ab7c29152ee0'"}},{"label":"Prevention with positives: PWP services:","id":"pwpServices","required":"true","historicalExpression":"HD.getObject('prevEnc').getValue('9ce5dbf0-a141-4ad8-8c9d-cd2bf84fe72b')","questionOptions":{"rendering":"select","concept":"9ce5dbf0-a141-4ad8-8c9d-cd2bf84fe72b","answers":[{"concept":"f0a280e8-eb88-41a8-837a-f9949ed1b9cd","label":"Condom promotion/provision"},{"concept":"bf51f71e-937c-4da5-ae07-654acf59f5bb","label":"Couple counseling"},{"concept":"91f43249-73c7-427c-8300-2038fc0d6be8","label":"Needle exchange"},{"concept":"05656545-86be-4605-9527-34fb580534b1","label":"Targeted risk reduction"},{"concept":"a89ad3a4-1350-11df-a1f1-0026b9348838","label":"N/A"}]},"type":"obs","validators":[],"hide":{"hideWhenExpression":"visitTypeUuid !== '164c76c-cc91-4ac2-89e9-ab7c29152ee0'"}}]},{"label":"Hospitalization History","questions":[{"type":"obsGroup","label":"Recent hospitalizations","questionOptions":{"rendering":"group","concept":"a8a003a6-1350-11df-a1f1-0026b9348838"},"questions":[{"label":"Was the patient hospitalized since last visit?","id":"wasHospitalized","questionOptions":{"concept":"a898c56e-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[]}]},{"type":"obsGroup","label":"If yes reason for hospitalization:","questionOptions":{"concept":"a8a003a6-1350-11df-a1f1-0026b9348838","rendering":"repeating"},"questions":[{"label":"Reason for hospitalization:","id":"hospReason","questionOptions":{"concept":"a8a07a48-1350-11df-a1f1-0026b9348838","rendering":"problem"},"type":"obs","validators":[{"type":"conditionalAnswered","message":"Providing diagnosis but didn't answer that patient was hospitalized in question","referenceQuestionId":"wasHospitalized","referenceQuestionAnswers":["a899b35c-1350-11df-a1f1-0026b9348838"]},{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(wasHospitalized) && wasHospitalized === 'a899b35c-1350-11df-a1f1-0026b9348838'","message":"Patient previously marked as hospitalized. Please provide hospitalization reason."}],"hide":{"hideWhenExpression":"wasHospitalized !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}}]}]},{"label":"Reproductive History","isExpanded":"true","questions":[{"label":"How many pregnancies have you had?","type":"obs","id":"noPregnancy","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('a8aaf59a-1350-11df-a1f1-0026b9348838')) ? undefined : HD.getObject('prevEnc').getValue('a8aaf59a-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a8aaf59a-1350-11df-a1f1-0026b9348838","rendering":"number","max":"50","min":"0"},"hide":{"hideWhenExpression":"sex !== 'F'"}},{"label":"How many pregnancies have you delivered?","type":"obs","id":"noDelivery","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('a899a920-1350-11df-a1f1-0026b9348838')) ? undefined : HD.getObject('prevEnc').getValue('a899a920-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a899a920-1350-11df-a1f1-0026b9348838","rendering":"number","min":"0"},"hide":{"hideWhenExpression":"sex !== 'F'"}},{"label":"Menstruation status:","id":"menStatus","required":"true","questionOptions":{"concept":"a8a185d2-1350-11df-a1f1-0026b9348838","rendering":"select","answers":[{"label":"Menstruating","concept":"a8ad2b4e-1350-11df-a1f1-0026b9348838"},{"label":"Postmenopausal","concept":"5cc1c1a7-dfcc-47dc-ad73-c386c188fad8"},{"label":"Hormonal amenorrhea","concept":"a8a18514-1350-11df-a1f1-0026b9348838"}]},"type":"obs","validators":[],"hide":{"hideWhenExpression":"sex !== 'F'"}},{"label":"LMP:","id":"lmpDate1","questionOptions":{"concept":"a89ff758-1350-11df-a1f1-0026b9348838","rendering":"date"},"type":"obs","validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(pattype1) && pattype1 === '375e6d4a-ba94-41ac-8ac3-5a56015c4d92'","message":"Patient is antenatal. Please provide LMP."},{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(menStatus) && menStatus === 'a8ad2b4e-1350-11df-a1f1-0026b9348838'","message":"Patient is menstruating. Please provide LMP."}],"hide":{"hideWhenExpression":"menStatus !== 'a8ad2b4e-1350-11df-a1f1-0026b9348838'"}},{"label":"Is the patient pregnant?","id":"pregnant","questionOptions":{"concept":"6b4f1d00-0a27-41dd-a299-fb7dc730819c","rendering":"select","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}]},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && moment(encDate).diff(moment(lmpDate1), 'days') >= 35","message":"Last LMP is greater than 35 days. Please indicate patient's pregnancy status."}],"hide":{"hideWhenExpression":"sex !== 'F' || menStatus !== 'a8ad2b4e-1350-11df-a1f1-0026b9348838'"}},{"label":"EDD:","id":"delDate","required":"true","questionOptions":{"concept":"a8aaddbc-1350-11df-a1f1-0026b9348838","rendering":"date","calculate":{"calculateExpression":"moment(lmpDate1).isValid() ? moment(lmpDate1).add(280, 'days').toDate():''"}},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"(new moment(lmpDate1)).isAfter((new moment(myValue)), 'day') || (new moment(lmpDate1)).isSame((new moment(myValue)), 'day')","message":"EDD should be greater than the encounter date."},{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(pregnant) && pregnant === 'a899b35c-1350-11df-a1f1-0026b9348838'","message":"Patient is pregnant. Please provide EDD."}],"hide":{"hideWhenExpression":"pregnant !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"Reason patient not pregnant?","id":"reasonNotPreg","questionOptions":{"concept":"f701166d-9820-420d-b0bc-c98ad4747dec","rendering":"select","answers":[{"concept":"5bafcbc0-e499-4741-85e3-52e93f68f08c","label":"Pregnancy not suspected"},{"concept":"6cb93e09-cd9a-4333-994a-9cd65dfa8c12","label":"Pregnancy test is negative"},{"concept":"c662737e-d529-4b49-9ad3-2d72eeb56b45","label":"Using hormonal contraceptive"},{"concept":"3bca6c9c-333c-433e-ac07-7e44e0501b49","label":"postpartum < 6 weeks"}]},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(pregnant) && pregnant === 'a899b42e-1350-11df-a1f1-0026b9348838'","message":"Patient is not pregnant. Please provide reasons."}],"hide":{"hideWhenExpression":"pregnant !== 'a899b42e-1350-11df-a1f1-0026b9348838'"}}]},{"label":"Family Planning Profile","isExpanded":"true","questions":[{"label":"Is the client using condoms?","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('a8a00090-1350-11df-a1f1-0026b9348838')) ? undefined : HD.getObject('prevEnc').getValue('a8a00090-1350-11df-a1f1-0026b9348838')","id":"condomUse","questionOptions":{"concept":"a8a00090-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"checkbox"},"type":"obs","validators":[]},{"type":"obsGroup","label":"Family planning, detailed","questionOptions":{"concept":"767e8060-5272-4927-ab78-97534a4499ef","rendering":"group"},"questions":[{"label":"Select modern contraception method:","required":"true","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('767e8060-5272-4927-ab78-97534a4499ef.a894b1cc-1350-11df-a1f1-0026b9348838')) ? undefined : HD.getObject('prevEnc').getValue('767e8060-5272-4927-ab78-97534a4499ef.a894b1cc-1350-11df-a1f1-0026b9348838')","id":"fpMethod","questionOptions":{"concept":"a894b1cc-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"None"},{"concept":"a8a713f8-1350-11df-a1f1-0026b9348838","label":"Bilateral tubal ligation"},{"concept":"a123d949-31f3-4abf-98e3-8504e17ebc00","label":"3-year implant"},{"concept":"feb48308-a56f-4754-8e8f-8c1698e570cb","label":"5-year implant"},{"concept":"f8c66a32-3660-4233-ae51-d3a4a1eac44e","label":"IUCD copper"},{"concept":"236dba53-1062-46b4-8067-ec8711897dbf","label":"IUCD hormonal"},{"concept":"a8988b44-1350-11df-a1f1-0026b9348838","label":"Injectables (Depo)"},{"concept":"a897dbd6-1350-11df-a1f1-0026b9348838","label":"OCP"},{"concept":"eaa5796d-0b1c-478b-8c9d-d23cf4c3bddc","label":"Vasectomy"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"sex !== 'F'  || menStatus ==='5cc1c1a7-dfcc-47dc-ad73-c386c188fad8'"}},{"type":"obs","label":"Approximate start date (If FP is 3-year implant/5-year implant/Injectables/Vasectomy/IUCD Copper/IUCD Hormonal/Bilateral tubal ligation)","id":"appStartDate","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('767e8060-5272-4927-ab78-97534a4499ef.a89ae092-1350-11df-a1f1-0026b9348838')) ? undefined : HD.getObject('prevEnc').getValue('767e8060-5272-4927-ab78-97534a4499ef.a89ae092-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a89ae092-1350-11df-a1f1-0026b9348838","rendering":"date"},"validators":[{"type":"js_expression","failsWhenExpression":"(new moment(encDate)).isBefore((new moment(myValue)), 'day') || (new moment(encDate)).isSame((new moment(myValue)), 'day')","message":"Start date should be before the encounter date."},{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !(isEmpty(fpMethod) || !arrayContainsAny(fpMethod,['a123d949-31f3-4abf-98e3-8504e17ebc00','feb48308-a56f-4754-8e8f-8c1698e570cb','eaa5796d-0b1c-478b-8c9d-d23cf4c3bddc','a8988b44-1350-11df-a1f1-0026b9348838','a8a713f8-1350-11df-a1f1-0026b9348838','f8c66a32-3660-4233-ae51-d3a4a1eac44e','236dba53-1062-46b4-8067-ec8711897dbf']))","message":"Start date is required."}],"hide":{"hideWhenExpression":"isEmpty(fpMethod) || arrayContains(['a899e0ac-1350-11df-a1f1-0026b9348838','a897dbd6-1350-11df-a1f1-0026b9348838'],fpMethod)"}}]},{"label":"Does the client wish to become pregnant in less than a year?","id":"pregInaYear","questionOptions":{"concept":"3ffd9c53-2638-4db2-8c2d-5f025c2a1bfb","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"sex !== 'F'  || fpMethod !== 'a899e0ac-1350-11df-a1f1-0026b9348838'|| menStatus ==='5cc1c1a7-dfcc-47dc-ad73-c386c188fad8'"}}]},{"label":"Cancer Screening","questions":[{"label":"Cervical cancer screening:","id":"cervicalCancerScreening","questionOptions":{"concept":"cf33d31f-b96b-4437-a6b8-ff5f43855f9b","rendering":"select","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"},{"concept":"a89ad3a4-1350-11df-a1f1-0026b9348838","label":"N/A"}]},"type":"obs","validators":[],"hide":{"hideWhenExpression":"sex !== 'F'"}},{"label":"VIA test result:","type":"obs","id":"VIATestResult","questionOptions":{"concept":"f165c64a-9354-4145-9b06-4ee437630218","rendering":"select","answers":[{"concept":"a896f3a6-1350-11df-a1f1-0026b9348838","label":"Positive"},{"concept":"a896d2cc-1350-11df-a1f1-0026b9348838","label":"Negative"},{"concept":"a89ad3a4-1350-11df-a1f1-0026b9348838","label":"N/A"}],"showDate":"true","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(VIATestResult) && VIATestResult !== 'a89ad3a4-1350-11df-a1f1-0026b9348838' ","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(VIATestResult)"}}},"hide":{"hideWhenExpression":"sex !== 'F' || isEmpty(cervicalCancerScreening) || cervicalCancerScreening !== 'a899b35c-1350-11df-a1f1-0026b9348838' "}}]},{"label":"Adult Vaccination","questions":[{"label":"Immunization history:","type":"obs","questionOptions":{"rendering":"multiCheckbox","concept":"507d7df8-2da6-4ace-93b8-4271620f27c5","answers":[{"concept":"a897dd84-1350-11df-a1f1-0026b9348838","label":"Hepatitis B"},{"concept":"a8a70746-1350-11df-a1f1-0026b9348838","label":"Flu"}]},"validators":[]}]}]},{"label":"Medication History","sections":[{"label":"ART History","isExpanded":"true","questions":[{"label":"Is the patient on any ART?","required":"true","id":"onArt","historicalExpression":"arrayContainsAny(['a89b7c50-1350-11df-a1f1-0026b9348838','a89b7ae8-1350-11df-a1f1-0026b9348838','a8a00220-1350-11df-a1f1-0026b9348838','a89b77aa-1350-11df-a1f1-0026b9348838'], HD.getObject('prevEnc').getValue('a89b75d4-1350-11df-a1f1-0026b9348838')) ? 'a899b35c-1350-11df-a1f1-0026b9348838' : HD.getObject('prevEnc').getValue('a89ae254-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a89ae254-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(transferInControl) && transferInControl === 'a899b42e-1350-11df-a1f1-0026b9348838' && !isEmpty(myValue) && arrayContains(['a899b35c-1350-11df-a1f1-0026b9348838'], myValue)","message":"In the enrollment section, patient not marked as transfer in. Kindly confirm."}]},{"label":"Reason for use:","id":"reasonUse","type":"obs","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('a8a30d1c-1350-11df-a1f1-0026b9348838')) ? undefined : HD.getObject('prevEnc').getValue('a8a30d1c-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a8a30d1c-1350-11df-a1f1-0026b9348838","rendering":"select","answers":[{"concept":"a89adc46-1350-11df-a1f1-0026b9348838","label":"Treatment"},{"concept":"a8a19c20-1350-11df-a1f1-0026b9348838","label":"PEP"},{"concept":"27ac429d-8a42-476e-b2f6-65bde0b8c935","label":"Prep"},{"concept":"a89fbedc-1350-11df-a1f1-0026b9348838","label":"PMTCT"}]},"validators":[],"hide":{"hideWhenExpression":"onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"If patient started ART since last visit, enter start date:","id":"startDate","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('a89d200a-1350-11df-a1f1-0026b9348838')) ? undefined : HD.getObject('prevEnc').getValue('a89d200a-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a89d200a-1350-11df-a1f1-0026b9348838","rendering":"date"},"type":"obs","validators":[{"type":"date"}],"hide":{"hideWhenExpression":"onArt !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"Line of ART patient is taking:","id":"current_arv_line","historicalExpression":"!_.isEmpty(HD.getObject('prevEnc').getValue('a89b6a62-1350-11df-a1f1-0026b9348838')) ? undefined : HD.getObject('prevEnc').getValue('04616f5d-b961-4f41-bbd7-bcc0dd235577')","questionOptions":{"concept":"04616f5d-b961-4f41-bbd7-bcc0dd235577","answers":[{"concept":"034047bd-3fa1-4b2a-b0f0-2787e9b9f7b3","label":"First line regimen"},{"concept":"8f8a715d-e49a-4b2c-aa3a-83fa9d7a4254","label":"Second line regimen"},{"concept":"a90ebdd2-351f-485a-b850-4938fcca2729","label":"Third line regimen"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(onArt) && onArt === 'a899b35c-1350-11df-a1f1-0026b9348838'","message":"Patient previously marked as on ART. Please provide the treatment category."}],"hide":{"hideWhenExpression":"onArt !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"Patient's ART regimen, adults:","id":"current_art_regimen_adult","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('a89b6a62-1350-11df-a1f1-0026b9348838')) ? (_.isEmpty(HD.getObject('prevEnc').getValue('a8a08344-1350-11df-a1f1-0026b9348838'))? HD.getObject('prevEnc').getValue('a899cf5e-1350-11df-a1f1-0026b9348838') : HD.getObject('prevEnc').getValue('a8a08344-1350-11df-a1f1-0026b9348838.a899cf5e-1350-11df-a1f1-0026b9348838')) : HD.getObject('prevEnc').getValue('a89b6a62-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a899cf5e-1350-11df-a1f1-0026b9348838","answers":[{"concept":"1c4a75d0-cc91-4752-b0a5-4b833326ff7a","label":"TDF300mg/3TC300mg/EFV600mg"},{"concept":"18e86e1f-92b8-40cd-8266-0df0ab0a4a50","label":"DTG50mg/3TC300mg/TDF300mg"},{"concept":"6a73f32d-1870-4527-af6e-74443251ded2","label":"NVP200/ZDV300/3TC150"},{"concept":"a89cc876-1350-11df-a1f1-0026b9348838","label":"3TC300mg/TDF300mg"},{"concept":"a896758e-1350-11df-a1f1-0026b9348838","label":"3TC150mg/ZDV300mg"},{"concept":"a8afcf84-1350-11df-a1f1-0026b9348838","label":"Emtri200mg/TDF300(Truvada)"},{"concept":"a897e7c0-1350-11df-a1f1-0026b9348838","label":"Aluvia (Kaletra)200mg/LPV50mg"},{"concept":"a8afc066-1350-11df-a1f1-0026b9348838","label":"Atazanavir300/Ritonavir100"},{"concept":"dabf36cb-dd9a-4542-a8ef-874c1ee5be4a","label":"FTC200mg/RPV25mg/TDF245mg(Eviplera)"},{"concept":"98b0baf6-0b73-4429-9264-6233684b0969","label":"Dolutegravir 50mg"},{"concept":"a897f8a0-1350-11df-a1f1-0026b9348838","label":"Abacavir 300mg"},{"concept":"a89677e6-1350-11df-a1f1-0026b9348838","label":"Efavirenz 600mg"},{"concept":"a89673f4-1350-11df-a1f1-0026b9348838","label":"Lamivudine 150mg"},{"concept":"a8967656-1350-11df-a1f1-0026b9348838","label":"Nevirapine 200mg"},{"concept":"a8afbd64-1350-11df-a1f1-0026b9348838","label":"Raltegravir 400mg"},{"concept":"a897ea4a-1350-11df-a1f1-0026b9348838","label":"Zidovudine 300mg"},{"concept":"68a0a5dd-1e91-43a2-8dce-c6e84a14de04","label":"Darunavir 600mg"},{"concept":"1baf254e-1429-4fd9-8db1-edf6523cea13","label":"Ritonavir 100mg"},{"concept":"42ef7c4d-d6fb-49c0-a46e-019c42dea203","label":"Ritonavir 80mg"},{"concept":"38fbba9c-4b26-412d-9659-8dd649514d66","label":"Etravirine 100mg"}],"rendering":"multiCheckbox"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(onArt) && onArt === 'a899b35c-1350-11df-a1f1-0026b9348838'","message":"Patient  marked as on ART. Please provide the Regimen."}],"hide":{"hideWhenExpression":"onArt !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"type":"obsGroup","label":"ART adherence","questionOptions":{"concept":"bc3834dd-ef07-4027-be30-729baa069291","rendering":"group"},"questions":[]}]},{"label":"Morisky Adherence","questions":[{"label":"Do you ever forget to take your medicines? (0=No, 1=Yes)","id":"forget","questionOptions":{"concept":"99a99956-90b0-431e-a453-bf8efffeb7d3","rendering":"number","max":"1","min":"0"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(onArt) && onArt === 'a899b35c-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"Patient on ARVs. Please provide morisky adherence history."}],"hide":{"hideWhenExpression":"onArt !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"Are you sometimes not keen about taking your medications? (0=No, 1=Yes)","id":"notKeen","questionOptions":{"concept":"26b3c8c9-20be-4585-98f7-c8b8bf2c9207","rendering":"number","max":"1","min":"0"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(onArt) && onArt === 'a899b35c-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"Patient on ARVs. Please provide morisky adherence history."}],"hide":{"hideWhenExpression":"onArt !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"Do you stop taking medicine at times when you feel worse? (0=No, 1=Yes)","id":"feelWorse","questionOptions":{"concept":"ccffa130-12c6-45e8-a24a-b16c0395abd5","rendering":"number","max":"1","min":"0"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(onArt) && onArt === 'a899b35c-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"Patient on ARVs. Please provide morisky adherence history."}],"hide":{"hideWhenExpression":"onArt !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"If you feel better, do you sometimes stop taking your medicine? (0=No, 1=Yes)","id":"feelBetter","questionOptions":{"concept":"f9eb1023-4cd7-47a7-87cd-b3353824c2c7","rendering":"number","max":"1","min":"0"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(onArt) && onArt === 'a899b35c-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"Patient on ARVs. Please provide morisky adherence history."}],"hide":{"hideWhenExpression":"onArt !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"Morisky 4 total score:","id":"moriskyScore4","questionOptions":{"concept":"315472dc-2b5e-4add-b3b7-bbcf21a8959b","rendering":"number","max":"4","min":"0","calculate":{"calculateExpression":"isNaN(parseFloat(feelBetter)+ parseFloat(feelWorse)+ parseFloat(notKeen)+ parseFloat(forget)) ? undefined: (parseFloat(feelBetter)+ parseFloat(feelWorse)+ parseFloat(notKeen)+ parseFloat(forget))"}},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onArt !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"Did you forget to take your medicine yesterday? (0=No, 1=Yes)","id":"medicineYesterday","questionOptions":{"concept":"2860acd4-2391-4467-9e69-e848d1672f96","rendering":"number","max":"1","min":"0"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(moriskyScore4) && moriskyScore4 >=3 && isEmpty(myValue)","message":"Patient on ARVs. Please provide morisky adherence history."}],"hide":{"hideWhenExpression":"isEmpty(moriskyScore4) || moriskyScore4 <3"}},{"label":"Do you sometimes stop taking medicine if you feel like your symptoms are under control? (0=No, 1=Yes)","id":"symptomControl","questionOptions":{"concept":"8fcb3ada-2188-4e0a-8c68-18c26fd123b2","rendering":"number","max":"1","min":"0"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(moriskyScore4) && moriskyScore4 >=3 && isEmpty(myValue)","message":"Patient on ARVs. Please provide morisky adherence history."}],"hide":{"hideWhenExpression":"isEmpty(moriskyScore4) || moriskyScore4 <3"}},{"label":"Do you ever feel under pressure about sticking to your treatment plan? (0=No, 1=Yes)","id":"underPressure","questionOptions":{"concept":"87ba16a0-6f57-4b0b-a76e-753977f1ef7f","rendering":"number","max":"1","min":"0"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(moriskyScore4) && moriskyScore4 >=3 && isEmpty(myValue)","message":"Patient on ARVs. Please provide morisky adherence history."}],"hide":{"hideWhenExpression":"isEmpty(moriskyScore4) || moriskyScore4 <3"}},{"label":"How often do you have difficulty remembering to take all your medication? (0=Never/Rarely, 1/4=Once in a while, 1/2=Sometimes, 3/4=Usually,1=All the time)","id":"difficultyRemembering","questionOptions":{"concept":"658523c7-77d2-4419-9633-eba789a7d64d","rendering":"number","max":"1","min":"0"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(moriskyScore4) && moriskyScore4 >=3 && isEmpty(myValue)","message":"Patient on ARVs. Please provide morisky adherence history."}],"hide":{"hideWhenExpression":"isEmpty(moriskyScore4) || moriskyScore4 <3"}},{"label":"Morisky 8 total score:","id":"moriskyScore","questionOptions":{"concept":"857caa4e-b566-4a43-ab78-f911c1a8a727","rendering":"number","max":"8","min":"0","calculate":{"calculateExpression":"isNaN(parseFloat(difficultyRemembering) + parseFloat(underPressure) + parseFloat(symptomControl)+ parseFloat(medicineYesterday)+ parseFloat(feelBetter)+ parseFloat(feelWorse)+ parseFloat(notKeen)+ parseFloat(forget)) ? undefined: (parseFloat(difficultyRemembering) + parseFloat(underPressure) + parseFloat(symptomControl)+ parseFloat(medicineYesterday)+ parseFloat(feelBetter)+ parseFloat(feelWorse)+ parseFloat(notKeen)+ parseFloat(forget))"}},"type":"obs","validators":[],"hide":{"hideWhenExpression":"isEmpty(moriskyScore4) || moriskyScore4 <3"}},{"label":"Morisky score rating:","id":"scoreMo","questionOptions":{"concept":"","rendering":"text","calculate":{"calculateExpression":"parseInt(moriskyScore) === 0 && parseFloat(moriskyScore) <= 0.25 ? 'Good' : parseFloat(moriskyScore) >=0.5 && parseInt(moriskyScore) <= 2 ? 'Inadequate' : parseInt(moriskyScore) >= 3 && parseInt(moriskyScore) <= 8 ? 'Poor' : 'Unknown'"}},"type":"control","validators":[],"hide":{"hideWhenExpression":"isEmpty(moriskyScore4) || moriskyScore4 <3"}}]},{"label":"Enhanced Adherence","questions":[{"label":"Has a home visit been done?","id":"homeVisit","questionOptions":{"concept":"fe6800a2-76f1-42a4-a1c8-553e1fec18e9","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"What are the support structures in place?","id":"supportStructures","questionOptions":{"concept":"a7958e13-c78c-4085-9fdf-b475d602b2b8","answers":[{"concept":"01b957da-23bb-4862-819d-036364fe3faf","label":"Treatment supporter"},{"concept":"a89e2df6-1350-11df-a1f1-0026b9348838","label":"Support group"},{"concept":"a89cd280-1350-11df-a1f1-0026b9348838","label":"Caregiver"},{"concept":"a8b03bb8-1350-11df-a1f1-0026b9348838","label":"Family"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"Has directly observed treatment (DOT) been done?","id":"priorDotDone","questionOptions":{"concept":"4b3c4263-9f86-4f3c-985b-1a71e2a57495","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"Number of directly observed treatment (DOT) done:","id":"dotDone","questionOptions":{"concept":"438c22e0-fcb9-4737-b3a6-55cc1f391e0c","answers":[],"rendering":"number","min":"0"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(priorDotDone) && priorDotDone !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"DST was done. Please indicate number of DSTs done."}],"hide":{"hideWhenExpression":"priorDotDone !== 'a899b35c-1350-11df-a1f1-0026b9348838' || onArt!== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"Likely causes of poor adherence: (Choose all tha apply)","id":"poorAdherence","questionOptions":{"concept":"a89ebbc2-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89eba46-1350-11df-a1f1-0026b9348838","label":"Stigma"},{"concept":"945f0a33-dd89-4ca4-9eb3-d74128a2adc8","label":"School related stigma"},{"concept":"b858568f-c722-411d-85ca-97d46bc98b3c","label":"Home related stigma"},{"concept":"24ff3f30-b7ff-4464-b1b3-fda5ed5714a3","label":"Improper disclosure to child"},{"concept":"e91a0b75-133d-4aae-81c9-2b4423e48379","label":"Inadequate supervision"},{"concept":"a89d25fa-1350-11df-a1f1-0026b9348838","label":"Child refusing to take drugs"},{"concept":"6a377e01-fa40-4ac2-98a9-0cb09cfbea36","label":"Pill related size"},{"concept":"1c811199-3cc1-4495-8e05-980bebb045ab","label":"Pill taste"},{"concept":"53956fb4-d7d9-438c-addf-c5f67b2a3866","label":"Pill color"},{"concept":"a89ecaa4-1350-11df-a1f1-0026b9348838","label":"Disclosure"},{"concept":"a89eb8c0-1350-11df-a1f1-0026b9348838","label":"Side effects"},{"concept":"a89ced88-1350-11df-a1f1-0026b9348838","label":"Alcohol"},{"concept":"a89ebb04-1350-11df-a1f1-0026b9348838","label":"Other drugs"},{"concept":"a890b810-1350-11df-a1f1-0026b9348838","label":"Mental health issues"},{"concept":"a8935fde-1350-11df-a1f1-0026b9348838","label":"Depression"},{"concept":"abf95bf2-c481-490f-9e9f-84fa2d7b2f8c","label":"Caregiver changes"},{"concept":"a89e3396-1350-11df-a1f1-0026b9348838","label":"Religious beliefs"},{"concept":"b5c3006f-97fd-466f-b4ab-596e23ddc4d9","label":"Inadequate treatment preparation"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"multiCheckbox"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"type":"obsGroup","label":"Poor adherence","questionOptions":{"concept":"04edb08f-d1fd-43ac-98b1-adc5e7d73ba1","rendering":"group"},"questions":[{"label":"If other causes of poor adherence, explain:","id":"otherCausesSpecify","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","answers":[],"rendering":"text"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(poorAdherence) && poorAdherence !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"Other selected as cause of poor adherence. Please indicate the cause."}],"hide":{"hideWhenExpression":"isEmpty(poorAdherence) || !arrayContainsAny(['a8aaf3e2-1350-11df-a1f1-0026b9348838'], poorAdherence)"}}]},{"label":"Is patient enrolled in support group?","id":"supportGroupEnroll","questionOptions":{"concept":"ed1e7a5d-a9f4-4adf-a033-4e895409fafe","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"If no, wishes to enroll?","id":"wishesToEnroll","questionOptions":{"concept":"c796c49d-2e33-40c4-aadd-c5508e733c30","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(supportGroupEnroll) && supportGroupEnroll === 'a8aaf3e2-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"Patient is not enrolled in any group. Please indicate if they wish to enroll in any group."}],"hide":{"hideWhenExpression":"supportGroupEnroll !== 'a899b42e-1350-11df-a1f1-0026b9348838' || onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"If yes, name of support group:","id":"supportGroupName","questionOptions":{"concept":"aab3dcc5-f984-45d2-b0c4-7a3ba746951b","answers":[],"rendering":"text"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(supportGroupEnroll) && supportGroupEnroll !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"Patient is enrolled in a group. Please indicate name of the group."}],"hide":{"hideWhenExpression":"supportGroupEnroll !== 'a899b35c-1350-11df-a1f1-0026b9348838' || onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"Has a pill count been done?","id":"pillCountDone","questionOptions":{"concept":"067e6d30-4962-46eb-9090-be55478d4afd","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"If yes, what are the findings:","id":"pillCountFindings","questionOptions":{"concept":"9bf98c27-1821-407f-9c06-5609357f3698","answers":[{"concept":"5b1bf823-da30-4e23-a777-0d8ef93a6211","label":"Accurate"},{"concept":"64433aeb-81fb-43a5-be42-3efce1692063","label":"Missed doses"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(pillCountDone) && pillCountDone !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"Pill count done. Indicate the findings."}],"hide":{"hideWhenExpression":"pillCountDone !== 'a899b35c-1350-11df-a1f1-0026b9348838' || onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"Other possible causes of treatment failure:","id":"treatmentFailure","questionOptions":{"concept":"bc764345-2e57-42f5-aee9-c7d5bd012c97","answers":[{"concept":"4a98eaa4-e5df-4e76-9b58-5191d61666eb","label":"Inadequate dosing/dose adjustments"},{"concept":"01eedbcc-ea21-40cc-b150-fcaca5eef501","label":"Drug-drug interaction"},{"concept":"c6f38251-5b52-489c-854e-ec2d3994a6cd","label":"Drug-food interaction"},{"concept":"cfef32f6-2807-427e-9607-1397e8d7e347","label":"Impaired absorption (such as chronic severe diarrhea)"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"If drug causes treatment failure, indicate drug:","id":"drugCausingFailure","questionOptions":{"concept":"1682a920-c93d-4aad-b9cb-4a2b2c41ff1a","rendering":"drug"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(treatmentFailure) && treatmentFailure !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"Drug was listed as causing treatment failure. Indicate the drug."}],"hide":{"hideWhenExpression":"!arrayContains(['01eedbcc-ea21-40cc-b150-fcaca5eef501','c6f38251-5b52-489c-854e-ec2d3994a6cd'], treatmentFailure) ||onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"Does this patient have other co morbidities?","id":"coMorbidities","questionOptions":{"concept":"a8b010e8-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a8935f0c-1350-11df-a1f1-0026b9348838","label":"Convulsive disease"},{"concept":"a890b810-1350-11df-a1f1-0026b9348838","label":"Mental health disorders"},{"concept":"a893436e-1350-11df-a1f1-0026b9348838","label":"Diabetes"},{"concept":"a8ad5254-1350-11df-a1f1-0026b9348838","label":"Renal disease"},{"concept":"a8ad516e-1350-11df-a1f1-0026b9348838","label":"Liver disease"},{"concept":"a8986880-1350-11df-a1f1-0026b9348838","label":"Hypertention"},{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"None"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"Has drug sensitivity test (DST) been done?","id":"dstDone","questionOptions":{"concept":"2ae99396-0e12-463f-8968-1cba7cf24bc0","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"If DST result available, upload image:","type":"obs","default":"","id":"dstImage","questionOptions":{"concept":"8ec7c519-502e-46ea-8a98-181ed5a088be","rendering":"file"},"validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(dstDone) && dstDone !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"DST was done.Please upload the image for the results."}],"hide":{"hideWhenExpression":"dstDone !== 'a899b35c-1350-11df-a1f1-0026b9348838' || onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"Has an MDT been done?","id":"mdtDone","questionOptions":{"concept":"946dabee-3079-4dd1-9f84-1a1ab5507a26","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}},{"label":"If No, wish to refer?","id":"wishRefertoMDT","questionOptions":{"concept":"88a8c7d1-95ac-4aa4-8058-df99a3598390","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"mdtDone !== 'a899b42e-1350-11df-a1f1-0026b9348838' ||onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'||visitTypeUuid !== '6c5d74f4-943f-489a-b1c4-b2accfae92fb'"}}]},{"label":"PCP Prophylaxis History","isExpanded":"true","questions":[{"label":"Is the patient on any PCP prophylaxis?","id":"pcpProphylaxisCurrent","historicalExpression":"HD.getObject('prevEnc').getValue('a899e282-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a899e282-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"None"},{"concept":"a8989396-1350-11df-a1f1-0026b9348838","label":"Septrin"},{"concept":"a890c9e0-1350-11df-a1f1-0026b9348838","label":"Dapsone 100mg"}],"rendering":"select"},"required":"true","type":"obs","validators":[]},{"type":"obsGroup","label":"PCP prophylaxis adherence:","questionOptions":{"concept":"275eee16-c358-4f3a-ac16-e8f24659df87","rendering":"group"},"questions":[{"label":"Patient's adherence on PCP prophylaxis:","id":"pcpProphylaxisAdherence","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('115c744a-cf54-469f-bd5f-820352ffe9be')) ? undefined : HD.getObject('prevEnc').getValue('115c744a-cf54-469f-bd5f-820352ffe9be')","questionOptions":{"concept":"115c744a-cf54-469f-bd5f-820352ffe9be","answers":[{"concept":"a8b0f882-1350-11df-a1f1-0026b9348838","label":"Good"},{"concept":"a73d20b3-d721-4763-a362-14a0c41a6b5e","label":"Fair"},{"concept":"fdaf8b47-ea14-4d28-80fa-e1da58a30e8b","label":"Poor"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(pcpProphylaxisCurrent) && arrayContains(['a8989396-1350-11df-a1f1-0026b9348838', 'a890c9e0-1350-11df-a1f1-0026b9348838'], pcpProphylaxisCurrent) && isEmpty(myValue)","message":"Patient on PCP Prophylaxis. Please provide adherence history"}],"hide":{"hideWhenExpression":"isEmpty(pcpProphylaxisCurrent) || pcpProphylaxisCurrent === 'a899e0ac-1350-11df-a1f1-0026b9348838'"}},{"label":"Adherence (PCP) reasons for poor/fair:","id":"pcpAdherence","questionOptions":{"concept":"a89ebbc2-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89ced88-1350-11df-a1f1-0026b9348838","label":"Alcohol"},{"concept":"a8935fde-1350-11df-a1f1-0026b9348838","label":"Depression"},{"concept":"a89eac04-1350-11df-a1f1-0026b9348838","label":"Felt well"},{"concept":"a89eacc2-1350-11df-a1f1-0026b9348838","label":"Forgot"},{"concept":"7211031b-0685-44bc-a5e9-5a018d0173ea","label":"Gave away"},{"concept":"a8af4cee-1350-11df-a1f1-0026b9348838","label":"Lost/ran out of pills"},{"concept":"ecafa614-49c5-4eba-84c7-b85b0d9e2c46","label":"Pill burden"},{"concept":"a89eb8c0-1350-11df-a1f1-0026b9348838","label":"Side effects"},{"concept":"a89eba46-1350-11df-a1f1-0026b9348838","label":"Stigma"},{"concept":"c0c9eab3-46f6-453c-b29d-dc1c242317c5","label":"Stock out"},{"concept":"a89de2d8-1350-11df-a1f1-0026b9348838","label":"Too ill"},{"concept":"a897fdaa-1350-11df-a1f1-0026b9348838","label":"Travel problems"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"multiCheckbox"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"isEmpty(pcpProphylaxisCurrent) || pcpProphylaxisCurrent === 'a899e0ac-1350-11df-a1f1-0026b9348838' || !arrayContains(['a73d20b3-d721-4763-a362-14a0c41a6b5e','fdaf8b47-ea14-4d28-80fa-e1da58a30e8b'], pcpProphylaxisAdherence)"}},{"label":"Adherence (PCP): Other (specify):","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"type":"obs","id":"pcpOtherAdherence","validators":[],"hide":{"hideWhenExpression":"isEmpty(pcpProphylaxisCurrent) || pcpProphylaxisCurrent === 'a899e0ac-1350-11df-a1f1-0026b9348838' || !arrayContains(['a73d20b3-d721-4763-a362-14a0c41a6b5e','fdaf8b47-ea14-4d28-80fa-e1da58a30e8b'], pcpProphylaxisAdherence)"}}]}]},{"label":"TB Prophylaxis History","isExpanded":"true","questions":[{"label":"Is the patient on any TB prophylaxis?","type":"obs","required":"true","id":"onTbProphylaxis","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('163784d2-6c55-4ceb-abf0-df8cebb385f1')) ? undefined : HD.getObject('prevEnc').getValue('163784d2-6c55-4ceb-abf0-df8cebb385f1')","questionOptions":{"concept":"163784d2-6c55-4ceb-abf0-df8cebb385f1","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"validators":[]},{"label":"If yes select drug","type":"obs","id":"onTbProphylaxisDrug","historicalExpression":"HD.getObject('prevEnc').getValue('a899e35e-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a899e35e-1350-11df-a1f1-0026b9348838","answers":[{"concept":"162724df-5a66-4ae3-bbf6-5dc6dbba4ebb","label":"Isoniazid 100mg"},{"concept":"b150ccdc-e7ec-4f99-b592-6f3fa73b3aea","label":"Isoniazid 300mg"}],"rendering":"select"},"validators":[{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(onTbProphylaxis) && onTbProphylaxis === 'a899b35c-1350-11df-a1f1-0026b9348838'","message":"Patient  marked as on TB Prophylaxis. Please provide the drug."}],"hide":{"hideWhenExpression":"onTbProphylaxis !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"TB prophylaxis adherence","type":"obsGroup","questionOptions":{"concept":"3a69cfcf-f129-4702-a8dd-d061d2a16b9d","rendering":"group"},"questions":[{"label":"Patient's adherence on TB prophylaxis:","id":"adherenceOnTbProphy","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('3a69cfcf-f129-4702-a8dd-d061d2a16b9d','ebfdb93a-9292-4245-9a27-0faf49545720')) ? undefined : HD.getObject('prevEnc').getValue('3a69cfcf-f129-4702-a8dd-d061d2a16b9d','ebfdb93a-9292-4245-9a27-0faf49545720')","questionOptions":{"concept":"ebfdb93a-9292-4245-9a27-0faf49545720","answers":[{"concept":"a8b0f882-1350-11df-a1f1-0026b9348838","label":"Good"},{"concept":"a73d20b3-d721-4763-a362-14a0c41a6b5e","label":"Fair"},{"concept":"fdaf8b47-ea14-4d28-80fa-e1da58a30e8b","label":"Poor"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(onTbProphylaxis) && arrayContains(['a899b35c-1350-11df-a1f1-0026b9348838'], onTbProphylaxis) && isEmpty(myValue)","message":"Patient on TB Prophylaxis. Please provide adherence history."}],"hide":{"hideWhenExpression":"isEmpty(onTbProphylaxis)|| onTbProphylaxis !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"Adherence (TB Prophylaxis) reasons for poor/fair:","id":"tbProphylaxisAdherence","questionOptions":{"concept":"a89ebbc2-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89ced88-1350-11df-a1f1-0026b9348838","label":"Alcohol"},{"concept":"a8935fde-1350-11df-a1f1-0026b9348838","label":"Depression"},{"concept":"a89eac04-1350-11df-a1f1-0026b9348838","label":"Felt well"},{"concept":"a89eacc2-1350-11df-a1f1-0026b9348838","label":"Forgot"},{"concept":"7211031b-0685-44bc-a5e9-5a018d0173ea","label":"Gave away"},{"concept":"a8af4cee-1350-11df-a1f1-0026b9348838","label":"Lost/Ran out of pills"},{"concept":"ecafa614-49c5-4eba-84c7-b85b0d9e2c46","label":"Pill burden"},{"concept":"a89eb8c0-1350-11df-a1f1-0026b9348838","label":"Side effects"},{"concept":"a89eba46-1350-11df-a1f1-0026b9348838","label":"Stigma"},{"concept":"c0c9eab3-46f6-453c-b29d-dc1c242317c5","label":"Stock out"},{"concept":"a89de2d8-1350-11df-a1f1-0026b9348838","label":"Too ill"},{"concept":"a897fdaa-1350-11df-a1f1-0026b9348838","label":"Travel problems"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"multiCheckbox"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"isEmpty(onTbProphylaxis) || onTbProphylaxis !== 'a899b35c-1350-11df-a1f1-0026b9348838' || !arrayContains(['a73d20b3-d721-4763-a362-14a0c41a6b5e','fdaf8b47-ea14-4d28-80fa-e1da58a30e8b'], adherenceOnTbProphy)"}},{"label":"Adherence (TB Prophylaxis): Other (specify):","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"type":"obs","id":"tbProphylaxisOtherAdherence","validators":[],"hide":{"hideWhenExpression":"isEmpty(onTbProphylaxis) || onTbProphylaxis !== 'a899b35c-1350-11df-a1f1-0026b9348838' || !arrayContains(['a73d20b3-d721-4763-a362-14a0c41a6b5e','fdaf8b47-ea14-4d28-80fa-e1da58a30e8b'], adherenceOnTbProphy)"}}]}]},{"label":"Tuberculosis History","isExpanded":"true","questions":[{"id":"onTbTreatment","required":"true","label":"Is patient on TB treatment?","historicalExpression":"HD.getObject('prevEnc').getValue('a8afcc82-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a8afcc82-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs"},{"label":"Start date of TB treatment:","id":"startDateOfTbTreatment","historicalExpression":"HD.getObject('prevEnc').getValue('a8afdb8c-1350-11df-a1f1-0026b9348838.a899e5f2-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a899e5f2-1350-11df-a1f1-0026b9348838","rendering":"date"},"type":"obs","validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(onTbTreatment) && arrayContains(['a899b35c-1350-11df-a1f1-0026b9348838'], onTbTreatment) && isEmpty(myValue)","message":"You indicated patient on tb treatment, indicate start date."},{"type":"js_expression","failsWhenExpression":"(isEmpty(onTbTreatment) || !arrayContains(['a899b35c-1350-11df-a1f1-0026b9348838'], onTbTreatment)) && !isEmpty(myValue)","message":"You indicated patient is not on tb treatment, therefore start date should not be indicated."}],"hide":{"hideWhenExpression":"onTbTreatment !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"Tuberculosis treatment phase:","type":"obs","id":"tbPhase","questionOptions":{"concept":"a8afdf4c-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a8afdd08-1350-11df-a1f1-0026b9348838","label":"Continuation phase"},{"concept":"a8afddc6-1350-11df-a1f1-0026b9348838","label":"Retreatment phase"},{"concept":"a8afdc4a-1350-11df-a1f1-0026b9348838","label":"Induction phase"},{"concept":"a8afde8e-1350-11df-a1f1-0026b9348838","label":"Retreated phase"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"hide":{"hideWhenExpression":"onTbTreatment !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"type":"obsGroup","label":"Current TB regimen","questionOptions":{"concept":"a8afdb8c-1350-11df-a1f1-0026b9348838","rendering":"repeating"},"questions":[{"label":"Current TB regimen:","type":"obs","id":"tb_current","questionOptions":{"concept":"a899e444-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899f51a-1350-11df-a1f1-0026b9348838","label":"RHZE"},{"concept":"a897d1a4-1350-11df-a1f1-0026b9348838","label":"RHZ"},{"concept":"a8a382ba-1350-11df-a1f1-0026b9348838","label":"RHE"},{"concept":"a89b1ca6-1350-11df-a1f1-0026b9348838","label":"RH"},{"concept":"a899e19c-1350-11df-a1f1-0026b9348838","label":"EH"},{"concept":"a8971c64-1350-11df-a1f1-0026b9348838","label":"Ethambutol"},{"concept":"a8a3243c-1350-11df-a1f1-0026b9348838","label":"MDR drugs"},{"concept":"a896cc00-1350-11df-a1f1-0026b9348838","label":"INH"},{"concept":"a8ac5f2a-1350-11df-a1f1-0026b9348838","label":"Pyrazinamide"},{"concept":"a8952e4a-1350-11df-a1f1-0026b9348838","label":"Streptomycin"},{"concept":"b8aa06ca-93c6-40ea-b144-c74f841926f4","label":"Rifabutin"},{"concept":"a897d0be-1350-11df-a1f1-0026b9348838","label":"Rifampicin"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"validators":[],"hide":{"hideWhenExpression":"onTbTreatment !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"tabs/day:","questionOptions":{"concept":"a8a07386-1350-11df-a1f1-0026b9348838","max":"30","min":"0","rendering":"number"},"type":"obs","hide":{"field":"tb_current","value":["a899f51a-1350-11df-a1f1-0026b9348838","a897d1a4-1350-11df-a1f1-0026b9348838","a8a382ba-1350-11df-a1f1-0026b9348838"]}},{"label":"mg:","questionOptions":{"concept":"a8a063c8-1350-11df-a1f1-0026b9348838","max":"2000","min":"0","rendering":"number"},"type":"obs","hide":{"field":"tb_current","value":["a899e19c-1350-11df-a1f1-0026b9348838","a8ac5f2a-1350-11df-a1f1-0026b9348838","a8952e4a-1350-11df-a1f1-0026b9348838"]}},{"label":"mg/day:","questionOptions":{"concept":"a8a0744e-1350-11df-a1f1-0026b9348838","max":"2000","min":"0","rendering":"number"},"type":"obs","hide":{"field":"tb_current","value":["a896cc00-1350-11df-a1f1-0026b9348838","a8971c64-1350-11df-a1f1-0026b9348838"]}},{"label":"tabs:","questionOptions":{"concept":"a8a0630a-1350-11df-a1f1-0026b9348838","max":"180","min":"0","rendering":"number"},"type":"obs","hide":{"field":"tb_current","value":["b8aa06ca-93c6-40ea-b144-c74f841926f4"]}}]},{"label":"TB treatment completion date:","type":"obs","id":"tbComplDate","questionOptions":{"concept":"a8a176b4-1350-11df-a1f1-0026b9348838","rendering":"date"},"hide":{"hideWhenExpression":"onTbTreatment !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"TB treatment defaulted year:","type":"obs","id":"tbDefaultDate","questionOptions":{"concept":"a8a18758-1350-11df-a1f1-0026b9348838","rendering":"number"},"hide":{"hideWhenExpression":"onTbTreatment !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"type":"obsGroup","id":"tbadhere","label":"Patient adherence to TB medications","questionOptions":{"concept":"2a4b87dd-977d-4ce8-a321-1f13df4a31b2","rendering":"group"},"questions":[{"label":"Patient adherence to TB medications:","id":"tb_adherence","questionOptions":{"concept":"479decbd-e964-41c3-9576-98b39089ebd3","answers":[{"concept":"a8b0f882-1350-11df-a1f1-0026b9348838","label":"Good"},{"concept":"a73d20b3-d721-4763-a362-14a0c41a6b5e","label":"Fair"},{"concept":"fdaf8b47-ea14-4d28-80fa-e1da58a30e8b","label":"Poor"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(onTbTreatment) && onTbTreatment === 'a899b35c-1350-11df-a1f1-0026b9348838' && isEmpty(myValue)","message":"Patient on TB Treament. Please provide adherence history."}],"hide":{"hideWhenExpression":"onTbTreatment !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"Adherence (TB Treatment) reasons for poor/fair:","id":"adherenceTbTreatment","questionOptions":{"concept":"a89ebbc2-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89ced88-1350-11df-a1f1-0026b9348838","label":"Alcohol"},{"concept":"a8935fde-1350-11df-a1f1-0026b9348838","label":"Depression"},{"concept":"a89eac04-1350-11df-a1f1-0026b9348838","label":"Felt well"},{"concept":"a89eacc2-1350-11df-a1f1-0026b9348838","label":"Forgot"},{"concept":"7211031b-0685-44bc-a5e9-5a018d0173ea","label":"Gave away"},{"concept":"a8af4cee-1350-11df-a1f1-0026b9348838","label":"Lost/Ran out of pills"},{"concept":"ecafa614-49c5-4eba-84c7-b85b0d9e2c46","label":"Pill burden"},{"concept":"a89eb8c0-1350-11df-a1f1-0026b9348838","label":"Side effects"},{"concept":"a89eba46-1350-11df-a1f1-0026b9348838","label":"Stigma"},{"concept":"c0c9eab3-46f6-453c-b29d-dc1c242317c5","label":"Stock out"},{"concept":"a89de2d8-1350-11df-a1f1-0026b9348838","label":"Too ill"},{"concept":"a897fdaa-1350-11df-a1f1-0026b9348838","label":"Travel problems"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"multiCheckbox"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"onTbTreatment !== 'a899b35c-1350-11df-a1f1-0026b9348838' || !arrayContains(['a73d20b3-d721-4763-a362-14a0c41a6b5e','fdaf8b47-ea14-4d28-80fa-e1da58a30e8b'], tb_adherence)"}},{"label":"Adherence (TB Treatment): Other (specify):","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"type":"obs","id":"adherenceTbOther","validators":[],"hide":{"hideWhenExpression":"onTbTreatment !== 'a899b35c-1350-11df-a1f1-0026b9348838' || !arrayContains(['a73d20b3-d721-4763-a362-14a0c41a6b5e','fdaf8b47-ea14-4d28-80fa-e1da58a30e8b'], tb_adherence)"}}]}]},{"label":"Cryptococcal Secondary Prevention","questions":[{"label":"Cryptococcus Tx:","id":"cryptCurrent","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('a899e516-1350-11df-a1f1-0026b9348838')) ? undefined : HD.getObject('prevEnc').getValue('a899e516-1350-11df-a1f1-0026b9348838')","questionOptions":{"concept":"a899e516-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"None"},{"concept":"a8971e12-1350-11df-a1f1-0026b9348838","label":"Fluconazole 400mg"}],"rendering":"select"},"type":"obs","validators":[]}]},{"label":"Other Medications","questions":[{"label":"Please add any other medications the patient is taking","type":"obsGroup","questionOptions":{"concept":"a8a072c8-1350-11df-a1f1-0026b9348838","rendering":"repeating"},"questions":[{"label":"Other drugs:","questionOptions":{"concept":"a8a060c6-1350-11df-a1f1-0026b9348838","rendering":"drug"},"type":"obs","validators":[]}]}]}]},{"label":"Med Side Effects","sections":[{"label":"Side Effects/Toxicity","questions":[{"type":"obsGroup","label":"Side effects","id":"sideEff","questionOptions":{"concept":"a8a072c8-1350-11df-a1f1-0026b9348838","rendering":"group"},"questions":[{"label":"Any side effects attributable to any drug that the patient is currently taking:","id":"currSideEffect","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('30fc0cea-b6c7-48cc-bbfb-4eb53170ce41')) ? undefined : HD.getObject('prevEnc').getValue('30fc0cea-b6c7-48cc-bbfb-4eb53170ce41')","questionOptions":{"concept":"30fc0cea-b6c7-48cc-bbfb-4eb53170ce41","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(current_art_regimen_adult) && isEmpty(myValue) && arrayContains(current_art_regimen_adult, '98b0baf6-0b73-4429-9264-6233684b0969')","message":"Patient is on DTG. Kindly fill the side effects."}]}]},{"type":"obsGroup","questionOptions":{"rendering":"repeating","concept":"a8a072c8-1350-11df-a1f1-0026b9348838"},"label":"If yes drugs suspected to be causing side effects","questions":[{"label":"Drug:","id":"sideEffectDrug","questionOptions":{"concept":"1682a920-c93d-4aad-b9cb-4a2b2c41ff1a","rendering":"drug"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"currSideEffect !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}}]},{"label":"If yes, tick all that apply:","id":"sideEffectype","questionOptions":{"concept":"c2ecd5f7-4b47-47ae-b706-3dc5ed98b4db","answers":[{"concept":"a877c7f6-1350-11df-a1f1-0026b9348838","label":"Anaemia"},{"concept":"a8909060-1350-11df-a1f1-0026b9348838","label":"Hepatitis"},{"concept":"a89d0c0a-1350-11df-a1f1-0026b9348838","label":"IRIS"},{"concept":"a8a01dfa-1350-11df-a1f1-0026b9348838","label":"Lactic acidosis"},{"concept":"a89cee50-1350-11df-a1f1-0026b9348838","label":"Lipo-dystrophy"},{"concept":"a897fe86-1350-11df-a1f1-0026b9348838","label":"Neuropathy"},{"concept":"a8ad239c-1350-11df-a1f1-0026b9348838","label":"Persistent vomiting"},{"concept":"a895776a-1350-11df-a1f1-0026b9348838","label":"Rash"},{"concept":"a8a16d0e-1350-11df-a1f1-0026b9348838","label":"Steven-Johnson syndrome"},{"concept":"a8ad21e4-1350-11df-a1f1-0026b9348838","label":"Nausea"},{"concept":"a894b604-1350-11df-a1f1-0026b9348838","label":"Burning sensation"},{"concept":"a890861a-1350-11df-a1f1-0026b9348838","label":"Diarrhea"},{"concept":"a8966d1e-1350-11df-a1f1-0026b9348838","label":"Headache"},{"concept":"a8ad042a-1350-11df-a1f1-0026b9348838","label":"Fatigue"},{"concept":"a89366a0-1350-11df-a1f1-0026b9348838","label":"Jaundice"},{"concept":"a89836ee-1350-11df-a1f1-0026b9348838","label":"Dizzy"},{"concept":"a8932f00-1350-11df-a1f1-0026b9348838","label":"Abdominal pain"},{"concept":"a89cec02-1350-11df-a1f1-0026b9348838","label":"Anxiety"},{"concept":"c80dcaad-ea61-4b88-b1f7-c091d706c7de","label":"Nightmare"},{"concept":"a8935fde-1350-11df-a1f1-0026b9348838","label":"Depression"},{"concept":"a8ad3b02-1350-11df-a1f1-0026b9348838","label":"Confusion/abnormal thinking"},{"concept":"a8982de8-1350-11df-a1f1-0026b9348838","label":"Insomnia"},{"concept":"a8ae7ecc-1350-11df-a1f1-0026b9348838","label":"Poor concentration/ memory problems"},{"concept":"a8ad392c-1350-11df-a1f1-0026b9348838","label":"Paresthesia/painful neuropathy"},{"concept":"f5b8f79a-5460-49a5-983e-78cc203673da","label":"Suicide ideation"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"multiCheckbox"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(currSideEffect) && currSideEffect === 'a899b35c-1350-11df-a1f1-0026b9348838'","message":"Patient  marked as having side effects. Please provide list."}],"hide":{"hideWhenExpression":"currSideEffect !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"id":"reaction","label":"Severity of the reaction:","questionOptions":{"concept":"6c1b293c-4d8c-470f-9991-93cdde1274ff","answers":[{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"None"},{"concept":"a89efccc-1350-11df-a1f1-0026b9348838","label":"Mild"},{"concept":"a89efdee-1350-11df-a1f1-0026b9348838","label":"Moderate"},{"concept":"a89eff1a-1350-11df-a1f1-0026b9348838","label":"Severe"},{"concept":"a899b50a-1350-11df-a1f1-0026b9348838","label":"Unknown"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"currSideEffect !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"id":"action","label":"Action plan:","questionOptions":{"concept":"01fb96f5-8dc5-4481-8a11-240994b3b795","answers":[{"concept":"b5b9663c-9568-4f48-b70f-34c63b21bce4","label":"Stopped drugs"},{"concept":"a8a00158-1350-11df-a1f1-0026b9348838","label":"Substitute drugs"},{"concept":"a8a07bce-1350-11df-a1f1-0026b9348838","label":"Change drugs"},{"concept":"a89b7c50-1350-11df-a1f1-0026b9348838","label":"Switched drugs"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"currSideEffect !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"How certain are you the drug(s) is/are the cause of the reaction?","id":"certainityOfReaction","questionOptions":{"concept":"d0efbf5b-cbfc-48fc-a857-c0ca4d70f077","answers":[{"concept":"45eb8953-dc14-4c2e-8ce6-12cdf7da280a","label":"Certain"},{"concept":"07e9e14e-a718-4a9e-9479-1de79e1f614a","label":"Probable/likely"},{"concept":"260e6d24-1634-4467-a070-e8359f6827f7","label":"Possible"},{"concept":"66b46c63-7e75-4b1d-918a-1e17348c62f7","label":"Unlikely"},{"concept":"b1055e84-0e97-483a-ae8a-3f2dee84a623","label":"Conditional/unclassified"},{"concept":"80d03d9f-2510-4a95-b9d6-2613aaeebd21","label":"Unassessable/unclassified"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"currSideEffect !== 'a899b35c-1350-11df-a1f1-0026b9348838'"}}]}]},{"label":"Nutrition","sections":[{"label":"Nutrition Assessment and Diagnosis","questions":[{"label":"Nutrition status:","id":"nutritionStatus","questionOptions":{"rendering":"select","concept":"ac5f7974-3a71-4867-af59-0c30d68ce9d8","answers":[{"concept":"a899e7b4-1350-11df-a1f1-0026b9348838","label":"Normal"},{"concept":"1505faef-c8aa-422c-b356-da065b88ec9c","label":"Overweight"},{"concept":"2a60e784-1314-4454-91ba-7ea4cc2c3b15","label":"Obese"},{"concept":"0306539c-f24f-49f5-b059-b646adbec47c","label":"Severe acute malnutrition"},{"concept":"f0dd06d5-6174-447f-9a9c-f8635b4a6a6d","label":"Moderate  acute malnutrition"}]},"type":"obs","validators":[]}]}]},{"label":"Vitals","sections":[{"label":"Vital Signs","isExpanded":"true","questions":[{"label":"BP systolic:","id":"syst","questionOptions":{"rendering":"number","concept":"a8a65d5a-1350-11df-a1f1-0026b9348838","max":"250","min":"0"},"type":"obs","validators":[]},{"label":"BP diastolic:","id":"dias","questionOptions":{"rendering":"number","concept":"a8a65e36-1350-11df-a1f1-0026b9348838","max":"200","min":"0"},"type":"obs","validators":[]},{"label":"Pulse (Rate/min):","questionOptions":{"rendering":"number","concept":"a8a65f12-1350-11df-a1f1-0026b9348838","max":"230","min":"0"},"type":"obs","validators":[]},{"label":"Temp (C):","questionOptions":{"rendering":"number","concept":"a8a65fee-1350-11df-a1f1-0026b9348838","max":"43","min":"25"},"type":"obs","validators":[]},{"label":"Weight (Kg):","id":"weight","questionOptions":{"rendering":"number","concept":"a8a660ca-1350-11df-a1f1-0026b9348838","max":"150","min":"0"},"type":"obs","validators":[]},{"label":"Height (Cm):","id":"height","questionOptions":{"rendering":"number","concept":"a8a6619c-1350-11df-a1f1-0026b9348838","max":"228","min":"0"},"type":"obs","validators":[]},{"label":"Sp02:","questionOptions":{"rendering":"number","concept":"a8a66354-1350-11df-a1f1-0026b9348838","max":"100","min":"0"},"type":"obs","validators":[]},{"label":"BMI (Kg/m2):","id":"bmi","questionOptions":{"rendering":"number","concept":"a89c60c0-1350-11df-a1f1-0026b9348838","max":"100","min":"0","calculate":{"calculateExpression":"calcBMI(height,weight)"}},"type":"obs","validators":[]},{"label":"MUAC:","id":"muac","questionOptions":{"rendering":"number","concept":"a89c6188-1350-11df-a1f1-0026b9348838","max":"450","min":"60"},"type":"obs","validators":[]}]}]},{"label":"Current Symptoms","sections":[{"label":"Problem List","questions":[{"type":"obsGroup","questionOptions":{"concept":"a89c2d8a-1350-11df-a1f1-0026b9348838","rendering":"repeating"},"label":"Problem Added","questions":[{"label":"Problem added","id":"probAdded","questionOptions":{"concept":"a8ae835e-1350-11df-a1f1-0026b9348838","rendering":"problem"},"type":"obs","validators":[]}]}]},{"label":"TB Screening Questions","isExpanded":"true","questions":[{"label":"TB Symptoms:","required":"true","questionOptions":{"concept":"a8afcafc-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"None"},{"concept":"a8ad1276-1350-11df-a1f1-0026b9348838","label":"Breathlessness"},{"concept":"a892e4b4-1350-11df-a1f1-0026b9348838","label":"Chest pain"},{"concept":"a8afc8b8-1350-11df-a1f1-0026b9348838","label":"Cough = 2 weeks"},{"concept":"d7adae14-c386-49cc-8f7c-765d8ceec566","label":"Fever for = 2 weeks"},{"concept":"3f57aafc-7162-41da-a51b-6a804cb6f5e8","label":"New exposure to household contact with TB"},{"concept":"a89807f0-1350-11df-a1f1-0026b9348838","label":"Noticeable weight loss"},{"concept":"e1862fef-68ed-4df4-90dd-a00152f719aa","label":"Night sweats = 2 weeks"},{"concept":"a8ad462e-1350-11df-a1f1-0026b9348838","label":"Abdomen swelling"},{"concept":"f218c60e-4b54-475a-a4fa-facab9216da8","label":"Groin swelling"},{"concept":"a8a774b0-1350-11df-a1f1-0026b9348838","label":"Joints swelling"},{"concept":"4639388c-ee31-4dcf-abb4-ad71253493bb","label":"Neck swelling"}],"rendering":"multiCheckbox"},"type":"obs","validators":[]},{"label":"TB Status:","id":"tbstatus","required":"true","questionOptions":{"concept":"02ad9357-b996-4530-b1a4-aff91a105383","answers":[{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"No signs"},{"concept":"a8afcc82-1350-11df-a1f1-0026b9348838","label":"On TB treatment"},{"concept":"260e6d24-1634-4467-a070-e8359f6827f7","label":"Suspect"},{"concept":"a899ea48-1350-11df-a1f1-0026b9348838","label":"Not assessed"}],"rendering":"select"},"type":"obs","validators":[]}]},{"label":"STI","isExpanded":"true","questions":[{"label":"Do you have any of the following:","id":"sti","required":"true","questionOptions":{"concept":"a8b00562-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a8982b54-1350-11df-a1f1-0026b9348838","label":"Genital ulcers"},{"concept":"a8ad3062-1350-11df-a1f1-0026b9348838","label":"Urethral discharge"},{"concept":"a8ad2eb4-1350-11df-a1f1-0026b9348838","label":"Vaginal discharge"},{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"None"}],"rendering":"multiCheckbox"},"type":"obs","validators":[]},{"label":"STI partner notification:","questionOptions":{"concept":"7d7e1c44-a0d5-44ca-8481-8569b38c7e9b","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"},{"concept":"a89ad3a4-1350-11df-a1f1-0026b9348838","label":"N/A"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"isEmpty(sti) || arrayContains(['a899e0ac-1350-11df-a1f1-0026b9348838'],sti)"}}]},{"label":"Adult WHO Staging","isExpanded":"true","questions":[{"label":"If you are assigning a new WHO stage to patient today, select new WHO stage:","type":"obs","id":"adultWhoStage","questionOptions":{"concept":"a8a8331e-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89b2606-1350-11df-a1f1-0026b9348838","label":"1"},{"concept":"a89b26d8-1350-11df-a1f1-0026b9348838","label":"2"},{"concept":"a89b27be-1350-11df-a1f1-0026b9348838","label":"3"},{"concept":"a89b289a-1350-11df-a1f1-0026b9348838","label":"4"}],"rendering":"select"},"validators":[]},{"label":"Select criteria for new WHO stage:","type":"obs","questionOptions":{"concept":"a8ae88a4-1350-11df-a1f1-0026b9348838","rendering":"select-concept-answers"},"required":{"type":"conditionalRequired","message":"Patient marked as receiving new WHO stage. Please select stage.","referenceQuestionId":"adultWhoStage","referenceQuestionAnswers":["a89b2606-1350-11df-a1f1-0026b9348838"]},"validators":[]}]}]},{"label":"Test Results","sections":[{"label":"Chemistry Lab Tests","questions":[{"type":"obs","label":"Creatinine mmol/L:","id":"creatinine_test","questionOptions":{"concept":"a897e450-1350-11df-a1f1-0026b9348838","rendering":"number","showDate":"true","max":"11050","min":"0","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(creatinine_test) && isEmpty(myValue)","message":"Date result is required."}],"hide":{"hideWhenExpression":"isEmpty(creatinine_test)"}}},"validators":[]},{"type":"obs","label":"SGPT(ALT):","id":"sgptalt_test","questionOptions":{"concept":"a896ca48-1350-11df-a1f1-0026b9348838","rendering":"number","max":"3500","min":"0","showDate":"true","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(sgptalt_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(sgptalt_test)"}}},"validators":[]},{"type":"obs","label":"AST:","id":"ast_test","questionOptions":{"concept":"a896c8ae-1350-11df-a1f1-0026b9348838","rendering":"number","max":"3500","min":"0","showDate":"true","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(ast_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(ast_test)"}}},"validators":[]}]},{"label":"CBC","questions":[{"label":"Hgb g/dL:","id":"hgbgdl_test","questionOptions":{"concept":"a8908a16-1350-11df-a1f1-0026b9348838","max":"50","min":"0","showDate":"true","rendering":"number","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(hgbgdl_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(hgbgdl_test)"}}},"type":"obs","validators":[]},{"label":"WBC/mm3:","id":"testWBCmm","questionOptions":{"concept":"a896dea2-1350-11df-a1f1-0026b9348838","max":"500","min":"0","showDate":"true","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(testWBCmm) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(testWBCmm)"}},"rendering":"number"},"type":"obs","validators":[]},{"label":"Platelets:","id":"platelets_test","questionOptions":{"concept":"a8970954-1350-11df-a1f1-0026b9348838","rendering":"number","max":"450000","min":"0","showDate":"true","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(platelets_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(platelets_test)"}}},"type":"obs","validators":[]},{"label":"ALC/ mm3:","id":"alcmm_test","questionOptions":{"concept":"a898b20e-1350-11df-a1f1-0026b9348838","max":"500","min":"0","showDate":"true","rendering":"number","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(alcmm_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(alcmm_test)"}}},"type":"obs","validators":[]},{"label":"MCV:","id":"mcv_test","questionOptions":{"concept":"a898201e-1350-11df-a1f1-0026b9348838","max":"500","min":"0","showDate":"true","rendering":"number","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(mcv_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(mcv_test)"}}},"type":"obs","validators":[]}]},{"label":"CD4","questions":[{"type":"obs","id":"cd4_test","questionOptions":{"concept":"a8a8bb18-1350-11df-a1f1-0026b9348838","showDate":"true","rendering":"number","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(cd4_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(cd4_test)"}}},"label":"CD4 count:","validators":[]},{"type":"obs","label":"CD4 %:","id":"cd4percent_test","questionOptions":{"rendering":"number","max":"100","min":"0","showDate":"true","concept":"a8970a26-1350-11df-a1f1-0026b9348838","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(cd4percent_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(cd4percent_test)"}}},"validators":[]}]},{"label":"Viral Load","questions":[{"type":"obs","label":"Viral load:","id":"viralLoad_test","questionOptions":{"concept":"a8982474-1350-11df-a1f1-0026b9348838","rendering":"number","max":"10000000","min":"0","showDate":"true","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(viralLoad_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(viralLoad_test)"}}},"validators":[]}]},{"label":"TB Test","questions":[{"label":"Sputum gene xpert MTB:","id":"sputumgene_test","questionOptions":{"concept":"741517cf-8bac-4755-b289-8dd2a2df7962","answers":[{"concept":"a896f3a6-1350-11df-a1f1-0026b9348838","label":"Positive"},{"concept":"a896d2cc-1350-11df-a1f1-0026b9348838","label":"Negative"},{"concept":"a89a7ae4-1350-11df-a1f1-0026b9348838","label":"Indeterminate"},{"concept":"a89c3d8e-1350-11df-a1f1-0026b9348838","label":"Poor sample quality"}],"showDate":"true","rendering":"select","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(sputumgene_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(sputumgene_test)"}}},"type":"obs","validators":[]},{"label":"Sputum AFB smear:","id":"sputumafp_test","questionOptions":{"concept":"a8945d4e-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a8a45ab4-1350-11df-a1f1-0026b9348838","label":"1+"},{"concept":"a8a45bd6-1350-11df-a1f1-0026b9348838","label":"2+"},{"concept":"a8a45ca8-1350-11df-a1f1-0026b9348838","label":"3+"},{"concept":"a896f3a6-1350-11df-a1f1-0026b9348838","label":"Positive"},{"concept":"a896d2cc-1350-11df-a1f1-0026b9348838","label":"Negative"},{"concept":"a89a7ae4-1350-11df-a1f1-0026b9348838","label":"Indeterminate"},{"concept":"a89c3d8e-1350-11df-a1f1-0026b9348838","label":"Poor sample quality"}],"showDate":"true","rendering":"select","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(sputumafp_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(sputumafp_test)"}}},"type":"obs","validators":[]},{"label":"Sputum culture:","id":"sputumculture_test","questionOptions":{"concept":"a8a462a2-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a896f3a6-1350-11df-a1f1-0026b9348838","label":"Positive"},{"concept":"a896d2cc-1350-11df-a1f1-0026b9348838","label":"Negative"},{"concept":"a89c3d8e-1350-11df-a1f1-0026b9348838","label":"Poor sample quality"},{"concept":"0b4e9aa1-e470-46d1-9d2d-0d8a475561b9","label":"Mycobacterium tuberculosis"},{"concept":"a01149c4-7f0e-4d27-8f42-dc019e3330ec","label":"NonTuberculosis mycobacteria"}],"showDate":"true","rendering":"select","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(sputumculture_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(sputumculture_test)"}}},"type":"obs","validators":[]},{"label":"TST (Mantoux test):","id":"tst_test","questionOptions":{"concept":"a89d278a-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a896f3a6-1350-11df-a1f1-0026b9348838","label":"Positive"},{"concept":"a896d2cc-1350-11df-a1f1-0026b9348838","label":"Negative"},{"concept":"a89d2852-1350-11df-a1f1-0026b9348838","label":"Strongly positive"}],"showDate":"true","rendering":"select","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(tst_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(tst_test)"}}},"type":"obs","validators":[]}]},{"label":"Chest Xray","questions":[{"label":"CXR code:","id":"cxrcode_test","questionOptions":{"concept":"a8908192-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899e7b4-1350-11df-a1f1-0026b9348838","label":"Normal"},{"concept":"a8a6aa3a-1350-11df-a1f1-0026b9348838","label":"Cardiomegaly"},{"concept":"a8ae8c1e-1350-11df-a1f1-0026b9348838","label":"Cavitary"},{"concept":"a8ae8a66-1350-11df-a1f1-0026b9348838","label":"Diffuse abn/non-miliary"},{"concept":"a8ae8980-1350-11df-a1f1-0026b9348838","label":"Infiltrate"},{"concept":"a89a77ce-1350-11df-a1f1-0026b9348838","label":"Miliary"},{"concept":"a89a76fc-1350-11df-a1f1-0026b9348838","label":"PI effusion"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"showDate":"true","rendering":"select","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(cxrcode_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(cxrcode_test)"}}},"type":"obs","validators":[]}]},{"label":"Other Test","questions":[{"label":"VDRL:","id":"vdrl_test","questionOptions":{"concept":"a8945678-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a896f3a6-1350-11df-a1f1-0026b9348838","label":"Positive"},{"concept":"a896d2cc-1350-11df-a1f1-0026b9348838","label":"Negative"},{"concept":"a89a7ae4-1350-11df-a1f1-0026b9348838","label":"Indeterminate"},{"concept":"a89c3d8e-1350-11df-a1f1-0026b9348838","label":"Poor sample quality"},{"concept":"a89b3ab0-1350-11df-a1f1-0026b9348838","label":"Reactive"},{"concept":"a89b3b8c-1350-11df-a1f1-0026b9348838","label":"Non reactive"},{"concept":"a899ea48-1350-11df-a1f1-0026b9348838","label":"Not done"}],"showDate":"true","rendering":"select","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(vdrl_test) && isEmpty(myValue)","message":"Date result is required."}],"hide":{"hideWhenExpression":"isEmpty(vdrl_test)"}}},"type":"obs","validators":[]},{"label":"High vaginal swab:","id":"highvaginalswab_test","questionOptions":{"concept":"a8a0ab58-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a896dea2-1350-11df-a1f1-0026b9348838","label":"Serum white blood cell counts"},{"concept":"a896e56e-1350-11df-a1f1-0026b9348838","label":"Yeast cells"},{"concept":"a896d8bc-1350-11df-a1f1-0026b9348838","label":"Gram negative rods"},{"concept":"a8a0acde-1350-11df-a1f1-0026b9348838","label":"Gram negative cocci"},{"concept":"a896d632-1350-11df-a1f1-0026b9348838","label":"Gram positive rods"},{"concept":"a8a0ac20-1350-11df-a1f1-0026b9348838","label":"Gram positive cocci"},{"concept":"a8a0a856-1350-11df-a1f1-0026b9348838","label":"No abnormality detected"},{"concept":"a8a0a91e-1350-11df-a1f1-0026b9348838","label":"Presence of pus cells, urine"}],"showDate":"true","rendering":"select","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(highvaginalswab_test) && isEmpty(myValue)","message":"Date result is required."}],"hide":{"hideWhenExpression":"isEmpty(highvaginalswab_test)"}}},"type":"obs","validators":[]},{"label":"Drug sensitivity test:","id":"drugSensitivity_test","questionOptions":{"concept":"57677735-4310-4841-8902-dae4bac24d20","answers":[{"concept":"a896f3a6-1350-11df-a1f1-0026b9348838","label":"Positive"},{"concept":"a896d2cc-1350-11df-a1f1-0026b9348838","label":"Negative"},{"concept":"a89c3d8e-1350-11df-a1f1-0026b9348838","label":"Poor sample quality"}],"showDate":"true","rendering":"select","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(drugSensitivity_test) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(drugSensitivity_test)"}}},"type":"obs","validators":[]},{"label":"Crag test:","id":"cragTest","questionOptions":{"concept":"7243bed9-0bc7-4702-af28-a06ab1981e19","answers":[{"concept":"a896f3a6-1350-11df-a1f1-0026b9348838","label":"Positive"},{"concept":"a896d2cc-1350-11df-a1f1-0026b9348838","label":"Negative"},{"concept":"a89c3d8e-1350-11df-a1f1-0026b9348838","label":"Poor sample quality"}],"showDate":"true","rendering":"select","shownDateOptions":{"validators":[{"type":"date"},{"type":"js_expression","failsWhenExpression":"!isEmpty(cragTest) && isEmpty(myValue)","message":"Date is result is required."}],"hide":{"hideWhenExpression":"isEmpty(cragTest)"}}},"type":"obs","validators":[]}]}]},{"label":"Assessment","sections":[{"label":"Clinical Notes","isExpanded":"true","questions":[{"label":"Please enter the clinical notes below:","type":"obs","id":"assNote","default":"","questionOptions":{"concept":"23f710cc-7f9c-4255-9b6b-c3e240215dba","rendering":"textarea","rows":5}}]}]},{"label":"Medication Plan","sections":[{"label":"ART Plan","isExpanded":"true","questions":[{"required":"true","id":"arvPlan","label":"ART plan:","questionOptions":{"concept":"a89b75d4-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89b7908-1350-11df-a1f1-0026b9348838","label":"Continue regimen"},{"concept":"a898c938-1350-11df-a1f1-0026b9348838","label":"Change dose"},{"concept":"a89b7c50-1350-11df-a1f1-0026b9348838","label":"Change regimen"},{"concept":"a89b7ae8-1350-11df-a1f1-0026b9348838","label":"Change formulation"},{"concept":"a8a00158-1350-11df-a1f1-0026b9348838","label":"Drug substitution"},{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"Not on ARVS"},{"concept":"a8a00220-1350-11df-a1f1-0026b9348838","label":"Restart"},{"concept":"a89b77aa-1350-11df-a1f1-0026b9348838","label":"Start ARVs"},{"concept":"a89b7d36-1350-11df-a1f1-0026b9348838","label":"Stop all"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(onArt) && onArt === 'a899b35c-1350-11df-a1f1-0026b9348838' && !isEmpty(myValue) && arrayContains(['a89b77aa-1350-11df-a1f1-0026b9348838','a899e0ac-1350-11df-a1f1-0026b9348838','a8a00220-1350-11df-a1f1-0026b9348838'], myValue)","message":"Patient marked as on ART in ART History section. Therefore plan can only be drug substitution, continue regimen, change dose, chage regimen, change"},{"type":"js_expression","failsWhenExpression":"!isEmpty(onArt) && onArt === 'a899b42e-1350-11df-a1f1-0026b9348838' && !isEmpty(myValue) && !arrayContains(['a89b77aa-1350-11df-a1f1-0026b9348838','a899e0ac-1350-11df-a1f1-0026b9348838','a8a00220-1350-11df-a1f1-0026b9348838'], myValue)","message":"Patient marked as not on ART in ART History section. Therefore plan can only be None,Start"}]},{"label":"Reason to Start ART:","id":"arvStartReason","questionOptions":{"concept":"a89b6ce2-1350-11df-a1f1-0026b9348838","answers":[{"concept":"c9778159-958b-4f59-9053-a6171074726f","label":"CD4 less than 500"},{"concept":"a8af49d8-1350-11df-a1f1-0026b9348838","label":"Discordant couple"},{"concept":"a89b27be-1350-11df-a1f1-0026b9348838","label":"WHO stage 3"},{"concept":"a89b289a-1350-11df-a1f1-0026b9348838","label":"WHO stage 4"},{"concept":"a89fbedc-1350-11df-a1f1-0026b9348838","label":"PMTCT"},{"concept":"a8909060-1350-11df-a1f1-0026b9348838","label":"Hepatitis"},{"concept":"7fa72118-ef2a-4694-993a-014440024bbc","label":"Test and treat"},{"concept":"67f1f202-477a-4469-a2f9-769b339f682f","label":"Adherence counselling completed"}],"rendering":"multiCheckbox"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(arvPlan) && isEmpty(myValue) && arrayContains(['a89b77aa-1350-11df-a1f1-0026b9348838','a8a00220-1350-11df-a1f1-0026b9348838'], arvPlan)","message":"You indicated patient is (re)starting ART. Please provide reason."},{"type":"js_expression","failsWhenExpression":"!isEmpty(arvPlan) && !isEmpty(myValue) && !arrayContains(['a89b77aa-1350-11df-a1f1-0026b9348838','a8a00220-1350-11df-a1f1-0026b9348838'], arvPlan)","message":"You indicated patient is not (re)starting ART, therefore no reason for starting should be selected."}],"hide":{"hideWhenExpression":"!arrayContains(['a89b77aa-1350-11df-a1f1-0026b9348838','a8a00220-1350-11df-a1f1-0026b9348838'], arvPlan)"}},{"type":"obsGroup","label":"ART change reason","questionOptions":{"concept":"a8a07688-1350-11df-a1f1-0026b9348838","rendering":"group"},"questions":[{"id":"arvChangeReason","label":"Reason for stopping/change/substitution/interruption:","questionOptions":{"concept":"a89b7110-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89ce50e-1350-11df-a1f1-0026b9348838","label":"Adherence concerns"},{"concept":"a8981934-1350-11df-a1f1-0026b9348838","label":"Clinical treatment failure"},{"concept":"c0c9eab3-46f6-453c-b29d-dc1c242317c5","label":"Drug out of stock"},{"concept":"a890a96a-1350-11df-a1f1-0026b9348838","label":"Due to new TB"},{"concept":"057dae68-3d6f-4d79-926c-ed75a0ce7fd5","label":"Illness/hospitalization"},{"concept":"c6537e06-9fc2-47da-b679-e2a32824407f","label":"Immunologic failure"},{"concept":"a8a6f56c-1350-11df-a1f1-0026b9348838","label":"Lost to follow-up"},{"concept":"a8a07b10-1350-11df-a1f1-0026b9348838","label":"New drug available"},{"concept":"a8b03af0-1350-11df-a1f1-0026b9348838","label":"Patient lacks finances"},{"concept":"abe0cbb6-8d08-487a-b18e-7af873945fcc","label":"Planned Rx interruption"},{"concept":"ecafa614-49c5-4eba-84c7-b85b0d9e2c46","label":"Pill burden"},{"concept":"a89b7c50-1350-11df-a1f1-0026b9348838","label":"Changing to adult regimen"},{"concept":"a8909e8e-1350-11df-a1f1-0026b9348838","label":"Pregnancy"},{"concept":"e38b3e51-8a27-4bf6-b0c8-e0b285e4bb2f","label":"Risk of pregnancy"},{"concept":"a89d25fa-1350-11df-a1f1-0026b9348838","label":"Other patient desicion"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"},{"concept":"a890d1ba-1350-11df-a1f1-0026b9348838","label":"Toxicity"},{"concept":"93fe19e8-fec4-4e4b-85f1-239e1fabd761","label":"Virologic failure"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(arvPlan) && isEmpty(myValue) && arrayContains(['a898c938-1350-11df-a1f1-0026b9348838','a89b7c50-1350-11df-a1f1-0026b9348838','a89b7ae8-1350-11df-a1f1-0026b9348838','a8a00158-1350-11df-a1f1-0026b9348838','a89b7d36-1350-11df-a1f1-0026b9348838'], arvPlan)","message":"You indicated patient is changing/changing dose/substituting/stopping arvs, reason for changing should be selected."}],"hide":{"hideWhenExpression":"!arrayContains(['a898c938-1350-11df-a1f1-0026b9348838','a89b7c50-1350-11df-a1f1-0026b9348838','a89b7ae8-1350-11df-a1f1-0026b9348838','a8a00158-1350-11df-a1f1-0026b9348838','a89b7d36-1350-11df-a1f1-0026b9348838'], arvPlan)"}},{"id":"arvToxicityCause","label":"If toxicity, please provide cause:","questionOptions":{"concept":"a8a032fe-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a877c7f6-1350-11df-a1f1-0026b9348838","label":"Anaemia"},{"concept":"a8909060-1350-11df-a1f1-0026b9348838","label":"Hepatitis"},{"concept":"a89d0c0a-1350-11df-a1f1-0026b9348838","label":"IRIS"},{"concept":"a8a01dfa-1350-11df-a1f1-0026b9348838","label":"Lactic acidosis"},{"concept":"a89cee50-1350-11df-a1f1-0026b9348838","label":"Lipo-dystrophy"},{"concept":"a897fe86-1350-11df-a1f1-0026b9348838","label":"Neuropathy"},{"concept":"a8ad239c-1350-11df-a1f1-0026b9348838","label":"Persistent vomiting"},{"concept":"a895776a-1350-11df-a1f1-0026b9348838","label":"Rash"},{"concept":"a8a16d0e-1350-11df-a1f1-0026b9348838","label":"Steven-Johnson syndrome"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(arvChangeReason)&&isEmpty(myValue) && (arvChangeReason==='a890d1ba-1350-11df-a1f1-0026b9348838')","message":"You indicated patient is changing /changing dose/substituting/stopping arvs due to toxicity, cause should be selected."},{"type":"js_expression","failsWhenExpression":"!isEmpty(arvChangeReason) && !isEmpty(myValue) && (arvChangeReason!=='a890d1ba-1350-11df-a1f1-0026b9348838')","message":"You indicated patient is not changing/dose/substituting/stopping arvs due to toxicity, cause should be selected."}],"hide":{"hideWhenExpression":"arvChangeReason!=='a890d1ba-1350-11df-a1f1-0026b9348838'"}},{"label":"If toxicity: Other (specify):","id":"arvToxOther","type":"obs","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(arvToxicityCause) && isEmpty(myValue) && (arvToxicityCause==='a8aaf3e2-1350-11df-a1f1-0026b9348838')","message":"You indicated patient is changing /changing dose/substituting/stopping arvs due to other toxicity, indicate the other cause."},{"type":"js_expression","failsWhenExpression":"!isEmpty(arvToxicityCause) && !isEmpty(myValue) && (arvToxicityCause!=='a8aaf3e2-1350-11df-a1f1-0026b9348838')","message":"You indicated patient is not changing /changing dose/substituting/stopping arvs due to other toxicity, other cause is not required."}],"hide":{"hideWhenExpression":"arvToxicityCause!=='a8aaf3e2-1350-11df-a1f1-0026b9348838'"}}]},{"type":"obsGroup","label":"Eligible for ART","questionOptions":{"concept":"a8a17a7e-1350-11df-a1f1-0026b9348838","rendering":"group"},"questions":[{"label":"Eligible for ART but not started:","id":"artEligibleNotStarted","questionOptions":{"concept":"a89d26cc-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89ce50e-1350-11df-a1f1-0026b9348838","label":"Adherence concerns"},{"concept":"a8a8b26c-1350-11df-a1f1-0026b9348838","label":"On TB treatment"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"},{"concept":"a89d25fa-1350-11df-a1f1-0026b9348838","label":"Patient refused"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"arvPlan !== 'a899e0ac-1350-11df-a1f1-0026b9348838'"}},{"label":"Eligible for ART but not started: Other (specify):","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"type":"obs","id":"eligibleOther","validators":[],"hide":{"hideWhenExpression":"artEligibleNotStarted !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838'"}}]},{"label":"Plan treatment categories:","type":"obs","id":"planCate","questionOptions":{"concept":"74e3b23f-b94f-49d9-a237-6baaee73f163","answers":[{"concept":"034047bd-3fa1-4b2a-b0f0-2787e9b9f7b3","label":"First line regimen"},{"concept":"8f8a715d-e49a-4b2c-aa3a-83fa9d7a4254","label":"Second line regimen"},{"concept":"a90ebdd2-351f-485a-b850-4938fcca2729","label":"Third line regimen"}],"rendering":"select"},"hide":{"hideWhenExpression":"!arrayContains(['a89b7ae8-1350-11df-a1f1-0026b9348838', 'a898c938-1350-11df-a1f1-0026b9348838','a89b77aa-1350-11df-a1f1-0026b9348838','a8a00158-1350-11df-a1f1-0026b9348838','a89b7c50-1350-11df-a1f1-0026b9348838', 'a8a00220-1350-11df-a1f1-0026b9348838'],arvPlan)"}},{"label":"ART regimen started, adult:","id":"artStartedAdult","questionOptions":{"concept":"a89b6a62-1350-11df-a1f1-0026b9348838","answers":[{"concept":"1c4a75d0-cc91-4752-b0a5-4b833326ff7a","label":"TDF300mg/3TC300mg/EFV600mg"},{"concept":"18e86e1f-92b8-40cd-8266-0df0ab0a4a50","label":"DTG50mg/3TC300mg/TDF300mg"},{"concept":"6a73f32d-1870-4527-af6e-74443251ded2","label":"NVP200/ZDV300/3TC150"},{"concept":"a89cc876-1350-11df-a1f1-0026b9348838","label":"3TC300mg/TDF300mg"},{"concept":"a896758e-1350-11df-a1f1-0026b9348838","label":"3TC150mg/ZDV300mg"},{"concept":"a8afcf84-1350-11df-a1f1-0026b9348838","label":"Emtri200mg/TDF300(Truvada)"},{"concept":"a897e7c0-1350-11df-a1f1-0026b9348838","label":"Aluvia(Kaletra)200mg/LPV50mg"},{"concept":"a8afc066-1350-11df-a1f1-0026b9348838","label":"Atazanavir300/Ritonavir100"},{"concept":"dabf36cb-dd9a-4542-a8ef-874c1ee5be4a","label":"FTC200mg/RPV25mg/TDF245mg(Eviplera)"},{"concept":"98b0baf6-0b73-4429-9264-6233684b0969","label":"Dolutegravir 50mg"},{"concept":"a897f8a0-1350-11df-a1f1-0026b9348838","label":"Abacavir 300mg"},{"concept":"a89677e6-1350-11df-a1f1-0026b9348838","label":"Efavirenz 600mg"},{"concept":"a89673f4-1350-11df-a1f1-0026b9348838","label":"Lamivudine 150mg"},{"concept":"a8967656-1350-11df-a1f1-0026b9348838","label":"Nevirapine 200mg"},{"concept":"a8afbd64-1350-11df-a1f1-0026b9348838","label":"Raltegravir 400mg"},{"concept":"a897ea4a-1350-11df-a1f1-0026b9348838","label":"Zidovudine 300mg"},{"concept":"68a0a5dd-1e91-43a2-8dce-c6e84a14de04","label":"Darunavir 600mg"},{"concept":"1baf254e-1429-4fd9-8db1-edf6523cea13","label":"Ritonavir 100mg"},{"concept":"42ef7c4d-d6fb-49c0-a46e-019c42dea203","label":"Ritonavir 80mg"},{"concept":"38fbba9c-4b26-412d-9659-8dd649514d66","label":"Etravirine 100mg"}],"rendering":"multiCheckbox"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(arvPlan) && isEmpty(myValue) && arrayContains(['a89b7ae8-1350-11df-a1f1-0026b9348838', 'a898c938-1350-11df-a1f1-0026b9348838','a89b77aa-1350-11df-a1f1-0026b9348838','a8a00158-1350-11df-a1f1-0026b9348838','a89b7c50-1350-11df-a1f1-0026b9348838', 'a8a00220-1350-11df-a1f1-0026b9348838'], arvPlan)","message":"Based on the plan selected, you must choose a regimen."},{"type":"js_expression","failsWhenExpression":"!isEmpty(myValue) && !arrayContains(['a89b7ae8-1350-11df-a1f1-0026b9348838', 'a898c938-1350-11df-a1f1-0026b9348838','a89b77aa-1350-11df-a1f1-0026b9348838','a8a00158-1350-11df-a1f1-0026b9348838','a89b7c50-1350-11df-a1f1-0026b9348838', 'a8a00220-1350-11df-a1f1-0026b9348838'], arvPlan)","message":"Based on the plan selected, you may not choose a regimen."}],"hide":{"hideWhenExpression":"!arrayContains(['a89b7ae8-1350-11df-a1f1-0026b9348838', 'a898c938-1350-11df-a1f1-0026b9348838','a89b77aa-1350-11df-a1f1-0026b9348838','a8a00158-1350-11df-a1f1-0026b9348838','a89b7c50-1350-11df-a1f1-0026b9348838', 'a8a00220-1350-11df-a1f1-0026b9348838'],arvPlan)"}},{"label":"Indication for DTG based ART:","historicalExpression":"_.isEmpty(HD.getObject('prevEnc').getValue('3c54aae1-8b94-49b5-9961-b6aa7cacc03b')) ? undefined : HD.getObject('prevEnc').getValue('3c54aae1-8b94-49b5-9961-b6aa7cacc03b')","id":"dtgIndication","type":"obs","questionOptions":{"rendering":"select","concept":"3c54aae1-8b94-49b5-9961-b6aa7cacc03b","answers":[{"concept":"971e804e-89f1-41a2-9cfc-82922eed3db2","label":"ART intiation"},{"concept":"c9072a63-0075-4f5a-81af-1439d803a510","label":"Substitution for EFV intolerance/toxicity"},{"concept":"c3bfde9d-6f9c-4a92-ba74-bbf3af8c7061","label":"Substitution for NVP"},{"concept":"a90ebdd2-351f-485a-b850-4938fcca2729","label":"Third line regimen"},{"concept":"24d5c8f6-e92c-47fb-becb-9cfac89939c5","label":"Substitution for ATV/r in PWID"},{"concept":"30c754b8-e20a-470b-a2cf-b6f1f92c733d","label":"Substitution for PI/r in 2nd line with TB disease"},{"concept":"9af59394-f330-4616-b361-86642659808a","label":"Alternative for virally suppressed 1st line PI/r based regimen"},{"concept":"0df1b558-9598-4ca4-9678-7a1caae6265f","label":"Alternative regimen for pregnant/postpartum women"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}]},"validators":[{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(artStartedAdult) && arrayContains(artStartedAdult, '98b0baf6-0b73-4429-9264-6233684b0969')","message":"DTG indication is required."}],"hide":{"hideWhenExpression":"isEmpty(artStartedAdult) || !arrayContains(artStartedAdult, '98b0baf6-0b73-4429-9264-6233684b0969')"}},{"label":"Other (specify):","id":"otherDtgIndications","type":"obs","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"validators":[],"hide":{"hideWhenExpression":"dtgIndication !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838'"}}]},{"label":"PCP Prophylaxis Plan","isExpanded":"true","questions":[{"required":"true","id":"pcpProphylaxisPlan","label":"PCP prophylaxis plan:","questionOptions":{"concept":"a89b7e12-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89b7908-1350-11df-a1f1-0026b9348838","label":"Continue"},{"concept":"a89b7c50-1350-11df-a1f1-0026b9348838","label":"Change regimen"},{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"Not on PCP prophylaxis"},{"concept":"a89b77aa-1350-11df-a1f1-0026b9348838","label":"Start"},{"concept":"a89b7d36-1350-11df-a1f1-0026b9348838","label":"Stop"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(pcpProphylaxisCurrent) && !isEmpty(myValue) && !arrayContains(['a899e0ac-1350-11df-a1f1-0026b9348838','a89b77aa-1350-11df-a1f1-0026b9348838'],myValue)&&(pcpProphylaxisCurrent==='a899e0ac-1350-11df-a1f1-0026b9348838')","message":"Patient marked as not on PCP prophylaxis. Therefore plan can only be none or start."},{"type":"js_expression","failsWhenExpression":"!isEmpty(pcpProphylaxisCurrent) && !isEmpty(myValue) && arrayContains(['a8989396-1350-11df-a1f1-0026b9348838','a890c9e0-1350-11df-a1f1-0026b9348838'],pcpProphylaxisCurrent)&&!(arrayContains(['a89b7c50-1350-11df-a1f1-0026b9348838','a89b7d36-1350-11df-a1f1-0026b9348838','a89b7908-1350-11df-a1f1-0026b9348838'], myValue))","message":"Patient marked as on PCP Prophylaxis. Therefore plan can only be change regimen,continue or stop."}]},{"type":"obsGroup","label":"PCP prophylaxis change reason","questionOptions":{"concept":"a8a07750-1350-11df-a1f1-0026b9348838","rendering":"group"},"questions":[{"label":"If change/stop, reason:","id":"pcpProphylaxisChangeReason","questionOptions":{"concept":"a89b7eee-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a890d1ba-1350-11df-a1f1-0026b9348838","label":"Toxicity"},{"concept":"ecafa614-49c5-4eba-84c7-b85b0d9e2c46","label":"Pill burden"},{"concept":"c0c9eab3-46f6-453c-b29d-dc1c242317c5","label":"Drug out of stock"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(pcpProphylaxisPlan) && isEmpty(myValue) && arrayContains(['a89b7c50-1350-11df-a1f1-0026b9348838','a89b7d36-1350-11df-a1f1-0026b9348838'], pcpProphylaxisPlan)","message":"Patient changed drugs, please select reason."},{"type":"js_expression","failsWhenExpression":"!isEmpty(pcpProphylaxisPlan) && !isEmpty(myValue) && (!arrayContains(['a89b7c50-1350-11df-a1f1-0026b9348838','a89b7d36-1350-11df-a1f1-0026b9348838'], pcpProphylaxisPlan))","message":"Patient has not changed drugs, please do not select a reason."}],"hide":{"hideWhenExpression":"!arrayContains(['a89b7c50-1350-11df-a1f1-0026b9348838','a89b7d36-1350-11df-a1f1-0026b9348838'], pcpProphylaxisPlan)"}}]},{"id":"pcpToxicityCause","label":"If toxicity, please provide cause:","questionOptions":{"concept":"a8a032fe-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a877c7f6-1350-11df-a1f1-0026b9348838","label":"Anaemia"},{"concept":"a8909060-1350-11df-a1f1-0026b9348838","label":"Hepatitis"},{"concept":"a89d0c0a-1350-11df-a1f1-0026b9348838","label":"IRIS"},{"concept":"a8a01dfa-1350-11df-a1f1-0026b9348838","label":"Lactic acidosis"},{"concept":"a89cee50-1350-11df-a1f1-0026b9348838","label":"Lipo-dystrophy"},{"concept":"a897fe86-1350-11df-a1f1-0026b9348838","label":"Neuropathy"},{"concept":"a8ad239c-1350-11df-a1f1-0026b9348838","label":"Persistent vomiting"},{"concept":"a895776a-1350-11df-a1f1-0026b9348838","label":"Rash"},{"concept":"a8a16d0e-1350-11df-a1f1-0026b9348838","label":"Steven-johnson syndrome"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(pcpProphylaxisChangeReason) && isEmpty(myValue) && (pcpProphylaxisChangeReason==='a890d1ba-1350-11df-a1f1-0026b9348838')","message":"You indicated patient is changing /changing dose/substituting/stopping PCP due to toxicity, cause should be selected."},{"type":"js_expression","failsWhenExpression":"!isEmpty(pcpProphylaxisChangeReason) && !isEmpty(myValue) && (pcpProphylaxisChangeReason!=='a890d1ba-1350-11df-a1f1-0026b9348838')","message":"You indicated patient is not changing/dose/substituting/stopping PCP due to toxicity, cause should not be selected."}],"hide":{"hideWhenExpression":"pcpProphylaxisChangeReason !== 'a890d1ba-1350-11df-a1f1-0026b9348838'"}},{"label":"If toxicity, please provide cause: Other (specify):","id":"q25OtherToxicity","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(pcpToxicityCause) && isEmpty(myValue) && pcpToxicityCause==='a8aaf3e2-1350-11df-a1f1-0026b9348838'","message":"You indicated patient is changing /changing dose/substituting/stopping PCP due to other toxicity, indicate the other cause."}],"hide":{"hideWhenExpression":"pcpToxicityCause !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838'"}},{"label":"If Start/Change, regimen:","id":"pcpPlanMedication","questionOptions":{"concept":"a89b82cc-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a8989396-1350-11df-a1f1-0026b9348838","label":"Septrin"},{"concept":"a890c9e0-1350-11df-a1f1-0026b9348838","label":"Dapsone 100mg"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(pcpProphylaxisPlan) && isEmpty(myValue) && arrayContains(['a89b77aa-1350-11df-a1f1-0026b9348838', 'a89b7c50-1350-11df-a1f1-0026b9348838'], pcpProphylaxisPlan)","message":"You indicated patient is starting/continuing/changing PCP regimen. Please select regimen."}],"hide":{"hideWhenExpression":"!arrayContains(['a89b77aa-1350-11df-a1f1-0026b9348838', 'a89b7c50-1350-11df-a1f1-0026b9348838'], pcpProphylaxisPlan)"}}]},{"label":"TB Prophylaxis Plan","isExpanded":"true","questions":[{"label":"TB prophylaxis plan:","required":"true","id":"tbpropplan","questionOptions":{"concept":"a89c1cfa-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"Not on TB prophylaxis"},{"concept":"a89b7908-1350-11df-a1f1-0026b9348838","label":"Continue"},{"concept":"a89b77aa-1350-11df-a1f1-0026b9348838","label":"Start"},{"concept":"a8a00220-1350-11df-a1f1-0026b9348838","label":"Restart"},{"concept":"a89b7d36-1350-11df-a1f1-0026b9348838","label":"Stop"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(onTbProphylaxis) && onTbProphylaxis === 'a899b35c-1350-11df-a1f1-0026b9348838' && !isEmpty(myValue) && arrayContains(['a89b77aa-1350-11df-a1f1-0026b9348838','a899e0ac-1350-11df-a1f1-0026b9348838'], myValue)","message":"Patient marked as on TB prophylaxis in History section. Therefore plan can only be continue ,stop"},{"type":"js_expression","failsWhenExpression":"!isEmpty(onTbProphylaxis) && onTbProphylaxis === 'a899b42e-1350-11df-a1f1-0026b9348838' && !isEmpty(myValue) && !arrayContains(['a89b77aa-1350-11df-a1f1-0026b9348838','a899e0ac-1350-11df-a1f1-0026b9348838','a8a00220-1350-11df-a1f1-0026b9348838'], myValue)","message":"Patient marked as not on TB prophylaxis in History section. Therefore plan can only be None,Start,Restart"}]},{"type":"obsGroup","label":"stopping reason","questionOptions":{"concept":"a8a0780e-1350-11df-a1f1-0026b9348838","rendering":"group"},"questions":[{"label":"If stopping, reason:","required":"true","id":"tbpropreasonstop","questionOptions":{"concept":"a89c1e12-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a890a96a-1350-11df-a1f1-0026b9348838","label":"Active TB"},{"concept":"a89c1ef8-1350-11df-a1f1-0026b9348838","label":"Completed"},{"concept":"ecafa614-49c5-4eba-84c7-b85b0d9e2c46","label":"Pill burden"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"},{"concept":"a890d1ba-1350-11df-a1f1-0026b9348838","label":"Toxicity"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"tbpropplan !== 'a89b7d36-1350-11df-a1f1-0026b9348838'"}},{"label":"If toxicity, please provide cause:","id":"toxCause","questionOptions":{"concept":"a8a032fe-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a877c7f6-1350-11df-a1f1-0026b9348838","label":"Anaemia"},{"concept":"a8909060-1350-11df-a1f1-0026b9348838","label":"Hepatitis"},{"concept":"a89d0c0a-1350-11df-a1f1-0026b9348838","label":"IRIS"},{"concept":"a8a01dfa-1350-11df-a1f1-0026b9348838","label":"Lactic Acidosis"},{"concept":"a89cee50-1350-11df-a1f1-0026b9348838","label":"Lipo-dystrophy"},{"concept":"a897fe86-1350-11df-a1f1-0026b9348838","label":"Neuropathy"},{"concept":"a8ad239c-1350-11df-a1f1-0026b9348838","label":"Persistent vomiting"},{"concept":"a895776a-1350-11df-a1f1-0026b9348838","label":"Rash"},{"concept":"a8a16d0e-1350-11df-a1f1-0026b9348838","label":"Steven-Johnson syndrome"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"tbpropreasonstop !== 'a890d1ba-1350-11df-a1f1-0026b9348838'"}},{"label":"If toxicity, please provide cause: Other (specify):","id":"toxcauseOther","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"toxCause !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838'"}}]}]},{"label":"TB Treatment Plan","isExpanded":"true","questions":[{"label":"TB Treatment Started, detailed","type":"obsGroup","questionOptions":{"concept":"a89fe6f0-1350-11df-a1f1-0026b9348838","rendering":"group"},"questions":[{"label":"TB Treatment plan:","id":"tbTreatmentPlan","required":"true","questionOptions":{"concept":"a89c1fd4-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"Not on TB treatment"},{"concept":"a89b7908-1350-11df-a1f1-0026b9348838","label":"Continue regimen"},{"concept":"a89b77aa-1350-11df-a1f1-0026b9348838","label":"Start induction"},{"concept":"a89b7c50-1350-11df-a1f1-0026b9348838","label":"Change to continuation"},{"concept":"a898c938-1350-11df-a1f1-0026b9348838","label":"Re-dose"},{"concept":"a8a00158-1350-11df-a1f1-0026b9348838","label":"Substitution"},{"concept":"a8a00220-1350-11df-a1f1-0026b9348838","label":"Restart"},{"concept":"a89b7d36-1350-11df-a1f1-0026b9348838","label":"Stop"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(onTbTreatment) && onTbTreatment === 'a899b35c-1350-11df-a1f1-0026b9348838' && !isEmpty(myValue) && arrayContains(['a89b77aa-1350-11df-a1f1-0026b9348838','a899e0ac-1350-11df-a1f1-0026b9348838','a8a00220-1350-11df-a1f1-0026b9348838'], myValue)","message":"Patient marked as on TB in TB History section. Therefore plan can only be drug substitution, continue regimen, change dose, change regimen"},{"type":"js_expression","failsWhenExpression":"!isEmpty(onTbTreatment) && onTbTreatment === 'a899b42e-1350-11df-a1f1-0026b9348838' && !isEmpty(myValue) && !arrayContains(['a89b77aa-1350-11df-a1f1-0026b9348838','a899e0ac-1350-11df-a1f1-0026b9348838','a8a00220-1350-11df-a1f1-0026b9348838'], myValue)","message":"Patient marked as not on TB in TB History section. Therefore plan can only be None, start"}]}]},{"type":"obsGroup","label":"TB Plan Change Reason","questionOptions":{"concept":"a8a078cc-1350-11df-a1f1-0026b9348838","rendering":"group"},"questions":[{"label":"If plan is to stop/change/re-dose/substitute, reason:","id":"tbPlanChangeReason","questionOptions":{"concept":"a89c1fd4-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89c1ef8-1350-11df-a1f1-0026b9348838","label":"Completed"},{"concept":"c0c9eab3-46f6-453c-b29d-dc1c242317c5","label":"Drug out of stock"},{"concept":"ecafa614-49c5-4eba-84c7-b85b0d9e2c46","label":"Pill burden"},{"concept":"a89b7c50-1350-11df-a1f1-0026b9348838","label":"Changing to adult regimen"},{"concept":"a8909e8e-1350-11df-a1f1-0026b9348838","label":"Pregnancy"},{"concept":"e38b3e51-8a27-4bf6-b0c8-e0b285e4bb2f","label":"Risk of pregnancy"},{"concept":"a890d1ba-1350-11df-a1f1-0026b9348838","label":"Toxicity"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(tbTreatmentPlan) && isEmpty(myValue) && arrayContains(['a898c938-1350-11df-a1f1-0026b9348838','a89b7c50-1350-11df-a1f1-0026b9348838','a89b7ae8-1350-11df-a1f1-0026b9348838','a8a00158-1350-11df-a1f1-0026b9348838','a89b7d36-1350-11df-a1f1-0026b9348838'], tbTreatmentPlan)","message":"You indicated patient is changing/changing dose/substituting/stopping TB, reason for changing should be selected."}],"hide":{"hideWhenExpression":"!arrayContains(['a898c938-1350-11df-a1f1-0026b9348838','a89b7c50-1350-11df-a1f1-0026b9348838','a89b7ae8-1350-11df-a1f1-0026b9348838','a8a00158-1350-11df-a1f1-0026b9348838','a89b7d36-1350-11df-a1f1-0026b9348838'], tbTreatmentPlan)"}},{"label":"If toxicity, please provide cause:","id":"tbToxicityCause","questionOptions":{"concept":"a8a032fe-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a877c7f6-1350-11df-a1f1-0026b9348838","label":"Anaemia"},{"concept":"a8909060-1350-11df-a1f1-0026b9348838","label":"Hepatitis"},{"concept":"a89d0c0a-1350-11df-a1f1-0026b9348838","label":"IRIS"},{"concept":"a8a01dfa-1350-11df-a1f1-0026b9348838","label":"Lactic acidosis"},{"concept":"a89cee50-1350-11df-a1f1-0026b9348838","label":"Lipo-dystrophy"},{"concept":"a897fe86-1350-11df-a1f1-0026b9348838","label":"Neuropathy"},{"concept":"a8ad239c-1350-11df-a1f1-0026b9348838","label":"Persistent vomiting"},{"concept":"a895776a-1350-11df-a1f1-0026b9348838","label":"Rash"},{"concept":"a8a16d0e-1350-11df-a1f1-0026b9348838","label":"Steven-Johnson syndrome"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(tbPlanChangeReason)&&isEmpty(myValue) && (tbPlanChangeReason==='a890d1ba-1350-11df-a1f1-0026b9348838')","message":"You indicated patient is changing /changing dose/substituting/stopping arvs due to toxicity, cause should be selected."},{"type":"js_expression","failsWhenExpression":"!isEmpty(tbPlanChangeReason) && !isEmpty(myValue) && (tbPlanChangeReason!=='a890d1ba-1350-11df-a1f1-0026b9348838')","message":"You indicated patient is not changing/dose/substituting/stopping arvs due to toxicity, cause should be selected."}],"hide":{"hideWhenExpression":"tbPlanChangeReason !== 'a890d1ba-1350-11df-a1f1-0026b9348838'"}},{"label":"If restarting, reason:","id":"tbRestart","type":"obs","questionOptions":{"concept":"749d07cb-4994-4ce9-a39c-8a655a487fdd","answers":[{"concept":"15316528-adb9-4c33-b21f-2817f0cad769","label":"Defaulted"},{"concept":"f6951199-560d-414a-bb5b-1150f07fcea7","label":"Failure"},{"concept":"a8a3243c-1350-11df-a1f1-0026b9348838","label":"MDR TB regimen"},{"concept":"769822b2-1f1f-4cbb-8371-0e3949e060cc","label":"New treatment"},{"concept":"18ac99bf-0805-4929-8d0b-924455850a00","label":"Relapse/re-infection"}],"rendering":"select"},"validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(tbTreatmentPlan) && arrayContains(['a8a00220-1350-11df-a1f1-0026b9348838'], tbTreatmentPlan) && isEmpty(myValue)","message":"You indicated patient is restarting tb medication, therefore reason should be selected."},{"type":"js_expression","failsWhenExpression":"(isEmpty(tbTreatmentPlan) || !arrayContains(['a8a00220-1350-11df-a1f1-0026b9348838'], tbTreatmentPlan)) && !isEmpty(myValue)","message":"You did not indicate restart tb medication, therefore reason should not be selected."}],"hide":{"hideWhenExpression":"!arrayContains(['a8a00220-1350-11df-a1f1-0026b9348838'], tbTreatmentPlan)"}}]},{"type":"obsGroup","label":"tbMedPickupSite","questionOptions":{"concept":"b55a6d42-3189-4d4c-97bf-772dfe17b887","rendering":"group"},"questions":[{"label":"Site of TB meds pick-up:","id":"tbMedPickupSite","questionOptions":{"concept":"16db21cd-10cb-4c31-bb5a-b7619bfbea66","answers":[{"concept":"a89c2f42-1350-11df-a1f1-0026b9348838","label":"This AMPATH site"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"arrayContains(['a899e0ac-1350-11df-a1f1-0026b9348838', 'a89b7d36-1350-11df-a1f1-0026b9348838'], tbTreatmentPlan)"}},{"label":"Other Specify:","id":"medspickOther","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"tbMedPickupSite !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838'"}}]},{"label":"TB Treatment Started, detailed","type":"obsGroup","questionOptions":{"concept":"a89fe6f0-1350-11df-a1f1-0026b9348838","rendering":"repeating"},"questions":[{"label":"TB regimen started:","questionOptions":{"concept":"a89c218c-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899f51a-1350-11df-a1f1-0026b9348838","label":"RHZE"},{"concept":"a897d1a4-1350-11df-a1f1-0026b9348838","label":"RHZ"},{"concept":"a8a382ba-1350-11df-a1f1-0026b9348838","label":"RHE"},{"concept":"a89b1ca6-1350-11df-a1f1-0026b9348838","label":"RH"},{"concept":"a899e19c-1350-11df-a1f1-0026b9348838","label":"EH"},{"concept":"a8971c64-1350-11df-a1f1-0026b9348838","label":"Ethambutol"},{"concept":"a8a3243c-1350-11df-a1f1-0026b9348838","label":"MDR drugs"},{"concept":"a896cc00-1350-11df-a1f1-0026b9348838","label":"INH"},{"concept":"a8ac5f2a-1350-11df-a1f1-0026b9348838","label":"Pyrazinamide"},{"concept":"a8952e4a-1350-11df-a1f1-0026b9348838","label":"Streptomycin"},{"concept":"b8aa06ca-93c6-40ea-b144-c74f841926f4","label":"Rifabutin"},{"concept":"a897d0be-1350-11df-a1f1-0026b9348838","label":"Rifampicin"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"id":"q26f","type":"obs","validators":[],"hide":{"hideWhenExpression":"arrayContains(['a89b7908-1350-11df-a1f1-0026b9348838','a899e0ac-1350-11df-a1f1-0026b9348838', 'a89b7d36-1350-11df-a1f1-0026b9348838'], tbTreatmentPlan)"}},{"label":"tabs/day:","questionOptions":{"concept":"a8a07386-1350-11df-a1f1-0026b9348838","max":"30","min":"0","rendering":"number"},"type":"obs","hide":{"field":"q26f","value":["a899f51a-1350-11df-a1f1-0026b9348838","a897d1a4-1350-11df-a1f1-0026b9348838","a8a382ba-1350-11df-a1f1-0026b9348838"]}},{"label":"mg:","questionOptions":{"concept":"a8a063c8-1350-11df-a1f1-0026b9348838","max":"2000","min":"0","rendering":"number"},"type":"obs","hide":{"field":"q26f","value":["a899e19c-1350-11df-a1f1-0026b9348838","a8ac5f2a-1350-11df-a1f1-0026b9348838","a8952e4a-1350-11df-a1f1-0026b9348838"]}},{"label":"mg/day:","questionOptions":{"concept":"a8a0744e-1350-11df-a1f1-0026b9348838","max":"2000","min":"0","rendering":"number"},"type":"obs","hide":{"field":"q26f","value":["a896cc00-1350-11df-a1f1-0026b9348838","a8971c64-1350-11df-a1f1-0026b9348838"]}},{"label":"tabs:","questionOptions":{"concept":"a8a0630a-1350-11df-a1f1-0026b9348838","max":"180","min":"0","rendering":"number"},"type":"obs","hide":{"field":"q26f","value":["b8aa06ca-93c6-40ea-b144-c74f841926f4"]}}]}]},{"label":"Cryptococcal Treatment Plan","questions":[{"label":"Cryptococcal treatment plan","type":"obs","questionOptions":{"concept":"a89c2790-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89b7908-1350-11df-a1f1-0026b9348838","label":"Continue"},{"concept":"a89b7c50-1350-11df-a1f1-0026b9348838","label":"Change regimen"},{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"None"},{"concept":"a89b77aa-1350-11df-a1f1-0026b9348838","label":"Start"},{"concept":"a89b7d36-1350-11df-a1f1-0026b9348838","label":"Stop"}],"rendering":"select"},"validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(cryptCurrent) && !isEmpty(myValue) && !arrayContains(['a899e0ac-1350-11df-a1f1-0026b9348838','a89b77aa-1350-11df-a1f1-0026b9348838'],myValue)&&(cryptCurrent==='a899e0ac-1350-11df-a1f1-0026b9348838')","message":"Patient marked as not on Cryptococcus Treatment. Therefore plan can only be none or start."}]}]},{"label":"Additional Medication Orders","questions":[{"type":"obsGroup","label":"Additional medication orders","questionOptions":{"rendering":"repeating","concept":"a8a0654e-1350-11df-a1f1-0026b9348838"},"questions":[{"label":"Drug","questionOptions":{"concept":"a8a060c6-1350-11df-a1f1-0026b9348838","rendering":"drug"},"type":"obs","validators":[]},{"label":"Frequency","questionOptions":{"concept":"a8a06184-1350-11df-a1f1-0026b9348838","answers":[{"label":"Once a day","concept":"a8a05dc4-1350-11df-a1f1-0026b9348838"},{"label":"Twice a day","concept":"a8a05aea-1350-11df-a1f1-0026b9348838"},{"label":"Three times a day","concept":"a8a05b9e-1350-11df-a1f1-0026b9348838"},{"label":"Four times a day","concept":"a8a05cfc-1350-11df-a1f1-0026b9348838"},{"label":"As needed","concept":"9c1dcb23-dc0c-46b2-a755-875ab6d78fc2"},{"label":"Other","concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838"}],"rendering":"select"},"type":"obs","validators":[]},{"label":"If tabs, number","questionOptions":{"concept":"a8a0630a-1350-11df-a1f1-0026b9348838","rendering":"number"},"type":"obs"},{"label":"If caps, number","questionOptions":{"concept":"ea404923-fe2b-4812-aec5-3be7fbe712f7","rendering":"number"},"type":"obs"},{"label":"If mg, number","questionOptions":{"concept":"a8a063c8-1350-11df-a1f1-0026b9348838","rendering":"number"},"type":"obs"},{"label":"If ml, number","questionOptions":{"concept":"a8a08286-1350-11df-a1f1-0026b9348838","rendering":"number"},"type":"obs"}]}]}]},{"label":"Plan","sections":[{"label":"Family Planning Plan","isExpanded":"true","questions":[{"label":"Dispense condom today?","id":"condomDispensed","questionOptions":{"concept":"a8b034d8-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[]},{"label":"Continue modern contraception method?","id":"contCurrentFP","questionOptions":{"concept":"9bd08995-617e-407a-bf5d-79f29fbdb289","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"!isEmpty(fpMethod) && isEmpty(myValue) && arrayContains(['a8a713f8-1350-11df-a1f1-0026b9348838', 'a123d949-31f3-4abf-98e3-8504e17ebc00', 'feb48308-a56f-4754-8e8f-8c1698e570cb', 'f8c66a32-3660-4233-ae51-d3a4a1eac44e', '236dba53-1062-46b4-8067-ec8711897dbf', 'a8988b44-1350-11df-a1f1-0026b9348838', 'a897dbd6-1350-11df-a1f1-0026b9348838', 'eaa5796d-0b1c-478b-8c9d-d23cf4c3bddc'], fpMethod)","message":"Based on modern contraception method selected, you must answer this question."}],"hide":{"hideWhenExpression":"fpMethod === 'a899e0ac-1350-11df-a1f1-0026b9348838'"}},{"label":"Does patient wish to start modern contraception method?","id":"famPlanningPlan","questionOptions":{"concept":"d1d7056f-42ed-4948-b04f-ef6146c789be","answers":[{"concept":"a899b35c-1350-11df-a1f1-0026b9348838","label":"Yes"},{"concept":"a899b42e-1350-11df-a1f1-0026b9348838","label":"No"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(contCurrentFP) && contCurrentFP !== 'a899b35c-1350-11df-a1f1-0026b9348838'","message":"Patient does not wish to continue with modern contraception method. Please indicate if they wish to start."}],"hide":{"hideWhenExpression":"isEmpty(contCurrentFP) && fpMethod !== 'a899e0ac-1350-11df-a1f1-0026b9348838' || contCurrentFP === 'a899b35c-1350-11df-a1f1-0026b9348838'"}},{"label":"If yes, modern contraception method chosen:","id":"famPlanChosen","questionOptions":{"concept":"2d55cabe-a778-40a3-9b85-613889037a11","answers":[{"concept":"a8a713f8-1350-11df-a1f1-0026b9348838","label":"Bilateral tubal ligation"},{"concept":"a123d949-31f3-4abf-98e3-8504e17ebc00","label":"3-year implant"},{"concept":"feb48308-a56f-4754-8e8f-8c1698e570cb","label":"5-year implant"},{"concept":"f8c66a32-3660-4233-ae51-d3a4a1eac44e","label":"IUCD copper"},{"concept":"236dba53-1062-46b4-8067-ec8711897dbf","label":"IUCD hormonal"},{"concept":"a8988b44-1350-11df-a1f1-0026b9348838","label":"Injectables (Depo)"},{"concept":"a897dbd6-1350-11df-a1f1-0026b9348838","label":"OCP"},{"concept":"eaa5796d-0b1c-478b-8c9d-d23cf4c3bddc","label":"Vasectomy"}],"rendering":"select"},"type":"obs","validators":[{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !isEmpty(famPlanningPlan) && famPlanningPlan === 'a899b35c-1350-11df-a1f1-0026b9348838'","message":"Patient wishes to start modern contraception method. Please choose method."}],"hide":{"hideWhenExpression":"famPlanningPlan!== 'a899b35c-1350-11df-a1f1-0026b9348838'"}}]},{"label":"Test Orders","isExpanded":"true","questions":[{"type":"obsGroup","label":"Test orders","questionOptions":{"concept":"af46861e-597a-48a3-b3d4-a134d0b1c5fa","rendering":"group"},"questions":[{"label":"Tests Ordered","id":"order1","type":"testOrder","questionOptions":{"rendering":"repeating","orderSettingUuid":"6f0c9a92-6f24-11e3-af88-005056821db0","orderType":"testorder","selectableOrders":[{"concept":"a8982474-1350-11df-a1f1-0026b9348838","label":"Viral load"},{"concept":"a896cce6-1350-11df-a1f1-0026b9348838","label":"CD4"},{"concept":"7243bed9-0bc7-4702-af28-a06ab1981e19","label":"Crag test"},{"concept":"57677735-4310-4841-8902-dae4bac24d20","label":"DST"},{"concept":"a898fe80-1350-11df-a1f1-0026b9348838","label":"HIV DNA PCR "},{"concept":"a8908192-1350-11df-a1f1-0026b9348838","label":"CXR"},{"concept":"a8945d4e-1350-11df-a1f1-0026b9348838","label":"Sputum AFB"},{"concept":"a897e450-1350-11df-a1f1-0026b9348838","label":"Creatinine"},{"concept":"a898f50c-1350-11df-a1f1-0026b9348838","label":"CBC"},{"concept":"a896ca48-1350-11df-a1f1-0026b9348838","label":"SGPT(ALT)"},{"concept":"a896c8ae-1350-11df-a1f1-0026b9348838","label":"AST"},{"concept":"a8970a26-1350-11df-a1f1-0026b9348838","label":" CD4 %"},{"concept":"a8999fb6-1350-11df-a1f1-0026b9348838","label":"Elisa"},{"concept":"a8999dfe-1350-11df-a1f1-0026b9348838","label":"Rapid HIV "},{"concept":"a8a47094-1350-11df-a1f1-0026b9348838","label":"TB PCR "},{"concept":"741517cf-8bac-4755-b289-8dd2a2df7962","label":"Gene Xpert"},{"concept":"a8908a16-1350-11df-a1f1-0026b9348838","label":"Hgb"},{"concept":"a8a462a2-1350-11df-a1f1-0026b9348838","label":"TB Culture"},{"concept":"a8945678-1350-11df-a1f1-0026b9348838","label":"VDRL"},{"concept":"a894590c-1350-11df-a1f1-0026b9348838","label":"Urinalysis"},{"concept":"a8af7520-1350-11df-a1f1-0026b9348838","label":"HbA1C"},{"concept":"7129af13-e39a-43b0-9923-6d1de22c9c5e","label":"Microalbumin"},{"concept":"a89a7418-1350-11df-a1f1-0026b9348838","label":"Potassium"},{"concept":"a89dda72-1350-11df-a1f1-0026b9348838","label":"ECGn"},{"concept":"a89dd9aa-1350-11df-a1f1-0026b9348838","label":"Echo"}]}},{"label":"Test ordered: Other (specify):","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"type":"obs","validators":[]},{"label":"Viral load justification:","type":"obs","id":"vljust","questionOptions":{"concept":"0a98f01f-57f1-44b7-aacf-e1121650a967","rendering":"select","answers":[{"concept":"5931c4d4-4406-4d71-b75d-2205d905cc24","label":"Routine VL"},{"concept":"e43ddeb6-3984-499c-a280-3bade1039608","label":"Confirmation of treatment failure (repeat VL at 3M) "},{"concept":"a8981934-1350-11df-a1f1-0026b9348838","label":"Clinical failure"},{"concept":"c6537e06-9fc2-47da-b679-e2a32824407f","label":"Immunological failure"},{"concept":"a8a00158-1350-11df-a1f1-0026b9348838","label":"Single Drug Substitution"},{"concept":"a89d109c-1350-11df-a1f1-0026b9348838","label":"Pregnant Mother"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}]},"validators":[{"type":"js_expression","failsWhenExpression":"isEmpty(myValue) && !(isEmpty(order1) || !arrayContains(order1, 'a8982474-1350-11df-a1f1-0026b9348838'))","message":"Viral load justification required."}],"hide":{"hideWhenExpression":"isEmpty(order1) || !arrayContains(order1, 'a8982474-1350-11df-a1f1-0026b9348838')"}}]}]},{"label":"Positive Health Diginity & Prevention Services","isExpanded":"true","questions":[{"label":"PHDP:","required":"true","questionOptions":{"concept":"e7819751-a5b0-485d-a2bc-9d4aa69aa1e4","answers":[{"concept":"a8a8b352-1350-11df-a1f1-0026b9348838","label":"Adherence counselling"},{"concept":"b76021d2-38c7-42ff-b2eb-0bd558396ef7","label":"STI screening"},{"concept":"a2c49302-edb4-4baa-8440-2448eafd0ec1","label":"Substance use"},{"concept":"a89accc4-1350-11df-a1f1-0026b9348838","label":"Disclosure to sex partner"},{"concept":"a8a4636a-1350-11df-a1f1-0026b9348838","label":"Partner testing"},{"concept":"f0a280e8-eb88-41a8-837a-f9949ed1b9cd","label":"Condom distribution"},{"concept":"91f43249-73c7-427c-8300-2038fc0d6be8","label":"Needle exchange"},{"concept":"05656545-86be-4605-9527-34fb580534b1","label":"Targeted risk reduction"},{"concept":"a89ad3a4-1350-11df-a1f1-0026b9348838","label":"N/A"}],"rendering":"multiCheckbox"},"type":"obs","validators":[]}]},{"label":"Referrals","questions":[{"type":"obsGroup","label":"Referrals","questionOptions":{"concept":"a8a07c8c-1350-11df-a1f1-0026b9348838","rendering":"group"},"questions":[{"label":"Referrals made to the patient:","id":"referrals","questionOptions":{"concept":"a89c2344-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a899e0ac-1350-11df-a1f1-0026b9348838","label":"None"},{"concept":"a89fbb12-1350-11df-a1f1-0026b9348838","label":"OVC"},{"concept":"a8a066ca-1350-11df-a1f1-0026b9348838","label":"ENT"},{"concept":"a8a8b352-1350-11df-a1f1-0026b9348838","label":"Adherence counselling"},{"concept":"a2187952-59e0-449b-895f-5102b7aed49c","label":"Cardiology"},{"concept":"0fa18f9a-95c8-4ab3-81ed-a1bac69063fa","label":"Diabetes"},{"concept":"a89accc4-1350-11df-a1f1-0026b9348838","label":"Disclosure counselling"},{"concept":"057dae68-3d6f-4d79-926c-ed75a0ce7fd5","label":"Hospitalization"},{"concept":"073ea366-834b-49bd-b4db-ce4e6c61bbc3","label":"Oncology"},{"concept":"a8a8b42e-1350-11df-a1f1-0026b9348838","label":"Mental health services"},{"concept":"a8a8afd8-1350-11df-a1f1-0026b9348838","label":"Nutritional support"},{"concept":"a89e2df6-1350-11df-a1f1-0026b9348838","label":"Psychosocial support"},{"concept":"a8a8b26c-1350-11df-a1f1-0026b9348838","label":"TB/DOT program"},{"concept":"c65fcd72-1f3f-4450-b93f-90a87ae64d55","label":"Surgery"},{"concept":"0d516ea7-218f-43d4-b5c0-58d126529271","label":"Dermatology"},{"concept":"a89e2d1a-1350-11df-a1f1-0026b9348838","label":"Social work"},{"concept":"7c6f0599-3e3e-4f42-87a2-2ce66f1e96d0","label":"Differentiated care program"},{"concept":"a8a06788-1350-11df-a1f1-0026b9348838","label":"Ophthalmology "},{"concept":"a8a002e8-1350-11df-a1f1-0026b9348838","label":"Reproductive health "},{"concept":"a9431295-9862-405b-b694-534f093ca0ad","label":"MDT Program"},{"concept":"7c941f38-ede1-4a94-938f-6c4083339673","label":"Resistance clinic"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"multiCheckbox"},"type":"obs","validators":[]},{"label":"Referrals made to the patient: Other (specify):","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"referrals !== 'a8aaf3e2-1350-11df-a1f1-0026b9348838'"}}]},{"label":"If referred for hospitalization, choose location:","questionOptions":{"concept":"a89c2420-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89c25d8-1350-11df-a1f1-0026b9348838","label":"Local health centre/hospital"},{"concept":"a89c24fc-1350-11df-a1f1-0026b9348838","label":"MTRH"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"isEmpty(referrals) || !arrayContains(referrals, '057dae68-3d6f-4d79-926c-ed75a0ce7fd5')"}},{"label":"Reason  for hospitalization","type":"obsGroup","questionOptions":{"concept":"a8a07c8c-1350-11df-a1f1-0026b9348838","rendering":"repeating"},"questions":[{"label":"Reason for hospitalization:","questionOptions":{"concept":"a8a07a48-1350-11df-a1f1-0026b9348838","rendering":"problem"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"isEmpty(referrals) || !arrayContains(referrals, '057dae68-3d6f-4d79-926c-ed75a0ce7fd5')"}}]}]},{"label":"Transfer Out","questions":[{"type":"obsGroup","label":"Transfer care to other centre","questionOptions":{"concept":"a8a170e2-1350-11df-a1f1-0026b9348838","rendering":"group"},"questions":[{"label":"Transfer care to other centre:","id":"careStatus","questionOptions":{"concept":"a89c2e5c-1350-11df-a1f1-0026b9348838","answers":[{"concept":"a89c2f42-1350-11df-a1f1-0026b9348838","label":"AMPATH"},{"concept":"a89c301e-1350-11df-a1f1-0026b9348838","label":"Non-AMPATH"},{"concept":"a8a17d80-1350-11df-a1f1-0026b9348838","label":"MCH"}],"rendering":"select"},"type":"obs","validators":[]},{"type":"personAttribute","label":"Specify name of AMPATH clinic to which patient is being referred:","id":"transfered_out_to_ampath","required":"false","questionOptions":{"rendering":"ui-select-extended","attributeType":"8d87236c-c2cc-11de-8d13-0010c6dffd0f"},"hide":{"hideWhenExpression":"careStatus !== 'a89c2f42-1350-11df-a1f1-0026b9348838'"}},{"type":"obs","label":"If Non-AMPATH specify where the patient is being referred:","id":"transfered_out_to_non_ampath","required":"false","default":"","questionOptions":{"rendering":"text","concept":"a8a06fc6-1350-11df-a1f1-0026b9348838"},"hide":{"hideWhenExpression":"careStatus !== 'a89c301e-1350-11df-a1f1-0026b9348838'"}}]}]},{"label":"DC Outcome","questions":[{"label":"Differentiated care plan:","id":"dcCarePlan","questionOptions":{"concept":"59f21b48-ccf9-40b8-9fcb-92bdbf90a4dd","answers":[{"concept":"a8af5018-1350-11df-a1f1-0026b9348838","label":"Continue in DC"},{"concept":"a8af50f4-1350-11df-a1f1-0026b9348838","label":"Exit from DC"}],"rendering":"select"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"visitTypeUuid !== '9bf3fadd-4938-40fa-a093-4e01bf197876'"}},{"type":"obsGroup","label":"Reason for exit","questionOptions":{"concept":"3665d0ef-3718-47b2-9091-8b685bda412d","rendering":"group"},"questions":[{"label":"Reason for exit:","id":"dcExit","questionOptions":{"concept":"a89e3f94-1350-11df-a1f1-0026b9348838","answers":[{"concept":"6daff4ce-bce7-41f5-9141-17e694155180","label":"Self transfer out of facility"},{"concept":"a89ce50e-1350-11df-a1f1-0026b9348838","label":"Adherence concerns"},{"concept":"a8ce0d44-8cd4-4eb0-9441-dd27cc328caf","label":"High VL"},{"concept":"a89ac184-1350-11df-a1f1-0026b9348838","label":"New OI/new chronic illness"},{"concept":"a8909e8e-1350-11df-a1f1-0026b9348838","label":"Pregnancy"},{"concept":"5be50fc2-9e50-4d64-8a0c-f08ed7a34bb9","label":"Voluntary request to exit"},{"concept":"a8aaf3e2-1350-11df-a1f1-0026b9348838","label":"Other"}],"rendering":"multiCheckbox"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"isEmpty(dcCarePlan) || dcCarePlan !== 'a8af50f4-1350-11df-a1f1-0026b9348838'"}},{"label":"Other specify:","id":"dcOther","questionOptions":{"concept":"a8a06fc6-1350-11df-a1f1-0026b9348838","rendering":"text"},"type":"obs","validators":[],"hide":{"hideWhenExpression":"isEmpty(dcExit) || !arrayContains(dcExit, 'a8aaf3e2-1350-11df-a1f1-0026b9348838')"}}]}]},{"label":"Next Appointment","isExpanded":"true","questions":[{"label":"Return to clinic date:","type":"obs","required":"true","id":"rtc","questionOptions":{"concept":"a8a666ba-1350-11df-a1f1-0026b9348838","rendering":"date","weeksList":[2,4,6,8,12,16,24,36]},"validators":[{"type":"date","allowFutureDates":"true"},{"type":"js_expression","failsWhenExpression":"(new moment(encDate)).isAfter((new moment(myValue)), 'day') || (new moment(encDate)).isSame((new moment(myValue)), 'day')","message":"Return to clinic date should be greater than the encounter date."}]}]}]}],"referencedForms":[{"formName":"component_preclinic-review-v1.0","alias":"pcr1","ref":{"uuid":"8fcac059-c86c-4182-85c0-9653e1568ed4","display":"Preclinic Review v1.0 Component"}},{"formName":"component_hospitalization","alias":"hosp","ref":{"uuid":"77d6652f-4653-4434-af6b-6dab84117044","display":"Hospitalization Component"}},{"formName":"component_immunization-v1.0","alias":"immn1","ref":{"uuid":"11b15110-e325-4d0d-bd54-5f55b21301f5","display":"Immunization v1.0 Component"}},{"formName":"component_art-v1.2","alias":"art12","ref":{"uuid":"49eb4af7-7e05-4b3f-aeb0-d1931e27909b","display":"Art v1.2 Component"}},{"formName":"component_art-v1.4","alias":"art14","ref":{"uuid":"fe2cc2aa-ea65-42a1-a1fc-560fff8d5480","display":"Art v1.4 DTG Component"}},{"formName":"component_pcp-prophy-v1.2","alias":"pcp12","ref":{"uuid":"6493a2dd-d3c3-4ff5-9b2d-02ac6c30fe39","display":"Pcp v1.2 Prophy Component"}},{"formName":"component_tb-prophy-v1.2","alias":"tbp12","ref":{"uuid":"f48291ac-40c5-466b-83ee-62758e804b32","display":"Tb Prophy Component"}},{"formName":"component_tb-treatment-v1.3","alias":"tbt13","ref":{"uuid":"e04b6b46-1682-4804-aa3c-895347c8f402","display":"Tb Treatment Component"}},{"formName":"component_other-medication","alias":"omed","ref":{"uuid":"46205439-ccbf-4f60-80e1-d765861f6257","display":"Other Medication Component"}},{"formName":"component_crypto","alias":"cryp","ref":{"uuid":"4ff5104b-b2d0-4403-9691-4020061d3a2c","display":"Crypto Component"}},{"formName":"component_side-effect-v1.1","alias":"se11","ref":{"uuid":"c45f02b4-12bb-4611-9920-aa2df3b6bd3d","display":"Side Effect v 1.1 Component"}},{"formName":"component_nutrition","alias":"nut","ref":{"uuid":"e421b750-e7fc-4194-b55e-6f2c978e1af5","display":"Nutrition Component"}},{"formName":"component_vitals","alias":"vt","ref":{"uuid":"7f5e06a4-92d1-4fc9-9e05-03b414457d69","display":"Vitals Component"}},{"formName":"component_hpi","alias":"hpi","ref":{"uuid":"b91aef27-cd94-4934-94ac-c168ce539cb3","display":"Hpi Component"}},{"formName":"component_problem-list","alias":"pl","ref":{"uuid":"7505e278-64cb-44af-a8ce-0482f1d4691f","display":"Problem List Component"}},{"formName":"component_who-staging","alias":"who","ref":{"uuid":"fdf950e0-ff0a-4d7d-a52b-33a8d5b98fb7","display":"Who Staging Component"}},{"formName":"component_lab-results","alias":"tr","ref":{"uuid":"759e3a62-9f9e-4f56-9593-24f6cef3a5d4","display":"Lab Results Component"}},{"formName":"component_assessment","alias":"ass","ref":{"uuid":"98e061d2-4a16-4665-b0dc-fc0266ee689c","display":"Assessment Component"}},{"formName":"component_sti-v1.0","alias":"sti1","ref":{"uuid":"6515b019-5264-4a61-a7fd-e891ea03b5f4","display":"STI v1.0 Component"}},{"formName":"component_ob-history-v1.2","alias":"gynhist12","ref":{"uuid":"3a6e2b75-cedd-4c6a-9630-b601a6e748b9","display":"Ob History v1.2 Component"}},{"formName":"component_lab-orders-v1.0","alias":"to","ref":{"uuid":"61a262b6-3238-4187-9740-dea29ea4f7e4","display":"Lab Orders v1.0 Component"}},{"formName":"component_referral","alias":"ref","ref":{"uuid":"f18a6b65-f55b-4d53-afe2-b929bbb66a70","display":"Referral Component"}},{"formName":"component_reproductive-history-v1.0","alias":"reh1","ref":{"uuid":"736c13c0-d9d9-4a31-9dfe-a1b0c6f28fe0","display":"Reproductive history v1.0 Component"}},{"formName":"component_positive-health-dignity-&-prevention-services-v1.0","alias":"phdp","ref":{"uuid":"4da1548d-e098-4658-a847-8d42f45059f4","display":"PHDP Component"}},{"formName":"component_vl-justification","alias":"vljust","ref":{"uuid":"c47dd152-9996-4ec9-94bb-434f85a6a2b5","display":"VL Justification Component"}},{"formName":"component_family-planning-v1.0","alias":"fp1","ref":{"uuid":"68363308-0a91-4541-9934-c3e770416d51","display":"Family Planning v1.0 Component"}},{"ref":{"uuid":"a472864e-ddb4-4741-be6f-20d1b2a9be2b","display":"component_morisky-adherence-score-v1.0"},"formName":"component_morisky-adherence-score-v1.0","alias":"mmas1"},{"ref":{"uuid":"c297210f-a151-49a5-bf51-d2d726fe459d","display":"component_enhanced-adherence-v1.0"},"formName":"component_enhanced-adherence-v1.0","alias":"enhadhere1"},{"ref":{"uuid":"83eaa418-9d70-4a27-b5cd-f7eed9e11f6f","display":"component_dc-plan"},"formName":"component_dc-plan","alias":"dcPlan"}],"processor":"EncounterFormProcessor"};

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"text-center\">\r\n\t\t\t<button class=\"btn btn-success btn-lg\" (click)=\"toggleEncounterViewer()\">{{!showingEncounterViewer ? 'Show Encounter Viewer' : 'Show Form Renderer'}}</button>\t\r\n\t</div>\r\n\r\n\t<div *ngIf=\"!showingEncounterViewer\">\r\n\t\t<error-renderer [form]=\"form\"></error-renderer>\r\n\t\t<form [formGroup]=\"form.rootNode.control\">\r\n\t\t\t<form-renderer [node]=\"form.rootNode\"></form-renderer>\r\n\t\t\t<div class=\"form-row\">\r\n\t\t\t\t<button type=\"submit\" (click)=\"onSubmit($event)\">Save</button>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n\r\n\t<div *ngIf=\"showingEncounterViewer && form\">\r\n\t\t<encounter-renderer [form]=\"form\" [encounter]=\"encounterObject\"></encounter-renderer>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _dist_ngx_formentry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dist/ngx-formentry */ "./dist/ngx-formentry/fesm5/ngx-openmrs-formentry.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_mock_obs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/mock-obs */ "./src/app/mock/mock-obs.ts");






var adultForm = __webpack_require__(/*! ./adult-1.4.json */ "./src/app/adult-1.4.json");
var adultFormObs = __webpack_require__(/*! ./mock/obs.json */ "./src/app/mock/obs.json");
var formOrdersPayload = __webpack_require__(/*! ./mock/orders.json */ "./src/app/mock/orders.json");
var AppComponent = /** @class */ (function () {
    function AppComponent(questionFactory, formFactory, obsValueAdapater, orderAdaptor, encAdapter, dataSources, encounterPdfViewerService, formErrorsService, http) {
        this.questionFactory = questionFactory;
        this.formFactory = formFactory;
        this.obsValueAdapater = obsValueAdapater;
        this.orderAdaptor = orderAdaptor;
        this.encAdapter = encAdapter;
        this.dataSources = dataSources;
        this.encounterPdfViewerService = encounterPdfViewerService;
        this.formErrorsService = formErrorsService;
        this.http = http;
        this.sections = {};
        this.activeTab = 0;
        this.stack = [];
        this.encounterObject = adultFormObs;
        this.showingEncounterViewer = false;
        this.header = 'UMD Demo';
        this.schema = adultForm;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSources.registerDataSource('drug', { searchOptions: this.sampleSearch, resolveSelectedValue: this.sampleResolve });
        this.dataSources.registerDataSource('personAttribute', { searchOptions: this.sampleSearch, resolveSelectedValue: this.sampleResolve });
        this.dataSources.registerDataSource('problem', { searchOptions: this.sampleSearch, resolveSelectedValue: this.sampleResolve });
        this.dataSources.registerDataSource('location', { searchOptions: this.sampleSearch, resolveSelectedValue: this.sampleResolve });
        this.dataSources.registerDataSource('provider', { searchOptions: this.sampleSearch, resolveSelectedValue: this.sampleResolve });
        var ds = {
            dataSourceOptions: { concept: undefined },
            searchOptions: function (text) {
                if (ds.dataSourceOptions && ds.dataSourceOptions.concept) {
                    var items_1 = [{ id: 1, text: 'Stage 1 Symptom' }, { id: 2, text: 'Stage 2 Symptom' }];
                    return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                        setTimeout(function () {
                            observer.next(items_1);
                        }, 1000);
                    });
                }
            },
            resolveSelectedValue: function (key) {
                if (ds.dataSourceOptions && ds.dataSourceOptions.concept) {
                    var item_1 = { id: 1, text: 'Stage 1 Symptom' };
                    return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                        setTimeout(function () {
                            observer.next(item_1);
                        }, 1000);
                    });
                }
            }
        };
        this.dataSources.registerDataSource('conceptAnswers', ds);
        var obs = new _mock_mock_obs__WEBPACK_IMPORTED_MODULE_5__["MockObs"]();
        this.dataSources.registerDataSource('rawPrevEnc', obs.getObs());
        this.dataSources.registerDataSource('patient', { sex: 'M' }, true);
        this.dataSources.registerDataSource('patientInfo', {
            name: 'Test Patient', age: '37', birthdate: '7/7/1982', mui: '447062073-5', nid: '1234567'
        });
        this.dataSources.registerDataSource('file', {
            fileUpload: function (data) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ image: 'https://unsplash.it/1040/720' });
            },
            fetchFile: function (url) {
                console.log(url, 'APP COMPONENT');
                return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
                    var objectUrl = null;
                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ Accept: 'image/png,image/jpeg,image/gif' });
                    _this.http
                        .get('https://unsplash.it/1040/720', {
                        headers: headers,
                        responseType: _angular_http__WEBPACK_IMPORTED_MODULE_2__["ResponseContentType"].Blob
                    })
                        .subscribe(function (m) {
                        objectUrl = URL.createObjectURL(m.blob());
                        console.log(objectUrl);
                        observer.next(objectUrl);
                    });
                    return function () {
                        if (objectUrl) {
                            URL.revokeObjectURL(objectUrl);
                            objectUrl = null;
                        }
                    };
                });
            }
        });
        // Create form
        this.createForm();
        // Set encounter, obs, orders
        adultFormObs.orders = formOrdersPayload.orders;
        this.encAdapter.populateForm(this.form, adultFormObs);
        this.setUpCascadeSelectForWHOStaging();
        // Alternative is to set individually for obs and orders as show below
        // // Set obs
        // this.obsValueAdapater.populateForm(this.form, adultFormObs.obs);
        // // Set orders
        // this.orderAdaptor.populateForm(this.form, formOrdersPayload);
    };
    AppComponent.prototype.setUpCascadeSelectForWHOStaging = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        var source = this.dataSources.dataSources['conceptAnswers'];
        source.dataFromSourceChanged = subject.asObservable();
        var whoStageQuestion = this.form.searchNodeByQuestionId('adultWHOStage')[0];
        if (whoStageQuestion) {
            whoStageQuestion.control.valueChanges.subscribe(function (val) {
                if (source.dataFromSourceChanged) {
                    console.log('changing value for WHO', val);
                    if (val === 'a89b2606-1350-11df-a1f1-0026b9348838') {
                        subject.next([{ value: 3, label: 'Stage 3 Symptom' }, { value: 4, label: 'Stage 4 Symptom' }]);
                    }
                    else {
                        subject.next([{ value: 5, label: 'Stage 5 Symptom' }, { value: 6, label: 'Stage 6 Symptom' }]);
                    }
                }
            });
        }
    };
    AppComponent.prototype.getSectionData = function (sectionId) {
        var data = {};
        data = this.sections[sectionId];
        return data;
    };
    AppComponent.prototype.clickTab = function (tabNumber) {
        this.activeTab = tabNumber;
    };
    AppComponent.prototype.createForm = function () {
        this.form = this.formFactory.createForm(this.schema, this.dataSources.dataSources);
    };
    AppComponent.prototype.sampleResolve = function () {
        var item = { value: '1', label: 'Art3mis' };
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next(item);
            }, 1000);
        });
    };
    AppComponent.prototype.sampleSearch = function () {
        var items = [{ value: '0', label: 'Aech' },
            { value: '5b6e58ea-1359-11df-a1f1-0026b9348838', label: 'Art3mis' },
            { value: '2', label: 'Daito' },
            { value: '3', label: 'Parzival' },
            { value: '4', label: 'Shoto' }];
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next(items);
            }, 1000);
        });
    };
    AppComponent.prototype.onSubmit = function ($event) {
        $event.preventDefault();
        // Set valueProcessingInfo
        this.form.valueProcessingInfo = {
            patientUuid: 'patientUuid',
            visitUuid: 'visitUuid',
            encounterTypeUuid: 'encounterTypeUuid',
            formUuid: 'formUuid',
            encounterUuid: 'encounterUuid',
            providerUuid: 'providerUuid',
            utcOffset: '+0300'
        };
        if (this.form.valid) {
            this.form.showErrors = false;
            var payload = this.encAdapter.generateFormPayload(this.form);
            console.log('encounter payload', payload);
            // Alternative is to populate for each as shown below
            // // generate obs payload
            // let payload = this.obsValueAdapater.generateFormPayload(this.form);
            // console.log('obs payload', payload);
            // // generate orders payload
            // let ordersPayload = this.orderAdaptor.generateFormPayload(this.form);
            // console.log('orders Payload', ordersPayload);
        }
        else {
            this.form.showErrors = true;
            this.form.markInvalidControls(this.form.rootNode);
        }
    };
    AppComponent.prototype.toggleEncounterViewer = function () {
        this.showingEncounterViewer === true ?
            this.showingEncounterViewer = false : this.showingEncounterViewer = true;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dist_ngx_formentry__WEBPACK_IMPORTED_MODULE_3__["QuestionFactory"],
            _dist_ngx_formentry__WEBPACK_IMPORTED_MODULE_3__["FormFactory"], _dist_ngx_formentry__WEBPACK_IMPORTED_MODULE_3__["ObsValueAdapter"],
            _dist_ngx_formentry__WEBPACK_IMPORTED_MODULE_3__["OrderValueAdapter"],
            _dist_ngx_formentry__WEBPACK_IMPORTED_MODULE_3__["EncounterAdapter"], _dist_ngx_formentry__WEBPACK_IMPORTED_MODULE_3__["DataSources"],
            _dist_ngx_formentry__WEBPACK_IMPORTED_MODULE_3__["EncounterPdfViewerService"],
            _dist_ngx_formentry__WEBPACK_IMPORTED_MODULE_3__["FormErrorsService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _dist_ngx_formentry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dist/ngx-formentry */ "./dist/ngx-formentry/fesm5/ngx-openmrs-formentry.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _dist_ngx_formentry__WEBPACK_IMPORTED_MODULE_5__["FormEntryModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mock/mock-obs.ts":
/*!**********************************!*\
  !*** ./src/app/mock/mock-obs.ts ***!
  \**********************************/
/*! exports provided: MockObs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockObs", function() { return MockObs; });
var MockObs = /** @class */ (function () {
    function MockObs() {
    }
    MockObs.prototype.getObs = function () {
        return {
            'uuid': 'encounter-uuid',
            'encounterDatetime': '2016-01-21T16:17:46.000+0300',
            'patient': {
                'uuid': 'patient-uuid'
            },
            'form': {
                'uuid': '1339a535-e38f-44cd-8cf8-f42f7c5f2ab7',
                'name': 'AMPATH POC Adult Return Visit Form v0.01'
            },
            'location': {
                'uuid': '08feae7c-1352-11df-a1f1-0026b9348838',
                'display': 'Location-1'
            },
            'encounterType': {
                'uuid': '8d5b2be0-c2cc-11de-8d13-0010c6dffd0f',
                'display': 'ADULTRETURN'
            },
            'provider': {
                'uuid': 'provider-uuid',
                'display': '5566790 - H Dengue Provider',
            },
            'obs': [
                {
                    'uuid': 'ac55c445-9661-4d42-86b5-4d6ec33a6274',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a8a666ba-1350-11df-a1f1-0026b9348838'
                    },
                    'value': '2016-02-26T00:00:00.000+0300',
                    'groupMembers': null
                }, {
                    'uuid': '8bcb91b0-56ad-4185-ac16-816a57f6c066',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a8afcafc-1350-11df-a1f1-0026b9348838'
                    },
                    'value': {
                        'uuid': 'a8ad1276-1350-11df-a1f1-0026b9348838',
                        'display': 'SHORTNESS OF BREATH',
                    },
                    'groupMembers': null
                }, {
                    'uuid': '7973f916-e37a-471d-ae43-bddd90373484',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a8afdb8c-1350-11df-a1f1-0026b9348838'
                    },
                    'value': null,
                    'groupMembers': [{
                            'uuid': '7a907ea0-dc88-4d93-9685-8feb0761e5c8',
                            'display': 'PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT: ETHAMBUTOL',
                            'concept': {
                                'uuid': 'a899e444-1350-11df-a1f1-0026b9348838',
                                'display': 'PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT',
                            },
                            'obsDatetime': '2016-01-21T16:17:46.000+0300',
                            'obsGroup': {
                                'uuid': '7973f916-e37a-471d-ae43-bddd90373484',
                            },
                            'valueCodedName': null,
                            'groupMembers': null,
                            'voided': false,
                            'value': {
                                'uuid': 'a8971c64-1350-11df-a1f1-0026b9348838',
                                'display': 'ETHAMBUTOL',
                                'resourceVersion': '1.9'
                            },
                            'resourceVersion': '1.8'
                        }, {
                            'uuid': 'e849dcc5-9e37-42db-af0b-d77e8c197571',
                            'display': 'NUMBER OF MILLIGRAM PER DAY: 600.0',
                            'concept': {
                                'uuid': 'a8a0744e-1350-11df-a1f1-0026b9348838',
                                'display': 'NUMBER OF MILLIGRAM PER DAY'
                            },
                            'obsDatetime': '2016-01-21T16:17:46.000+0300',
                            'obsGroup': {
                                'uuid': '7973f916-e37a-471d-ae43-bddd90373484',
                                'display': 'PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT, DETAILED: ETHAMBUTOL, 600.0',
                            },
                            'valueCodedName': null,
                            'groupMembers': null,
                            'voided': false,
                            'value': 600,
                            'resourceVersion': '1.8'
                        }
                    ]
                }, {
                    'uuid': '5cf1f5c7-7daf-4fd6-8b40-a6aec65a7e35',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a8afcafc-1350-11df-a1f1-0026b9348838'
                    },
                    'value': {
                        'uuid': 'a8afc8b8-1350-11df-a1f1-0026b9348838',
                        'display': 'COUGH FOR MORE THAN TWO WEEKS'
                    },
                    'groupMembers': null
                }, {
                    'uuid': '148ce455-3f7b-45c0-b276-66a6f62358c1',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a8afdb8c-1350-11df-a1f1-0026b9348838'
                    },
                    'value': null,
                    'groupMembers': [
                        {
                            'uuid': '50525f1c-56d9-4647-8ad1-b8dbc235f38e',
                            'display': "PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT\n                          : RIFAMPICIN ISONIAZID PYRAZINAMIDE AND ETHAMBUTOL",
                            'concept': {
                                'uuid': 'a899e444-1350-11df-a1f1-0026b9348838',
                                'display': 'PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT',
                            },
                            'obsDatetime': '2016-01-21T16:17:46.000+0300',
                            'accessionNumber': null,
                            'obsGroup': {
                                'uuid': '148ce455-3f7b-45c0-b276-66a6f62358c1',
                                'display': "PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT, DETAILED\n                            : RIFAMPICIN ISONIAZID PYRAZINAMIDE AND ETHAMBUTOL, 2.0"
                            },
                            'valueCodedName': null,
                            'groupMembers': null,
                            'voided': false,
                            'value': {
                                'uuid': 'a899f51a-1350-11df-a1f1-0026b9348838',
                                'display': 'RIFAMPICIN ISONIAZID PYRAZINAMIDE AND ETHAMBUTOL',
                                'retired': false,
                                'resourceVersion': '1.9'
                            },
                            'resourceVersion': '1.8'
                        },
                        {
                            'uuid': 'fcf904f8-452e-4618-a001-f1d0891d1804',
                            'display': 'NUMBER OF TABLETS PER DAY: 2.0',
                            'concept': {
                                'uuid': 'a8a07386-1350-11df-a1f1-0026b9348838',
                                'display': 'NUMBER OF TABLETS PER DAY'
                            },
                            'obsDatetime': '2016-01-21T16:17:46.000+0300',
                            'obsGroup': {
                                'uuid': '148ce455-3f7b-45c0-b276-66a6f62358c1',
                                'display': "PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT\n                    , DETAILED: RIFAMPICIN ISONIAZID PYRAZINAMIDE AND ETHAMBUTOL, 2.0"
                            },
                            'valueCodedName': null,
                            'groupMembers': null,
                            'voided': false,
                            'value': 2,
                            'resourceVersion': '1.8'
                        }
                    ]
                }, {
                    'uuid': '8df61319-8bd6-4c74-a065-88502b762f05',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a89c1fd4-1350-11df-a1f1-0026b9348838'
                    },
                    'value': {
                        'uuid': 'a89b77aa-1350-11df-a1f1-0026b9348838',
                        'display': 'START DRUGS',
                    },
                    'groupMembers': null
                }, {
                    'uuid': '57cedc93-8196-4d6c-a34b-5269bf23627b',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a8afdb8c-1350-11df-a1f1-0026b9348838'
                    },
                    'value': null,
                    'groupMembers': [
                        {
                            'uuid': '8ffbe8a8-da9a-46f2-a53b-97fd90f17313',
                            'display': 'TUBERCULOSIS DRUG TREATMENT START DATE: 10/01/16',
                            'concept': {
                                'uuid': 'a899e5f2-1350-11df-a1f1-0026b9348838',
                                'display': 'TUBERCULOSIS DRUG TREATMENT START DATE',
                            },
                            'obsDatetime': '2016-01-21T16:17:46.000+0300',
                            'obsGroup': {
                                'uuid': '57cedc93-8196-4d6c-a34b-5269bf23627b',
                                'display': 'PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT, DETAILED: 10/01/16',
                            },
                            'valueCodedName': null,
                            'groupMembers': null,
                            'voided': false,
                            'value': '2016-01-10T00:00:00.000+0300',
                            'resourceVersion': '1.8'
                        }
                    ]
                }, {
                    'uuid': 'fe7b71da-090d-42d6-afb9-b619f03ed1f3',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': '02ad9357-b996-4530-b1a4-aff91a105383'
                    },
                    'value': {
                        'uuid': 'a8afcc82-1350-11df-a1f1-0026b9348838',
                        'display': 'CURRENTLY ON TUBERCULOSIS TREATMENT'
                    },
                    'groupMembers': null
                }, {
                    'uuid': 'c4de81ad-e667-4ead-a433-af368a1f1877',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': '2a4b87dd-977d-4ce8-a321-1f13df4a31b2'
                    },
                    'value': null,
                    'groupMembers': [
                        {
                            'uuid': '4caa0747-ae5e-4c41-9176-6007c26ef2af',
                            'display': 'TUBERCULOSIS TREATMENT ADHERENCE SINCE LAST VISIT: GOOD',
                            'concept': {
                                'uuid': '479decbd-e964-41c3-9576-98b39089ebd3',
                                'display': 'TUBERCULOSIS TREATMENT ADHERENCE SINCE LAST VISIT'
                            },
                            'obsDatetime': '2016-01-21T16:17:46.000+0300',
                            'obsGroup': {
                                'uuid': 'c4de81ad-e667-4ead-a433-af368a1f1877',
                                'display': 'TUBERCULOSIS TREATMENT ADHERENCE SINCE LAST VISIT, DETAILED: GOOD'
                            },
                            'valueCodedName': null,
                            'groupMembers': null,
                            'voided': false,
                            'value': {
                                'uuid': 'a8b0f882-1350-11df-a1f1-0026b9348838',
                                'display': 'GOOD',
                                'resourceVersion': '1.9'
                            },
                            'resourceVersion': '1.8'
                        }
                    ]
                }, {
                    'uuid': '101689fd-1cb1-4152-ac33-2e3c28acd4f9',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a899e282-1350-11df-a1f1-0026b9348838'
                    },
                    'value': {
                        'uuid': 'a899e0ac-1350-11df-a1f1-0026b9348838',
                        'display': 'NONE'
                    },
                    'groupMembers': null
                }, {
                    'uuid': '3b6519fb-31ee-49a5-8dac-0287bed9b33d',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a89b75d4-1350-11df-a1f1-0026b9348838'
                    },
                    'value': {
                        'uuid': 'a899e0ac-1350-11df-a1f1-0026b9348838',
                        'display': 'NONE',
                    },
                    'groupMembers': null
                }, {
                    'uuid': 'c04bc2ff-972f-4c62-abaf-3710e1a70370',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a89ae254-1350-11df-a1f1-0026b9348838'
                    },
                    'value': {
                        'uuid': 'a899b42e-1350-11df-a1f1-0026b9348838',
                        'display': 'NO'
                    },
                    'groupMembers': null
                }, {
                    'uuid': '8600c219-d27c-4bee-ae4c-d55dd17cb4a1',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a89b7e12-1350-11df-a1f1-0026b9348838'
                    },
                    'value': {
                        'uuid': 'a899e0ac-1350-11df-a1f1-0026b9348838',
                        'display': 'NONE'
                    },
                    'groupMembers': null
                }, {
                    'uuid': 'c14aed9a-35e1-4604-a9f2-e68b24753bbe',
                    'obsDatetime': '2016-01-21T16:17:46.000+0300',
                    'concept': {
                        'uuid': 'a8afcc82-1350-11df-a1f1-0026b9348838'
                    },
                    'value': {
                        'uuid': 'a899b35c-1350-11df-a1f1-0026b9348838',
                        'display': 'YES'
                    },
                    'groupMembers': null
                },
                {
                    'uuid': 'fdb32127-6c64-4bde-b97b-13fb7c8accb8',
                    'obsDatetime': '2016-04-14T09:12:43.000+0300',
                    'concept': {
                        'uuid': 'a8a08344-1350-11df-a1f1-0026b9348838'
                    },
                    'value': null,
                    'groupMembers': [
                        {
                            'uuid': 'bdc5beb4-25bd-4b6c-ba60-cbffd4249750',
                            'display': 'CURRENT ANTIRETROVIRAL DRUGS USED FOR TREATMENT: LAMIVUDINE AND STAVUDINE',
                            'concept': {
                                'uuid': 'a899cf5e-1350-11df-a1f1-0026b9348838',
                                'display': 'CURRENT ANTIRETROVIRAL DRUGS USED FOR TREATMENT'
                            },
                            'obsDatetime': '2016-04-14T09:12:43.000+0300',
                            'obsGroup': {
                                'uuid': 'fdb32127-6c64-4bde-b97b-13fb7c8accb8',
                                'display': "CURRENT ANTIRETROVIRAL DRUGS USED FOR TREATMENT, DETAILED\n                    : LAMIVUDINE AND STAVUDINE, NEVIRAPINE, EFAVIRENZ, ATAZANAVIR AND RITONAVIR, ZIDOVUDINE"
                            },
                            'value': {
                                'uuid': '3d587177-984e-4eeb-93f2-3223b6c1dd7c',
                                'display': 'LAMIVUDINE AND STAVUDINE',
                            }
                        },
                        {
                            'uuid': '2343c2c1-46bc-438a-b831-76d6eabbacc6',
                            'display': 'CURRENT ANTIRETROVIRAL DRUGS USED FOR TREATMENT: NEVIRAPINE',
                            'concept': {
                                'uuid': 'a899cf5e-1350-11df-a1f1-0026b9348838',
                                'display': 'CURRENT ANTIRETROVIRAL DRUGS USED FOR TREATMENT'
                            },
                            'obsDatetime': '2016-04-14T09:12:43.000+0300',
                            'obsGroup': {
                                'uuid': 'fdb32127-6c64-4bde-b97b-13fb7c8accb8',
                                'display': "CURRENT ANTIRETROVIRAL DRUGS USED FOR TREATMENT, DETAILED\n                    : LAMIVUDINE AND STAVUDINE, NEVIRAPINE, EFAVIRENZ, ATAZANAVIR AND RITONAVIR, ZIDOVUDINE"
                            },
                            'value': {
                                'uuid': 'a8967656-1350-11df-a1f1-0026b9348838',
                                'display': 'NEVIRAPINE',
                            }
                        }
                    ]
                }
            ]
        };
    };
    MockObs.prototype.getExpected = function () {
        return {
            encounterDatetime: '2016-01-21T16:17:46.000+0300',
            location: '08feae7c-1352-11df-a1f1-0026b9348838',
            patient: 'patient-uuid',
            form: '1339a535-e38f-44cd-8cf8-f42f7c5f2ab7',
            encounterType: '8d5b2be0-c2cc-11de-8d13-0010c6dffd0f',
            provider: 'provider-uuid',
            'a8a666ba-1350-11df-a1f1-0026b9348838': '2016-02-26T00:00:00.000+0300',
            'a8afcafc-1350-11df-a1f1-0026b9348838': [
                'a8ad1276-1350-11df-a1f1-0026b9348838',
                'a8afc8b8-1350-11df-a1f1-0026b9348838'
            ],
            'a8a08344-1350-11df-a1f1-0026b9348838': [
                {
                    'a899cf5e-1350-11df-a1f1-0026b9348838': [
                        '3d587177-984e-4eeb-93f2-3223b6c1dd7c',
                        'a8967656-1350-11df-a1f1-0026b9348838'
                    ]
                }
            ],
            'a8afdb8c-1350-11df-a1f1-0026b9348838': [
                {
                    'a899e444-1350-11df-a1f1-0026b9348838': 'a8971c64-1350-11df-a1f1-0026b9348838',
                    'a8a0744e-1350-11df-a1f1-0026b9348838': 600
                },
                {
                    'a899e444-1350-11df-a1f1-0026b9348838': 'a899f51a-1350-11df-a1f1-0026b9348838',
                    'a8a07386-1350-11df-a1f1-0026b9348838': 2
                },
                {
                    'a899e5f2-1350-11df-a1f1-0026b9348838': '2016-01-10T00:00:00.000+0300',
                }
            ],
            'a89c1fd4-1350-11df-a1f1-0026b9348838': 'a89b77aa-1350-11df-a1f1-0026b9348838',
            '02ad9357-b996-4530-b1a4-aff91a105383': 'a8afcc82-1350-11df-a1f1-0026b9348838',
            '2a4b87dd-977d-4ce8-a321-1f13df4a31b2': [
                {
                    '479decbd-e964-41c3-9576-98b39089ebd3': 'a8b0f882-1350-11df-a1f1-0026b9348838'
                }
            ],
            'a899e282-1350-11df-a1f1-0026b9348838': 'a899e0ac-1350-11df-a1f1-0026b9348838',
            'a89b75d4-1350-11df-a1f1-0026b9348838': 'a899e0ac-1350-11df-a1f1-0026b9348838',
            'a89ae254-1350-11df-a1f1-0026b9348838': 'a899b42e-1350-11df-a1f1-0026b9348838',
            'a89b7e12-1350-11df-a1f1-0026b9348838': 'a899e0ac-1350-11df-a1f1-0026b9348838',
            'a8afcc82-1350-11df-a1f1-0026b9348838': 'a899b35c-1350-11df-a1f1-0026b9348838'
        };
    };
    return MockObs;
}());



/***/ }),

/***/ "./src/app/mock/obs.json":
/*!*******************************!*\
  !*** ./src/app/mock/obs.json ***!
  \*******************************/
/*! exports provided: uuid, encounterDatetime, patient, form, location, encounterType, provider, orders, obs, default */
/***/ (function(module) {

module.exports = {"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","encounterDatetime":"2016-12-01T11:33:57.000+0300","patient":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","identifiers":[{"display":"AMRS Universal ID = 234750205-2","uuid":"93fc9aab-9908-4c0c-813b-b536b97597c1","identifier":"234750205-2","identifierType":{"uuid":"58a4732e-1359-11df-a1f1-0026b9348838","display":"AMRS Universal ID","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patientidentifiertype/58a4732e-1359-11df-a1f1-0026b9348838"}]},"location":{"uuid":"18c343eb-b353-462a-9139-b16606e6b6c2","display":"Location Test","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/18c343eb-b353-462a-9139-b16606e6b6c2"}]},"preferred":true,"voided":false,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295/identifier/93fc9aab-9908-4c0c-813b-b536b97597c1"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295/identifier/93fc9aab-9908-4c0c-813b-b536b97597c1?v=full"}],"resourceVersion":"1.8"},{"display":"CCC Number = 12345-12346","uuid":"b8f83735-0600-4a43-9132-10a4b91913f4","identifier":"12345-12346","identifierType":{"uuid":"f2d6ff1a-8440-4d35-a150-1d4b5a930c5e","display":"CCC Number","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patientidentifiertype/f2d6ff1a-8440-4d35-a150-1d4b5a930c5e"}]},"location":{"uuid":"18c343eb-b353-462a-9139-b16606e6b6c2","display":"Location Test","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/18c343eb-b353-462a-9139-b16606e6b6c2"}]},"preferred":false,"voided":false,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295/identifier/b8f83735-0600-4a43-9132-10a4b91913f4"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295/identifier/b8f83735-0600-4a43-9132-10a4b91913f4?v=full"}],"resourceVersion":"1.8"},{"display":"KENYAN NATIONAL ID NUMBER = 30303030","uuid":"4b57d0f7-475d-457a-aedd-9c3350a1ba59","identifier":"30303030","identifierType":{"uuid":"58a47054-1359-11df-a1f1-0026b9348838","display":"KENYAN NATIONAL ID NUMBER","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patientidentifiertype/58a47054-1359-11df-a1f1-0026b9348838"}]},"location":{"uuid":"18c343eb-b353-462a-9139-b16606e6b6c2","display":"Location Test","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/18c343eb-b353-462a-9139-b16606e6b6c2"}]},"preferred":false,"voided":false,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295/identifier/4b57d0f7-475d-457a-aedd-9c3350a1ba59"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295/identifier/4b57d0f7-475d-457a-aedd-9c3350a1ba59?v=full"}],"resourceVersion":"1.8"},{"display":"AMRS Medical Record Number = 234750205-2","uuid":"cabe5981-5705-46b9-9c11-abab73c8d82e","identifier":"234750205-2","identifierType":{"uuid":"58a46e2e-1359-11df-a1f1-0026b9348838","display":"AMRS Medical Record Number","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patientidentifiertype/58a46e2e-1359-11df-a1f1-0026b9348838"}]},"location":{"uuid":"18c343eb-b353-462a-9139-b16606e6b6c2","display":"Location Test","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/18c343eb-b353-462a-9139-b16606e6b6c2"}]},"preferred":false,"voided":false,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295/identifier/cabe5981-5705-46b9-9c11-abab73c8d82e"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295/identifier/cabe5981-5705-46b9-9c11-abab73c8d82e?v=full"}],"resourceVersion":"1.8"}]},"form":{"uuid":"81f92a8a-ff5c-415d-a34c-b5bdca2406be","name":"AMPATH POC Adult Return Visit Form v1.0"},"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"encounterType":{"uuid":"8d5b2be0-c2cc-11de-8d13-0010c6dffd0f","display":"ADULTRETURN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encountertype/8d5b2be0-c2cc-11de-8d13-0010c6dffd0f"}]},"provider":{"uuid":"5b6e58ea-1359-11df-a1f1-0026b9348838","display":"Unknown User","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/person/5b6e58ea-1359-11df-a1f1-0026b9348838"}]},"orders":[],"obs":[{"uuid":"ac55c445-9661-4d42-86b5-4d6ec33a000","obsDatetime":"2016-01-21T16:17:46.000+0300","concept":{"uuid":"a897e450-1350-11df-a1f1-0026b9348838"},"value":1000,"groupMembers":null},{"uuid":"bcff492e-ebd4-4f67-bcda-b73b40c81582","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8afdf4c-1350-11df-a1f1-0026b9348838","name":{"display":"TUBERCULOSIS TREATMENT PHASE"}},"value":{"uuid":"a8afdd08-1350-11df-a1f1-0026b9348838","display":"TUBERCULOSIS CONTINUATION TREATMENT PHASE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8afdd08-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null},{"uuid":"cb15310c-44f9-4917-a5b5-933802d1e7eb","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8afcc82-1350-11df-a1f1-0026b9348838","name":{"display":"CURRENTLY ON TUBERCULOSIS TREATMENT"}},"value":{"uuid":"a899b35c-1350-11df-a1f1-0026b9348838","display":"YES","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899b35c-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null},{"uuid":"1a439617-2e46-4a41-a426-8d77d0f358f7","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"275eee16-c358-4f3a-ac16-e8f24659df87","name":{"display":"PCP PROPHYLAXIS ADHERENCE SINCE LAST VISIT, DETAILED"}},"value":null,"groupMembers":[{"uuid":"95675eb7-f202-498c-9dc9-097b12234f1d","display":"PCP PROPHYLAXIS ADHERENCE SINCE LAST VISIT: GOOD","concept":{"uuid":"115c744a-cf54-469f-bd5f-820352ffe9be","display":"PCP PROPHYLAXIS ADHERENCE SINCE LAST VISIT","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/115c744a-cf54-469f-bd5f-820352ffe9be"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"1a439617-2e46-4a41-a426-8d77d0f358f7","display":"PCP PROPHYLAXIS ADHERENCE SINCE LAST VISIT, DETAILED: GOOD","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/1a439617-2e46-4a41-a426-8d77d0f358f7"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a8b0f882-1350-11df-a1f1-0026b9348838","display":"GOOD","name":{"display":"GOOD","uuid":"a95df35c-1350-11df-a1f1-0026b9348838","name":"GOOD","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/name/a95df35c-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/name/a95df35c-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d492774-c2cc-11de-8d13-0010c6dffd0f","display":"Misc","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d492774-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"a95df35c-1350-11df-a1f1-0026b9348838","display":"GOOD","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/name/a95df35c-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a90f4734-1350-11df-a1f1-0026b9348838","display":"General descriptive.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/description/a90f4734-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"a7c3c497-f857-4230-89a9-b3b6d4b25f8d","display":"local: 6343","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/mapping/a7c3c497-f857-4230-89a9-b3b6d4b25f8d"}]},{"uuid":"e6ef886b-2ab7-4cdc-9f6d-f272fad1b8c1","display":"MCL/CIEL: 159405","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/mapping/e6ef886b-2ab7-4cdc-9f6d-f272fad1b8c1"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/95675eb7-f202-498c-9dc9-097b12234f1d"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/95675eb7-f202-498c-9dc9-097b12234f1d?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"81dd8e5c-2a77-4296-ac7e-bb57ca3d9add","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a899cf5e-1350-11df-a1f1-0026b9348838","name":{"display":"CURRENT ANTIRETROVIRAL DRUGS USED FOR TREATMENT"}},"value":{"uuid":"a89cc876-1350-11df-a1f1-0026b9348838","display":"LAMIVUDINE AND TENOFOVIR","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89cc876-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null},{"uuid":"b4c90238-41d4-46a3-a557-16d8c3a8e42a","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8afcafc-1350-11df-a1f1-0026b9348838","name":{"display":"REVIEW OF TUBERCULOSIS SCREENING QUESTIONS"}},"value":{"uuid":"a8ad1276-1350-11df-a1f1-0026b9348838","display":"SHORTNESS OF BREATH","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8ad1276-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null},{"uuid":"35a0c87d-6383-46fd-924a-01684c171ea8","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8a176b4-1350-11df-a1f1-0026b9348838","name":{"display":"TUBERCULOSIS TREATMENT COMPLETED DATE"}},"value":"2016-12-29T00:00:00.000+0300","groupMembers":null},{"uuid":"775499b2-9dfb-4a67-9e60-caeffe8d53ed","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a89c1cfa-1350-11df-a1f1-0026b9348838","name":{"display":"TUBERCULOSIS PROPHYLAXIS PLAN"}},"value":{"uuid":"a89b7908-1350-11df-a1f1-0026b9348838","display":"CONTINUE REGIMEN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89b7908-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null},{"uuid":"7e5d7b85-075a-4d5e-aa0c-678196b40a18","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8a072c8-1350-11df-a1f1-0026b9348838","name":{"display":"PATIENT REPORTED CURRENT OTHER TREATMENT"}},"value":null,"groupMembers":[{"uuid":"b6fe4171-69c7-4cd4-a8d1-c280cd123554","display":"MEDICATION ADDED: PARACETAMOL","concept":{"uuid":"a8a060c6-1350-11df-a1f1-0026b9348838","display":"MEDICATION ADDED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8a060c6-1350-11df-a1f1-0026b9348838"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"7e5d7b85-075a-4d5e-aa0c-678196b40a18","display":"PATIENT REPORTED CURRENT OTHER TREATMENT: PARACETAMOL","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/7e5d7b85-075a-4d5e-aa0c-678196b40a18"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a890c3aa-1350-11df-a1f1-0026b9348838","display":"PARACETAMOL","name":{"display":"PARACETAMOL","uuid":"a93c40a4-1350-11df-a1f1-0026b9348838","name":"PARACETAMOL","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838/name/a93c40a4-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838/name/a93c40a4-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d490dfc-c2cc-11de-8d13-0010c6dffd0f","display":"Drug","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d490dfc-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"a9547b24-1350-11df-a1f1-0026b9348838","display":"CALPOL","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838/name/a9547b24-1350-11df-a1f1-0026b9348838"}]},{"uuid":"a958c33c-1350-11df-a1f1-0026b9348838","display":"PANADOL","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838/name/a958c33c-1350-11df-a1f1-0026b9348838"}]},{"uuid":"a93c40a4-1350-11df-a1f1-0026b9348838","display":"PARACETAMOL","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838/name/a93c40a4-1350-11df-a1f1-0026b9348838"}]},{"uuid":"a958c792-1350-11df-a1f1-0026b9348838","display":"PARACETAMOL SYRUP","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838/name/a958c792-1350-11df-a1f1-0026b9348838"}]},{"uuid":"a9532076-1350-11df-a1f1-0026b9348838","display":"ACETOMINOPHEN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838/name/a9532076-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a8ec4220-1350-11df-a1f1-0026b9348838","display":"A crystalline compound C8H9NO2 that is a hydroxy derivative of acetanilide and is used in chemical synthesis and in medicine instead of aspirin to relieve pain and fever.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838/description/a8ec4220-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"dfae3980-9525-4ebb-8cd6-554dfb6a0339","display":"MCL/CIEL: 70116","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838/mapping/dfae3980-9525-4ebb-8cd6-554dfb6a0339"}]},{"uuid":"b06e1793-dc19-4840-b4b3-71e7d3d8785e","display":"local: 89","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838/mapping/b06e1793-dc19-4840-b4b3-71e7d3d8785e"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a890c3aa-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/b6fe4171-69c7-4cd4-a8d1-c280cd123554"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/b6fe4171-69c7-4cd4-a8d1-c280cd123554?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"47e82c1b-ac9b-4e8d-ab49-30a5859f3e90","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8a30d1c-1350-11df-a1f1-0026b9348838","name":{"display":"PATIENT REPORTED REASON FOR CURRENT ANTIRETROVIRALS STARTED"}},"value":{"uuid":"a89adc46-1350-11df-a1f1-0026b9348838","display":"TREATMENT","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89adc46-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null},{"uuid":"084a2b50-33e9-4597-9560-625738d37125","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"6c1b293c-4d8c-470f-9991-93cdde1274ff","name":{"display":"REACTION SEVERITY FROM PATIENT REPORTED CURRENT MEDICATION"}},"value":{"uuid":"a89efccc-1350-11df-a1f1-0026b9348838","display":"MILD","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89efccc-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null},{"uuid":"26c0d6bd-1b8c-46be-a9ff-a3bbbc9209b7","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8a666ba-1350-11df-a1f1-0026b9348838","name":{"display":"RETURN VISIT DATE"}},"value":"2017-01-12T00:00:00.000+0300","groupMembers":null},{"uuid":"9625809a-b5de-434a-b3d2-1897eb0b6839","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"bc3834dd-ef07-4027-be30-729baa069291","name":{"display":"ANTIRETROVIRAL ADHERENCE SINCE LAST VISIT, DETAILED"}},"value":null,"groupMembers":[{"uuid":"3ad9bec9-ebc1-4946-813e-092fd2c35488","display":"MISSED MEDICATION REASON: DEPRESSION","concept":{"uuid":"a89ebbc2-1350-11df-a1f1-0026b9348838","display":"MISSED MEDICATION REASON","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ebbc2-1350-11df-a1f1-0026b9348838"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"9625809a-b5de-434a-b3d2-1897eb0b6839","display":"ANTIRETROVIRAL ADHERENCE SINCE LAST VISIT, DETAILED: DEPRESSION, FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED, FAIR, illness, OTHER NON-CODED, ALCOHOLISM","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/9625809a-b5de-434a-b3d2-1897eb0b6839"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a8935fde-1350-11df-a1f1-0026b9348838","display":"DEPRESSION","name":{"display":"DEPRESSION","uuid":"a93cdc62-1350-11df-a1f1-0026b9348838","name":"DEPRESSION","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8935fde-1350-11df-a1f1-0026b9348838/name/a93cdc62-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8935fde-1350-11df-a1f1-0026b9348838/name/a93cdc62-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d4918b0-c2cc-11de-8d13-0010c6dffd0f","display":"Diagnosis","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d4918b0-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"a93cdc62-1350-11df-a1f1-0026b9348838","display":"DEPRESSION","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8935fde-1350-11df-a1f1-0026b9348838/name/a93cdc62-1350-11df-a1f1-0026b9348838"}]},{"uuid":"a95513ea-1350-11df-a1f1-0026b9348838","display":"DEPRESSIVE EPISODE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8935fde-1350-11df-a1f1-0026b9348838/name/a95513ea-1350-11df-a1f1-0026b9348838"}]},{"uuid":"b3e9bcb3-feb1-455b-a31f-0948b9aad7ad","display":"DEPRESSED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8935fde-1350-11df-a1f1-0026b9348838/name/b3e9bcb3-feb1-455b-a31f-0948b9aad7ad"}]}],"descriptions":[{"uuid":"a8f40dfc-1350-11df-a1f1-0026b9348838","display":"Affective disorder with anhedonia, melancholia, psychomotor retardation.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8935fde-1350-11df-a1f1-0026b9348838/description/a8f40dfc-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"5d1d89b2-e5de-4695-993e-a05bdad36f55","display":"local: 207","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8935fde-1350-11df-a1f1-0026b9348838/mapping/5d1d89b2-e5de-4695-993e-a05bdad36f55"}]},{"uuid":"31dced2e-2ff7-4ee1-b5e9-62ad9931791b","display":"MCL/CIEL: 119537","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8935fde-1350-11df-a1f1-0026b9348838/mapping/31dced2e-2ff7-4ee1-b5e9-62ad9931791b"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8935fde-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8935fde-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/3ad9bec9-ebc1-4946-813e-092fd2c35488"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/3ad9bec9-ebc1-4946-813e-092fd2c35488?v=full"}],"resourceVersion":"1.11"},{"uuid":"c84e61ab-e5b8-427b-a88a-4a6bb7814f17","display":"MISSED MEDICATION REASON: FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED","concept":{"uuid":"a89ebbc2-1350-11df-a1f1-0026b9348838","display":"MISSED MEDICATION REASON","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ebbc2-1350-11df-a1f1-0026b9348838"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"9625809a-b5de-434a-b3d2-1897eb0b6839","display":"ANTIRETROVIRAL ADHERENCE SINCE LAST VISIT, DETAILED: DEPRESSION, FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED, FAIR, illness, OTHER NON-CODED, ALCOHOLISM","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/9625809a-b5de-434a-b3d2-1897eb0b6839"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a89eac04-1350-11df-a1f1-0026b9348838","display":"FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED","name":{"display":"FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED","uuid":"a9466cbe-1350-11df-a1f1-0026b9348838","name":"FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89eac04-1350-11df-a1f1-0026b9348838/name/a9466cbe-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89eac04-1350-11df-a1f1-0026b9348838/name/a9466cbe-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d491a9a-c2cc-11de-8d13-0010c6dffd0f","display":"Finding","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d491a9a-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"0.1","retired":false,"names":[{"uuid":"a9466cbe-1350-11df-a1f1-0026b9348838","display":"FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89eac04-1350-11df-a1f1-0026b9348838/name/a9466cbe-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a902bd2a-1350-11df-a1f1-0026b9348838","display":"Patient felt well and did not think that he/she needed to take medicine anymore.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89eac04-1350-11df-a1f1-0026b9348838/description/a902bd2a-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"0cb8a025-ed6b-4565-bb98-0833dc44ce95","display":"local: 1647","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89eac04-1350-11df-a1f1-0026b9348838/mapping/0cb8a025-ed6b-4565-bb98-0833dc44ce95"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89eac04-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89eac04-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/c84e61ab-e5b8-427b-a88a-4a6bb7814f17"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/c84e61ab-e5b8-427b-a88a-4a6bb7814f17?v=full"}],"resourceVersion":"1.11"},{"uuid":"e385a894-7a1e-4aa9-bc42-9a2c17131a3e","display":"ANTIRETROVIRAL ADHERENCE SINCE LAST VISIT: FAIR","concept":{"uuid":"2c363a0e-7cf9-42cd-9778-1301b09c4484","display":"ANTIRETROVIRAL ADHERENCE SINCE LAST VISIT","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/2c363a0e-7cf9-42cd-9778-1301b09c4484"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"9625809a-b5de-434a-b3d2-1897eb0b6839","display":"ANTIRETROVIRAL ADHERENCE SINCE LAST VISIT, DETAILED: DEPRESSION, FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED, FAIR, illness, OTHER NON-CODED, ALCOHOLISM","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/9625809a-b5de-434a-b3d2-1897eb0b6839"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a73d20b3-d721-4763-a362-14a0c41a6b5e","display":"FAIR","name":{"display":"FAIR","uuid":"c4bdcb27-b962-40e2-a38e-6f46cdc21434","name":"FAIR","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a73d20b3-d721-4763-a362-14a0c41a6b5e/name/c4bdcb27-b962-40e2-a38e-6f46cdc21434"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a73d20b3-d721-4763-a362-14a0c41a6b5e/name/c4bdcb27-b962-40e2-a38e-6f46cdc21434?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d492774-c2cc-11de-8d13-0010c6dffd0f","display":"Misc","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d492774-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"c4bdcb27-b962-40e2-a38e-6f46cdc21434","display":"FAIR","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a73d20b3-d721-4763-a362-14a0c41a6b5e/name/c4bdcb27-b962-40e2-a38e-6f46cdc21434"}]}],"descriptions":[{"uuid":"db821173-0ef5-4757-9558-c0bceca31ef5","display":"General descriptive: stable and normal.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a73d20b3-d721-4763-a362-14a0c41a6b5e/description/db821173-0ef5-4757-9558-c0bceca31ef5"}]}],"mappings":[{"uuid":"4f6e8b3a-e13f-4a09-b6ce-674f0ae758ab","display":"MCL/CIEL: 159406","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a73d20b3-d721-4763-a362-14a0c41a6b5e/mapping/4f6e8b3a-e13f-4a09-b6ce-674f0ae758ab"}]},{"uuid":"ea19f57f-4fc8-4a33-8e68-28be33f71caf","display":"local: 6655","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a73d20b3-d721-4763-a362-14a0c41a6b5e/mapping/ea19f57f-4fc8-4a33-8e68-28be33f71caf"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a73d20b3-d721-4763-a362-14a0c41a6b5e"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a73d20b3-d721-4763-a362-14a0c41a6b5e?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/e385a894-7a1e-4aa9-bc42-9a2c17131a3e"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/e385a894-7a1e-4aa9-bc42-9a2c17131a3e?v=full"}],"resourceVersion":"1.11"},{"uuid":"82abee24-873a-4b4c-ad67-98ca472e2f6b","display":"FREETEXT GENERAL: illness","concept":{"uuid":"a8a06fc6-1350-11df-a1f1-0026b9348838","display":"FREETEXT GENERAL","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8a06fc6-1350-11df-a1f1-0026b9348838"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"9625809a-b5de-434a-b3d2-1897eb0b6839","display":"ANTIRETROVIRAL ADHERENCE SINCE LAST VISIT, DETAILED: DEPRESSION, FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED, FAIR, illness, OTHER NON-CODED, ALCOHOLISM","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/9625809a-b5de-434a-b3d2-1897eb0b6839"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":"illness","valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/82abee24-873a-4b4c-ad67-98ca472e2f6b"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/82abee24-873a-4b4c-ad67-98ca472e2f6b?v=full"}],"resourceVersion":"1.11"},{"uuid":"f4d28f53-8ca2-48b0-8df5-579c1fcc9b79","display":"MISSED MEDICATION REASON: OTHER NON-CODED","concept":{"uuid":"a89ebbc2-1350-11df-a1f1-0026b9348838","display":"MISSED MEDICATION REASON","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ebbc2-1350-11df-a1f1-0026b9348838"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"9625809a-b5de-434a-b3d2-1897eb0b6839","display":"ANTIRETROVIRAL ADHERENCE SINCE LAST VISIT, DETAILED: DEPRESSION, FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED, FAIR, illness, OTHER NON-CODED, ALCOHOLISM","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/9625809a-b5de-434a-b3d2-1897eb0b6839"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a8aaf3e2-1350-11df-a1f1-0026b9348838","display":"OTHER NON-CODED","name":{"display":"OTHER NON-CODED","uuid":"a94bd9d8-1350-11df-a1f1-0026b9348838","name":"OTHER NON-CODED","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8aaf3e2-1350-11df-a1f1-0026b9348838/name/a94bd9d8-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8aaf3e2-1350-11df-a1f1-0026b9348838/name/a94bd9d8-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d492774-c2cc-11de-8d13-0010c6dffd0f","display":"Misc","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d492774-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"a94bd9d8-1350-11df-a1f1-0026b9348838","display":"OTHER NON-CODED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8aaf3e2-1350-11df-a1f1-0026b9348838/name/a94bd9d8-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a907fc0e-1350-11df-a1f1-0026b9348838","display":"A generic, descriptive answer which is a handwritten, non-coded response to a question.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8aaf3e2-1350-11df-a1f1-0026b9348838/description/a907fc0e-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"7ca60710-6ffc-454e-bad8-104ee1d87fe3","display":"MCL/CIEL: 5622","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8aaf3e2-1350-11df-a1f1-0026b9348838/mapping/7ca60710-6ffc-454e-bad8-104ee1d87fe3"}]},{"uuid":"f49d4033-3a22-41bb-a026-32ffbf06a734","display":"local: 5622","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8aaf3e2-1350-11df-a1f1-0026b9348838/mapping/f49d4033-3a22-41bb-a026-32ffbf06a734"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8aaf3e2-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8aaf3e2-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/f4d28f53-8ca2-48b0-8df5-579c1fcc9b79"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/f4d28f53-8ca2-48b0-8df5-579c1fcc9b79?v=full"}],"resourceVersion":"1.11"},{"uuid":"138859ab-fa1e-4498-a996-6547e2a2589e","display":"MISSED MEDICATION REASON: ALCOHOLISM","concept":{"uuid":"a89ebbc2-1350-11df-a1f1-0026b9348838","display":"MISSED MEDICATION REASON","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ebbc2-1350-11df-a1f1-0026b9348838"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"9625809a-b5de-434a-b3d2-1897eb0b6839","display":"ANTIRETROVIRAL ADHERENCE SINCE LAST VISIT, DETAILED: DEPRESSION, FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED, FAIR, illness, OTHER NON-CODED, ALCOHOLISM","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/9625809a-b5de-434a-b3d2-1897eb0b6839"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a89ced88-1350-11df-a1f1-0026b9348838","display":"ALCOHOLISM","name":{"display":"ALCOHOLISM","uuid":"a944e114-1350-11df-a1f1-0026b9348838","name":"ALCOHOLISM","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ced88-1350-11df-a1f1-0026b9348838/name/a944e114-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ced88-1350-11df-a1f1-0026b9348838/name/a944e114-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d4918b0-c2cc-11de-8d13-0010c6dffd0f","display":"Diagnosis","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d4918b0-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"a944e114-1350-11df-a1f1-0026b9348838","display":"ALCOHOLISM","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ced88-1350-11df-a1f1-0026b9348838/name/a944e114-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a9015dea-1350-11df-a1f1-0026b9348838","display":"Continued excessive or compulsive use of alcoholic drinks","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ced88-1350-11df-a1f1-0026b9348838/description/a9015dea-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"59fa8611-3731-4ef8-8be6-0d51845f71a4","display":"local: 1445","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ced88-1350-11df-a1f1-0026b9348838/mapping/59fa8611-3731-4ef8-8be6-0d51845f71a4"}]},{"uuid":"8e1efc27-850d-4c37-b41a-9fe091e485ca","display":"MCL/CIEL: 121712","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ced88-1350-11df-a1f1-0026b9348838/mapping/8e1efc27-850d-4c37-b41a-9fe091e485ca"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ced88-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89ced88-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/138859ab-fa1e-4498-a996-6547e2a2589e"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/138859ab-fa1e-4498-a996-6547e2a2589e?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"f611b2ce-28b6-4e56-bec8-dddab7861323","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a89d200a-1350-11df-a1f1-0026b9348838","name":{"display":"ANTIRETROVIRAL DRUG TREATMENT START DATE"}},"value":"2016-12-01T00:00:00.000+0300","groupMembers":null},{"uuid":"e32ad4e1-d896-4340-86c5-5156868adf13","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"04616f5d-b961-4f41-bbd7-bcc0dd235577","name":{"display":"CURRENT HIV ANTIRETROVIRAL DRUG USE TREATMENT CATEGORY"}},"value":{"uuid":"034047bd-3fa1-4b2a-b0f0-2787e9b9f7b3","display":"FIRST LINE HIV ANTIRETROVIRAL DRUG TREATMENT","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/034047bd-3fa1-4b2a-b0f0-2787e9b9f7b3"}]},"groupMembers":null},{"uuid":"7beef8f5-d403-4d57-aaaa-eae82093c605","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"02ad9357-b996-4530-b1a4-aff91a105383","name":{"display":"TUBERCULOSIS DISEASE STATUS"}},"value":{"uuid":"a8afcc82-1350-11df-a1f1-0026b9348838","display":"CURRENTLY ON TUBERCULOSIS TREATMENT","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8afcc82-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null},{"uuid":"87fed20d-fe94-4886-bfd3-f263bb21714b","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8afdb8c-1350-11df-a1f1-0026b9348838","name":{"display":"PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT, DETAILED"}},"value":null,"groupMembers":[{"uuid":"6b8a232c-5124-45d7-9ff5-cd63a9d3a9d5","display":"TUBERCULOSIS DRUG TREATMENT START DATE: 2016-11-29","concept":{"uuid":"a899e5f2-1350-11df-a1f1-0026b9348838","display":"TUBERCULOSIS DRUG TREATMENT START DATE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899e5f2-1350-11df-a1f1-0026b9348838"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"87fed20d-fe94-4886-bfd3-f263bb21714b","display":"PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT, DETAILED: 2016-11-29","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/87fed20d-fe94-4886-bfd3-f263bb21714b"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":"2016-11-29T00:00:00.000+0300","valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/6b8a232c-5124-45d7-9ff5-cd63a9d3a9d5"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/6b8a232c-5124-45d7-9ff5-cd63a9d3a9d5?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"8fd821ef-bf6e-4c74-b325-bd17aa1501af","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"d0efbf5b-cbfc-48fc-a857-c0ca4d70f077","name":{"display":"PROBABILITY OF ADVERSE DRUG REACTION OR TOXICITY, PATIENT REPORTED CURRENT MEDICATION"}},"value":{"uuid":"45eb8953-dc14-4c2e-8ce6-12cdf7da280a","display":"CERTAIN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/45eb8953-dc14-4c2e-8ce6-12cdf7da280a"}]},"groupMembers":null},{"uuid":"cd716b65-5acb-4bcd-b893-45a2acc942cd","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8a072c8-1350-11df-a1f1-0026b9348838","name":{"display":"PATIENT REPORTED CURRENT OTHER TREATMENT"}},"value":null,"groupMembers":[{"uuid":"e72f007c-6463-4e67-b2d8-230c96e081b1","display":"PATIENT REPORTED CURRENT MEDICATION CAUSING SIDE EFFECT: NALIDIXIC ACID","concept":{"uuid":"1682a920-c93d-4aad-b9cb-4a2b2c41ff1a","display":"PATIENT REPORTED CURRENT MEDICATION CAUSING SIDE EFFECT","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/1682a920-c93d-4aad-b9cb-4a2b2c41ff1a"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"cd716b65-5acb-4bcd-b893-45a2acc942cd","display":"PATIENT REPORTED CURRENT OTHER TREATMENT: NALIDIXIC ACID","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/cd716b65-5acb-4bcd-b893-45a2acc942cd"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a893a426-1350-11df-a1f1-0026b9348838","display":"NALIDIXIC ACID","name":{"display":"NALIDIXIC ACID","uuid":"a93d1ab0-1350-11df-a1f1-0026b9348838","name":"NALIDIXIC ACID","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a893a426-1350-11df-a1f1-0026b9348838/name/a93d1ab0-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a893a426-1350-11df-a1f1-0026b9348838/name/a93d1ab0-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d490dfc-c2cc-11de-8d13-0010c6dffd0f","display":"Drug","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d490dfc-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"a9588156-1350-11df-a1f1-0026b9348838","display":"NEGGRAM","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a893a426-1350-11df-a1f1-0026b9348838/name/a9588156-1350-11df-a1f1-0026b9348838"}]},{"uuid":"a93d1ab0-1350-11df-a1f1-0026b9348838","display":"NALIDIXIC ACID","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a893a426-1350-11df-a1f1-0026b9348838/name/a93d1ab0-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a8f463b0-1350-11df-a1f1-0026b9348838","display":"An antibacterial agent C12H12N2O3 that is used especially in the treatment of genitourinary infections.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a893a426-1350-11df-a1f1-0026b9348838/description/a8f463b0-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"49086dac-228c-4691-b5eb-c00ba93831c1","display":"local: 268","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a893a426-1350-11df-a1f1-0026b9348838/mapping/49086dac-228c-4691-b5eb-c00ba93831c1"}]},{"uuid":"ef87c436-6e88-4fc3-a49a-c2bbd6df64b1","display":"MCL/CIEL: 80363","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a893a426-1350-11df-a1f1-0026b9348838/mapping/ef87c436-6e88-4fc3-a49a-c2bbd6df64b1"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a893a426-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a893a426-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/e72f007c-6463-4e67-b2d8-230c96e081b1"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/e72f007c-6463-4e67-b2d8-230c96e081b1?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"92d3f904-9979-4d4e-870a-eafd46b60bc2","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a89fe6f0-1350-11df-a1f1-0026b9348838","name":{"display":"TB TREATMENT DRUGS STARTED, DETAILED"}},"value":null,"groupMembers":[{"uuid":"ba0cc10b-f40b-420a-99b3-6926c626f27b","display":"TUBERCULOSIS TREATMENT PLAN: CONTINUE REGIMEN","concept":{"uuid":"a89c1fd4-1350-11df-a1f1-0026b9348838","display":"TUBERCULOSIS TREATMENT PLAN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89c1fd4-1350-11df-a1f1-0026b9348838"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"92d3f904-9979-4d4e-870a-eafd46b60bc2","display":"TB TREATMENT DRUGS STARTED, DETAILED: CONTINUE REGIMEN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/92d3f904-9979-4d4e-870a-eafd46b60bc2"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a89b7908-1350-11df-a1f1-0026b9348838","display":"CONTINUE REGIMEN","name":{"display":"CONTINUE REGIMEN","uuid":"a94357d6-1350-11df-a1f1-0026b9348838","name":"CONTINUE REGIMEN","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89b7908-1350-11df-a1f1-0026b9348838/name/a94357d6-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89b7908-1350-11df-a1f1-0026b9348838/name/a94357d6-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d492ee0-c2cc-11de-8d13-0010c6dffd0f","display":"Misc Order","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d492ee0-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"a94357d6-1350-11df-a1f1-0026b9348838","display":"CONTINUE REGIMEN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89b7908-1350-11df-a1f1-0026b9348838/name/a94357d6-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a900220e-1350-11df-a1f1-0026b9348838","display":"Answer on encounter form.  Implies that a patient will continue on the same drug regimen as previously described.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89b7908-1350-11df-a1f1-0026b9348838/description/a900220e-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"34d3626d-35d4-4508-a569-a0fb3d1b16c0","display":"local: 1257","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89b7908-1350-11df-a1f1-0026b9348838/mapping/34d3626d-35d4-4508-a569-a0fb3d1b16c0"}]},{"uuid":"ba01f678-ca1d-4659-97ff-0fafbe9371f2","display":"MCL/CIEL: 1257","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89b7908-1350-11df-a1f1-0026b9348838/mapping/ba01f678-ca1d-4659-97ff-0fafbe9371f2"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89b7908-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89b7908-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/ba0cc10b-f40b-420a-99b3-6926c626f27b"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/ba0cc10b-f40b-420a-99b3-6926c626f27b?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"7c006a36-4229-416d-850f-f9f453851d3c","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"3a69cfcf-f129-4702-a8dd-d061d2a16b9d","name":{"display":"TUBERCULOSIS PROPHYLAXIS ADHERENCE SINCE LAST VISIT, DETAILED"}},"value":null,"groupMembers":[{"uuid":"2c85c31a-cc0b-4eca-8c19-fe8e5c359e84","display":"TUBERCULOSIS PROPHYLAXIS ADHERENCE SINCE LAST VISIT: GOOD","concept":{"uuid":"ebfdb93a-9292-4245-9a27-0faf49545720","display":"TUBERCULOSIS PROPHYLAXIS ADHERENCE SINCE LAST VISIT","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/ebfdb93a-9292-4245-9a27-0faf49545720"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"7c006a36-4229-416d-850f-f9f453851d3c","display":"TUBERCULOSIS PROPHYLAXIS ADHERENCE SINCE LAST VISIT, DETAILED: GOOD","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/7c006a36-4229-416d-850f-f9f453851d3c"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a8b0f882-1350-11df-a1f1-0026b9348838","display":"GOOD","name":{"display":"GOOD","uuid":"a95df35c-1350-11df-a1f1-0026b9348838","name":"GOOD","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/name/a95df35c-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/name/a95df35c-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d492774-c2cc-11de-8d13-0010c6dffd0f","display":"Misc","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d492774-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"a95df35c-1350-11df-a1f1-0026b9348838","display":"GOOD","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/name/a95df35c-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a90f4734-1350-11df-a1f1-0026b9348838","display":"General descriptive.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/description/a90f4734-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"a7c3c497-f857-4230-89a9-b3b6d4b25f8d","display":"local: 6343","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/mapping/a7c3c497-f857-4230-89a9-b3b6d4b25f8d"}]},{"uuid":"e6ef886b-2ab7-4cdc-9f6d-f272fad1b8c1","display":"MCL/CIEL: 159405","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/mapping/e6ef886b-2ab7-4cdc-9f6d-f272fad1b8c1"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/2c85c31a-cc0b-4eca-8c19-fe8e5c359e84"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/2c85c31a-cc0b-4eca-8c19-fe8e5c359e84?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"6897e49a-eb56-4720-bef1-764280e5780e","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a899e35e-1350-11df-a1f1-0026b9348838","name":{"display":"PATIENT REPORTED CURRENT TUBERCULOSIS PROPHYLAXIS"}},"value":{"uuid":"162724df-5a66-4ae3-bbf6-5dc6dbba4ebb","display":"ISONIAZID 100mg TAB","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/drug/162724df-5a66-4ae3-bbf6-5dc6dbba4ebb"}]},"groupMembers":null},{"uuid":"182f61b4-e317-455a-bf20-5dbb24f3d665","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8afdb8c-1350-11df-a1f1-0026b9348838","name":{"display":"PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT, DETAILED"}},"value":null,"groupMembers":[{"uuid":"cc412d33-e6f7-4ffa-98ec-ab6bc1364e26","display":"PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT: RIFAMPICIN ISONIAZID PYRAZINAMIDE AND ETHAMBUTOL","concept":{"uuid":"a899e444-1350-11df-a1f1-0026b9348838","display":"PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899e444-1350-11df-a1f1-0026b9348838"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"182f61b4-e317-455a-bf20-5dbb24f3d665","display":"PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT, DETAILED: RIFAMPICIN ISONIAZID PYRAZINAMIDE AND ETHAMBUTOL, 2.0","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/182f61b4-e317-455a-bf20-5dbb24f3d665"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a899f51a-1350-11df-a1f1-0026b9348838","display":"RIFAMPICIN ISONIAZID PYRAZINAMIDE AND ETHAMBUTOL","name":{"display":"RIFAMPICIN ISONIAZID PYRAZINAMIDE AND ETHAMBUTOL","uuid":"a94208d6-1350-11df-a1f1-0026b9348838","name":"RIFAMPICIN ISONIAZID PYRAZINAMIDE AND ETHAMBUTOL","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899f51a-1350-11df-a1f1-0026b9348838/name/a94208d6-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899f51a-1350-11df-a1f1-0026b9348838/name/a94208d6-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d490dfc-c2cc-11de-8d13-0010c6dffd0f","display":"Drug","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d490dfc-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"a9599118-1350-11df-a1f1-0026b9348838","display":"RHZE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899f51a-1350-11df-a1f1-0026b9348838/name/a9599118-1350-11df-a1f1-0026b9348838"}]},{"uuid":"a94208d6-1350-11df-a1f1-0026b9348838","display":"RIFAMPICIN ISONIAZID PYRAZINAMIDE AND ETHAMBUTOL","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899f51a-1350-11df-a1f1-0026b9348838/name/a94208d6-1350-11df-a1f1-0026b9348838"}]},{"uuid":"a95992b2-1350-11df-a1f1-0026b9348838","display":"RIFAFOUR","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899f51a-1350-11df-a1f1-0026b9348838/name/a95992b2-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a8ff8b28-1350-11df-a1f1-0026b9348838","display":"Fixed-dose combination drug used to treat tuberculosis.  Also known as Rifafour.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899f51a-1350-11df-a1f1-0026b9348838/description/a8ff8b28-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"2c299f8a-1645-4d7e-bf92-eed016a9113b","display":"local: 1131","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899f51a-1350-11df-a1f1-0026b9348838/mapping/2c299f8a-1645-4d7e-bf92-eed016a9113b"}]},{"uuid":"648f442a-9c6b-4a7a-a314-57f75685affb","display":"MCL/CIEL: 1131","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899f51a-1350-11df-a1f1-0026b9348838/mapping/648f442a-9c6b-4a7a-a314-57f75685affb"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899f51a-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899f51a-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/cc412d33-e6f7-4ffa-98ec-ab6bc1364e26"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/cc412d33-e6f7-4ffa-98ec-ab6bc1364e26?v=full"}],"resourceVersion":"1.11"},{"uuid":"e8b92e69-49f4-47fa-98f1-f62bf01aeed8","display":"NUMBER OF TABLETS PER DAY: 2.0","concept":{"uuid":"a8a07386-1350-11df-a1f1-0026b9348838","display":"NUMBER OF TABLETS PER DAY","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8a07386-1350-11df-a1f1-0026b9348838"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"182f61b4-e317-455a-bf20-5dbb24f3d665","display":"PATIENT REPORTED CURRENT TUBERCULOSIS TREATMENT, DETAILED: RIFAMPICIN ISONIAZID PYRAZINAMIDE AND ETHAMBUTOL, 2.0","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/182f61b4-e317-455a-bf20-5dbb24f3d665"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":2,"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/e8b92e69-49f4-47fa-98f1-f62bf01aeed8"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/e8b92e69-49f4-47fa-98f1-f62bf01aeed8?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"d240d15d-d60a-444c-8def-0de6e932f7d8","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a899cf5e-1350-11df-a1f1-0026b9348838","name":{"display":"CURRENT ANTIRETROVIRAL DRUGS USED FOR TREATMENT"}},"value":{"uuid":"6a73f32d-1870-4527-af6e-74443251ded2","display":"NEVIRAPINE LAMIVUDINE AND ZIDOVUDINE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/6a73f32d-1870-4527-af6e-74443251ded2"}]},"groupMembers":null},{"uuid":"425c71b9-8f10-4452-92f8-cd8d44c4a971","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8a072c8-1350-11df-a1f1-0026b9348838","name":{"display":"PATIENT REPORTED CURRENT OTHER TREATMENT"}},"value":null,"groupMembers":[{"uuid":"80718d82-dedf-4834-929f-e05109fef04c","display":"PATIENT REPORTED CURRENT MEDICATION CAUSING SIDE EFFECT: PAROMOMYCIN","concept":{"uuid":"1682a920-c93d-4aad-b9cb-4a2b2c41ff1a","display":"PATIENT REPORTED CURRENT MEDICATION CAUSING SIDE EFFECT","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/1682a920-c93d-4aad-b9cb-4a2b2c41ff1a"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"425c71b9-8f10-4452-92f8-cd8d44c4a971","display":"PATIENT REPORTED CURRENT OTHER TREATMENT: PAROMOMYCIN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/425c71b9-8f10-4452-92f8-cd8d44c4a971"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a898a700-1350-11df-a1f1-0026b9348838","display":"PAROMOMYCIN","name":{"display":"PAROMOMYCIN","uuid":"a94159cc-1350-11df-a1f1-0026b9348838","name":"PAROMOMYCIN","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898a700-1350-11df-a1f1-0026b9348838/name/a94159cc-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898a700-1350-11df-a1f1-0026b9348838/name/a94159cc-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d490dfc-c2cc-11de-8d13-0010c6dffd0f","display":"Drug","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d490dfc-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":null,"retired":false,"names":[{"uuid":"a9567492-1350-11df-a1f1-0026b9348838","display":"GABBRORAL TABS","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898a700-1350-11df-a1f1-0026b9348838/name/a9567492-1350-11df-a1f1-0026b9348838"}]},{"uuid":"0cb3a75c-ec8a-47f4-a89d-4faadf81bff2","display":"AMINOSIDINE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898a700-1350-11df-a1f1-0026b9348838/name/0cb3a75c-ec8a-47f4-a89d-4faadf81bff2"}]},{"uuid":"a95672e4-1350-11df-a1f1-0026b9348838","display":"GABBRORAL","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898a700-1350-11df-a1f1-0026b9348838/name/a95672e4-1350-11df-a1f1-0026b9348838"}]},{"uuid":"a95673c0-1350-11df-a1f1-0026b9348838","display":"GABBRORAL SYRUP","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898a700-1350-11df-a1f1-0026b9348838/name/a95673c0-1350-11df-a1f1-0026b9348838"}]},{"uuid":"a94159cc-1350-11df-a1f1-0026b9348838","display":"PAROMOMYCIN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898a700-1350-11df-a1f1-0026b9348838/name/a94159cc-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a8fe582a-1350-11df-a1f1-0026b9348838","display":"A broad-spectrum antibiotic C23H45N5O14 that is obtained from a bacterium of the genus Streptomyces (S. rimosus paromomycinus) and is used against intestinal amebiasis especially in the form of its sulfate.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898a700-1350-11df-a1f1-0026b9348838/description/a8fe582a-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"f73a7808-ba41-433d-8931-ab25557a19b4","display":"MCL/CIEL: 81600","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898a700-1350-11df-a1f1-0026b9348838/mapping/f73a7808-ba41-433d-8931-ab25557a19b4"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898a700-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898a700-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/80718d82-dedf-4834-929f-e05109fef04c"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/80718d82-dedf-4834-929f-e05109fef04c?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"7a2cc873-3b33-45ee-a89a-85b50f9db315","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"2a4b87dd-977d-4ce8-a321-1f13df4a31b2","name":{"display":"TUBERCULOSIS TREATMENT ADHERENCE SINCE LAST VISIT, DETAILED"}},"value":null,"groupMembers":[{"uuid":"78d3d4dc-cdd3-4b3a-ae87-4cb9c13aea62","display":"TUBERCULOSIS TREATMENT ADHERENCE SINCE LAST VISIT: GOOD","concept":{"uuid":"479decbd-e964-41c3-9576-98b39089ebd3","display":"TUBERCULOSIS TREATMENT ADHERENCE SINCE LAST VISIT","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/479decbd-e964-41c3-9576-98b39089ebd3"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"7a2cc873-3b33-45ee-a89a-85b50f9db315","display":"TUBERCULOSIS TREATMENT ADHERENCE SINCE LAST VISIT, DETAILED: GOOD","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/7a2cc873-3b33-45ee-a89a-85b50f9db315"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a8b0f882-1350-11df-a1f1-0026b9348838","display":"GOOD","name":{"display":"GOOD","uuid":"a95df35c-1350-11df-a1f1-0026b9348838","name":"GOOD","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/name/a95df35c-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/name/a95df35c-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d492774-c2cc-11de-8d13-0010c6dffd0f","display":"Misc","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d492774-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"a95df35c-1350-11df-a1f1-0026b9348838","display":"GOOD","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/name/a95df35c-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a90f4734-1350-11df-a1f1-0026b9348838","display":"General descriptive.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/description/a90f4734-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"a7c3c497-f857-4230-89a9-b3b6d4b25f8d","display":"local: 6343","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/mapping/a7c3c497-f857-4230-89a9-b3b6d4b25f8d"}]},{"uuid":"e6ef886b-2ab7-4cdc-9f6d-f272fad1b8c1","display":"MCL/CIEL: 159405","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838/mapping/e6ef886b-2ab7-4cdc-9f6d-f272fad1b8c1"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8b0f882-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/78d3d4dc-cdd3-4b3a-ae87-4cb9c13aea62"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/78d3d4dc-cdd3-4b3a-ae87-4cb9c13aea62?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"9fbe5f84-3da6-473c-af6c-85d96c78184b","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8a072c8-1350-11df-a1f1-0026b9348838","name":{"display":"PATIENT REPORTED CURRENT OTHER TREATMENT"}},"value":null,"groupMembers":[{"uuid":"69f08bb7-6dde-48f9-8528-7eec45a0e328","display":"MEDICATION ADDED: NORMAL SALINE","concept":{"uuid":"a8a060c6-1350-11df-a1f1-0026b9348838","display":"MEDICATION ADDED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8a060c6-1350-11df-a1f1-0026b9348838"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"9fbe5f84-3da6-473c-af6c-85d96c78184b","display":"PATIENT REPORTED CURRENT OTHER TREATMENT: NORMAL SALINE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/9fbe5f84-3da6-473c-af6c-85d96c78184b"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"de26899a-3960-4bc2-b5ae-79520a920db2","display":"NORMAL SALINE","name":{"display":"NORMAL SALINE","uuid":"0abb7d23-304c-4ee9-8511-69252d603ed5","name":"NORMAL SALINE","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/de26899a-3960-4bc2-b5ae-79520a920db2/name/0abb7d23-304c-4ee9-8511-69252d603ed5"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/de26899a-3960-4bc2-b5ae-79520a920db2/name/0abb7d23-304c-4ee9-8511-69252d603ed5?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d490dfc-c2cc-11de-8d13-0010c6dffd0f","display":"Drug","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d490dfc-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"99f60280-8a20-49ae-8974-980eb6be2893","display":"NS","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/de26899a-3960-4bc2-b5ae-79520a920db2/name/99f60280-8a20-49ae-8974-980eb6be2893"}]},{"uuid":"0abb7d23-304c-4ee9-8511-69252d603ed5","display":"NORMAL SALINE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/de26899a-3960-4bc2-b5ae-79520a920db2/name/0abb7d23-304c-4ee9-8511-69252d603ed5"}]}],"descriptions":[{"uuid":"b1d2604b-d72d-405a-a544-8350f93b484c","display":"Normal Saline is a sterile, nonpyrogenic solution for fluid and electrolyte replenishment. Normal Saline is the commonly-used term for a solution of 0.90% w/v of NaCl, about 300 mOsm/L or 9.0 g per liter.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/de26899a-3960-4bc2-b5ae-79520a920db2/description/b1d2604b-d72d-405a-a544-8350f93b484c"}]}],"mappings":[],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/de26899a-3960-4bc2-b5ae-79520a920db2"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/de26899a-3960-4bc2-b5ae-79520a920db2?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/69f08bb7-6dde-48f9-8528-7eec45a0e328"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/69f08bb7-6dde-48f9-8528-7eec45a0e328?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"556d656c-bf17-40b3-8cff-edeb2ff07e1d","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a899e282-1350-11df-a1f1-0026b9348838","name":{"display":"PATIENT REPORTED CURRENT PCP PROPHYLAXIS"}},"value":{"uuid":"a8989396-1350-11df-a1f1-0026b9348838","display":"TRIMETHOPRIM AND SULFAMETHOXAZOLE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8989396-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null},{"uuid":"c37e1202-04ad-4bbe-a8d1-40cbb5373ac1","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a89b7e12-1350-11df-a1f1-0026b9348838","name":{"display":"PCP PROPHYLAXIS PLAN"}},"value":{"uuid":"a89b7908-1350-11df-a1f1-0026b9348838","display":"CONTINUE REGIMEN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89b7908-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null},{"uuid":"0e3c1864-11b7-4a32-8c10-5462b5e79210","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a899cf5e-1350-11df-a1f1-0026b9348838","name":{"display":"CURRENT ANTIRETROVIRAL DRUGS USED FOR TREATMENT"}},"value":{"uuid":"1c4a75d0-cc91-4752-b0a5-4b833326ff7a","display":"TENOFOVIR AND LAMIVUDINE AND EFAVIRENZ","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/1c4a75d0-cc91-4752-b0a5-4b833326ff7a"}]},"groupMembers":null},{"uuid":"f86f7a3f-9883-4b9d-b2bf-7602e3c38ba8","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a8a072c8-1350-11df-a1f1-0026b9348838","name":{"display":"PATIENT REPORTED CURRENT OTHER TREATMENT"}},"value":null,"groupMembers":[{"uuid":"60681cdc-23cd-4947-bda3-5774efa070b2","display":"PATIENT REPORTED SIDE EFFECT OF TAKING ANY CURRENT MEDICATION: YES","concept":{"uuid":"30fc0cea-b6c7-48cc-bbfb-4eb53170ce41","display":"PATIENT REPORTED SIDE EFFECT OF TAKING ANY CURRENT MEDICATION","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/30fc0cea-b6c7-48cc-bbfb-4eb53170ce41"}]},"person":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"obsDatetime":"2016-12-01T11:33:57.000+0300","accessionNumber":null,"obsGroup":{"uuid":"f86f7a3f-9883-4b9d-b2bf-7602e3c38ba8","display":"PATIENT REPORTED CURRENT OTHER TREATMENT: YES","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/f86f7a3f-9883-4b9d-b2bf-7602e3c38ba8"}]},"valueCodedName":null,"groupMembers":null,"comment":null,"location":{"uuid":"08feae7c-1352-11df-a1f1-0026b9348838","display":"MTRH Module 1","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/location/08feae7c-1352-11df-a1f1-0026b9348838"}]},"order":null,"encounter":{"uuid":"e3a504ad-f9db-46e5-b4a8-017dcddc9950","display":"ADULTRETURN 01/12/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/e3a504ad-f9db-46e5-b4a8-017dcddc9950"}]},"voided":false,"value":{"uuid":"a899b35c-1350-11df-a1f1-0026b9348838","display":"YES","name":{"display":"YES","uuid":"a941cce0-1350-11df-a1f1-0026b9348838","name":"YES","locale":"en","localePreferred":true,"conceptNameType":"FULLY_SPECIFIED","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899b35c-1350-11df-a1f1-0026b9348838/name/a941cce0-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899b35c-1350-11df-a1f1-0026b9348838/name/a941cce0-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.9"},"datatype":{"uuid":"8d4a4c94-c2cc-11de-8d13-0010c6dffd0f","display":"N/A","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"}]},"conceptClass":{"uuid":"8d492774-c2cc-11de-8d13-0010c6dffd0f","display":"Misc","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/conceptclass/8d492774-c2cc-11de-8d13-0010c6dffd0f"}]},"set":false,"version":"","retired":false,"names":[{"uuid":"a941cce0-1350-11df-a1f1-0026b9348838","display":"YES","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899b35c-1350-11df-a1f1-0026b9348838/name/a941cce0-1350-11df-a1f1-0026b9348838"}]}],"descriptions":[{"uuid":"a8fef456-1350-11df-a1f1-0026b9348838","display":"Generic answer to a question.","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899b35c-1350-11df-a1f1-0026b9348838/description/a8fef456-1350-11df-a1f1-0026b9348838"}]}],"mappings":[{"uuid":"59b87fd6-8aa3-407b-b1f5-94f8bdcf1bba","display":"MCL/CIEL: 1065","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899b35c-1350-11df-a1f1-0026b9348838/mapping/59b87fd6-8aa3-407b-b1f5-94f8bdcf1bba"}]},{"uuid":"8e156db1-1496-4f41-9cd8-211d869ed211","display":"local: 1065","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899b35c-1350-11df-a1f1-0026b9348838/mapping/8e156db1-1496-4f41-9cd8-211d869ed211"}]}],"answers":[],"setMembers":[],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899b35c-1350-11df-a1f1-0026b9348838"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899b35c-1350-11df-a1f1-0026b9348838?v=full"}],"resourceVersion":"1.11"},"valueModifier":null,"formFieldPath":null,"formFieldNamespace":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/60681cdc-23cd-4947-bda3-5774efa070b2"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/obs/60681cdc-23cd-4947-bda3-5774efa070b2?v=full"}],"resourceVersion":"1.11"}]},{"uuid":"77596785-e04f-4905-8db6-72839c31ca1b","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a89b75d4-1350-11df-a1f1-0026b9348838","name":{"display":"ANTIRETROVIRAL PLAN"}},"value":{"uuid":"a89b7908-1350-11df-a1f1-0026b9348838","display":"CONTINUE REGIMEN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a89b7908-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null},{"uuid":"9adc503f-4da7-4cb1-a73f-d94e76317da2","obsDatetime":"2016-12-01T11:33:57.000+0300","concept":{"uuid":"a89ae254-1350-11df-a1f1-0026b9348838","name":{"display":"ANTIRETROVIRAL USE"}},"value":{"uuid":"a899b35c-1350-11df-a1f1-0026b9348838","display":"YES","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a899b35c-1350-11df-a1f1-0026b9348838"}]},"groupMembers":null}]};

/***/ }),

/***/ "./src/app/mock/orders.json":
/*!**********************************!*\
  !*** ./src/app/mock/orders.json ***!
  \**********************************/
/*! exports provided: uuid, display, encounterDatetime, patient, form, encounterType, orders, default */
/***/ (function(module) {

module.exports = {"uuid":"3e9f1808-34dd-4407-b474-c334a2653a10","display":"ADULTRETURN 16/11/2016","encounterDatetime":"2016-11-16T11:46:37.000+0300","patient":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"form":{"uuid":"81f92a8a-ff5c-415d-a34c-b5bdca2406be","display":"AMPATH POC Adult Return Visit Form v1.0","name":"AMPATH POC Adult Return Visit Form v1.0","description":"AMPATH POC Adult Return Visit Form v1.0","encounterType":{"uuid":"8d5b2be0-c2cc-11de-8d13-0010c6dffd0f","display":"ADULTRETURN","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encountertype/8d5b2be0-c2cc-11de-8d13-0010c6dffd0f"}]},"version":"1.0","build":null,"published":true,"formFields":[],"retired":false,"resources":[{"uuid":"991e36d7-98df-45a9-b77b-37dba0dfcb67","display":"json schema","links":[{"rel":"value","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/form/81f92a8a-ff5c-415d-a34c-b5bdca2406be/resource/991e36d7-98df-45a9-b77b-37dba0dfcb67/value"},{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/form/81f92a8a-ff5c-415d-a34c-b5bdca2406be/resource/991e36d7-98df-45a9-b77b-37dba0dfcb67"}]}],"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/form/81f92a8a-ff5c-415d-a34c-b5bdca2406be"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/form/81f92a8a-ff5c-415d-a34c-b5bdca2406be?v=full"}],"resourceVersion":"1.9"},"encounterType":{"uuid":"8d5b2be0-c2cc-11de-8d13-0010c6dffd0f","display":"ADULTRETURN","name":"ADULTRETURN","description":"Outpatient Adult Return Visit","retired":false,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encountertype/8d5b2be0-c2cc-11de-8d13-0010c6dffd0f"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encountertype/8d5b2be0-c2cc-11de-8d13-0010c6dffd0f?v=full"}],"resourceVersion":"1.8"},"orders":[{"uuid":"order-1-uuid","orderNumber":"ORD-13737","auditInfo":{"dateVoided":"2017-01-01"},"patient":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"concept":{"uuid":"a8982474-1350-11df-a1f1-0026b9348838","display":"HIV VIRAL LOAD, QUANTITATIVE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8982474-1350-11df-a1f1-0026b9348838"}]},"action":"NEW","careSetting":{"uuid":"6f0c9a92-6f24-11e3-af88-005056821db0","display":"Outpatient","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0"}]},"previousOrder":null,"dateActivated":"2016-12-14T06:38:52.000+0300","dateStopped":null,"autoExpireDate":null,"encounter":{"uuid":"3e9f1808-34dd-4407-b474-c334a2653a10","display":"ADULTRETURN 16/11/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/3e9f1808-34dd-4407-b474-c334a2653a10"}]},"orderer":{"uuid":"d9ca67ef-c8ea-4d2d-9102-eb515573f856","display":"1118-9 - Florida Jepngetich Kiplagat","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/provider/d9ca67ef-c8ea-4d2d-9102-eb515573f856"}]},"orderReason":null,"orderReasonNonCoded":null,"urgency":"ROUTINE","instructions":null,"commentToFulfiller":null,"display":"HIV VIRAL LOAD, QUANTITATIVE","specimenSource":null,"laterality":null,"clinicalHistory":null,"frequency":null,"numberOfRepeats":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/order/04702e88-b06a-44c0-a5e8-c3f3291595a0"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/order/04702e88-b06a-44c0-a5e8-c3f3291595a0?v=full"}],"type":"testorder","resourceVersion":"1.10"},{"uuid":"order-1-uuid","orderNumber":"ORD-13738","auditInfo":{"dateVoided":""},"patient":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"concept":{"uuid":"a8982474-1350-11df-a1f1-0026b9348838","display":"HIV VIRAL LOAD, QUANTITATIVE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a8982474-1350-11df-a1f1-0026b9348838"}]},"action":"NEW","careSetting":{"uuid":"6f0c9a92-6f24-11e3-af88-005056821db0","display":"Outpatient","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0"}]},"previousOrder":null,"dateActivated":"2016-12-14T06:38:52.000+0300","dateStopped":null,"autoExpireDate":null,"encounter":{"uuid":"3e9f1808-34dd-4407-b474-c334a2653a10","display":"ADULTRETURN 16/11/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/3e9f1808-34dd-4407-b474-c334a2653a10"}]},"orderer":{"uuid":"d9ca67ef-c8ea-4d2d-9102-eb515573f856","display":"1118-9 - Florida Jepngetich Kiplagat","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/provider/d9ca67ef-c8ea-4d2d-9102-eb515573f856"}]},"orderReason":null,"orderReasonNonCoded":null,"urgency":"ROUTINE","instructions":null,"commentToFulfiller":null,"display":"HIV VIRAL LOAD, QUANTITATIVE","specimenSource":null,"laterality":null,"clinicalHistory":null,"frequency":null,"numberOfRepeats":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/order/04702e88-b06a-44c0-a5e8-c3f3291595a0"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/order/04702e88-b06a-44c0-a5e8-c3f3291595a0?v=full"}],"type":"testorder","resourceVersion":"1.10"},{"uuid":"order-2-uuid","orderNumber":"ORD-13739","auditInfo":{"dateVoided":""},"patient":{"uuid":"b4ddd369-bec5-446e-b8f8-47fd5567b295","display":"234750205-2 - Robai Test Robai","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/patient/b4ddd369-bec5-446e-b8f8-47fd5567b295"}]},"concept":{"uuid":"a898fe80-1350-11df-a1f1-0026b9348838","display":"HIV DNA POLYMERASE CHAIN REACTION, QUALITATIVE","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/concept/a898fe80-1350-11df-a1f1-0026b9348838"}]},"action":"NEW","careSetting":{"uuid":"6f0c9a92-6f24-11e3-af88-005056821db0","display":"Outpatient","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0"}]},"previousOrder":null,"dateActivated":"2016-12-14T06:38:53.000+0300","dateStopped":null,"autoExpireDate":null,"encounter":{"uuid":"3e9f1808-34dd-4407-b474-c334a2653a10","display":"ADULTRETURN 16/11/2016","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/encounter/3e9f1808-34dd-4407-b474-c334a2653a10"}]},"orderer":{"uuid":"d9ca67ef-c8ea-4d2d-9102-eb515573f856","display":"1118-9 - Florida Jepngetich Kiplagat","links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/provider/d9ca67ef-c8ea-4d2d-9102-eb515573f856"}]},"orderReason":null,"orderReasonNonCoded":null,"urgency":"ROUTINE","instructions":null,"commentToFulfiller":null,"display":"HIV DNA POLYMERASE CHAIN REACTION, QUALITATIVE","specimenSource":null,"laterality":null,"clinicalHistory":null,"frequency":null,"numberOfRepeats":null,"links":[{"rel":"self","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/order/38e07c3c-3291-4d5b-8d4b-7c9dbd5df072"},{"rel":"full","uri":"https://amrs.ampath.or.ke:8443/amrs/ws/rest/v1/order/38e07c3c-3291-4d5b-8d4b-7c9dbd5df072?v=full"}],"type":"testorder","resourceVersion":"1.10"}]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RFGRegenstrief Grant\Documents\ngx-openmrs-formentry\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map