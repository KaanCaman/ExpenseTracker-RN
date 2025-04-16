import React from "react";
import {
  BillIcon,
  ClothingIcon,
  CreditIcon,
  DefaultIcon,
  EntertainmentIcon,
  FoodIcon,
  HealthIcon,
  HobbyIcon,
  HomeIcon,
  InvestmentIcon,
  OtherIcon,
  RentIcon,
  ShoppingIcon,
  TransportIcon,
  VacationIcon,
} from "../icon/categories";

export const getExpenseIcon = (
  category: string,
  size: number = 24,
  color: string = "#000"
) => {
  switch (category.toLowerCase()) {
    case "bill":
      return <BillIcon color={color} width={size} height={size} />;
    case "clothing":
      return <ClothingIcon color={color} width={size} height={size} />;
    case "credit":
      return <CreditIcon color={color} width={size} height={size} />;
    case "entertainment":
      return <EntertainmentIcon color={color} width={size} height={size} />;
    case "food":
      return <FoodIcon color={color} width={size} height={size} />;
    case "health":
      return <HealthIcon color={color} width={size} height={size} />;
    case "hobby":
      return <HobbyIcon color={color} width={size} height={size} />;
    case "home":
      return <HomeIcon color={color} width={size} height={size} />;
    case "investment":
      return <InvestmentIcon color={color} width={size} height={size} />;
    case "other":
      return <OtherIcon color={color} width={size} height={size} />;
    case "rent":
      return <RentIcon color={color} width={size} height={size} />;
    case "shopping":
      return <ShoppingIcon color={color} width={size} height={size} />;
    case "transport":
      return <TransportIcon color={color} width={size} height={size} />;
    case "vacation":
      return <VacationIcon color={color} width={size} height={size} />;
    default:
      return <DefaultIcon color={color} width={size} height={size} />;
  }
};
