import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./Data"
import Card from "./Card";
import Post from "../Post";
function CreateCard(data){
  return<Card
  id={data.id}
        name={data.name}
        lowerName={data.lowerName}
        lowerTenure={data.lowerTenure}
        higherTenure={data.higherTenure}
        minInvestment={data.minInvestment}
        InterestRate={data.InterestRate}
        count={data.count}
        src={data.src}
        link={data.link}
  />
}
export default function SearchFd() {
  console.log(data);
  
  return (
    <div>
      {data.map(CreateCard)}
    </div>
  );
}
