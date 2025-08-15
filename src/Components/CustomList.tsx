import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CustomCard from "./CustomCard";

interface CustomListItem {
  id: number;
  label: string;
}

interface CustomListProps {
  items: CustomListItem[];
  size: "small" | "large";
  title: string;
  themeType: string;
}

const CustomList: React.FC<CustomListProps> = ({
  items,
  title,
  size,
  themeType,
}) => {
  return (
    <CustomCard title={title} themeType={themeType} size={size}>
      <div>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "transparent",
            maxHeight: 300,
            "& ul": { padding: 0 },
          }}
        >
          <ul>
            {items.map((item) => (
              <ListItem key={item.id}>
                <ListItemText primary={`${item.label}`} />
              </ListItem>
            ))}
          </ul>
        </List>
      </div>
    </CustomCard>
  );
};

export default CustomList;
