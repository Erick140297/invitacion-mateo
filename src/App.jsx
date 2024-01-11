import styled from "styled-components";

const App = () => {
  const handleButtonClick = () => {
    window.location.href = "https://maps.app.goo.gl/mm7HT4GLWE7V3DHPA?g_st=iw";
  };

  return (
    <Container>
      <Button onClick={handleButtonClick}>Ver ubicación</Button>
      <Div2>
        <P2>27 de Enero de 2024</P2>
        <P2>6:00 p.m.</P2>
      </Div2>
      <Div>
        <P>Ven a celebrar</P>
        <P>conmigo</P>
        <H2>Mis 5 años</H2>
        <P>Mateo</P>
      </Div>
      
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-image: url(https://res.cloudinary.com/dnrcmjyu1/image/upload/v1704809369/Projects/Invitaciones/invitacion-fondo_gpxx1w.jpg);

  background-size: cover;
  background-position: center;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const Div = styled.div`
  font-family: "Sevillana", cursive;
  text-align: center;
  margin-bottom:10px;
`;

const Div2 = styled.div`
  font-family: "Sevillana", cursive;
  text-align: center;
  margin: 15px;
`;

const P = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: #4438e4;
  text-shadow: 2px 2px 4px white;
  @media (max-height: 850px) {
    //font-size: 25px;
  }
`;

const P2 = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #2364bf;
  text-shadow: 2px 2px 4px white;
  @media (max-height: 850px) {
    //font-size: 25px;
  }
`;

const H2 = styled.h2`
  font-family: "Dancing Script", cursive;
  font-size: 50px;
  color: #024802;
  text-shadow: 2px 2px 4px white;
  margin: 10px;
  @media (max-height: 850px) {
    //font-size: 35px;
    //margin: 5px;
  }
`;

const Button = styled.button`
  padding: 5px;
  background: #ffffff;
  font-family: "Dancing Script", cursive;
  font-size: 30px;
  color: #024802;
  border-radius: 5px;
  border: 2px #024802 solid;
  margin-bottom: 10px;
  @media (max-height: 850px) {
    //font-size: 20px;
  }
`;
