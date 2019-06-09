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
        this.file = true;
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
                /** @type {?} */
                const dataIn = [];
                dataIn.push(result.image);
                this.innerValue = dataIn.toString();
                // contains both pdf and image but only image will be displayed
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
    <lib-file-uploader [(ngModel)]="innerValue" [formEntry]="file" (_onClear)="clearValue()" (uploadData)="onFileChange($event)">
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
        width: 150px;
        height: 150px;
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
    RemoteFileUploadComponent.prototype.file;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LW1hZHZpbmN5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUVILGlCQUFpQixFQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBd0J4QixNQUFNOzs7O0lBZUYsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWRoQyxZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUMzQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQStEbEIsaURBQWlEO1FBQ2pELHVEQUF1RDtRQUN2RCw2Q0FBNkM7UUFDckMsb0JBQWU7Ozs7UUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFDO0lBdkRDLENBQUM7Ozs7SUFUNUMsSUFDVyxVQUFVO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsQ0FBYTtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBS0QsUUFBUTtJQUVSLENBQUM7Ozs7O0lBQ00sWUFBWSxDQUFDLFFBQVE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDOzs7OztJQUNELE1BQU0sQ0FBQyxJQUFJO1FBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7OztzQkFFNUMsTUFBTSxHQUFHLEVBQUU7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEMsK0RBQStEO2dCQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDOzs7O1lBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFHTSxVQUFVLENBQUMsS0FBVTtRQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFHTSxnQkFBZ0IsQ0FBQyxFQUFPO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBR00saUJBQWlCLEtBQUssQ0FBQzs7Ozs7O0lBRTlCLFFBQVEsQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsUUFBUTtRQUNSLGtCQUFrQjtRQUNsQixtQ0FBbUM7SUFDdkMsQ0FBQzs7OztJQVFNLFVBQVU7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFqR0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7O09BTVA7Z0JBQ0gsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUM7d0JBQ3hELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUFDO2dCQUNOLE1BQU0sRUFBRSxDQUFDOzs7O01BSVA7aUJBQ0Q7YUFDSjs7O1lBM0I4QyxTQUFTOzs7eUJBa0NuRCxLQUFLOzs7O0lBTE4sNENBQWtDOztJQUNsQyx5Q0FBbUI7O0lBQ25CLDhDQUFrQjs7SUFDbEIsK0NBQWtCOzs7OztJQUNsQixnREFBZ0M7Ozs7O0lBaUVoQyxvREFBMEM7Ozs7O0lBdkQ5Qiw2Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgICBOR19WQUxVRV9BQ0NFU1NPUlxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2Zvcm0tZW50cnkvcXVlc3Rpb24tbW9kZWxzL2ludGVyZmFjZXMvZGF0YS1zb3VyY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncmVtb3RlLWZpbGUtdXBsb2FkJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdj5cclxuICAgIDxsaWItZmlsZS11cGxvYWRlciBbKG5nTW9kZWwpXT1cImlubmVyVmFsdWVcIiBbZm9ybUVudHJ5XT1cImZpbGVcIiAoX29uQ2xlYXIpPVwiY2xlYXJWYWx1ZSgpXCIgKHVwbG9hZERhdGEpPVwib25GaWxlQ2hhbmdlKCRldmVudClcIj5cclxuICAgIDwvbGliLWZpbGUtdXBsb2FkZXI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiB1cGxvYWRzXCIgPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBbc3JjXT1cInZhbHVlIHwgc2VjdXJlOnRoaXMuZGF0YVNvdXJjZS5mZXRjaEZpbGVcIiBhbHQ9XCJcIiAvPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSZW1vdGVGaWxlVXBsb2FkQ29tcG9uZW50KSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgfV0sXHJcbiAgICBzdHlsZXM6IFtgaW1nIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bzttYXJnaW4tcmlnaHQ6IGF1dG87ZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9YFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVtb3RlRmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgcHVibGljIHVwbG9hZHMgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgcHVibGljIGZpbGUgPSB0cnVlO1xyXG4gICAgdXBsb2FkaW5nID0gZmFsc2U7XHJcbiAgICBpbm5lclZhbHVlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2RhdGFTb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGdldCBkYXRhU291cmNlKCk6IERhdGFTb3VyY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBkYXRhU291cmNlKHY6IERhdGFTb3VyY2UpIHtcclxuICAgICAgICB0aGlzLl9kYXRhU291cmNlID0gdjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25GaWxlQ2hhbmdlKGZpbGVMaXN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZUxpc3QubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZUxpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWQoZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBsb2FkKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmZpbGVVcGxvYWQoZGF0YSkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdSZXN1bHQnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUluID0gW107XHJcbiAgICAgICAgICAgICAgICBkYXRhSW4ucHVzaChyZXN1bHQuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gZGF0YUluLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb250YWlucyBib3RoIHBkZiBhbmQgaW1hZ2UgYnV0IG9ubHkgaW1hZ2Ugd2lsbCBiZSBkaXNwbGF5ZWRcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2Fkcy5wdXNoKHRoaXMuaW5uZXJWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLmlubmVyVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBpcyB0aGUgaW5pdGlhbCB2YWx1ZSBzZXQgdG8gdGhlIGNvbXBvbmVudFxyXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJlZ2lzdGVycyAnZm4nIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGNoYW5nZXMgYXJlIG1hZGVcclxuICAgIC8vIHRoaXMgaXMgaG93IHdlIGVtaXQgdGhlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybVxyXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbm90IHVzZWQsIHVzZWQgZm9yIHRvdWNoIGlucHV0XHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoKSB7IH1cclxuICAgIC8vIGNoYW5nZSBldmVudHMgZnJvbSB0aGUgdGV4dGFyZWFcclxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoZXZlbnQuaWQpO1xyXG4gICAgICAgIC8vIC4uLi4uXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBmb3JtXHJcbiAgICAgICAgLy8gdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5kYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdGhlIG1ldGhvZCBzZXQgaW4gcmVnaXN0ZXJPbkNoYW5nZSwgaXQgaXMganVzdFxyXG4gICAgLy8gYSBwbGFjZWhvbGRlciBmb3IgYSBtZXRob2QgdGhhdCB0YWtlcyBvbmUgcGFyYW1ldGVyLFxyXG4gICAgLy8gd2UgdXNlIGl0IHRvIGVtaXQgY2hhbmdlcyBiYWNrIHRvIHRoZSBmb3JtXHJcbiAgICBwcml2YXRlIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcclxuXHJcbiAgICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuaW5uZXJWYWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19