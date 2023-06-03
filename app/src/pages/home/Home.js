import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
// import {apartment1, apartment2, apartment3, apartment4, apartment5, dorm6, hotel1, hotel2, hotel3, hotel4, hotel5, dorm1, dorm2, dorm3, dorm4, dorm5} from "../../assets/images";
import LoadingScreenPage from "../../atoms/loadingScreenPage/LoadingScreenPage";
import {
  NavBar,
  Banner,
  Footer,
  ApartmentCarousel,
  HotelsCarousel,
  DormCarousel,
  Multilayerfilter,
  CardListing,
} from "../../organisms";
// import images from '../../assets/images/dorms';
import { Row, Button } from "react-bootstrap";
const url = "https://elbnb-server.herokuapp.com";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState("");
  const [reportFilters, setReportFilters] = useState({});
  const [report, setReport] = useState("");
  const [searched, setSearched] = useState(false);
  const toggleSearched = () => setSearched(true);
  const [topApartments, setTopApartments] = useState([]);
  const [topDorms, setTopDorms] = useState([]);
  const [topHotels, setTopHotels] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearch = (event) => {
  //   setSearchQuery(event.target.value);
  // }
  
  // const filteredImages = images.filter(image => image.includes(searchQuery));


  useEffect(() => {
    const fetchData = async (type) => {
      try {
        const response = await axios.post(
          url + "/get-top-five-accommodations",
          { type }
        );
        console.log(`-${type}-`);
        console.log(response.data);

        return response.data.accommodation;
      } catch (error) {
        console.error(error);
        return [];
      }
    };

    Promise.all([
      fetchData("Dorm"),
      fetchData("Apartment"),
      fetchData("Hotel"),
    ]).then(([dorms, apartments, hotels]) => {
      setTopDorms(dorms);
      setTopApartments(apartments);
      setTopHotels(hotels);

      setLoading(false);
    });
  }, []);

  const generateReports = () => {
    const blob = new Blob([report], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleQuery = (queries, filters) => {
    setQueries(queries);
    setReportFilters(filters);
    axios
      .post(url + "/generate-report", { filters: filters })
      .then((res) => {
        console.log("Generating report link");
        setReport(res.data);
      })

      .catch((err) => console.log(err));

    console.log("passed up successfully");
  };

  return (
    <div className="home-container">
      <NavBar />
      <Banner />
      <Multilayerfilter
        toggleSearched={toggleSearched}
        handleQuery={handleQuery}
      />
      {queries ? (
        <div className="reports-btn">
          <Button className="carousel-btn" onClick={generateReports}>
            {" "}
            Download 📥{" "}
          </Button>
        </div>
      ) : (
        <></>
      )}
      {loading ? (
        <div className="centeredSpinner">
          <LoadingScreenPage size={80} color={"#4f4a47"} loading={loading} />
        </div>
      ) : (
        <div>
          {searched ? (
            <div
              className="searched-list"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {/* <div className="reports-btn"> */}
              {/* </div> */}
              {queries ? (
                queries.map((query) => (
                  <CardListing
                    key={queries.id}
                    name={query.ACCOMMODATION_NAME}
                    location={query.ACCOMMODATION_LOCATION}
                    description={query.ACCOMMODATION_DESCRIPTION}
                    amenities={query.ACCOMMODATION_AMENITIES}
                    max_price={query.MAX_PRICE}
                    owner={query.USER_FNAME + " " + query.USER_LNAME}
                    rating={query.rating}
                  />
                ))
              ) : (
                <div>No results found.</div>
              )}
            </div>
          ) : (
            <div className="home-carousel-list">
              <ApartmentCarousel topApartments={topApartments} />
              <DormCarousel topDorms={topDorms} />
              <HotelsCarousel topHotels={topHotels} />
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;