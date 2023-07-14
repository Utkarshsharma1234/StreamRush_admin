import { Link } from "react-router-dom";
import "./list.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { updateList } from "../../context/listContext/apiCalls";
import { useContext, useState } from "react";
import { ListContext } from "../../context/listContext/ListContext";

export default function List() {
    const location = useLocation();
    const [updatedList,setUpdatedList] = useState(null);
    const list = location.list;
    const {dispatch} = useContext(ListContext);
    
    const handleUpdate = (e) =>{
        e.preventDefault();
        updateList(list,dispatch);
    }

    const handleChange = (e) =>{
        const value = e.target.value;
        setUpdatedList({...updatedList, [e.target.name]: value});
      }

      console.log(updateList);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <span className="productName">{list?.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{list?._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      <span className="productInfoValue">{list?.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">type:</span>
                      <span className="productInfoValue">{list?.type}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>List Title</label>
                  <input type="text" placeholder={list?.title} name="title" onChange={handleChange}/>
                  <label>Type</label>
                  <input type="text" placeholder={list?.type} name="type" onChange={handleChange}/>
                  <label>Genre</label>
                  <input type="text" placeholder={list?.genre} name="genre" onChange={handleChange}/>
                  
              </div>
              <div className="productFormRight">
                  <button className="productButton" onClick={handleUpdate}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
