import { useState } from "react";
import RadioButton from "./components/RadioButton";
import TrigoSelect from "./components/TrigoSelect";
import BasicSelect from "./components/BasicSelect";
import NumberInput from "./components/NumberInput";
import Buttons from "./components/Buttons";
import { Component } from "react";

class Calculator extends Component {
  constructor()
  {
    super()

    this.state = {
       trigo : false && [],
       basic : [],
       input1 : 0,
       input2 : 0,
       result : 0,
       remainder : 0,
       result1 : 0,
     }
     this.handleTrigoChange =this.handleTrigoChange.bind(this);
     this.onHandleBasicSelect =this.onHandleBasicSelect.bind(this);
     this.onHandleTrigoSelect = this.onHandleTrigoSelect.bind(this);
     this.onHandleInput1 = this.onHandleInput1.bind(this);
     this.onHandleInput2 = this.onHandleInput2.bind(this);
    }
    onHandleBasicSelect(value)
    {
      this.setState({basic : value});
     }
    handleTrigoChange(value) 
    {
      this.setState({ trigo: value });
    }
    onHandleTrigoSelect(value)
    {
      this.setState({trigo : value});
    }
    onHandleInput1(value)
    {
      this.setState({input1 : value});
    }
    onHandleInput2(value)
    {
      this.setState({input2 : value});
    }
     handleFinalSubmit = () =>  {
    let firstnum = Number(this.state.input1)
    let secondnum = Number(this.state.input2)
    console.log(firstnum,secondnum,"numbers");
    switch (this.state.basic) {
      case '1':
        this.setState({result : firstnum + secondnum});
        break;
      case '2':
        this.setState({result :firstnum - secondnum});
        break;
      case '3':
        this.setState({result : firstnum * secondnum});
        break;
      case '4':
        this.setState({result :(firstnum / secondnum).toFixed(3)});
        this.setState({ remainder : firstnum % secondnum});
        break;
      case '5':
        this.setState({ result : Math.pow(firstnum, secondnum)});
        break;
      case 'Square':
        this.setState({result : (firstnum) * (firstnum)});
        break;
      case 'Cube':
        this.setState({result : (firstnum) * (firstnum) * (firstnum)});
        break;
      default:
        console.log("select the basic operator");
        break;
    }
    switch (this.state.trigo) {
      case '1':
        this.setState({result1 : (Math.sin(firstnum / 57.2957795)).toFixed(3)});
        break;
      case '2':
        this.setState({result1 :(Math.cos(firstnum / 57.2957795)).toFixed(3)});
        break;
      case '3':
        this.setState({result1 :(Math.tan(firstnum / 57.2957795)).toFixed(3)});
        break;
      case '4':
        this.setState({result1 : (1 / Math.sin(firstnum / 57.2957795)).toFixed(3)});
        break;
      case '5':
        this.setState({result1 : (1 / Math.cos(firstnum / 57.2957795)).toFixed(3)});
        break;
      case '6':
        this.setState({result1 : (1 / Math.tan(firstnum / 57.2957795)).toFixed(3)});
        break;
      default:
        console.log("select the trigo operator");
        break;
    }
  }
      clearState = () => {
     this.setState({input1 : 0,input2 : 0 ,basic :  [], trigo : false && [],result : 0,result1 : 0})  
   }

  render() {
   
    console.log("main",this.state.trigo);
    let basic=this.state.basic;
    console.log(basic,"basic")
    let input1 = this.state.input1
    let input2 = this.state.input2
    console.log(input1,input2,"inputsmain");
    return (
    <div className="App ">
      <div className="container-fluid height ps-0">
        <div className="row">
          <div className="row d-flex justify-content-center mt-5">
            <div className="card p-3 ms-5 w-50 cardcolor ">
              <h5 className="text-center fw-bold  ">Calculator</h5>
              <RadioButton               
                trigo={this.state.trigo}
                onTrigoChange={this.handleTrigoChange}
              />
               {this.state.trigo ? <TrigoSelect
                trigo={this.state.trigo}
                onTrigoSelect ={this.onHandleTrigoSelect}
               
              />
                : <BasicSelect
                  basic={this.state.basic}
                  onBasicSelect ={this.onHandleBasicSelect}
                 
                />}
              <NumberInput
                input1 ={this.state.input1}
                input2 ={this.state.input2}
                basic ={this.state.basic}
                trigo ={this.state.trigo}
                onHandleInput1={this.onHandleInput1}
                onHandleInput2={this.onHandleInput2}
              />
             <Buttons
                handleFinalSubmit={this.handleFinalSubmit}
                clearState={this.clearState}
              />
              <div className="App pt-2">
                {!this.state.trigo ? (basic === '4' ? (<p className=" ms-2 pt-1 fw-bold">  Quotient :- {this.state.result} Remainder :- {this.state.remainder}</p>)
                  : <p className=" ms-2 pt-1 fw-bold"> Result is : {this.state.result} </p>)
                  :  (<p className=" ms-2 pt-1 fw-bold"> Result is : {this.state.result1} </p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
  }
}
export default Calculator
