import {getPackages} from "./packagesExport";
import React, { useEffect, useState } from "react";
import { PackageCard } from "../../components/packagesCard";
import {ViewMoreButton, WarningText, BottomContainer, PackagesWrapper, Title, PackagesContainer} from "../HomePage/packagesStyles";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { Navbar } from '../../components/navbar';
import { Marginer } from '../../components/marginer';
import { Footer } from '../../components/footer';
import {ContentContainer} from "../../containers/HomePage/indexStyle";


function AllPackages(props) {
    const [availablePackages, setPackages] = useState([]);
  
    const packagesResponse = getPackages().then((packages => console.log(packages, "here 1")));

    console.log(packagesResponse, "here 2");
    //conditional rendering for packages:
    const isPackagesEmpty =
      !availablePackages || (availablePackages && availablePackages.length === 0);

  console.log(isPackagesEmpty, "BOMBA 2");
  console.log(availablePackages, "BOMBA 3");

  if (packagesResponse.length > 0) {
    setPackages(packagesResponse);
  }
  console.log(availablePackages, "BOMBA 3");
      useEffect(() => {
        return getPackages();
      }, []);
  
  if(props.top && props.top <= availablePackages.length) {
    availablePackages.splice(props.top);
  }
  
    return (
      <PackagesContainer>
        <Title>Highest Value Packages Summer Sale:</Title>
        <PackagesWrapper>
          {isPackagesEmpty && (
            <WarningText>We are out of active packages! Check next week!</WarningText>
          )}
          {<WarningText>Loading...</WarningText>}
          {!isPackagesEmpty &&
            availablePackages.map((fitnessPackage, index) => (
              <PackageCard key={index} {...fitnessPackage} />
            ))}
        </PackagesWrapper>
        <BottomContainer>
          {!isPackagesEmpty && (
            <ViewMoreButton>All packages</ViewMoreButton>
          )}
        </BottomContainer>
      </PackagesContainer>
    );
}

export default AllPackages;