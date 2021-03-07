import React from 'react';

//components - styled-system
import Box from '../components/styledSystem/box';

//components - icons
import * as Icons from '../components/icons';

export default {
  title: 'Icons',
};

export const Primary = () => (
  <Box>
    <Icons.Playlist height={50} width={50}/>
    <Icons.Music height={50} width={50}/>
  </Box>
);


