import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Edit from './Edit'

function Read () {

  const [apiData,setApiData] = useState([])

  function getData(){
    axios.get('https://66d310cc184dce1713cf2d35.mockapi.io/crud')
  .then((response) => {
    setApiData(response.data);
  }).catch((err) => {
    console.log(err)
});
}

function handleDelete(id){
    axios.delete(`https://66d310cc184dce1713cf2d35.mockapi.io/crud/${id}`)
    .then(() => {
      getData();
    }).catch((err) => {
      console.log(err)
  });
}

function setDataToStorage(id, judulVideo, namaPengisi, harga){
  localStorage.setItem('id', id);
  localStorage.setItem('judulVideo', judulVideo);
  localStorage.setItem('namaPengisi', namaPengisi);
  localStorage.setItem('harga', harga);
}

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>

      <div>
        <Link to="/create">
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" >Tambahkan Pesanan</button>
        </Link>   
      </div>

      <div className='flex justify-center'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 justify-center'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
      <tr>
        <td >ID</td>
        <td>Judul Video</td>
        <td>Nama Pengisi</td>
        <td>Harga</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
      </thead>
      <tbody>
      {
        apiData.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.e_judulVideo}</td>
              <td>{item.e_namaPengisi}</td>
              <td>{item.e_harga}</td>
              <td>
              <Link to='/edit'>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setDataToStorage(item.id, item.e_judulVideo, item.e_namaPengisi, item.e_harga)} >Edit</button>    
              </Link>
              </td>
              <td>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => { if(window.confirm('Yakin Hapus Data?')) {handleDelete(item.id)} }} >Delete</button>
              </td>
            </tr>
          )
        } )
      }
    </tbody>
    </table>
    </div>
    </div>
  )
}

export default Read