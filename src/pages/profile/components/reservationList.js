import { useEffect } from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { Box, Text } from "react-native-design-utility";
import LoadingContainer from "../../../components/loadingContainer";
import { beEndpoints } from "../../../store/beApi";
import ReservationCard from "./ReservationCard";

const ReservationsList = () => {
  const [getReservations, { data, isLoading, isError, error }] =
    beEndpoints.useGetReservationsMutation({ limit: 10 });

  const loadList = () => {
    getReservations({limit: 10});
  };

  useEffect(() => {
    loadList();
  }, []);

  return (
    <LoadingContainer isLoading={isLoading} isError={isError} error={error}>
      <Text px={16} py={8} fontWeight="bold" size={24}>
        Reservas
      </Text>
      <FlatList
        data={data?.todos || []}
        renderItem={({ item }) => (
          <ReservationCard reservation={item} loadList={loadList} />
        )}
        keyExtractor={(reservation) => reservation.id}
      />
    </LoadingContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "pink",
  },
});

export default ReservationsList;
