import React from "react";
import { Link } from "react-router-dom";
import { Box, Divider, ListItemText, MenuItem, MenuList } from "@mui/material";

import './Sidebar.style.css';

interface Props {
  
}

const Sidebar:React.FC<Props> = (props) => {
  const SIDEBAR_MENU_ITEMS = [
    {
      "title": "Company Management",
      "icon": "",
      "menu": [
        {
          "title": "Companies",
          "path": "/dashboard/companies",
          "sidebarClass": "sidebar__companies",
        },
        {
          "title": "Mandates",
          "path": "/dashboard/mandates",
          "sidebarClass": "sidebar__mandates",
        },
        {
          "title": "Instruments",
          "path": "/dashboard/instruments",
          "sidebarClass": "sidebar__instruments",
        }
      ]
    },
    {
      "title": "Configurators",
      "icon": "",
      "menu": [
        {
          "title": "Rating Models",
          "path": "/dashboard/config/rating-models",
          "sidebarClass": "sidebar__conf_rating_models",
        },
        {
          "title": "Workflows",
          "path": "/dashboard/config/workflows",
          "sidebarClass": "sidebar__conf_workflows",
        },
        {
          "title": "Document Templates",
          "path": "/dashboard/config/document-templates",
          "sidebarClass": "sidebar__conf_document_templates",
        },
      ]
    },
    {
      "title": "MIS Reports",
      "icon": "",
      "menu": [
        {
          "title": "Credit History",
          "path": "/dashboard/mis-reports/credit-history",
          "sidebarClass": "sidebar__reports_credit_history",
        },
        {
          "title": "Outstanding Credit History",
          "path": "/dashboard/mis-reports/credit-history",
          "sidebarClass": "sidebar__reports_credit_history",
        },
      ]
    },
    {
      "title": "Data Management",
      "icon": "",
      "menu": [
        {
          "title": "Masters",
          "path": "/dashboard/masters",
          "sidebarClass": "sidebar__data_masters",
        },
      ]
    },
    {
      "title": "User Management",
      "icon": "",
      "menu": [
        {
          "title": "Users",
          "path": "/dashboard/users",
          "sidebarClass": "sidebar__users",
        },
        {
          "title": "Roles",
          "path": "/dashboard/roles",
          "sidebarClass": "sidebar__roles",
        },
        {
          "title": "Permissions",
          "path": "/dashboard/permissions",
          "sidebarClass": "sidebar__permissions",
        },
        {
          "title": "Navigations",
          "path": "/dashboard/navigations",
          "sidebarClass": "sidebar__navigations",
        },
      ]
    },
  ];

  return(
    <Box sx={{ height: "100vh", maxWidth: '100%' }}>
      <MenuList className="sidebar">
        {
          SIDEBAR_MENU_ITEMS.map((sidebar, idx) => {
            return (
              <div key={idx}>
                <Box className="sidebar__title">
                  <ListItemText>{sidebar['title']}</ListItemText>
                </Box>
                {
                  sidebar['menu'].map((item, idx) => {
                    return (
                      <Link key={idx} to={item['path']} className={`sidebar__path ${item['sidebarClass']}`}>
                        <MenuItem>
                          <ListItemText>
                              {item['title']}
                          </ListItemText>
                        </MenuItem>
                      </Link>
                    )
                  })
                }
                <Divider />
              </div>
            )
          })
        }
      </MenuList>
    </Box>
  )
}

export default Sidebar;