import { Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Checkbox, VStack, Divider, SimpleGrid } from '@chakra-ui/react';
import { Elem } from './rows/Threshold';
import { useState } from 'react';

export interface UIConfig {
  showDice: boolean,
  showLife: boolean;
  showYourLife: boolean;
  elems: Elem[];
  oppElems: Elem[];
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
            <Divider />
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
            <Text>Opponent's Threshold</Text>
            <SimpleGrid columns={2} spacing='1rem'>
            <Checkbox 
              onChange={(e) => {
                const oppElems = newConfig.oppElems.filter((el) => el !== Elem.EARTH);
                if (e.target.checked) oppElems.push(Elem.EARTH);
                setNewConfig({
                  ...newConfig,
                  oppElems: oppElems,
                });
              }} 
            isChecked={newConfig.oppElems.includes(Elem.EARTH)}>Earth</Checkbox>
          <Checkbox 
            onChange={(e) => {
              const oppElems = newConfig.oppElems.filter((el) => el !== Elem.FIRE);
              if (e.target.checked) oppElems.push(Elem.FIRE);
              setNewConfig({
                ...newConfig,
                oppElems: oppElems,
              });
            }} 
            isChecked={newConfig.oppElems.includes(Elem.FIRE)}>Fire</Checkbox>
          <Checkbox 
            onChange={(e) => {
              const oppElems = newConfig.oppElems.filter((el) => el !== Elem.WATER);
              if (e.target.checked) oppElems.push(Elem.WATER);
              setNewConfig({
                ...newConfig,
                oppElems: oppElems,
              });
            }} 
            isChecked={newConfig.oppElems.includes(Elem.WATER)}>Water</Checkbox>
            <Checkbox 
              onChange={(e) => {
                const oppElems = newConfig.oppElems.filter((el) => el !== Elem.AIR);
                if (e.target.checked) oppElems.push(Elem.AIR);
                setNewConfig({
                  ...newConfig,
                  oppElems: oppElems,
                });
              }} 
            isChecked={newConfig.oppElems.includes(Elem.AIR)}>Air</Checkbox>
            </SimpleGrid>
            <Divider />
            <Text>My Threshold</Text>
            <SimpleGrid columns={2} spacing='1rem'>
            <Checkbox 
              onChange={(e) => {
                const elems = newConfig.elems.filter((el) => el !== Elem.EARTH);
                if (e.target.checked) elems.push(Elem.EARTH);
                setNewConfig({
                  ...newConfig,
                  elems: elems,
                });
              }} 
            isChecked={newConfig.elems.includes(Elem.EARTH)}>Earth</Checkbox>
          <Checkbox 
            onChange={(e) => {
              const elems = newConfig.elems.filter((el) => el !== Elem.FIRE);
              if (e.target.checked) elems.push(Elem.FIRE);
              setNewConfig({
                ...newConfig,
                elems: elems,
              });
            }} 
            isChecked={newConfig.elems.includes(Elem.FIRE)}>Fire</Checkbox>
          <Checkbox 
            onChange={(e) => {
              const elems = newConfig.elems.filter((el) => el !== Elem.WATER);
              if (e.target.checked) elems.push(Elem.WATER);
              setNewConfig({
                ...newConfig,
                elems: elems,
              });
            }} 
            isChecked={newConfig.elems.includes(Elem.WATER)}>Water</Checkbox>
            <Checkbox 
              onChange={(e) => {
                const elems = newConfig.elems.filter((el) => el !== Elem.AIR);
                if (e.target.checked) elems.push(Elem.AIR);
                setNewConfig({
                  ...newConfig,
                  elems: elems,
                });
              }} 
            isChecked={newConfig.elems.includes(Elem.AIR)}>Air</Checkbox>
            </SimpleGrid>
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