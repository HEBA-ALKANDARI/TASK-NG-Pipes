import { Component, Input } from '@angular/core';
import { User } from '../../data/users';
import { CurrencyPipe, DatePipe, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ApplycolorPipe } from '../applycolor.pipe';
import { EmojiPipe } from '../emoji.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, ApplycolorPipe, EmojiPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() data!: User;
}
