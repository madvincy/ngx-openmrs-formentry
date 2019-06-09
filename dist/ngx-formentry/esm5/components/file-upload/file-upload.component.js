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
                /** @type {?} */
                var dataIn = [];
                dataIn.push(result.image);
                _this.innerValue = dataIn.toString();
                // contains both pdf and image but only image will be displayed
                _this.uploads.push(_this.innerValue);
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
                    template: "<div>\n    <lib-file-uploader [(ngModel)]=\"innerValue\" [formEntry]=\"file\" (_onClear)=\"clearValue()\" (uploadData)=\"onFileChange($event)\">\n    </lib-file-uploader>\n    <div *ngFor=\"let value of uploads\" >\n      <img class=\"img-responsive\" [src]=\"value | secure:this.dataSource.fetchFile\" alt=\"\" />\n    </div>\n</div>",
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
                    styles: ["img {\n        margin-left: auto;margin-right: auto;display: block;\n        width: 150px;\n        height: 150px;\n    }"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LW1hZHZpbmN5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFFSCxpQkFBaUIsRUFDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QjtJQXFDSSxtQ0FBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWRoQyxZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUMzQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQStEbEIsaURBQWlEO1FBQ2pELHVEQUF1RDtRQUN2RCw2Q0FBNkM7UUFDckMsb0JBQWU7Ozs7UUFBRyxVQUFDLENBQU0sSUFBTyxDQUFDLEVBQUM7SUF2REMsQ0FBQztJQVQ1QyxzQkFDVyxpREFBVTs7OztRQURyQjtZQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBQ0QsVUFBc0IsQ0FBYTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7T0FIQTs7OztJQVFELDRDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7O0lBQ00sZ0RBQVk7Ozs7SUFBbkIsVUFBb0IsUUFBUTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFDN0IsR0FBRyxDQUFDLENBQWUsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQTtnQkFBdEIsSUFBTSxJQUFJLHFCQUFBO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7Ozs7Ozs7Ozs7SUFDTCxDQUFDOzs7OztJQUNELDBDQUFNOzs7O0lBQU4sVUFBTyxJQUFJO1FBQVgsaUJBZ0JDO1FBZkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsTUFBTTs7O29CQUV4QyxNQUFNLEdBQUcsRUFBRTtnQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQywrREFBK0Q7Z0JBQy9ELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzNCLENBQUM7Ozs7WUFBRSxVQUFDLEtBQUs7Z0JBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDM0IsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQUVELGlEQUFpRDs7Ozs7O0lBQzFDLDhDQUFVOzs7Ozs7SUFBakIsVUFBa0IsS0FBVTtRQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNMLENBQUM7SUFDRCwwREFBMEQ7SUFDMUQsbURBQW1EOzs7Ozs7O0lBQzVDLG9EQUFnQjs7Ozs7OztJQUF2QixVQUF3QixFQUFPO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBaUM7Ozs7O0lBQzFCLHFEQUFpQjs7Ozs7SUFBeEIsY0FBNkIsQ0FBQztJQUM5QixrQ0FBa0M7Ozs7OztJQUNsQyw0Q0FBUTs7Ozs7O0lBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsUUFBUTtRQUNSLGtCQUFrQjtRQUNsQixtQ0FBbUM7SUFDdkMsQ0FBQzs7OztJQVFNLDhDQUFVOzs7SUFBakI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFqR0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxnVkFNUDtvQkFDSCxTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUM7NEJBQ3hELEtBQUssRUFBRSxJQUFJO3lCQUNkO3FCQUFDO29CQUNOLE1BQU0sRUFBRSxDQUFDLDJIQUlQO3FCQUNEO2lCQUNKOzs7Z0JBM0I4QyxTQUFTOzs7NkJBa0NuRCxLQUFLOztJQXNFVixnQ0FBQztDQUFBLEFBbEdELElBa0dDO1NBNUVZLHlCQUF5Qjs7O0lBQ2xDLDRDQUFrQzs7SUFDbEMseUNBQW1COztJQUNuQiw4Q0FBa0I7O0lBQ2xCLCtDQUFrQjs7Ozs7SUFDbEIsZ0RBQWdDOzs7OztJQWlFaEMsb0RBQTBDOzs7OztJQXZEOUIsNkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gICAgTkdfVkFMVUVfQUNDRVNTT1JcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9mb3JtLWVudHJ5L3F1ZXN0aW9uLW1vZGVscy9pbnRlcmZhY2VzL2RhdGEtc291cmNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JlbW90ZS1maWxlLXVwbG9hZCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXY+XHJcbiAgICA8bGliLWZpbGUtdXBsb2FkZXIgWyhuZ01vZGVsKV09XCJpbm5lclZhbHVlXCIgW2Zvcm1FbnRyeV09XCJmaWxlXCIgKF9vbkNsZWFyKT1cImNsZWFyVmFsdWUoKVwiICh1cGxvYWREYXRhKT1cIm9uRmlsZUNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICA8L2xpYi1maWxlLXVwbG9hZGVyPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgdXBsb2Fkc1wiID5cclxuICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgW3NyY109XCJ2YWx1ZSB8IHNlY3VyZTp0aGlzLmRhdGFTb3VyY2UuZmV0Y2hGaWxlXCIgYWx0PVwiXCIgLz5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmVtb3RlRmlsZVVwbG9hZENvbXBvbmVudCksXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH1dLFxyXG4gICAgc3R5bGVzOiBbYGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87bWFyZ2luLXJpZ2h0OiBhdXRvO2Rpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfWBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlbW90ZUZpbGVVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICAgIHB1YmxpYyB1cGxvYWRzID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgIHB1YmxpYyBmaWxlID0gdHJ1ZTtcclxuICAgIHVwbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgaW5uZXJWYWx1ZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9kYXRhU291cmNlOiBEYXRhU291cmNlO1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBnZXQgZGF0YVNvdXJjZSgpOiBEYXRhU291cmNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgZGF0YVNvdXJjZSh2OiBEYXRhU291cmNlKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNvdXJjZSA9IHY7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRmlsZUNoYW5nZShmaWxlTGlzdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVMaXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkKGZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwbG9hZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWxlVXBsb2FkKGRhdGEpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUmVzdWx0JywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFJbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF0YUluLnB1c2gocmVzdWx0LmltYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IGRhdGFJbi50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29udGFpbnMgYm90aCBwZGYgYW5kIGltYWdlIGJ1dCBvbmx5IGltYWdlIHdpbGwgYmUgZGlzcGxheWVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZHMucHVzaCh0aGlzLmlubmVyVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5pbm5lclZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgaXMgdGhlIGluaXRpYWwgdmFsdWUgc2V0IHRvIHRoZSBjb21wb25lbnRcclxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZWdpc3RlcnMgJ2ZuJyB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBjaGFuZ2VzIGFyZSBtYWRlXHJcbiAgICAvLyB0aGlzIGlzIGhvdyB3ZSBlbWl0IHRoZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm1cclxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5vdCB1c2VkLCB1c2VkIGZvciB0b3VjaCBpbnB1dFxyXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKCkgeyB9XHJcbiAgICAvLyBjaGFuZ2UgZXZlbnRzIGZyb20gdGhlIHRleHRhcmVhXHJcbiAgICBvbkNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKGV2ZW50LmlkKTtcclxuICAgICAgICAvLyAuLi4uLlxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgZm9ybVxyXG4gICAgICAgIC8vIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRoZSBtZXRob2Qgc2V0IGluIHJlZ2lzdGVyT25DaGFuZ2UsIGl0IGlzIGp1c3RcclxuICAgIC8vIGEgcGxhY2Vob2xkZXIgZm9yIGEgbWV0aG9kIHRoYXQgdGFrZXMgb25lIHBhcmFtZXRlcixcclxuICAgIC8vIHdlIHVzZSBpdCB0byBlbWl0IGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybVxyXG4gICAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XHJcblxyXG4gICAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLmlubmVyVmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==