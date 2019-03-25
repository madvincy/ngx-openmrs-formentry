/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
        { type: Component, args: [{
                    selector: 'checkbox',
                    template: "\n<div *ngFor=\"let option of options; let i = index;\" [style.display]=\"getDisplay(options.length)\">\n    <label >\n        <input type=\"checkbox\"  id=\"i + 'id'\" (change)=\"selectOpt(option, $event)\" value=\"option.value\">\n        {{ option.label }} \n    </label>\n</div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
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
        options: [{ type: Input }]
    };
    return CheckboxControlComponent;
}());
export { CheckboxControlComponent };
if (false) {
    /** @type {?} */
    CheckboxControlComponent.prototype.options;
    /** @type {?} */
    CheckboxControlComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    CheckboxControlComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    CheckboxControlComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jaGVjay1ib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBRXBGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUl4RTtJQUFBO1FBZ0NTLFdBQU0sR0FBZSxFQUFFLENBQUM7UUF5RHZCLGFBQVE7Ozs7UUFBRyxVQUFFLE1BQVcsSUFBTyxDQUFDLEVBQUM7UUFDakMsY0FBUzs7O1FBQUcsY0FBUSxDQUFDLEVBQUM7SUFFaEMsQ0FBQzs7Ozs7SUEzREMsNkNBQVU7Ozs7SUFBVixVQUFXLE9BQU87UUFDaEIsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUN4QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDOzs7O0lBRU0sMkNBQVE7OztJQUFmLGNBQW1CLENBQUM7Ozs7SUFFYixrREFBZTs7O0lBQXRCLGNBQTBCLENBQUM7Ozs7O0lBRXBCLDZDQUFVOzs7O0lBQWpCLFVBQWtCLEtBQVU7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTSxtREFBZ0I7Ozs7SUFBdkIsVUFBd0IsRUFBb0I7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTSxvREFBaUI7Ozs7SUFBeEIsVUFBeUIsRUFBYztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQUksMkNBQUs7Ozs7UUFBVDtZQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0gsQ0FBQzs7Ozs7UUFFRCxVQUFVLENBQU07WUFDZCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckQsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sSUFBSSxTQUFTLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUMvRCxDQUFDO1FBQ0gsQ0FBQzs7O09BVkE7Ozs7OztJQVlNLDRDQUFTOzs7OztJQUFoQixVQUFpQixNQUFNLEVBQUUsS0FBSztRQUE5QixpQkFZQztRQVhDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxDQUFDO2dCQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUM3QixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkF2RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsNFJBTUw7b0JBQ0wsU0FBUyxFQUFFO3dCQUNUOzRCQUNJLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHdCQUF3QixFQUF4QixDQUF3QixFQUFDOzRCQUN2RCxLQUFLLEVBQUUsSUFBSTt5QkFDZDtxQkFBQztvQkFDSixNQUFNLEVBQUUsQ0FBQyw0SUFVVixDQUFDO2lCQUNEOzs7MEJBSUUsS0FBSzs7SUE4RFIsK0JBQUM7Q0FBQSxBQTVGRCxJQTRGQztTQWpFWSx3QkFBd0I7OztJQUduQywyQ0FBd0I7O0lBRXhCLDBDQUErQjs7Ozs7SUF5RC9CLDRDQUF5Qzs7Ozs7SUFDekMsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2Zvcm0tZW50cnkvcXVlc3Rpb24tbW9kZWxzL2ludGVyZmFjZXMvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NoZWNrYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG48ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uczsgbGV0IGkgPSBpbmRleDtcIiBbc3R5bGUuZGlzcGxheV09XCJnZXREaXNwbGF5KG9wdGlvbnMubGVuZ3RoKVwiPlxyXG4gICAgPGxhYmVsID5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgIGlkPVwiaSArICdpZCdcIiAoY2hhbmdlKT1cInNlbGVjdE9wdChvcHRpb24sICRldmVudClcIiB2YWx1ZT1cIm9wdGlvbi52YWx1ZVwiPlxyXG4gICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fSBcclxuICAgIDwvbGFiZWw+XHJcbjwvZGl2PmAsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb250cm9sQ29tcG9uZW50KSxcclxuICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH1dLFxyXG4gIHN0eWxlczogW2BcclxuICAubm8tYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbmBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuXHJcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM7XHJcblxyXG4gIHB1YmxpYyBfdmFsdWU6IEFycmF5PGFueT4gPSBbXTtcclxuICBnZXREaXNwbGF5KG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zIDwgMykge1xyXG4gICAgICByZXR1cm4gJ2lubGluZS1ibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ2Jsb2NrJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5fdmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWUgfHwgdGhpcy5fdmFsdWVbMF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodjogYW55KSB7XHJcbiAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgdiA9PT0gJycpIHtcclxuICAgICAgICB2ID0gW107XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHYgPSBbdl07XHJcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHYpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBhcnJheS4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RPcHQob3B0aW9uLCBldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlLnB1c2gob3B0aW9uLnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvKSA9PiB7XHJcbiAgICAgICAgaWYgKG8udmFsdWUgPT09IG9wdGlvbi52YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5fdmFsdWUuc3BsaWNlKG8sIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoIGNoYW5nZTogYW55KSA9PiB7IH07XHJcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7IH07XHJcblxyXG59XHJcbiJdfQ==