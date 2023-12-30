import { Component } from "react";
// const RadioButton = (props) => {
//     return (
//       <div className="radios">
//         <div className="form-check" >
//           <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => {
//             { props.setTrigo(false) }
//           }} checked = {!props.trigo} />
//           <label className="form-check-label fw-bold  " htmlFor="flexRadioDefault1">
//             Basic Operators
//           </label>
//         </div>
//         <div className="form-check">
//           <input className="form-check-input" type="radio" name="flexRadioDefault" id="trigo" onClick={() => {
//             { props.setTrigo(true) }
//           }} checked={props.trigo} />
//           <label className="form-check-label fw-bold " htmlFor="trigo">
//             Trigonometry Functions
//           </label>
//         </div>
//       </div>
//     )


//   }
class RadioButton extends Component{
    constructor(props)
    {
        super(props);
        this.state ={
            trigo : this.props.trigo
        };
        this.falsechange = this.falsechange.bind(this);
       this.truechange = this.truechange.bind(this);
    }
    
    falsechange () {
        this.setState({trigo:false})
    }
    truechange ()  {
        this.setState({trigo:true})
    }
   render()
   {
    const {trigo} = this.state;
    console.log(trigo,"booltrigo")
    return (
        <div className="radios">
               <div className="form-check" >
                 <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick= { () =>{this.falsechange();this.props.onTrigoChange(false);} } 
                 checked = {!trigo} 
                 />
                 <label className="form-check-label fw-bold  " htmlFor="flexRadioDefault1">
                   Basic Operators
                 </label>
               </div>
               <div className="form-check">
                 <input className="form-check-input" type="radio" name="flexRadioDefault" id="trigo" onClick={ () =>{this.truechange(); this.props.onTrigoChange(true);} } 
                 checked={trigo}
                  />
                 <label className="form-check-label fw-bold " htmlFor="trigo">
                   Trigonometry Functions
                 </label>
               </div>
             </div>
    )
   }
}
  export default RadioButton;