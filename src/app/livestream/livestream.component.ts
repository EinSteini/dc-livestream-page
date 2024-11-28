import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsercardComponent } from '../usercard/usercard.component';
import { User } from '../models/user.model';

@Component({
  selector: 'app-livestream',
  standalone: true,
  imports: [
    CommonModule,
    UsercardComponent
  ],
  templateUrl: './livestream.component.html',
  styleUrl: './livestream.component.scss'
})
export class LivestreamComponent {
  channelName: string = 'watchparty';
  users : User[] = [
    { name: 'EinSteini', avatar: 'assets/einsteini-avatar.png', color: 'red', team: 'red' },
    { name: 'User2', avatar: 'assets/user2-avatar.png', color: 'blue', team: 'blue' },
    { name: 'User3', avatar: 'assets/user3-avatar.png', color: 'blue', team: 'blue' },
  ];
}
