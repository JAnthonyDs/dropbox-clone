import React from "react";
//import { DropboxLogo } from "../Section/Styles";

import { Container, Navigation, DropboxLogo, Form } from "./Style";

const MenuForm: React.FC = () =>{
    function handleToggle(){
        if (window.toggleActiveMenu) window.toggleActiveMenu()
    }

    return(
        <Container>
            <Navigation>
                <h1>
                    <DropboxLogo/>
                    <span>Dropbox</span>
                </h1>

                <button className="action--close" onClick={handleToggle}>✕</button>
            </Navigation>

            <Form>
                <span className="title">Registre-se</span>
                <span className="subtitle">Preencha o formulário abaixo</span>

                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Sobrenome"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>

                <button>Prosseguir</button>

                <span className="terms">
                    Esta página está sujeita à Política de privacidade e aos termos de serviço.
                </span>
            </Form>

        </Container>

    );
}

export default MenuForm;