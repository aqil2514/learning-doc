var item = prompt('Masukkan nama makanan / minuman : \n(cth: nasi, daging, susu, hamburger, softdrink)');

switch( item ){
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert(item + ' adalah makanan / minuman sehat');
        break;
    case 'hamburger':
    case 'softdrink':
        alert(item + ' adalah makanan / minuman tidak sehat');
        break;
    default :
    alert('Makanan / minuman yang anda masukkan tidak ada dalam daftar');
}