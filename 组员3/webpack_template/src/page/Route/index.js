import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Routte extends Component {
  constructor(props) {
    super(props);
     
   
    // this.unregisterLeaveHook = router.setRouteLeaveHook(
    //   route,
    //   this.routerWillLeave.bind(this)
    // );
  }

  componentWillMount() {
    //this.unregisterLeaveHook();
    console.log(this.props)
  }

  routerWillLeave(nextLocation) {
    console.log(nextLocation);
    return `Leave for next Location ${nextLocation.pathname}`;
  }


  componentDidMount() {

  }




  render() {
    return (
      <div>
        <h1>Routte</h1>
        {this.props.children}
      </div>
    )
  }
}

 
export default withRouter(Routte)