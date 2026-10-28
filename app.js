const mockUsers = [
  { name: 'Amina', age: 24, county: 'Nairobi', bio: 'Love hiking Ngong Hills and Sheng vibes. Looking for genuine connections near Westlands.', photo: 'https://picsum.photos/400/500?random=1', distance: '2.1 km', interests: ['hiking', 'music'], tribe: 'Kikuyu', religion: 'Christian' },
  { name: 'John', age: 28, county: 'Mombasa', bio: 'Tech professional. Beach walks in Nyali, nyama choma, and coastal life.', photo: 'https://picsum.photos/400/500?random=2', distance: '4.8 km', interests: ['tech', 'food'], tribe: 'Swahili', religion: 'Muslim' },
  { name: 'Grace', age: 22, county: 'Kisumu', bio: 'Student mode: lakeside sunsets, books, and local music. Open to genuine chats.', photo: 'https://picsum.photos/400/500?random=3', distance: '1.3 km', interests: ['books', 'music'], tribe: 'Luo', religion: 'Christian' },
  { name: 'David', age: 30, county: 'Kiambu', bio: 'Church mode: faith, family, and community. Looking for someone with similar values.', photo: 'https://picsum.photos/400/500?random=4', distance: '7.5 km', interests: ['faith', 'family'], tribe: 'Kikuyu', religion: 'Christian' },
  { name: 'Fatuma', age: 26, county: 'Nairobi', bio: 'Entrepreneur. Cooking Kenyan dishes, travel, and hustle. Mombasa or Nairobi vibes.', photo: 'https://picsum.photos/400/500?random=5', distance: '3.2 km', interests: ['cooking', 'business'], tribe: 'Somali', religion: 'Muslim' },
  { name: 'Peter', age: 27, county: 'Nakuru', bio: 'Professional mode: outdoors, Rift Valley views, and career growth.', photo: 'https://picsum.photos/400/500?random=6', distance: '12 km', interests: ['outdoors', 'career'], tribe: 'Kalenjin', religion: 'Christian' }
];

let currentIndex = 0;
let filteredUsers = [...mockUsers];
let matches = JSON.parse(localStorage.getItem('matches') || '[]');
let userLocation = null;

const card = document.getElementById('profile-card');
const matchesList = document.getElementById('matches-list');
const countyFilter = document.getElementById('county-filter');
const locationBtn = document.getElementById('request-location');

function updateMatches() {
  matchesList.innerHTML = matches.length ? matches.map(m => `<li>${m.name} (${m.county})</li>`).join('') : '<li>No matches yet. Start swiping!</li>';
  localStorage.setItem('matches', JSON.stringify(matches));
}

function showProfile() {
  if (currentIndex >= filteredUsers.length) {
    card.innerHTML = `<div class="profile-info" style="text-align:center; padding:3rem;"><h2>No more nearby profiles</h2><p>Try another county or check back later!</p></div>`;
    return;
  }
  const user = filteredUsers[currentIndex];
  card.innerHTML = `
    <img src="${user.photo}" alt="${user.name}" onerror="this.src='https://via.placeholder.com/400x500?text=Photo'">
    <div class="profile-info">
      <h2>${user.name}, ${user.age}</h2>
      <p>${user.county} • ${user.tribe || ''} • ${user.religion || ''}</p>
      <p class="distance">📍 About ${user.distance} away</p>
      <p>${user.bio}</p>
      <p><small>Interests: ${user.interests.join(', ')}</small></p>
    </div>
    <div class="actions">
      <button class="pass" onclick="pass()">Pass</button>
      <button class="like" onclick="like()">Like ❤️</button>
    </div>
  `;
}

function like() {
  const user = filteredUsers[currentIndex];
  if (!matches.find(m => m.name === user.name)) {
    matches.push({ name: user.name, county: user.county });
    updateMatches();
  }
  currentIndex++;
  showProfile();
}

function pass() {
  currentIndex++;
  showProfile();
}

countyFilter.addEventListener('change', () => {
  const val = countyFilter.value;
  filteredUsers = val === 'all' ? [...mockUsers] : mockUsers.filter(u => u.county === val);
  currentIndex = 0;
  showProfile();
});

locationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    locationBtn.textContent = 'Requesting...';
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        locationBtn.textContent = '✅ Location enabled';
        // In real app: calculate distances with Haversine
        console.log('Your location:', userLocation);
        alert('Location enabled! In full app, distances will be calculated from your GPS.');
      },
      (err) => {
        locationBtn.textContent = 'Location denied';
        alert('Location permission denied. Using mock distances.');
      }
    );
  } else {
    alert('Geolocation not supported.');
  }
});

// Init
updateMatches();
showProfile();

// Make functions global for onclick
window.like = like;
window.pass = pass;
