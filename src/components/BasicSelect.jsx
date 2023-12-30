import { Component } from "react";
// const BasicSelect = ({basic,setBasic}) =>
// {
//     const basicOption = [   
//     { label: "Select An Operator ", value: " ", },
//     { label: "Addition",value: "1", },
//     { label: "Subtraction", value: "2",},
//     { label: "Multiplication", value: "3",},
//     { label: "Division",value: "4",},
//     { label: "Power", value: "5", },
//     { label: "Square", value: "Square",},
//     { label: "Cube", value: "Cube",},
//   ];
//   const handleBasicSelect = (e) =>
//   {
//     {setBasic(e.target.value)}
//   }
//   return (
//     <>
//        <label htmlFor="basicselect" className="form-label fw-bold mt-3 " id="hideLabel1">Basic Operators</label> 
//       <select id="basicselect" value={basic} className="form-select mb-3" onChange={(e) => handleBasicSelect(e)} aria-label="Default select example" required>
//         {basicOption.map((option,index) =>
//         {
//          return <option value={option.value} key={index}>{option.label}</option>
//         })}


//       </select> 
//     </>
//   )
//     }
//     export default BasicSelect
class BasicSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basic: this.props.basic
        }
        this.handleBasicSelect = this.handleBasicSelect.bind(this)
    }
    handleBasicSelect (e)  
    {
        this.setState({ basic : e.target.value });
        this.props.onBasicSelect(e.target.value);
    }
    render() {
        const basicOption = [
            { label: "Select An Operator ", value: " ", },
            { label: "Addition", value: "1", },
            { label: "Subtraction", value: "2", },
            { label: "Multiplication", value: "3", },
            { label: "Division", value: "4", },
            { label: "Power", value: "5", },
            { label: "Square", value: "Square", },
            { label: "Cube", value: "Cube", },
        ];
        const {basic} = this.state;
        console.log(basic,"basic");
        return (
    
                <>
                    <label htmlFor="basicselect" className="form-label fw-bold mt-3 " id="hideLabel1">Basic Operators</label>
                    <select id="basicselect" value={basic} className="form-select mb-3" onChange={(e) => this.handleBasicSelect(e)} aria-label="Default select example" required>
                        {basicOption.map((option, index) => {
                            return <option value={option.value} key={index}>{option.label}</option>
                        })}
    
                    </select>
                </>
            );
    }
    }



export default BasicSelect