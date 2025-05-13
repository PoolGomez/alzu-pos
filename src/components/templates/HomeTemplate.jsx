import styled from "styled-components"
import { useAuthStore } from "../../store/AuthStore";
import { UserAuth } from "../../context/AuthContext";
export function HomeTemplate() {
    const {cerrarSesion} = useAuthStore();
    const {user} = UserAuth();
    return(
        <Container>
            <span>Home Template</span>
            <button onClick={cerrarSesion}>Cerrar</button>
            {/* <span>{user.email}</span> */}
        </Container>
    );
}
const Container = styled.div`
    height: 100vh;
`