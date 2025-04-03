// Initialize the map
const map = L.map('map').setView([8.4606, -11.7799], 8); // Sierra Leone coordinates

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add some markers for popular locations in Sierra Leone
const locations = [
    { name: "Freetown", coords: [8.484, -13.2299] },
    { name: "Bo", coords: [7.9647, -11.7383] },
    { name: "Kenema", coords: [7.8767, -11.1875] },
    { name: "Makeni", coords: [8.8833, -12.05] },
    { name: "Koidu", coords: [8.6439, -10.9717] }
];

locations.forEach(loc => {
    L.marker(loc.coords).addTo(map)
        .bindPopup(`<b>${loc.name}</b><br>Click for more info`);
});

// Mock data for our app
const mockData = {
    hotels: [
        { name: "Radisson Blu Mammy Yoko", location: "Freetown", price: "$150/night", rating: 4.5 },
        { name: "Country Lodge Complex", location: "Freetown", price: "$120/night", rating: 4.2 },
        { name: "The Place Resort", location: "Tokeh", price: "$200/night", rating: 4.7 },
        { name: "Lakka Beach Hotel", location: "Lakka", price: "$90/night", rating: 3.9 },
        { name: "Hotel Barmoi", location: "Freetown", price: "$80/night", rating: 3.8 }
    ],
    events: [
        { name: "Freetown Music Festival", date: "2023-12-15", location: "Freetown" },
        { name: "Sierra Leone Marathon", date: "2024-05-25", location: "Makeni" },
        { name: "Bunce Island Tour", date: "2023-11-10", location: "Freetown" },
        { name: "Tiwai Island Wildlife Tour", date: "2024-02-20", location: "Bo" },
        { name: "Lumley Beach Party", date: "2023-12-31", location: "Freetown" }
    ],
    carRentals: [
        { company: "Avis Sierra Leone", car: "Toyota RAV4", price: "$50/day" },
        { company: "Europcar SL", car: "Honda CR-V", price: "$45/day" },
        { company: "Hertz Sierra Leone", car: "Toyota Corolla", price: "$35/day" },
        { company: "Local Rentals SL", car: "Kia Rio", price: "$30/day" },
        { company: "Freetown Car Hire", car: "Mitsubishi Pajero", price: "$60/day" }
    ],
    housing: [
        { type: "Apartment", location: "Wilberforce", price: "$800/month", rooms: 2 },
        { type: "Villa", location: "Hill Station", price: "$1500/month", rooms: 4 },
        { type: "Studio", location: "Aberdeen", price: "$500/month", rooms: 1 },
        { type: "Townhouse", location: "Lumley", price: "$1200/month", rooms: 3 },
        { type: "Bungalow", location: "Congo Town", price: "$1000/month", rooms: 3 }
    ],
    translators: [
        { name: "Mohamed Bangura", languages: "English, Krio, Temne", rate: "$20/hour" },
        { name: "Fatmata Conteh", languages: "English, Mende, French", rate: "$25/hour" },
        { name: "Ibrahim Sesay", languages: "English, Krio, Limba", rate: "$18/hour" },
        { name: "Aminata Kamara", languages: "English, Susu, French", rate: "$22/hour" },
        { name: "Sorie Turay", languages: "English, Krio, Mandingo", rate: "$20/hour" }
    ]
};

// Authentication state
let isLoggedIn = false;

// DOM elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const authForm = document.getElementById('authForm');
const switchAuth = document.getElementById('switchAuth');
const modalTitle = document.getElementById('modalTitle');
const exploreBtn = document.getElementById('exploreBtn');

// Event listeners
loginBtn.addEventListener('click', () => {
    modalTitle.textContent = 'Login';
    authModal.classList.remove('hidden');
});

signupBtn.addEventListener('click', () => {
    modalTitle.textContent = 'Sign Up';
    authModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    authModal.classList.add('hidden');
});

switchAuth.addEventListener('click', (e) => {
    e.preventDefault();
    if (modalTitle.textContent === 'Login') {
        modalTitle.textContent = 'Sign Up';
    } else {
        modalTitle.textContent = 'Login';
    }
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simple auth simulation
    isLoggedIn = true;
    authModal.classList.add('hidden');
    updateUI();
});

exploreBtn.addEventListener('click', () => {
    // In a real app, this would navigate to the explore page
    alert('Explore feature coming soon!');
});

// Update UI based on auth state
function updateUI() {
    if (isLoggedIn) {
        loginBtn.textContent = 'Logout';
        signupBtn.classList.add('hidden');
        // Show user-specific content
    } else {
        loginBtn.textContent = 'Login';
        signupBtn.classList.remove('hidden');
    }
}