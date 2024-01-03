import React from "react"

class Buttons extends React.Component {
   
    render() 
    {
     
        return (
            <div className="d-flex flex-row ">
                <button type="button" className="btn btncolor mx-2 mb-3 w-50 fw-bold" onClick={(e) => { this.props.handleFinalSubmit(e) }}  >Submit</button>
                <button type="button" className="btn btncolor mx-2 mb-3 w-50 fw-bold" onClick={(e) => { this.props.clearState(e) }}>Reset</button>
            </div>
        )
    }
}
export default Buttons