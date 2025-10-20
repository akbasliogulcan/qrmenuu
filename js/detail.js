// Çok sayfalı uygulamalarda bir sayfa birden çok eleman için ortak ise bu sayfa dinamik şekilde render edilir.Bunu yaparken ilk olarak url'e bir parametre geçilir.Sonrasında bu parametre url'den alınarak sayfa içeriğinin renderlanması sağlanır.
import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFound } from "./ui.js";

// Javascript URLSearchParams classı sayesinde url'deki arama parametrelerini alıp kullanabiliriz.
const params = new URLSearchParams(window.location.search);

// UrlsearchParams ile url'deki id değerine eriş
const id = +params.get("id")
document.addEventListener("DOMContentLoaded", async () => {

           //*Apidan menu elemanlarını al
           const data = await fetchMenu();

           //*Detay sayfasında renderlanacak elemanı bul
           const product = data.find((item) => item.id === id);
           // !Bu fonksiyonun amacı büyük ihtimalle ürün detay sayfasını ekrana basmak, yani seçilen ürünün (product) bilgilerini alıp bir HTML yapısı olarak göstermek.
           // !O yüzden iki şeye ihtiyacı var:
           // !Ne gösterilecek? → product
           // !Nereye gösterilecek (hangi HTML elementine)? → elements.detailPage

           //* Eğer ürün yoksa  renderDetailPage fonksiyonunu çağır yoksa renderNotFound fonksiyonunu çağır.

           if (!product) {
                      renderNotFound(elements.detailPage);
           }
           else {
                      renderDetailPage(product, elements.detailPage);
           }
});        