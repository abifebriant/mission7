import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Edit () {

    const [id, setId] = useState(0);
    const [judulVideo, setjudulVideo] = useState('');
    const [namaPengisi, setNamaPengisi] = useState('');
    const [harga, setHarga] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setjudulVideo(localStorage.getItem(judulVideo));
        setNamaPengisi(localStorage.getItem(namaPengisi));
        setHarga(localStorage.getItem(harga));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://66d310cc184dce1713cf2d35.mockapi.io/crud/${id}`, {
            e_judulVideo: judulVideo,
            e_namaPengisi: namaPengisi,
            e_harga: harga
        }).then(() => {
            navigate('/read');
        }).catch((err) => {
            console.log(err)
        });
    }
  return (
    <div>
        
        <div className='flex justify-center'>
        <form onSubmit={handleSubmit} >
        <div>
        <label>Judul Video : 
            <input type='text' placeholder='Masukkan Judul'value={judulVideo} onChange={(e) => setjudulVideo(e.target.value)} ></input>
        </label>
        </div>
        <div>
        <label>Pengisi Video : 
            <input type='text' placeholder='Masukkan Nama' value={namaPengisi} onChange={(e) => setNamaPengisi(e.target.value)} ></input>
        </label>
        </div>
        <div>
        <label>Harga : 
            <input type='text' placeholder='Masukkan Harga' value={harga} onChange={(e) => setHarga(e.target.value)}  ></input>
        </label>
        </div>

        
            <button type="submit" value="Update" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
        </form>

    </div>
    </div>
  )
}

export default Edit