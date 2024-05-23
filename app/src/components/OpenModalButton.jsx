import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const OpenModalButton = ({ onOpen }) => {
  return (
    <IconButton size="sm" variant="ghost" isRound={true} icon={<AddIcon />} onClick={onOpen} />
  );
};

export default OpenModalButton;