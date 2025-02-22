// 1.HTML Fragments

// const mhs = {
//     nama: `Muhamad Aqil Maulana`,
//     umur: 22,
//     nim:`11190240000013`,
//     email:`muhamadaqil.maulana19@mhs.uinjkt.ac.id`
// };


// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nim}</span>
// </div>`

//2.Looping

// const mhs =[{
//     nama: `Muhamad Aqil Maulana`,
//     nim: `11190240000013`
// }, {
//     nama: `Farida Hanum`,
//     nim: `11190240000001`
// }, {
//     nama: `Erika Septiana`,
//     nim: `11190240000002`
// }]

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.nim}</li>
// </ul>`).join('')}
// </div>`

//3.Conditionals
//Ternary
// const lagu ={
//     judul: 'kau adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: `Ray putra`
// }

// const el= `<div class="lagu"><ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.penyanyi} ${lagu.feat ? `(feat.${lagu.feat})` : ``} </li>
// </ul></div>`

// 4. Nested
// HTML Fragment Bersarang

// const mhs = {
//     nama : `Muhamad Aqil Maulana`,
//     semester : 7,
//     mataKuliah : [`Terjemah Arab`, 
//     `Terjemah Inggris`,
//     `Penerjemahan Diplomasi`,
//     `Pernejamahan Dokumen Akademik`,
//     `Penerjemahan Dokumen Kontemporer`
// ]
// }

// function cetakMataKuliah(mataKuliah){
//     return `
//     <ol>
//     ${mataKuliah.map(mk => `<li>${mk}</li>` ).join('')}
//     </ol>
//     `;
// }

// const el = `<div class="mhs"> 
// <h2>${mhs.nama}</h2>
// <span class="semester">${mhs.semester}</span>
// <h4>Mata Kuliah</h4>
// ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`

// document.body.innerHTML = el;
