import axios from 'axios'
import React, { useState } from 'react'
import Read from './Read'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [judulVideo, setjudulVideo] = useState('')
    const [harga, setHarga] = useState('')
    const [namaPengisi, setNamaPengisi] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://66d310cc184dce1713cf2d35.mockapi.io/crud',{
            e_judulVideo: judulVideo,
            e_harga: harga,
            e_namaPengisi: namaPengisi
        }).then(() => {
            navigate('read');
        }).catch((err) => {
            console.log(err)
        });
    }

  return (
    <div>
        
        <div className='flex justify-center'>
        <form onSubmit={handleSubmit}>
        <div>
        <label>Judul Video : 
            <input type='text' placeholder='Masukkan Judul' onChange={(e) => setjudulVideo(e.target.value)} value={judulVideo} ></input>
        </label>
        </div>
        <div>
        <label>Pengisi Video : 
            <input type='text' placeholder='Masukkan Nama' onChange={(e) => setNamaPengisi(e.target.value)} value={namaPengisi} ></input>
        </label>
        </div>
        <div>
        <label>Harga : 
            <input type='text' placeholder='Masukkan Harga' onChange={(e) => setHarga(e.target.value)} value={harga} ></input>
        </label>
        </div>
        <button type="submit" value="Submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tambahkan</button>
        </form>
    
    {judulVideo}
    <br></br>
    {harga}
    <br></br>
    {namaPengisi}

    </div>
    </div>
  )
}

export default Create