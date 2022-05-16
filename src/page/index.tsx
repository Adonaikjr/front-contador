import { Container, Content } from "./styled";
import Florest from "../components/buttons/florest";
import Nuvem from "../components/buttons/nuvem";
import Barraca from "../components/buttons/barraca";
import Fogo from "../components/buttons/fogo";
import Contador from "../components/contador";
import Play from "../components/buttons/play";
import Stop from "../components/buttons/stop";
import Menos from "../components/buttons/menos";
import Mais from "../components/buttons/mais";

const Page = () =>{ 
    return(
        <>
        <Content>
            <Contador/>
            <div>
                <Play/>
                <Stop/>
                <Mais/>
                <Menos/>
            </div>
        </Content>
        
    <Container>
        <Florest/>
        <Nuvem/>
        <Barraca/>
        <Fogo/>
    </Container>
    </>
    )
}
export default Page;