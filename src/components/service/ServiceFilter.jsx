import React, { useState,useContext } from "react";
import Select from "react-select";
import { MyContext } from "../context";
import services from "../../data/service/creative_services.json"

function ServiceFilter(props) {

  const {serviceType,updateVariable} = useContext(MyContext);

  const [selectedOption, setSelectedOption] = useState(serviceType.location);
  function handleSelectChange(event) {
    setSelectedOption(event.value);
  }
  const [selectedcg, setSelectedcg] = useState(serviceType.category);
  function handleSelectChangecg(event) {
    setSelectedcg(event.target.value);
  }
  const [selectedpr, setSelectedpr] = useState(serviceType.pricerange);
  function handleSelectChangepr(event) {
    setSelectedpr(event.target.value);
  }
  const [selectedrt, setSelectedrt] = useState(serviceType.rating);
  function handleSelectChangert(event) {
    setSelectedrt(event.target.value);
  }
  const fdata = {"location": selectedOption,"category":selectedcg,"pricerange":selectedpr,"rating":selectedrt};
  props.sendtopage(fdata);
  const options = [
    { value: "ahmedabad", label: "Ahmedabad" },
    { value: "vadodara", label: "Vadodara" },
    { value: "rajkot", label: "Rajkot" },
    { value: "surat", label: "Surat" },
    { value: "anand", label: "Anand" },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 16,
      width: "100%",
      minWidth: "180px",
      marginTop: "-5px",
      paddingLeft: 25,
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "transparent",
      minHeight: 55,
      outline: "none",
      borderRadius: 10,
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#fff",
      fontWeight: "400",
      fontSize: 20,
    }),
    container: (provided) => ({
      ...provided,
      width: 250,
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 10,
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: 30,
      color: "white",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#fff",
    }),
  };
  return (
    <div
      className="service-selection wow animate fadeInUp"
      data-wow-delay="1800ms"
      data-wow-duration="1500ms"
    >
      <form action="#" method="post">
        <div className="row">
          <div className="col-lg-3">
            <div className="service-loc-selection">
              <i>
                <img src="assets/images/icons/location.svg" alt="" />
              </i>
              <Select
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,

                  padding: 0,
                  colors: {
                    ...theme.colors,

                    primary: "#444",
                  },
                })}
                styles={customStyles}
                components={{
                  IndicatorSeparator: () => null,
                }}
                width="250px"
                menuColor="#333"
                defaultValue={{label:selectedOption!=""?selectedOption:"Location", value: selectedOption }}
                onChange={handleSelectChange}
                options={options}
                placeholder="Select"
                instanceId="my-unique-id">select</Select>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="service-multi-slection">
              <select
                className="srv-select"
                style={{ padding: "10px 20px", border: "1px solid #ddd" }}
                onChange={handleSelectChangecg}
                value={selectedcg}
              >
              <option value="">Select Category</option>
                {services.map((service)=>{
                  return <option key={service.service_name} value={service.service_name}>{service.service_name}</option>
                })}
              </select>
              <select
                className="srv-select"
                style={{ padding: "10px 20px", border: "1px solid #ddd" }}
                onChange={handleSelectChangepr}
                value={selectedpr}
              >
                <option value="">Price Range</option>
                <option value={500}>&lt;500</option>
                <option value={500-1000}>500-1000</option>
                <option value={1000-2000}>1000-2000</option>
                <option value={2000-5000}>2000-5000</option>
              </select>
              <select
                className="srv-select"
                style={{ padding: "10px 20px", border: "1px solid #ddd" }}
                onChange={handleSelectChangert}
                value={selectedrt}
              >
                <option value="">Rating</option>
                <option value="1">1 Star</option>
                <option value="2">2 Star</option>
                <option value="3">3 Star</option>
                <option value="4">4 Star</option>
                <option value="5">5 Star </option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServiceFilter;
