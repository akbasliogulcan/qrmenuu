const fetchMenu = async () => {
           // Api'a istek at
           const res = await fetch("./db.json");

           // Api'dan gelen cevapı json formatına çevir
           const data = await res.json();
           console.log();
           // Data içerisindeki menu 'yü bu fonksiyon çağırıldığında return et
           return data.menu;
};

export default fetchMenu;