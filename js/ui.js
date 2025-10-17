//Htmlden gelen elemanları tek bir elements adı altında obje olarak topluyoruz ...
// ve sonında tek olarak export ediyoruz

const elements = {
           menuList: document.querySelector("#menu-list"),
           inputs: document.querySelectorAll('input'),
};


//Arayüze menu cartları render edecek fonksiyon
const renderCard = (data) => {
           console.log(data);
           const cardsHtml = data.map((menu) =>

                      ` <div class="d-flex flex-column flex-md-row text-dark gap-3" id="card">
                                 <img class="rounded img-fluid shadow" src="${menu.img}" alt="card-image">
                                 <div>
                                            <div class="d-flex justify-content-between">
                                                       <h5>${menu.title}</h5>
                                                       <p class="fw-bold text-success">${menu.price} EUR</p>

                                            </div>
                                            <p class="lead"> ${menu.desc}</p>
                                 </div>



                      </div>`
           )
                      .join(" ");

           //oluşturulan html'i  arayüze aktar
           elements.menuList.innerHTML = cardsHtml;
           //*bu aslında document.querySelector("#menu-list") elementini temsil ediyor.
           //*Yani doğrudan o HTML elemanına erişmiş oluyorsun.
           //*dediğinde, #menu-list elementinin içeriğini (HTML’ini) cardsHtml değişkenindeki HTML kodlarıyla değiştiriyorsun.
};

export { elements, renderCard };