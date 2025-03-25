const isStatus = document.querySelector("#text");
const btn = document.querySelector("#btn");

let check = 0;

btn.addEventListener("click", () => {
     if (check == 0) {
          isStatus.textContent = "Friend";
          isStatus.classList.replace("text-red-400", "text-green-500");
          btn.classList.replace("bg-blue-500", "bg-red-500");
          btn.textContent = "Unfriend";
          check = 1;
     } else {
          isStatus.textContent = "Stranger";
          isStatus.classList.replace("text-green-500", "text-red-400");
          btn.classList.replace("bg-red-500", "bg-blue-500");
          btn.textContent = "Add Friend";
          check = 0;
     }
});