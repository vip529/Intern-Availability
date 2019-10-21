import React, { Component } from "react";
import Chart from "chart.js";

class AvailabilityChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interns: this.props.interns
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.plotHandler = this.plotHandler.bind(this);
    this.getDay = this.getDay.bind(this);
  }

  getDay = function(date) {
    var parts = date.split("/");
    var mydate = Number(parts[0]);

    return mydate;
  };

  plotHandler = function() {
    var items = this.state.interns;

    var sta = [];
    var endd = [];
    var startD = [];
    var endDate = [];
    var available = new Array(30);

    available.forEach(element => {
      available.push("false");
    });

    items.forEach(element => {
      sta.push(element.start);
      endd.push(element.end);
    });

    sta.forEach(element => {
      startD.push(this.getDay(element));
    });

    endd.forEach(element => {
      endDate.push(this.getDay(element));
    });

    console.log(startD);
    console.log(endDate);
    var ans = new Array(31);
    for (var i = 0; i < 31; i++) {
      ans[i] = 0;
    }
    for (var i = 0; i < startD.length; i++) {
      var temp = startD[i];
      var end = endDate[i];
      ans[temp]++;
      if (end !== 31) {
        ans[end + 1] += -1;
      }
    }
    var anss = 0;
    var final = [];
    for (var j = 1; j < 31; j++) {
      anss += ans[j];
      if (anss == 0) {
        final.push(j);
      }
    }
    console.log(ans);
    console.log(final);

    //var keys = this.getKeys();
    //console.log(keys)

    var ctx = "myChart";
    var chart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 1,
                y: 15
              },
              {
                x: 7,
                y: 15
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 26,
                y: 2
              },
              {
                x: 28,
                y: 2
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 9,
                y: 3
              },
              {
                x: 12,
                y: 3
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 10,
                y: 4
              },
              {
                x: 12,
                y: 4
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 17,
                y: 5
              },
              {
                x: 19,
                y: 5
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 27,
                y: 6
              },
              {
                x: 29,
                y: 6
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 13,
                y: 7
              },
              {
                x: 14,
                y: 7
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 29,
                y: 8
              },
              {
                x: 29,
                y: 8
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 7,
                y: 9
              },
              {
                x: 7,
                y: 9
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 10,
                y: 10
              },
              {
                x: 13,
                y: 10
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 11,
                y: 11
              },
              {
                x: 11,
                y: 11
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 9,
                y: 12
              },
              {
                x: 13,
                y: 12
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 28,
                y: 13
              },
              {
                x: 28,
                y: 13
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 20,
                y: 14
              },
              {
                x: 23,
                y: 14
              }
            ]
          },

          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 25,
                y: 15
              },
              {
                x: 27,
                y: 15
              }
            ]
          },
         
          {
            
            data: [50, 50, 50, 50],
            type: 'bar'
          },













          {
            backgroundColor: "#db887d",
            borderColor: "#db887d",
            fill: false,
            borderWidth: 15,
            pointRadius: 0,
            data: [
              {
                x: 25,
                y: 16
              },
              {
                x: 28,
                y: 16
              }
            ]
          }
        ]
      },

      options: {
        responsive: true,
        title: {
          display: true,
          position: "top",
          text: "Sep 2019",
          fontSize: 12,
          fontColor: "#5D8CAE",
          fontStyle: "normal"
        },

        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              type: "linear",
              position: "top",
              gridlines: {
                drawBorder: false
              },
              ticks: {
                min: 1,
                max:30,
                stepSize: 1
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                display: false,
                min: 0,
                max:16,
                stepSize: 1
              }
            }
          ]
        }
      }
    });
    return (
      <div  >
        <canvas id="myChart"></canvas>
      </div>
    );
  };

  clickHandler() {
    this.setState({
      interns: this.props.interns
    });
  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <div
          class="card text-center"
          style={{
            padding: "50px",
            marginLeft: "40px",
            marginBottom: "50px",
            marginRight: "40px",
            marginTop: "50px"
          }}
        >
          <div class="card-title">
            <h1 class="display-3">Chart</h1>
          </div>
          <div class="card-body center">
            <button onClick={this.clickHandler}>Check Availability</button>
            <div>{this.plotHandler()}</div>
            <div>{this.state.chart}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AvailabilityChart;
