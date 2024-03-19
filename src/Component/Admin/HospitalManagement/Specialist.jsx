import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { GoPlus } from "react-icons/go";
import { RiDeleteBin5Line } from 'react-icons/ri';


const options = [
    { value: 'view', label: 'View', link: '/PatientInfo/view' },
    { value: 'delete', label: 'Delete', link: '/PatientInfo' },
  ];  


const Specialist = () => {

    const [selectedOption, setSelectedOption] = useState(null);


    // const [NewMedRecord, setNewMedRecord] = useState(false);

  return (
    <div className="patient-content__med">
      <div className="patient-content__top">
        <h2>Specialists</h2>
      </div>

      <div className="health__main">
            <table className="patient-list">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Specialist Name</th>
                  <th>Created At</th>
                  <th>Department</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>2022-03-01</td>
                  <td>Male</td>
                  <td>A+</td>
                  <td>35</td>
                  <td className="action-column">
                  <div>
                        <RiDeleteBin5Line />
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Doe</td>
                  <td>2022-03-02</td>
                  <td>Female</td>
                  <td>B-</td>
                  <td>28</td>
                  <td className="action-column">
                  <div>
                        <RiDeleteBin5Line />
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-column">
                  <div>
                        <RiDeleteBin5Line />
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-column">
                  <div>
                        <RiDeleteBin5Line />
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-column">
                  <div>
                        <RiDeleteBin5Line />
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-column">
                  <div>
                        <RiDeleteBin5Line />
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-column">
                  <div>
                        <RiDeleteBin5Line />
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-column">
                  <div>
                        <RiDeleteBin5Line />
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-column">
                  <div>
                        <RiDeleteBin5Line />
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-column">
                  <div>
                        <RiDeleteBin5Line />
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-column">
                  <div>
                        <RiDeleteBin5Line />
                      </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link to="/AddSpecialist">
        <div className="create">
          <GoPlus />
        </div>
        </Link>

    </div>
  );
}

export default Specialist