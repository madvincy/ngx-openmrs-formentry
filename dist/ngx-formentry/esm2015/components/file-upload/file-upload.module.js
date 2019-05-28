/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxFileUploaderModule } from 'node_modules/ngx-file-uploader-ampath2';
import { SharedModule } from '../../shared.module';
// import { SelectModule } from 'ng2-select/ng2-select';
import { SelectModule } from '../../components/select/select.module';
import { RemoteFileUploadComponent } from './file-upload.component';
import { WebcamModule } from 'ngx-webcam';
export class RemoteFileUploadModule {
}
RemoteFileUploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SelectModule, FormsModule, SharedModule, WebcamModule, NgxFileUploaderModule],
                exports: [RemoteFileUploadComponent],
                declarations: [RemoteFileUploadComponent],
                providers: [],
            },] },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBUTFDLE1BQU07OztZQU5MLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixDQUFDO2dCQUNyRyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDcEMsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3pDLFNBQVMsRUFBRSxFQUFFO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ3hGaWxlVXBsb2FkZXJNb2R1bGUgfSBmcm9tICdub2RlX21vZHVsZXMvbmd4LWZpbGUtdXBsb2FkZXItYW1wYXRoMic7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQubW9kdWxlJztcclxuLy8gaW1wb3J0IHsgU2VsZWN0TW9kdWxlIH0gZnJvbSAnbmcyLXNlbGVjdC9uZzItc2VsZWN0JztcclxuaW1wb3J0IHsgU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFJlbW90ZUZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdlYmNhbU1vZHVsZSB9IGZyb20gJ25neC13ZWJjYW0nO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNlbGVjdE1vZHVsZSwgRm9ybXNNb2R1bGUsIFNoYXJlZE1vZHVsZSwgV2ViY2FtTW9kdWxlLCBOZ3hGaWxlVXBsb2FkZXJNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW1JlbW90ZUZpbGVVcGxvYWRDb21wb25lbnRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbUmVtb3RlRmlsZVVwbG9hZENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVtb3RlRmlsZVVwbG9hZE1vZHVsZSB7IH1cclxuIl19