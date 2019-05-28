/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxFileUploaderModule } from 'ngx-file-uploader/dist/ngx-file-uploader';
import { SharedModule } from '../../shared.module';
// import { SelectModule } from 'ng2-select/ng2-select';
import { SelectModule } from '../../components/select/select.module';
import { RemoteFileUploadComponent } from './file-upload.component';
var RemoteFileUploadModule = /** @class */ (function () {
    function RemoteFileUploadModule() {
    }
    RemoteFileUploadModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SelectModule, FormsModule, NgxFileUploaderModule, SharedModule],
                    exports: [RemoteFileUploadComponent],
                    declarations: [RemoteFileUploadComponent],
                    providers: [],
                },] },
    ];
    return RemoteFileUploadModule;
}());
export { RemoteFileUploadModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVwRTtJQUFBO0lBTXNDLENBQUM7O2dCQU50QyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxDQUFDO29CQUN2RixPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDcEMsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3pDLFNBQVMsRUFBRSxFQUFFO2lCQUNoQjs7SUFDcUMsNkJBQUM7Q0FBQSxBQU52QyxJQU11QztTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5neEZpbGVVcGxvYWRlck1vZHVsZSB9IGZyb20gJ25neC1maWxlLXVwbG9hZGVyL2Rpc3Qvbmd4LWZpbGUtdXBsb2FkZXInO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQubW9kdWxlJztcclxuLy8gaW1wb3J0IHsgU2VsZWN0TW9kdWxlIH0gZnJvbSAnbmcyLXNlbGVjdC9uZzItc2VsZWN0JztcclxuaW1wb3J0IHsgU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFJlbW90ZUZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2VsZWN0TW9kdWxlLCBGb3Jtc01vZHVsZSwgTmd4RmlsZVVwbG9hZGVyTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW1JlbW90ZUZpbGVVcGxvYWRDb21wb25lbnRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbUmVtb3RlRmlsZVVwbG9hZENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVtb3RlRmlsZVVwbG9hZE1vZHVsZSB7IH1cclxuIl19