import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Checkbox, VStack, Divider } from '@chakra-ui/react';
import { Elem } from './Threshold';
import { useState } from 'react';

export interface UIConfig {
  showDice: boolean,
  showLife: boolean;
  showYourLife: boolean;
  elems: Elem[];
  showPStone: boolean;
}

export interface ConfirmModalProps {
    uiConfig: UIConfig;
    shown: boolean;
    onCancelClick: () => void;
    onConfirmClick: (uiConfig: UIConfig) => void;
}

export function CustomizeModal({ uiConfig, shown, onCancelClick, onConfirmClick }: ConfirmModalProps) {
  
  const [newConfig, setNewConfig] = useState<UIConfig>(uiConfig);

  // TODO this UI is super janky and lazy, refactor this
  
  return (
    <Modal isOpen={shown} onClose={onCancelClick}>
      <ModalOverlay />
      <ModalContent w="80%" mt="10rem" userSelect='none'>
        <ModalHeader>Customize</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems='start'>
            <Checkbox
              isChecked={newConfig.showDice}
              onChange={(e) => {
                setNewConfig({
                  ...newConfig,
                  showDice: e.target.checked,
                });
              }}>
              Dice
            </Checkbox>
            <Checkbox
              isChecked={newConfig.showLife}
              onChange={(e) => {
                setNewConfig({
                  ...newConfig,
                  showLife: e.target.checked,
                });
              }}>
              My Life Total
            </Checkbox>
            {newConfig.showLife && 
              <Checkbox
                isChecked={newConfig.showYourLife}
                onChange={(e) => {
                  setNewConfig({
                    ...newConfig,
                    showYourLife: e.target.checked,
                  });
                }}>
                Opponent's Life Total
              </Checkbox>
            }
            <Divider />
            <Checkbox 
              onChange={(e) => {
                const elems = newConfig.elems.filter((el) => el !== Elem.EARTH);
                if (e.target.checked) elems.push(Elem.EARTH);
                setNewConfig({
                  ...newConfig,
                  elems: elems,
                });
              }} 
            isChecked={newConfig.elems.includes(Elem.EARTH)}>Earth Threshold</Checkbox>
          <Checkbox 
            onChange={(e) => {
              const elems = newConfig.elems.filter((el) => el !== Elem.FIRE);
              if (e.target.checked) elems.push(Elem.FIRE);
              setNewConfig({
                ...newConfig,
                elems: elems,
              });
            }} 
            isChecked={newConfig.elems.includes(Elem.FIRE)}>Fire Threshold</Checkbox>
          <Checkbox 
            onChange={(e) => {
              const elems = newConfig.elems.filter((el) => el !== Elem.WATER);
              if (e.target.checked) elems.push(Elem.WATER);
              setNewConfig({
                ...newConfig,
                elems: elems,
              });
            }} 
            isChecked={newConfig.elems.includes(Elem.WATER)}>Water Threshold</Checkbox>
            <Checkbox 
              onChange={(e) => {
                const elems = newConfig.elems.filter((el) => el !== Elem.AIR);
                if (e.target.checked) elems.push(Elem.AIR);
                setNewConfig({
                  ...newConfig,
                  elems: elems,
                });
              }} 
            isChecked={newConfig.elems.includes(Elem.AIR)}>Air Threshold</Checkbox>
            <Divider />
            <Checkbox 
              isChecked={newConfig.showPStone}
              onChange={(e) => {
                setNewConfig({
                  ...newConfig,
                  showPStone: e.target.checked,
                });
              }}
            >Philosopher's Stone</Checkbox>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button borderRadius='2rem' variant='ghost'  mr='0.5rem' onClick={onCancelClick}>Cancel</Button>
          <Button borderRadius='2rem' colorScheme='blue' onClick={() => onConfirmClick(newConfig)}>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}