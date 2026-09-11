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
  ],
  adoption: [
    {
      id: 1,
      name: "Pipoca",
      species: "Cão",
      breed: "Beagle Mix (SRD)",
      age: "1 ano",
      gender: "Fêmea",
      size: "Porte Médio",
      status: "Disponível",
      image: "images/adoption/pipoca.jpg",
      description: "Dócil, brincalhona, vacinada e castrada."
    },
    {
      id: 2,
      name: "Thor",
      species: "Cão",
      breed: "Golden Retriever Mix",
      age: "2 anos",
      gender: "Macho",
      size: "Porte Grande",
      status: "Disponível",
      image: "images/adoption/thor.jpg",
      description: "Amoroso, sociável com crianças e outros cães."
    },
    {
      id: 3,
      name: "Mia",
      species: "Gato",
      breed: "Frajola",
      age: "1 ano",
      gender: "Fêmea",
      size: "Porte Pequeno",
      status: "Disponível",
      image: "images/adoption/mia.jpg",
      description: "Calma, carinhosa, já castrada e vacinada."
    },
    {
      id: 4,
      name: "Bob",
      species: "Cão",
      breed: "Vira-lata Caramelo",
      age: "3 anos",
      gender: "Macho",
      size: "Porte Médio",
      status: "Disponível",
      image: "images/adoption/bob.jpg",
      description: "Muito leal, companheiro e adora passeios ao ar livre."
    },
    {
      id: 5,
      name: "Luna",
      species: "Gato",
      breed: "Tricolor (Calico)",
      age: "7 meses",
      gender: "Fêmea",
      size: "Porte Pequeno",
      status: "Em processo",
      image: "images/adoption/luna.jpg",
      description: "Filhotinha curiosa, muito ativa e cheia de energia."
    },
    {
      id: 6,
      name: "Simba",
      species: "Gato",
      breed: "Gato Laranja (Tabby)",
      age: "2 anos",
      gender: "Macho",
      size: "Porte Médio",
      status: "Disponível",
      image: "images/adoption/simba.jpg",
      description: "Super ronronento, adora colinho e sonecas ao sol."
    },
    {
      id: 7,
      name: "Mel",
      species: "Cão",
      breed: "Maltês / Poodle",
      age: "4 anos",
      gender: "Fêmea",
      size: "Porte Pequeno",
      status: "Disponível",
      image: "images/adoption/mel.jpg",
      description: "Porte pequeno ideal para apartamento, dócil e afetuosa."
    },
    {
      id: 8,
      name: "Chico",
      species: "Cão",
      breed: "Pastor Alemão Mix",
      age: "2 anos",
      gender: "Macho",
      size: "Porte Grande",
      status: "Disponível",
      image: "images/adoption/chico.jpg",
      description: "Excelente cão companheiro, leal, inteligente e obediente."
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

// Current filter and search state for adoption
let currentAdoptionFilter = 'all';
let currentAdoptionSearch = '';

// Toast notification helper
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

// Open adopt interest modal
function openAdoptInterestModal(animal) {
  const modal = document.getElementById('modal-adopt-interest');
  const modalBody = document.getElementById('modal-adopt-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="display: flex; gap: var(--space-16); align-items: center; margin-bottom: var(--space-20); background-color: #f8fafc; padding: var(--space-16); border-radius: var(--radius-lg); border: 1px solid var(--color-card-border);">
      <img src="${animal.image}" alt="${animal.name}" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 3px solid var(--color-primary);">
      <div>
        <h4 style="margin: 0 0 4px 0; font-size: var(--font-size-lg); font-weight: 600;">${animal.name}</h4>
        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-text-secondary);">${animal.species} • ${animal.breed} • ${animal.age}</p>
        <span class="badge ${animal.status === 'Disponível' ? 'badge-success' : 'badge-warning'}" style="margin-top: 6px; display: inline-block;">${animal.status}</span>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Seu Nome Completo *</label>
      <input type="text" class="form-control" id="adopt-user-name" required placeholder="Ex: Maria Clara">
    </div>
    <div class="form-row" style="display: flex; gap: var(--space-12);">
      <div class="form-group" style="flex: 1;">
        <label class="form-label">Telefone / WhatsApp *</label>
        <input type="tel" class="form-control" id="adopt-user-phone" required placeholder="(11) 99999-9999">
      </div>
      <div class="form-group" style="flex: 1;">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" id="adopt-user-email" placeholder="seu@email.com">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Mensagem ou Perguntas (opcional)</label>
      <textarea class="form-control" id="adopt-user-msg" rows="2" placeholder="Ex: Gostaria de saber mais sobre o temperamento e agendar uma visita."></textarea>
    </div>
  `;

  modal.classList.add('active');
}

// Populate adoption grid using patient-card structure with real animal photos
function populateAdoptionGrid() {
  const container = document.getElementById('adoption-grid');
  if (!container) return;
  container.innerHTML = '';
  
  const filtered = data.adoption.filter(animal => {
    const matchesFilter = currentAdoptionFilter === 'all' || animal.species.toLowerCase() === currentAdoptionFilter.toLowerCase();
    const searchLower = currentAdoptionSearch.toLowerCase().trim();
    const matchesSearch = !searchLower || 
      animal.name.toLowerCase().includes(searchLower) ||
      animal.breed.toLowerCase().includes(searchLower) ||
      animal.species.toLowerCase().includes(searchLower) ||
      animal.description.toLowerCase().includes(searchLower);
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-32); color: var(--color-text-secondary);">
        <i class="fas fa-search" style="font-size: 36px; margin-bottom: var(--space-12); opacity: 0.5;"></i>
        <p>Nenhum animal encontrado para a busca realizada.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(animal => {
    const card = document.createElement('div');
    card.className = 'patient-card adoption-card';
    const badgeClass = animal.status === 'Disponível' ? 'badge-success' : 'badge-warning';
    
    card.innerHTML = `
      <div class="patient-photo-wrapper">
        <img src="${animal.image}" alt="${animal.name}" class="patient-photo" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400';">
        <span class="adoption-badge ${badgeClass}">${animal.status}</span>
      </div>
      <h4>${animal.name}</h4>
      <p><strong>${animal.species}</strong> - ${animal.breed}</p>
      <p><i class="fas fa-calendar-alt"></i> ${animal.age} • <i class="fas fa-venus-mars"></i> ${animal.gender} (${animal.size})</p>
      <p class="adoption-desc">${animal.description}</p>
      <div class="adoption-card-actions">
        <button class="btn btn-sm btn-primary btn-adopt" data-id="${animal.id}">
          <i class="fas fa-heart"></i> Quero Adotar
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  // Attach click events to "Quero Adotar" buttons
  container.querySelectorAll('.btn-adopt').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const animalId = parseInt(btn.getAttribute('data-id'), 10);
      const animal = data.adoption.find(a => a.id === animalId);
      if (animal) {
        openAdoptInterestModal(animal);
      }
    });
  });
}

// Setup Adoption Event Listeners
function setupAdoptionEvents() {
  // Filter buttons
  const filterBtns = document.querySelectorAll('#adoption-filters button');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAdoptionFilter = btn.getAttribute('data-filter');
      populateAdoptionGrid();
    });
  });

  // Search input
  const searchInput = document.getElementById('adoption-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentAdoptionSearch = e.target.value;
      populateAdoptionGrid();
    });
  }

  // Modal: Add Animal
  const btnOpenAddModal = document.getElementById('btn-open-adoption-modal');
  const modalAdd = document.getElementById('modal-add-animal');
  const btnCloseAddModal = document.getElementById('modal-close-btn');
  const btnCancelAddModal = document.getElementById('modal-cancel-btn');
  const formAddAnimal = document.getElementById('form-add-animal');

  if (btnOpenAddModal && modalAdd) {
    btnOpenAddModal.addEventListener('click', () => {
      modalAdd.classList.add('active');
    });
  }

  const closeAddModal = () => {
    if (modalAdd) {
      modalAdd.classList.remove('active');
      if (formAddAnimal) formAddAnimal.reset();
    }
  };

  if (btnCloseAddModal) btnCloseAddModal.addEventListener('click', closeAddModal);
  if (btnCancelAddModal) btnCancelAddModal.addEventListener('click', closeAddModal);

  if (formAddAnimal) {
    formAddAnimal.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('animal-name').value;
      const species = document.getElementById('animal-species').value;
      const gender = document.getElementById('animal-gender').value;
      const breed = document.getElementById('animal-breed').value;
      const age = document.getElementById('animal-age').value;
      const size = document.getElementById('animal-size').value;
      const status = document.getElementById('animal-status').value;
      let image = document.getElementById('animal-image').value.trim();
      const desc = document.getElementById('animal-desc').value.trim() || 'Animal saudável pronto para um lar amoroso.';

      if (!image) {
        image = species === 'Gato' ? 'images/adoption/simba.jpg' : 'images/adoption/pipoca.jpg';
      }

      const newAnimal = {
        id: Date.now(),
        name,
        species,
        breed,
        age,
        gender,
        size,
        status,
        image,
        description: desc
      };

      data.adoption.unshift(newAnimal);
      closeAddModal();
      populateAdoptionGrid();
      showToast(`${name} cadastrado(a) para adoção com sucesso!`);
    });
  }

  // Modal: Interest in Adoption
  const modalAdopt = document.getElementById('modal-adopt-interest');
  const btnCloseAdoptModal = document.getElementById('modal-adopt-close-btn');
  const btnCancelAdoptModal = document.getElementById('modal-adopt-cancel-btn');
  const formAdopt = document.getElementById('form-adopt-interest');

  const closeAdoptModal = () => {
    if (modalAdopt) modalAdopt.classList.remove('active');
  };

  if (btnCloseAdoptModal) btnCloseAdoptModal.addEventListener('click', closeAdoptModal);
  if (btnCancelAdoptModal) btnCancelAdoptModal.addEventListener('click', closeAdoptModal);

  if (formAdopt) {
    formAdopt.addEventListener('submit', (e) => {
      e.preventDefault();
      const userName = document.getElementById('adopt-user-name')?.value || 'Tutor';
      closeAdoptModal();
      showToast(`Obrigado, ${userName}! Seu interesse foi registrado. Entraremos em contato.`);
    });
  }

  // Close modals on overlay click
  [modalAdd, modalAdopt].forEach(m => {
    if (m) {
      m.addEventListener('click', (e) => {
        if (e.target === m) {
          m.classList.remove('active');
        }
      });
    }
  });
}

// Initialize app
function initApp() {
  populateAppointmentsTable();
  populateStockAlerts();
  populateUpcomingVaccines();
  populateAppointmentsList();
  populatePatientsGrid();
  populateTeamGrid();
  populateAdoptionGrid();
  setupAdoptionEvents();
  initializeCharts();
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}