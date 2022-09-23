import './DataOnCanvasComponent.css';


class DataOnCanvasComponent extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    
    const { task } = this.props;  
      return (
        <div key='data-on-canvas-div'>
          <table key='data-on-canvas-table' className='DataOnCanvasTable'>
            <tbody>
            <tr>
              <td>Name: {task.attributes.name}</td>
            </tr>
            <tr>
                <td>CRM ID: {task.attributes.crmid}</td>
            </tr>
            <tr>
                <td>From: {task.attributes.from}</td>
            </tr>
            </tbody>
          </table>
          <br></br>    
        </div>  
      )
  }
}

export default DataOnCanvasComponent;