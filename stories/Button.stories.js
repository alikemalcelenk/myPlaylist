import React from 'react';

//components
import ActionButton from '../components/actionButton';
import NavigationButton from '../components/navigationButton';
import NavigationSb from '../components/navigation';
import LogoSb from '../components/logo';

export default {
  title: 'Buttons'
};

export const AddToPlaylist = () => (
  <ActionButton bg='#1ED760'>Add to Playlist</ActionButton>
);

export const Remove = () => (
  <ActionButton bg='#D13B41'>Remove</ActionButton>
);

export const NavigationPlaylist = () => (
  <NavigationButton text='Playlist' />
);

export const NavigationSongs = () => (
  <NavigationButton text='Songs' />
);

export const Navigation = () => (
  <NavigationSb selectedPage='songs' />
);

export const Logo = () => (
  <LogoSb />
);


