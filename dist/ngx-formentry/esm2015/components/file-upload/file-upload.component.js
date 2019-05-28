/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class RemoteFileUploadComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.uploads = new Array();
        this.uploading = false;
        this.innerValue = null;
        // the method set in registerOnChange, it is just
        // a placeholder for a method that takes one parameter,
        // we use it to emit changes back to the form
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
    }
    /**
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set dataSource(v) {
        this._dataSource = v;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} fileList
     * @return {?}
     */
    onFileChange(fileList) {
        console.log(fileList.length);
        for (const file of fileList) {
            this.upload(file);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    upload(data) {
        if (this.dataSource) {
            this.uploading = true;
            this.dataSource.fileUpload(data).subscribe((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                // console.log('Result', result);
                this.innerValue = result.image;
                console.log('Result', this.innerValue);
                this.uploads.push(this.innerValue);
                this.propagateChange(this.innerValue);
                this.uploading = false;
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                this.uploading = false;
            }));
        }
    }
    // this is the initial value set to the component
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }
    // registers 'fn' that will be fired when changes are made
    // this is how we emit the changes back to the form
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    // not used, used for touch input
    /**
     * @return {?}
     */
    registerOnTouched() { }
    // change events from the textarea
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.propagateChange(event.id);
        // .....
        // update the form
        // this.propagateChange(this.data);
    }
    /**
     * @return {?}
     */
    clearValue() {
        this.innerValue = null;
        this.propagateChange(this.innerValue);
    }
}
RemoteFileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'remote-file-upload',
                template: `<div>
    <lib-file-uploader [(ngModel)]="innerValue" (_onClear)="clearValue()" (uploadData)="onFileChange($event)">
    </lib-file-uploader>
    <div *ngFor="let value of uploads" >
      <img class="img-responsive" [src]="value | secure:this.dataSource.fetchFile" alt="" />
    </div>
</div>`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => RemoteFileUploadComponent)),
                        multi: true,
                    }
                ],
                styles: [`img {
        margin-left: auto;margin-right: auto;display: block;
    }`
                ]
            },] },
];
RemoteFileUploadComponent.ctorParameters = () => [
    { type: Renderer2 }
];
RemoteFileUploadComponent.propDecorators = {
    dataSource: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RemoteFileUploadComponent.prototype.uploads;
    /** @type {?} */
    RemoteFileUploadComponent.prototype.uploading;
    /** @type {?} */
    RemoteFileUploadComponent.prototype.innerValue;
    /**
     * @type {?}
     * @private
     */
    RemoteFileUploadComponent.prototype._dataSource;
    /**
     * @type {?}
     * @private
     */
    RemoteFileUploadComponent.prototype.propagateChange;
    /**
     * @type {?}
     * @private
     */
    RemoteFileUploadComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUVILGlCQUFpQixFQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBc0J4QixNQUFNOzs7O0lBY0YsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWJoQyxZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUNsQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUE2RGxCLGlEQUFpRDtRQUNqRCx1REFBdUQ7UUFDdkQsNkNBQTZDO1FBQ3JDLG9CQUFlOzs7O1FBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBQztJQXJEQyxDQUFDOzs7O0lBVDVDLElBQ1csVUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDOzs7OztJQUNELElBQVcsVUFBVSxDQUFDLENBQWE7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUtELFFBQVE7SUFFUixDQUFDOzs7OztJQUNNLFlBQVksQ0FBQyxRQUFRO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFDSCxNQUFNLENBQUMsSUFBSTtRQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNsRCxpQ0FBaUM7Z0JBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDOzs7O1lBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFHTSxVQUFVLENBQUMsS0FBVTtRQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFHTSxnQkFBZ0IsQ0FBQyxFQUFPO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBR00saUJBQWlCLEtBQUssQ0FBQzs7Ozs7O0lBRTlCLFFBQVEsQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsUUFBUTtRQUNSLGtCQUFrQjtRQUNsQixtQ0FBbUM7SUFDdkMsQ0FBQzs7OztJQVFNLFVBQVU7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUE1RkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7O09BTVA7Z0JBQ0gsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUM7d0JBQ3hELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUFDO2dCQUNOLE1BQU0sRUFBRSxDQUFDOztNQUVQO2lCQUNEO2FBQ0o7OztZQXpCOEMsU0FBUzs7O3lCQStCbkQsS0FBSzs7OztJQUpOLDRDQUFrQzs7SUFDbEMsOENBQWtCOztJQUNsQiwrQ0FBa0I7Ozs7O0lBQ2xCLGdEQUFnQzs7Ozs7SUErRGhDLG9EQUEwQzs7Ozs7SUFyRDlCLDZDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgZm9yd2FyZFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgICBDb250cm9sVmFsdWVBY2Nlc3NvcixcclxuICAgIE5HX1ZBTFVFX0FDQ0VTU09SXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZm9ybS1lbnRyeS9xdWVzdGlvbi1tb2RlbHMvaW50ZXJmYWNlcy9kYXRhLXNvdXJjZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyZW1vdGUtZmlsZS11cGxvYWQnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2PlxyXG4gICAgPGxpYi1maWxlLXVwbG9hZGVyIFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIChfb25DbGVhcik9XCJjbGVhclZhbHVlKClcIiAodXBsb2FkRGF0YSk9XCJvbkZpbGVDaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgPC9saWItZmlsZS11cGxvYWRlcj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IHZhbHVlIG9mIHVwbG9hZHNcIiA+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIFtzcmNdPVwidmFsdWUgfCBzZWN1cmU6dGhpcy5kYXRhU291cmNlLmZldGNoRmlsZVwiIGFsdD1cIlwiIC8+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJlbW90ZUZpbGVVcGxvYWRDb21wb25lbnQpLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICB9XSxcclxuICAgIHN0eWxlczogW2BpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO21hcmdpbi1yaWdodDogYXV0bztkaXNwbGF5OiBibG9jaztcclxuICAgIH1gXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZW1vdGVGaWxlVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgICBwdWJsaWMgdXBsb2FkcyA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB1cGxvYWRpbmcgPSBmYWxzZTtcclxuICAgIGlubmVyVmFsdWUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZGF0YVNvdXJjZTogRGF0YVNvdXJjZTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2UoKTogRGF0YVNvdXJjZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGRhdGFTb3VyY2UodjogRGF0YVNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFTb3VyY2UgPSB2O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkZpbGVDaGFuZ2UoZmlsZUxpc3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVMaXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkKGZpbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB1cGxvYWQoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsZVVwbG9hZChkYXRhKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1Jlc3VsdCcsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSByZXN1bHQuaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0JywgdGhpcy5pbm5lclZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2Fkcy5wdXNoKHRoaXMuaW5uZXJWYWx1ZSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5pbm5lclZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgaXMgdGhlIGluaXRpYWwgdmFsdWUgc2V0IHRvIHRoZSBjb21wb25lbnRcclxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZWdpc3RlcnMgJ2ZuJyB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBjaGFuZ2VzIGFyZSBtYWRlXHJcbiAgICAvLyB0aGlzIGlzIGhvdyB3ZSBlbWl0IHRoZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm1cclxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5vdCB1c2VkLCB1c2VkIGZvciB0b3VjaCBpbnB1dFxyXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCkgeyB9XHJcbiAgICAvLyBjaGFuZ2UgZXZlbnRzIGZyb20gdGhlIHRleHRhcmVhXHJcbiAgICBvbkNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKGV2ZW50LmlkKTtcclxuICAgICAgICAvLyAuLi4uLlxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgZm9ybVxyXG4gICAgICAgIC8vIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRoZSBtZXRob2Qgc2V0IGluIHJlZ2lzdGVyT25DaGFuZ2UsIGl0IGlzIGp1c3RcclxuICAgIC8vIGEgcGxhY2Vob2xkZXIgZm9yIGEgbWV0aG9kIHRoYXQgdGFrZXMgb25lIHBhcmFtZXRlcixcclxuICAgIC8vIHdlIHVzZSBpdCB0byBlbWl0IGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybVxyXG4gICAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XHJcblxyXG4gICAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLmlubmVyVmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==