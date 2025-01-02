export interface MenuItem {
  menuid: string;
  menu_name: string;
  menu_order: number;
  menu_component_name: string;
  menu_parent_id: string | null;
  child_menus?: MenuItem[]; // Ensure this matches the JSON structure
  expanded?: boolean; // Used to track if the menu is expanded
}
