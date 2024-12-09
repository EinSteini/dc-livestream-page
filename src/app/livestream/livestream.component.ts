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
  channelName: string = 'team-mein-lieblingsteam';

  allUsers: User[] = [
    { name: 'Telouiii', avatar: 'assets/players/telouiii.jpg', color: 'magenta', team: 'PinkHund', teamAvatar: 'assets/teams/pinkhund.png' },
    { name: 'LumatDR', avatar: 'assets/players/lumatdr.jpg', color: 'magenta', team: 'PinkHund', teamAvatar: 'assets/teams/pinkhund.png' },
    { name: 'JITP', avatar: 'assets/players/jitp.jpg', color: 'green', team: 'Gaben Saviors', teamAvatar: 'assets/teams/gabensaviors.png' },
    { name: 'David', avatar: 'assets/players/david.jpg', color: 'green', team: 'Gaben Saviors', teamAvatar: 'assets/teams/gabensaviors.png' },
    { name: 'Cracker', avatar: 'assets/players/cracker.jpg', color: 'brown', team: 'Der hohe Rat', teamAvatar: 'assets/teams/derhoherat.png' },
    { name: 'Sir Patrickston', avatar: 'assets/players/sirpatrickston.jpg', color: 'brown', team: 'Der hohe Rat', teamAvatar: 'assets/teams/derhoherat.png' },
    { name: 'Zimfex', avatar: 'assets/players/zimfex.jpg', color: 'darkgray', team: 'Mein Lieblingsteam', teamAvatar: 'assets/teams/meinlieblingsteam.png' },
    { name: 'GorgDerStorch', avatar: 'assets/players/gorgderstorch.jpg', color: 'darkgray', team: 'Mein Lieblingsteam', teamAvatar: 'assets/teams/meinlieblingsteam.png' },
    { name: 'Trahlen', avatar: 'assets/players/trahlen.jpg', color: 'black', team: 'Tredo', teamAvatar: 'assets/teams/tredo.png' },
    { name: 'Medo', avatar: 'assets/players/medo.jpg', color: 'black', team: 'Tredo', teamAvatar: 'assets/teams/tredo.png' },
    { name: 'very_fqst', avatar: 'assets/players/veryfqst.jpg', color: 'gold', team: 'chikenz', teamAvatar: 'assets/teams/chikenz.png' },
    { name: 'meW0r1es', avatar: 'assets/teams/chikenz.png', color: 'gold', team: 'chikenz', teamAvatar: 'assets/teams/chikenz.png' },
    { name: 'Jan', avatar: 'assets/players/jan.jpg', color: 'purple', team: 'SV Pennergranate', teamAvatar: 'assets/teams/svpennergranate.png' },
    { name: 'Nick', avatar: 'assets/teams/svpennergranate.png', color: 'purple', team: 'SV Pennergranate', teamAvatar: 'assets/teams/svpennergranate.png' },
    { name: 'xdkevgo', avatar: 'assets/players/xdkevgo.gif', color: 'blue', team: 'KevMu', teamAvatar: 'assets/teams/kevmu.png' },
    { name: 'Güssi', avatar: 'assets/players/guessi.jpg', color: 'blue', team: 'KevMu', teamAvatar: 'assets/teams/kevmu.png' },
    { name: 'Albret', avatar: 'assets/players/albret.jpg', color: 'orange', team: 'L9', teamAvatar: 'assets/teams/l9.png' },
    { name: 'FabZ', avatar: 'assets/players/fabz.jpg', color: 'orange', team: 'L9', teamAvatar: 'assets/teams/l9.png' },
    { name: 'big_Borris', avatar: 'assets/players/bigborris.jpg', color: 'lightblue', team: 'Benjamin Bierchen', teamAvatar: 'assets/teams/benjaminbierchen.png' },
    { name: 'Hosenwurm_69', avatar: 'assets/players/jana.jpg', color: 'lightblue', team: 'Benjamin Bierchen', teamAvatar: 'assets/teams/benjaminbierchen.png' },
    { name: 'Luca', avatar: 'assets/players/luca.jpg', color: 'gold', team: 'Feierabendbier', teamAvatar: 'assets/teams/feierabendbier.png' },
    { name: 'Mika', avatar: 'assets/players/mika.jpg', color: 'gold', team: 'Feierabendbier', teamAvatar: 'assets/teams/feierabendbier.png' },
    { name: 'Nollie', avatar: 'assets/players/nollie.jpg', color: 'gray', team: 'Kickflip', teamAvatar: 'assets/teams/kickflip.png' },
    { name: 'Ollie', avatar: 'assets/players/pape.jpg', color: 'gray', team: 'Kickflip', teamAvatar: 'assets/teams/kickflip.png' },
    { name: 'CoBuCop', avatar: 'assets/players/cobucop.jpg', color: 'red', team: '', teamAvatar: 'assets/bwm.webp' },
  ];

  users : User[] = [
    this.allUsers[18], this.allUsers[19], this.allUsers[24], this.allUsers[0], this.allUsers[1]
  ];
}
