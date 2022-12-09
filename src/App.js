import axios from "axios";
import React, { useState, useEffect } from "react";



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
} 
const List = () => {
  const [list, Setliist] = useState([])
	const [name, setname] = useState("");
	const [id, setId] = useState("");
	const [status, setStatus] = useState("");
	const [specie, setSpecie] = useState("");

  const [genre, setGenre] = useState("");
  const [Origin, setOrigin] = useState("");
  const [Img, setImg] = useState("");
	


useEffect(() => {
  
    async function getData() {
      
      let res =  await axios.get(`https://rickandmortyapi.com/api/character/${getRandomInt(20)}`);

      setImg(res.data.image);
      setId(res.data.id);
      setname(res.data.name);
      setStatus(res.data.status);
      setSpecie(res.data.species);
      setGenre(res.data.gender);
      setOrigin(res.data.origin.name)
      Setliist(res.data)

    
    }

   async function addFv(){

   }

    getData();
  }, []);

 
	return (
		<div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
			 <div className="back">
        <div className="card">
          <img src={`${Img}`} alt="" />
        </div>
      </div>
		<h6> Personaje escogido </h6>
          <div className="table-responsive">
					<table className="table  table-hover table-sm" style={{ marginTop: 2 }}>
						<thead className="text-center " style={{ backgroundColor: "#e3f2fd" }}>
							<tr>
								<th>id</th>
								<th>name</th>
                <th>Status</th>
                <th>Specie</th>
                <th>Gender</th>
                <th>Origin</th>
							</tr>
						</thead>
						<tbody>
						<tr >
				
                <td>{id}</td>
                <td>{name}</td>
                <td>{status}</td>
                <td>{specie}</td>
                <td>{genre}</td>
                <td>{Origin}</td>
                <div><button type="submit" class="btn btn-primary">Añadir a Favoritos</button></div>
							</tr>
						</tbody>
					</table>
			</div>
      <h6> Personajes Favoritos </h6>
          <div className="table-responsive">
					<table className="table  table-hover table-sm" style={{ marginTop: 2 }}>
						<thead className="text-center " style={{ backgroundColor: "#e3f2fd" }}>
							<tr>
								<th>id</th>
								<th>name</th>
                <th>Status</th>
                <th>Specie</th>
                <th>Gender</th>
                <th>Origin</th>
							</tr>
						</thead>
						<tbody>
						
						</tbody>
					</table>
				
			</div>
		</div>

	)
}

export default List;
