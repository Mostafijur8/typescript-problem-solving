type GeneralPatient = {
  name: string;
  age: number;
  type: "general";
};
type EmergencyPatient = {
  name: string;
  age: number;
  type: "emergency";
  emergencyLevel: 1 | 2 | 3;
};

function getPatientStatus(patient: GeneralPatient | EmergencyPatient): string {
  if (patient.type === "general") {
    return "General patient";
  } else if (patient.type === "emergency") {
    if (patient.emergencyLevel === 1) {
      return "Critical emergency";
    } else if (patient.emergencyLevel === 2) {
      return "serious emergency";
    }
  }
  return "Moderate emergency";
}

console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
// "General patient"

console.log(
  getPatientStatus({
    name: "Karim",
    age: 60,
    type: "emergency",
    emergencyLevel: 1,
  }),
);
// "Critical emergency"

console.log(
  getPatientStatus({
    name: "Hasan",
    age: 45,
    type: "emergency",
    emergencyLevel: 3,
  }),
);
// "Moderate emergency"
