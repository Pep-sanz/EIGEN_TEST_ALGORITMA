// Soal NO 1
// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

function mapNegieToEigen(str) {
  const letters = str.replace(/[0-9]/g, '');
  const digits = str.replace(/[A-Z]/gi, '');
  const reversedLetters = letters.split('').reverse().join('');
  return reversedLetters + digits;
}

const result = mapNegieToEigen('NEGIE1');
console.log('Jawaban NO 1:', result);

//Soal NO 2
// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

function longest(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  console.log(`Jawaban NO 2: ${longestWord}(${longestWord.length} character)`);
}

const sentence = 'Saya sangat senang mengerjakan soal algoritma';
longest(sentence);

// Soal NO 3
// Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
function countWords(INPUT, QUERY) {
  const freqMap = {};

  for (let word of INPUT) {
    freqMap[word] = (freqMap[word] || 0) + 1;
  }

  return QUERY.map((word) => freqMap[word] || 0);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const OUTPUT = countWords(INPUT, QUERY);
console.log('Jawaban NO 3:', OUTPUT);

// Soal NO 4
// Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN

function diagonalDifference(matrix) {
  let primarySum = 0;
  let secondarySum = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    primarySum += matrix[i][i];
    secondarySum += matrix[i][n - 1 - i];
  }

  return Math.abs(primarySum - secondarySum);
}

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

console.log('Jawaban NO 4:', diagonalDifference(matrix));
