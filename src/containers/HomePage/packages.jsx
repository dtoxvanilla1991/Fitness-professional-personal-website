
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { PackageCard } from "../../components/packagesCard";
import {ViewMoreButton, WarningText, BottomContainer, PackagesWrapper, Title, PackagesContainer} from "./packagesStyles";

const wait = (num) => new Promise((res) => setTimeout(res, num));

export function Packages(props) {
  const [availablePackages, setPackages] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //conditional rendering for packages:
  const isPackagesEmpty =
    !availablePackages || (availablePackages && availablePackages.length === 0);
  //fetching from db:
  const fetchPackages = async () => {
    setLoading(true);
    const response = await Axios.get("http://localhost:4500/packages").catch(
      (err) => {
        console.log("Error: ", err);
      }
    );

    await wait(3000);

    if (response) {
      setPackages(response.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

if(props.top && props.top <= availablePackages.length) {
  availablePackages.splice(props.top);
}

  return (
    <PackagesContainer>
      <Title>Highest Value Packages Summer Sale:</Title>
      <PackagesWrapper>
        {isPackagesEmpty && !isLoading && (
          <WarningText>We are out of active packages! Check next week!</WarningText>
        )}
        {isLoading && <WarningText>Loading...</WarningText>}
        {!isPackagesEmpty &&
          !isLoading &&
          availablePackages.map((fitnessPackage, index) => (
            <PackageCard key={index} {...fitnessPackage} />
          ))}
      </PackagesWrapper>
      <BottomContainer>
        {!isPackagesEmpty && !isLoading && (
          <ViewMoreButton>All packages</ViewMoreButton>
        )}
      </BottomContainer>
    </PackagesContainer>
  );
}