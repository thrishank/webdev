class square extends React.component(){
    render(){
        return (
       <button className="square">
        {this.props.value}
       </button>
        ); 
    }
}