const user = JSON.parse(localStorage.getItem("user")||"{}");
document.getElementById("driverName").innerText = user.nama || "";

document.getElementById("plat").addEventListener("change", ()=>{
  api("getLastKm",{plat:plat.value}).then(r=>{
    document.getElementById("kmAwal").value = r.km || 0;
  });
});

function submitInspeksi(){
  const data = {
    driver:user.nama,
    plat:plat.value,
    kmAwal:kmAwal.value,
    kmAkhir:kmAkhir.value,
    jamHadir:jamHadir.value,
    jamPulang:jamPulang.value
  };

  api("saveInspeksi",data).then(r=>{
    document.getElementById("status").innerText =
      r.success ? "Tersimpan" : "Gagal";
  });
}

