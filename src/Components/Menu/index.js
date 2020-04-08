import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          logoSize={80}
          backgroundColor="#FFF"
          color="#8B10AE"
        />
      </Code>
      <Nav>
        <NavItem>
          <MaterialIcons name="help-outline" size={20} color="#FFF" />
          <NavText>Me Ajuda</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
        
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
