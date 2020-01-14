import { connect } from "react-redux";
import { request } from "../actions/action";
import ChatPage from "../components/ChatPage";

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

const mapDispachToProps = dispach => {
  return {
    request: query => dispach(request(query))
  };
};

export default connect(mapStateToProps, mapDispachToProps)(ChatPage);

