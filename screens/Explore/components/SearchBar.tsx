import { Divider, VStack, Box, Input, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ onChangeText }) {
  return (
    <VStack
      my="4"
      space={5}
      maxW="95%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }
    >
      <VStack w="100%" space={5} alignSelf="center">
        <Input
          testID="searchbar-input"
          onChangeText={onChangeText}
          placeholder="Search"
          variant="filled"
          width="100%"
          borderRadius="10"
          py="1"
          px="2"
          borderWidth="0"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>
    </VStack>
  );
}
