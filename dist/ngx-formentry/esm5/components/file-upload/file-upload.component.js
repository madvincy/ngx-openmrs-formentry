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
                _this.innerValue = result.image;
                console.log('Result', _this.innerValue);
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
                    template: "<div>\n    <lib-uploader [(ngModel)]=\"innerValue\" (_onClear)=\"clearValue()\" (uploadData)=\"onFileChange($event)\">\n    </lib-uploader>\n    <div *ngFor=\"let value of uploads\" >\n      <img class=\"img-responsive\" [src]=\"value | secure:this.dataSource.fetchFile\" alt=\"\" />\n    </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFFSCxpQkFBaUIsRUFDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QjtJQWtDSSxtQ0FBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWJoQyxZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUNsQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUE2RGxCLGlEQUFpRDtRQUNqRCx1REFBdUQ7UUFDdkQsNkNBQTZDO1FBQ3JDLG9CQUFlOzs7O1FBQUcsVUFBQyxDQUFNLElBQU8sQ0FBQyxFQUFDO0lBckRDLENBQUM7SUFUNUMsc0JBQ1csaURBQVU7Ozs7UUFEckI7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7OztRQUNELFVBQXNCLENBQWE7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQzs7O09BSEE7Ozs7SUFRRCw0Q0FBUTs7O0lBQVI7SUFFQSxDQUFDOzs7OztJQUNNLGdEQUFZOzs7O0lBQW5CLFVBQW9CLFFBQVE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBQzNCLEdBQUcsQ0FBQyxDQUFlLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUE7Z0JBQXRCLElBQU0sSUFBSSxxQkFBQTtnQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25COzs7Ozs7Ozs7O0lBQ0wsQ0FBQzs7Ozs7SUFDSCwwQ0FBTTs7OztJQUFOLFVBQU8sSUFBSTtRQUFYLGlCQWNDO1FBYkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsTUFBTTtnQkFDOUMsaUNBQWlDO2dCQUNqQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO2dCQUNwQyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDM0IsQ0FBQzs7OztZQUFFLFVBQUMsS0FBSztnQkFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsaURBQWlEOzs7Ozs7SUFDMUMsOENBQVU7Ozs7OztJQUFqQixVQUFrQixLQUFVO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO0lBQ0wsQ0FBQztJQUNELDBEQUEwRDtJQUMxRCxtREFBbUQ7Ozs7Ozs7SUFDNUMsb0RBQWdCOzs7Ozs7O0lBQXZCLFVBQXdCLEVBQU87UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGlDQUFpQzs7Ozs7SUFDMUIscURBQWlCOzs7OztJQUF4QixjQUE2QixDQUFDO0lBQzlCLGtDQUFrQzs7Ozs7O0lBQ2xDLDRDQUFROzs7Ozs7SUFBUixVQUFTLEtBQUs7UUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixRQUFRO1FBQ1Isa0JBQWtCO1FBQ2xCLG1DQUFtQztJQUN2QyxDQUFDOzs7O0lBUU0sOENBQVU7OztJQUFqQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQTVGSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGlUQU1QO29CQUNILFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsRUFBQzs0QkFDeEQsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7cUJBQUM7b0JBQ04sTUFBTSxFQUFFLENBQUMsNEVBRVA7cUJBQ0Q7aUJBQ0o7OztnQkF6QjhDLFNBQVM7Ozs2QkErQm5ELEtBQUs7O0lBb0VWLGdDQUFDO0NBQUEsQUE3RkQsSUE2RkM7U0F6RVkseUJBQXlCOzs7SUFDbEMsNENBQWtDOztJQUNsQyw4Q0FBa0I7O0lBQ2xCLCtDQUFrQjs7Ozs7SUFDbEIsZ0RBQWdDOzs7OztJQStEaEMsb0RBQTBDOzs7OztJQXJEOUIsNkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gICAgTkdfVkFMVUVfQUNDRVNTT1JcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9mb3JtLWVudHJ5L3F1ZXN0aW9uLW1vZGVscy9pbnRlcmZhY2VzL2RhdGEtc291cmNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JlbW90ZS1maWxlLXVwbG9hZCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXY+XHJcbiAgICA8bGliLXVwbG9hZGVyIFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIChfb25DbGVhcik9XCJjbGVhclZhbHVlKClcIiAodXBsb2FkRGF0YSk9XCJvbkZpbGVDaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgPC9saWItdXBsb2FkZXI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiB1cGxvYWRzXCIgPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBbc3JjXT1cInZhbHVlIHwgc2VjdXJlOnRoaXMuZGF0YVNvdXJjZS5mZXRjaEZpbGVcIiBhbHQ9XCJcIiAvPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSZW1vdGVGaWxlVXBsb2FkQ29tcG9uZW50KSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgfV0sXHJcbiAgICBzdHlsZXM6IFtgaW1nIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bzttYXJnaW4tcmlnaHQ6IGF1dG87ZGlzcGxheTogYmxvY2s7XHJcbiAgICB9YFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVtb3RlRmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgcHVibGljIHVwbG9hZHMgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgdXBsb2FkaW5nID0gZmFsc2U7XHJcbiAgICBpbm5lclZhbHVlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2RhdGFTb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGdldCBkYXRhU291cmNlKCk6IERhdGFTb3VyY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBkYXRhU291cmNlKHY6IERhdGFTb3VyY2UpIHtcclxuICAgICAgICB0aGlzLl9kYXRhU291cmNlID0gdjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25GaWxlQ2hhbmdlKGZpbGVMaXN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZUxpc3QubGVuZ3RoKTtcclxuICAgICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZChmaWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgdXBsb2FkKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmZpbGVVcGxvYWQoZGF0YSkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdSZXN1bHQnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gcmVzdWx0LmltYWdlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdCcsIHRoaXMuaW5uZXJWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZHMucHVzaCh0aGlzLmlubmVyVmFsdWUgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuaW5uZXJWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIHNldCB0byB0aGUgY29tcG9uZW50XHJcbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmVnaXN0ZXJzICdmbicgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gY2hhbmdlcyBhcmUgbWFkZVxyXG4gICAgLy8gdGhpcyBpcyBob3cgd2UgZW1pdCB0aGUgY2hhbmdlcyBiYWNrIHRvIHRoZSBmb3JtXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBub3QgdXNlZCwgdXNlZCBmb3IgdG91Y2ggaW5wdXRcclxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZCgpIHsgfVxyXG4gICAgLy8gY2hhbmdlIGV2ZW50cyBmcm9tIHRoZSB0ZXh0YXJlYVxyXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZShldmVudC5pZCk7XHJcbiAgICAgICAgLy8gLi4uLi5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIGZvcm1cclxuICAgICAgICAvLyB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyB0aGUgbWV0aG9kIHNldCBpbiByZWdpc3Rlck9uQ2hhbmdlLCBpdCBpcyBqdXN0XHJcbiAgICAvLyBhIHBsYWNlaG9sZGVyIGZvciBhIG1ldGhvZCB0aGF0IHRha2VzIG9uZSBwYXJhbWV0ZXIsXHJcbiAgICAvLyB3ZSB1c2UgaXQgdG8gZW1pdCBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm1cclxuICAgIHByaXZhdGUgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xyXG5cclxuICAgIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5pbm5lclZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=