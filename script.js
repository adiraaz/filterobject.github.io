const users = [{
    nama: 'ferrari',
    keluaran: 1947,
    bensin: 'pertamax turbo'
},
{
    nama: 'alphard',
    keluaran: 2002,
    bensin: 'pertamax'
},
{
    nama: 'marcedes benz',
    keluaran: 1997,
    bensin: 'pertamax plus'
}
];

let nama = prompt("masukan nama mobil");
const usersNama = users.filter((user) => user.nama === nama);
console.log(usersNama);