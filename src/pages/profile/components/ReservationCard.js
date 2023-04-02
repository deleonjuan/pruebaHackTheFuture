import { Pressable, StyleSheet } from "react-native";
import { Box, Text } from "react-native-design-utility";
import Icon from "react-native-vector-icons/Ionicons";
import GenericCard from "../../../components/genericCard";
import { beEndpoints } from "../../../store/beApi";

const ReservationCard = ({ reservation, loadList }) => {
  const { completed, todo, id: todoId } = reservation;

  const [updateStatus] = beEndpoints.useUpdateReservationsMutation();
  const [removeTodo] = beEndpoints.useRemoveReservationsMutation();

  const updateTodoStatus = () => {
    if (completed) removeTodo(todoId);
    else updateStatus(todoId, { completed: true });
    loadList();
  };

  return (
    <GenericCard
      title={
        <Text color={completed ? "green" : "#c46404"}>
          estado: {completed ? "completado" : "pendiente"}
        </Text>
      }
      body={
        <Box dir="row">
          <Box w="60%">
            <Text>{todo}</Text>
          </Box>

          <Box w="40%" justify="end" dir="row">
            <Pressable style={styles.toggleButton} onPress={updateTodoStatus}>
              {completed ? (
                <Icon name="trash-outline" />
              ) : (
                <Icon name="checkmark-outline" />
              )}
            </Pressable>
          </Box>
        </Box>
      }
    />
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: "#ccc",
    height: 30,
    justifyContent: "center",
  },
});

export default ReservationCard;
