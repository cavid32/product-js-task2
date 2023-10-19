const inputadi = document.getElementById("name");
const idinput = document.getElementById("idInputu");
const kataqoryIputu = document.getElementById("category");
const qiymetIputu = document.getElementById("price");
const endirimqiymetInputu = document.getElementById("disprice");
const mehsulElaveEtInputu = document.getElementById("add");

let ProductsArr = [];
let id = 0;
mehsulElaveEtInputu.addEventListener("click", function () {
  if (
    inputadi.value == "" ||
    kataqoryIputu.value == "" ||
    qiymetIputu.value == "" ||
    endirimqiymetInputu.value == ""
  ) {
    alert("xanalari doldurun");
  } else {
    id++;
    ProductsArr.push({
      id: id,
      adi: inputadi.value,
      kategory: kataqoryIputu.value,
      qiymeti: qiymetIputu.value,
      endirimliQiymet: endirimqiymetInputu.value,
    });
    localStorage.setItem("data",JSON.stringify(ProductsArr));
  }
  mehsullariGetir();
});

const mehsullariGetir = () => {
  tbody.innerHTML = "";
  ls=JSON.parse(localStorage.getItem("data"));
  ls.forEach(function (item, index) {
    console.log(item);
    tbody.innerHTML += `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${item.adi}</td>
                                <td>${item.kategory}</td>
                                <td>${item.qiymeti}</td>
                                <td>${item.endirimliQiymet}</td>
                                <td>
                                    <button onclick="editButton(${
                                      item.id
                                    })">edit</button>
                                    <button onclick="deleteButton(${
                                      item.id
                                    })">Sil</button>
                                </td>
                            </tr>
                            `;
  });
};

mehsullariGetir();

const editButton = (id) => {
  ProductsArr = ProductsArr.filter((item) => item.id != id);
  mehsullariGetir();
};
const deleteButton = (id) => {
  ls=JSON.parse(localStorage.getItem("data"));

  newls = ls.filter((item) => item.id != id);
  localStorage.removeItem('data')
  localStorage.setItem("data",JSON.stringify(newls));

  console.log(ProductsArr);
  mehsullariGetir()
};



