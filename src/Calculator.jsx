import { useState } from "react";
import RadioButton from "./components/RadioButton";
import TrigoSelect from "./components/TrigoSelect";
import BasicSelect from "./components/BasicSelect";
import NumberInput from "./components/NumberInput";
import Buttons from "./components/Buttons";
import { Component } from "react";

// const Calculator = () =>
// {
//  const [input1, setInput1] = useState([]);
//   const [input2, setInput2] = useState([]);
//   const [trigo, setTrigo] = useState([] && false);
//   const [basic, setBasic] = useState([]);
//   const [result, setResult] = useState([] && true);
//   const [result1, setResult1] = useState([]);
//   const [remainder, setRemainder] = useState([]);

//   const clearState = () => {
//     setInput1(' ')
//     setInput2('')
//     setTrigo('')
//     setBasic(' ')
//     setResult(' ')
//     setResult1('')
//   }

//   const handleFinalSubmit = () => {
//     let firstnum = Number(input1)
//     let secondnum = Number(input2)
//     switch (basic) {
//       case '1':
//         setResult(firstnum + secondnum);
//         break;
//       case '2':
//         setResult(firstnum - secondnum);
//         break;
//       case '3':
//         setResult(firstnum * secondnum);
//         break;
//       case '4':
//         setResult((firstnum / secondnum).toFixed(3));
//         setRemainder(firstnum % secondnum);
//         break;
//       case '5':
//         setResult(Math.pow(firstnum, secondnum));
//         break;
//       case 'Square':
//         setResult((firstnum) * (firstnum));
//         break;
//       case 'Cube':
//         setResult((firstnum) * (firstnum) * (firstnum));
//         break;
//       default:
//         console.log("select the basic operator");
//         break;
//     }
//     switch (trigo) {
//       case '1':
//         setResult1((Math.sin(firstnum / 57.2957795)).toFixed(3));
//         break;
//       case '2':
//         setResult1((Math.cos(firstnum / 57.2957795)).toFixed(3));
//         break;
//       case '3':
//         setResult1((Math.tan(firstnum / 57.2957795)).toFixed(3));
//         break;
//       case '4':
//         setResult1((1 / Math.sin(firstnum / 57.2957795)).toFixed(3));
//         break;
//       case '5':
//         setResult1((1 / Math.cos(firstnum / 57.2957795)).toFixed(3));
//         break;
//       case '6':
//         setResult1((1 / Math.tan(firstnum / 57.2957795)).toFixed(3));
//         break;
//       default:
//         console.log("select the trigo operator");
//         break;
//     }
//   }

//   return (
//     <div className="App ">
//       <div className="container-fluid height ps-0">
//         <div className="row">

//                 {/* <h5 className="pe-2 fw-bold textcolor2 mt-3 fs-4 text-center">Calculator</h5>                  */}

//             <div className="row d-flex justify-content-center mt-5">
//             <div className="card p-3 ms-5 w-50 cardcolor ">
//               <h5 className="text-center fw-bold ">Calculator</h5>
//               <RadioButton
//                 setTrigo={setTrigo}
//                 trigo={trigo}
//               />
//               {trigo ? <TrigoSelect
//                 trigo={trigo}
//                 setTrigo={setTrigo}
//               />
//                 : <BasicSelect
//                   basic={basic}
//                   setBasic={setBasic}
//                 />}
//               <NumberInput
//                 input1={input1}
//                 setInput1={setInput1}
//                 input2={input2}
//                 setInput2={setInput2}
//                 trigo={trigo}
//                 basic={basic}
//               />
//               <Buttons
//                 handleFinalSubmit={handleFinalSubmit}
//                 clearState={clearState}
//               />
//               <div className="bg-white pt-2">
//                 {!trigo ? (basic === '4' ? (<p className=" ms-2 pt-1 fw-bold">  Quotient :- {result} Remainder :- {remainder}</p>)
//                   : <p className=" ms-2 pt-1 fw-bold"> Result is:{result} </p>)
//                   : (result ? <p className=" ms-2 pt-1 fw-bold"> Result is:{result1} </p> : null)}
//               </div>
//             </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }
class Calculator extends Component {
  constructor()
  {
    super()

    this.state = {
       trigo : false && [],
       basic :true && [],
       input1 : 0,
       input2 : 0 ,
       result : null,
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
  render() {
    let trigo = this.state.trigo;
    console.log("main",trigo);
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
              <h5 className="text-center fw-bold ">Calculator</h5>
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
             {/* <Buttons
                handleFinalSubmit={handleFinalSubmit}
                clearState={clearState}
              />
              <div className="bg-white pt-2">
                {!trigo ? (basic === '4' ? (<p className=" ms-2 pt-1 fw-bold">  Quotient :- {result} Remainder :- {remainder}</p>)
                  : <p className=" ms-2 pt-1 fw-bold"> Result is:{result} </p>)
                  : (result ? <p className=" ms-2 pt-1 fw-bold"> Result is:{result1} </p> : null)}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
);
  }
}
export default Calculator
