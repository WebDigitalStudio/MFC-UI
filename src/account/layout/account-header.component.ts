import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'account-header',
  templateUrl: './account-header.component.html',
    styleUrls: ["./account-header.style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountHeaderComponent {}
