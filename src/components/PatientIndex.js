import React from 'react';
import PatientIndexItem from './PatientIndexItem';

class PatientIndex extends React.Component {
  constructor() {
    super();
  }

  render() {
    let patients = this.props.patients;
    return (
      <div className="patient-index">
        {
          patients.map((patient, idx) => {
            return(
              <PatientIndexItem patient={patient} idx={idx} />
            )
          })
        }
      </div>
    )
  }
}

export default PatientIndex;