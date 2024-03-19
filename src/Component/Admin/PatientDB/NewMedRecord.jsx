import { useState } from 'react';
import Sidebar from '../AdminSidebar/Sidebar';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoReturnUpBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineSaveAlt } from "react-icons/md";


const NewMedRecord = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will go back to the previous page in history
  };

  const special = [
    { value: 'cardiologist', label: 'Cardiologist' },
    { value: 'Paediatrist', label: 'Paediatrist' },
  ];

  const [selectedTreatments, setSelectedTreatments] = useState([]);

  const treatmentOptions = [
    'Surgery',
    'Chemotherapy',
    'Physical Therapy',
    'Medication',
    'Counseling',
  ];

  const handleCheckboxChange = (treatment) => {
    // Toggle the selection of the treatment
    if (selectedTreatments.includes(treatment)) {
      setSelectedTreatments((prevSelected) =>
        prevSelected.filter((item) => item !== treatment)
      );
    } else {
      setSelectedTreatments((prevSelected) => [...prevSelected, treatment]);
    }
  };
  
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-body">
        <div className="header">
          <span className="search">
            <input type="text" placeholder="Search..." />
          </span>
          <div className="notify">
            <div className="bell">
              <IoMdNotificationsOutline />
            </div>
            <div className="img"></div>
            <h4>Patient Name</h4>
          </div>
        </div>

        <div className="history">
         <div className="history-right">
         <div className="back" onClick={handleGoBack}><IoReturnUpBack /></div>
          <div className="page-name">New Medical Record</div>
         </div>
        </div>

        <div className="patient-main__content">
          <div className="patient-menuu">
            <div className="patient-menu__content">
              {/* <div className="patient-img"></div> */}
              <div className="patient-content__text">
                <h3>John Doe</h3>
                <p>johndoe@gmail.com</p>
                <p>(+234) 456-7890</p>
              </div>
              <div className="age">Age: 21</div>
            </div>
          </div>

          <div className="patient-content">
            <div className="formm">
              <form>
                <label htmlFor="doctor">Doctor :
                <input type="text" id="doctor" required /></label>

                <label htmlFor="specialization">Specialization :
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={special.map(option => ({
                        value: option.value,
                        label: option.label
                    }))} 
                />
                </label>

                <label htmlFor="complaint">Complaint :
                <textarea name="complaint" id="complaint" className='textarea'></textarea>
                </label>
                
                <label htmlFor="diagnosis">Diagnosis :
                <textarea name="diagnosis" id="diagnosis" className='textarea'></textarea>
                </label>
                
                <label htmlFor="vitals">Vitals :
                <textarea name="vitals" id="vitals" className='textarea'></textarea>
                </label>

                <label>Treatments:</label>
                    {treatmentOptions.map((treatment) => (
                <div key={treatment} className='checkbox'>
                    <label htmlFor={treatment}>
                    <input
                        type="checkbox"
                        id={treatment}
                        name="treatments"
                        value={treatment}
                        checked={selectedTreatments.includes(treatment)}
                        onChange={() => handleCheckboxChange(treatment)}
                    />{treatment}
                    </label>
                </div>
                ))}
              </form>

              <div className="medicine">
              <h3>Medicine</h3>

              <table className="invoice-table">
                <thead>
                  <th>Item</th>
                  <th>Item Price (Ngn)</th>
                  <th>Dosage</th>
                  <th>Instraction</th>
                  <th>Quantity</th>
                  <th>Amount (Ngn)</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Surgery</td>
                    <td>100,000</td>
                    <td>1-M/A/E</td>
                    <td>After meal</td>
                    <td>1</td>
                    <td>100,000</td>
                    <td>
                      <div>
                        <RiDeleteBin5Line />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Surgery</td>
                    <td>100,000</td>
                    <td>1-M/A/E</td>
                    <td>After meal</td>
                    <td>1</td>
                    <td>100,000</td>
                    <td>
                      <div>
                        <RiDeleteBin5Line />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Surgery</td>
                    <td>100,000</td>
                    <td>1-M/A/E</td>
                    <td>After meal</td>
                    <td>1</td>
                    <td>100,000</td>
                    <td>
                      <div>
                        <RiDeleteBin5Line />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="invoice-btn">+ Add Medicine</div>
              </div>

              <label htmlFor="tests">Tests :
                <textarea name="tests" id="tests" className='textarea'></textarea>
                </label>

              <button>Save <MdOutlineSaveAlt /></button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMedRecord;
