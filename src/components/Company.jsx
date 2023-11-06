import { Col, Row } from "react-bootstrap";
import { Trash3 } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Company({ data }) {
  const dispatch = useDispatch();
  return (
    <>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9} className="text-end">
          <Trash3
            className="heart-icon text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_FAVOURITES",
                payload: data.company_name,
              });
            }}
          />
        </Col>
      </Row>
    </>
  );
}
