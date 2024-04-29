import { Component } from "react"

class NumberInput extends Component {
    constructor(props) {
        super(props);

        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
    }
    handleInput1(e) {
       
        this.props.onHandleInput1(e.target.value);
    }
    handleInput2(e) {
      
        this.props.onHandleInput2(e.target.value);
    }

    render() {


        return (
            <>
                <div className="mb-3">
                    <label htmlFor="number1" className="form-label fw-bold ">Number 1</label>
                    <input type="number" className="form-control" id="number1" min="0" value={this.props.input1} onChange={(e) => this.handleInput1(e)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+' || evt.key === 'E') && evt.preventDefault()} required />
                </div>
                {!this.props.trigo && this.props.basic !== "Square" && this.props.basic !== "Cube" ? <div className="mb-3">
                    <label htmlFor="number2" className="form-label fw-bold">Number 2</label>
                    <input type="number" className="form-control" id="number2" min="0" value={this.props.input2} onChange={(e) => this.handleInput2(e)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+' || evt.key === 'E') && evt.preventDefault()} required />
                </div> : null}
            </>


        )
    }

}
export default NumberInput;
