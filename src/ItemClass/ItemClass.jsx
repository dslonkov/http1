import React from 'react';
import { nanoid } from 'nanoid';

// Класс элемента таблицы записей
export default class ItemClass {
  constructor(title, hoursGMT0, hoursDiff) {
    this.id = nanoid();
    this.title = title;
    this.hoursGMT0 = hoursGMT0;
    this.hoursDiff = hoursDiff;
  }
}
