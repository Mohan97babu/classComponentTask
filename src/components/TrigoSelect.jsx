import { Component } from "react";
// const TrigoSelect = ({ trigo, setTrigo }) => {
//     const trigooption = [
//       { label: "Select An Operator", value: " ", },
//       { label: "Sin ", value: "1",},
//       { label: "Cos", value: "2",},
//       { label: "Tan", value: "3", },
//       { label: "Cosec",value: "4", },
//       { label: "Sec", value: "5", },
//       { label: "Cot", value: "6", },
//     ];
//     const handleTrigoSelect = (e) => {
//       { setTrigo(e.target.value) }
//     }
//     return (
//       <>
//          <label htmlFor="trigoselect" className="form-label fw-bold">Trigonometry Functions</label>
//          <select className="form-select mb-3" value={trigo} id="trigoselect" onChange={(e) => handleTrigoSelect(e)} aria-label="Default select example" required>
//           {trigooption.map((option,index) =>
//           {
//             return <option value={option.value} key={index}>{option.label}</option>
//           })}
//         </select>  
//       </>
//     )
//   }


//   export default TrigoSelect;
  class TrigoSelect extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            trigo : this.props.trigo
        }
        this.handleTrigoSelect = this.handleTrigoSelect.bind(this)
    }
    handleTrigoSelect (e)  {
       this.setState({trigo : e.target.value});
       this.props.onTrigoSelect(e.target.value);
    }
    trigooption = [
      { label: "Select An Operator", value: " ", },
      { label: "Sin ", value: "1",},
      { label: "Cos", value: "2",},
      { label: "Tan", value: "3", },
      { label: "Cosec",value: "4", },
      { label: "Sec", value: "5", },
      { label: "Cot", value: "6", },
    ];
    render()
    {
        const {trigo} = this.state;
    console.log(trigo,"trigovalue")
  return (
    
        <>
           <label htmlFor="trigoselect" className="form-label fw-bold">Trigonometry Functions</label>
           <select className="form-select mb-3" value={trigo} id="trigoselect" onChange={(e) => this.handleTrigoSelect(e)} aria-label="Default select example" required>
            {this.trigooption.map((option,index) =>
            {
              return <option value={option.value} key={index}>{option.label}</option>
            })}
          </select>  
        </>
      )
  
}
  }
  
 export default TrigoSelect;