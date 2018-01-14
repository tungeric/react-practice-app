import React from 'react';

class MedicationIndexItem extends React.Component {
  constructor() {
    super();
    this.state = {
      prescriptionList: []
    }
  }

  render() {
    let prescription = this.props.prescription;
    let status = "Waiting for patient purchase"
    if (prescription.rxPackageStatus.includes('delivered')) {
      status = `Delivered ${prescription.prescriptionFill.fillDate}`
    }
    return (
      <div className="prescription-info">
        <div className="prescription-info-left">
          <a className="medication-name">{prescription.medication.name}</a>
          <a>RX# {prescription.prescription.vendorPrescriptionId}</a>
        </div>
        <div className="prescription-info-right">
          <a>{status}</a>
        </div>
      </div>
    )
  }
}

export default MedicationIndexItem;