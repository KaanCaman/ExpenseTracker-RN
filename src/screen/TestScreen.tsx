import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import AppButton from "../components/buttons/AppButton";
import AppDateTimePicker from "../components/inputs/AppDatetimePicker";
import Picker from "../components/inputs/AppPicker";
import {
  BillIcon,
  EntertainmentIcon,
  FoodIcon,
  HealthIcon,
  HomeIcon,
  RentIcon,
  ShoppingIcon,
  TransportIcon,
  CreditIcon,
  VacationIcon,
  HobbyIcon,
  InvestmentIcon,
  OtherIcon,
  ClothingIcon,
  DefaultIcon,
} from "../icon/categories";

const size = 80;
const categoryItems = [
  {
    label: "custom",
    value: "custom",
    display: <DefaultIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "cl",
    value: "cl",
    display: <ClothingIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "other",
    value: "other",
    display: <OtherIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "inves",
    value: "inves",
    display: <InvestmentIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "hobby",
    value: "hobby",
    display: <HobbyIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "vaction",
    value: "vaction",
    display: <VacationIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "credit",
    value: "credit",
    display: <CreditIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "Home",
    value: "home",
    display: <HomeIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "Gıda",
    value: "food",
    display: <FoodIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "Ulaşım",
    value: "transport",
    display: <TransportIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "Fatura",
    value: "bill",
    display: <BillIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "Eğlence",
    value: "entertainment",
    display: <EntertainmentIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "sa",
    value: "saa",
    display: <HealthIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "bas",
    value: "cas",
    display: <ShoppingIcon color="#FFF" width={size} height={size} />,
  },
  {
    label: "rent",
    value: "rent",
    display: <RentIcon color="#FFF" width={size} height={size} />,
  },
];

const TestScreen = () => {
  const [date, setDate] = useState<Date>(new Date());
  const { theme, toggleThemeMode } = useTheme();

  const [selectedCategory, setSelectedCategory] = useState<string | number>("");
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          padding: theme.spacing.small,
        },
      ]}
    >
      <Picker
        items={categoryItems}
        selectedValue={selectedCategory}
        onValueChange={(value) => setSelectedCategory(value)}
        placeholder="Kategori seçiniz"
        searchable={true}
      />
      <AppDateTimePicker value={date} onChange={(date) => setDate(date)} />
      <AppButton title="Test Button" onPress={toggleThemeMode} />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
