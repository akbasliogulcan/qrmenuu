import fetchMenu from "./api.js";
import { elements, renderCard } from "./ui.js";

//sayfa yüklendiğinde api'ya istek at ve gelen veriyi dataya ata
document.addEventListener("DOMContentLoaded", async () => {
           //1.apiden veri al
           const data = await fetchMenu();

           //2.apiden gelen veri ile arayüzü dinamik olarak renderla
           renderCard(data);

           //3. inputlara bir olay izleyicisi ekle ve değişen inputun kategorisine göre arayüzü renderla
           elements.inputs.forEach((input) => {

                      //!querySelectorAll metodu ile elde edilen inputs bir HtmlCollection olduğundan buna ...
                      //!direkt addEventListener ekleyemeyiz.Bu sebeple bu HtmlCollection'ı forEach ile dönüp her bir elemanı ayırdık.


                      input.addEventListener("change", () => {

                                 //seçilen inputun id'sini al
                                 const selected = input.id;

                                 //eğer seçilen id 'all' ise tüm datayı arayüze renderla ama bunun dışnda ise buna ait ürünleri
                                 //renderla
                                 if (selected == "all") { renderCard(data) }
                                 else {

                                            //selectedId'e göre arayüzü filtrele ve renderla
                                            const filtred = data.filter((item) => item.category == selected);
                                            console.log(filtred);

                                            //filtrelenen elemanları arayüze renderla
                                            renderCard(filtred);
                                 }


                      });

           });
});


console.log(elements.inputs);