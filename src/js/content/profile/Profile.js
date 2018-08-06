import React from 'react';
import { Text, Block } from '../../common';

const text = `Skrive programvare og lære mer om det er min store lidenskap. 
Gjennom min karriere har jeg jobbet med programvare over hele stacken. 
Selv om jeg liker programmering generelt, er frontendutvikling mitt hjerte nærmest. 
Derfor har det vært mitt hovedfokus gjennom det meste av karrieren min. De siste årene har jeg laget produkter for finans/forsikring og statlige enheter.`;

const Profile = () => (
  <Block type="article" marginBottom="bottomLG">
    <header>
      <Text size="xl">
        <h1>Karriereprofil</h1>
      </Text>
    </header>
    <p>{text}</p>
  </Block>
);

export default Profile;
