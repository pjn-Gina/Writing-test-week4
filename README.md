# Tugas Writing Minggu Week 4

## **Lanjutan JS Intermediete**
-------------------------
>Synchronous : mengeksekusi perintah satu per satu dan berurutan

>Asynchronous : mengizinkan komputer kita untuk memproses perintah lain sambil menunggu suatu proses lain yang sedang berlangsung. Artinya kita bisa melakukan lebih dari 1 proses sekaligus (multi-thread).

Terdapat tiga cara mengatasi asynchronous di javascript yaitu menggunakan, callback, promise, dan async/await

### 1. Asynchronous-Async/Await
> Selain menggunakan callback dan promise, kita juga bisa menggunakan async/await untuk menggunakan asynchronous pada JavaScript.

### 2. Asynchronous-Fetch 
#### **Fetch Data**
> Dalam JavaScript kita bisa mengirimkan network request dan juga bisa mengambil informasi data terbaru dari server jika dibutuhkan.

> Contoh network request yang biasa kita lakukan:
> - Mengirimkan data dari sebuah form.
> - Mengambil data untuk ditampilkan dalam list/table.
> - Mendapatkan notifikasi.
    
> Dalam melakukan network request, JavaScript memiliki metode bernama fetch(). 

> Fetch data merupakan fungsi komunikasi HTTP yang bertujuan untuk mengambil dan mengirimkan data ke suatu server.

> Method di HTTP Request
>- Get : perintah mendapatkan data dari server
>- Post : perintah mengirimkan data
>- Put : perintah mengirimkan/ memperbaharui /update
>- Patch : perintah update (request tidak aman)
>- Delete : perintah menghapus data

> Proses melakukan fetch() adalah salah satu proses asynchronous di JavaScript sehingga kita perlu menggunakan salah satu diantara promise atau async/await.


*Berikut ini contoh request data dengan fetch() menggunakan promise:*

    fetch("https://pokeapi.co/api/v2/pokemon/pikachu/", {
    method:"GET"
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })


*Berikut contoh request data dengan fetch() menggunakan async/await:*

    fetch("https://pokeapi.co/api/v2/pokemon/pikachu/", {
    method: "GET"
    })
    .then(async (response) => {
        let convertData = await response.json();
        console.log(convertData)
    })
    .catch((error) => {
        console.log(error);
    });




=> Contoh :

- Fetch Data Cara 1 

        fetch ("https://pokeapi.co/api/v2/pokemon/pikachu/", {
        method: "GET"
        })
        .then ((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
        })
        .catch ((error) => {
            console.log(error);
        });

- Fetch Data Cara 2

        fetch ("https://pokeapi.co/api/v2/pokemon/pikachu/", {
        method: "GET"
        })
        .then (async (response) => {
            let convertData = await response.json();
            console.log(convertData)
        })
        .catch ((error) => {
            console.log(error);
        });

- Contoh jika ingin mengambil data tertentu

        fetch("https://kipi.covid19.go.id/api/get-province", {
        method: "POST"
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            data.results.forEach((element) => {
                let li = document.createElement("li");
                li.textContent = element.value;
                listProvinsi.append(li);
            });
        })
        .catch((error) => {
            console.log(error);
        });

## **Responsive Web Design**
-----------------------

> Responsive Web Dedign (RWD) berguna untuk membuat website kita dapat di akses di device manapun

> Device yang umumnya digunakan adalah laptop/PC, smartphone, dan tablet

> Dengan RWB ini memudahkan user dalam mengakses halaman website, membuat user lebih nyaman dan menikmati berbagai konten yang ditampilkan sesuai dengan device yang digunakan.

#### **Add Viewport in HTML**
> Jika kita ingin membuat website kita responsive, kita harus menambahkan di tag `<head>`

![meta viewport](./assets/meta%20viewport.PNG)

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        </body>
        </html>


### **Media Query**
> Jenis Media Query untuk responsive web design umumnya hanya menggunakan 2 jenis media query yaitu main-width dan mas-width.

- max-width
- min-width
- max-height
- min-hegiht

> Media query digunakan untuk membuat beberapa styles tergantung pada jenis device. 
> Ada 2 cara dalam menggunakan media query
> 1. Cara pertama: membuat file css berbeda untuk masing-masing device
> 2. Cara kedua: menggabungkan 1 file css untuk setting styling berbagai device.


### **Breakpoint**

> Perubahan yang terjadi pada tampilan saat berganti device atau ukuran width disebut **breakpoint**.

*Note :* 
- *Misalnya ada 3 tampilan berbeda untuk 3 device, artinya ada 3 breakpoint*
- *tidak ada aturan baku besaran width dan berapa banyak breakpoint yang harus dilakukan*


## **Bootstrap**
---------------------

> Bootstrap adalah framework HTML, CSS, dan JavaScript yang berfungsi untuk mendesain website responsive dengan cepat dan mudah. 
> Kemudahan yang ditawarkan oleh Bootstrap adalah Anda tak perlu coding komponen website dari nol. Framework ini tersusun dari kumpulan file CSS dan JavaScript berbentuk class yang tinggal pakai.
> Class yang disediakan Bootstrap juga cukup lengkap. Mulai dari class untuk layout halaman, class menu navigasi, class animasi, dan masih banyak lainnya.


> Bootstrap bisa dipanggil dengan 2 cara, yaitu dengan menggunakan bootstrap online dan dengan mendownload 

**Cara Memanggil Bootstrap Online**
  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous">
    </script>

**Cara Memanggil Bootstrap Offline**
> Mendownload bootstrap
> Buat folder vendor untuk menampung file bootstrap yang sudah di download
> Kemudian panggil file bootstrap untuk CSS dan JS

    <link rel="stylesheet" href="vendor/bootstrap-5.2.0-dist/css/bootstrap.min.css">

    <script src="vendor/bootstrap-5.2.0-dist/js/bootstrap.bundle.js"></script>

### **Grid System**
> Layar laptop jika menggunakan grid system terbagi menjadi 12 bagian (column)

    <div class="container">
        <div class="row">
            <div class="col-12" style="background-color: green;">
                &nbsp;
            </div>
        </div>
        <div class="row">
            <div class="col-4" style="background-color: rgb(0, 30, 128);">
                &nbsp;
            </div>
            <div class="col-8" style="background-color: rgb(212, 17, 170);">
                &nbsp;
            </div>
        </div>      
        <div class="row">
            <div class="col-6" style="background-color: rgb(250, 246, 14);">
                &nbsp;
            </div>
            <div class="col-6" style="background-color: rgb(224, 42, 10);">
                &nbsp;
            </div>
        </div>
    </div>


Hasilnya akan seperti ini

![grid system](assets/grid%20system.PNG)

*Note :*
- *class col-12 menandakan full-width*
- ***`&nbsp;`** untuk blankspace*
- ***class : container** dan **container-fluid** untuk container full-width*


> Bootstrap menyediakan component-component yang siap pakai, seperti accordion, alert, badge, card, button, navbar, dan lain-lain

