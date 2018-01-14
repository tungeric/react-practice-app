import React from 'react';
import MedicationIndex from './MedicationIndex';

class PatientIndexItem extends React.Component {
  constructor() {
    super();
    this.state = {
      prescriptionList: []
    }
  }

  componentWillMount() {
    if(this.props.patient) {
      let patientId = this.props.patient.personalInfo.personId;
      let prescriptions = [];
      let endpoint = `https://private-211206-codingchallenge2.apiary-mock.com/persons/${patientId}/prescriptions`;
      fetch(endpoint)
        .then((blob) => blob.json())
        .then((data) => {
          prescriptions.push(...data.values);
        })
        .then(() => this.setState({ prescriptionList: prescriptions }));
    }
  }

  render() {
    let patient = this.props.patient;
    let personalInfo = patient.personalInfo;
    let address = patient.addresses[0]
    return (
      <div className="patient-info">
        <div className="patient-info-personal">
          <div className="patient-info-personal-left">
            <a>{personalInfo.name}</a>
            <a>DOB: {personalInfo.dob}</a>
            <a>{personalInfo.phoneNumber}</a>
          </div>
          <div className="patient-info-personal-right">
            <a>ADDRESS</a>
            <a>{address.streetAddress1}</a>
            <a>{address.city}, {address.usTerritory} {address.postalCode}</a>
          </div>
        </div>
        <MedicationIndex prescriptions={this.state.prescriptionList}/>
      </div>
    )
  }
}

export default PatientIndexItem;