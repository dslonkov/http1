import React, { useState } from 'react';
import moment from 'moment';

export default function Form(props) {
  const { form, onSubmit, onChange } = props;
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    (form.inputHoursDiff && form.inputHoursDiff) !== ''
      ? onSubmit()
      : alert('Заполните оба поля!');
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="form">
          <div className="formName">
            <label htmlFor="inputName">Название</label>
            <input
              name="inputName"
              type="text"
              placeholder="Название"
              value={form.inputName}
              onChange={handleChange}
            />
          </div>
          <div className="formTimezone">
            <label htmlFor="inputHoursDiff">Смещение в часах</label>
            <input
              name="inputHoursDiff"
              type="number"
              value={form.inputHoursDiff}
              onChange={handleChange}
              step="-1"
              placeholder="Смещение"
              min="-12"
              max="12"
            />
          </div>
          <div>
            <button type="submit">Добавить</button>
          </div>
        </div>
      </form>
    </>
  );
}
