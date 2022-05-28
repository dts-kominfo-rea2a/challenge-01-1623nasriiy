// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    nama: "monica",
    Gender: "Female",
    Age: 17,
    Email: "monica@dingdong.com",
    FavoriteColor: ["blue", "red", "brown", "orange"], 
    isHavetPet: 'yes',
    Education:  [
        {name:"SD 01", city:"Jakarta", Graduate:2016},
        {name:"SMP 02", city:"Jakarta", Graduate:2019},
        {name:"SMA 03", city:"Tangerang"}
    ], 
       
    FavoriteRestaurant: ["spaghetti", "coffe", "hamburger", "steakk"]
};
const secondUser = {
    nama: "wendy",
    Gender: "male",
    Age: 23,
    Email: "wendy@dingdong.com",
    FavoriteColor:["green","brown","orange"],
    isHavetPet: 'no',
    Education:[
        {name:"SD 02", city:"Jakarta", Graduate:2010},
        {name:"SMP 03", city:"Bogor", Graduate:2013}, 
        {name:"SMA 01", city:"Surabaya"}, 
        {name:"Universitas Maju", city:"Tangerang"}
    ],
    FavoriteRestaurant: ["Capucchino", "sandwich", "bakso gunung", "pizza"]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};