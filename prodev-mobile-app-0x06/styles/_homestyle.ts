import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  /* Search section */
  searchGroup: {
    padding: 16,
    backgroundColor: "#fff",
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },

  searchControlGroup: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  searchFormText: {
    fontSize: 14,
    color: "#333",
  },

  searchControl: {
    fontSize: 14,
  },

  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#34967C",
    alignItems: "center",
    justifyContent: "center",
  },

  /* Filters */
  filterGroup: {
    flexDirection: "row",
    columnGap: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  filterContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  /* Listings */
  listingContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },

  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },

  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };
