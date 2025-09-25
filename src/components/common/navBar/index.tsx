import React from "react";
import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { PropsStack } from "../../../routes";
import { tema } from "../../../styles";
import { SafeContainer, IconButton, IconText } from "./styled";

interface NavItem {
  id: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  route: string;
}

const NavBar = () => {
  const navigation = useNavigation<PropsStack>();
  const route = useRoute();
  const insets = useSafeAreaInsets();

  const navItems: NavItem[] = [
    { id: "home", icon: "home", label: "Início", route: "Home" },
    { id: "map", icon: "map", label: "Mapa", route: "Mapa" },
    {
      id: "checklist",
      icon: "assignment",
      label: "Checklist",
      route: "Checklist",
    },
    { id: "profile", icon: "person", label: "Perfil", route: "Profile" },
  ];

  const shadowStyle = {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 15,
  };

  const handleNavigation = (routeName: string) => {
    if (routeName === "Home" || routeName === "Mapa") {
      navigation.navigate(routeName as "Home" | "Mapa");
    } else {
      console.log(`Tela ${routeName} ainda não implementada`);
    }
  };

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        ...shadowStyle,
      }}
    >
      <SafeContainer bottomInset={insets.bottom}>
        {navItems.map((item) => {
          const isActive = route.name === item.route;

          return (
            <IconButton
              key={item.id}
              onPress={() => handleNavigation(item.route)}
            >
              <MaterialIcons
                name={item.icon}
                size={24}
                color={
                  isActive
                    ? tema.cores.primaria.principal
                    : tema.cores.neutras[400]
                }
              />
              <IconText active={isActive}>{item.label}</IconText>
            </IconButton>
          );
        })}
      </SafeContainer>
    </View>
  );
};

export default NavBar;
