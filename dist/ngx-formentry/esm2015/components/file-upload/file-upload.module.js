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
export class RemoteFileUploadModule {
}
RemoteFileUploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SelectModule, FormsModule, NgxFileUploaderModule, SharedModule],
                exports: [RemoteFileUploadComponent],
                declarations: [RemoteFileUploadComponent],
                providers: [],
            },] },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVFwRSxNQUFNOzs7WUFOTCxRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxDQUFDO2dCQUN2RixPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDcEMsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3pDLFNBQVMsRUFBRSxFQUFFO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ3hGaWxlVXBsb2FkZXJNb2R1bGUgfSBmcm9tICduZ3gtZmlsZS11cGxvYWRlci9kaXN0L25neC1maWxlLXVwbG9hZGVyJztcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkLm1vZHVsZSc7XHJcbi8vIGltcG9ydCB7IFNlbGVjdE1vZHVsZSB9IGZyb20gJ25nMi1zZWxlY3QvbmcyLXNlbGVjdCc7XHJcbmltcG9ydCB7IFNlbGVjdE1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBSZW1vdGVGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLXVwbG9hZC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNlbGVjdE1vZHVsZSwgRm9ybXNNb2R1bGUsIE5neEZpbGVVcGxvYWRlck1vZHVsZSwgU2hhcmVkTW9kdWxlXSxcclxuICAgIGV4cG9ydHM6IFtSZW1vdGVGaWxlVXBsb2FkQ29tcG9uZW50XSxcclxuICAgIGRlY2xhcmF0aW9uczogW1JlbW90ZUZpbGVVcGxvYWRDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlbW90ZUZpbGVVcGxvYWRNb2R1bGUgeyB9XHJcbiJdfQ==