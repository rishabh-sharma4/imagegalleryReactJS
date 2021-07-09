import React from 'react';
import axios from 'axios';

class Component1 extends React.Component{
    constructor(props){
        super(props);   
        this.state={
            images:'',
            index:0,
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos/?_start=1&_limit=5')
        .then(res=>{
            console.log(res.data);
            this.setState({images:res.data});
            console.log(this.state);
        })
        
        
    }
    NextImage=()=>{
        //this.setState({index:(this.state.index+1) % this.state.images.length} )
        const NextIndex= this.state.index+1;
        if(NextIndex>(this.state.images.length-1))
        this.setState({index:0})
        else this.setState({index:NextIndex})
    }

    PreviousImage=()=>{
        const PreviousIndex= this.state.index-1;
        if(PreviousIndex<0)
        this.setState({index:(this.state.images.length-1)})
        else this.setState({index:PreviousIndex})

    }
    

    render(){
        
        return(
            <div>
               <input type="button" onClick={this.PreviousImage} value="Previous"/>
               <input type="button" onClick={this.NextImage} value="Next"/>
               {this.state.images ? 
                   
                   <div id="display"> 
                     <img src=
                     {this.state.images[this.state.index].url} alt="Could not load"/>
                   </div>
                   :
                   null
               }  
            </div>
        )
    }
}

export default Component1;