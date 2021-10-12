# 시작 1일차

1. npx 설치 npx 설치 명령어 : npm install npx -g

2. typescript 설치설치 명령어 : npx create-react-app myfront --template=typescript

3. Githud 연결 및 소스 업로드

- git init
- New repository
- git remote add origin
- git add .

---

# 2일차

<ol>
   <li>.tsx에 작성하</li>
   <li>ㅇㅇ</li>
   <li>ㅇㅇ</li>
</ol>

---

# 3일차

1. useState 사용

   1. String

   - const [firstString, setFirstString] = useState('');

   2. Number

   - const [secondNumber, setSecondNumber] = useState(0);

2. State 랜더링하기

   firstString: {firstString}

3. 함수 만들기  
   const handleButtonClick = () => { console.log('click'); setAbc('잘자'); };

4. if

   const numberButtonClickEqal = () => { setSecondNumber(Number(secondString));  
   let tmpSecondNumber: number = Number(secondString); //1.resultNumber에 결과값 넣고싶음 //2.결과값 = 더하기, 빼기, 나누기, 곱하기 // 더하기 = firstNumber + secondNumber // if (operatorString === '+') { setResultNumber(firstNumber + tmpSecondNumber); console.log('여기는 플러스'); } else if (operatorString === '-') { setResultNumber(firstNumber - tmpSecondNumber); } else if (operatorString === '_') { setResultNumber(firstNumber _ tmpSecondNumber); } else if (operatorString === '/') { setResultNumber(firstNumber / tmpSecondNumber); } };

---

#4일차

1. material ui import하기  
   yarn add @mui/material

2. yarn add @emotion/react 설치

3. yarn add @emotion/styled 설치

4. button -> material ui Button으로 변경

5. 함수 선언 후 map

const arr = [1, 2, 3, 4]; arr.map((miyeon) => { // console.log('hrere'); // console.log(miyeon); });
