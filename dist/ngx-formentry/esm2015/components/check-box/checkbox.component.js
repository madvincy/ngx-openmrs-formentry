/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class CheckboxControlComponent {
    constructor() {
        this._value = [];
        this.onChange = (/**
         * @param {?} change
         * @return {?}
         */
        (change) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getDisplay(options) {
        if (options < 3) {
            return 'inline-block';
        }
        else {
            return 'block';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterViewInit() { }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    get value() {
        if (this._value.length === 0) {
            return '';
        }
        else {
            return this._value || this._value[0];
        }
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (typeof v === 'undefined' || v === null || v === '') {
            v = [];
        }
        else if (typeof v === 'string') {
            v = [v];
        }
        else if (!Array.isArray(v)) {
            throw new TypeError('Value must be a string or an array.');
        }
    }
    /**
     * @param {?} option
     * @param {?} event
     * @return {?}
     */
    selectOpt(option, event) {
        if (event.target.checked) {
            this._value.push(option.value);
        }
        else {
            this.options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            (o) => {
                if (o.value === option.value) {
                    this._value.splice(o, 1);
                }
            }));
        }
        this.onChange(this.value);
    }
}
CheckboxControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'checkbox',
                template: `
<div *ngFor="let option of options; let i = index;" [style.display]="getDisplay(options.length)">
    <label >
        <input type="checkbox"  id="i + 'id'" (change)="selectOpt(option, $event)" value="option.value">
        {{ option.label }} 
    </label>
</div>`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CheckboxControlComponent)),
                        multi: true,
                    }
                ],
                styles: [`
  .no-border {
    border: 0;
    box-shadow: none;
  }
  div {
    width: 50%;
    margin-bottom: 5px;
    max-width: 100%;
}
`]
            },] },
];
CheckboxControlComponent.propDecorators = {
    options: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jaGVjay1ib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBRXBGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQStCeEUsTUFBTTtJQTNCTjtRQWdDUyxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBeUR2QixhQUFROzs7O1FBQUcsQ0FBRSxNQUFXLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBQztRQUNqQyxjQUFTOzs7UUFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUM7SUFFaEMsQ0FBQzs7Ozs7SUEzREMsVUFBVSxDQUFDLE9BQU87UUFDaEIsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUN4QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDOzs7O0lBRU0sUUFBUSxLQUFJLENBQUM7Ozs7SUFFYixlQUFlLEtBQUksQ0FBQzs7Ozs7SUFFcEIsVUFBVSxDQUFDLEtBQVU7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxFQUFvQjtRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLGlCQUFpQixDQUFDLEVBQWM7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsQ0FBTTtRQUNkLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxJQUFJLFNBQVMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFTSxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUs7UUFDNUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUF2RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7OztPQU1MO2dCQUNMLFNBQVMsRUFBRTtvQkFDVDt3QkFDSSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixFQUFDO3dCQUN2RCxLQUFLLEVBQUUsSUFBSTtxQkFDZDtpQkFBQztnQkFDSixNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7OztDQVVWLENBQUM7YUFDRDs7O3NCQUlFLEtBQUs7Ozs7SUFBTiwyQ0FBd0I7O0lBRXhCLDBDQUErQjs7Ozs7SUF5RC9CLDRDQUF5Qzs7Ozs7SUFDekMsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2Zvcm0tZW50cnkvcXVlc3Rpb24tbW9kZWxzL2ludGVyZmFjZXMvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NoZWNrYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG48ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uczsgbGV0IGkgPSBpbmRleDtcIiBbc3R5bGUuZGlzcGxheV09XCJnZXREaXNwbGF5KG9wdGlvbnMubGVuZ3RoKVwiPlxyXG4gICAgPGxhYmVsID5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgIGlkPVwiaSArICdpZCdcIiAoY2hhbmdlKT1cInNlbGVjdE9wdChvcHRpb24sICRldmVudClcIiB2YWx1ZT1cIm9wdGlvbi52YWx1ZVwiPlxyXG4gICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fSBcclxuICAgIDwvbGFiZWw+XHJcbjwvZGl2PmAsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb250cm9sQ29tcG9uZW50KSxcclxuICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH1dLFxyXG4gIHN0eWxlczogW2BcclxuICAubm8tYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbmBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuXHJcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM7XHJcblxyXG4gIHB1YmxpYyBfdmFsdWU6IEFycmF5PGFueT4gPSBbXTtcclxuICBnZXREaXNwbGF5KG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zIDwgMykge1xyXG4gICAgICByZXR1cm4gJ2lubGluZS1ibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ2Jsb2NrJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5fdmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWUgfHwgdGhpcy5fdmFsdWVbMF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodjogYW55KSB7XHJcbiAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgdiA9PT0gJycpIHtcclxuICAgICAgICB2ID0gW107XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHYgPSBbdl07XHJcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHYpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBhcnJheS4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RPcHQob3B0aW9uLCBldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlLnB1c2gob3B0aW9uLnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvKSA9PiB7XHJcbiAgICAgICAgaWYgKG8udmFsdWUgPT09IG9wdGlvbi52YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5fdmFsdWUuc3BsaWNlKG8sIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoIGNoYW5nZTogYW55KSA9PiB7IH07XHJcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7IH07XHJcblxyXG59XHJcbiJdfQ==