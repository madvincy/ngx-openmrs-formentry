/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
     * @param {?} fileList
     * @return {?}
     */
    RemoteFileUploadComponent.prototype.onFileChange = /**
     * @param {?} fileList
     * @return {?}
     */
    function (fileList) {
        console.log(fileList.length);
        try {
            for (var fileList_1 = tslib_1.__values(fileList), fileList_1_1 = fileList_1.next(); !fileList_1_1.done; fileList_1_1 = fileList_1.next()) {
                var file = fileList_1_1.value;
                this.upload(file);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (fileList_1_1 && !fileList_1_1.done && (_a = fileList_1.return)) _a.call(fileList_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _a;
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
                _this.innerValue.push(result.image);
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
        { type: Component, args: [{
                    selector: 'remote-file-upload',
                    template: "<div>\n    <lib-file-uploader [(ngModel)]=\"innerValue\" (_onClear)=\"clearValue()\" (uploadData)=\"onFileChange($event)\">\n    </lib-file-uploader>\n    <div *ngFor=\"let value of innerValue\" >\n      <img class=\"img-responsive\" [src]=\"value | secure:this.dataSource.fetchFile\" alt=\"\" />\n    </div>\n</div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
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
        { type: Renderer2 }
    ]; };
    RemoteFileUploadComponent.propDecorators = {
        dataSource: [{ type: Input }]
    };
    return RemoteFileUploadComponent;
}());
export { RemoteFileUploadComponent };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFFSCxpQkFBaUIsRUFDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QjtJQWlDSSxtQ0FBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVp2QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUEyRGxCLGlEQUFpRDtRQUNqRCx1REFBdUQ7UUFDdkQsNkNBQTZDO1FBQ3JDLG9CQUFlOzs7O1FBQUcsVUFBQyxDQUFNLElBQU8sQ0FBQyxFQUFDO0lBbkRDLENBQUM7SUFUNUMsc0JBQ1csaURBQVU7Ozs7UUFEckI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7OztRQUNELFVBQXNCLENBQWE7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQzs7O09BSEE7Ozs7SUFRRCw0Q0FBUTs7O0lBQVI7SUFFQSxDQUFDOzs7OztJQUNNLGdEQUFZOzs7O0lBQW5CLFVBQW9CLFFBQVE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBQzNCLEdBQUcsQ0FBQyxDQUFlLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUE7Z0JBQXRCLElBQU0sSUFBSSxxQkFBQTtnQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25COzs7Ozs7Ozs7O0lBQ0wsQ0FBQzs7Ozs7SUFDSCwwQ0FBTTs7OztJQUFOLFVBQU8sSUFBSTtRQUFYLGlCQVlDO1FBWEcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsTUFBTTtnQkFDOUMsaUNBQWlDO2dCQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDOzs7O1lBQUUsVUFBQyxLQUFLO2dCQUNMLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzNCLENBQUMsRUFBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFRCxpREFBaUQ7Ozs7OztJQUMxQyw4Q0FBVTs7Ozs7O0lBQWpCLFVBQWtCLEtBQVU7UUFDeEIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBQ0QsMERBQTBEO0lBQzFELG1EQUFtRDs7Ozs7OztJQUM1QyxvREFBZ0I7Ozs7Ozs7SUFBdkIsVUFBd0IsRUFBTztRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsaUNBQWlDOzs7OztJQUMxQixxREFBaUI7Ozs7O0lBQXhCLGNBQTZCLENBQUM7SUFDOUIsa0NBQWtDOzs7Ozs7SUFDbEMsNENBQVE7Ozs7OztJQUFSLFVBQVMsS0FBSztRQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLFFBQVE7UUFDUixrQkFBa0I7UUFDbEIsbUNBQW1DO0lBQ3ZDLENBQUM7Ozs7SUFRTSw4Q0FBVTs7O0lBQWpCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBekZKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsOFRBTVA7b0JBQ0gsU0FBUyxFQUFFO3dCQUNQOzRCQUNJLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixFQUFDOzRCQUN4RCxLQUFLLEVBQUUsSUFBSTt5QkFDZDtxQkFBQztvQkFDTixNQUFNLEVBQUUsQ0FBQyw0RUFFUDtxQkFDRDtpQkFDSjs7O2dCQXpCOEMsU0FBUzs7OzZCQThCbkQsS0FBSzs7SUFrRVYsZ0NBQUM7Q0FBQSxBQTFGRCxJQTBGQztTQXRFWSx5QkFBeUI7OztJQUNsQyw4Q0FBa0I7O0lBQ2xCLCtDQUFrQjs7Ozs7SUFDbEIsZ0RBQWdDOzs7OztJQTZEaEMsb0RBQTBDOzs7OztJQW5EOUIsNkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gICAgTkdfVkFMVUVfQUNDRVNTT1JcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9mb3JtLWVudHJ5L3F1ZXN0aW9uLW1vZGVscy9pbnRlcmZhY2VzL2RhdGEtc291cmNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JlbW90ZS1maWxlLXVwbG9hZCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXY+XHJcbiAgICA8bGliLWZpbGUtdXBsb2FkZXIgWyhuZ01vZGVsKV09XCJpbm5lclZhbHVlXCIgKF9vbkNsZWFyKT1cImNsZWFyVmFsdWUoKVwiICh1cGxvYWREYXRhKT1cIm9uRmlsZUNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICA8L2xpYi1maWxlLXVwbG9hZGVyPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgaW5uZXJWYWx1ZVwiID5cclxuICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgW3NyY109XCJ2YWx1ZSB8IHNlY3VyZTp0aGlzLmRhdGFTb3VyY2UuZmV0Y2hGaWxlXCIgYWx0PVwiXCIgLz5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmVtb3RlRmlsZVVwbG9hZENvbXBvbmVudCksXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH1dLFxyXG4gICAgc3R5bGVzOiBbYGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87bWFyZ2luLXJpZ2h0OiBhdXRvO2Rpc3BsYXk6IGJsb2NrO1xyXG4gICAgfWBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlbW90ZUZpbGVVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICAgIHVwbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgaW5uZXJWYWx1ZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9kYXRhU291cmNlOiBEYXRhU291cmNlO1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBnZXQgZGF0YVNvdXJjZSgpOiBEYXRhU291cmNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgZGF0YVNvdXJjZSh2OiBEYXRhU291cmNlKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNvdXJjZSA9IHY7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRmlsZUNoYW5nZShmaWxlTGlzdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZUxpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWQoZmlsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIHVwbG9hZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWxlVXBsb2FkKGRhdGEpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUmVzdWx0JywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJWYWx1ZS5wdXNoKHJlc3VsdC5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLmlubmVyVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBpcyB0aGUgaW5pdGlhbCB2YWx1ZSBzZXQgdG8gdGhlIGNvbXBvbmVudFxyXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJlZ2lzdGVycyAnZm4nIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGNoYW5nZXMgYXJlIG1hZGVcclxuICAgIC8vIHRoaXMgaXMgaG93IHdlIGVtaXQgdGhlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybVxyXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbm90IHVzZWQsIHVzZWQgZm9yIHRvdWNoIGlucHV0XHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoKSB7IH1cclxuICAgIC8vIGNoYW5nZSBldmVudHMgZnJvbSB0aGUgdGV4dGFyZWFcclxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoZXZlbnQuaWQpO1xyXG4gICAgICAgIC8vIC4uLi4uXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBmb3JtXHJcbiAgICAgICAgLy8gdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5kYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdGhlIG1ldGhvZCBzZXQgaW4gcmVnaXN0ZXJPbkNoYW5nZSwgaXQgaXMganVzdFxyXG4gICAgLy8gYSBwbGFjZWhvbGRlciBmb3IgYSBtZXRob2QgdGhhdCB0YWtlcyBvbmUgcGFyYW1ldGVyLFxyXG4gICAgLy8gd2UgdXNlIGl0IHRvIGVtaXQgY2hhbmdlcyBiYWNrIHRvIHRoZSBmb3JtXHJcbiAgICBwcml2YXRlIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcclxuXHJcbiAgICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuaW5uZXJWYWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19