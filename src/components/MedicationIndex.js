import React from 'react';
import MedicationIndexItem from './MedicationIndexItem';

class MedicationIndex extends React.Component {
  constructor() {
    super();
    this.state={
      prescriptions: [],
      moreToggled: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMoreToggle = this.handleMoreToggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.prescriptions !== this.state.prescriptions) {
      this.setState({ prescriptions: nextProps.prescriptions });
    }
  }

  handleDelete(e) {
    e.preventDefault();
    console.log("PRESCRIPTIONS: ",this.state.prescriptions);
    console.log("INDEX REMOVED: ", parseInt(e.target.id));
    let prescriptions = this.state.prescriptions.slice();
    prescriptions.splice(parseInt(e.target.id), 1);
    this.setState({ prescriptions });
  }
  
  handleMoreToggle() {
    this.setState({ moreToggled: !this.state.moreToggled });
  }

  render() {
    let prescriptions = this.state.prescriptions.slice();
    let moreOrLessButton = "";
    if(this.state.moreToggled === false) {
      prescriptions = prescriptions.splice(0,3);
      moreOrLessButton = "MORE";
    } else {
      prescriptions = this.state.prescriptions;
      moreOrLessButton = "LESS";
    }
    console.log("PRESCRIPTIONS: ", prescriptions);
    return (
      <div className="prescription-index">
        <div className="prescription-title">
          <div className="prescription-index-left">
            <a className="medications-header">Medications</a>
            <a className="prescription-header">PRESCRIPTION</a>
          </div>
          <div className="prescription-index-right">
            <a>CURRENT STATUS</a>
          </div>
        </div>
        
        {
          prescriptions.map((prescription, idx) => {
            return (
              <div className="medication-item">
                <div className="medication-remove-x" id={idx} onClick={this.handleDelete}>X</div>
                <MedicationIndexItem prescription={prescription} idx={idx} />
              </div>
            );
          })
        }
        <div className="medication-more-toggle" onClick={this.handleMoreToggle}>
          <a>{moreOrLessButton}</a>
        </div>
      </div>
    )
  }
}

export default MedicationIndex;