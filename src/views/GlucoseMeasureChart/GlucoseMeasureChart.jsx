import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

class GlucoseMeasureChart extends Component {

  state = {
    patient: null
  };

  componentDidMount () {
    
    const { patientId } = this.props.match.params;

    /*fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('data:', data);
    })
    .catch(e => console.log(e));*/


    let file = require('../../data/data.json');
    let data = file.data;

    for (var i = 0; i < data.length; i++)
    {
      var obj = data[i];
      console.log("Name: " + obj.name + ", " + obj.surname);
      if(patientId === obj.patientId) {
        options.title = obj.fullname;
        this.setState({patient: obj});
      }

      // fix it 
      options.title = obj.fullname;
        this.setState({patient: obj});
    }

  
    /**/

    /*fetch(`https://api.twitter.com/user/${handle}`)
      .then((user) => {
        this.setState(() => ({ user }))
      })*/
  }

  // TODO set the patient name when entering

  render() {

    return (
      <div className="row">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    );
  }

}

export default GlucoseMeasureChart;
