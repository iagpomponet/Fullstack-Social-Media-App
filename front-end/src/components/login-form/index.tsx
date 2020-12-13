import React, { FunctionComponent } from 'react';
import * as Styled from './styles';

const LoginForm: FunctionComponent = () => (
   <Styled.Form>
    <Styled.Label htmlFor ="email">E-mail</Styled.Label>
    <Styled.Input id="email" type="email"></Styled.Input>
    <Styled.Label htmlFor ="password">Senha</Styled.Label>
    <Styled.Input id="password" type="password"></Styled.Input>
    <Styled.NewAccountLink>Não tem uma conta? <strong>Criar nova conta</strong></Styled.NewAccountLink>
    <Styled.Button>Entrar</Styled.Button>
  </Styled.Form>
)

export default LoginForm;

