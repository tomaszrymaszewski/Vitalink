import './style.css'// src/main.js
import { patients } from './data';
import { PatientCard } from './PatientCard';

function renderPatients() {
    const app = document.getElementById('app');
    app.innerHTML = patients.map(patient => PatientCard({ patient })).join('');
}

renderPatients();

