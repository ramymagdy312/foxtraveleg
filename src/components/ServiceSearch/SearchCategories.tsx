import React, { useState } from "react";
import tabs from "./json/tabs.json";

type props = {
  activeCategory: string;
  changeCategory: (newCategory: string) => void;
};

const SearchCategories = (props: props) => {
  const { activeCategory, changeCategory } = props;

  return (
    <div className="serviceSearch_categories">
      {tabs?.map((tab) => (
        <button
          key={tab.id}
          className={`category ${activeCategory === tab.name ? "active" : ""}`}
          onClick={() => changeCategory(tab.name)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default SearchCategories;
