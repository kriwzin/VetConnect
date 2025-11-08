// Sample data
const data = {
  appointments: [
    {
      time: "09:00",
      pet_name: "Rex",
      owner: "João Silva",
      vet: "Dra. Maria Santos",
      status: "Confirmado",
      service: "Consulta de Rotina"
    },
    {
      time: "10:30",
      pet_name: "Luna",
      owner: "Ana Costa",
      vet: "Dr. Pedro Oliveira",
      status: "Em andamento",
      service: "Vacinação"
    },
    {
      time: "14:00",
      pet_name: "Bob",
      owner: "Carlos Mendes",
      vet: "Dra. Maria Santos",
      status: "Aguardando",
      service: "Cirurgia"
    },
    {
      time: "16:00",
      pet_name: "Mia",
      owner: "Fernanda Lima",
      vet: "Dr. Pedro Oliveira",
      status: "Concluído",
      service: "Exame"
    }
  ],
  patients: [
    {
      name: "Rex",
      species: "Cão",
      breed: "Golden Retriever",
      owner: "João Silva",
      last_visit: "05/11/2025"
    },
    {
      name: "Luna",
      species: "Gato",
      breed: "Siamês",
      owner: "Ana Costa",
      last_visit: "07/11/2025"
    },
    {
      name: "Bob",
      species: "Cão",
      breed: "Poodle",
      owner: "Carlos Mendes",
      last_visit: "02/11/2025"
    },
    {
      name: "Mia",
      species: "Gato",
      breed: "Persa",
      owner: "Fernanda Lima",
      last_visit: "08/11/2025"
    },
    {
      name: "Thor",
      species: "Cão",
      breed: "Husky Siberiano",
      owner: "Ricardo Santos",
      last_visit: "01/11/2025"
    },
    {
      name: "Bella",
      species: "Gato",
      breed: "Maine Coon",
      owner: "Patricia Alves",
      last_visit: "03/11/2025"
    }
  ],
  stock_alerts: [
    {
      item: "Vacina Antirrábica",
      quantity: 5,
      min_level: 10,
      expiry: "15/12/2025"
    },
    {
      item: "Antibiótico XYZ",
      quantity: 3,
      min_level: 15,
      expiry: "20/01/2026"
    }
  ],
  upcoming_vaccines: [
    {
      pet: "Rex",
      vaccine: "V10",
      date: "15/11/2025"
    },
    {
      pet: "Bella",
      vaccine: "Antirrábica",
      date: "20/11/2025"
    }
  ],
  team: [
    {
      name: "Dra. Maria Santos",
      role: "Veterinária",
      specialty: "Cirurgia"
    },
    {
      name: "Dr. Pedro Oliveira",
      role: "Veterinário",
      specialty: "Clínica Geral"
    },
    {
      name: "Julia Ferreira",
      role: "Assistente Veterinária",
      specialty: "Atendimento"
    },
    {
      name: "Carlos Souza",
      role: "Veterinário",
      specialty: "Ortopedia"
    }
  ]
};

// Navigation
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Remove active class from all nav items
    navItems.forEach(nav => nav.classList.remove('active'));
    
    // Add active class to clicked item
    item.classList.add('active');
    
    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const pageId = item.getAttribute('data-page');
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
      targetPage.classList.add('active');
    }
  });
});

// Function to get status badge class
function getStatusBadgeClass(status) {
  const statusMap = {
    'Confirmado': 'badge-info',
    'Em andamento': 'badge-warning',
    'Concluído': 'badge-success',
    'Aguardando': 'badge-info'
  };
  return statusMap[status] || 'badge-info';
}

// Populate appointments table
function populateAppointmentsTable() {
  const tbody = document.getElementById('appointments-tbody');
  tbody.innerHTML = '';
  
  data.appointments.forEach(apt => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${apt.time}</strong></td>
      <td>${apt.pet_name}</td>
      <td>${apt.owner}</td>
      <td>${apt.vet}</td>
      <td><span class="badge ${getStatusBadgeClass(apt.status)}">${apt.status}</span></td>
      <td>
        <div class="action-buttons">
          <button class="action-btn" title="Visualizar">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn" title="Editar">
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Populate stock alerts
function populateStockAlerts() {
  const container = document.getElementById('stock-alerts');
  container.innerHTML = '';
  
  data.stock_alerts.forEach(alert => {
    const alertItem = document.createElement('div');
    alertItem.className = 'alert-item';
    alertItem.innerHTML = `
      <h4>${alert.item}</h4>
      <p>Quantidade: ${alert.quantity} (mín: ${alert.min_level})</p>
      <p>Validade: ${alert.expiry}</p>
    `;
    container.appendChild(alertItem);
  });
}

// Populate upcoming vaccines
function populateUpcomingVaccines() {
  const container = document.getElementById('vaccine-list');
  container.innerHTML = '';
  
  data.upcoming_vaccines.forEach(vaccine => {
    const vaccineItem = document.createElement('div');
    vaccineItem.className = 'vaccine-item';
    vaccineItem.innerHTML = `
      <div class="vaccine-info">
        <h4>${vaccine.pet}</h4>
        <p>${vaccine.vaccine}</p>
      </div>
      <span class="vaccine-date">${vaccine.date}</span>
    `;
    container.appendChild(vaccineItem);
  });
}

// Populate appointments list page
function populateAppointmentsList() {
  const container = document.getElementById('appointments-list');
  container.innerHTML = '';
  
  data.appointments.forEach(apt => {
    const card = document.createElement('div');
    card.className = 'appointment-card';
    card.innerHTML = `
      <div class="appointment-time">${apt.time}</div>
      <div class="appointment-details">
        <h4>${apt.pet_name}</h4>
        <p><i class="fas fa-user"></i> Tutor: ${apt.owner}</p>
        <p><i class="fas fa-user-md"></i> ${apt.vet}</p>
        <p><i class="fas fa-stethoscope"></i> ${apt.service}</p>
      </div>
      <span class="badge ${getStatusBadgeClass(apt.status)}">${apt.status}</span>
      <div class="action-buttons">
        <button class="action-btn" title="Editar">
          <i class="fas fa-edit"></i>
        </button>
        <button class="action-btn" title="Cancelar">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Populate patients grid
function populatePatientsGrid() {
  const container = document.getElementById('patients-grid');
  container.innerHTML = '';
  
  data.patients.forEach(patient => {
    const card = document.createElement('div');
    card.className = 'patient-card';
    card.innerHTML = `
      <div class="patient-avatar">
        <i class="fas fa-paw"></i>
      </div>
      <h4>${patient.name}</h4>
      <p><strong>${patient.species}</strong> - ${patient.breed}</p>
      <p><i class="fas fa-user"></i> ${patient.owner}</p>
      <p style="color: var(--color-text-secondary); font-size: var(--font-size-xs); margin-top: var(--space-8);">Última visita: ${patient.last_visit}</p>
    `;
    container.appendChild(card);
  });
}

// Populate team grid
function populateTeamGrid() {
  const container = document.getElementById('team-grid');
  container.innerHTML = '';
  
  data.team.forEach(member => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = `
      <div class="team-avatar">
        <i class="fas fa-user-md"></i>
      </div>
      <div class="team-info">
        <h4>${member.name}</h4>
        <p class="team-role">${member.role}</p>
        <p>Especialidade: ${member.specialty}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Initialize charts
function initializeCharts() {
  // Revenue Chart
  const revenueCtx = document.getElementById('revenueChart');
  if (revenueCtx) {
    new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Receita (R$)',
          data: [2500, 3200, 2800, 4100, 3800, 2200, 1500],
          borderColor: '#2ECC71',
          backgroundColor: 'rgba(46, 204, 113, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return 'R$ ' + value;
              }
            }
          }
        }
      }
    });
  }
  
  // Services Chart
  const servicesCtx = document.getElementById('servicesChart');
  if (servicesCtx) {
    new Chart(servicesCtx, {
      type: 'doughnut',
      data: {
        labels: ['Consultas', 'Vacinação', 'Cirurgia', 'Exames', 'Banho & Tosa'],
        datasets: [{
          data: [35, 25, 15, 15, 10],
          backgroundColor: [
            '#2ECC71',
            '#3498DB',
            '#E74C3C',
            '#F39C12',
            '#9B59B6'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}

// Initialize app
function initApp() {
  populateAppointmentsTable();
  populateStockAlerts();
  populateUpcomingVaccines();
  populateAppointmentsList();
  populatePatientsGrid();
  populateTeamGrid();
  initializeCharts();
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}