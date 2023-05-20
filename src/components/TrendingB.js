import {Container, Row, Col, Card} from "react-bootstrap"
import trending1 from "../assets/AI/Leonardo AI/Output/trending1.jpg"
import trending2 from "../assets/AI/Leonardo AI/Output/trending2.jpg"
import trending3 from "../assets/AI/Leonardo AI/Output/trending3.jpg"
import trending4 from "../assets/AI/Leonardo AI/Output/trending4.jpg"
import trending5 from "../assets/AI/Leonardo AI/Output/trending5.jpg"
import trending6 from "../assets/AI/Leonardo AI/Output/trending6.jpg"

function TrendingB() {
  return (
    <>
      <div>
        <Container>
          <h1 className="text-white text-center p-2" id="trending">
            Trending Images
          </h1>
          <Row>
            <Col md={4} className="movieWrapper">
              <Card className="movieImage text-white">
                <Card.Img src={trending1} alt="Kraken" />
                <div className="bg-dark">
                  <div className="p-2 m-2">
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="movieWrapper">
              <Card className="movieImage text-white">
                <Card.Img src={trending2} alt="Kraken" />
                <div className="bg-dark">
                  <div className="p-2 m-2">
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="movieWrapper">
              <Card className="movieImage text-white">
                <Card.Img src={trending3} alt="Kraken" />
                <div className="bg-dark">
                  <div className="p-2 m-2">
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="movieWrapper">
              <Card className="movieImage text-white">
                <Card.Img src={trending4} alt="Kraken" />
                <div className="bg-dark">
                  <div className="p-2 m-2">
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="movieWrapper">
              <Card className="movieImage text-white">
                <Card.Img src={trending5} alt="Kraken" />
                <div className="bg-dark">
                  <div className="p-2 m-2">
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="movieWrapper">
              <Card className="movieImage text-white">
                <Card.Img src={trending6} alt="Kraken" />
                <div className="bg-dark">
                  <div className="p-2 m-2">
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TrendingB
