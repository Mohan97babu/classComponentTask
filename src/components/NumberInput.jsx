import { Component } from "react"
// const NumberInput = (props) => {
//     const handleInput1 = (e) => {
//         {props.setInput1(e.target.value) }
//     }
//     const handleInput2 =(e) =>
//     {
//        {props.setInput2(e.target.value)}
//     }
//     return (
//         <>
//             <div className="mb-3">
//                 <label htmlFor="number1" className="form-label fw-bold">Number 1</label>
//                 <input type="number" className="form-control" id="number1" min="0" value={props.input1} onChange={(e) => handleInput1(e)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+' || evt.key === 'E') && evt.preventDefault()} required />
//             </div> 
//              {!props.trigo && props.basic !=="Square" && props.basic !== "Cube"   ? <div className="mb-3">
//                 <label htmlFor="number2" className="form-label fw-bold">Number 2</label>
//                 <input type="number" className="form-control" id="number2" min="0" value={props.input2} onChange={(e) => handleInput2(e)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+' || evt.key === 'E') && evt.preventDefault()} required />
//             </div> : null}
//         </>
//     )
// }


// export default NumberInput;
class NumberInput extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            input1 : this.props.input1,
            input2 : this.props.input2,
            
        }
        this.handleInput1=this.handleInput1.bind(this);
        this.handleInput2=this.handleInput2.bind(this);
    }
    handleInput1(e) 
    {
        this.setState({input1 : e.target.value});
        this.props.onHandleInput1(e.target.value);
    }
     handleInput2 (e) 
    {
        this.setState({input2 : e.target.value});
        this.props.onHandleInput2(e.target.value);
    }
    render()
    {
        
        let input1 =this.state.input1;
        let input2 =this.state.input2;
       console.log(input1,input2 ,"inputs");
      
       return (
        <>
            <div className="mb-3">
                <label htmlFor="number1" className="form-label fw-bold">Number 1</label>
                <input type="number" className="form-control" id="number1" min="0" value={input1} onChange={(e) => this.handleInput1(e)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+' || evt.key === 'E') && evt.preventDefault()} required />
            </div> 
             {!this.props.trigo && this.props.basic !=="Square" && this.props.basic !== "Cube"   ? <div className="mb-3">
                <label htmlFor="number2" className="form-label fw-bold">Number 2</label>
                <input type="number" className="form-control" id="number2" min="0" value={input2} onChange={(e) => this.handleInput2(e)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+' || evt.key === 'E') && evt.preventDefault()} required />
            </div> : null}
        </>


       )
    }
    
}
export default NumberInput;
