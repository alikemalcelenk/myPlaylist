import React from 'react';

//components
import ActionButton from '../components/actionButton';
import NavigationButton from '../components/navigationButton';
import NavigationSb from '../components/navigation';
import LogoSb from '../components/logo';
import AlbumCoverSb from '../components/albumCover';
import SongSb from '../components/song';

export default {
  title: 'Buttons'
};

export const AddToPlaylist = () => (
  <ActionButton type='add' />
);

export const Remove = () => (
  <ActionButton type='remove' />
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

export const AlbumCover = () => (
  <AlbumCoverSb src='https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381' />
);

export const Song = () => (
  <SongSb type='add' />
);


