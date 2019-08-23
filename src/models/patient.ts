export interface Patient {
    patientId: number;
    name: string;
    surname: string;
    dateOfBirth?: Date;
    practitionerId: number;
    diabetesType: string;
  }