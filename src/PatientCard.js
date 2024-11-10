function ConnectionStatus(isConnected) {
    if (isConnected) {
        return '<img src="../icons/wifi.svg" alt=""/>';
    } else {
        return '<img src="../icons/wifi_off.svg" alt=""/>';
    }
}

export function PatientCard({patient}) {
    return `
    <div class="patient-card">
      <div class="patient-info">
        ${ConnectionStatus(patient.isConnected)}
        <span class="name">${patient.name}</span><span class="id">${patient.id}</span>
      </div>
      <div class="patient-metrics">
        <div><img src="../icons/ecg_heart.svg" alt=""> ${patient.heartRate}</div>
        <div><img src="../icons/thermometer.svg" alt=""> ${patient.temperature}</div>
        <div><img src="../icons/blood_pressure.svg" alt=""> ${patient.pressure}</div>
        <div><img src="../icons/spo2.svg" alt=""> ${patient.saturation}</div>
      </div>
    </div>
  `;
}