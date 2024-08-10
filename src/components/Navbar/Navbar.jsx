import React, { useState } from 'react';
import { AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <AppBar>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: 'bold' }}
            >
              👽 go
            </Button>
            {open && (
              <MenuList
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '100%'
                }}
                onClick={() => setOpen(false)}
              >
                <MenuListItem>
                  <span role='img' aria-label='👨‍💻'>
                    👩🏻‍🚀
                  </span>
                  about me
                </MenuListItem>
                <MenuListItem>
                  <span role='img' aria-label='📁'>
                    📁
                  </span>
                  projects
                </MenuListItem>
                <MenuListItem>
                  <span role='img' aria-label='📁'>
                    👾
                  </span>
                  blog
                </MenuListItem>
              </MenuList>
            )}
          </div>
          ˜”*°•.˜”*°• cam's supercool website •°*”˜.•°*”˜
          <TextInput placeholder='Search...' width={150} />
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
}

export default Navbar;
