import './App.css';
import dicoding from './dicoding-logo.png'
import Sayhello from './component/sayHello';

function App() {
  return (
    <div className="App">
      <h1>Biodata Perusahaan</h1>
        <ul>
          <li>Nama: Dicoding Indonesia</li>
          <li>Bidang: Education</li>
          <li>Tagline: Decode Ideas, Discover Potential</li>
        </ul>
        <img src={dicoding} alt='hho'></img>

        <Sayhello nama="daffa" umur = "18" kampus = "PENS" prodi="Teknik Informatika"/>
    </div>
  );
}

export default App;
