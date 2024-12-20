import React, { useState, useMemo } from "react";
import Notification from "../Toaster/notifications";
import { ToastContainer } from "react-toastify";

const FilteredContestList = ({
  data,
  buttonData,
  platformNames,
  platformImages,
  isLogin,
}) => {
  const [activeFilters, setActiveFilters] = useState(new Set(["all"]));

  const toggleFilter = (filterId) => {
    setActiveFilters((prevFilters) => {
      const newFilters = new Set(prevFilters);

      if (filterId === "all") {
        if (newFilters.has("all")) {
          newFilters.clear(); // Deselect all
        } else {
          newFilters.clear();
          newFilters.add("all"); // Select all
        }
      } else {
        if (newFilters.has(filterId)) {
          newFilters.delete(filterId); // Deselect the filter
        } else {
          newFilters.add(filterId); // Select the filter
        }

        // Manage the "all" filter based on other selections
        if (newFilters.size === 0) {
          newFilters.add("all"); // If no filters selected, select "all"
        } else if (newFilters.size === buttonData.length) {
          newFilters.clear();
          newFilters.add("all");
        } else {
          newFilters.delete("all"); // Remove "all" if some but not all filters are selected
        }
      }

      return newFilters;
    });
  };

  const filteredData = useMemo(() => {
    if (activeFilters.has("all")) {
      return data; // If "all" is selected, return all data
    }
    return data.filter((item) => {
      const platformName = platformNames[item.resource];
      const buttonId = buttonData.find(
        (button) => button.name === platformName
      )?.id;
      return buttonId && activeFilters.has(buttonId);
    });
  }, [activeFilters, platformNames, buttonData, data]);

  const isAllSelected = activeFilters.has("all");

  return (
    <div className="containeroffilterbuttonsandcards">
      <ToastContainer />
      <div className="filter">
        <button
        key={"all"}
          onClick={() => toggleFilter("all")}
          className={`${isAllSelected ? "clicked" : ""}`}
        >
          <span>All</span>
        </button>
        {buttonData.map((button) => (
          <button
            key={button.id}
            onClick={() => toggleFilter(button.id)}
            className={`body-row ${
              activeFilters.has(button.id) ? "clicked" : ""
            }`}
          >
            <span>{button.name}</span>
          </button>
        ))}
      </div>
      <div className="updates">**Data last updated on Friday 6 december 2024 1:00:00 AM</div>
      <div className="updates">Important: Notifications services are down for some time due to hosting issues. We are trying our best to give you the best experience.</div>
      <div className="card_container">
        <div className="main">
          {filteredData.map((item) => (
            <div key={item._id} className="card">
              <div className="image">
                <img
                  src={platformImages[platformNames[item.resource]]}
                  alt={platformNames[item.resource]}
                />
              </div>
              <div className="name">{platformNames[item.resource]}</div>
              <div className="level">
                <a href={item.href}>{item.event}</a>
              </div>
              <div className="contest_details">
                <p className="date">
                  At{" "}
                  {(() => {
                    const date = new Date(item.date);
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
                    const day = String(date.getDate()).padStart(2, "0");
                    return `${year}-${month}-${day}`;
                  })()}
                </p>
                <p className="time">
                  {(() => {
                    const date = new Date(item.date);
                    return date.toLocaleTimeString();
                  })()}
                </p>
              </div>
              <div className="buttons">
                <button onClick={() => Notification({ item, isLogin })}>
                  <span>notify me</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredContestList;
