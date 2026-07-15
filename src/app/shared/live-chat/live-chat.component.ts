import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './live-chat.component.html',
  styleUrl: './live-chat.component.scss'
})
export class LiveChatComponent {
  isOpen = false;
  isMinimized = false;
  messages: Array<{ text: string; isUser: boolean; timestamp: Date }> = [
    { text: 'Hello! How can I help you today?', isUser: false, timestamp: new Date() }
  ];
  newMessage = '';

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    this.isMinimized = false;
  }

  minimizeChat(): void {
    this.isMinimized = true;
  }

  closeChat(): void {
    this.isOpen = false;
    this.isMinimized = false;
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        isUser: true,
        timestamp: new Date()
      });
      
      // Simulate bot response
      setTimeout(() => {
        this.messages.push({
          text: 'Thank you for your message. Our team will assist you shortly.',
          isUser: false,
          timestamp: new Date()
        });
      }, 1000);
      
      this.newMessage = '';
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
