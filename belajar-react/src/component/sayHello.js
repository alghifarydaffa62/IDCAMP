function Sayhello(props) {
    const nama = props.nama
    const umur = props.umur
    const kampus = props.kampus
    const prodi = props.prodi

    return(
        <div>
            <h2>Hai {nama} dari kampus {kampus}. Umur kamu {umur}, kamu kuliah prodi {prodi}</h2>
        </div>
    )
}

export default Sayhello