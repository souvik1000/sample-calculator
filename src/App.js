import React, { useState } from 'react';
import './App.css';
import { Button, Flex } from 'antd';
import { ClearOutlined, CloseOutlined, DownloadOutlined, MinusOutlined, PercentageOutlined, PlusOutlined } from '@ant-design/icons';
// import IconButton from './Components/IconButton';

function App() {
  const [action, setAction] = useState();
  const [result, setResult] = useState('0');
  const [dataInProcess, setDataInProcess] = useState();

  const onClear = () => {
    setResult(prev =>
      prev === '0' && prev.length === 1
      ? '0'
      : prev.length > 1
      ? prev.substring(0, prev.length - 1)
      : '0'
    )
  }

  const onAllClear = () => {
    setAction()
    setResult('0')
    setDataInProcess()
  }

  const actionHandler = (act) => {
    if (action && result) {
      equalsHandler(act)
    } else if (action) {
      setAction(act)
    }  else {
      setDataInProcess(result)
      setResult('0')
      setAction(act)
    }
  }

  const onNumberPress = (num) => {
    const numStr = typeof num === 'number' ? num.toString() : num
    setResult((prev) => prev === '0' ? numStr : prev+numStr)
  }

  const actionCalc = (action, val1, val2) => {
    let currRes = 0

    if (action === '%') {
      currRes = (val1*val2)/100
    } else if (action === '+') {
      currRes = val1 + val2
    } else if (action === '-') {
      currRes = val1 - val2
    } else if (action === 'x') {
      currRes = val1 * val2
    } else if (action === '/') {
      currRes = val1 / val2
    }

    return currRes
  }

  const equalsHandler = (act) => {
    const resNum = Number(result)
    const dataInProcessNum = Number(dataInProcess)
    const currRes = actionCalc(action, dataInProcessNum, resNum)

    if (!act) {
      setAction()
      setResult(currRes)
      setDataInProcess()
    } else {
      setDataInProcess(currRes)
      setAction(act)
      setResult('0')
    }
  }

  return (
    <div className="app__wrapper">
      <div className="top-padding"></div>
      <div className="main-content">
        <div className='result'>
          <div>{dataInProcess}{action}</div>
          <div className="result-viewer">{result}</div>
        </div>
        <div className='calculation'>
          <Flex gap={12}>
            {/* <Flex className='calculator-number' gap={12}> */}
            <Flex gap={12} className='calc-action' vertical>
              <Flex gap={12}>
                <Button danger size='large' icon={<ClearOutlined />} onClick={onAllClear} />
                <Button danger size='large' onClick={onClear}>C</Button>
                <Button
                  size='large'
                  className='percentage'
                  icon={<PercentageOutlined />}
                  onClick={() => { actionHandler('%') }}
                />
              </Flex>
              {/* </Flex> */}
              <Flex gap={16} className='calculator-number'>
                <Button size='large' onClick={() => { onNumberPress(1) }}>1</Button>
                <Button size='large' onClick={() => { onNumberPress(2) }}>2</Button>
                <Button size='large' onClick={() => { onNumberPress(3) }}>3</Button>
              </Flex>
              <Flex gap={16} className='calculator-number'>
                <Button size='large' onClick={() => { onNumberPress(4) }}>4</Button>
                <Button size='large' onClick={() => { onNumberPress(5) }}>5</Button>
                <Button size='large' onClick={() => { onNumberPress(6) }}>6</Button>
              </Flex>
              <Flex gap={16} className='calculator-number'>
                <Button size='large' onClick={() => { onNumberPress(7) }}>7</Button>
                <Button size='large' onClick={() => { onNumberPress(8) }}>8</Button>
                <Button size='large' onClick={() => { onNumberPress(9) }}>9</Button>
              </Flex>
            </Flex>
            <Flex gap={12} vertical>
              <Button onClick={() => { actionHandler('/') }} icon={<MinusOutlined className='divide' />} size='large' />
              <Button onClick={() => { actionHandler('x') }} icon={<CloseOutlined />} size='large' />
              <Button onClick={() => { actionHandler('-') }} icon={<MinusOutlined />} size='large' />
              <Button onClick={() => { actionHandler('+') }} icon={<PlusOutlined />} size='large' />
            </Flex>
          </Flex>
          <Flex gap={16} className='calculator-number'>
            <Button className='number' size='large' onClick={() => { onNumberPress(0) }}>0</Button>
            <Button className='number' size='large' onClick={() => { onNumberPress('.') }}>.</Button>
            <Button className="equal" size='large' onClick={() => equalsHandler() }>=</Button>
          </Flex>
        </div>
      </div>
    </div>
  );
}

export default App;
