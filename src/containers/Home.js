import { connect } from "react-redux";
import Home from "../components/Home";
import { request } from "../actions/action";

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    data: state.data
  };
};

const mapDispachToProps = dispach => {
  return {
    request: query => dispach(request(query))
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Home);
