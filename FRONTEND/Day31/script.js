const inp1 = document.querySelector('#name')
const inp2 = document.querySelector('#email')
const form = document.querySelector('form')
const inp3 = document.querySelector('#image')
const cardBox = document.querySelector(".cards-container")

let editIndex = null

let userData = [
    
        {
          name: "Deepanshu Singhal",
          email: "deepanshu.singhal@gmail.com",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600"
        },
        {
          name: "Priya Sharma",
          email: "priya.sharma@gmail.com",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600"
        },
        {
          name: "Rahul Verma",
          email: "rahul.verma@gmail.com",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600"
        },
        {
          name: "Ananya Gupta",
          email: "ananya.gupta@gmail.com",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600"
        },
        {
          name: "Arjun Mehta",
          email: "arjun.mehta@gmail.com",
          image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600"
        }
      
]

const generateUser = ()=>{
    cardBox.innerHTML = ""
    userData.forEach((elems,index)=>{
        cardBox.innerHTML += `          
        <div class="user-card">
    
        <div class="image-wrapper">
            <img
                src=${elems.image}
                alt="Profile Image"
            >
        </div>
    
        <div class="card-content">
            <h3>${elems.name}</h3>
            <p>${elems.email}</p>
        </div>
        <div class="card-actions">
            <button onclick="updateUser(${index})" class="edit-btn">Edit</button>
            <button onclick = "deleteUser(${index})" class="delete-btn">Delete</button>
        </div>
    
    </div>`
    
    })
    
}

generateUser()

form.addEventListener("submit", (events) => {
  events.preventDefault();

  let name = inp1.value.trim();
  let email = inp2.value.trim();
  let image = inp3.value.trim();

  if (!name || !email || !image) return;

  if (editIndex !== null) {

      userData[editIndex] = {
          name,
          email,
          image
      };

      editIndex = null;

      document.querySelector('button[type="submit"]').textContent = "Add User";

  } else {

      userData.push({
          name,
          email,
          image
      });

  }

  generateUser();
  form.reset();
});

let deleteUser = (index)=>{
  userData.splice(index,1)
  generateUser()
}

let updateUser = (index) => {
  inp1.value = userData[index].name;
  inp2.value = userData[index].email;
  inp3.value = userData[index].image;

  editIndex = index;

  document.querySelector('button[type="submit"]').textContent = "Update User";
}