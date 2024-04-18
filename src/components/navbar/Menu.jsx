import React from "react";
import styled from "styled-components";
import { IoMdHome } from "react-icons/io";
import {
  FaUser,
  FaUsers,
  FaShoppingCart,
  FaCalendar,
  FaChartBar,
} from "react-icons/fa";
import { MdFormatListNumberedRtl } from "react-icons/md";
import { FaBorderAll, FaSignsPost } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { LuDatabaseBackup } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { IoAppsSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-right: 1px solid var(--color-lines);
  padding-right: 2rem;
  height: calc(100vh - 15.6rem);

  .item {
    display: flex;
    flex-direction: column;

    &_list {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      margin-left: 1rem;

      &_title {
        color: var(--color-white);
        text-transform: capitalize;
        font-weight: 200;
      }
    }

    &_title {
      color: var(--color-grey-0);
      text-transform: capitalize;
      margin-bottom: 0.5rem;
      font-size: 1.4rem;
    }
  }
`;

function Menu() {
  return (
    <MenuContainer>
      <div className="item">
        <span className="item_title">main</span>
        <Link className="item_list" to="/">
          <IoMdHome />
          <span className="item_list_title">Home</span>
        </Link>
        <Link className="item_list" to="/users/1">
          <FaUser />
          <span className="item_list_title">Profile</span>
        </Link>
      </div>
      <div className="item">
        <span className="item_title">lists</span>
        <Link className="item_list" to="/users">
          <FaUsers />
          <span className="item_list_title">Users</span>
        </Link>
        <Link className="item_list" to="/products">
          <FaShoppingCart />
          <span className="item_list_title">Products</span>
        </Link>
        <Link className="item_list" to="/orders">
          <FaBorderAll />
          <span className="item_list_title">Orders</span>
        </Link>
        <Link className="item_list" to="/posts">
          <FaSignsPost />
          <span className="item_list_title">Posts</span>
        </Link>
      </div>
      <div className="item">
        <span className="item_title">general</span>
        <Link className="item_list" to="/">
          <IoAppsSharp />
          <span className="item_list_title">Elements</span>
        </Link>
        <Link className="item_list" to="/">
          <CgNotes />
          <span className="item_list_title">Notes</span>
        </Link>
        <Link className="item_list" to="/">
          <MdFormatListNumberedRtl />
          <span className="item_list_title">Forms</span>
        </Link>
        <Link className="item_list" to="/">
          <FaCalendar />
          <span className="item_list_title">Calendar</span>
        </Link>
      </div>
      <div className="item">
        <span className="item_title">Maintenance</span>
        <Link className="item_list" to="/">
          <IoMdSettings />
          <span className="item_list_title">Settings</span>
        </Link>
        <Link className="item_list" to="/">
          <LuDatabaseBackup />
          <span className="item_list_title">Backups</span>
        </Link>
      </div>
      <div className="item">
        <span className="item_title">analytics</span>
        <Link className="item_list" to="/">
          <FaChartBar />
          <span className="item_list_title">Charts</span>
        </Link>
        <Link className="item_list" to="/">
          <TbLogout />
          <span className="item_list_title">Logs</span>
        </Link>
      </div>
    </MenuContainer>
  );
}

export default Menu;
