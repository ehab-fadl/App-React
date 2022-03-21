import axios from "axios";
import { Component } from "react";
import { Table,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';





class About extends Component{

constructor(props){
    super(props)
    this.state={
        Books:[]
    }
}
//THB//http://192.168.0.100:6555/api/books
componentDidMount(){
    axios.get('http://192.168.0.10:8888/api/books').then((response)=>this.setState({Books:response.data}))
}

    render(){
        return(
            <div>
            <div className="h1style"> <h1> Welcome to React Page</h1></div>
           <div>
<Table striped bordered hover variant="dark">
    <thead>
    <tr>
    <th>Title</th>
    <th>Author</th>
    <th>Number of Pages</th>
    <th>Publish date</th>
    <th>Download</th>
  </tr>
    </thead>
    <tbody>
    {this.state.Books.map((item,index)=>
  <tr key={index}>
    <td>{item.Tirle}</td>
    <td>{item.Author}</td>
    <td>{item.NumberOfPages}</td>
    <td>{item.PublishesAt}</td>
    <td><a href={item.Link}> <Button variant="warning">Download</Button></a></td>
   
  </tr>
    
    
  )}
  </tbody>
   </Table>
           </div>
</div>
           
        )
    }
}
export default About;