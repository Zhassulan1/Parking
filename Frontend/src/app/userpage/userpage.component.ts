import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.css'
})
export class UserpageComponent implements OnInit {
  userName: string = '';
  userPhone: string = '';
  userPhoneNumber: string = '';
  carType: string = '';
  carNumber: string = '';

// Payment Method Details
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  
  ngOnInit(): void {
    // Загрузить данные из localStorage при инициализации компонента
    this.loadData();
  }

  // Функция для сохранения данных в localStorage
  saveData(event: Event): void {
    event.preventDefault();  // Предотвратить перезагрузку страницы

    // Сохраняем данные в localStorage
    localStorage.setItem('userName', this.userName);
    localStorage.setItem('userPhone', this.userPhone);
    localStorage.setItem('userPhoneNumber', this.userPhoneNumber);
    localStorage.setItem('carType', this.carType);
    localStorage.setItem('carNumber', this.carNumber);
    localStorage.setItem('cardNumber', this.cardNumber);
    localStorage.setItem('expiryDate', this.expiryDate);
    localStorage.setItem('cvv', this.cvv);
    alert('Данные сохранены');
  }

  // Функция для загрузки данных из localStorage
  loadData(): void {
    // Получаем данные из localStorage, если они существуют
    this.userName = localStorage.getItem('userName') || '';
    this.userPhone = localStorage.getItem('userPhone') || '';
    this.userPhoneNumber = localStorage.getItem('userPhoneNumber') || '';
    this.carType = localStorage.getItem('carType') || '';
    this.carNumber = localStorage.getItem('carNumber') || '';
    this.cardNumber = localStorage.getItem('cardNumber') || '';
    this.expiryDate = localStorage.getItem('expiryDate') || '';
    this.cvv = localStorage.getItem('cvv') || '';
  }
}