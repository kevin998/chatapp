import { Component, OnInit } from '@angular/core';
import { MatList, MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { Service,ChatItem } from '../service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  standalone: true,
  imports: [MatListModule, MatIconModule, BrowserModule],
})
export class ChatWindowComponent implements OnInit {

  chatWindow: ChatItem[] = [];

  clearChat() {
    this.chatWindow = [];
  }

  ngOnInit() {
    this.service.data.subscribe((data) => {
      this.chatWindow.push(data)
    });
  }

  constructor(private service: Service) { }
}

