import {Container, Row, Col, Button} from "react-bootstrap"

function Intro() {
  return (
    <>
      <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title">MEMOARAKU</div>
              <div className="subtitle">"When do you think people die? It's when… they are forgotten."</div>
              <div className="listButton mt-4 text-center"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Intro
