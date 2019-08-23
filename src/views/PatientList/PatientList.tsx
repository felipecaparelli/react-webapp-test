import React, { Component } from 'react';
import { Patient } from '../../models/patient';
import { Link } from 'react-router-dom';

class PatientList extends Component {
  patients : Patient[] = [
    { patientId: 1, name: 'Felipe', surname: 'Caparelli', practitionerId: 1, diabetesType: 'A' },
    { patientId: 2, name: 'Rodrigo', surname: 'Balboa', practitionerId: 2, diabetesType: 'C' },
    { patientId: 3, name: 'Leonardo', surname: 'Andrade', practitionerId: 1, diabetesType: 'B' },
  ];

  constructor(props: Readonly<{}>) {
    super(props);
  }

  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.patients.length > 0 ? (
            this.patients.map((patient: Patient) => (
              <tr key={patient.patientId}>
                <td>{patient.name}</td>
                <td>{patient.surname}</td>
                <td>
                  <Link to={`/chart/${patient.patientId}`}>View</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No patient found</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default PatientList;
