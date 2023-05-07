const profiles = [
  {
    name: "John Doe",
    age: 35,
    location: "New York",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et enim eget ligula ultricies elementum.",
    picture: "s1.webp"
  },
  {
    name: "Jane Smith",
    age: 27,
    location: "Los Angeles",
    bio: "Donec bibendum metus in ligula interdum, ut facilisis massa semper. Quisque vel neque bibendum.",
    picture: "s2.jpg"
  },
    {
    name: "Keshav",
    age: 24,
    location: "Hyderabad",
    bio: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    picture: "s8.jpeg"
  },
  {
    name: "Mike Johnson",
    age: 42,
    location: "Chicago",
    bio: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    picture: "s3.jpeg"
  },
    {
    name: "Nirva",
    age: 21,
    location: "Chennai",
    bio: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    picture: "s4.jpeg"
  },
    {
    name: "Arnav",
    age: 23,
    location: "Mumbai",
    bio: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    picture: "s7.jpeg"
  },
    {
    name: "ivana",
    age: 18,
    location: "mumbai",
    bio: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    picture: "s5.jpeg"
  },
     {
    name: "tehazeeb",
    age: 21,
    location: "up",
    bio: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    picture: "s6.jpeg"
  }
];

let currentProfileIndex = 0;

function displayProfile(profileIndex) {
  const profile = profiles[profileIndex];
  const pictureElement = document.getElementById("picture");
  const nameElement = document.getElementById("name");
  const ageElement = document.getElementById("age");
  const locationElement = document.getElementById("location");
  const bioElement = document.getElementById("bio");
  
  pictureElement.src = profile.picture;
  nameElement.textContent = profile.name;
  ageElement.textContent = `Age: ${profile.age}`;
  locationElement.textContent = `Location: ${profile.location}`;
  bioElement.textContent = profile.bio;
}

document.addEventListener("DOMContentLoaded", () => {
  displayProfile(currentProfileIndex);

  const previousButton = document.getElementById("previous");
  previousButton.addEventListener("click", () => {
    currentProfileIndex--;
    if (currentProfileIndex < 0) {
      currentProfileIndex = profiles.length - 1;
    }
    displayProfile(currentProfileIndex);
  });

  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", () => {
    currentProfileIndex++;
    if (currentProfileIndex >= profiles.length) {
      currentProfileIndex = 0;
    }
    displayProfile(currentProfileIndex);
  });
});

const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');
const likedProfilesTable = document.getElementById('likedProfilesTable');
const likedProfiles = [];

likeButton.addEventListener('click', () => {
  // Check if the current profile is already in the likedProfiles array
  const name = document.getElementById('name').textContent;
  const age = document.getElementById('age').textContent;
  const location = document.getElementById('location').textContent;
  const exists = likedProfiles.some(profile => profile.name === name && profile.age === age && profile.location === location);
  if (exists) {
    alert('You have already liked this profile.');
    return;
  }
  
  // Add the current profile to the likedProfilesTable
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const ageCell = document.createElement('td');
  const locationCell = document.createElement('td');
  const removeCell = document.createElement('td'); // new cell for remove button
  
  nameCell.textContent = name;
  ageCell.textContent = age;
  locationCell.textContent = location;
  
  const removeButton = document.createElement('button'); // new remove button
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => { // add event listener to remove button
    row.remove(); // remove row from table
    const index = likedProfiles.findIndex(profile => profile.name === name && profile.age === age && profile.location === location);
    if (index !== -1) {
      likedProfiles.splice(index, 1); // remove profile from likedProfiles array
    }
  });
  removeCell.appendChild(removeButton);
  
  row.appendChild(nameCell);
  row.appendChild(ageCell);
  row.appendChild(locationCell);
  row.appendChild(removeCell); // add remove cell to row
  
  likedProfilesTable.appendChild(row);
  
  // Add the current profile to the likedProfiles array
  likedProfiles.push({ name, age, location });
  
  // Go to the next profile
  nextProfile();
});

