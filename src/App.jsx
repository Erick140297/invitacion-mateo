import styled from "styled-components";

const App = () => {
  const handleButtonClick = () => {
    window.location.href = "https://maps.app.goo.gl/MMSc3fqByZD8Bw32A";
  };

  return (
    <Container>
      <Div>
        <P>Te invitamos</P>
        <H2>A nuestra Posada Navideña</H2>
        <P>Por parte de la familia Colula Salinas</P>
      </Div>
      <Div2>
        <P2>23 de Diciembre de 2023</P2>
        <P2>7:00 p.m.</P2>
        <P2>Cerrada Paseo de Otoño Mz. 6 Lt. 2, colonia San Juan Zapotla</P2>
      </Div2>
      <Button onClick={handleButtonClick}>Ver ubicación</Button>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-image: url(https://res.cloudinary.com/dnrcmjyu1/image/upload/v1703154842/Projects/Invitaciones/navidad02_ciq2ww.png);

  background-size: cover;
  background-position: center;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  font-family: "Sevillana", cursive;
  text-align: center;
  margin-top: 120px;
  margin-bottom: 40px;
`;

const Div2 = styled.div`
  font-family: "Sevillana", cursive;
  text-align: center;
  margin-bottom: 40px;
`;

const P = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: #4438e4;
  text-shadow: 2px 2px 4px white;
  @media (max-height: 850px) {
    font-size: 25px;
  }
`;

const P2 = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #2364bf;
  text-shadow: 2px 2px 4px white;
  @media (max-height: 850px) {
    font-size: 25px;
  }
`;

const H2 = styled.h2`
  font-family: "Dancing Script", cursive;
  font-size: 50px;
  color: #a1620b;
  text-shadow: 2px 2px 4px white;
  margin: 30px;
  @media (max-height: 850px) {
    font-size: 35px;
    margin: 15px;
  }
`;

const Button = styled.button`
  padding: 5px;
  background: #ffffff;
  font-family: "Dancing Script", cursive;
  font-size: 30px;
  color: #ca7e13;
  border-radius: 5px;
  border: 2px #ca7e13 solid;
  @media (max-height: 850px) {
    font-size: 20px;
  }
`;
