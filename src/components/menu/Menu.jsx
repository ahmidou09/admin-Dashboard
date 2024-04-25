import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "./menuData.jsx";

const MenuContainer = styled.div`
  border-right: 1px solid var(--color-lines);
  padding: 2rem;
  min-width: 18rem;

  @media screen and (max-width: 920px) {
    min-width: 8rem;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .item {
      display: flex;
      flex-direction: column;
      color: var(--color-white-2);

      &_list {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        margin-bottom: 1.2rem;
        margin-left: 1rem;
        transition: all 0.2s ease-in-out;

        &:hover {
          color: var(--color-white);
        }

        svg {
          font-size: 2rem;
          transform: translateY(-2px);
        }

        &_title {
          text-transform: capitalize;
          font-weight: 200;

          @media screen and (max-width: 920px) {
            display: none;
          }
        }
      }

      &_title {
        color: var(--color-grey-0);
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
      }
    }
  }
`;

function Menu() {
  return (
    <MenuContainer>
      <div className="menu">
        {menuData.map((section) => (
          <div className="item" key={section.sectionTitle}>
            <span className="item_title">{section.sectionTitle}</span>
            {section.items.map((item) => (
              <Link className="item_list" to={item.path} key={item.title}>
                {item.icon}
                <span className="item_list_title">{item.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </MenuContainer>
  );
}

export default Menu;
