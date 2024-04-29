import { Table ,Modal} from "react-bootstrap";
import RadioButton from "./components/RadioButton";
import TrigoSelect from "./components/TrigoSelect";
import BasicSelect from "./components/BasicSelect";
import NumberInput from "./components/NumberInput";
import Buttons from "./components/Buttons";
import { Component } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";


class Calculator extends Component {
  constructor() {
    super()

    this.state = {
      trigo: false && "",
      basic: "",
      input1: 0,
      input2: 0,
      result: 0,
      remainder: 0,
      result1: 0,
      data: [],
      show: false,
      
    }
    this.handleTrigoChange = this.handleTrigoChange.bind(this);
    this.onHandleBasicSelect = this.onHandleBasicSelect.bind(this);
    this.onHandleTrigoSelect = this.onHandleTrigoSelect.bind(this);
    this.onHandleInput1 = this.onHandleInput1.bind(this);
    this.onHandleInput2 = this.onHandleInput2.bind(this);
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products")
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.log(err))
     
  }
  onHandleBasicSelect(value) {
    this.setState({ basic: value });
  }
  handleTrigoChange(value) {
    this.setState({ trigo: value });
  }
  onHandleTrigoSelect(value) {
    this.setState({ trigo: value });
  }
  onHandleInput1(value) {
    this.setState({ input1: value });
  }
  onHandleInput2(value) {
    this.setState({ input2: value });
  }
  handleFinalSubmit = () => {
    let firstnum = Number(this.state.input1)
    let secondnum = Number(this.state.input2)
    console.log(firstnum, secondnum, "numbers");
    switch (this.state.basic) {
      case '1':
        this.setState({ result: firstnum + secondnum });
        break;
      case '2':
        this.setState({ result: firstnum - secondnum });
        break;
      case '3':
        this.setState({ result: firstnum * secondnum });
        break;
      case '4':
        this.setState({ result: (firstnum / secondnum).toFixed(3) });
        this.setState({ remainder: firstnum % secondnum });
        break;
      case '5':
        this.setState({ result: Math.pow(firstnum, secondnum) });
        break;
      case 'Square':
        this.setState({ result: (firstnum) * (firstnum) });
        break;
      case 'Cube':
        this.setState({ result: (firstnum) * (firstnum) * (firstnum) });
        break;
      default:
        console.log("select the basic operator");
        break;
    }
    switch (this.state.trigo) {
      case '1':
        this.setState({ result1: (Math.sin(firstnum / 57.2957795)).toFixed(3) });
        break;
      case '2':
        this.setState({ result1: (Math.cos(firstnum / 57.2957795)).toFixed(3) });
        break;
      case '3':
        this.setState({ result1: (Math.tan(firstnum / 57.2957795)).toFixed(3) });
        break;
      case '4':
        this.setState({ result1: (1 / Math.sin(firstnum / 57.2957795)).toFixed(3) });
        break;
      case '5':
        this.setState({ result1: (1 / Math.cos(firstnum / 57.2957795)).toFixed(3) });
        break;
      case '6':
        this.setState({ result1: (1 / Math.tan(firstnum / 57.2957795)).toFixed(3) });
        break;
      default:
        console.log("select the trigo operator");
        break;
    }
  }
  clearState = () => {
    this.setState({ input1: 0, input2: 0, basic: "", trigo: false && "", result: 0, result1: 0 })
  }
  showModal = () => {
    this.setState({ show: true });
    
  }
  closeModal = () => {
    this.setState({ show: false })
  }
  

  render() {   
    return (
      <div className="App ">
        <div className="container-fluid  ps-0">
          <div className="row">
        <h4 className="text-center mt-3 "><Icon icon="line-md:moon-loop" color="#a2c579" width="35" height="35" />Moon Mart</h4>
            {/* <div className="row d-flex justify-content-center mt-5">
               <div className="card p-3 ms-5  cardcolor ">
                <h5 className="text-center fw-bold  ">Calculator</h5>
                <RadioButton
                  trigo={this.state.trigo}
                  onTrigoChange={this.handleTrigoChange}
                />
                {this.state.trigo ? <TrigoSelect
                  trigo={this.state.trigo}
                  onTrigoSelect={this.onHandleTrigoSelect}

                />
                  : <BasicSelect
                    basic={this.state.basic}
                    onBasicSelect={this.onHandleBasicSelect}

                  />}
                <NumberInput
                  input1={this.state.input1}
                  input2={this.state.input2}
                  basic={this.state.basic}
                  trigo={this.state.trigo}
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
                    : (<p className=" ms-2 pt-1 fw-bold"> Result is : {this.state.result1} </p>)}
                </div>
              </div> 
              
            </div> */}
            <div className="d-flex justify-content-center align-items-center mt-3">

              <div className="card p-3 cardcolor ">
                <div className="d-flex justify-content-between">

                  <span className="text-center mb-3 fs-5 fw-bold">Product list</span>
                  <button className="btn btn-primary mb-3 btncolor text-black" onClick={this.showModal}><Icon icon="bi:calculator-fill" className="mb-1"/> Calculator</button>
                </div>
                <Table striped bordered hover responsive >
                  <thead>
                    <tr>
                      <th className="fw-bold text-secondary">S.no.</th>
                      <th className="fw-bold text-secondary">Title</th>
                      <th className="fw-bold text-secondary">Category</th>
                      <th className="fw-bold text-secondary">Price</th>
                      <th className="fw-bold text-secondary">Rating</th>
                      <th className="fw-bold text-secondary">Stock</th>
                      {/* <td className="fw-bold text-secondary text-center">Actions</td> */}
                    </tr>
                  </thead>
                 <tbody>
                    {Array.isArray(this.state.data) && this.state.data.map((user, index) => {

                      return (
                        
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.title}</td>
                            <td>{user.category}</td>
                            <td> &#8377; {user.price}</td>
                            <td>{user.rating.rate}/ 5</td>
                            <td>{user.rating.count}</td>
                            
                          </tr>
                        
                      )
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <Modal show={this.state.show} onHide={this.closeModal} animation={false} >
            {/* <Modal.Header closeButton>
              <Modal.Title>Calculator</Modal.Title>
            </Modal.Header> */}
            <Modal.Body className="btncolor">
              <div className="card p-3   cardcolor ">
                <h5 className="text-center fw-bold  ">Calculator</h5>
                <RadioButton
                  trigo={this.state.trigo}
                  onTrigoChange={this.handleTrigoChange}
                />
                {this.state.trigo ? <TrigoSelect
                  trigo={this.state.trigo}
                  onTrigoSelect={this.onHandleTrigoSelect}

                />
                  : <BasicSelect
                    basic={this.state.basic}
                    onBasicSelect={this.onHandleBasicSelect}

                  />}
                <NumberInput
                  input1={this.state.input1}
                  input2={this.state.input2}
                  basic={this.state.basic}
                  trigo={this.state.trigo}
                  onHandleInput1={this.onHandleInput1}
                  onHandleInput2={this.onHandleInput2}
                />
                <Buttons
                  handleFinalSubmit={this.handleFinalSubmit}
                  clearState={this.clearState}
                />
                <div className="App pt-2">
                  {!this.state.trigo ? (this.state.basic === '4' ? (<p className=" ms-2 pt-1 fw-bold">  Quotient :- {this.state.result} Remainder :- {this.state.remainder}</p>)
                    : <p className=" ms-2 pt-1 fw-bold"> Result is : {this.state.result} </p>)
                    : (<p className=" ms-2 pt-1 fw-bold"> Result is : {this.state.result1} </p>)}
                </div>
              </div>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="secondary" className="btncolor" onClick={this.closeModal}>
                Close
              </Button>
              
            </Modal.Footer> */}
          </Modal>
        </div>
      </div>
    );
  }
}
export default Calculator
