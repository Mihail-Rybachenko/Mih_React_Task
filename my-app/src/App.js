import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid';
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const userss = [
    { id: uuidv4(), name: 'user1', age: 25 },
    { id: uuidv4(), name: 'user2', age: 30 },
    { id: uuidv4(), name: 'user3', age: 35 },
  ];
  const [numberInput, setNumberInput] = useState('');
  const [divisorMultiplicationResult, setDivisorMultiplicationResult] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [digitSum, setDigitSum] = useState(0);
  const currentDay = new Date().toISOString().split('T')[0]; // Текущая дата в формате yyyy-mm-dd
  const [startDate, setStartDate] = useState(currentDay);
  const [endDate, setEndDate] = useState(currentDay);
  const [daysGap, setDaysGap] = useState(0);
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [dayDifference, setDayDifference] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [calcResult, setCalcResult] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [temperatureF, setTemperatureF] = useState(0);
  const [userAge, setUserAge] = useState(0);
  const [inputText, setInputText] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [age3, setAge3] = useState(25);
  const [isBanned, setIsBanned] = useState(false);
  const [firstName, setFirstName] = useState('Anna');
  const [lastName, setLastName] = useState('Smith');
  const [name2] = useState('John');
  const [surname] = useState('Doe');
  const [age2] = useState(30);
  const str1 = 'text1';
	const str2 = 'text1';
  const name = 'user';
	const age  = '30';
  const arr = [1, 2, 3, 4, 5];
  const obj = {name: 'john', surname: 'smit'};
  const attr = 'block';
  const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;
  const items = <div><li>text1</li><li>text2</li><li>text3</li></div>;
  const isAdult = true;
  const isAdmin = true;
  const age1 = 19;
  let show = true;
  let admintext;
  let text;
  const average = (value3 + value4 + value5 + value6 + value7) / 5;
  const isAuth = true;
  const isAuth1 = false;
  const arr5 = [];
  const arr6 = ['a', 'b', 'c', 'd', 'e'];
  const arr7 = ['a', 'b', 'c', 'd', 'e'];
  const users = [
    {name: 'user1', surn: 'surn1', age: 30},
    {name: 'user2', surn: 'surn2', age: 31},
    {name: 'user3', surn: 'surn3', age: 32},
  ];
  const res4 = users.map(function(user) {
    return (
      <li key={user.id}>
        {user.name} {user.surn}, Age: {user.age}
      </li>
    );
  });
  const rows = users.map(function(user) {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.surn}</td>
        <td>{user.age}</td>
      </tr>
    );
  });
  const res3 = users.map(function(user, index) {
    return (
      <li key={index}>
        {user.name} {user.surn}, Age: {user.age}
      </li>
    );
  });
  const res = arr6.map(function(item) {
    return <li key={item}>{item}</li>;
  });
  const res1 = arr7.map(function(item, index) {
    return <li key={index}>{item}</li>;
  });
  for (let i = 1; i <= 5; i++) {
    arr5.push(<li key={i}>{i}</li>);
  }
  
  function func4(arg1, event, arg2) {
		console.log(arg1, event, arg2);
	}
  function handleSum() {
    setCalcResult(Number(num1) + Number(num2));
  }
  function onInputBlur() {
    const num = Number(numberInput);
    let result = 1;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        result *= i;
      }
    }
    setDivisorMultiplicationResult(result);
  }
  function handleMultiply() {
    setCalcResult(Number(num1) * Number(num2));
  }
  function func3(event, arg) {
		console.log(event, arg);
	}
  function func2(arg, event) {
		console.log(arg, event);
	}
  function handleInputBlur() {
    const totalSum = inputValue.split('').reduce((acc, digit) => acc + Number(digit), 0);
    setDigitSum(totalSum);
  }
  function computeDateDifference() {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = Math.abs(end - start);
    setDaysGap(Math.floor(timeDiff / (1000 * 3600 * 24)));
  }
  function calculateDateDifference() {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const timeDifference = Math.abs(d2 - d1);
    const dayCount = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    setDayDifference(dayCount);
  }
  function handleChange3(event) {
    setValue3(+event.target.value);
  }
  function handleChange4(event) {
    setValue4(+event.target.value);
  }
  function handleChange5(event) {
    setValue5(+event.target.value);
  }
  function handleChange6(event) {
    setValue6(+event.target.value);
  }
  function handleChange7(event) {
    setValue7(+event.target.value);
  }
  function handleClick(event) {
    console.log(event.target); 
  }
  function func(event) {
		console.log(event);
	}
  function handleInputChange(event) {
    setInputText(event.target.value);
  }
  function handleAgeChange(event) {
    setUserAge(event.target.value);
  }
  function handleTempChange(event) {
    setTemperatureF(event.target.value);
  }

  function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }
  function calculateBirthYear(age) {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
  }
  function show1() {
		alert(1);
	}
	
	function show2() {
		alert(2);
	}
  function show3() {
		alert(3);
	}
  function getDigitsSum(num) {
		let sum = 0;
		while (num > 0) {
			sum += num % 10;
			num = Math.floor(num / 10); 
		}
		return sum;
	}
  const sum = getDigitsSum(123);
  const sum1 = getDigitsSum(12345);
  if (age1 > 18){
    show = true;
  }
  else{
    show = false;
  }
  if (isAdmin) {
		admintext = <div><p>админ</p>админ<p></p>админ<p></p>админ<p>админ</p></div>;
	}

  if (isAdult) {
		text = <p>вам есть 18 лет</p>;
	}
  else{
    text = <p>Вам нет 18 лет</p>
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>7_1 hello my friends</code>
        </p>
        <p>
           <code>7_2 Добавление несколько абзацев</code>
        </p>
        <p class = 'class7-3'>
           <code>7_3 класс у параграфов</code>
        </p>
        <ul>
          <li>8_1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
        <ul>
      <li>9_1 return нужно взять в скобки</li>
			<li>text1</li>
			<li>text2</li>
			<li>text3</li>
		   </ul>
       <p>10_1</p>
       <>
			<ul>
				<li>text1</li>
				<li>text2</li>
				<li>text3</li>
			</ul>
			<ul>
				<li>text1</li>
				<li>text2</li>
				<li>text3</li>
			</ul>
		</>
    <p>11_1</p>
    <input />
    <p>12_1</p>
    <input />
    <input />
    <input />
    <p>13_1</p>
    <div>
		<p>{str1}</p>
		<p>{str2}</p>
	</div>
  <p>14_1</p>
  <div>
		name: {name}
    <p></p>
		age:  {age}
	</div>
  <p>15_1</p>
  <ul>
  <li>{arr[0]}</li>
  <li>{arr[1]}</li>
  <li>{arr[2]}</li>
  <li>{arr[3]}</li>
  <li>{arr[4]}</li>
  </ul>
  <p>16_1</p>
  <p>
  <span>{obj.name}</span>
  <br></br>
	<span>{obj.surname}</span>
</p>
<div id={attr}>
		17_1 text
	</div>
  <p>19_1</p>
  <ul>
  {li1}
  {li2}
  {li3}
  </ul>
  <p>20_1</p>
  {items}
  <div>
    <p>22_1</p>
    <input></input>
    <br></br>
    <input></input>
    <br></br>
    <input></input>
    <br></br>
    <input></input>
  </div>
  <p>23_1</p>
  <div>
  <ul>
          <li>8_1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
	</div>
  <p>23_2</p>
  <div>
			<table>
				<tbody>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
					</tr>
					<tr>
						<td>4</td>
						<td>5</td>
						<td>6</td>
					</tr>
					<tr>
						<td>7</td>
						<td>8</td>
						<td>9</td>
					</tr>
				</tbody>
			</table>
		</div>
    <p>24_1</p>
    <p>result: 9</p>
    <p>24_2</p>
    <p>john smit</p>
    <p>24_3</p>
    <p>result: 2</p>
    <p>26_1</p>
    <div>
		{text}
	</div>
  <p>27_1</p>
  <div>
		{admintext}
	</div>
	<p>28_1</p>
  <div>
		{show ? 'больше 18' : 'меньше 18'}
	</div>
  <p>29_1</p>
  <div>
		{isAuth && <p>вы авторизованы</p>}
	</div>
  <p>30_1</p>
  <div>
		{!isAuth1 && <p>text</p>}
    <p>31_1</p>
    <div>
		{sum}
	</div>
  <p>32_1</p>
  {sum1}
	</div>
  <p>33_1</p>
  <div>
		<button onClick={show1}>act1</button>
		<button onClick={show2}>act2</button>
	</div>
  <p>34_1</p>
  <div>
		<button onClick={show1}>act1</button>
		<button onClick={show2}>act2</button>
    <button onClick={show3}>act3</button>
	</div>
  <div>
  <p>35#1</p>
		<button onClick={func}>act</button>
	</div>
  <p>35#2</p>
    <button onClick={handleClick}>Кликни меня</button>
  <p>36#1</p>
  <p>Приведённый код создает компонент App, который включает кнопку. Когда кнопка нажимается, срабатывает обработчик события onClick. Этот обработчик передает в функцию func два аргумента:
первый аргумент — строка 'eee'
второй аргумент — объект события event, который содержит информацию о событии клика.
Обработчик события (onClick={event => func('eee', event)}) вызывает функцию func с передачей параметра 'eee' и объекта event.

Функция func затем выводит в консоль оба аргумента — строку 'eee' и объект события event.</p>
<p>36#2</p>
<div>
		<button onClick={func2.bind(null, 'eee')}>act</button>
</div>
<p>36#3</p>
<div>
		<button onClick={event => func3(event, 'eee')}>act</button>
</div>
<p>36#4</p>
<div>
		<button onClick={event => func4('first', event, 'third')}>act</button>
</div>
<p>38#1</p>
{arr5}
<p>39#1</p>
{res}
<p>40#1</p>
{res1}
<p>41#1</p>
{res3}
<p>42#1</p>
{res4}
<p>43#1</p>
<table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Возраст</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    <p>47-8#1 ID: {uuidv4()}</p>
    <p>47-8#2 ID: {nanoid()}</p>
    <p>49#1</p>
    {userss.map(user => (
  <p key={user.id}>{user.name}, {user.age}</p>
))}
<p>52#1</p>
   <div>
      <p>Имя: {name2}</p>
      <p>Фамилия: {surname}</p>
      <p>Возраст: {age2}</p>
    </div>
    <p>53#1</p>
    <div>
      <p>Имя: {firstName}</p>
      <p>Фамилия: {lastName}</p>

      
      <button onClick={() => setFirstName('Eva')}>Изменить имя</button>
      <button onClick={() => setLastName('Johnson')}>Изменить фамилию</button>
    </div>
    <p>54#1</p>
    <div>
      <p>{isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}</p>
      <button onClick={() => setIsBanned(true)}>Забанить</button>
      <button onClick={() => setIsBanned(false)}>Разбанить</button>
    </div>
    <p>54#2</p>
    <div>
      <p>{isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}</p>
      
      
      {isBanned ? (
        <button onClick={() => setIsBanned(false)}>Разбанить</button>
      ) : (
        
        <button onClick={() => setIsBanned(true)}>Забанить</button>
      )}
    </div>
    <p>55#1</p>
    <div>
      <p>Возраст: {age3}</p>
      <button onClick={() => setAge3(age3 + 1)}>Увеличить возраст</button>
      <button onClick={() => setAge3(age3 - 1)}>Уменьшить возраст</button>
    </div>
    <p>56#1</p>
    <div>
      <input 
        value={value1} 
        onChange={event => setValue1(event.target.value)} 
      />
      <p>Текст первого инпута: {value1}</p>

      <input 
        value={value2} 
        onChange={event => setValue2(event.target.value)} 
      />
      <p>Текст второго инпута: {value2}</p>
    </div>
    <p>57#1</p>
    <div>
      <input value={inputText} onChange={handleInputChange} />
      <p>Количество символов: {inputText.length}</p>
    </div>
    <p>58#1</p>
    <div>
      <input type="number" value={userAge} onChange={handleAgeChange} />
      <p>Ваш год рождения: {calculateBirthYear(userAge)}</p>
    </div>
    <p>58#2</p>
    <div>
      <input type="number" value={temperatureF} onChange={handleTempChange} />
      <p>{temperatureF}°F = {convertToCelsius(temperatureF).toFixed(2)}°C</p>
    </div>
    <p>59#1</p>
    <div>
      <input type="number" value={value3} onChange={handleChange3} />
      <input type="number" value={value4} onChange={handleChange4} />
      <input type="number" value={value5} onChange={handleChange5} />
      <input type="number" value={value6} onChange={handleChange6} />
      <input type="number" value={value7} onChange={handleChange7} />
      <p>Среднее арифметическое: {average}</p>
    </div>
    <p>60#1
    <div>
      <input value={num1} onChange={e => setNum1(e.target.value)} />
      <input value={num2} onChange={e => setNum2(e.target.value)} />
      <button onClick={handleSum}>Сумма</button>
      <button onClick={handleMultiply}>Произведение</button>
      <p>Результат: {calcResult}</p>
    </div>
    </p>
    <p>60#2</p>
    <div>
      <input type="date" value={date1} onChange={e => setDate1(e.target.value)} />
      <input type="date" value={date2} onChange={e => setDate2(e.target.value)} />
      <button onClick={calculateDateDifference}>Посчитать разницу</button>
      <p>Разница в днях: {dayDifference}</p>
    </div>
    <p>60#3</p>
    <div>
      <input type="date" value={startDate} onChange={event => setStartDate(event.target.value)} />
      <input type="date" value={endDate} onChange={event => setEndDate(event.target.value)} />
      
      <button onClick={computeDateDifference}>Вычислить разницу</button>
      
      <p>Разница в днях: {daysGap}</p>
    </div>
    <p>60#4</p>
    <div>
      <input type="number" value={inputValue} onChange={event => setInputValue(event.target.value)} onBlur={handleInputBlur} />
      <p>Сумма цифр: {digitSum}</p>
    </div>
    <p>60#5</p>
    <div>
      <input type="number" value={numberInput} onChange={event => setNumberInput(event.target.value)} onBlur={onInputBlur} />
      <p>Произведение делителей: {divisorMultiplicationResult}</p>
    </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
