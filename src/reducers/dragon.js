import {
  ADD_DRAGON,
  SET_DRAGON,
  DELETE_DRAGON,
  REVERSE_DRAGON,
} from "../constants/actions";

const stateInit = {
  dragons: ["Apalala", "Balaur", "Gonor"],
  dragon: "",
  age: "",
  count: 3,
  message: "",
};

const reducer = (state = stateInit, action = {}) => {
  const { dragons, dragon } = state;
  switch (action.type) {
    case ADD_DRAGON:
      if (dragon.trim() === "") {
        return {
          ...state,
          message: "Merci de renseigner le nom du dragon",
        };
      }

      if (dragons.includes(dragon)) {
        return {
          ...state,
          message: `Le dragon ${dragon} existe déjà`,
        };
      }

      return {
        ...state,
        dragons: dragons.concat(dragon),
        message: `Merci pour votre ajout, ${dragon} a bien été ajouté`,
        dragon: "",
        count: state.count + 1,
      };

    case SET_DRAGON:
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value,
      };

    case DELETE_DRAGON:
      const dragonDelete = action.payload;
      return {
        ...state,
        dragons: dragons.filter((dragon) => dragon !== dragonDelete),
        count: state.count - 1,
        message: `Le dragon ${dragonDelete} a bien été supprimé`,
      };

    case REVERSE_DRAGON:
      return {
        ...state,
        dragons: dragons.reverse(),
      };
    default:
      return state;
  }
};
export default reducer;
