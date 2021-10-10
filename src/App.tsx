import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, TextField } from '@mui/material';

function App() {
  const [abc, setAbc] = useState('화이팅');

  const [firstString, setFirstString] = useState('');
  const [secondString, setSecondString] = useState('');
  const [operatorString, setOperatorString] = useState('');
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [resultNumber, setResultNumber] = useState(0);

  const numberButtonClickMinus = () => {
    console.log('-');
    setOperatorString('-');
    setFirstNumber(Number(firstString));
  };
  const numberButtonClickPlus = () => {
    console.log('+');
    setOperatorString('+');
    setFirstNumber(Number(firstString));
  };
  const numberButtonClickDot = () => {
    console.log('.');
    setOperatorString('.');
    setFirstNumber(Number(firstString));
  };

  const numberButtonClickEqal = () => {
    setSecondNumber(Number(secondString));
    let tmpSecondNumber: number = Number(secondString);
    //1.resultNumber에 결과값 넣고싶음
    //2.결과값 = 더하기, 빼기, 나누기, 곱하기
    // 더하기 = firstNumber + secondNumber
    //
    if (operatorString === '+') {
      setResultNumber(firstNumber + tmpSecondNumber);
      console.log('여기는 플러스');
    } else if (operatorString === '-') {
      setResultNumber(firstNumber - tmpSecondNumber);
    } else if (operatorString === '*') {
      setResultNumber(firstNumber * tmpSecondNumber);
    } else if (operatorString === '/') {
      setResultNumber(firstNumber / tmpSecondNumber);
    }
  };
  const handleClear = () => {
    setFirstString('');
    setSecondString('');
    setOperatorString('');
    setFirstNumber(0);
    setSecondNumber(0);
    setResultNumber(0);
  };

  const buttonLoop = () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result: any = [];
    arr.map((miyeon, inx) => {
      console.log('inx', inx);
      result.push(
        <Button
          onClick={() => {
            rain(String(miyeon));
          }}
        >
          {miyeon}
        </Button>,
      );
      if (inx % 3 === 2) {
        result.push(<br />);
      }
    });
    return result;
    <Button
      onClick={() => {
        rain('9');
      }}
    >
      9
    </Button>;
  };

  const rain = (param: string) => {
    // for (let inx = 0; inx <= 5; inx++) {
    //   console.log(inx);
    // }
    if (operatorString === '') {
      setFirstString(firstString + param);
    } else {
      setSecondString(secondString + param);
    }

    const arr = [1, 2, 3, 4];
    arr.map((miyeon) => {
      // console.log('hrere');
      // console.log(miyeon);
    });
    arr.forEach((miyeon) => {
      // console.log('hrere2');
      // console.log(miyeon);
    });

    const ManagementRowData3 = [
      {
        System: '법인카드',
        Process: '한도증액',
        'Submission No': 'S2021072100001',
        'Submission Title': '법인카드 한도증액 3만불 이상 CFO승인 필수',
        Registrant: '김바다 bada2 kim',
        RegisterDept: '자금팀 123456',
        'Register Date': '2021-6-22',
        'Standard Authorization Matrix': '-',
        Status: '',
        'Due Date': '',
        'Target Cnt.': '84',
        'Confirm Cnt.': '80',
        'Hold Cnt.': 0,
        'Close Date': '',
      },
      {
        System: '법인카드',
        Process: '한도증액',
        'Submission No': 'S2021072100001',
        'Submission Title': '법인카드 한도증액 3만불 이상 CFO승인 필수',
        Registrant: '김바다 bada2 kim',
        RegisterDept: '자금팀 123456',
        'Register Date': '2021-6-22',
        'Standard Authorization Matrix': '-',
        Status: '',
        'Due Date': '',
        'Target Cnt.': '84',
        'Confirm Cnt.': '80',
        'Hold Cnt.': 0,
        'Close Date': '',
      },
      {
        System: '',
        Process: '한도증액',
        'Submission No': 'S2021072100001',
        'Submission Title': '법인카드 한도증액 3만불 이상 CFO승인 필수',
        Registrant: '김바다 bada2 kim',
        RegisterDept: '자금팀 123456',
        'Register Date': '2021-6-22',
        'Standard Authorization Matrix': '-',
        Status: '',
        'Due Date': '',
        'Target Cnt.': '84',
        'Confirm Cnt.': '80',
        'Hold Cnt.': 0,
        'Close Date': '',
      },
      {
        System: '',
        Process: '한도증액',
        'Submission No': 'S2021072100001',
        'Submission Title': '법인카드 한도증액 3만불 이상 CFO승인 필수',
        Registrant: '김바다 bada2 kim',
        RegisterDept: '자금팀 123456',
        'Register Date': '2021-6-22',
        'Standard Authorization Matrix': '-',
        Status: '',
        'Due Date': '',
        'Target Cnt.': '84',
        'Confirm Cnt.': '80',
        'Hold Cnt.': 0,
        'Close Date': '',
      },
      {
        System: '',
        Process: '한도증액',
        'Submission No': 'S2021072100001',
        'Submission Title': '법인카드 한도증액 3만불 이상 CFO승인 필수',
        Registrant: '김바다 bada2 kim',
        RegisterDept: '자금팀 123456',
        'Register Date': '2021-6-22',
        'Standard Authorization Matrix': '-',
        Status: '',
        'Due Date': '',
        'Target Cnt.': '84',
        'Confirm Cnt.': '80',
        'Hold Cnt.': 0,
        'Close Date': '',
      },
      {
        System: '',
        Process: '한도증액',
        'Submission No': 'S2021072100001',
        'Submission Title': '법인카드 한도증액 3만불 이상 CFO승인 필수',
        Registrant: '김바다 bada2 kim',
        RegisterDept: '자금팀 123456',
        'Register Date': '2021-6-22',
        'Standard Authorization Matrix': '-',
        Status: '',
        'Due Date': '',
        'Target Cnt.': '84',
        'Confirm Cnt.': '80',
        'Hold Cnt.': 0,
        'Close Date': '',
      },
    ];
    const MonitoringRowData2 = [
      {
        No: '1',
        Subsidiary: 'LGEKR',
        'Person in charge': '김시내 sinae3.kim',
        Status: 'Confirmed',
        Comment: 'CFO Role 추가 및 기존 1개 전결을 금액으로 분리하여 1개 전결을 추가완료',
        'Confirm Date': '2021-07-22',
        Hold: 'N',
        'Hold Date': '',
      },
      {
        No: '2',
        Subsidiary: 'LGECH',
        'Person in charge': '장**',
        Status: 'Pending',
        Comment: '',
        'Confirm Date': '',
        Hold: '',
        'Hold Date': '',
      },
      {
        No: '3',
        Subsidiary: 'LGEUS',
        'Person in charge': 'James**',
        Status: 'Rejected',
        Comment: 'US 법인 예외 처리 요청',
        'Confirm Date': '2021-07-22',
        Hold: '',
        'Hold Date': '',
      },
      {
        No: '4',
        Subsidiary: 'LGEKR',
        'Person in charge': '김시내 sinae3.kim',
        Status: 'Confirmed',
        Comment: 'CFO Role 추가 및 기존 1개 전결을 금액으로 분리하여 1개 전결을 추가완료',
        'Confirm Date': '2021-07-22',
        Hold: 'N',
        'Hold Date': '',
      },
    ];
    MonitoringRowData2.map((miyeon, index) => {
      console.log('index:', index);
      console.log(miyeon.No);
    });
    // let miyeon;
    // console.log('***********************************');
    // console.log(miyeon);
  };

  return (
    <div className="row-wrapper">
      <div className="name">
        <span>계산기1</span>
      </div>
      {/* <input className="display" /> */}
      firstString: {firstString}
      <br />
      firstNumber: {firstNumber}
      <br />
      operatorString: {operatorString}
      <br />
      secondString: {secondString}
      <br />
      secondNumber: {secondNumber}
      <br />
      <TextField id="outlined-basic" value={resultNumber} label="resultNumber" variant="outlined" />
      <br />
      {buttonLoop()}
      <div className="row">
        <Button
          onClick={() => {
            rain('9');
          }}
        >
          9
        </Button>
        <Button
          onClick={() => {
            rain('8');
          }}
        >
          8
        </Button>
        <Button
          onClick={() => {
            rain('7');
          }}
        >
          7
        </Button>
        <Button>*</Button>
      </div>
      <div className="row">
        <Button
          onClick={() => {
            rain('6');
          }}
        >
          6
        </Button>
        <Button
          onClick={() => {
            rain('5');
          }}
        >
          5
        </Button>
        <Button
          onClick={() => {
            rain('4');
          }}
        >
          4
        </Button>
        <Button onClick={numberButtonClickPlus}>+</Button>
      </div>
      <div className="row">
        <Button
          onClick={() => {
            rain('3');
          }}
        >
          3
        </Button>
        <Button
          onClick={() => {
            rain('2');
          }}
        >
          2
        </Button>
        <Button
          onClick={() => {
            rain('1');
          }}
        >
          1
        </Button>
        <Button onClick={numberButtonClickMinus}>-</Button>
      </div>
      <div className="row">
        <Button
          onClick={() => {
            rain('0');
          }}
        ></Button>
        <Button onClick={numberButtonClickDot}>.</Button>
        <Button onClick={numberButtonClickEqal}>=</Button>
        <Button>/</Button>
      </div>
      <div>
        <Button className="clear-button" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </div>
  );
}

export default App;
