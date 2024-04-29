const students = [
  {
    name: "Rahul Sharma",
    marks: "85%",
    class: "12th Grade",
    address: "45 Nehru Road, Mumbai, Maharashtra",
  },
  {
    name: "Priya Patel",
    marks: "78%",
    class: "11th Grade",
    address: "12 Gandhi Nagar, Ahmedabad, Gujarat",
  },
  {
    name: "Arun Singh",
    marks: "92%",
    class: "10th Grade",
    address: "23 Rajput Street, Jaipur, Rajasthan",
  },
  {
    name: "Anjali Dubey",
    marks: "70%",
    class: "9th Grade",
    address: "89 Ganges Lane, Varanasi, Uttar Pradesh",
  },
  {
    name: "Vikram Mehta",
    marks: "88%",
    class: "12th Grade",
    address: "67 Taj Mahal Road, Agra, Uttar Pradesh",
  },
  {
    name: "Deepika Reddy",
    marks: "95%",
    class: "11th Grade",
    address: "34 Charminar Street, Hyderabad, Telangana",
  },
  {
    name: "Rohan Gupta",
    marks: "82%",
    class: "10th Grade",
    address: "78 Jalandhar Lane, Amritsar, Punjab",
  },
  {
    name: "Neha Verma",
    marks: "75%",
    class: "9th Grade",
    address: "56 Lotus Avenue, Bangalore, Karnataka",
  },
  {
    name: "Kunal Khanna",
    marks: "91%",
    class: "12th Grade",
    address: "90 Mount Road, Chennai, Tamil Nadu",
  },
  {
    name: "Shreya Nair",
    marks: "80%",
    class: "11th Grade",
    address: "21 Coconut Grove, Kochi, Kerala",
  },
  {
    name: "Rajesh Iyer",
    marks: "89%",
    class: "10th Grade",
    address: "32 Mysore Street, Bangalore, Karnataka",
  },
  {
    name: "Nisha Gupta",
    marks: "73%",
    class: "9th Grade",
    address: "76 Ganga Lane, Patna, Bihar",
  },
  {
    name: "Ajay Kumar",
    marks: "84%",
    class: "12th Grade",
    address: "43 Himalaya Road, Dehradun, Uttarakhand",
  },
  {
    name: "Pooja Chauhan",
    marks: "79%",
    class: "11th Grade",
    address: "65 Golden Temple Street, Amritsar, Punjab",
  },
  {
    name: "Amit Singhania",
    marks: "93%",
    class: "10th Grade",
    address: "78 Amber Palace Lane, Jaipur, Rajasthan",
  },
  {
    name: "Divya Mishra",
    marks: "68%",
    class: "9th Grade",
    address: "21 Varanasi Road, Allahabad, Uttar Pradesh",
  },
  {
    name: "Karthik Menon",
    marks: "87%",
    class: "12th Grade",
    address: "12 Backwaters Avenue, Kochi, Kerala",
  },
  {
    name: "Sandhya Iyengar",
    marks: "76%",
    class: "11th Grade",
    address: "34 Marina Beach Road, Chennai, Tamil Nadu",
  },
  {
    name: "Suresh Joshi",
    marks: "90%",
    class: "10th Grade",
    address: "45 Pink City Street, Jaipur, Rajasthan",
  },
  {
    name: "Ananya Desai",
    marks: "72%",
    class: "9th Grade",
    address: "76 Hiranandani Gardens, Mumbai, Maharashtra",
  },
];
let studentCards = document.querySelector(".result");
let input = document.querySelector("#search-bar");
let searchBtn = document.querySelector("#search-btn");

// Function to render student cards
function renderStudents(students) {
  studentCards.innerHTML = "";
  students.map((student) => {
    let card = document.createElement("div");
    card.innerHTML = `
        <h3>${student.name}</h3>
        <p>Marks: ${student.marks}</p>
        <p>Class: ${student.class}</p>
        <p>Address: ${student.address}</p>
      `;
    studentCards.appendChild(card);
  });
}
// Initial rendering of student records
renderStudents(students);

// Event listener for search input
searchBtn.addEventListener("click", function () {
  let searchMsg = document.querySelector(".search-msg h3");
  searchMsg.innerText = `Search result for ${input.value}...`;

  let searchText = input.value.toLowerCase();
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().startsWith(searchText)
  );
  renderStudents(filteredStudents);
});
