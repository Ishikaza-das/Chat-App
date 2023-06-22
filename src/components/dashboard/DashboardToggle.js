import { Button, Drawer, Icon } from 'rsuite';
import React from 'react';
import { useModalstate } from '../../misc/custom-hooks';
import Dashboard from '.';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalstate();
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer show={isOpen} onHide={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
