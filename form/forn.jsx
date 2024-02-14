import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    text1: '',
    text2: '',
    email: '',
    password: '',
    checkbox: false,
    radio: '',
    dropdown: '',
    date: '',
    number: 0,
    color: '#000000'
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2>React Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Text 1:
            <input
              type="text"
              name="text1"
              value={formData.text1}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Text 2:
            <input
              type="text"
              name="text2"
              value={formData.text2}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Checkbox:
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Radio:
            <input
              type="radio"
              name="radio"
              value="option1"
              checked={formData.radio === 'option1'}
              onChange={handleChange}
            /> Option 1
            <input
              type="radio"
              name="radio"
              value="option2"
              checked={formData.radio === 'option2'}
              onChange={handleChange}
            /> Option 2
          </label>
        </div>
        <div>
          <label>
            Dropdown:
            <select
              name="dropdown"
              value={formData.dropdown}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Number:
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Color:
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
