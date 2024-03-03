import { useState } from 'react';
import { SlArrowDown, SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router';
import { UISide } from './styles';
import {menus} from "./constant";

const SideNavigation = () => {
  const [menu, setMenu] = useState(menus);
  const [allOpen, setAllOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <UISide.Wrapper width={350} bgcolor="#163683">
      <UISide.TotalBtn
        onClick={() => {
          setAllOpen((p) => !p);
          setMenu((p) => p.map((m) => ({ ...m, open: allOpen ? true : false })));
        }}
      >
        {allOpen ? '전체 닫기' : '전체 열기'}{' '}
      </UISide.TotalBtn>
      {menu.map((m, i) => (
        <div key={i}>
          {/* depth 1 */}
          <UISide.Item
            onClick={() => setMenu((p) => p.map((m, mi) => (i === mi ? { ...m, open: !m.open } : m)))}
            color="white"
            hoverbgcolor="#4F7CE6"
          >
            <UISide.Content height={50} width={200}>
              <UISide.Icon textsize={23}>{m.icon}</UISide.Icon>
              <UISide.Text textsize={15} textweight={m.open ? 700 : 500}>
                {m.depth1}
              </UISide.Text>
            </UISide.Content>
            {m.open ? <SlArrowDown /> : <SlArrowRight />}
          </UISide.Item>
          {/* depth 2 */}
          <UISide.Depth2Container open={m.open}>
            {m.open &&
              m.depth2.map((deep, i2) => (
                <UISide.Item
                  key={i2}
                  opacity={0.5}
                  onClick={() => navigate(deep.path)}
                  color="white"
                  hoverbgcolor="#4F7CE6"
                >
                  <UISide.Content height={45} width={200}>
                    <UISide.Icon textsize={20}>{m.icon}</UISide.Icon>
                    <UISide.Text textsize={15}>{deep.name}</UISide.Text>
                  </UISide.Content>
                </UISide.Item>
              ))}
          </UISide.Depth2Container>
        </div>
      ))}
    </UISide.Wrapper>
  );
};

export default SideNavigation;
