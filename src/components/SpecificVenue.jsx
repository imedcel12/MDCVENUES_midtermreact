import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SpecificVenue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const {
          venue
        } = data;
        setLoading(false);
        setVenue(venue);
        setSchedule(data.schedules);
    })
  }, []);

  return (
    <>
    {loading && (
            <p className="text-dark bg-success bg-opacity-50 text-center">
              Loading venues and schedule...
            </p>
    )}
      <div className="mt-5">
        <h1 className="text-center w-100 font-link shadow-lg"> MDC {venue.building}</h1> <hr />
        <table className="table table-bordered shadow-sm">
          <thead className="text-center">
            <tr className="bg-primary text-white">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Building</th>
              <th scope="col">Capacity</th>
            </tr>
          </thead>
          <tbody className="bg-secondary bg-opacity-50 text-center"> 
            <tr className="text-dark">
              <td>{venue.id}</td>
              <td>{venue.name}</td>
              <td>{venue.building}</td>
              <td>{venue.capacity}</td>
            </tr>
          </tbody>
        </table>

        {schedule && (
          <table className="table table-bordered text-center shadow-lg">
            <thead>
              <tr className='bg-warning bg-opacity-50 text-white shadow-sm'>
                  <th colSpan="6" className='text-center'>
                      S C H E D U L E S
                  </th>
              </tr>
            </thead>
            <thead>
            <tr className="bg-secondary text-white text-center">
                <th>ID</th>
                <th>Course No.</th>
                <th>Description</th>
                <th>Teacher</th>
                <th>Schedule</th>
                <th>Size</th>
            </tr>
            </thead>
            <tbody className="bg-primary bg-opacity-50">
              {Object.keys(schedule)?.map((sched, index) => {
                return (
                  <tr key={index}>
                    <td>{schedule[sched].id}</td>
                    <td>{schedule[sched].course_no}</td>
                    <td>{schedule[sched].description}</td>
                    <td>{schedule[sched].teacher}</td>
                    <td>{schedule[sched].schedule}</td>
                    <td>{schedule[sched].size}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Link to="/" className="btn btn-sm btn-outline-primary mt-2"> Back </Link>
    </>
  );
};

export default SpecificVenue;