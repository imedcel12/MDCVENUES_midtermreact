import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../index.css";

const GetData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://sis.materdeicollege.com/api/venues")
      .then((res) => res.json())
      .then((res) => {
        const { venues } = res;

        setLoading(false);
        setData(venues);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const goSingleVenue = (venue) => {
    navigate(`/api/venues/${venue}`);
  };

  return (
    <>
    {loading && (
        <div className="text-center bg-success bg-opacity-50 text-black">
          Loading Venues...
        </div>
      )}
      <h1 className="text-center mt-5 font-link"> <img src="images/mdc.png" alt="" width="60px" height="60px" position="center" /> Mater Dei College</h1> <hr /> 
      <h2 className="bg-warning bg-opacity-75 p-2">List of Venues</h2>
      <table className="table table-bordered shadow-lg">
        <thead className="text-center">
          <tr className="bg-primary text-white">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Building</th>
            <th scope="col">Capacity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="bg-secondary bg-opacity-50 text-center">
          {Object.keys(data)?.map((venue, index) => {
            return (
              <tr key={index} className="hover-effect text-dark">
                <td>{data[venue].id}</td>
                <td>{data[venue].name}</td>
                <td>{data[venue].building}</td>
                <td>{data[venue].capacity}
                </td>
                <td>
                <FaEye className="go-to" onClick={() => {goSingleVenue(data[venue].id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default GetData;
