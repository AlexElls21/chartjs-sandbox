import React from 'react';
import {Link} from 'react-router-dom';
import {Doughnut} from 'react-chartjs-2';



const LiveDemo = () => {
  const data = {
    labels: ['Nick', 'Ana', 'Beth', 'Eunbin', 'Fernando'],
    datasets: [
      {
        data: [23, 23, 22, 24, 24],
        backgroundColor: [
          '#424242',
          '#353535',
          '#000',
          'tomato',
          'dodgerblue'
        ],
        hoverBackgroundColor: '#FEFEFE'
    },
    {
      data: [23, 23, 22, 24, 24],
      backgroundColor: [
        '#424242',
        '#353535',
        '#000',
        'tomato',
        'dodgerblue'
      ],
      hoverBackgroundColor: '#FEFEFE'
  }
    ]
  }

  return (
    <main className="demo_wrapper">
    <header className="demo_header">
      <h1>react-chartjs-2</h1>
      <Link to="/">Home</Link>{' | '}
      <Link to="/async">Async</Link>{' | '}
      Static
      <p>I need a chart!!</p>
    </header>

    <Doughnut data={data} />

    </main>
  )
}

export default LiveDemo;
