import React, { useState, useEffect, useRef } from 'react';
import { Button, Overlay, Popover } from 'react-bootstrap';
import {IoIosNotifications} from 'react-icons/io'


const Notifications = () => {


    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  
    return (
      <div ref={ref}>
        <Button onClick={handleClick }><IoIosNotifications></IoIosNotifications></Button>
  

        <Overlay
          show={show}
          target={target}
          placement="left-end"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">Du har 5 timmar att mäta din aktivitet innan din streak går ut</Popover.Title>
            <Popover.Content>
              <strong>Glöm inte</strong> att mäta dina värden.
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
    );
  
  
}
export default Notifications;