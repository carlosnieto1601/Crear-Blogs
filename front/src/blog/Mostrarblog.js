import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const URI = "http://localhost:8000/blogs";

const Mostrarblog = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
      getBlogs();
    }, [])
  
    // procedimiento para mostrar todos los blogs
  
    const getBlogs = async () => {
      const res = await axios.get(URI);
      setBlogs(res.data);
    };
    // procedimiento para eleimiar blogs
  
    const deleteBlog = async (id) => {
      await axios.delete(`${URI}${id}`)
      getBlogs()
    }
  

  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <Link to={'/create'} className="btn btn-primary"> Crear </Link>
          <table className="table">
            <thead className="table-primary">          
              <tr>
                <th> Titulo </th>
                <th> Contenido</th>
                <th> Accion</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                  <tr key={blog.id}>
                      <td>{blog.title}</td>
                      <td>{blog.contents}</td>
                      <td>
                          <Link to={`/edit/${blog.id}`} className="btn btn-info"> Editar </Link> {''}
                          <button onClick={ () =>deleteBlog (blog.id)} className="btn btn-danger"> Eliminar</button>
                      </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mostrarblog;