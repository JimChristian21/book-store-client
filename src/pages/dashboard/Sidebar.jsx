import React from 'react'
import { Sidebar as FBSidebar} from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

import userImg from "../../assets/profile.jpg";

const Sidebar = () => {
  return (
    <FBSidebar aria-label="Sidebar with content separator example">
        <FBSidebar.Logo
        href="#"
        img={userImg}
        imgAlt="Flowbite logo"
      >
        <p>
          Flowbite
        </p>
      </FBSidebar.Logo>
      <FBSidebar.Items>
        <FBSidebar.ItemGroup>
          <FBSidebar.Item
            href="/admin/dashboard"
            icon={HiChartPie}
          >
            <p>
              Dashboard
            </p>
          </FBSidebar.Item>
          <FBSidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            <p>
              Upload Books
            </p>
          </FBSidebar.Item>
          <FBSidebar.Item
            href="/admin/dashboard/manage"
            icon={HiInbox}
          >
            <p>
              Manage Books
            </p>
          </FBSidebar.Item>
          <FBSidebar.Item
            href="#"
            icon={HiUser}
          >
            <p>
              Users
            </p>
          </FBSidebar.Item>
          <FBSidebar.Item
            href="#"
            icon={HiShoppingBag}
          >
            <p>
              Products
            </p>
          </FBSidebar.Item>
          <FBSidebar.Item
            href="/login"
            icon={HiArrowSmRight}
          >
            <p>
              Sign In
            </p>
          </FBSidebar.Item>
          <FBSidebar.Item
            href="/logout"
            icon={HiTable}
          >
            <p>
              Log out
            </p>
          </FBSidebar.Item>
        </FBSidebar.ItemGroup>
        <FBSidebar.ItemGroup>
          <FBSidebar.Item
            href="#"
            icon={HiChartPie}
          >
            <p>
              Upgrade to Pro
            </p>
          </FBSidebar.Item>
          <FBSidebar.Item
            href="#"
            icon={HiViewBoards}
          >
            <p>
              Documentation
            </p>
          </FBSidebar.Item>
          <FBSidebar.Item
            href="#"
            icon={HiSupport}
          >
            <p>
              Help
            </p>
          </FBSidebar.Item>
        </FBSidebar.ItemGroup>
      </FBSidebar.Items>
    </FBSidebar>
  )
}

export default Sidebar