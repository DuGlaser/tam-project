import { connect } from "react-redux";
import { request } from "../actions/action";
import Markdown from "../components/Markdown";

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

export default connect(mapStateToProps, mapDispachToProps)(Markdown);
