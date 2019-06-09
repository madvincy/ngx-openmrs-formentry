/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxFileUploaderModule } from 'ngx-file-uploader-ampath2';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LW1hZHZpbmN5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBUTFDLE1BQU07OztZQU5MLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixDQUFDO2dCQUNyRyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDcEMsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3pDLFNBQVMsRUFBRSxFQUFFO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ3hGaWxlVXBsb2FkZXJNb2R1bGUgfSBmcm9tICduZ3gtZmlsZS11cGxvYWRlci1hbXBhdGgyJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC5tb2R1bGUnO1xyXG4vLyBpbXBvcnQgeyBTZWxlY3RNb2R1bGUgfSBmcm9tICduZzItc2VsZWN0L25nMi1zZWxlY3QnO1xyXG5pbXBvcnQgeyBTZWxlY3RNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QubW9kdWxlJztcclxuaW1wb3J0IHsgUmVtb3RlRmlsZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vZmlsZS11cGxvYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2ViY2FtTW9kdWxlIH0gZnJvbSAnbmd4LXdlYmNhbSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2VsZWN0TW9kdWxlLCBGb3Jtc01vZHVsZSwgU2hhcmVkTW9kdWxlLCBXZWJjYW1Nb2R1bGUsIE5neEZpbGVVcGxvYWRlck1vZHVsZV0sXHJcbiAgICBleHBvcnRzOiBbUmVtb3RlRmlsZVVwbG9hZENvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtSZW1vdGVGaWxlVXBsb2FkQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZW1vdGVGaWxlVXBsb2FkTW9kdWxlIHsgfVxyXG4iXX0=