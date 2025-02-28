import logo from './logo.svg';
import './App.css';

function App() {
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
  function func3(event, arg) {
		console.log(event, arg);
	}
  function func2(arg, event) {
		console.log(arg, event);
	}
  function handleClick(event) {
    console.log(event.target); 
  }
  function func(event) {
		console.log(event);
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
