let catatan = [];
const form = document.getElementById('form');
const catatanTable = document.getElementById('catatanTable');
const rekap = document.getElementById('rekap');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const jenis = document.getElementById('jenis').value;
    const nominal = parseFloat(document.getElementById('nominal').value);
    const status = document.getElementById('status').value;
    const editIndex = document.getElementById('editIndex').value;

    if (editIndex === '-1') {
        // Tambah catatan baru
        catatan.push({ nama, jenis, nominal, status });
    } else