import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col sx={1}>
        {pathname !== "/favourites" && (
          <HeartFill
            className="heart-icon"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch({
                type: "ADD_FAVOURITE",
                payload: { company_name: data.company_name },
              });
            }}
          />
        )}
      </Col>
    </Row>
  );
};

export default Job;
