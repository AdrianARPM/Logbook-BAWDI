function login(){
  const username = document.getElementById("username").value.trim();
  fetch(API_URL + "?action=login", {
    method:"POST",
    body:JSON.stringify({username})
  })
  .then(r=>r.json())
  .then(res=>{
    if(res.success){
      localStorage.setItem("user", JSON.stringify(res));
      location.href="app.html";
    } else {
      document.getElementById("msg").innerText="Login gagal";
    }
  });
}

function logout(){
  localStorage.clear();
  location.href="index.html";
}

