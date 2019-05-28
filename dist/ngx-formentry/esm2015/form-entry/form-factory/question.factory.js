/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import * as moment_ from 'moment';
/** @type {?} */
const moment = moment_;
import { TextInputQuestion } from '../question-models/text-input-question';
import { TextAreaInputQuestion } from '../question-models/text-area-input-question';
import { SelectQuestion } from '../question-models/select-question';
import { UiSelectQuestion } from '../question-models/ui-select-question';
import { DateQuestion } from '../question-models/date-question';
import { MultiSelectQuestion } from '../question-models/multi-select-question';
import { QuestionGroup } from '../question-models/group-question';
import { RepeatingQuestion } from '../question-models/repeating-question';
import { FileUploadQuestion } from '../question-models/file-upload-question';
import { TestOrderQuestion } from '../question-models/test-order-question';
import { AfeControlType } from '../../abstract-controls-extension/afe-control-type';
import { ValidationModel } from '../question-models/validation.model';
import { DateValidationModel } from '../question-models/date-validation.model';
import { MaxValidationModel } from '../question-models/max-validation.model';
import { MinValidationModel } from '../question-models/min-validation.model';
import { JsExpressionValidationModel } from '../question-models/js-expression-validation.model';
import { ConditionalValidationModel } from '../question-models/conditional-validation.model';
import { DummyDataSource } from '../data-sources/dummy-data-source';
import { HistoricalHelperService } from '../helpers/historical-expression-helper-service';
import { CheckBoxQuestion } from '../question-models/models';
export class QuestionFactory {
    constructor() {
        this.dataSources = {};
        this.historicalHelperService = new HistoricalHelperService();
    }
    /**
     * @param {?} formSchema
     * @param {?=} form
     * @return {?}
     */
    createQuestionModel(formSchema, form) {
        if (form) {
            /** @type {?} */
            const dataSources = form.dataSourcesContainer.dataSources;
            this.dataSources = dataSources;
        }
        return this.toFormQuestionModel(formSchema);
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toSelectQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new SelectQuestion({ options: [], type: '', key: '' });
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
        const options = question.options;
        options.splice(0, 0, {
            label: '',
            value: ''
        });
        question.renderingType = schemaQuestion.questionOptions.rendering;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        /** @type {?} */
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toNumericQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new TextInputQuestion({ placeholder: '', type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'number';
        question.placeholder = schemaQuestion.questionOptions.placeholder;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.placeholder = schemaQuestion.questionOptions.placeholder || '';
        /** @type {?} */
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toNumberQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new TextInputQuestion({ placeholder: '', type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'number';
        question.placeholder = schemaQuestion.questionOptions.placeholder || '';
        question.extras = schemaQuestion;
        /** @type {?} */
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toDateQuestion(schemaQuestion) {
        if (schemaQuestion.type === 'encounterDatetime') {
            return this.toEncounterDatetimeQuestion(schemaQuestion);
        }
        /** @type {?} */
        const question = new DateQuestion({ type: '', key: '' });
        question.renderingType = 'date';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.showTime = (/** @type {?} */ (schemaQuestion.questionOptions.showTime));
        question.showWeeksAdder = schemaQuestion.questionOptions.weeksList ? true : false;
        /** @type {?} */
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toEncounterDatetimeQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new DateQuestion({ type: '', key: '' });
        question.label = schemaQuestion.label;
        question.renderingType = 'date';
        question.key = schemaQuestion.id;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.showWeeksAdder = schemaQuestion.questionOptions.weeksList ? true : false;
        /** @type {?} */
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toCheckBoxQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new CheckBoxQuestion({ options: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.extras = schemaQuestion;
        question.options = schemaQuestion.questionOptions.answers.map((/**
         * @param {?} obj
         * @return {?}
         */
        (obj) => {
            return {
                label: obj.label,
                value: obj.concept
            };
        }));
        question.options.splice(0, 0);
        question.renderingType = schemaQuestion.questionOptions.rendering;
        /** @type {?} */
        const mappings = {
            label: 'label',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        this.addDisableOrHideProperty(schemaQuestion, question);
        this.addAlertProperty(schemaQuestion, question);
        this.addHistoricalExpressions(schemaQuestion, question);
        this.addCalculatorProperty(schemaQuestion, question);
        return question;
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toMultiCheckboxQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new MultiSelectQuestion({ renderType: '', options: [], type: '', key: '' });
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
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toTextAreaQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new TextAreaInputQuestion({
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
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toTextQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new TextInputQuestion({ placeholder: '', type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'text';
        question.placeholder = schemaQuestion.questionOptions.placeholder;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.placeholder = schemaQuestion.questionOptions.placeholder || '';
        /** @type {?} */
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toFileUploadQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new FileUploadQuestion({ type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'file';
        question.dataSource = 'file';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        /** @type {?} */
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toDrugQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new SelectQuestion({ options: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'remote-select';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.dataSource = 'drug';
        /** @type {?} */
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toProblemQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new SelectQuestion({ options: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.id;
        question.renderingType = 'remote-select';
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        question.dataSource = 'problem';
        /** @type {?} */
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toConceptAnswerSelect(schemaQuestion) {
        /** @type {?} */
        const question = new SelectQuestion({ options: [], type: '', key: '' });
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
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toRepeatingQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new RepeatingQuestion({ questions: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.questions = this.getChildrenQuestionModels(schemaQuestion.questions);
        question.key = schemaQuestion.id;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        if (schemaQuestion.type === 'testOrder') {
            /** @type {?} */
            const testOrder = this.toTestOrderQuestion(schemaQuestion);
            /** @type {?} */
            const orders = [];
            orders.push(testOrder);
            question.questions = orders;
        }
        /** @type {?} */
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toGroupQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new QuestionGroup({ questions: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.questions = this.getChildrenQuestionModels(schemaQuestion.questions);
        question.key = schemaQuestion.id;
        question.validators = this.addValidators(schemaQuestion);
        question.extras = schemaQuestion;
        /** @type {?} */
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toPageQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new QuestionGroup({ questions: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.label;
        question.renderingType = 'page';
        question.controlType = AfeControlType.None;
        question.questions = [];
        schemaQuestion.sections.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            question.questions.push(this.toSectionQuestion(element));
        }));
        return question;
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toFormQuestionModel(schemaQuestion) {
        /** @type {?} */
        const question = new QuestionGroup({ questions: [], type: '', key: '' });
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
        element => {
            question.questions.push(this.toPageQuestion(element));
        }));
        return question;
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toSectionQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new QuestionGroup({ questions: [], type: '', key: '' });
        question.label = schemaQuestion.label;
        question.key = schemaQuestion.label;
        question.renderingType = 'section';
        question.controlType = AfeControlType.None;
        question.isExpanded = schemaQuestion.isExpanded === 'true' ? true : false;
        question.questions = this.getSchemaQuestions(schemaQuestion.questions);
        return question;
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toPersonAttributeQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new UiSelectQuestion({
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
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toEncounterProviderQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new UiSelectQuestion({
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
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toFieldSetQuestion(schemaQuestion) {
        /** @type {?} */
        const toReturn = this.toGroupQuestion(schemaQuestion);
        toReturn.renderingType = 'field-set';
        return toReturn;
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toEncounterLocationQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new UiSelectQuestion({
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
        const mappings = {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    toTestOrderQuestion(schemaQuestion) {
        /** @type {?} */
        const question = new TestOrderQuestion({
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
        const mappings = {
            label: 'label',
            required: 'required',
            id: 'key'
        };
        this.copyProperties(mappings, schemaQuestion, question);
        return question;
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    getSchemaQuestions(schema) {
        /** @type {?} */
        const listQuestions = new Array();
        this.getQuestions(schema, listQuestions);
        return listQuestions;
    }
    /**
     * @param {?} schema
     * @param {?} foundArray
     * @return {?}
     */
    getQuestions(schema, foundArray) {
        if (!Array.isArray(foundArray)) {
            foundArray = [];
        }
        if (Array.isArray(schema)) {
            for (const property in schema) {
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
                else if (schema.questionOptions.rendering === 'field-set') {
                }
                else {
                    foundArray.push(this.toModel(schema, schema.questionOptions.rendering));
                }
            }
            else {
                for (const o in schema) {
                    if (schema.hasOwnProperty(o)) {
                        this.getQuestions(schema[o], foundArray);
                    }
                }
            }
        }
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    getChildrenQuestionModels(schema) {
        /** @type {?} */
        const children = [];
        this.getQuestions(schema, children);
        return children;
    }
    /**
     * @param {?} schema
     * @param {?} renderType
     * @return {?}
     */
    toModel(schema, renderType) {
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
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    convertOldVersionComplexObsQuestionToNewVersion(schemaQuestion) {
        /** @type {?} */
        const converted = {};
        converted.type = 'complex-obs';
        converted.label = schemaQuestion.label;
        converted.id = 'complex_' + schemaQuestion.id;
        converted.questionOptions = {};
        converted.questionOptions.concept = schemaQuestion.questionOptions.concept;
        converted.questionOptions.rendering = 'field-set';
        converted.questions = [];
        converted.validators = [];
        /** @type {?} */
        const mainField = JSON.parse(JSON.stringify(schemaQuestion));
        mainField.type = 'complex-obs-child';
        delete mainField.questionOptions.showDate;
        delete mainField.questionOptions.shownDateOptions;
        mainField.questionOptions.obsField = 'value';
        /** @type {?} */
        const dateField = {};
        dateField.type = 'complex-obs-child';
        dateField.label = 'Date of ' + mainField.label;
        dateField.id = 'date_' + mainField.id;
        dateField.questionOptions = {};
        dateField.questionOptions.concept = schemaQuestion.questionOptions.concept;
        dateField.questionOptions.rendering = 'date';
        dateField.questionOptions.obsField = 'obsDatetime';
        /** @type {?} */
        const dateOptions = ((/** @type {?} */ (Object))).assign({}, schemaQuestion.questionOptions.shownDateOptions);
        dateField.validators = dateOptions.validators;
        dateField.hide = dateOptions.hide;
        converted.questions.push(mainField);
        converted.questions.push(dateField);
        return converted;
    }
    /**
     * @param {?} mappings
     * @param {?} source
     * @param {?} destination
     * @return {?}
     */
    copyProperties(mappings, source, destination) {
        for (const property in source) {
            if (mappings.hasOwnProperty(property) && destination.hasOwnProperty(mappings[property])) {
                destination[mappings[property]] = source[property];
            }
        }
    }
    /**
     * @param {?} schemaQuestion
     * @return {?}
     */
    addValidators(schemaQuestion) {
        /** @type {?} */
        const validators = [];
        if (schemaQuestion.validators) {
            // TODO - add more validator types
            _.forEach(schemaQuestion.validators, (/**
             * @param {?} validator
             * @return {?}
             */
            (validator) => {
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
        const questionOptions = schemaQuestion.questionOptions;
        /** @type {?} */
        const renderingType = questionOptions ? questionOptions.rendering : '';
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
            const required = schemaQuestion.required;
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
    }
    /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    addHistoricalExpressions(schemaQuestion, question) {
        if (schemaQuestion.historicalExpression && schemaQuestion.historicalExpression.length > 0) {
            question.setHistoricalValue(true);
            if (schemaQuestion.showHistoricalEncounterDate !== undefined) {
                question.showHistoricalEncounterDate((schemaQuestion.showHistoricalEncounterDate === 'true'));
            }
            else {
                question.showHistoricalEncounterDate();
            }
            /** @type {?} */
            const origValue = this.historicalHelperService.evaluate(schemaQuestion.historicalExpression, this.dataSources, undefined);
            question.historicalDataValue = origValue;
            // console.info('historical value', origValue);
            // console.info('historical data question :::', question);
            // console.info('schema data question :::', schemaQuestion);
            if (schemaQuestion.historicalPrepopulateCondition && origValue) {
                /** @type {?} */
                const toPopulate = this.historicalHelperService.evaluatePrecondition(schemaQuestion.historicalPrepopulateCondition, this.dataSources, origValue);
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
                const valDate = moment(origValue.valueDate);
                /** @type {?} */
                const differenceInDays = moment().diff(valDate, 'days');
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
    }
    /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    addCalculatorProperty(schemaQuestion, question) {
        if (schemaQuestion.questionOptions &&
            typeof schemaQuestion.questionOptions.calculate === 'object') {
            question.calculateExpression = schemaQuestion.questionOptions.calculate.calculateExpression;
        }
    }
    /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    addAlertProperty(schemaQuestion, question) {
        if (schemaQuestion.alert) {
            question.alert = schemaQuestion.alert;
        }
        // if (typeof schemaQuestion.message === 'object') {
        //   if (schemaQuestion.message.alertWhenExpression) {
        //     question.message = schemaQuestion.message.alertWhenExpression;
        //   }
        // }
    }
    /**
     * @param {?} schemaQuestion
     * @param {?} question
     * @return {?}
     */
    addDisableOrHideProperty(schemaQuestion, question) {
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
    }
    /**
     * @private
     * @param {?} x
     * @return {?}
     */
    generateId(x) {
        /** @type {?} */
        let s = '_';
        while (s.length < x && x > 0) {
            /** @type {?} */
            const r = Math.random();
            s += (r < 0.1 ? Math.floor(r * 100) :
                String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
        }
        return '_' + s;
    }
}
if (false) {
    /** @type {?} */
    QuestionFactory.prototype.dataSources;
    /** @type {?} */
    QuestionFactory.prototype.historicalHelperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubXJzLWZvcm1lbnRyeS8iLCJzb3VyY2VzIjpbImZvcm0tZW50cnkvZm9ybS1mYWN0b3J5L3F1ZXN0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUU1QixNQUFNLEdBQUcsT0FBTztBQUV0QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxr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SCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBQ08sVUFBVSxDQUFDLENBQUM7O1lBQ2QsQ0FBQyxHQUFHLEdBQUc7UUFDWCxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzs7a0JBQ3ZCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztDQUNGOzs7SUExMkJDLHNDQUFzQjs7SUFDdEIsa0RBQWlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuaW1wb3J0IHsgVGV4dElucHV0UXVlc3Rpb24gfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvdGV4dC1pbnB1dC1xdWVzdGlvbic7XHJcbmltcG9ydCB7IFRleHRBcmVhSW5wdXRRdWVzdGlvbiB9IGZyb20gJy4uL3F1ZXN0aW9uLW1vZGVscy90ZXh0LWFyZWEtaW5wdXQtcXVlc3Rpb24nO1xyXG5pbXBvcnQgeyBTZWxlY3RRdWVzdGlvbiB9IGZyb20gJy4uL3F1ZXN0aW9uLW1vZGVscy9zZWxlY3QtcXVlc3Rpb24nO1xyXG5pbXBvcnQgeyBVaVNlbGVjdFF1ZXN0aW9uIH0gZnJvbSAnLi4vcXVlc3Rpb24tbW9kZWxzL3VpLXNlbGVjdC1xdWVzdGlvbic7XHJcbmltcG9ydCB7IERhdGVRdWVzdGlvbiB9IGZyb20gJy4uL3F1ZXN0aW9uLW1vZGVscy9kYXRlLXF1ZXN0aW9uJztcclxuaW1wb3J0IHsgTXVsdGlTZWxlY3RRdWVzdGlvbiB9IGZyb20gJy4uL3F1ZXN0aW9uLW1vZGVscy9tdWx0aS1zZWxlY3QtcXVlc3Rpb24nO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkdyb3VwIH0gZnJvbSAnLi4vcXVlc3Rpb24tbW9kZWxzL2dyb3VwLXF1ZXN0aW9uJztcclxuaW1wb3J0IHsgUmVwZWF0aW5nUXVlc3Rpb24gfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvcmVwZWF0aW5nLXF1ZXN0aW9uJztcclxuaW1wb3J0IHsgUXVlc3Rpb25CYXNlIH0gZnJvbSAnLi4vcXVlc3Rpb24tbW9kZWxzL3F1ZXN0aW9uLWJhc2UnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkUXVlc3Rpb24gfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvZmlsZS11cGxvYWQtcXVlc3Rpb24nO1xyXG5pbXBvcnQgeyBUZXN0T3JkZXJRdWVzdGlvbiB9IGZyb20gJy4uL3F1ZXN0aW9uLW1vZGVscy90ZXN0LW9yZGVyLXF1ZXN0aW9uJztcclxuaW1wb3J0IHsgQWZlQ29udHJvbFR5cGUgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC1jb250cm9scy1leHRlbnNpb24vYWZlLWNvbnRyb2wtdHlwZSc7XHJcblxyXG5pbXBvcnQgeyBWYWxpZGF0aW9uTW9kZWwgfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvdmFsaWRhdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IERhdGVWYWxpZGF0aW9uTW9kZWwgfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvZGF0ZS12YWxpZGF0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgTWF4VmFsaWRhdGlvbk1vZGVsIH0gZnJvbSAnLi4vcXVlc3Rpb24tbW9kZWxzL21heC12YWxpZGF0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgTWluVmFsaWRhdGlvbk1vZGVsIH0gZnJvbSAnLi4vcXVlc3Rpb24tbW9kZWxzL21pbi12YWxpZGF0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgSnNFeHByZXNzaW9uVmFsaWRhdGlvbk1vZGVsIH0gZnJvbSAnLi4vcXVlc3Rpb24tbW9kZWxzL2pzLWV4cHJlc3Npb24tdmFsaWRhdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IENvbmRpdGlvbmFsVmFsaWRhdGlvbk1vZGVsIH0gZnJvbSAnLi4vcXVlc3Rpb24tbW9kZWxzL2NvbmRpdGlvbmFsLXZhbGlkYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBEdW1teURhdGFTb3VyY2UgfSBmcm9tICcuLi9kYXRhLXNvdXJjZXMvZHVtbXktZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgeyBIaXN0b3JpY2FsSGVscGVyU2VydmljZSB9IGZyb20gJy4uL2hlbHBlcnMvaGlzdG9yaWNhbC1leHByZXNzaW9uLWhlbHBlci1zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4vZm9ybSc7XHJcbmltcG9ydCB7IENoZWNrQm94UXVlc3Rpb24gfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkZhY3Rvcnkge1xyXG4gIGRhdGFTb3VyY2VzOiBhbnkgPSB7fTtcclxuICBoaXN0b3JpY2FsSGVscGVyU2VydmljZTogSGlzdG9yaWNhbEhlbHBlclNlcnZpY2UgPSBuZXcgSGlzdG9yaWNhbEhlbHBlclNlcnZpY2UoKTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVF1ZXN0aW9uTW9kZWwoZm9ybVNjaGVtYTogYW55LCBmb3JtPzogRm9ybSk6IFF1ZXN0aW9uQmFzZSB7XHJcbiAgICBpZiAoZm9ybSkge1xyXG4gICAgICBjb25zdCBkYXRhU291cmNlcyA9IGZvcm0uZGF0YVNvdXJjZXNDb250YWluZXIuZGF0YVNvdXJjZXM7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZXMgPSBkYXRhU291cmNlcztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRvRm9ybVF1ZXN0aW9uTW9kZWwoZm9ybVNjaGVtYSk7XHJcbiAgfVxyXG5cclxuICB0b1NlbGVjdFF1ZXN0aW9uKHNjaGVtYVF1ZXN0aW9uOiBhbnkpOiBTZWxlY3RRdWVzdGlvbiB7XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IG5ldyBTZWxlY3RRdWVzdGlvbih7IG9wdGlvbnM6IFtdLCB0eXBlOiAnJywga2V5OiAnJyB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5rZXkgPSBzY2hlbWFRdWVzdGlvbi5pZDtcclxuICAgIHF1ZXN0aW9uLm9wdGlvbnMgPSBzY2hlbWFRdWVzdGlvbi5xdWVzdGlvbk9wdGlvbnMuYW5zd2Vycy5tYXAoZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhYmVsOiBvYmoubGFiZWwsXHJcbiAgICAgICAgdmFsdWU6IG9iai5jb25jZXB0XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSBxdWVzdGlvbi5vcHRpb25zO1xyXG4gICAgb3B0aW9ucy5zcGxpY2UoMCwgMCwge1xyXG4gICAgICBsYWJlbDogJycsXHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgcXVlc3Rpb24ucmVuZGVyaW5nVHlwZSA9IHNjaGVtYVF1ZXN0aW9uLnF1ZXN0aW9uT3B0aW9ucy5yZW5kZXJpbmc7XHJcbiAgICBxdWVzdGlvbi52YWxpZGF0b3JzID0gdGhpcy5hZGRWYWxpZGF0b3JzKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG5cclxuICAgIGNvbnN0IG1hcHBpbmdzOiBhbnkgPSB7XHJcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgICAgaWQ6ICdrZXknXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29weVByb3BlcnRpZXMobWFwcGluZ3MsIHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZERpc2FibGVPckhpZGVQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRBbGVydFByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEhpc3RvcmljYWxFeHByZXNzaW9ucyhzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRDYWxjdWxhdG9yUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIHRvTnVtZXJpY1F1ZXN0aW9uKHNjaGVtYVF1ZXN0aW9uOiBhbnkpOiBUZXh0SW5wdXRRdWVzdGlvbiB7XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IG5ldyBUZXh0SW5wdXRRdWVzdGlvbih7IHBsYWNlaG9sZGVyOiAnJywgdHlwZTogJycsIGtleTogJycgfSk7XHJcbiAgICBxdWVzdGlvbi5sYWJlbCA9IHNjaGVtYVF1ZXN0aW9uLmxhYmVsO1xyXG4gICAgcXVlc3Rpb24ua2V5ID0gc2NoZW1hUXVlc3Rpb24uaWQ7XHJcbiAgICBxdWVzdGlvbi5yZW5kZXJpbmdUeXBlID0gJ251bWJlcic7XHJcbiAgICBxdWVzdGlvbi5wbGFjZWhvbGRlciA9IHNjaGVtYVF1ZXN0aW9uLnF1ZXN0aW9uT3B0aW9ucy5wbGFjZWhvbGRlcjtcclxuICAgIHF1ZXN0aW9uLnZhbGlkYXRvcnMgPSB0aGlzLmFkZFZhbGlkYXRvcnMoc2NoZW1hUXVlc3Rpb24pO1xyXG4gICAgcXVlc3Rpb24uZXh0cmFzID0gc2NoZW1hUXVlc3Rpb247XHJcbiAgICBxdWVzdGlvbi5wbGFjZWhvbGRlciA9IHNjaGVtYVF1ZXN0aW9uLnF1ZXN0aW9uT3B0aW9ucy5wbGFjZWhvbGRlciB8fCAnJztcclxuICAgIGNvbnN0IG1hcHBpbmdzOiBhbnkgPSB7XHJcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgICAgaWQ6ICdrZXknXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29weVByb3BlcnRpZXMobWFwcGluZ3MsIHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZERpc2FibGVPckhpZGVQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRBbGVydFByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEhpc3RvcmljYWxFeHByZXNzaW9ucyhzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRDYWxjdWxhdG9yUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIHRvTnVtYmVyUXVlc3Rpb24oc2NoZW1hUXVlc3Rpb246IGFueSk6IFRleHRJbnB1dFF1ZXN0aW9uIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gbmV3IFRleHRJbnB1dFF1ZXN0aW9uKHsgcGxhY2Vob2xkZXI6ICcnLCB0eXBlOiAnJywga2V5OiAnJyB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5rZXkgPSBzY2hlbWFRdWVzdGlvbi5pZDtcclxuICAgIHF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPSAnbnVtYmVyJztcclxuICAgIHF1ZXN0aW9uLnBsYWNlaG9sZGVyID0gc2NoZW1hUXVlc3Rpb24ucXVlc3Rpb25PcHRpb25zLnBsYWNlaG9sZGVyIHx8ICcnO1xyXG4gICAgcXVlc3Rpb24uZXh0cmFzID0gc2NoZW1hUXVlc3Rpb247XHJcblxyXG4gICAgY29uc3QgbWFwcGluZ3M6IGFueSA9IHtcclxuICAgICAgbGFiZWw6ICdsYWJlbCcsXHJcbiAgICAgIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxyXG4gICAgICBpZDogJ2tleSdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jb3B5UHJvcGVydGllcyhtYXBwaW5ncywgc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLnZhbGlkYXRvcnMgPSB0aGlzLmFkZFZhbGlkYXRvcnMoc2NoZW1hUXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGREaXNhYmxlT3JIaWRlUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkQWxlcnRQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRIaXN0b3JpY2FsRXhwcmVzc2lvbnMoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkQ2FsY3VsYXRvclByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICB0b0RhdGVRdWVzdGlvbihzY2hlbWFRdWVzdGlvbjogYW55KTogRGF0ZVF1ZXN0aW9uIHtcclxuICAgIGlmIChzY2hlbWFRdWVzdGlvbi50eXBlID09PSAnZW5jb3VudGVyRGF0ZXRpbWUnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvRW5jb3VudGVyRGF0ZXRpbWVRdWVzdGlvbihzY2hlbWFRdWVzdGlvbik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IG5ldyBEYXRlUXVlc3Rpb24oeyB0eXBlOiAnJywga2V5OiAnJyB9KTtcclxuICAgIHF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPSAnZGF0ZSc7XHJcbiAgICBxdWVzdGlvbi52YWxpZGF0b3JzID0gdGhpcy5hZGRWYWxpZGF0b3JzKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG4gICAgcXVlc3Rpb24uc2hvd1RpbWUgPSBzY2hlbWFRdWVzdGlvbi5xdWVzdGlvbk9wdGlvbnMuc2hvd1RpbWUgYXMgYm9vbGVhbjtcclxuICAgIHF1ZXN0aW9uLnNob3dXZWVrc0FkZGVyID0gc2NoZW1hUXVlc3Rpb24ucXVlc3Rpb25PcHRpb25zLndlZWtzTGlzdCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBtYXBwaW5nczogYW55ID0ge1xyXG4gICAgICBsYWJlbDogJ2xhYmVsJyxcclxuICAgICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGlkOiAna2V5J1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGhpcy5jb3B5UHJvcGVydGllcyhtYXBwaW5ncywgc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkRGlzYWJsZU9ySGlkZVByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEFsZXJ0UHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkSGlzdG9yaWNhbEV4cHJlc3Npb25zKHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZENhbGN1bGF0b3JQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgdG9FbmNvdW50ZXJEYXRldGltZVF1ZXN0aW9uKHNjaGVtYVF1ZXN0aW9uOiBhbnkpOiBEYXRlUXVlc3Rpb24ge1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBuZXcgRGF0ZVF1ZXN0aW9uKHsgdHlwZTogJycsIGtleTogJycgfSk7XHJcbiAgICBxdWVzdGlvbi5sYWJlbCA9IHNjaGVtYVF1ZXN0aW9uLmxhYmVsO1xyXG4gICAgcXVlc3Rpb24ucmVuZGVyaW5nVHlwZSA9ICdkYXRlJztcclxuICAgIHF1ZXN0aW9uLmtleSA9IHNjaGVtYVF1ZXN0aW9uLmlkO1xyXG4gICAgcXVlc3Rpb24udmFsaWRhdG9ycyA9IHRoaXMuYWRkVmFsaWRhdG9ycyhzY2hlbWFRdWVzdGlvbik7XHJcbiAgICBxdWVzdGlvbi5leHRyYXMgPSBzY2hlbWFRdWVzdGlvbjtcclxuICAgIHF1ZXN0aW9uLnNob3dXZWVrc0FkZGVyID0gc2NoZW1hUXVlc3Rpb24ucXVlc3Rpb25PcHRpb25zLndlZWtzTGlzdCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBtYXBwaW5nczogYW55ID0ge1xyXG4gICAgICBsYWJlbDogJ2xhYmVsJyxcclxuICAgICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGlkOiAna2V5J1xyXG4gICAgfTtcclxuICAgIHF1ZXN0aW9uLnNob3dUaW1lID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmNvcHlQcm9wZXJ0aWVzKG1hcHBpbmdzLCBzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGREaXNhYmxlT3JIaWRlUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkQWxlcnRQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRIaXN0b3JpY2FsRXhwcmVzc2lvbnMoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkQ2FsY3VsYXRvclByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICB0b0NoZWNrQm94UXVlc3Rpb24oc2NoZW1hUXVlc3Rpb246IGFueSk6IENoZWNrQm94UXVlc3Rpb24ge1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBuZXcgQ2hlY2tCb3hRdWVzdGlvbih7IG9wdGlvbnM6IFtdLCB0eXBlOiAnJywga2V5OiAnJyB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5rZXkgPSBzY2hlbWFRdWVzdGlvbi5pZDtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG4gICAgcXVlc3Rpb24ub3B0aW9ucyA9IHNjaGVtYVF1ZXN0aW9uLnF1ZXN0aW9uT3B0aW9ucy5hbnN3ZXJzLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWw6IG9iai5sYWJlbCxcclxuICAgICAgICB2YWx1ZTogb2JqLmNvbmNlcHRcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcXVlc3Rpb24ub3B0aW9ucy5zcGxpY2UoMCwgMCk7XHJcblxyXG4gICAgcXVlc3Rpb24ucmVuZGVyaW5nVHlwZSA9IHNjaGVtYVF1ZXN0aW9uLnF1ZXN0aW9uT3B0aW9ucy5yZW5kZXJpbmc7XHJcbiAgICBjb25zdCBtYXBwaW5nczogYW55ID0ge1xyXG4gICAgICBsYWJlbDogJ2xhYmVsJyxcclxuICAgICAgaWQ6ICdrZXknXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29weVByb3BlcnRpZXMobWFwcGluZ3MsIHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZERpc2FibGVPckhpZGVQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRBbGVydFByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEhpc3RvcmljYWxFeHByZXNzaW9ucyhzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRDYWxjdWxhdG9yUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuXHJcbiAgfVxyXG5cclxuICB0b011bHRpQ2hlY2tib3hRdWVzdGlvbihzY2hlbWFRdWVzdGlvbjogYW55KTogTXVsdGlTZWxlY3RRdWVzdGlvbiB7XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IG5ldyBNdWx0aVNlbGVjdFF1ZXN0aW9uKHsgcmVuZGVyVHlwZTogJycsIG9wdGlvbnM6IFtdLCB0eXBlOiAnJywga2V5OiAnJyB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5rZXkgPSBzY2hlbWFRdWVzdGlvbi5pZDtcclxuICAgIHF1ZXN0aW9uLm9wdGlvbnMgPSBzY2hlbWFRdWVzdGlvbi5xdWVzdGlvbk9wdGlvbnMuYW5zd2Vycy5tYXAoZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhYmVsOiBvYmoubGFiZWwsXHJcbiAgICAgICAgdmFsdWU6IG9iai5jb25jZXB0XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHF1ZXN0aW9uLnZhbGlkYXRvcnMgPSB0aGlzLmFkZFZhbGlkYXRvcnMoc2NoZW1hUXVlc3Rpb24pO1xyXG4gICAgcXVlc3Rpb24uZGF0YVNvdXJjZSA9IG5ldyBEdW1teURhdGFTb3VyY2UoKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG5cclxuICAgIGNvbnN0IG1hcHBpbmdzOiBhbnkgPSB7XHJcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgICAgaWQ6ICdrZXknXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29weVByb3BlcnRpZXMobWFwcGluZ3MsIHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZERpc2FibGVPckhpZGVQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRBbGVydFByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEhpc3RvcmljYWxFeHByZXNzaW9ucyhzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRDYWxjdWxhdG9yUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIHRvVGV4dEFyZWFRdWVzdGlvbihzY2hlbWFRdWVzdGlvbjogYW55KTogVGV4dEFyZWFJbnB1dFF1ZXN0aW9uIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gbmV3IFRleHRBcmVhSW5wdXRRdWVzdGlvbih7XHJcbiAgICAgIGlzRXhwYW5kZWQ6IGZhbHNlLCByb3dzOiAxOCxcclxuICAgICAgcGxhY2Vob2xkZXI6ICcnLCB0eXBlOiAnJywga2V5OiAnJ1xyXG4gICAgfSk7XHJcbiAgICBxdWVzdGlvbi5sYWJlbCA9IHNjaGVtYVF1ZXN0aW9uLmxhYmVsO1xyXG4gICAgcXVlc3Rpb24ua2V5ID0gc2NoZW1hUXVlc3Rpb24uaWQ7XHJcbiAgICBxdWVzdGlvbi5wbGFjZWhvbGRlciA9IHNjaGVtYVF1ZXN0aW9uLnF1ZXN0aW9uT3B0aW9ucy5wbGFjZWhvbGRlcjtcclxuICAgIHF1ZXN0aW9uLmlzRXhwYW5kZWQgPSBzY2hlbWFRdWVzdGlvbi5pc0V4cGFuZGVkO1xyXG4gICAgcXVlc3Rpb24ucm93cyA9IHNjaGVtYVF1ZXN0aW9uLnF1ZXN0aW9uT3B0aW9ucy5yb3dzO1xyXG4gICAgcXVlc3Rpb24udmFsaWRhdG9ycyA9IHRoaXMuYWRkVmFsaWRhdG9ycyhzY2hlbWFRdWVzdGlvbik7XHJcbiAgICBxdWVzdGlvbi5leHRyYXMgPSBzY2hlbWFRdWVzdGlvbjtcclxuICAgIHF1ZXN0aW9uLnBsYWNlaG9sZGVyID0gc2NoZW1hUXVlc3Rpb24ucXVlc3Rpb25PcHRpb25zLnBsYWNlaG9sZGVyIHx8ICcnO1xyXG5cclxuICAgIGNvbnN0IG1hcHBpbmdzOiBhbnkgPSB7XHJcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgICAgaWQ6ICdrZXknXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29weVByb3BlcnRpZXMobWFwcGluZ3MsIHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZERpc2FibGVPckhpZGVQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRBbGVydFByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEhpc3RvcmljYWxFeHByZXNzaW9ucyhzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRDYWxjdWxhdG9yUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIHRvVGV4dFF1ZXN0aW9uKHNjaGVtYVF1ZXN0aW9uOiBhbnkpOiBUZXh0SW5wdXRRdWVzdGlvbiB7XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IG5ldyBUZXh0SW5wdXRRdWVzdGlvbih7IHBsYWNlaG9sZGVyOiAnJywgdHlwZTogJycsIGtleTogJycgfSk7XHJcbiAgICBxdWVzdGlvbi5sYWJlbCA9IHNjaGVtYVF1ZXN0aW9uLmxhYmVsO1xyXG4gICAgcXVlc3Rpb24ua2V5ID0gc2NoZW1hUXVlc3Rpb24uaWQ7XHJcbiAgICBxdWVzdGlvbi5yZW5kZXJpbmdUeXBlID0gJ3RleHQnO1xyXG4gICAgcXVlc3Rpb24ucGxhY2Vob2xkZXIgPSBzY2hlbWFRdWVzdGlvbi5xdWVzdGlvbk9wdGlvbnMucGxhY2Vob2xkZXI7XHJcbiAgICBxdWVzdGlvbi52YWxpZGF0b3JzID0gdGhpcy5hZGRWYWxpZGF0b3JzKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG4gICAgcXVlc3Rpb24ucGxhY2Vob2xkZXIgPSBzY2hlbWFRdWVzdGlvbi5xdWVzdGlvbk9wdGlvbnMucGxhY2Vob2xkZXIgfHwgJyc7XHJcbiAgICBjb25zdCBtYXBwaW5nczogYW55ID0ge1xyXG4gICAgICBsYWJlbDogJ2xhYmVsJyxcclxuICAgICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGlkOiAna2V5J1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNvcHlQcm9wZXJ0aWVzKG1hcHBpbmdzLCBzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGREaXNhYmxlT3JIaWRlUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkQWxlcnRQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRIaXN0b3JpY2FsRXhwcmVzc2lvbnMoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkQ2FsY3VsYXRvclByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICB0b0ZpbGVVcGxvYWRRdWVzdGlvbihzY2hlbWFRdWVzdGlvbjogYW55KTogRmlsZVVwbG9hZFF1ZXN0aW9uIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gbmV3IEZpbGVVcGxvYWRRdWVzdGlvbih7IHR5cGU6ICcnLCBrZXk6ICcnIH0pO1xyXG4gICAgcXVlc3Rpb24ubGFiZWwgPSBzY2hlbWFRdWVzdGlvbi5sYWJlbDtcclxuICAgIHF1ZXN0aW9uLmtleSA9IHNjaGVtYVF1ZXN0aW9uLmlkO1xyXG4gICAgcXVlc3Rpb24ucmVuZGVyaW5nVHlwZSA9ICdmaWxlJztcclxuICAgIHF1ZXN0aW9uLmRhdGFTb3VyY2UgPSAnZmlsZSc7XHJcbiAgICBxdWVzdGlvbi52YWxpZGF0b3JzID0gdGhpcy5hZGRWYWxpZGF0b3JzKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG5cclxuICAgIGNvbnN0IG1hcHBpbmdzOiBhbnkgPSB7XHJcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgICAgaWQ6ICdrZXknXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29weVByb3BlcnRpZXMobWFwcGluZ3MsIHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZERpc2FibGVPckhpZGVQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRBbGVydFByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEhpc3RvcmljYWxFeHByZXNzaW9ucyhzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRDYWxjdWxhdG9yUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIHRvRHJ1Z1F1ZXN0aW9uKHNjaGVtYVF1ZXN0aW9uOiBhbnkpOiBTZWxlY3RRdWVzdGlvbiB7XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IG5ldyBTZWxlY3RRdWVzdGlvbih7IG9wdGlvbnM6IFtdLCB0eXBlOiAnJywga2V5OiAnJyB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5rZXkgPSBzY2hlbWFRdWVzdGlvbi5pZDtcclxuICAgIHF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPSAncmVtb3RlLXNlbGVjdCc7XHJcbiAgICBxdWVzdGlvbi52YWxpZGF0b3JzID0gdGhpcy5hZGRWYWxpZGF0b3JzKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG4gICAgcXVlc3Rpb24uZGF0YVNvdXJjZSA9ICdkcnVnJztcclxuICAgIGNvbnN0IG1hcHBpbmdzOiBhbnkgPSB7XHJcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgICAgaWQ6ICdrZXknXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29weVByb3BlcnRpZXMobWFwcGluZ3MsIHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZERpc2FibGVPckhpZGVQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRBbGVydFByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEhpc3RvcmljYWxFeHByZXNzaW9ucyhzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRDYWxjdWxhdG9yUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIHRvUHJvYmxlbVF1ZXN0aW9uKHNjaGVtYVF1ZXN0aW9uOiBhbnkpOiBTZWxlY3RRdWVzdGlvbiB7XHJcbiAgICBjb25zdCBxdWVzdGlvbiA9IG5ldyBTZWxlY3RRdWVzdGlvbih7IG9wdGlvbnM6IFtdLCB0eXBlOiAnJywga2V5OiAnJyB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5rZXkgPSBzY2hlbWFRdWVzdGlvbi5pZDtcclxuICAgIHF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPSAncmVtb3RlLXNlbGVjdCc7XHJcbiAgICBxdWVzdGlvbi52YWxpZGF0b3JzID0gdGhpcy5hZGRWYWxpZGF0b3JzKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG4gICAgcXVlc3Rpb24uZGF0YVNvdXJjZSA9ICdwcm9ibGVtJztcclxuICAgIGNvbnN0IG1hcHBpbmdzOiBhbnkgPSB7XHJcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgICAgaWQ6ICdrZXknXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29weVByb3BlcnRpZXMobWFwcGluZ3MsIHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZERpc2FibGVPckhpZGVQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRBbGVydFByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEhpc3RvcmljYWxFeHByZXNzaW9ucyhzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRDYWxjdWxhdG9yUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIHRvQ29uY2VwdEFuc3dlclNlbGVjdChzY2hlbWFRdWVzdGlvbjogYW55KTogU2VsZWN0UXVlc3Rpb24ge1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBuZXcgU2VsZWN0UXVlc3Rpb24oeyBvcHRpb25zOiBbXSwgdHlwZTogJycsIGtleTogJycgfSk7XHJcbiAgICBxdWVzdGlvbi5sYWJlbCA9IHNjaGVtYVF1ZXN0aW9uLmxhYmVsO1xyXG4gICAgcXVlc3Rpb24ua2V5ID0gc2NoZW1hUXVlc3Rpb24uaWQ7XHJcbiAgICBxdWVzdGlvbi5yZW5kZXJpbmdUeXBlID0gJ3JlbW90ZS1zZWxlY3QnO1xyXG4gICAgcXVlc3Rpb24udmFsaWRhdG9ycyA9IHRoaXMuYWRkVmFsaWRhdG9ycyhzY2hlbWFRdWVzdGlvbik7XHJcbiAgICBxdWVzdGlvbi5leHRyYXMgPSBzY2hlbWFRdWVzdGlvbjtcclxuICAgIHF1ZXN0aW9uLmRhdGFTb3VyY2UgPSBzY2hlbWFRdWVzdGlvbi5xdWVzdGlvbk9wdGlvbnMuZGF0YVNvdXJjZSB8fCAnY29uY2VwdEFuc3dlcnMnO1xyXG4gICAgcXVlc3Rpb24uZGF0YVNvdXJjZU9wdGlvbnMgPSB7XHJcbiAgICAgIGNvbmNlcHQ6IHNjaGVtYVF1ZXN0aW9uLnF1ZXN0aW9uT3B0aW9ucy5jb25jZXB0XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbWFwcGluZ3M6IGFueSA9IHtcclxuICAgICAgbGFiZWw6ICdsYWJlbCcsXHJcbiAgICAgIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxyXG4gICAgICBpZDogJ2tleSdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jb3B5UHJvcGVydGllcyhtYXBwaW5ncywgc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkRGlzYWJsZU9ySGlkZVByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEFsZXJ0UHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkSGlzdG9yaWNhbEV4cHJlc3Npb25zKHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZENhbGN1bGF0b3JQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgdG9SZXBlYXRpbmdRdWVzdGlvbihzY2hlbWFRdWVzdGlvbjogYW55KTogUmVwZWF0aW5nUXVlc3Rpb24ge1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBuZXcgUmVwZWF0aW5nUXVlc3Rpb24oeyBxdWVzdGlvbnM6IFtdLCB0eXBlOiAnJywga2V5OiAnJyB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5xdWVzdGlvbnMgPSB0aGlzLmdldENoaWxkcmVuUXVlc3Rpb25Nb2RlbHMoc2NoZW1hUXVlc3Rpb24ucXVlc3Rpb25zKTtcclxuICAgIHF1ZXN0aW9uLmtleSA9IHNjaGVtYVF1ZXN0aW9uLmlkO1xyXG4gICAgcXVlc3Rpb24udmFsaWRhdG9ycyA9IHRoaXMuYWRkVmFsaWRhdG9ycyhzY2hlbWFRdWVzdGlvbik7XHJcbiAgICBxdWVzdGlvbi5leHRyYXMgPSBzY2hlbWFRdWVzdGlvbjtcclxuXHJcbiAgICBpZiAoc2NoZW1hUXVlc3Rpb24udHlwZSA9PT0gJ3Rlc3RPcmRlcicpIHtcclxuICAgICAgY29uc3QgdGVzdE9yZGVyID0gdGhpcy50b1Rlc3RPcmRlclF1ZXN0aW9uKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgICAgY29uc3Qgb3JkZXJzID0gW107IG9yZGVycy5wdXNoKHRlc3RPcmRlcik7XHJcbiAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9ucyA9IG9yZGVycztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXBwaW5nczogYW55ID0ge1xyXG4gICAgICBsYWJlbDogJ2xhYmVsJyxcclxuICAgICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGlkOiAna2V5J1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNvcHlQcm9wZXJ0aWVzKG1hcHBpbmdzLCBzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGREaXNhYmxlT3JIaWRlUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkQWxlcnRQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRIaXN0b3JpY2FsRXhwcmVzc2lvbnMoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkQ2FsY3VsYXRvclByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICB0b0dyb3VwUXVlc3Rpb24oc2NoZW1hUXVlc3Rpb246IGFueSk6IFF1ZXN0aW9uR3JvdXAge1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBuZXcgUXVlc3Rpb25Hcm91cCh7IHF1ZXN0aW9uczogW10sIHR5cGU6ICcnLCBrZXk6ICcnIH0pO1xyXG4gICAgcXVlc3Rpb24ubGFiZWwgPSBzY2hlbWFRdWVzdGlvbi5sYWJlbDtcclxuICAgIHF1ZXN0aW9uLnF1ZXN0aW9ucyA9IHRoaXMuZ2V0Q2hpbGRyZW5RdWVzdGlvbk1vZGVscyhzY2hlbWFRdWVzdGlvbi5xdWVzdGlvbnMpO1xyXG4gICAgcXVlc3Rpb24ua2V5ID0gc2NoZW1hUXVlc3Rpb24uaWQ7XHJcbiAgICBxdWVzdGlvbi52YWxpZGF0b3JzID0gdGhpcy5hZGRWYWxpZGF0b3JzKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG5cclxuICAgIGNvbnN0IG1hcHBpbmdzOiBhbnkgPSB7XHJcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgICAgaWQ6ICdrZXknXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29weVByb3BlcnRpZXMobWFwcGluZ3MsIHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZERpc2FibGVPckhpZGVQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRBbGVydFByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEhpc3RvcmljYWxFeHByZXNzaW9ucyhzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRDYWxjdWxhdG9yUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIHRvUGFnZVF1ZXN0aW9uKHNjaGVtYVF1ZXN0aW9uOiBhbnkpOiBRdWVzdGlvbkdyb3VwIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gbmV3IFF1ZXN0aW9uR3JvdXAoeyBxdWVzdGlvbnM6IFtdLCB0eXBlOiAnJywga2V5OiAnJyB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5rZXkgPSBzY2hlbWFRdWVzdGlvbi5sYWJlbDtcclxuICAgIHF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPSAncGFnZSc7XHJcbiAgICBxdWVzdGlvbi5jb250cm9sVHlwZSA9IEFmZUNvbnRyb2xUeXBlLk5vbmU7XHJcbiAgICBxdWVzdGlvbi5xdWVzdGlvbnMgPSBbXTtcclxuICAgIHNjaGVtYVF1ZXN0aW9uLnNlY3Rpb25zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9ucy5wdXNoKHRoaXMudG9TZWN0aW9uUXVlc3Rpb24oZWxlbWVudCkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICB0b0Zvcm1RdWVzdGlvbk1vZGVsKHNjaGVtYVF1ZXN0aW9uOiBhbnkpOiBRdWVzdGlvbkdyb3VwIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gbmV3IFF1ZXN0aW9uR3JvdXAoeyBxdWVzdGlvbnM6IFtdLCB0eXBlOiAnJywga2V5OiAnJyB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5rZXkgPSBzY2hlbWFRdWVzdGlvbi5sYWJlbDtcclxuICAgIHF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPSAnZm9ybSc7XHJcbiAgICBxdWVzdGlvbi5jb250cm9sVHlwZSA9IEFmZUNvbnRyb2xUeXBlLkFmZUZvcm1Hcm91cDtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG4gICAgcXVlc3Rpb24ucXVlc3Rpb25zID0gW107XHJcbiAgICBzY2hlbWFRdWVzdGlvbi5wYWdlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBxdWVzdGlvbi5xdWVzdGlvbnMucHVzaCh0aGlzLnRvUGFnZVF1ZXN0aW9uKGVsZW1lbnQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIHRvU2VjdGlvblF1ZXN0aW9uKHNjaGVtYVF1ZXN0aW9uOiBhbnkpOiBRdWVzdGlvbkdyb3VwIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gbmV3IFF1ZXN0aW9uR3JvdXAoeyBxdWVzdGlvbnM6IFtdLCB0eXBlOiAnJywga2V5OiAnJyB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5rZXkgPSBzY2hlbWFRdWVzdGlvbi5sYWJlbDtcclxuICAgIHF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPSAnc2VjdGlvbic7XHJcbiAgICBxdWVzdGlvbi5jb250cm9sVHlwZSA9IEFmZUNvbnRyb2xUeXBlLk5vbmU7XHJcbiAgICBxdWVzdGlvbi5pc0V4cGFuZGVkID0gc2NoZW1hUXVlc3Rpb24uaXNFeHBhbmRlZCA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcXVlc3Rpb24ucXVlc3Rpb25zID0gdGhpcy5nZXRTY2hlbWFRdWVzdGlvbnMoc2NoZW1hUXVlc3Rpb24ucXVlc3Rpb25zKTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIHRvUGVyc29uQXR0cmlidXRlUXVlc3Rpb24oc2NoZW1hUXVlc3Rpb246IGFueSk6IFVpU2VsZWN0UXVlc3Rpb24ge1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBuZXcgVWlTZWxlY3RRdWVzdGlvbih7XHJcbiAgICAgIG9wdGlvbnM6IFtdLCB0eXBlOiAnJywga2V5OiAnJywgc2VhcmNoRnVuY3Rpb246IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgcmVzb2x2ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5rZXkgPSBzY2hlbWFRdWVzdGlvbi5pZDtcclxuICAgIHF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPSAncmVtb3RlLXNlbGVjdCc7XHJcbiAgICBxdWVzdGlvbi52YWxpZGF0b3JzID0gdGhpcy5hZGRWYWxpZGF0b3JzKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG4gICAgcXVlc3Rpb24uZGF0YVNvdXJjZSA9ICdwZXJzb25BdHRyaWJ1dGUnO1xyXG5cclxuICAgIGNvbnN0IG1hcHBpbmdzOiBhbnkgPSB7XHJcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgICAgaWQ6ICdrZXknXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29weVByb3BlcnRpZXMobWFwcGluZ3MsIHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEhpc3RvcmljYWxFeHByZXNzaW9ucyhzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGREaXNhYmxlT3JIaWRlUHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkQWxlcnRQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgdGhpcy5hZGRIaXN0b3JpY2FsRXhwcmVzc2lvbnMoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkQ2FsY3VsYXRvclByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICB0b0VuY291bnRlclByb3ZpZGVyUXVlc3Rpb24oc2NoZW1hUXVlc3Rpb246IGFueSk6IFVpU2VsZWN0UXVlc3Rpb24ge1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBuZXcgVWlTZWxlY3RRdWVzdGlvbih7XHJcbiAgICAgIG9wdGlvbnM6IFtdLCB0eXBlOiAnJywga2V5OiAnJywgc2VhcmNoRnVuY3Rpb246IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgcmVzb2x2ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHF1ZXN0aW9uLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBxdWVzdGlvbi5rZXkgPSBzY2hlbWFRdWVzdGlvbi5pZDtcclxuICAgIHF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPSAncmVtb3RlLXNlbGVjdCc7XHJcbiAgICBxdWVzdGlvbi52YWxpZGF0b3JzID0gdGhpcy5hZGRWYWxpZGF0b3JzKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG4gICAgcXVlc3Rpb24uZGF0YVNvdXJjZSA9ICdwcm92aWRlcic7XHJcblxyXG4gICAgY29uc3QgbWFwcGluZ3M6IGFueSA9IHtcclxuICAgICAgbGFiZWw6ICdsYWJlbCcsXHJcbiAgICAgIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxyXG4gICAgICBpZDogJ2tleSdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jb3B5UHJvcGVydGllcyhtYXBwaW5ncywgc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkRGlzYWJsZU9ySGlkZVByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEFsZXJ0UHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkSGlzdG9yaWNhbEV4cHJlc3Npb25zKHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZENhbGN1bGF0b3JQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgdG9GaWVsZFNldFF1ZXN0aW9uKHNjaGVtYVF1ZXN0aW9uOiBhbnkpOiBRdWVzdGlvbkdyb3VwIHtcclxuICAgIGNvbnN0IHRvUmV0dXJuID0gdGhpcy50b0dyb3VwUXVlc3Rpb24oc2NoZW1hUXVlc3Rpb24pO1xyXG4gICAgdG9SZXR1cm4ucmVuZGVyaW5nVHlwZSA9ICdmaWVsZC1zZXQnO1xyXG4gICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdG9FbmNvdW50ZXJMb2NhdGlvblF1ZXN0aW9uKHNjaGVtYVF1ZXN0aW9uOiBhbnkpOiBVaVNlbGVjdFF1ZXN0aW9uIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gbmV3IFVpU2VsZWN0UXVlc3Rpb24oe1xyXG4gICAgICBvcHRpb25zOiBbXSwgdHlwZTogJycsIGtleTogJycsIHNlYXJjaEZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICAgIHJlc29sdmVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBxdWVzdGlvbi5sYWJlbCA9IHNjaGVtYVF1ZXN0aW9uLmxhYmVsO1xyXG4gICAgcXVlc3Rpb24ua2V5ID0gc2NoZW1hUXVlc3Rpb24uaWQ7XHJcbiAgICBxdWVzdGlvbi5yZW5kZXJpbmdUeXBlID0gc2NoZW1hUXVlc3Rpb24udHlwZTtcclxuICAgIHF1ZXN0aW9uLnJlbmRlcmluZ1R5cGUgPSAncmVtb3RlLXNlbGVjdCc7XHJcbiAgICBxdWVzdGlvbi52YWxpZGF0b3JzID0gdGhpcy5hZGRWYWxpZGF0b3JzKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG4gICAgcXVlc3Rpb24uZGF0YVNvdXJjZSA9ICdsb2NhdGlvbic7XHJcblxyXG4gICAgY29uc3QgbWFwcGluZ3M6IGFueSA9IHtcclxuICAgICAgbGFiZWw6ICdsYWJlbCcsXHJcbiAgICAgIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxyXG4gICAgICBpZDogJ2tleSdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jb3B5UHJvcGVydGllcyhtYXBwaW5ncywgc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkRGlzYWJsZU9ySGlkZVByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZEFsZXJ0UHJvcGVydHkoc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHRoaXMuYWRkSGlzdG9yaWNhbEV4cHJlc3Npb25zKHNjaGVtYVF1ZXN0aW9uLCBxdWVzdGlvbik7XHJcbiAgICB0aGlzLmFkZENhbGN1bGF0b3JQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbiwgcXVlc3Rpb24pO1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgdG9UZXN0T3JkZXJRdWVzdGlvbihzY2hlbWFRdWVzdGlvbjogYW55KTogVGVzdE9yZGVyUXVlc3Rpb24ge1xyXG5cclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gbmV3IFRlc3RPcmRlclF1ZXN0aW9uKHtcclxuICAgICAgdHlwZTogJycsIGtleTogJycsIG9yZGVyVHlwZTogJycsIHNlbGVjdGFibGVPcmRlcnM6IFtdLFxyXG4gICAgICBvcmRlclNldHRpbmdVdWlkOiAnJywgbGFiZWw6ICcnLCByZW5kZXJpbmc6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBxdWVzdGlvbi5sYWJlbCA9IHNjaGVtYVF1ZXN0aW9uLmxhYmVsO1xyXG4gICAgcXVlc3Rpb24ua2V5ID0gc2NoZW1hUXVlc3Rpb24uaWQ7XHJcbiAgICBxdWVzdGlvbi52YWxpZGF0b3JzID0gdGhpcy5hZGRWYWxpZGF0b3JzKHNjaGVtYVF1ZXN0aW9uKTtcclxuICAgIHF1ZXN0aW9uLmV4dHJhcyA9IHNjaGVtYVF1ZXN0aW9uO1xyXG4gICAgcXVlc3Rpb24ub3B0aW9ucyA9IHNjaGVtYVF1ZXN0aW9uLnF1ZXN0aW9uT3B0aW9ucy5zZWxlY3RhYmxlT3JkZXJzLm1hcChmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWw6IG9iai5sYWJlbCxcclxuICAgICAgICB2YWx1ZTogb2JqLmNvbmNlcHRcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG1hcHBpbmdzOiBhbnkgPSB7XHJcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgICAgaWQ6ICdrZXknXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb3B5UHJvcGVydGllcyhtYXBwaW5ncywgc2NoZW1hUXVlc3Rpb24sIHF1ZXN0aW9uKTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIGdldFNjaGVtYVF1ZXN0aW9ucyhzY2hlbWE6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBsaXN0UXVlc3Rpb25zID0gbmV3IEFycmF5KCk7XHJcbiAgICB0aGlzLmdldFF1ZXN0aW9ucyhzY2hlbWEsIGxpc3RRdWVzdGlvbnMpO1xyXG4gICAgcmV0dXJuIGxpc3RRdWVzdGlvbnM7XHJcbiAgfVxyXG5cclxuICBnZXRRdWVzdGlvbnMoc2NoZW1hOiBhbnksIGZvdW5kQXJyYXk6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm91bmRBcnJheSkpIHtcclxuICAgICAgZm91bmRBcnJheSA9IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hKSkge1xyXG5cclxuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzY2hlbWEpIHtcclxuICAgICAgICBpZiAoc2NoZW1hLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoc2NoZW1hW3Byb3BlcnR5XSwgZm91bmRBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNjaGVtYSAmJiAhQXJyYXkuaXNBcnJheShzY2hlbWEpICYmIHR5cGVvZiBzY2hlbWEgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGlmIChzY2hlbWEucXVlc3Rpb25PcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHNjaGVtYS5xdWVzdGlvbk9wdGlvbnMucmVuZGVyaW5nID09PSAnZ3JvdXAnIHx8XHJcbiAgICAgICAgICBzY2hlbWEucXVlc3Rpb25PcHRpb25zLnJlbmRlcmluZyA9PT0gJ3JlcGVhdGluZycpIHtcclxuICAgICAgICAgIC8vIHNjaGVtYS5xdWVzdGlvbnMgPSB0aGlzLmdldEdyb3VwTWVtYmVycyhzY2hlbWEucXVlc3Rpb25zKTtcclxuICAgICAgICAgIGZvdW5kQXJyYXkucHVzaCh0aGlzLnRvTW9kZWwoc2NoZW1hLCBzY2hlbWEucXVlc3Rpb25PcHRpb25zLnJlbmRlcmluZykpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2NoZW1hLnF1ZXN0aW9uT3B0aW9ucy5yZW5kZXJpbmcgPT09ICdmaWVsZC1zZXQnKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvdW5kQXJyYXkucHVzaCh0aGlzLnRvTW9kZWwoc2NoZW1hLCBzY2hlbWEucXVlc3Rpb25PcHRpb25zLnJlbmRlcmluZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG8gaW4gc2NoZW1hKSB7XHJcbiAgICAgICAgICBpZiAoc2NoZW1hLmhhc093blByb3BlcnR5KG8pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKHNjaGVtYVtvXSwgZm91bmRBcnJheSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q2hpbGRyZW5RdWVzdGlvbk1vZGVscyhzY2hlbWE6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xyXG4gICAgdGhpcy5nZXRRdWVzdGlvbnMoc2NoZW1hLCBjaGlsZHJlbik7XHJcbiAgICByZXR1cm4gY2hpbGRyZW47XHJcblxyXG4gIH1cclxuXHJcbiAgdG9Nb2RlbChzY2hlbWE6IGFueSwgcmVuZGVyVHlwZTogc3RyaW5nKTogYW55IHtcclxuICAgIGlmIChyZW5kZXJUeXBlID09PSAndWktc2VsZWN0LWV4dGVuZGVkJykge1xyXG4gICAgICByZW5kZXJUeXBlID0gc2NoZW1hLnR5cGU7XHJcbiAgICB9XHJcbiAgICBpZiAoIXNjaGVtYS5pZCkge1xyXG4gICAgICBzY2hlbWFbJ2lkJ10gPSB0aGlzLmdlbmVyYXRlSWQoMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzY2hlbWEucXVlc3Rpb25PcHRpb25zICYmXHJcbiAgICAgIChzY2hlbWEucXVlc3Rpb25PcHRpb25zLnNob3dEYXRlID09PSB0cnVlIHx8XHJcbiAgICAgICAgc2NoZW1hLnF1ZXN0aW9uT3B0aW9ucy5zaG93RGF0ZSA9PT0gJ3RydWUnKSkge1xyXG4gICAgICBzY2hlbWEgPSB0aGlzLmNvbnZlcnRPbGRWZXJzaW9uQ29tcGxleE9ic1F1ZXN0aW9uVG9OZXdWZXJzaW9uKHNjaGVtYSk7XHJcbiAgICAgIHJlbmRlclR5cGUgPSAnZmllbGQtc2V0JztcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHJlbmRlclR5cGUpIHtcclxuICAgICAgY2FzZSAnc2VsZWN0JzpcclxuICAgICAgICByZXR1cm4gdGhpcy50b1NlbGVjdFF1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ3NpbmdsZS1zZWxlY3QnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvU2VsZWN0UXVlc3Rpb24oc2NoZW1hKTtcclxuICAgICAgY2FzZSAnbXVsdGktc2VsZWN0JzpcclxuICAgICAgICByZXR1cm4gdGhpcy50b1NlbGVjdFF1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ251bWVyaWMnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvTnVtZXJpY1F1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXJRdWVzdGlvbihzY2hlbWEpO1xyXG4gICAgICBjYXNlICdlbmNvdW50ZXJEYXRldGltZSc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9FbmNvdW50ZXJEYXRldGltZVF1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZVF1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ211bHRpQ2hlY2tib3gnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvTXVsdGlDaGVja2JveFF1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ2RydWcnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRHJ1Z1F1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ3Byb2JsZW0nOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvUHJvYmxlbVF1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ2dyb3VwJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50b0dyb3VwUXVlc3Rpb24oc2NoZW1hKTtcclxuICAgICAgY2FzZSAnZmllbGQtc2V0JzpcclxuICAgICAgICByZXR1cm4gdGhpcy50b0ZpZWxkU2V0UXVlc3Rpb24oc2NoZW1hKTtcclxuICAgICAgY2FzZSAncmVwZWF0aW5nJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50b1JlcGVhdGluZ1F1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ3BlcnNvbkF0dHJpYnV0ZSc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9QZXJzb25BdHRyaWJ1dGVRdWVzdGlvbihzY2hlbWEpO1xyXG4gICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICByZXR1cm4gdGhpcy50b1RleHRRdWVzdGlvbihzY2hlbWEpO1xyXG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9UZXh0QXJlYVF1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50b1RleHRBcmVhUXVlc3Rpb24oc2NoZW1hKTtcclxuICAgICAgY2FzZSAnc2VsZWN0LWNvbmNlcHQtYW5zd2Vycyc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Db25jZXB0QW5zd2VyU2VsZWN0KHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ2VuY291bnRlckxvY2F0aW9uJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50b0VuY291bnRlckxvY2F0aW9uUXVlc3Rpb24oc2NoZW1hKTtcclxuICAgICAgY2FzZSAnZW5jb3VudGVyRGF0ZXRpbWUnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRW5jb3VudGVyRGF0ZXRpbWVRdWVzdGlvbihzY2hlbWEpO1xyXG4gICAgICBjYXNlICdlbmNvdW50ZXJQcm92aWRlcic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9FbmNvdW50ZXJQcm92aWRlclF1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ3JhZGlvJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50b0NoZWNrQm94UXVlc3Rpb24oc2NoZW1hKTtcclxuICAgICAgY2FzZSAnY2hlY2tib3gnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvQ2hlY2tCb3hRdWVzdGlvbihzY2hlbWEpO1xyXG4gICAgICBjYXNlICdlbmNvdW50ZXJQcm92aWRlcic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9FbmNvdW50ZXJQcm92aWRlclF1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGNhc2UgJ2ZpbGUnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRmlsZVVwbG9hZFF1ZXN0aW9uKHNjaGVtYSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdOZXcgU2NoZW1hIFF1ZXN0aW9uIFR5cGUgZm91bmQuLi4uLi4uLi4nICsgcmVuZGVyVHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9UZXh0UXVlc3Rpb24oc2NoZW1hKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjb252ZXJ0T2xkVmVyc2lvbkNvbXBsZXhPYnNRdWVzdGlvblRvTmV3VmVyc2lvbihzY2hlbWFRdWVzdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCBjb252ZXJ0ZWQ6IGFueSA9IHt9O1xyXG4gICAgY29udmVydGVkLnR5cGUgPSAnY29tcGxleC1vYnMnO1xyXG4gICAgY29udmVydGVkLmxhYmVsID0gc2NoZW1hUXVlc3Rpb24ubGFiZWw7XHJcbiAgICBjb252ZXJ0ZWQuaWQgPSAnY29tcGxleF8nICsgc2NoZW1hUXVlc3Rpb24uaWQ7XHJcbiAgICBjb252ZXJ0ZWQucXVlc3Rpb25PcHRpb25zID0ge307XHJcbiAgICBjb252ZXJ0ZWQucXVlc3Rpb25PcHRpb25zLmNvbmNlcHQgPSBzY2hlbWFRdWVzdGlvbi5xdWVzdGlvbk9wdGlvbnMuY29uY2VwdDtcclxuICAgIGNvbnZlcnRlZC5xdWVzdGlvbk9wdGlvbnMucmVuZGVyaW5nID0gJ2ZpZWxkLXNldCc7XHJcbiAgICBjb252ZXJ0ZWQucXVlc3Rpb25zID0gW107XHJcbiAgICBjb252ZXJ0ZWQudmFsaWRhdG9ycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IG1haW5GaWVsZDogYW55ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzY2hlbWFRdWVzdGlvbikpO1xyXG4gICAgbWFpbkZpZWxkLnR5cGUgPSAnY29tcGxleC1vYnMtY2hpbGQnO1xyXG4gICAgZGVsZXRlIG1haW5GaWVsZC5xdWVzdGlvbk9wdGlvbnMuc2hvd0RhdGU7XHJcbiAgICBkZWxldGUgbWFpbkZpZWxkLnF1ZXN0aW9uT3B0aW9ucy5zaG93bkRhdGVPcHRpb25zO1xyXG4gICAgbWFpbkZpZWxkLnF1ZXN0aW9uT3B0aW9ucy5vYnNGaWVsZCA9ICd2YWx1ZSc7XHJcblxyXG4gICAgY29uc3QgZGF0ZUZpZWxkOiBhbnkgPSB7fTtcclxuICAgIGRhdGVGaWVsZC50eXBlID0gJ2NvbXBsZXgtb2JzLWNoaWxkJztcclxuICAgIGRhdGVGaWVsZC5sYWJlbCA9ICdEYXRlIG9mICcgKyBtYWluRmllbGQubGFiZWw7XHJcbiAgICBkYXRlRmllbGQuaWQgPSAnZGF0ZV8nICsgbWFpbkZpZWxkLmlkO1xyXG4gICAgZGF0ZUZpZWxkLnF1ZXN0aW9uT3B0aW9ucyA9IHt9O1xyXG4gICAgZGF0ZUZpZWxkLnF1ZXN0aW9uT3B0aW9ucy5jb25jZXB0ID0gc2NoZW1hUXVlc3Rpb24ucXVlc3Rpb25PcHRpb25zLmNvbmNlcHQ7XHJcbiAgICBkYXRlRmllbGQucXVlc3Rpb25PcHRpb25zLnJlbmRlcmluZyA9ICdkYXRlJztcclxuICAgIGRhdGVGaWVsZC5xdWVzdGlvbk9wdGlvbnMub2JzRmllbGQgPSAnb2JzRGF0ZXRpbWUnO1xyXG4gICAgY29uc3QgZGF0ZU9wdGlvbnM6IGFueSA9IChPYmplY3QgYXMgYW55KS5hc3NpZ24oe30sXHJcbiAgICAgIHNjaGVtYVF1ZXN0aW9uLnF1ZXN0aW9uT3B0aW9ucy5zaG93bkRhdGVPcHRpb25zKTtcclxuICAgIGRhdGVGaWVsZC52YWxpZGF0b3JzID0gZGF0ZU9wdGlvbnMudmFsaWRhdG9ycztcclxuICAgIGRhdGVGaWVsZC5oaWRlID0gZGF0ZU9wdGlvbnMuaGlkZTtcclxuXHJcblxyXG4gICAgY29udmVydGVkLnF1ZXN0aW9ucy5wdXNoKG1haW5GaWVsZCk7XHJcbiAgICBjb252ZXJ0ZWQucXVlc3Rpb25zLnB1c2goZGF0ZUZpZWxkKTtcclxuXHJcbiAgICByZXR1cm4gY29udmVydGVkO1xyXG4gIH1cclxuXHJcbiAgY29weVByb3BlcnRpZXMobWFwcGluZ3M6IGFueSwgc291cmNlOiBhbnksIGRlc3RpbmF0aW9uOiBRdWVzdGlvbkJhc2UpIHtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHNvdXJjZSkge1xyXG4gICAgICBpZiAobWFwcGluZ3MuaGFzT3duUHJvcGVydHkocHJvcGVydHkpICYmIGRlc3RpbmF0aW9uLmhhc093blByb3BlcnR5KG1hcHBpbmdzW3Byb3BlcnR5XSkpIHtcclxuICAgICAgICBkZXN0aW5hdGlvblttYXBwaW5nc1twcm9wZXJ0eV1dID0gc291cmNlW3Byb3BlcnR5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkVmFsaWRhdG9ycyhzY2hlbWFRdWVzdGlvbjogYW55KTogQXJyYXk8VmFsaWRhdGlvbk1vZGVsPiB7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdG9yczogQXJyYXk8VmFsaWRhdGlvbk1vZGVsPiA9IFtdO1xyXG5cclxuICAgIGlmIChzY2hlbWFRdWVzdGlvbi52YWxpZGF0b3JzKSB7XHJcblxyXG4gICAgICAvLyBUT0RPIC0gYWRkIG1vcmUgdmFsaWRhdG9yIHR5cGVzXHJcbiAgICAgIF8uZm9yRWFjaChzY2hlbWFRdWVzdGlvbi52YWxpZGF0b3JzLCAodmFsaWRhdG9yOiBhbnkpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHZhbGlkYXRvci50eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBEYXRlVmFsaWRhdGlvbk1vZGVsKHZhbGlkYXRvcikpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2pzX2V4cHJlc3Npb24nOlxyXG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IEpzRXhwcmVzc2lvblZhbGlkYXRpb25Nb2RlbCh2YWxpZGF0b3IpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjb25kaXRpb25hbEFuc3dlcmVkJzpcclxuICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBDb25kaXRpb25hbFZhbGlkYXRpb25Nb2RlbCh2YWxpZGF0b3IpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IFZhbGlkYXRpb25Nb2RlbCh2YWxpZGF0b3IpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBxdWVzdGlvbk9wdGlvbnMgPSBzY2hlbWFRdWVzdGlvbi5xdWVzdGlvbk9wdGlvbnM7XHJcbiAgICBjb25zdCByZW5kZXJpbmdUeXBlID0gcXVlc3Rpb25PcHRpb25zID8gcXVlc3Rpb25PcHRpb25zLnJlbmRlcmluZyA6ICcnO1xyXG4gICAgc3dpdGNoIChyZW5kZXJpbmdUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ251bWJlcic6XHJcblxyXG4gICAgICAgIGlmIChxdWVzdGlvbk9wdGlvbnMubWF4ICYmIHF1ZXN0aW9uT3B0aW9ucy5taW4pIHtcclxuICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChuZXcgTWF4VmFsaWRhdGlvbk1vZGVsKHtcclxuICAgICAgICAgICAgdHlwZTogJ21heCcsXHJcbiAgICAgICAgICAgIG1heDogcXVlc3Rpb25PcHRpb25zLm1heFxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBNaW5WYWxpZGF0aW9uTW9kZWwoe1xyXG4gICAgICAgICAgICB0eXBlOiAnbWluJyxcclxuICAgICAgICAgICAgbWluOiBxdWVzdGlvbk9wdGlvbnMubWluXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgY29uZGl0aW9uYWwgcmVxdWlyZWQgdmFsaWRhdG9yc1xyXG4gICAgaWYgKHR5cGVvZiBzY2hlbWFRdWVzdGlvbi5yZXF1aXJlZCA9PT0gJ29iamVjdCcpIHtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVpcmVkOiBhbnkgPSBzY2hlbWFRdWVzdGlvbi5yZXF1aXJlZDtcclxuXHJcbiAgICAgIGlmIChyZXF1aXJlZC50eXBlID09PSAnY29uZGl0aW9uYWxSZXF1aXJlZCcpIHtcclxuXHJcbiAgICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBDb25kaXRpb25hbFZhbGlkYXRpb25Nb2RlbCh7XHJcbiAgICAgICAgICByZWZlcmVuY2VRdWVzdGlvbklkOiByZXF1aXJlZC5yZWZlcmVuY2VRdWVzdGlvbklkLFxyXG4gICAgICAgICAgcmVmZXJlbmNlUXVlc3Rpb25BbnN3ZXJzOiByZXF1aXJlZC5yZWZlcmVuY2VRdWVzdGlvbkFuc3dlcnMsXHJcbiAgICAgICAgICB0eXBlOiByZXF1aXJlZC50eXBlLFxyXG4gICAgICAgICAgbWVzc2FnZTogcmVxdWlyZWQubWVzc2FnZSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWRhdG9ycztcclxuICB9XHJcblxyXG4gIGFkZEhpc3RvcmljYWxFeHByZXNzaW9ucyhzY2hlbWFRdWVzdGlvbjogYW55LCBxdWVzdGlvbjogUXVlc3Rpb25CYXNlKTogYW55IHtcclxuICAgIGlmIChzY2hlbWFRdWVzdGlvbi5oaXN0b3JpY2FsRXhwcmVzc2lvbiAmJiBzY2hlbWFRdWVzdGlvbi5oaXN0b3JpY2FsRXhwcmVzc2lvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHF1ZXN0aW9uLnNldEhpc3RvcmljYWxWYWx1ZSh0cnVlKTtcclxuICAgICAgaWYgKHNjaGVtYVF1ZXN0aW9uLnNob3dIaXN0b3JpY2FsRW5jb3VudGVyRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcXVlc3Rpb24uc2hvd0hpc3RvcmljYWxFbmNvdW50ZXJEYXRlKFxyXG4gICAgICAgICAgKHNjaGVtYVF1ZXN0aW9uLnNob3dIaXN0b3JpY2FsRW5jb3VudGVyRGF0ZSA9PT0gJ3RydWUnKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlc3Rpb24uc2hvd0hpc3RvcmljYWxFbmNvdW50ZXJEYXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgb3JpZ1ZhbHVlID0gdGhpcy5oaXN0b3JpY2FsSGVscGVyU2VydmljZS5ldmFsdWF0ZShzY2hlbWFRdWVzdGlvbi5oaXN0b3JpY2FsRXhwcmVzc2lvbixcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2VzLCB1bmRlZmluZWQpO1xyXG4gICAgICBxdWVzdGlvbi5oaXN0b3JpY2FsRGF0YVZhbHVlID0gb3JpZ1ZhbHVlO1xyXG4gICAgICAvLyBjb25zb2xlLmluZm8oJ2hpc3RvcmljYWwgdmFsdWUnLCBvcmlnVmFsdWUpO1xyXG4gICAgICAvLyBjb25zb2xlLmluZm8oJ2hpc3RvcmljYWwgZGF0YSBxdWVzdGlvbiA6OjonLCBxdWVzdGlvbik7XHJcbiAgICAgIC8vIGNvbnNvbGUuaW5mbygnc2NoZW1hIGRhdGEgcXVlc3Rpb24gOjo6Jywgc2NoZW1hUXVlc3Rpb24pO1xyXG5cclxuICAgICAgaWYgKHNjaGVtYVF1ZXN0aW9uLmhpc3RvcmljYWxQcmVwb3B1bGF0ZUNvbmRpdGlvbiAmJiBvcmlnVmFsdWUpIHtcclxuICAgICAgICBjb25zdCB0b1BvcHVsYXRlID0gdGhpcy5oaXN0b3JpY2FsSGVscGVyU2VydmljZS5ldmFsdWF0ZVByZWNvbmRpdGlvbihzY2hlbWFRdWVzdGlvbi5oaXN0b3JpY2FsUHJlcG9wdWxhdGVDb25kaXRpb24sXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VzLCBvcmlnVmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAodG9Qb3B1bGF0ZSkge1xyXG4gICAgICAgICAgcXVlc3Rpb24uZGVmYXVsdFZhbHVlID0gb3JpZ1ZhbHVlLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47IC8vIGRvbid0IHRyeSB0byBldmFsdWF0ZSB0aGUgb3RoZXIgb3B0aW9uXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzY2hlbWFRdWVzdGlvbi5oaXN0b3JpY2FsUHJlcG9wdWxhdGUgJiYgb3JpZ1ZhbHVlKSB7XHJcbiAgICAgICAgLy8gc2FtcGxlIHNjaGVtYSBvcHRpb25zIGZvciB0aGlzIGJyYW5jaFxyXG4gICAgICAgIC8vIFwiaGlzdG9yaWNhbFByZXBvcHVsYXRlXCI6dHJ1ZSxcclxuICAgICAgICAvLyBcImFsbG93ZWRIaXN0b3JpY2FsVmFsdWVBZ2VJbkRheXNcIjogNDAwMDAsXHJcbiAgICAgICAgY29uc3QgdmFsRGF0ZSA9IG1vbWVudChvcmlnVmFsdWUudmFsdWVEYXRlKTtcclxuICAgICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gbW9tZW50KCkuZGlmZih2YWxEYXRlLCAnZGF5cycpO1xyXG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHNjaGVtYVF1ZXN0aW9uLmFsbG93ZWRIaXN0b3JpY2FsVmFsdWVBZ2VJbkRheXMpKSB7XHJcbiAgICAgICAgICBpZiAoZGlmZmVyZW5jZUluRGF5cyA8PSBzY2hlbWFRdWVzdGlvbi5hbGxvd2VkSGlzdG9yaWNhbFZhbHVlQWdlSW5EYXlzKSB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLmRlZmF1bHRWYWx1ZSA9IG9yaWdWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcXVlc3Rpb24uZGVmYXVsdFZhbHVlID0gb3JpZ1ZhbHVlLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQ2FsY3VsYXRvclByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uOiBhbnksIHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpOiBhbnkge1xyXG5cclxuICAgIGlmIChzY2hlbWFRdWVzdGlvbi5xdWVzdGlvbk9wdGlvbnMgJiZcclxuICAgICAgdHlwZW9mIHNjaGVtYVF1ZXN0aW9uLnF1ZXN0aW9uT3B0aW9ucy5jYWxjdWxhdGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHF1ZXN0aW9uLmNhbGN1bGF0ZUV4cHJlc3Npb24gPSBzY2hlbWFRdWVzdGlvbi5xdWVzdGlvbk9wdGlvbnMuY2FsY3VsYXRlLmNhbGN1bGF0ZUV4cHJlc3Npb247XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkQWxlcnRQcm9wZXJ0eShzY2hlbWFRdWVzdGlvbjogYW55LCBxdWVzdGlvbjogUXVlc3Rpb25CYXNlKTogYW55IHtcclxuICAgIGlmIChzY2hlbWFRdWVzdGlvbi5hbGVydCkge1xyXG4gICAgICBxdWVzdGlvbi5hbGVydCA9IHNjaGVtYVF1ZXN0aW9uLmFsZXJ0O1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKHR5cGVvZiBzY2hlbWFRdWVzdGlvbi5tZXNzYWdlID09PSAnb2JqZWN0Jykge1xyXG4gICAgLy8gICBpZiAoc2NoZW1hUXVlc3Rpb24ubWVzc2FnZS5hbGVydFdoZW5FeHByZXNzaW9uKSB7XHJcbiAgICAvLyAgICAgcXVlc3Rpb24ubWVzc2FnZSA9IHNjaGVtYVF1ZXN0aW9uLm1lc3NhZ2UuYWxlcnRXaGVuRXhwcmVzc2lvbjtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgYWRkRGlzYWJsZU9ySGlkZVByb3BlcnR5KHNjaGVtYVF1ZXN0aW9uOiBhbnksIHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpOiBhbnkge1xyXG5cclxuICAgIGlmICghIXNjaGVtYVF1ZXN0aW9uLmRpc2FibGUpIHtcclxuICAgICAgcXVlc3Rpb24uZGlzYWJsZSA9IHNjaGVtYVF1ZXN0aW9uLmRpc2FibGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBzY2hlbWFRdWVzdGlvbi5kaXNhYmxlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBxdWVzdGlvbi5kaXNhYmxlID0gc2NoZW1hUXVlc3Rpb24uZGlzYWJsZS5kaXNhYmxlV2hlbkV4cHJlc3Npb247XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEhc2NoZW1hUXVlc3Rpb24uaGlkZSkge1xyXG4gICAgICBxdWVzdGlvbi5oaWRlID0gc2NoZW1hUXVlc3Rpb24uaGlkZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2NoZW1hUXVlc3Rpb24uaGlkZSA9PT0gJ29iamVjdCcpIHtcclxuXHJcbiAgICAgIGlmIChzY2hlbWFRdWVzdGlvbi5oaWRlLmhpZGVXaGVuRXhwcmVzc2lvbikge1xyXG4gICAgICAgIHF1ZXN0aW9uLmhpZGUgPSBzY2hlbWFRdWVzdGlvbi5oaWRlLmhpZGVXaGVuRXhwcmVzc2lvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGdlbmVyYXRlSWQoeCkge1xyXG4gICAgbGV0IHMgPSAnXyc7XHJcbiAgICB3aGlsZSAocy5sZW5ndGggPCB4ICYmIHggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICBzICs9IChyIDwgMC4xID8gTWF0aC5mbG9vcihyICogMTAwKSA6XHJcbiAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLmZsb29yKHIgKiAyNikgKyAociA+IDAuNSA/IDk3IDogNjUpKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ18nICsgcztcclxuICB9XHJcbn1cclxuIl19