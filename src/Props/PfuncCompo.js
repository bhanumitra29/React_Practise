import React, { Component } from "react";

// function PfuncCompo(props){
//     console.log(props.data);
//     return(
//         <div>
//             {/* {props.data} */}
//             <h1>This is Props</h1>
//         </div>
//     )
// }

// export default PfuncCompo;

class PfuncCompo extends Component{
    constructor(props){
        super(props)
        console.log(props.value2.data1)

    }

    render(){
        return(
            <>
            {this.props.value.data}
            {this.props.value2.data1.name}
            {this.props.value2.data1.age}

            </>
        )
    }
}

export default PfuncCompo ;